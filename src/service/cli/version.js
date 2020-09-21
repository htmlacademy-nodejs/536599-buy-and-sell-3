'use strict';

require(`module-alias/register`);
const chalk = require(`chalk`);
const packageJsonFile = require(`@root/package.json`);


module.exports = {
  name: `--version`,
  run() {
    const version = packageJsonFile.version;
    console.info(chalk.blue(version));
  }
};
