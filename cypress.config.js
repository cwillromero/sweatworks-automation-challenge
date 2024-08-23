const path = require("path");
const { defineConfig } = require('cypress');
require('dotenv').config({ path: path.resolve(__dirname, ".env") });

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    chromeWebSecurity: false
  },

    // environment variables
    env: {
      username: process.env.SAUCE_USERNAME,
      password: process.env.SAUCE_PASSWORD
    },

  // config for multiple reporters
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'spec, mocha-junit-reporter',
    // config for mocha reporter
    mochaJunitReporterReporterOptions: {
      mochaFile: 'results/results-[hash].xml',
    },
  },

  // config for the browser
  pageLoadTimeout: 30000,
  viewportWidth: 1460,
  viewportHeight: 1024,
});
