// === Module 13037: ? ===

// Module 13037
import _mod12972 from "module_12972" /* 12972 */;

const Number = _mod12972.TYPE.Number;
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