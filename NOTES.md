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