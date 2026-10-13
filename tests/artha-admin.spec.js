// Import Playwright test functions
const { test, expect } = require('@playwright/test');

// Create a test case
test('Open Artha admin in Chrome', async ({ page }) => {

// Store the Artha admin server address
  const adminUrl = 'dokrrudra.appsndevs.com:23527/spaadmin/login';
  // Add HTTP to create a complete URL
  const url = `http://${adminUrl}`;
  
  // Print the URL in the terminal
  console.log('Opening URL:', url);

  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });

  await expect(page.locator('body')).toBeVisible();

  console.log('Artha admin page opened successfully.');
  console.log('Page title:', await page.title());

  await page.pause();
});
