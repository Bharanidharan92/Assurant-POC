const page = require('../../src/pages/fileClaim.page');

const { Given, When, Then } = require('cucumber');

Given('I have logged in as {string}', (userGroup) => {
  page.login(userGroup.replace(/"/g, ''));
});

When('Fill contact information section details', () => {
  page.FillContactInfo();
});

When('Fill equipment claimed section details', () => {
  page.FillEquipmentClaimedInfo();
});

Then('Fill payment info section details', () => {
  page.FillPaymentInfo();
});
