// === Module 14927: ? ===

// Module 14927
import _mod14852 from "module_14852" /* 14852 */;

const String = _mod14852.TYPE.String;
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