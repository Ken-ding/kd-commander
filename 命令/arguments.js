/*
 * @Description:
 * @Author: dingxuejin
 * @Date: 2021-03-31 16:32:52
 * @LastEditTime: 2021-03-31 16:47:16
 * @LastEditors: dingxuejin
 */
const { program } = require('commander');

program
    .version('0.1.0')
    .arguments('<username> [password]')
    .description('test commad', {
        username: 'user to login',
        password: 'password for user, if requied'
    })
    .action((username, password) => {
        console.log('username', username);
        console.log('environment:', password || 'no password given');
    })

program
    .version('0.1.0')
    .command('rmdir <dirs...>')
    .action(function (dirs) {
        dirs.forEach((dir) => {
            console.log('rmdir %s', dir);
        });
    });

program.parse(process.argv);