// === Module 12726: ? ===

// Module 12726
import _mod12657 from "module_12657" /* 12657 */;

const Ident = _mod12657.TYPE.Ident;
const Function = _mod12657.TYPE.Function;
const Colon = _mod12657.TYPE.Colon;
const RightParenthesis = _mod12657.TYPE.RightParenthesis;
const obj = {
  name: "PseudoClassSelector",
  structure: null,
  parse() {
    const self = this;
    this.eat(Colon);
    if (this.scanner.tokenType === Function) {
      const str = self.consumeFunctionName();
      const formatted = str.toLowerCase();
      const pseudo = self.pseudo;
      if (!pseudo.hasOwnProperty(formatted)) {
        const list = self.createList();
        list.push(self.Raw(self.scanner.tokenIndex, null, false));
        self.eat(RightParenthesis);
      }
      const scanner = self.scanner;
      scanner.skipSC();
      let skipSCResult1 = self.pseudo[formatted];
      const call = skipSCResult1.call;
      const scanner2 = self.scanner;
      skipSCResult1 = scanner2.skipSC();
      const tmp10 = typeof call === "unknown" ? skipSCResult1() : call(self);
    } else {
      const element = { type: "PseudoClassSelector", loc: self.getLocation(this.scanner.tokenStart, self.scanner.tokenStart), name: self.consume(Ident), children: null };
      return element;
    }
  },
  generate(name) {
    const self = this;
    this.chunk(":");
    this.chunk(name.name);
    if (null !== name.children) {
      self.chunk("(");
      self.children(name);
      self.chunk(")");
    }
  },
  walkContext: "function"
};
const obj2 = { name: String, children: null };
const items = [["Raw"], null];
obj2.children = items;
obj.structure = obj2;

export default obj;