/*
 * @Description:
 * @Author: dingxuejin
 * @Date: 2021-03-30 21:46:52
 * @LastEditTime: 2021-03-30 21:56:20
 * @LastEditors: dingxuejin
 */

const { program } = require('commander');

program
    .option('-d,--debug', 'debug选项')
    .option('-s,--samll', 'small选项')
    .option('-p,--pizza-type <type>', 'pizza选项')

program.parse(process.argv);
const options = program.opts();

console.log(options);