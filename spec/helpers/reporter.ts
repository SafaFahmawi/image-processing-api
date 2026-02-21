import { SpecReporter } from 'jasmine-spec-reporter';

// Clear default reporters
jasmine.getEnv().clearReporters();

// Add custom reporter
jasmine.getEnv().addReporter(
  new SpecReporter({
    spec: {
      displaySuccessful: true,
      displayFailed: true,
      displayPending: true,
      displayDuration: true,
    },
  }),
);
