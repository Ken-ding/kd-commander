/*
 * @Description:
 * @Author: dingxuejin
 * @Date: 2021-03-31 15:58:26
 * @LastEditTime: 2021-03-31 16:22:07
 * @LastEditors: dingxuejin
 */
const { program } = require('commander');

program
    .command('clone <source> [destination] [other...]')
    .description('clone a repository into a newly created directory')
    .alias('i')
    .option('-d, --debug <p>', 'my debug', 789)
    .option('-n, --nest', 'my nest')
    .action((source, destination, other, cmdObj) => {
        console.info('source:', source);
        console.info('destination:', destination);
        console.info('other:', other);
        console.info('debug:', cmdObj.debug);
        console.info('nest:', cmdObj.nest);
    })

program
    .command('init <source> [destination] [other...]', 'this is init')
    .alias('it');

program.parse(process.argv);