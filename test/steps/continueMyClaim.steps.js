const page = require('../../src/pages/continueMyClaim.page');

const { Given, When, Then } = require('cucumber');

Given('I have logged in continue claim as {string}', (userGroup) => {
  page.continueClaimlogin(userGroup.replace(/"/g, ''));
});

When('Fill contact information section details for Continue Claim', () => {
  page.FillContactInfo();
});

When('Fill equipment claimed section details for Continue Claim', () => {
  page.FillEquipmentClaimedInfo();
});

Then('Fill payment info section details for Continue Claim', () => {
  page.FillPaymentInfo();
});

Then('Fill the delivery options details for Continue Claim', () => {
  page.DeliveryOptions();
});

Then('View and Submit the Claim Summary for Continue Claim', () => {
  page.claimSummary();
});
