/*
 * @Description:
 * @Author: dingxuejin
 * @Date: 2021-03-31 16:49:24
 * @LastEditTime: 2021-03-31 20:31:15
 * @LastEditors: dingxuejin
 */
const { program } = require('commander');


program
    .arguments('<name>')
    .option('-t, --title <honorific>', 'title to use before name')
    .option('-d, --debug', 'display some debugging')
    .action((name, options, command) => {
        console.log(options);
        console.log(command.name());
        console.log(`Thank-you ${name}`);
    });




program.parse(process.argv);