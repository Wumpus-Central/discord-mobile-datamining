// _runtime/metro/16291__.js
import keys2 from "../16231_keys2.js";
import _mod16235 from "16235__.js";

const Dimension = _mod16235.TYPE.Dimension;
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
