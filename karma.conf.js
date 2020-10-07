const puppeteer = require('puppeteer');
process.env.CHROME_BIN = puppeteer.executablePath();

module.exports = function (config) {
  config.set({
    basePath: './src/',
    frameworks: ['jasmine', 'karma-typescript'],
    browsers: ["Chrome_Beta_Headless"],
    karmaTypescriptConfig: {
      reports: {
        "lcovonly": {
          "directory": "coverage",
          "subdirectory": "lcov",
          "filename": "lcov.info"
        }
      }
    },
    customLaunchers: {
      Chrome_Beta_Headless: {
        base: 'Chrome',
        flags: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox'],
        debug: false
      }
    },
    plugins: [
      require('karma-jasmine'),
      require('karma-jasmine-html-reporter'),
      require('karma-typescript'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-chrome-launcher'),
    ],
    exclude: [],
    files: [
      '**/**/*.spec.ts',
      { pattern: "**/**/!(main.d).ts" }, // *.tsx for React Jsx
    ],
    preprocessors: {
      "**/**/*.ts": ["karma-typescript"], // *.tsx for React Jsx
    },
    client: {
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
      reports: ['json', 'text'],
      dir: require('path').join(__dirname, 'coverage'),
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

