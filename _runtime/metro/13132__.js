// _runtime/metro/13132__.js
import keys2 from "../13060_keys2.js";
import _mod13064 from "13064__.js";

const Percentage = _mod13064.TYPE.Percentage;
let obj = {
  name: "Percentage",
  structure: { value: String },
  parse() {
    const tokenStart = this.scanner.tokenStart;
    this.eat(Percentage);
    const obj2 = {
      type: "Percentage",
      loc: this.getLocation(tokenStart, this.scanner.tokenStart),
      value: this.scanner.source.substring(tokenStart, keys2.consumeNumber(this.scanner.source, tokenStart)),
    };
    return obj2;
  },
  generate(value) {
    this.chunk(value.value);
    this.chunk("%");
  },
};

export default obj;
