/*
 * @Description:
 * @Author: dingxuejin
 * @Date: 2021-03-31 10:53:31
 * @LastEditTime: 2021-03-31 11:03:16
 * @LastEditors: dingxuejin
 */
const { program } = require('commander');

function myParseInt(value, dummyPrevious) {
    // parseInt takes a string and a radix
    const parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue)) {
        throw new commander.InvalidOptionArgumentError('Not a number.');
    }
    return parsedValue;
}

function increaseVerbosity(dummyValue, previous) {
    return previous + 1;
}

function collect(value, previous) {
    return previous.concat([value]);
}

function commaSeparatedList(value, dummyPrevious) {
    return value.split(',');
}

program
    .option('-f, --float <number>', 'float argument', parseFloat)
    .option('-i, --integer <number>', 'integer argument', myParseInt)
    .option('-v, --verbose', 'verbosity that can be increased', increaseVerbosity, 0)
    .option('-c, --collect <value>', 'repeatable value', collect, [])
    .option('-l, --list <items>', 'comma separated list', commaSeparatedList);

program.parse();

const options = program.opts();

console.log(options);