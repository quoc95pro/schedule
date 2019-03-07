const schedule = require('node-schedule');
const puppeteer = require('puppeteer');
const SitemapGenerator = require('sitemap-generator');

async function getInfo123Link() {
const browser = await puppeteer.launch({headless: false, args:['--no-sandbox']});
const page = await browser.newPage();
await page.goto('https://123link.co/auth/signin', { waitUntil: 'networkidle0' }); // wait until page load
await page.type('#username', 'quoc1995pro@gmail.com');
await page.type('#password', 'aassdd');

// click and wait for navigation
await Promise.all([
          page.click('.btn-flat'),
          page.waitForNavigation({ waitUntil: 'networkidle0' }),
]);


const elements = await page.$$(".inner h3"); 
const views = await (await elements[0].getProperty('innerHTML')).jsonValue();
const earned = await (await elements[1].getProperty('innerHTML')).jsonValue();
console.log('views: ' + views + ', earned: '+ earned);

await browser.close();
}


var j = schedule.scheduleJob('30 * * * *', function(){
//   var generator = SitemapGenerator('https://taigamekhung.com', {
//   maxDepth: 0,
//   lastMod: true,
//   changeFreq: 'daily',
//   priorityMap: [
//     1.0,
//     0.9,
//     0.8
//   ],
//   filepath: './public/sitemap.xml',
//   maxEntriesPerFile: 50000,
//   stripQuerystring: true
// });
//   // register event listeners
//   generator.on('done', () => {
//     console.log('done');
//   });

//   // start the crawler
//   generator.start();
  getInfo123Link()
});