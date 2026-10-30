// === Module 12863: ? ===

// Module 12863
import _mod12798 from "module_12798" /* 12798 */;

const Number = _mod12798.TYPE.Number;
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