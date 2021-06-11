// // look up uuid (util.promisify)


const util = require("util");
const fs = require("fs");
const {v4:uuidv4} = require("uuid");

const writeNote = util.promisify(fs.writeNote);
const readNote = util.promisify(fs.readNote);

const write 


// getNotes() {
//    return read().then {
//        // parse notes to return them as parsed notes
//  }
// }

