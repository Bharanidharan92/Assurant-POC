const page = require('../../src/pages/trackMyClaim.page');

const { Given, When, Then } = require('cucumber');

Given('I have logged in track claim as {string}', (TrackClaimUser) => {
  page.loginTrackClaim(TrackClaimUser.replace(/"/g, ''));
});

When('View my Claim details', () => {
  page.claimDetails();
});

When('View my Replacement details', () => {
  page.replacementDevice();
});

Then('View my Return Instructions', () => {
  page.returnInstruction();
});
