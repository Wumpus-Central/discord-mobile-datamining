// _runtime/metro/13130__.js
import _mod13055 from "13055__.js";

const String = _mod13055.TYPE.String;
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
