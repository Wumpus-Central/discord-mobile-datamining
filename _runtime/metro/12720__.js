// === Module 12720: ? ===

// Module 12720
import _mod12657 from "module_12657" /* 12657 */;

const Comma = _mod12657.TYPE.Comma;
const obj = {
  name: "MediaQueryList",
  structure: null,
  parse(arg0) {
    const self = this;
    const list = this.createList();
    const scanner = this.scanner;
    scanner.skipSC();
    if (!this.scanner.eof) {
      list.push(self.MediaQuery(arg0));
      if (self.scanner.tokenType === Comma) {
        self.scanner.next();
        while (!self.scanner.eof) {
          let arr3 = list.push(self.MediaQuery(arg0));
          if (self.scanner.tokenType !== Comma) {
            break;
          }
        }
        const iter = self.scanner;
      }
    }
    const element = { type: "MediaQueryList", loc: self.getLocationFromList(list), children: list };
    return element;
  },
  generate(arg0) {
    this.children(arg0, function() {
      this.chunk(",");
    });
  }
};
const obj2 = { children: null };
const items = [["MediaQuery"]];
obj2.children = items;
obj.structure = obj2;

export default obj;