const Page = require('./page');

class ContinueClaim extends Page {

  get mobileNumber() { return $('#customerIdentifier'); }
  get captcha() { return $('#recaptcha-anchor'); }
  get submitBtn1() { return $('#claimsSubmit1'); }
  get continueMyExistClaimBtn() { return $('#btnIVREditClaim'); }
  get zipPostalCode() { return $('#billingZipCode'); }
  get dateOfIncident() { return $('#dateOfIncident'); }
  get submitBtn2() { return $('#claimsSubmit2'); }
  get wirelessDeviceYesBtn() { return $('#idCodeAnswer_1Y'); }
  get wirelessDeviceNoBtn() { return $('#idCodeAnswer_1N'); }
  get stopWorkingYesBtn() { return $('#idCodeAnswer_2Y'); }
  get stopWorkingNoBtn() { return $('#idCodeAnswer_2N'); }
  get noThanksContLink() { return $('#authenticateViaCarrierNo'); }

  //File New Claim - Contact Information
  get firstName() { return $('#firstName'); }
  get lastName() { return $('#lastName'); }
  get emailAddress() { return $('#emailAddress'); }
  get confEmailAddress() { return $('#confirmEmailAddress'); }
  get nameListedAcc() { return $('#nameListedOnAccount'); }
  get billingAddress() { return $('#billingAddress'); }
  get zipCode() { return $('#billingPostalCode'); }
  get contactNumber() { return $('#contactNumber'); }
  get dob() { return $('#dateOfBirth'); }
  get authorizedContact(){ return $('#authorizedContact'); }
  get customerAuthentication() { return $('#question0'); }
  get nextBtnFirst() { return $('//a[text()="Next"]'); }
  get nextBtn() { return $('//div[contains(@id,"tab") and @style="display: block;"]//a[text()="Next"]'); }
  get exitAndContLaterLink() { return $('//a[text()="Exit and Continue Later"]'); }

  //File My New Claim - Equipment Claimed
  get equipmentClaimPreviousBtn() { return $('//a[text()="Previous"]'); }
  get noBtn() { return $('//a[text()="No"]'); }
  get yesBtn() { return $('//a[text()="Yes"]'); }

  //File My New Claim - Incident Information
  get desc() { return $('#descriptionOfProblem'); }
  get possessionDuringIncident() { return $('#possessionDuringIncident'); }
  get incidentInfoPreviousBtn() { return $('(//a[text()="Previous"])[2]'); }
  get incidentInfonextBtn() { return $('(//a[text()="Next"])[3]'); }

  //File My New Claim - Payment Information
  get creditCardRadioBtn() { return $('#ivrPaymentOption50006'); }
  get sameAsAccHolderAddRadioBtn() { return $('#paymentAddressSourceBilling'); }
  get cardType() { return $('#accountType'); }
  get cardNumber() { return $('#cardNumber'); }
  get expireMonth() { return $('#expirationMonth'); }
  get expireYear() { return $('#expirationYear'); }
  get cvvCode() { return $('#cvvCode'); }
  get deductConsentAcceptCheckBox() { return $('#deductibleConsentaccept'); }
  get paymentInfoPreviousBtn() { return $('(//a[text()="Previous"])[4]'); }
  get paymentInfoNextBtn() { return $('(//a[text()="Next"])[2]'); }

  //File My New Claim - Delivery Information
  get attention() { return $('#attention'); }
  get sameAsPaymentAdd() { return $('#shippingAddressSourcePayment'); }
  get deliveryInfoNextBtn() { return $('(//a[text()="Next"])[3]'); }

  //File My New Claim - Claims Summary
  get agreeChkBox() { return $('#accept'); }
  get submitFinalBtn() { return $('//a[text()="Submit"]'); }

  constructor() {
    super();
    this.href = '';
    // this.href = '/t-mobile';
    // /assurant/index.aspx
  }

  trait() {
    super.trait(this.href);
  }

  navigate() {
    super.navigate(this.href);
    this.trait();
  }

  continueClaimlogin(username) {
    this.navigate();
    const users = browser.options.users[username];
    const { browserName } = browser.desiredCapabilities;
    super.user = users[browserName];
    this.mobileNumber.setValue(this.user.mobile);
    var wElem = $('//iframe[contains(@src,"recaptcha") and @role]').value;
    browser.frame(wElem);
    this.captcha.click();
    browser.frameParent();
    browser.pause(3000);
    this.submitBtn1.waitForVisible();
    this.submitBtn1.click();
    browser.pause(5000);
    // // this.continueMyExistClaimBtn.waitForVisible();
    // // this.continueMyExistClaimBtn.click();
    // browser.pause(3000);
    this.zipPostalCode.waitForVisible();
    this.zipPostalCode.setValue(this.user.zipCode);
    this.submitBtn2.click();
    browser.pause(3000);
    // this.noThanksContLink.waitForVisible();
    // this.noThanksContLink.click();
    // browser.pause(3000);
  }

  FillContactInfo() {
    const users = browser.options.users['ContactInfo'];
    const { browserName } = browser.desiredCapabilities;
    super.user = users[browserName];
    browser.pause(3000);
    this.customerAuthentication.waitForVisible();
    this.customerAuthentication.setValue(this.user.customerAuthentication);
    browser.pause(5000);
    this.nextBtnFirst.click();
    browser.pause(5000);
    this.firstName.waitForVisible();
    this.firstName.setValue(this.user.firstName);
    this.lastName.setValue(this.user.lastName);
    this.emailAddress.setValue(this.user.emailAddress);
    this.confEmailAddress.setValue(this.user.confEmailAddress);
    // this.nameListedAcc.setValue(this.user.nameListedAcc);
    // this.billingAddress.setValue(this.user.billingAddress);
    // this.zipCode.setValue(this.user.zipCode);
    browser.pause(3000);
    // this.contactNumber.setValue(this.user.contactNumber);
    // this.authorizedContact.selectByVisibleText(this.user.authorizedContact);
    // browser.pause(4000);
    browser.execute('document.getElementById("dateOfBirth").setAttribute("value","10/10/1990")');
    // this.customerAuthentication.waitForVisible();
    // this.customerAuthentication.setValue(this.user.customerAuthentication);
    this.nextBtnFirst.waitForVisible();
    this.nextBtnFirst.click();
    browser.pause(7000);
    // this.yesBtn.waitForVisible();
    // this.yesBtn.click();
  }

  FillEquipmentClaimedInfo() {
    this.nextBtn.waitForVisible();
    this.nextBtn.click();
  }

  FillPaymentInfo() {
    const users = browser.options.users['PaymentInfo'];
    const { browserName } = browser.desiredCapabilities;
    super.user = users[browserName];
    this.creditCardRadioBtn.waitForVisible();
    this.creditCardRadioBtn.click();
    browser.pause(3000);
    this.sameAsAccHolderAddRadioBtn.waitForVisible();
    this.sameAsAccHolderAddRadioBtn.click();
    browser.pause(3000);
    this.cardType.selectByVisibleText(this.user.cardType);
    this.cardNumber.setValue(this.user.cardNumber);
    this.expireMonth.selectByVisibleText(this.user.expireMonth);
    this.expireYear.selectByVisibleText(this.user.expireYear);
    this.cvvCode.setValue(this.user.cvvCode);
    this.deductConsentAcceptCheckBox.click();
    // this.paymentInfoNextBtn.click();
    browser.pause(7000);

  }

  DeliveryOptions(){
    const users = browser.options.users['DeliveryOptions'];
    const { browserName } = browser.desiredCapabilities;
    super.user = users[browserName];
    // this.attention.waitForVisible();
    // this.attention.setValue(this.user.attention);
    browser.pause(3000);
    // this.sameAsPaymentAdd.waitForVisible();
    // this.sameAsPaymentAdd.click();
    // browser.pause(3000);
    this.deliveryInfoNextBtn.waitForVisible();
    this.deliveryInfoNextBtn.click();
    browser.pause(7000);

  }

  claimSummary() {
    this.agreeChkBox.waitForVisible();
    this.agreeChkBox.click();
    browser.pause(3000);
    this.submitFinalBtn.waitForVisible();
    this.submitFinalBtn.click();
    browser.pause(7000);
  }
}

export default new ContinueClaim();
