const fs = require('fs');
const idl = require('./target/idl/example1.json');

fs.writeFileSync('./app/src/idls/example1.json', JSON.stringify(idl));