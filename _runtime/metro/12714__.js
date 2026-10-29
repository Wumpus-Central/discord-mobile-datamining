// === Module 12714: ? ===

// Module 12714
import _mod12657 from "module_12657" /* 12657 */;

const RightParenthesis = _mod12657.TYPE.RightParenthesis;
const obj = {
  name: "Function",
  structure: null,
  parse(call, arg1) {
    const self = this;
    const str = this.consumeFunctionName();
    const formatted = str.toLowerCase();
    if (arg1.hasOwnProperty(formatted)) {
      const call2 = tmp4.call;
      typeof call2 === "unknown" ? arg1[formatted](arg1) : call2(self, arg1);
    } else {
      call = call.call;
      if (!self.scanner.eof) {
        self.eat(RightParenthesis);
      }
      const element = { type: "Function", loc: self.getLocation(this.scanner.tokenStart, self.scanner.tokenStart), name: str, children: typeof call === "unknown" ? call(arg1) : call(self, arg1) };
      return element;
    }
  },
  generate(name) {
    this.chunk(name.name);
    this.chunk("(");
    this.children(name);
    this.chunk(")");
  },
  walkContext: "function"
};
const obj2 = { name: String, children: null };
const items = [[]];
obj2.children = items;
obj.structure = obj2;

export default obj;