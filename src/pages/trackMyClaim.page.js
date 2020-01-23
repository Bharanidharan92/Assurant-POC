const Page = require('./page');

class TrackMyClaim extends Page {

  get mobileNumber() { return $('#customerIdentifier'); }
  get captcha() { return $('#recaptcha-anchor'); }
  get submitBtn1() { return $('#claimsSubmit1'); }
  get trackMyClaimBtn() { return $('#btnCheckClaim'); }
  get fileMyClaimBtn() { return $('#btnFileClaim'); }
  get zipCode() { return $('#billingZipCode'); }
  get submitBtn2() { return $('#claimsSubmit2'); }
  get myClaimDetails() { return $('//a[text()="My Claim Details"]'); }
  get myReplacemenetDevice() { return $('//a[text()="My Replacement Device"]'); }
  get myReturnInstruction() { return $('//a[text()="My Return Instructions"]'); }

  constructor() {
    super();
    // this.href = '';
    this.href = '/t-mobile';
    // /assurant/index.aspx
  }

  trait() {
    super.trait(this.href);
  }

  navigate() {
    super.navigate(this.href);
    this.trait();
  }

  loginTrackClaim(username) {
    this.navigate();
    const users = browser.options.users[username];
    const { browserName } = browser.desiredCapabilities;
    super.user = users[browserName];
    this.mobileNumber.setValue(this.user.mobile);
    var wElem = $('//iframe[contains(@src,"recaptcha") and @role]').value;
    browser.frame(wElem);
    this.captcha.click();
    // this.password.setValue(this.user.password);
    browser.frameParent();
    browser.pause(6000);
    this.submitBtn1.waitForVisible();
    this.submitBtn1.click();
    browser.pause(5000);
    this.trackMyClaimBtn.waitForVisible();
    this.trackMyClaimBtn.click();
    browser.pause(3000);
    this.zipCode.waitForVisible();
    this.zipCode.setValue(this.user.zipCode);
    this.submitBtn2.click();
    browser.pause(7000);
  }

  claimDetails() {
    this.myClaimDetails.waitForVisible();
    browser.pause(7000);
  }

  replacementDevice() {
    this.myReplacemenetDevice.waitForVisible();
    this.myReplacemenetDevice.click();
    browser.pause(7000);
  }

  returnInstruction() {
    this.myReturnInstruction.waitForVisible();
    this.myReturnInstruction.click();
    browser.pause(7000);
  }


}

export default new TrackMyClaim();
