// === Module 13113: ? ===

// Module 13113
import _mod13055 from "module_13055" /* 13055 */;

const Hash = _mod13055.TYPE.Hash;
let obj = {
  name: "Hash",
  structure: { value: String },
  parse() {
    const tokenStart = this.scanner.tokenStart;
    this.eat(Hash);
    const obj = { type: "Hash", loc: this.getLocation(tokenStart, this.scanner.tokenStart), value: null };
    const scanner = this.scanner;
    obj.value = scanner.substrToCursor(tokenStart + 1);
    return obj;
  },
  generate(value) {
    this.chunk("#");
    this.chunk(value.value);
  }
};

export default obj;