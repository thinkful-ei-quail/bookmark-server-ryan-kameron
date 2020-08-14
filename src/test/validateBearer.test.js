const app = require('../app');
const store = require('../store');

describe('bookmarks', () => {
  let bookmarksCopy;
  beforeEach('make a copy of bookmarks', () => {
    bookmarksCopy = store.bookmarks;
  });
  afterEach('restore bookmarks', () => {
    store.bookmarks = bookmarksCopy;
  });

  


    
})

