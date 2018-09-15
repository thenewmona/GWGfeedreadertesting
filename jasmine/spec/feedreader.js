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
    //  
    //created allFeeds into an empty aray on line 10 of apps.js and recived 2 failures,
    // both stating that allFeeds is not defined 
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     * removed the url object and test failed 
     * removed the 
     * use sctrict mode - recommended by Sonam from her review
     */
    it('works', () => {
      expect(true).toBe(true)
    });

    it('allFeeds variable is defined and not empty', function () {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('allFeeds objects and url are defined and not empty', function () {
      allFeeds.forEach(function (feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      })
    });

    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
  });


  /* TODO: Write a new test suite named "The menu" */
  describe('The Menu', () => {
    it('works', () => {
      expect(true).toBe(true)
    })
  })


  /* TODO: Write a test that ensures the menu element is hidden
       
   * check line 20 of HTML menu is set to hidden 
   * check notes on line 72 -75 of normalize CSS for hidden attribute also 
   */

  it('menu hides by default', function () {
    expect($('body').hasClass('menu-hidden')).toBe(true);
    let body = document.body;
    let menuIcon = document.querySelector('menu-icon-link')
  });

  /* TODO: Write a test that ensures the menu changes
   * visibility when the menu icon is clicked. This test
   * should have two expectations: does the menu display when
   * clicked and does it hide when clicked again.
   */
  it('menu changes visability when clicked', function () {
    $('.menu-icon-link').trigger('click');
    expect($('body').hasClass('menu-hidden')).toBe(false);
    $('.menu-icon-link').trigger('click');
    expect($('body').hasClass('menu-hidden')).toBe(true);
  });

  /* TODO: Write a new test suite named "Initial Entries" */
  describe('Initial Entries', () => {
    it('works', () => {
      expect(true).toBe(true)
    })
  })
  /* TODO: Write a test that ensures when the loadFeed
   *Had issues with the Async and callbacks 
   *refer to notes on error message and how I found the solution 
   */
  beforeEach(function (done) {
    loadFeed(0, function () {
      done();
    });
  });

  it('feed contains at least one entry', function () {
    let entryNumber = $('.entry').length;
    expect(entryNumber).toBeGreaterThan(0);
  });


  /* TODO: Write a new test suite named "New Feed Selection" */
  describe('New Feed Selection', function () {
    it('works', function () {
      expect(true).toBe(true)
    })
  })

  /* TODO: Write a test that ensures when a new feed is loaded
   * by the loadFeed function that the content actually changes.
   * Remember, loadFeed() is asynchronous.
   */
  it('content change', function () {

  });
  let firstFeedList; secondFeedList;
  beforeEach(function (done) {
    loadFeed(1, function () {
      firstFeedList = $('.feed').html();
      loadFeed(2, function () {
        done();
      });
    });
  });

  // afterEach(function (done) {
  //   loadFeed(0);
  //   done();
  // });

  it('feed changes', function (done) {
    expect(firstFeedList).toBeDefined();
    secondFeedList = $('.feed').html();
   expect(secondFeedList).toBeDefined();
    expect(firstFeedList).not.toEqual(secondFeedList);
    done();
  })
}());