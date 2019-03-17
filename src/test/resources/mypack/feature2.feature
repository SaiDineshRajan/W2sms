Feature:Logout
Scenario: validate logout operation
Given launch site using "chrome"
When do login with valid data
|   mbno    |    pwd     |
|8977771413 |reehana786  |
And do logout
Then home page will be reopened
And close site