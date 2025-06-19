'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = async function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
  });

  const { setConfig } = await import('@warp-drive/build-config');
  setConfig(app, __dirname, {
    deprecations: {
      DEPRECATE_TRACKING_PACKAGE: false,
      DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false,
    },
  });

  return app.toTree();
};
