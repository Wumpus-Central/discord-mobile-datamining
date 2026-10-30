// _runtime/metro/12874__.js
import _mod12798 from "12798__.js";

function consumeRaw(arg0) {
  return this.Raw(arg0, null, false);
}
const WhiteSpace = _mod12798.TYPE.WhiteSpace;
const Comment = _mod12798.TYPE.Comment;
const AtKeyword = _mod12798.TYPE.AtKeyword;
const CDO = _mod12798.TYPE.CDO;
const CDC = _mod12798.TYPE.CDC;
const obj = {
  name: "StyleSheet",
  structure: null,
  parse() {
    const self = this;
    const list = this.createList();
    if (!this.scanner.eof) {
      do {
        let tokenType = self.scanner.tokenType;
        if (WhiteSpace === tokenType) {
          let iter2 = self.scanner;
          let nextResult = iter2.next();
        } else {
          if (Comment === tokenType) {
            let source = self.scanner.source;
            if (33 !== source.charCodeAt(self.scanner.tokenStart + 2)) {
              let iter = self.scanner;
              let nextResult1 = iter.next();
            } else {
              let CommentResult = self.Comment();
            }
          } else if (CDO === tokenType) {
            CommentResult = self.CDO();
          } else if (CDC === tokenType) {
            CommentResult = self.CDC();
          } else if (AtKeyword === tokenType) {
            CommentResult = self.parseWithFallback(self.Atrule, consumeRaw);
          } else {
            CommentResult = self.parseWithFallback(self.Rule, consumeRaw);
          }
          let arr = list.push(CommentResult);
        }
      } while (!self.scanner.eof);
    }
    const element = {
      type: "StyleSheet",
      loc: self.getLocation(this.scanner.tokenStart, self.scanner.tokenStart),
      children: list,
    };
    return element;
  },
  generate(arg0) {
    this.children(arg0);
  },
  walkContext: "stylesheet",
};
const obj2 = { children: null };
const items = [["Comment", "CDO", "CDC", "Atrule", "Rule", "Raw"]];
obj2.children = items;
obj.structure = obj2;

export default obj;
