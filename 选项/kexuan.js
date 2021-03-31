/*
 * @Description:
 * @Author: dingxuejin
 * @Date: 2021-03-30 22:02:54
 * @LastEditTime: 2021-03-30 22:18:30
 * @LastEditors: dingxuejin
 */
const { program } = require('commander');

program
    .option('--cheese [type]', 'cheese flavour')
    .parse();

const options = program.opts();

console.log(options);