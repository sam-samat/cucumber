$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/google.feature");
formatter.feature({
  "name": "Google verification",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@google"
    }
  ]
});
formatter.background({
  "name": "User goes to google",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User goes to google",
  "keyword": "When "
});
formatter.match({
  "location": "Google_steps.user_goes_to_google()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "google search page title verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@google"
    },
    {
      "name": "@google1"
    }
  ]
});
formatter.step({
  "name": "User searches for \"bags\" on Google",
  "keyword": "And "
});
formatter.match({
  "location": "Google_steps.user_searches_for_on_Google(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User needs to see \"bags\" in the title page",
  "keyword": "Then "
});
formatter.match({
  "location": "Google_steps.user_needs_to_see_in_the_title_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User goes to google",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User goes to google",
  "keyword": "When "
});
formatter.match({
  "location": "Google_steps.user_goes_to_google()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "google results page verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@google"
    },
    {
      "name": "@google2"
    }
  ]
});
formatter.step({
  "name": "User searches for \"clocks\" on google",
  "keyword": "And "
});
formatter.match({
  "location": "Google_steps.user_searches_for_on_google(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should get \"clocks\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "Google_steps.user_should_get_in_the_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});