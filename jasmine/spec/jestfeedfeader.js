/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 * using https://devhints.io/jasmine as a cheatsheet
 */
$(function () {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function () {
    //created allFeeds into an empty aray on line 10 of apps.js and recived 2 failures,
    // both stating that allFeeds is not defined 
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     * removed the url object and test failed 
     * removed the 
     * use sctrict mode - recommended by Sonam from her review
     */
    it('allFeeds variable is defined and not empty', function () {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });
    it('allFeeds objects and url are defined and not empty', function () {
      allFeeds.forEach(function (feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      })
      it('allFeeds objects and name defined and not empty', function () {
        allFeeds.forEach(function (feed) {
          expect(feed.name).toBeDefined();
          expect(feed.name.length).not.toBe(0);
          expect(feed.name).toBe("string");
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
  });

  it('feed contains at least one entry', function () {
    let entryNumber = $('.entry').length;
    expect(entryNumber).toBeGreaterThan(0);
  });

  describe('New Feed Selection', function () {
    it('content change', function () {
      let firstFeedList;
      secondFeedList;
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
}());