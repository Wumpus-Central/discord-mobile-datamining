// _runtime/metro/14912__.js
import _mod14852 from "14852__.js";

const Hash = _mod14852.TYPE.Hash;
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
