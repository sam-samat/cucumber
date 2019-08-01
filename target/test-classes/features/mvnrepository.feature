@mvnrepo
  Feature: search results verification
    User Story US45
    @test1
    Scenario: mvn "cucumber java" search result verification
      Given User is on mvnrepository website
      When User searches for "cucumber java"
      Then User should see "cucumber java" in title