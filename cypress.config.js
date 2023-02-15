const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      "baseUrl":"http://automationpractice.com/index.php",

      setupNodeEvents(on, config) {
        require('@cypress/grep/src/plugin')(config);
        return config;
      }
  },
});
