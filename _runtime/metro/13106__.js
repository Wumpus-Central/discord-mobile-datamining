// _runtime/metro/13106__.js
import keys2 from "../13046_keys2.js";
import _mod13050 from "13050__.js";

const Dimension = _mod13050.TYPE.Dimension;
const obj = {
  name: "Dimension",
  structure: { value: String, unit: String },
  parse() {
    const tokenStart = this.scanner.tokenStart;
    const consumeNumberResult = keys2.consumeNumber(this.scanner.source, tokenStart);
    this.eat(Dimension);
    const obj2 = {
      type: "Dimension",
      loc: this.getLocation(tokenStart, this.scanner.tokenStart),
      value: this.scanner.source.substring(tokenStart, consumeNumberResult),
      unit: this.scanner.source.substring(consumeNumberResult, this.scanner.tokenStart),
    };
    return obj2;
  },
  generate(value) {
    this.chunk(value.value);
    this.chunk(value.unit);
  },
};

export default obj;
