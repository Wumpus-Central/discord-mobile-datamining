// === Module 13120: ? ===

// Module 13120
import _mod13062 from "module_13062" /* 13062 */;

const Hash = _mod13062.TYPE.Hash;
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