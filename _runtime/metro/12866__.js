// === Module 12866: ? ===

// Module 12866
import _mod12794 from "module_12794" /* 12794 */;
import _mod12798 from "module_12798" /* 12798 */;

const Percentage = _mod12798.TYPE.Percentage;
let obj = {
  name: "Percentage",
  structure: { value: String },
  parse() {
    const tokenStart = this.scanner.tokenStart;
    this.eat(Percentage);
    const obj2 = { type: "Percentage", loc: this.getLocation(tokenStart, this.scanner.tokenStart), value: this.scanner.source.substring(tokenStart, _mod12794.consumeNumber(this.scanner.source, tokenStart)) };
    return obj2;
  },
  generate(value) {
    this.chunk(value.value);
    this.chunk("%");
  }
};

export default obj;