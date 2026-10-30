// === Module 12843: ? ===

// Module 12843
import _mod12798 from "module_12798" /* 12798 */;

const Semicolon = _mod12798.TYPE.Semicolon;
const LeftCurlyBracket = _mod12798.TYPE.LeftCurlyBracket;
const obj = {
  name: "AtrulePrelude",
  structure: null,
  parse(key10009) {
    let formatted = key10009;
    if (null !== key10009) {
      formatted = key10009.toLowerCase();
    }
    const self = this;
    const scanner = this.scanner;
    scanner.skipSC();
    const atrule = this.atrule;
    if (atrule.hasOwnProperty(formatted)) {
      if (typeof self.atrule[formatted].prelude === "function") {
        const prelude = self.atrule[formatted].prelude;
        const call = prelude.call;
        typeof call === "unknown" ? prelude() : call(self);
      }
    }
    let sequence = self.readSequence(self.scope.AtrulePrelude);
    const scanner2 = self.scanner;
    scanner2.skipSC();
    let tmp6 = true !== self.scanner.eof;
    if (tmp6) {
      tmp6 = self.scanner.tokenType !== LeftCurlyBracket;
    }
    if (tmp6) {
      tmp6 = self.scanner.tokenType !== Semicolon;
    }
    if (tmp6) {
      self.error("Semicolon or block is expected");
    }
    if (null === sequence) {
      sequence = self.createList();
    }
    const element = { type: "AtrulePrelude", loc: self.getLocationFromList(sequence), children: sequence };
    return element;
  },
  generate(arg0) {
    this.children(arg0);
  },
  walkContext: "atrulePrelude"
};
const obj2 = { children: null };
const items = [[]];
obj2.children = items;
obj.structure = obj2;

export default obj;