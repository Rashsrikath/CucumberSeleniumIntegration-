$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("skeleton/GitHubLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Git Hub Login Feature",
  "description": "",
  "id": "git-hub-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Login Scenario",
  "description": "",
  "id": "git-hub-login-feature;login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters the \u003cUsername\u003e as user name",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters the \u003cPassword\u003e as password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Click on the SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User navigates to \u003cresult\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "git-hub-login-feature;login-scenario;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "result"
      ],
      "line": 17,
      "id": "git-hub-login-feature;login-scenario;;1"
    },
    {
      "cells": [
        "Rashsrikath",
        "Rash@1992",
        "Git Hub"
      ],
      "line": 18,
      "id": "git-hub-login-feature;login-scenario;;2"
    },
    {
      "cells": [
        "Manishachand",
        "Shiya@888",
        "Git Hub"
      ],
      "line": 19,
      "id": "git-hub-login-feature;login-scenario;;3"
    },
    {
      "cells": [
        "ShilpaKumarashan",
        "Testing@12",
        "Sign In Git Hub"
      ],
      "line": 20,
      "id": "git-hub-login-feature;login-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The Url of git hub",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.the_Url_of_git_haub()"
});
formatter.result({
  "duration": 18612528896,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login Scenario",
  "description": "",
  "id": "git-hub-login-feature;login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters the Rashsrikath as user name",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters the Rash@1992 as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Click on the SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User navigates to Git Hub",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Rashsrikath",
      "offset": 16
    }
  ],
  "location": "Stepdefs.user_enters_Rashsrikath_as_user_name(String)"
});
formatter.result({
  "duration": 313134650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rash@1992",
      "offset": 16
    }
  ],
  "location": "Stepdefs.user_enters_Rash_as_password(String)"
});
formatter.result({
  "duration": 94712157,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.user_Click_on_the_SignIn()"
});
formatter.result({
  "duration": 2884736995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Git Hub",
      "offset": 18
    }
  ],
  "location": "Stepdefs.user_navigates_to_result(String)"
});
formatter.result({
  "duration": 25527073,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.close_the_Browser()"
});
formatter.result({
  "duration": 1622393938,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The Url of git hub",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.the_Url_of_git_haub()"
});
formatter.result({
  "duration": 14891486518,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login Scenario",
  "description": "",
  "id": "git-hub-login-feature;login-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters the Manishachand as user name",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters the Shiya@888 as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Click on the SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User navigates to Git Hub",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Manishachand",
      "offset": 16
    }
  ],
  "location": "Stepdefs.user_enters_Rashsrikath_as_user_name(String)"
});
formatter.result({
  "duration": 146801608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shiya@888",
      "offset": 16
    }
  ],
  "location": "Stepdefs.user_enters_Rash_as_password(String)"
});
formatter.result({
  "duration": 119396946,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.user_Click_on_the_SignIn()"
});
formatter.result({
  "duration": 2573457089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Git Hub",
      "offset": 18
    }
  ],
  "location": "Stepdefs.user_navigates_to_result(String)"
});
formatter.result({
  "duration": 8404291,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.close_the_Browser()"
});
formatter.result({
  "duration": 919072284,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The Url of git hub",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.the_Url_of_git_haub()"
});
formatter.result({
  "duration": 11532250108,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login Scenario",
  "description": "",
  "id": "git-hub-login-feature;login-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters the ShilpaKumarashan as user name",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters the Testing@12 as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Click on the SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User navigates to Sign In Git Hub",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ShilpaKumarashan",
      "offset": 16
    }
  ],
  "location": "Stepdefs.user_enters_Rashsrikath_as_user_name(String)"
});
formatter.result({
  "duration": 160764836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing@12",
      "offset": 16
    }
  ],
  "location": "Stepdefs.user_enters_Rash_as_password(String)"
});
formatter.result({
  "duration": 106922282,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.user_Click_on_the_SignIn()"
});
formatter.result({
  "duration": 2358027614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In Git Hub",
      "offset": 18
    }
  ],
  "location": "Stepdefs.user_navigates_to_result(String)"
});
formatter.result({
  "duration": 13100417,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.close_the_Browser()"
});
formatter.result({
  "duration": 831174210,
  "status": "passed"
});
});