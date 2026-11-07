// === Module 13125: ? ===

// Module 13125
import _mod13050 from "module_13050" /* 13050 */;

const String = _mod13050.TYPE.String;
const obj = {
  name: "String",
  structure: { value: String },
  parse() {
    return { type: "String", loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd), value: this.consume(String) };
  },
  generate(value) {
    this.chunk(value.value);
  }
};

export default obj;