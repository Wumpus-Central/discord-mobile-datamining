// _runtime/metro/13111__.js
import _mod13051 from "13051__.js";
import _mod13055 from "13055__.js";

const Dimension = _mod13055.TYPE.Dimension;
const obj = {
  name: "Dimension",
  structure: { value: String, unit: String },
  parse() {
    const tokenStart = this.scanner.tokenStart;
    const consumeNumberResult = _mod13051.consumeNumber(this.scanner.source, tokenStart);
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
