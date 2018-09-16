/* feedreader.js*/

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 * using https://devhints.io/jasmine as a cheatsheet
 * This is our first test suite - a test suite just contains and test 
 * All Test will follow this format
 */
$(function () {

  describe('RSS Feeds', function () {

    it('allFeeds variable is defined and not empty', function () {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });
    it('allFeeds objects and url are defined and not empty', function () {
      allFeeds.forEach(function (feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      });
    });
    it('allFeeds objects and name are defined and not empty', function () {
      allFeeds.forEach(function (feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      })
    });
  });


  describe('The Menu', function () {

    it('menu hides by default', function () {
      expect($('body').hasClass('menu-hidden')).toBe(true);
      let body = document.body;
      let menuIcon = document.querySelector('menu-icon-link')
    });
  });
  it('menu changes visability when clicked', function () {
    $('.menu-icon-link').trigger('click');
    expect($('body').hasClass('menu-hidden')).toBe(false);
    $('.menu-icon-link').trigger('click');
    expect($('body').hasClass('menu-hidden')).toBe(true);
  });
});


describe('Initial Entries', function () {

  beforeEach(function (done) {
    loadFeed(0, function () {
      done();
    });
  });

  it('feed contains at least one entry', function () {
    let entryNumber = $('.entry').length;
    expect(entryNumber).toBeGreaterThan(0);
  });
})

/* 
 *Had issues with the Async and callbacks 
 *refer to notes on error message and how I found the solution 
 * I have changed this code so many times 
 * I am not understanding what it means that   SPEC HAS EXPECTATIONS 
 * I have googled it, and all the results come backs with other projects with the same error message 
 * but no solution 
 * 9/16 modulized the test, and now I am not getting the SPEC message 
 */

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
//     });

//   }());

describe('New Feed Selection', function () {
  let firstFeedList;
  let secondFeedList;

  // need to make sure that the feed loads 
  beforeEach(function (done) {
    loadFeed(0, function () {

      //check to see first feed loads
      console.log('loading firstfeed!');

      firstFeedList = $('.feed').html();
      loadFeed(1, function () {

        //check to see if second feed loads 
        console.log('loading secondfeed!');
        done();
      });
    });
  });
afterEach(function(){
  loadFeed(0);
});

//make sure that they are not equal

it('check to see if the feeds change',function(){
  secondFeedList = $('.feed').html();
  expect(firstFeedList).not.toEqual(secondFeedList);
});
});

