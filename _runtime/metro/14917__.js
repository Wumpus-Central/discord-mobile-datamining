// _runtime/metro/14917__.js
import _mod14852 from "14852__.js";

const Number = _mod14852.TYPE.Number;
const obj = {
  name: "Number",
  structure: { value: String },
  parse() {
    return {
      type: "Number",
      loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
      value: this.consume(Number),
    };
  },
  generate(value) {
    this.chunk(value.value);
  },
};

export default obj;
