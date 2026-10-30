// _runtime/metro/12863__.js
import _mod12798 from "12798__.js";

const Number = _mod12798.TYPE.Number;
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
