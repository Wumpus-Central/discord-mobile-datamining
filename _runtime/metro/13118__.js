// === Module 13118: ? ===

// Module 13118
import keys2 from "keys2" /* 13046 */;
import _mod13050 from "module_13050" /* 13050 */;

const Percentage = _mod13050.TYPE.Percentage;
let obj = {
  name: "Percentage",
  structure: { value: String },
  parse() {
    const tokenStart = this.scanner.tokenStart;
    this.eat(Percentage);
    const obj2 = { type: "Percentage", loc: this.getLocation(tokenStart, this.scanner.tokenStart), value: this.scanner.source.substring(tokenStart, keys2.consumeNumber(this.scanner.source, tokenStart)) };
    return obj2;
  },
  generate(value) {
    this.chunk(value.value);
    this.chunk("%");
  }
};

export default obj;