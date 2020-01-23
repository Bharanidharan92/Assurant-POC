Feature: File Claims

  Scenario: File my claim T-Mobile
    Given I have logged in as "UserGroup"
    When Fill contact information section details
    When Fill equipment claimed section details
    Then Fill payment info section details
    Then Fill the delivery options details
    Then View and Submit the Claim Summary
