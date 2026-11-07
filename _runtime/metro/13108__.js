// === Module 13108: ? ===

// Module 13108
import _mod13050 from "module_13050" /* 13050 */;

const Hash = _mod13050.TYPE.Hash;
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