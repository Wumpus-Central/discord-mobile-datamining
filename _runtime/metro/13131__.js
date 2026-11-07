// === Module 13131: ? ===

// Module 13131
import _mod13050 from "module_13050" /* 13050 */;

const WhiteSpace = _mod13050.TYPE.WhiteSpace;
let closure_1 = Object.freeze({ type: "WhiteSpace", loc: null, value: " " });
const obj = {
  name: "WhiteSpace",
  structure: { value: String },
  parse() {
    this.eat(WhiteSpace);
    return closure_1;
  },
  generate(value) {
    this.chunk(value.value);
  }
};

export default obj;