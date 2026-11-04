// === Module 13110: ? ===

// Module 13110
import _mod13055 from "module_13055" /* 13055 */;
import _mod13099 from "module_13099" /* 13099 */;

function consumeRaw(arg0) {
  return this.Raw(arg0, _mod13099.mode.semicolonIncluded, true);
}
const WhiteSpace = _mod13055.TYPE.WhiteSpace;
const Comment = _mod13055.TYPE.Comment;
const Semicolon = _mod13055.TYPE.Semicolon;
const obj = {
  name: "DeclarationList",
  structure: null,
  parse() {
    const self = this;
    const list = this.createList();
    if (!this.scanner.eof) {
      while (true) {
        let tokenType = self.scanner.tokenType;
        if (WhiteSpace !== tokenType) {
          if (Comment !== tokenType) {
            if (Semicolon !== tokenType) {
              let arr = list.push(self.parseWithFallback(self.Declaration, consumeRaw));
            }
            if (self.scanner.eof) {
              break;
            }
          }
        }
        let iter = self.scanner;
        let nextResult = iter.next();
      }
    }
    const element = { type: "DeclarationList", loc: self.getLocationFromList(list), children: list };
    return element;
  },
  generate(arg0) {
    this.children(arg0, function(type) {
      if ("Declaration" === type.type) {
        const self = this;
        this.chunk(";");
      }
    });
  }
};
const obj2 = { children: null };
const items = [["Declaration"]];
obj2.children = items;
obj.structure = obj2;

export default obj;