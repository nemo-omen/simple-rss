const feedUrls = [
   'https://www.sarasoueidan.com/blog/index.xml'
];

const getFeeds = function () {
   feedUrls.forEach(async function (url) {
      const rssResponse = await fetch(url);
      const rssData = await rssResponse.text();
      console.log(rssData);
   });
};

document.addEventListener('DOMContentLoaded', function () {
// modules use strict mode by default, so this is just for
// JSLint's benefit
   'use strict';
   getFeeds();
});