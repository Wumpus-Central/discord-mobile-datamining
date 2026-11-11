// _runtime/metro/13790__.js
import _mod13730 from "13730__.js";

const Hash = _mod13730.TYPE.Hash;
let obj = {
  name: "IdSelector",
  structure: { name: String },
  parse() {
    const tokenStart = this.scanner.tokenStart;
    this.eat(Hash);
    const obj = { type: "IdSelector", loc: this.getLocation(tokenStart, this.scanner.tokenStart), name: null };
    const scanner = this.scanner;
    obj.name = scanner.substrToCursor(tokenStart + 1);
    return obj;
  },
  generate(name) {
    this.chunk("#");
    this.chunk(name.name);
  },
};

export default obj;
