// === Module 12896: ? ===

// Module 12896
import _mod12836 from "module_12836" /* 12836 */;

const Hash = _mod12836.TYPE.Hash;
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