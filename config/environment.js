/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'bustle-clone',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

  //   firebase: {
  //     apiKey: "AIzaSyBaB0kiwxv2kaokD_DSZpYxCycsRxx6-zI",
  //     authDomain: "bustle-clone-42dd6.firebaseapp.com",
  //     databaseURL: "https://bustle-clone-42dd6.firebaseio.com",
  //      storageBucket: "bustle-clone-42dd6.appspot.com",
  //   }
  // };

  firebase: {
      apiKey: 'AIzaSyDZQJ6KhZfjUGT5agcfSyudBtJEkGvV2Ic',
      authDomain: 'bustle-clone-263e4.firebaseapp.com',
      databaseURL: 'https://bustle-clone-263e4.firebaseio.com',
      storageBucket: 'bustle-clone-263e4.appspot.com'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
