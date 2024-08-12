const nekoList = require('./nekoList.js');
const nekoEmoji = nekoList[Math.floor(Math.random() * nekoList.length)];
module.exports = nekoEmoji;
