// === Module 12731: ? ===

// Module 12731
import _mod12657 from "module_12657" /* 12657 */;

const Comma = _mod12657.TYPE.Comma;
const obj = {
  name: "SelectorList",
  structure: null,
  parse() {
    const self = this;
    const list = this.createList();
    if (!this.scanner.eof) {
      list.push(self.Selector());
      if (self.scanner.tokenType === Comma) {
        self.scanner.next();
        while (!self.scanner.eof) {
          let arr3 = list.push(self.Selector());
          if (self.scanner.tokenType !== Comma) {
            break;
          }
        }
        const iter = self.scanner;
      }
    }
    const element = { type: "SelectorList", loc: self.getLocationFromList(list), children: list };
    return element;
  },
  generate(arg0) {
    this.children(arg0, function() {
      this.chunk(",");
    });
  },
  walkContext: "selector"
};
const obj2 = { children: null };
const items = [["Selector", "Raw"]];
obj2.children = items;
obj.structure = obj2;

export default obj;