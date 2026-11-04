// _runtime/metro/13122__.js
import _mod13050 from "13050__.js";
import _mod13054 from "13054__.js";

const Percentage = _mod13054.TYPE.Percentage;
let obj = {
  name: "Percentage",
  structure: { value: String },
  parse() {
    const tokenStart = this.scanner.tokenStart;
    this.eat(Percentage);
    const obj2 = {
      type: "Percentage",
      loc: this.getLocation(tokenStart, this.scanner.tokenStart),
      value: this.scanner.source.substring(tokenStart, _mod13050.consumeNumber(this.scanner.source, tokenStart)),
    };
    return obj2;
  },
  generate(value) {
    this.chunk(value.value);
    this.chunk("%");
  },
};

export default obj;
