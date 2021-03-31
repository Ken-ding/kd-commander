/*
 * @Description:
 * @Author: dingxuejin
 * @Date: 2021-03-31 09:43:20
 * @LastEditTime: 2021-03-31 10:03:42
 * @LastEditors: dingxuejin
 */
const { program } = require('commander');

program.version('0.0.1');

program.parse();
const options = program.opts();

console.log(options);