// module-a
'use strict';
const moduleB = require('module-b');
console.log('moduleB:', moduleB());


module.exports = moduleA;


function moduleA() {
    return 'its module a';
}