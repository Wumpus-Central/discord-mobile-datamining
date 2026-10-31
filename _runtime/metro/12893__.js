// === Module 12893: ? ===

// Module 12893
import _mod12833 from "module_12833" /* 12833 */;

const Hash = _mod12833.TYPE.Hash;
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
  }
};

export default obj;