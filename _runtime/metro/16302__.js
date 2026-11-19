// === Module 16302: ? ===

// Module 16302
import _mod16235 from "module_16235" /* 16235 */;

const LeftParenthesis = _mod16235.TYPE.LeftParenthesis;
const RightParenthesis = _mod16235.TYPE.RightParenthesis;
const obj = {
  name: "Parentheses",
  structure: null,
  parse(call, arg1) {
    const self = this;
    this.eat(LeftParenthesis);
    call = call.call;
    if (!self.scanner.eof) {
      self.eat(RightParenthesis);
    }
    const element = { type: "Parentheses", loc: self.getLocation(this.scanner.tokenStart, self.scanner.tokenStart), children: typeof call === "unknown" ? call(arg1) : call(self, arg1) };
    return element;
  },
  generate(arg0) {
    this.chunk("(");
    this.children(arg0);
    this.chunk(")");
  }
};
const obj2 = { children: null };
const items = [[]];
obj2.children = items;
obj.structure = obj2;

export default obj;