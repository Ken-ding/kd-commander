/*
 * @Description:
 * @Author: dingxuejin
 * @Date: 2021-03-31 09:33:54
 * @LastEditTime: 2021-03-31 09:35:51
 * @LastEditors: dingxuejin
 */
const { program } = require('commander');

program
    .option('-n,--number <numbers...>', '选项numbers')
    .option('-l,--letter [letter...]', '选项letter')

program.parse();
const options = program.opts();

console.log(options);