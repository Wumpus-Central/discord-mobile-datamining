// === Module 12718: ? ===

// Module 12718
import _mod12657 from "module_12657" /* 12657 */;

const Ident = _mod12657.TYPE.Ident;
const Number = _mod12657.TYPE.Number;
const Dimension = _mod12657.TYPE.Dimension;
const LeftParenthesis = _mod12657.TYPE.LeftParenthesis;
const RightParenthesis = _mod12657.TYPE.RightParenthesis;
const Colon = _mod12657.TYPE.Colon;
const Delim = _mod12657.TYPE.Delim;
let obj = {
  name: "MediaFeature",
  structure: { name: String, value: ["Identifier", "Number", "Dimension", "Ratio", null] },
  parse() {
    const self = this;
    this.eat(LeftParenthesis);
    const scanner = this.scanner;
    scanner.skipSC();
    const scanner2 = this.scanner;
    scanner2.skipSC();
    if (this.scanner.tokenType === RightParenthesis) {
      self.eat(tmp6);
      const obj = { type: "MediaFeature", loc: self.getLocation(this.scanner.tokenStart, self.scanner.tokenStart), name: consumeResult, value: null };
      return obj;
    } else {
      self.eat(Colon);
      const scanner4 = self.scanner;
      scanner4.skipSC();
      const tokenType = self.scanner.tokenType;
      if (Number === tokenType) {
        if (self.lookupNonWSType(1) === Delim) {
          let RatioResult = self.Ratio();
        } else {
          RatioResult = self.Number();
        }
      } else {
        if (Dimension === tokenType) {
          let DimensionResult = self.Dimension();
          const scanner3 = self.scanner;
          scanner3.skipSC();
        } else if (Ident !== tokenType) {
          self.error("Number, dimension, ratio or identifier is expected");
          DimensionResult = null;
        }
        DimensionResult = self.Identifier();
      }
    }
    consumeResult = this.consume(Ident);
  },
  generate(name) {
    const self = this;
    this.chunk("(");
    this.chunk(name.name);
    if (null !== name.value) {
      self.chunk(":");
      self.node(name.value);
    }
    self.chunk(")");
  }
};

export default obj;