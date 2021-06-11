// // look up uuid (util.promisify)

const util = require("util");
const fs = require("fs");


const writeNote = util.promisify(fs.writeNote);
const readNote = util.promisify(fs.readNote);

class myNote {
    create() {
        return writeNote("db/db.json", JSON.stringify)
    };
    read() {
        return readNote("db/db.json")
    };

    async getNotes() {
        const savedNotes = await this.read
    }

};


// getNotes() {
//    return read().then {
//        // parse notes to return them as parsed notes
//  }
// }

module.exports = new myNote;