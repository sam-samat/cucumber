@smoke
Feature: Amazon verification
  User Story US66
  #comments go here using this sign
  @amazon1
  Scenario: Amazon title verification
    When User is on Amazon application
    Then User should see Amazon in title
    And User searches for something on Amazon

  @amazon2
  Scenario: Amazon search verification
    When User is on Amazon application

