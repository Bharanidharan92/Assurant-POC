
const { config } = require('./wdio.conf');

/**
 * custom options for test
 *
 * this file is for implementing and debugging locally
 *
 */

config.baseUrl = 'http://assurantasms.vendev01.venturesolutions.com/t-mobile?usestaticresponse=28b37801-10a1-451d-ae80-e355cdec3027';

/**
 * path/to/.feature
 */

config.specs = [
  './test/features/fileMyClaim.feature'
//  './test/features/continueMyClaim.feature',
//  './test/features/trackMyClaim.feature'
];

/**
 * selenium config
 *
 * browserName: browser we connect to, can be desktop browser or resolution by width
 * chromeOptions: Useful for setting browser configuration, EG: '--window-size=<width>,<height>'
 *
 */

config.services = ['selenium-standalone'];
config.seleniumLogs = './logs/selenium.log';
config.maxInstances = 1;

exports.config = config;
