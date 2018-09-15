# Project Overview

In this project I am given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/).
Jasmine is a behaivor driven (BDD) testing framework.
BDD puts emphasive on writing specification against user's behavior, these test are small, easy to read, and very basic. 
[Jest](https://jestjs.io/docs/en/getting-started) is test-driven development (TDD), based off of Jasmine Jest is becoming more popular especially in the React community.
TDD relies on repetition of the development cycle, once again these test are small, easy to read, and very basic. 
Here is a link to a short tutorial on [Jest](https://jestjs.io/docs/en/getting-started).

## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as ["test-driven development"](https://technologyconversations.com/2013/12/20/test-driven-development-tdd-example-walkthrough/) and ["behavior-driven development"](https://technologyconversations.com/category/behavior-driven-development-bdd/)
My husband is a quality engineer, and I have been in support role for most of my IT career.
Over the years with both of our jobs we have seen a trend growing of testing to pass, instead of testing to fail. 
Coming from the Automotive industry, this is not a practice that can be done anymore, but still is, it is seen everyday with every recall that it made. 

## What I learned

Through this process I learned more about development testing, the different testing frameworks that are out there.
I decided to not only do this project in Jasmine, but also in Jest. 
Unfortunately the Jest testing did not quiet work the way I  think it should have. 
You will learn how to use Jasmine to write a number of tests against a pre-existing application. 
These will test the underlying business logic of the application as well as the event handling and DOM manipulation.
AS stated TDD testing works on repetition, since the project given to use by Udacity was pre-existing it was hard to do a true TDD.

## How will this help my career?

*Writing and testing your software is crucial for a good reliable product 
*This will not only give you confidence in what you are doing as developer. Who didn't feel better after they saw all that green :)
*It will also give other confidence in you as developer , which in return means job security
*I think most of us can agree that at the beginning of the year we did not see ourselves here. 
*We do not know where these new found skills are going to take us, but if you start with the mindset that what you are doing is going making a difference in someone's life.
TEST!! start the habit now.
*Because one day your software may even save someone's life, or take it away!!! 


# These are the steps that I took to complete given to me by Udacity 

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the `allFeeds` variable to a passing state.
8. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named `"The menu"`.
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named `"Initial Entries"`.
14. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Write a test suite named `"New Feed Selection"`.
16. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. No test should be dependent on the results of another.
18. Callbacks should be used to ensure that feeds are loaded before they are tested.
19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass. 
21. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.

I have compiled all my resources and can be found here **./RESOURCES.md**
All my notes and contributors can be found here **./NOTES.md**