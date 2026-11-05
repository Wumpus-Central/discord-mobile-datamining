// _runtime/metro/13137__.js
import _mod13062 from "13062__.js";

const String = _mod13062.TYPE.String;
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
