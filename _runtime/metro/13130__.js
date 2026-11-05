// === Module 13130: ? ===

// Module 13130
import _mod13058 from "module_13058" /* 13058 */;
import _mod13062 from "module_13062" /* 13062 */;

const Percentage = _mod13062.TYPE.Percentage;
let obj = {
  name: "Percentage",
  structure: { value: String },
  parse() {
    const tokenStart = this.scanner.tokenStart;
    this.eat(Percentage);
    const obj2 = { type: "Percentage", loc: this.getLocation(tokenStart, this.scanner.tokenStart), value: this.scanner.source.substring(tokenStart, _mod13058.consumeNumber(this.scanner.source, tokenStart)) };
    return obj2;
  },
  generate(value) {
    this.chunk(value.value);
    this.chunk("%");
  }
};

export default obj;