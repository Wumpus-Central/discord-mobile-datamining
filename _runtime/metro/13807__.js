// === Module 13807: ? ===

// Module 13807
import _mod13726 from "module_13726" /* 13726 */;

const WhiteSpace = _mod13726.TYPE.WhiteSpace;
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