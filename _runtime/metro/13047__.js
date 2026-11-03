// _runtime/metro/13047__.js
import _mod12972 from "12972__.js";

const String = _mod12972.TYPE.String;
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
