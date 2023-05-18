const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'q7sway',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
