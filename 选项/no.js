/*
 * @Description:
 * @Author: dingxuejin
 * @Date: 2021-03-30 22:02:54
 * @LastEditTime: 2021-03-30 22:12:32
 * @LastEditors: dingxuejin
 */
const { program } = require('commander');

program
    .option('-no-saue', 'Remove sauce')
    .option('--cheese <flavour>', 'cheese flavour', 'mozzarella')
    .option('--no-cheese', 'plain with no cheese')
    .parse();

const options = program.opts();

console.log(options);