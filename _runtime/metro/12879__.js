// === Module 12879: ? ===

// Module 12879
import _mod12798 from "module_12798" /* 12798 */;

const WhiteSpace = _mod12798.TYPE.WhiteSpace;
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