// === Module 13801: ? ===

// Module 13801
import _mod13726 from "module_13726" /* 13726 */;

const String = _mod13726.TYPE.String;
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