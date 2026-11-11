// === Module 13785: ? ===

// Module 13785
import _mod13730 from "module_13730" /* 13730 */;
import _mod13774 from "module_13774" /* 13774 */;

function consumeRaw(arg0) {
  return this.Raw(arg0, _mod13774.mode.semicolonIncluded, true);
}
const WhiteSpace = _mod13730.TYPE.WhiteSpace;
const Comment = _mod13730.TYPE.Comment;
const Semicolon = _mod13730.TYPE.Semicolon;
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