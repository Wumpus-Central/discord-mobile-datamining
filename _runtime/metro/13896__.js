// _runtime/metro/13896__.js
import _mod13831 from "13831__.js";

const Number = _mod13831.TYPE.Number;
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
