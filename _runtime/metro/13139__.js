// _runtime/metro/13139__.js
import _mod13064 from "13064__.js";

const String = _mod13064.TYPE.String;
const obj = {
  name: "String",
  structure: { value: String },
  parse() {
    return {
      type: "String",
      loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
      value: this.consume(String),
    };
  },
  generate(value) {
    this.chunk(value.value);
  },
};

export default obj;
