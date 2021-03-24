const puppeteer = require('puppeteer');

console.log('running...');

const scrape = async () => {
  // Launch Puppeteer
  const browser = await puppeteer.launch();
  console.log('launching puppeteer...');
  // Open Desired Page
  const page = await browser.newPage();
  console.log('page opened...');
  await page.goto(
    'https://www.newegg.com/asus-geforce-rtx-3080-tuf-rtx3080-10g-gaming/p/N82E16814126453?Description=rtx%203080&cm_re=rtx_3080-_-14-126-453-_-Product&quicklink=true',
    {
      waitUntil: 'networkidle0',
    }
  );

  // Scrape Data
  // let data = page.evaluate(() => {
  //   console.log('scraping...');
  //   let triangle = document.querySelector('i[class="fa-exclamation-triangle"]');
  //   console.log(triangle);
  //   return triangle;
  // });

  await browser.close();
};

scrape();
