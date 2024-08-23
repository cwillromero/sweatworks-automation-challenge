# Web Automation Framework

## Description
This Web Automation Framework is created with Cypress.

The objective of the framework is to reduce the test time effort and give a quickest feedback when a smoke test or regression test needs to be executed.

## Requirements to run/open the tests
- Install node js
- Have the .env file in the root directory

## Structure
```
├───cypress/
│   ├───fixtures/
│   ├───e2e/
│   └───support/
│       ├───page_object/
├───results/
├───.env
└───cypress.config.js
```
- **fixtures/** contains static data files used in the tests, such as JSON files for test data.
- **e2e/** contains all the tests for the website.
- **page_object/** contains the locators and actions of each page.
- **results/** contains the xml files that each .spec file generates when tests are run. tests run.
- **.env** contains the credentials for log in.
- **cypress.config.js** contains the cypress configuration.

## Installation
Once the repository is cloned, in the command line paste the following command: 
```
npm install
```

## Configuration of .env file
To manage user credentials for testing, we use environment variables stored in a `.env` file. This file should contain the following variables:

- `SAUCE_USERNAME`: The username for the test user.
- `SAUCE_PASSWORD`: The password for the test user.

#### Example `.env` File

```
# Credentials for standard_user
SAUCE_USERNAME="standard_user"
# Credentials for problem_user
#SAUCE_USERNAME="problem_user"

SAUCE_PASSWORD="############"
```

### Switching Users

To test with different users, update the `SAUCE_USERNAME` variable in the `.env` file:

- **For `standard_user`**:
  ```
  SAUCE_USERNAME="standard_user"
  ```

- **For `problem_user`**:
  ```
  SAUCE_USERNAME="problem_user"
  ```
Ensure that only one username is uncommented at a time to avoid conflicts.

## Usage
### Run All Tests in a specific browser
```
npm run cy:run -- --browser [browser]
```

Cypress supports the following browsers:
 - electron
 - chrome
 - chromium
 - edge
 - firefox (tests won't work in firefox)

 If no browser is set, the default "electron" will be used.

### Open All Tests
```
npm run cy:open
```

## Notes:
- The .env file is included here since it's a demo website.
- Cypress does not provide an option to disable web security for Firefox. This limitation arises from the way Firefox enforces web security and the same-origin policy, which cannot be bypassed by Cypress. As all tests in this suite access saucedemo.com, which requires bypassing web security, they will not work in Firefox.