Feature: Track My Claim

  Scenario: Track my claim T-Mobile
    Given I have logged in track claim as "TrackClaimUser"
    When View my Claim details
    When View my Replacement details
    Then View my Return Instructions
