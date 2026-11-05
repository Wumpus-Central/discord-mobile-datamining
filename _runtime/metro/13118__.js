// === Module 13118: ? ===

// Module 13118
import _mod13058 from "module_13058" /* 13058 */;
import _mod13062 from "module_13062" /* 13062 */;

const Dimension = _mod13062.TYPE.Dimension;
const obj = {
  name: "Dimension",
  structure: { value: String, unit: String },
  parse() {
    const tokenStart = this.scanner.tokenStart;
    const consumeNumberResult = _mod13058.consumeNumber(this.scanner.source, tokenStart);
    this.eat(Dimension);
    const obj2 = { type: "Dimension", loc: this.getLocation(tokenStart, this.scanner.tokenStart), value: this.scanner.source.substring(tokenStart, consumeNumberResult), unit: this.scanner.source.substring(consumeNumberResult, this.scanner.tokenStart) };
    return obj2;
  },
  generate(value) {
    this.chunk(value.value);
    this.chunk(value.unit);
  }
};

export default obj;