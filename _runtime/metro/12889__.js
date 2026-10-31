// _runtime/metro/12889__.js
import _mod12829 from "12829__.js";
import _mod12833 from "12833__.js";

const Dimension = _mod12833.TYPE.Dimension;
const obj = {
  name: "Dimension",
  structure: { value: String, unit: String },
  parse() {
    const tokenStart = this.scanner.tokenStart;
    const consumeNumberResult = _mod12829.consumeNumber(this.scanner.source, tokenStart);
    this.eat(Dimension);
    const obj2 = {
      type: "Dimension",
      loc: this.getLocation(tokenStart, this.scanner.tokenStart),
      value: this.scanner.source.substring(tokenStart, consumeNumberResult),
      unit: this.scanner.source.substring(consumeNumberResult, this.scanner.tokenStart),
    };
    return obj2;
  },
  generate(value) {
    this.chunk(value.value);
    this.chunk(value.unit);
  },
};

export default obj;
