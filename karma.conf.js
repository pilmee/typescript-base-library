module.exports = function(config) {
  config.set({
    basePath: './src/',
    frameworks: ['jasmine', 'karma-typescript'],
     plugins: [
      require('karma-jasmine'),
      require('karma-jasmine-html-reporter'),
      require('karma-typescript'),
      require('karma-coverage-istanbul-reporter'),
    ],
    exclude: [],
    files: [
      '**/**/*.spec.ts',
      { pattern: "**/**/!(main.d).ts" }, // *.tsx for React Jsx
    ],
    preprocessors: {
        "**/**/*.ts": ["karma-typescript"], // *.tsx for React Jsx
    },
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    reporters: ['progress', 'karma-typescript', 'coverage-istanbul'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,
    coverageIstanbulReporter: {
      reports: ['json'],
      dir: require('path').join(__dirname, 'coverage'),
      file: 'coverage.json',
      combineBrowserReports: true,
      fixWebpackSourcePaths: true,
      skipFilesWithNoCoverage: true,
      'report-config': {
        html: {
          subdir: 'html'
        }
      },
    }
  });
};

