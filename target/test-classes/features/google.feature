@google
Feature: Google verification

  Background: User goes to google
    When User goes to google

  @google1
  Scenario: google search page title verification
    And User searches for "bags" on Google
    Then User needs to see "bags" in the title page

  @google2
  Scenario: google results page verification
    And User searches for "clocks" on google
    Then user should get "clocks" in the title

