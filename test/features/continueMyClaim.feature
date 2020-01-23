Feature: Continue My File Claim

  Scenario: Continue my claim T-Mobile
    Given I have logged in continue claim as "ContinueClaimUser"
    When Fill contact information section details for Continue Claim
    Then Fill payment info section details for Continue Claim
    Then Fill the delivery options details for Continue Claim
    Then View and Submit the Claim Summary for Continue Claim