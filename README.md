# bunchtask

**Test Framework**
Functional Test Automation using Playwright Framework.(https://github.com/microsoft/playwright) which is used for end to end automation testing of modern web applications like Bunch.

My Task tests are present in the bunchTest folder

i.e. bunch.spec.js file (Please see this folder to see my implemented test cases)

Before running the Tests please make sure you have the required node modules. If not then install it using these steps as mentioned here. (https://playwright.dev/docs/intro)

# Test Cases

**Test Case 1**

Test Scenario : To open the application URL and verify the header/title of the application is visible or present

Test Steps - 

1) The user navigates to the web application.
2) The user checks if the header is present on the bunch application.

**Test Case 2**

Test Scenario : To open the Bunch web application and click all the article tiles alternatively, search and navigate throughout the application.

Test Steps - 

1) The user navigates to the web application.
2) The user Clicks the General Tile and verify the navigated page.
3) The user enter searchInput on the General page.
4) Clicks the first result from the list of the General Article to view.
5) The user navigates to Homepage.
6) The user Clicks the Angel Tile and verify the navigated page to Angel Articles.
7) The user enters the searchInput on the Angel page.
8) The user selects the first results from the searched list.
9) The user again enters other searchInput on the Angel page.
10) The user selects the second result from the searched list.
11) The user checks and verify if navigated to the search results.
12) The user navigates second time to Homepage.
13) The user clicks the syndicate tile on the homepage and verify the navigated URL.
14) Selects the searchInput on the syndicate page.
15) The user verify and check the navigated url of the searchedInput.
16) The user navigates third time to Homepage.
17) The user clicks the funds tile on the homepage and verify the navigated URL.

 .............. Test Ends ............................


 # How to run the test and see reports..

 Go into PlaywrightBunch folder through the terminal and execute this command below to run in the headed mode to see the GUI : 
 
 - npx playwright test --headed

 Go into PlaywrightBunch folder through the terminal and execute this command below to run in the headless mode : 
 
 - npx playwright test

 Go into PlaywrightBunch folder through the terminal and execute this command below to view the html report :

 - npx playwright show-report

 # Browser used

 - Chrome


Thanks.................