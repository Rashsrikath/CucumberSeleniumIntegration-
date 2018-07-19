Feature: Login Feature

Background:
Given The Url of git hub


Scenario: Valid Git Hub User
When user enters Rashsrikath as user name
And user enters Rash@1992 as password
Then User clicks on submit for Git Hub Page


Scenario: InValid Git Hub User
When user enters Rashsri as user name
And user enters abcd as password
Then  User clicks on submit for Sign in Git Hub Page