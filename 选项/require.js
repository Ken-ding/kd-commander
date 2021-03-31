/*
 * @Description:
 * @Author: dingxuejin
 * @Date: 2021-03-31 09:28:14
 * @LastEditTime: 2021-03-31 09:30:41
 * @LastEditors: dingxuejin
 */
const { program } = require('commander');

program
    .requiredOption('-c,--cheese <type>', 'pizza must have cheese')

program.parse();
const options = program.opts();

console.log(options);