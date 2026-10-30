// _runtime/metro/12879__.js
import _mod12798 from "12798__.js";

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
  },
};

export default obj;
