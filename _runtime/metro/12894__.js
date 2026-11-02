// _runtime/metro/12894__.js
import _mod12836 from "12836__.js";

const Hash = _mod12836.TYPE.Hash;
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
  },
};

export default obj;
