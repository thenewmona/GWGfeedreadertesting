/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

// All Resources used are listed in the README file
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    "use strict";
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    // Test suite for RSS feed variable
    describe('RSS Feeds', function() {
      /* This is our first test - it tests to make sure that the
       * allFeeds variable has been defined and that it is not
       * empty. Experiment with this before you get started on
       * the rest of this project. What happens when you change
       * allFeeds in app.js to be an empty array and refresh the
       * page?
       */
        // Check if allFeeds variable is defined and not empty
        it('valid', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test Written: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        // Check if url property is defined
        it('url is defined', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('',null, 0);
                expect(feed.url.length).not.toBe(0);
            }
        });

        /* Test Written: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        // Check if name property is defined
        it('name is defined', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('', 0, null);
                expect(feed.name.length).not.toBe(0);
            }
        });

    });
  /* Test Written: Write a new test suite named "The menu" */
    // Test suite for the apps menu functionality
    describe('The Menu', function() {
      /* Test Written: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
       // Checked the html to find the class of the menu which is 'hidden-menu' and how the menu function is run
        it('is menu hidden by default', function() {
            let body = document.querySelector('body');
          // Corrected from reviewer feedback
          // expect(body.classList.contains('menu-hidden')).toBe(true);
            expect(body.classList).toContain('menu-hidden');
            });
        /* Test Written: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        // Tests if menu clicks on/off
        it('visibility changes when clicked', function() {
            let menuIcon = document.querySelector('.menu-icon-link');
            let body = document.querySelector('body');
            menuIcon.click();
            expect(body.classList).not.toContain('menu-hidden');
            menuIcon.click();
            expect(body.classList).toContain('menu-hidden');
        });
    });

/* Test Written: Write a new test suite named "Initial Entries" */
    // Test for initial load of feed
    describe('Initial Entries', function() {

      /* Test Written: Write a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed feed.
       * Remember, loadFeed() is asynchronous so this test will require
       * the use of Jasmine's beforeEach and asynchronous done() function.
       */
       // Load feed and use done function to make sure test is run after the feed is loaded.

        beforeEach(function(done) {
            loadFeed(0, done);
        });


        // Check that when loaded there is content
        it('the feed loads', function() {
            let feed = document.querySelector('.feed');
            let contentLength = document.querySelector('.feed').getElementsByClassName('entry').length;
            expect(contentLength).toBeGreaterThan(0);
        });
    });

/* Test Written: Write a new test suite named "New Feed Selection" */
    // Test for loading new content after initial load
    describe('New Feed Selection', function() {

// Based on the feedback from the reviewer, I followed the code as recommended and changed the variables so they are defined first and then called after the feeds load.
      var oldFeed, newFeed;
        // Load feed 1 and see if it changes when you load feed 2
        beforeEach(function(done) {
            // Load first feed
            loadFeed(0, function(){
              oldFeed = $('.feed').html();
              // load second feed
                loadFeed(1, function(){
                  newFeed = $('.feed').html();
                  done();
              });
            });
        });
        // Compare first feed against new feed
        it('the first feed is not new feed content', function() {
                expect(newFeed).not.toBe(oldFeed);
                expect(newFeed !== oldFeed).not.toBe(false);
                expect(newFeed !== oldFeed).toBe(true)
              });
          });
      }());

//Old Code

//let feed = document.querySelector('.feed');
//let firstFeed = [];

// Load feed 1 and see if it changes when you load feed 2
//beforeEach(function(done) {

    // Load first feed
  //  loadFeed(0);

    // First feed put in array
    //Array.from(feed.children).forEach(content => {
      //  firstFeed.push(content.innerText);
  //  });


    /* Test Written: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
    // Load feed
    //loadFeed(1, done);
//});


// Compare first feed against new feed content
//it('the first feed changes to the new feed content', function() {
  //  Array.from(feed.children).forEach( (content, index) => {
    //    expect(content.innerText !== firstFeed[index]).not.toBe(false);
      //  expect(content.innerText !== firstFeed[index]).toBe(true);
    //});
//});
//});

//}());

// Second Resubmission feedback to change className to classList
//This was a tricky one. There was a small mistake that you are doing here. Let me explain what's going wrong here.

//body.className is going to return a string containing all the classes separated by space 'menu-hidden' in this case.
//expect(body.className).not.toContain('menu-hidden'); this line will try to match if there is 'menu-hidden' inside the string (substring matching) return by the .className which will going to match and your test case will pass.
//Now try changing the class name in the body tag to be something like this <body class='awesome-menu-hidden'>(for visualization go to index.html and simply change ) and try running the test case. The test case will still pass because menu-hidden is a substring of awesome-menu-hidden, but the test should fail in this case.
//What you can do to fix this is simple, Just replace className by classList.
//classList will return the list of all the classes applied to the element in an array (['menu-hidden'] in this case) and now the toContain method will try to find whether 'menu-hidden' is in the array or not.
//Since now the array is being used if you try changing the class to 'awesome-menu-hidden' the classList will return ['awesome-menu-hidden'] and since the toContain method is now looking for 'menu-item' inside an array it will work correctly.
//What is happening in your code. Assuming that I've changed the class name in the body tag to 'awesome-menu-hidden'

//expect(body.className).not.toContain('menu-hidden');
/* Let's go step by step and take a look at the code from the perspective of the functions.
1. expect: Hmmm body.className has given me a string which is "awesome-menu-hidden".
2. expect: Okay let's take this string and pass it forward to .not.toContain.
3. .not.toContain: My friend expect gave me a string and it asked me to find whether it contains 'menu-hidden' in it or not. Okay since I have a string substring matching will be the way to go.
4. .not.toContain: Okay so the string expect gave me was 'awesome-menu-hidden'.............  Aha!!! I've found it there is a 'menu-hidden' here so I'll return false.
*/
/* What should happen. Assuming that I've changed the class name in the body tag to 'awesome-menu-hidden'

expect(body.classList).not.toContain('menu-hidden');
/* Let's go step by step and take a look at the code from the perspective of the functions.
1. expect: Hmmm body.classListhas given me an array which is ["awesome-menu-hidden"].
2. expect: Okay let's take this array and pass it forward to .not.toContain.
3. .not.toContain: My friend expect gave me an array and it asked me to find whether it contains 'menu-hidden' in it or not. Okay since I have an array I just simply have to iterate over the array element and see whether any element is equal to 'menu-hidden' or not.
4. .not.toContain: Okay so the array expect gave me was ['awesome-menu-hidden'].............  Nope there is no 'menu-hidden' in the array so i'll return a true here.
*/

# Welcome to the Feed(er) Reader Project
The feed reader is used to build tests to make sure the code is doing what it is supposed to. I had some trouble in determining what the most comprehensive, meaningful tests would be without going into overkill mode.

This is my second submission and I fixed the last test based on the reviewer notes.

# Installation/Getting Started
To get started unzip the files and start poking around in the javascript files in the Jasmine folder while loading the index.html file in your browser. You can edit the code as needed using the tests created. The testing is created with Jasmine ([Jasmine](https://jasmine.github.io/) - The testing framework used).

# Resources
Udacity provided a bulk of the starter code and provided instructions on what to test. I used their first test and lesson 21 and 22 in the third section as the primary examples. In addition I relied heavily on the following resources:

Lesson 22 - How do I run Jasmine with Gulp? (PhantomJS suspended) written by @Rachel [FEND]
How to setup a workflow with Gulp - Gulp for Beginners | CSS-Tricks shared by @CL Mason
from Udacity Forum: Search results for posts containing 'feedreader'
search items related to Project_4 using Knowledge Tool available in Classroom
Webinar: Feed Reader (P4) Walkthrough conducted by @RyanB[FEND] - YouTube
Chat archives + Audio from Webinar: P4 Walkthrough conducted by @RyanB[FEND]
Feed Reader Walkthrough, Part 1 – Starter Code – Matthew Cranford
Feed Reader Walkthrough, Part 2 – Writing the First Tests – Matthew Cranford
Feed Reader Walkthrough, Part 3 – Menu Test Suite – Matthew Cranford
Feed Reader Walkthrough, Part 4 – Async Tests – Matthew Cranford
Collection of Feed Reader Testing supplemental resources curated by @Crystal - Google Sheets
EMEA Feed Reader Testing (Alain - Updated) Walk-thru - YouTube
EMEA student Daniela Küster has helped us out by sharing these resources produced by EMEA students
EMEA Feed Reader (Mohamed) Walk-thru - YouTube
EMEA student Daniela Küster has helped us out by sharing these resources produced by EMEA students

I used the feedback from the reviewer, and the code example that he provided to rebuild the last test.