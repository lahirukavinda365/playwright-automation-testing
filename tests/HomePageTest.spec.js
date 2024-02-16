const {test, expect} = require('@playwright/test')

test('Home Page', async({page})=>{
    await page.goto('https://www.demoblaze.com');

   const pageTitle = page.title();
   console.log(pageTitle);

   await expect(page).toHaveTitle('STORE');
   await page.close();
})



