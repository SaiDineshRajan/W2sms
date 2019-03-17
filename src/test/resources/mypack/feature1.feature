Feature:Login
Scenario: validate site launching
Given launch site using "chrome"
Then title contains "Free SMS"
And close site
Scenario Outline: validate login operation
Given launch site using "chrome"

When enter mobile number as "<x>"
And enter password as "<y>"
And click login
Then Validate output for criteria "<z>"
And close site
Examples:
|      x     |      y         |          z      |
|8977771413  |reehana786      |all_valid				|
|						 |reehana786      |mbno_blank				|
|8977771413  |					      |pwd_blank				|
|8977771414  |reehana786      |mbno_invalid			|
|8977771413  |reehana@786     |pwd_invalid			|

