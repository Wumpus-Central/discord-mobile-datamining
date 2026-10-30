// _runtime/metro/12873__.js
import _mod12798 from "12798__.js";

const String = _mod12798.TYPE.String;
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
