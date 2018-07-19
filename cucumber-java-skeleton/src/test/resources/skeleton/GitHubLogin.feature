Feature:Git Hub Login Feature

Background:
Given The Url of git hub 

@Regression
Scenario Outline: Login Scenario
When user enters the <Username> as user name
And user enters the <Password> as password
And User Click on the SignIn
Then User navigates to <result>
Then Close the Browser



Examples:
|Username|Password|result|
|Rashsrikath|Rash@1992|Git Hub|
|Manishachand|Shiya@888|Git Hub|
|ShilpaKumarashan|Testing@12|Sign In Git Hub|
