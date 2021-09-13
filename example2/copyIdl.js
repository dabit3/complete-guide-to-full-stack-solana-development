const fs = require('fs');
const idl = require('./target/idl/example2.json');

fs.writeFileSync('./app/src/idl.json', JSON.stringify(idl));