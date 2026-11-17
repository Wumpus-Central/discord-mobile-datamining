// === Module 14917: ? ===

// Module 14917
import _mod14852 from "module_14852" /* 14852 */;

const Number = _mod14852.TYPE.Number;
const obj = {
  name: "Number",
  structure: { value: String },
  parse() {
    return { type: "Number", loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd), value: this.consume(Number) };
  },
  generate(value) {
    this.chunk(value.value);
  }
};

export default obj;