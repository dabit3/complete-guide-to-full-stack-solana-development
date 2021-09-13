const fs = require('fs');
const idl = require('./target/idl/example1.json');

fs.writeFileSync('./app/src/idl.json', JSON.stringify(idl));