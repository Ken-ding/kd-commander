/*
 * @Description:
 * @Author: dingxuejin
 * @Date: 2021-03-30 22:02:54
 * @LastEditTime: 2021-03-30 22:04:30
 * @LastEditors: dingxuejin
 */
const { program } = require('commander');

program
    .option('-c, --cheese <type>', 'add the specified type of cheese', 'blue');

program.parse();

const options = program.opts();

console.log(options);