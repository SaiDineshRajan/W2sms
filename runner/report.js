$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/batch239/ws2ms/src/test/resources/mypack/feature1.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1378592,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "validate site launching",
  "description": "",
  "id": "login;validate-site-launching",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title contains \"Free SMS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 19
    }
  ],
  "location": "Gluecode.method2(String)"
});
formatter.result({
  "duration": 43621158789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Free SMS",
      "offset": 16
    }
  ],
  "location": "Gluecode.method3(String)"
});
formatter.write("title test passed");
formatter.result({
  "duration": 209196903,
  "status": "passed"
});
formatter.match({
  "location": "Gluecode.method4()"
});
formatter.result({
  "duration": 311174471,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "validate login operation",
  "description": "",
  "id": "login;validate-login-operation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter mobile number as \"\u003cx\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter password as \"\u003cy\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click login",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate output for criteria \"\u003cz\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close site",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login;validate-login-operation;",
  "rows": [
    {
      "cells": [
        "x",
        "y",
        "z"
      ],
      "line": 15,
      "id": "login;validate-login-operation;;1"
    },
    {
      "cells": [
        "8977771413",
        "reehana786",
        "all_valid"
      ],
      "line": 16,
      "id": "login;validate-login-operation;;2"
    },
    {
      "cells": [
        "",
        "reehana786",
        "mbno_blank"
      ],
      "line": 17,
      "id": "login;validate-login-operation;;3"
    },
    {
      "cells": [
        "8977771413",
        "",
        "pwd_blank"
      ],
      "line": 18,
      "id": "login;validate-login-operation;;4"
    },
    {
      "cells": [
        "8977771414",
        "reehana786",
        "mbno_invalid"
      ],
      "line": 19,
      "id": "login;validate-login-operation;;5"
    },
    {
      "cells": [
        "8977771413",
        "reehana@786",
        "pwd_invalid"
      ],
      "line": 20,
      "id": "login;validate-login-operation;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1077255,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "validate login operation",
  "description": "",
  "id": "login;validate-login-operation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter mobile number as \"8977771413\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter password as \"reehana786\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click login",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate output for criteria \"all_valid\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 19
    }
  ],
  "location": "Gluecode.method2(String)"
});
formatter.result({
  "duration": 38114122965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8977771413",
      "offset": 24
    }
  ],
  "location": "Gluecode.method5(String)"
});
formatter.result({
  "duration": 1275287583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "reehana786",
      "offset": 19
    }
  ],
  "location": "Gluecode.method6(String)"
});
formatter.result({
  "duration": 1270334015,
  "status": "passed"
});
formatter.match({
  "location": "Gluecode.method7()"
});
formatter.result({
  "duration": 830308479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all_valid",
      "offset": 30
    }
  ],
  "location": "Gluecode.method8(String)"
});
formatter.write("test passed for valid data");
formatter.result({
  "duration": 10445679894,
  "status": "passed"
});
formatter.match({
  "location": "Gluecode.method4()"
});
formatter.result({
  "duration": 2441256332,
  "status": "passed"
});
formatter.before({
  "duration": 715570,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "validate login operation",
  "description": "",
  "id": "login;validate-login-operation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter mobile number as \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter password as \"reehana786\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click login",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate output for criteria \"mbno_blank\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 19
    }
  ],
  "location": "Gluecode.method2(String)"
});
formatter.result({
  "duration": 36764869736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "Gluecode.method5(String)"
});
formatter.result({
  "duration": 244517658,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "reehana786",
      "offset": 19
    }
  ],
  "location": "Gluecode.method6(String)"
});
formatter.result({
  "duration": 438565247,
  "status": "passed"
});
formatter.match({
  "location": "Gluecode.method7()"
});
formatter.result({
  "duration": 304595167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mbno_blank",
      "offset": 30
    }
  ],
  "location": "Gluecode.method8(String)"
});
formatter.write("test passed for blank mobile no");
formatter.result({
  "duration": 10170446092,
  "status": "passed"
});
formatter.match({
  "location": "Gluecode.method4()"
});
formatter.result({
  "duration": 2364075342,
  "status": "passed"
});
formatter.before({
  "duration": 523849,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "validate login operation",
  "description": "",
  "id": "login;validate-login-operation;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter mobile number as \"8977771413\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter password as \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click login",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate output for criteria \"pwd_blank\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 19
    }
  ],
  "location": "Gluecode.method2(String)"
});
formatter.result({
  "duration": 35231311427,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8977771413",
      "offset": 24
    }
  ],
  "location": "Gluecode.method5(String)"
});
formatter.result({
  "duration": 412897505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "Gluecode.method6(String)"
});
formatter.result({
  "duration": 325321247,
  "status": "passed"
});
formatter.match({
  "location": "Gluecode.method7()"
});
formatter.result({
  "duration": 301330558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pwd_blank",
      "offset": 30
    }
  ],
  "location": "Gluecode.method8(String)"
});
formatter.write("test passed for blank passsword ");
formatter.result({
  "duration": 10140935291,
  "status": "passed"
});
formatter.match({
  "location": "Gluecode.method4()"
});
formatter.result({
  "duration": 2072357563,
  "status": "passed"
});
formatter.before({
  "duration": 469246,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "validate login operation",
  "description": "",
  "id": "login;validate-login-operation;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter mobile number as \"8977771414\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter password as \"reehana786\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click login",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate output for criteria \"mbno_invalid\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 19
    }
  ],
  "location": "Gluecode.method2(String)"
});
formatter.result({
  "duration": 35452528922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8977771414",
      "offset": 24
    }
  ],
  "location": "Gluecode.method5(String)"
});
formatter.result({
  "duration": 418163083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "reehana786",
      "offset": 19
    }
  ],
  "location": "Gluecode.method6(String)"
});
formatter.result({
  "duration": 505970063,
  "status": "passed"
});
formatter.match({
  "location": "Gluecode.method7()"
});
formatter.result({
  "duration": 322197863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mbno_invalid",
      "offset": 30
    }
  ],
  "location": "Gluecode.method8(String)"
});
formatter.write("test passed for invalid mobile number ");
formatter.result({
  "duration": 10166191262,
  "status": "passed"
});
formatter.match({
  "location": "Gluecode.method4()"
});
formatter.result({
  "duration": 634617090,
  "status": "passed"
});
formatter.before({
  "duration": 773456,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "validate login operation",
  "description": "",
  "id": "login;validate-login-operation;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter mobile number as \"8977771413\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter password as \"reehana@786\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click login",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate output for criteria \"pwd_invalid\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 19
    }
  ],
  "location": "Gluecode.method2(String)"
});
formatter.result({
  "duration": 36000036127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8977771413",
      "offset": 24
    }
  ],
  "location": "Gluecode.method5(String)"
});
formatter.result({
  "duration": 940260364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "reehana@786",
      "offset": 19
    }
  ],
  "location": "Gluecode.method6(String)"
});
formatter.result({
  "duration": 661557915,
  "status": "passed"
});
formatter.match({
  "location": "Gluecode.method7()"
});
formatter.result({
  "duration": 355833354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pwd_invalid",
      "offset": 30
    }
  ],
  "location": "Gluecode.method8(String)"
});
formatter.write("test passed for invalid password ");
formatter.result({
  "duration": 10265441207,
  "status": "passed"
});
formatter.match({
  "location": "Gluecode.method4()"
});
formatter.result({
  "duration": 2273010321,
  "status": "passed"
});
formatter.uri("E:/batch239/ws2ms/src/test/resources/mypack/feature2.feature");
formatter.feature({
  "line": 1,
  "name": "Logout",
  "description": "",
  "id": "logout",
  "keyword": "Feature"
});
formatter.before({
  "duration": 707770,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "validate logout operation",
  "description": "",
  "id": "logout;validate-logout-operation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "do login with valid data",
  "rows": [
    {
      "cells": [
        "mbno",
        "pwd"
      ],
      "line": 5
    },
    {
      "cells": [
        "8977771413",
        "reehana786"
      ],
      "line": 6
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "do logout",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "home page will be reopened",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 19
    }
  ],
  "location": "Gluecode.method2(String)"
});
formatter.result({
  "duration": 36923212717,
  "status": "passed"
});
formatter.match({
  "location": "Gluecode.method9(DataTable)"
});
formatter.result({
  "duration": 1237311460,
  "status": "passed"
});
formatter.match({
  "location": "Gluecode.method10()"
});
formatter.result({
  "duration": 11313191451,
  "status": "passed"
});
formatter.match({
  "location": "Gluecode.method11()"
});
formatter.write("logout successfull");
formatter.result({
  "duration": 147431255,
  "status": "passed"
});
formatter.match({
  "location": "Gluecode.method4()"
});
formatter.result({
  "duration": 2332695356,
  "status": "passed"
});
});