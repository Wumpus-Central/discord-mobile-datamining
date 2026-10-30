// === Module 12856: ? ===

// Module 12856
import _mod12798 from "module_12798" /* 12798 */;

const Hash = _mod12798.TYPE.Hash;
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