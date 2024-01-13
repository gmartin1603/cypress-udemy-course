const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'opykp9',
  screenshotsFolder: 'cypress/report/assets',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/report/mocha',
      quiet: true,
      overwrite: false,
      html: false,
      json: true,
    },
  },
  e2e: {
    baseUrl: "https://react-redux.realworld.io/",
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
});
