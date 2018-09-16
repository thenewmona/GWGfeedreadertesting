/* feedreader.js*/
 
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 * using https://devhints.io/jasmine as a cheatsheet
 * This is our first test suite - a test suite just contains and test 
 * All Test will follow this formate 
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


  describe('The Menu', function() {
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


describe('Initial Entries', function()  {
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
 */

describe('New Feed Selection', function () {
  it('content change', function () {
    let firstFeedList;
    let secondFeedList;
    beforeEach(function (done) {
      loadFeed(1, function () {
        firstFeedList = $('.feed').html();
        loadFeed(2, function () {
          done();
        });
      });
    });
    it('feed changes', function (done) {
      expect(firstFeedList).toBeDefined();
      secondFeedList = $('.feed').html();
      expect(secondFeedList).toBeDefined();
      expect(firstFeedList).not.toEqual(secondFeedList);
      done();
    });
  });
});
