// _runtime/metro/13118__.js
import keys2 from "../13046_keys2.js";
import _mod13050 from "13050__.js";

const Percentage = _mod13050.TYPE.Percentage;
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
