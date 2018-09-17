9/10/2018 Did a zoom meeting with Racheal and Sonam and she went over with us on how we should set up our test, and somethings that the reviewer pointed out to her in her review 
she pointed out to use that we should use strict mode in our test

9/14/2018
Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.
Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.
    at http://127.0.0.1:5500/jasmine/lib/jasmine-2.1.2/jasmine.js:1783:23

    Expected 0 to be greater than 0.
Error: Expected 0 to be greater than 0.
    at stack (http://127.0.0.1:5500/jasmine/lib/jasmine-2.1.2/jasmine.js:1442:17)
    at buildExpectationResult (http://127.0.0.1:5500/jasmine/lib/jasmine-2.1.2/jasmine.js:1419:14)
    at Spec.expectationResultFactory (http://127.0.0.1:5500/jasmine/lib/jasmine-2.1.2/jasmine.js:533:18)
    at Spec.addExpectationResult (http://127.0.0.1:5500/jasmine/lib/jasmine-2.1.2/jasmine.js:293:34)
    at Expectation.addExpectationResult (http://127.0.0.1:5500/jasmine/lib/jasmine-2.1.2/jasmine.js:477:21)
    at Expectation.toBeGreaterThan (http://127.0.0.1:5500/jasmine/lib/jasmine-2.1.2/jasmine.js:1371:12)
    at Object.<anonymous> (http://127.0.0.1:5500/jasmine/spec/feedreader.js:110:25)
    at attemptSync (http://127.0.0.1:5500/jasmine/lib/jasmine-2.1.2/jasmine.js:1760:24)
    at QueueRunner.run (http://127.0.0.1:5500/jasmine/lib/jasmine-2.1.2/jasmine.js:1748:9)
    at http://127.0.0.1:5500/jasmine/lib/jasmine-2.1.2/jasmine.js:1772:16

    after reading https://www.jstwister.com/post/unit-testing-beginners-guide-spying-fake-timers/
    I added done to line 130 and this fixed the async callback issue 

    fixed second error message by going back over the code and realized that I forgot a . 
    added a . on on line 131 , all test finally passed  

    commented out line 18 even though I did not write a test for name, just to see what happens 
    all test still passed but I got a message 
    SPEC HAS NO EXPECTATIONS content change and now I can't get rid of it 
    it is not an error per say 

    /* 
       
   * check line 20 of HTML menu is set to hidden 
   * check notes on line 72 -75 of normalize CSS for hidden attribute also 
   */


    9/15/2018
    Installed Jest , Not sure if it is user or document but it does not seem very intuaitive 
    following the instructions from https://jestjs.io/ I have everything installed
    Not sure how much I want to play around with it since I am so far behind 
    i know it exist and I can come back to it later 
    Still need to fix the SPEC expectations issue 

    9/16/2018
    Got my review back and have a few things to change 
    1. Please remove TODO keyword and reword comments. You can remove comments completely if the code is self-explanatory
    2. You missed one of the requirements. Please ensure that the feed name is defined and the length greater than 0 as you have done for url(Have a look at this stackoverflow post for advance URL validation)
    3. All menu related it() blocks should be within this describe() block. Remember that describe block is describing what test suite you running.
    In this case:
    menu hides by default
    menu changes visability when clicked
    Please move those 2 it() blocks into this describe block
    4.Again please move all Initial Entries related it() blocks to this describe block
    Also, this assertion is completely unnecessary true always be true. There is no way you can fail it. And if you can not fail it, you are not testing anything
    5.This test ensures that there is at least one .entry in DOM. 😊
    According to the rubric for this project, the test should ensure that there is at least one .entry within .feed container.
    Also, move this it() block and beforeEach into "Initial Entries" describe block
     💡 Hint:
    $('.parent .child').length
    6.This it() is empty. Please remove it.
    7.Great job personalizing your Readme file. However, you could expand a bit on this. To the user who never run any source code on their PC, this may not be enough

   💡Hint:
   How do I open your project in a browser?

   Download zip or clone ...
   Navigate to ...
   Open ...
   There are many ways to write readme files but from my experience as a software developer, the readme file should not include your reflections or opinions about the project. You could write these in NOTES.md.

  Think of readme as manual pages for your project.

 Description: First, you want to describe what is this project about and why would someone want to have a look at it.
 Requirments: Then what user needs to get it up and running on their PC (internet connection?, browser,? node.js? ); How did you get it up and running?
 Instruction How would the user go about opening your app.
 How to contribute (Optional): you may be working on open source project and would love to have someone contributing. What would the rules be?
 Credits Did you use someone else's code? Give them a shout-out (StackOverflow, mdn, w3school, jasmine)
 writing-readmes

 //  
    //created allFeeds into an empty aray on line 10 of apps.js and recived 2 failures,
    // both stating that allFeeds is not defined 
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     * removed the url object and test failed 
     * First test comes from Devhints.io/jamine cheatsheet 
     * use sctrict mode - recommended by Sonam from her review
     */

     9/16/2018 had issues with order of the test. Lindsay Ciastko saw that I had a {} issues recommended that I move them from line 40 to line 128, it resovled both my SPEC issue and my order issue 
     Ready to submit again 

     deleted this from my code , Rewrote the New Feed Selection and now my SPEC issue is gone 
     // describe('New Feed Selection', function () {

//   it('the content changes', function () {
//     let firstFeedList;   
//     beforeEach(function (done) {
//       loadFeed(0, function () {
//        firstFeedList =  ('.feed').html();       
//         loadFeed(1, function () {
//           done();       
//         });
//       });     
//     });

//       it('the feed changes', function (done) {

//         let secondFeedList = ('.feed').html();        
//         expect(firstFeedList).not.toBe(secondFeedList);
//         done();
//       });

9/17/2018

Just got my feedreader back again 

This is not comprehensive enough.
As mentioned in the previous review, the test is to check for at least 1 entry in container feed and your code checks for entry to be more than one, rather than checking if its inside container feed or not!
:bulb: Hint:
Use the parent-child relationship to write tests!

expect($(".parent .child") ----> expect($('.feed .entry)

I think I am now understanding, added what he wanted, I am just trying to figure out how to test it
Went through the DOM and found the child, and where it is in  the HTML, but I think those stupid handlebars are throwing me off.

`<script class="tpl-entry" type="text/x-handlebars-template">
            <a class="entry-link" href="{{link}}">
                <article class="entry">
                    <h2>{{title}}</h2>
                    <p>{{contentSnippet}}</p>
                </article>
            </a>
        </script>`
If i just comment out `<h2>{{title}}</h2>`, this should make my test fail, but it isn't
So I am having an issue understanding how to make this fail so that I know that the test is working correctly 