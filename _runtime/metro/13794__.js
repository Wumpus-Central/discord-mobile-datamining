// === Module 13794: ? ===

// Module 13794
import keys2 from "keys2" /* 13722 */;
import _mod13726 from "module_13726" /* 13726 */;

const Percentage = _mod13726.TYPE.Percentage;
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