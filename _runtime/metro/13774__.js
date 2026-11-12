// === Module 13774: ? ===

// Module 13774
import _mod13726 from "module_13726" /* 13726 */;

const LeftSquareBracket = _mod13726.TYPE.LeftSquareBracket;
const RightSquareBracket = _mod13726.TYPE.RightSquareBracket;
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