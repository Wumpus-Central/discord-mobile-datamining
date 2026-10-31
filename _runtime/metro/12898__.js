// _runtime/metro/12898__.js
import _mod12833 from "12833__.js";

const Number = _mod12833.TYPE.Number;
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
