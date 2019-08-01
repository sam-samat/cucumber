$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/test.feature");
formatter.feature({
  "name": "Amazon verification",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Amazon title verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@amazon1"
    }
  ]
});
formatter.step({
  "name": "User is on Amazon application",
  "keyword": "When "
});
formatter.match({
  "location": "Amazon_Steps.user_is_on_Amazon_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Amazon in title",
  "keyword": "Then "
});
formatter.match({
  "location": "Amazon_Steps.user_should_see_Amazon_in_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User searches for something on Amazon",
  "keyword": "And "
});
formatter.match({
  "location": "Amazon_Steps.user_searches_for_something_on_Amazon()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat steps.Amazon_Steps.user_searches_for_something_on_Amazon(Amazon_Steps.java:25)\n\tat ✽.User searches for something on Amazon(src/test/resources/features/test.feature:8)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Amazon search verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@amazon2"
    }
  ]
});
formatter.step({
  "name": "User is on Amazon application",
  "keyword": "When "
});
formatter.match({
  "location": "Amazon_Steps.user_is_on_Amazon_application()"
});
formatter.result({
  "status": "passed"
});
});