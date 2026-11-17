// _runtime/metro/14919__.js
import _mod14852 from "14852__.js";

const LeftParenthesis = _mod14852.TYPE.LeftParenthesis;
const RightParenthesis = _mod14852.TYPE.RightParenthesis;
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
    const element = {
      type: "Parentheses",
      loc: self.getLocation(this.scanner.tokenStart, self.scanner.tokenStart),
      children: typeof call === "unknown" ? call(arg1) : call(self, arg1),
    };
    return element;
  },
  generate(arg0) {
    this.chunk("(");
    this.children(arg0);
    this.chunk(")");
  },
};
const obj2 = { children: null };
const items = [[]];
obj2.children = items;
obj.structure = obj2;

export default obj;
