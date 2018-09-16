# Udacity FeedReader Testing - Project 4

In this project I am given a web-based application that reads RSS feeds. 

The original developer of this application clearly saw the value in testing, they've already included the [Jasmine](http://jasmine.github.io/) files.

Jasmine is a behaivor driven (BDD) testing framework.

BDD puts emphasive on writing specification against user's behavior, these test are small, easy to read, and very basic. 

[Jest](https://jestjs.io/docs/en/getting-started) is test-driven development (TDD), based off of Jasmine,
Jest is becoming more popular especially in the React community.

TDD relies on repetition of the development cycle, once again these test are small, easy to read, and very basic. 
Here is a link to a short tutorial on [Jest](https://jestjs.io/docs/en/getting-started).

# Instructions to accessing and running this project 

1. Go to https://github.com/thenewmona/GWGfeedreadertesting you can either clone or download the file 
2. Open the file, and open the index.html in your browser, then you will scroll to the bottom of the screen to see the test results


# These are the steps that I took to complete given to me by Udacity 

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. I reviewd the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Then I download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. I reviewed  the functionality of the application within my browser.
4. Did more research into what TDD is, and how Jasmine works 
5. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
6. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
7. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
8. Return the `allFeeds` variable to a passing state.
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
10. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
11. Write a new test suite named `"The menu"`.
12. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
13. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
14. Write a test suite named `"Initial Entries"`.
15. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
16. Write a test suite named `"New Feed Selection"`.
17. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
18. No test should be dependent on the results of another.
19. Callbacks should be used to ensure that feeds are loaded before they are tested.
20. Implement error handling for undefined variables and out-of-bound array access.
21. When complete - all of your tests should pass. 
22. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.

# Notes for Reviewer 

*I have compiled all my resources and can be found here **./RESOURCES.md**

*All my notes and contributors can be found here **./NOTES.md**

*Not sure why when you try and run from Github it states that there are no specs 

