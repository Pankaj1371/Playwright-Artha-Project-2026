
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    channel: 'chrome',
    headless: false,
    viewport: null,
    launchOptions: {
      args: ['--start-maximized']
    }
  },
  reporter: 'list'
});
