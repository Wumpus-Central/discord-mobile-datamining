// === Module 14933: ? ===

// Module 14933
import _mod14852 from "module_14852" /* 14852 */;

const WhiteSpace = _mod14852.TYPE.WhiteSpace;
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