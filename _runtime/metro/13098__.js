// === Module 13098: ? ===

// Module 13098
import _mod13050 from "module_13050" /* 13050 */;

const LeftSquareBracket = _mod13050.TYPE.LeftSquareBracket;
const RightSquareBracket = _mod13050.TYPE.RightSquareBracket;
const obj = {
  name: "Brackets",
  structure: null,
  parse(call, arg1) {
    const self = this;
    this.eat(LeftSquareBracket);
    call = call.call;
    if (!self.scanner.eof) {
      self.eat(RightSquareBracket);
    }
    const element = { type: "Brackets", loc: self.getLocation(this.scanner.tokenStart, self.scanner.tokenStart), children: typeof call === "unknown" ? call(arg1) : call(self, arg1) };
    return element;
  },
  generate(arg0) {
    this.chunk("[");
    this.children(arg0);
    this.chunk("]");
  }
};
const obj2 = { children: null };
const items = [[]];
obj2.children = items;
obj.structure = obj2;

export default obj;