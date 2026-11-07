// === Module 13115: ? ===

// Module 13115
import _mod13050 from "module_13050" /* 13050 */;

const Number = _mod13050.TYPE.Number;
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