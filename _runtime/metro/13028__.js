// === Module 13028: ? ===

// Module 13028
import _mod12968 from "module_12968" /* 12968 */;
import _mod12972 from "module_12972" /* 12972 */;

const Dimension = _mod12972.TYPE.Dimension;
const obj = {
  name: "Dimension",
  structure: { value: String, unit: String },
  parse() {
    const tokenStart = this.scanner.tokenStart;
    const consumeNumberResult = _mod12968.consumeNumber(this.scanner.source, tokenStart);
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