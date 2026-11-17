// === Module 14920: ? ===

// Module 14920
import keys2 from "keys2" /* 14848 */;
import _mod14852 from "module_14852" /* 14852 */;

const Percentage = _mod14852.TYPE.Percentage;
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