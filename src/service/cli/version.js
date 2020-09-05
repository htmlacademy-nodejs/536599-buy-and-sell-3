'use strict';

require(`module-alias/register`);
const packageJsonFile = require(`@root/package.json`);


module.exports = {
  name: `--version`,
  run() {
    const version = packageJsonFile.version;
    console.info(version);
  }
};
