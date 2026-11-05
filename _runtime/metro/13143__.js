// === Module 13143: ? ===

// Module 13143
import _mod13062 from "module_13062" /* 13062 */;

const WhiteSpace = _mod13062.TYPE.WhiteSpace;
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