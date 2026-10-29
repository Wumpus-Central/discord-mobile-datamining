// _runtime/metro/12722__.js
import _mod12657 from "12657__.js";

const Number = _mod12657.TYPE.Number;
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
