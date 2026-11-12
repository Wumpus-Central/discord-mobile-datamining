// === Module 13791: ? ===

// Module 13791
import _mod13726 from "module_13726" /* 13726 */;

const Number = _mod13726.TYPE.Number;
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