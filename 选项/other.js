/*
 * @Description:
 * @Author: dingxuejin
 * @Date: 2021-03-31 10:03:53
 * @LastEditTime: 2021-03-31 10:04:44
 * @LastEditors: dingxuejin
 */
const { program, Option } = require('commander');

program
    .addOption(new Option('-s, --secret').hideHelp())
    .addOption(new Option('-t, --timeout <delay>', 'timeout in seconds').default(60, 'one minute'))
    .addOption(new Option('-d, --drink <size>', 'drink size').choices(['small', 'medium', 'large']));

program.parse();
const options = program.opts();

console.log(options);