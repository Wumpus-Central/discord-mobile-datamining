// _runtime/metro/13773__.js
import _mod13726 from "13726__.js";
import _mod13770 from "13770__.js";

function consumeRaw(arg0) {
  return this.Raw(arg0, null, true);
}
function consumeRule() {
  return this.parseWithFallback(this.Rule, consumeRaw);
}
function consumeRawDeclaration(arg0) {
  return this.Raw(arg0, _mod13770.mode.semicolonIncluded, true);
}
function consumeDeclaration() {
  const self = this;
  if (this.scanner.tokenType === Semicolon) {
    const call = consumeRawDeclaration.call;
    const tokenIndex = self.scanner.tokenIndex;
    if (typeof call === "unknown") {
      let RawResult = self.Raw(tokenIndex, _mod13770.mode.semicolonIncluded, true);
    } else {
      RawResult = call(self, tokenIndex);
    }
    return RawResult;
  } else {
    if (self.scanner.tokenType === tmp) {
      self.scanner.next();
      const iter = self.scanner;
    }
    return self.parseWithFallback(self.Declaration, consumeRawDeclaration);
  }
}
const WhiteSpace = _mod13726.TYPE.WhiteSpace;
const Comment = _mod13726.TYPE.Comment;
const Semicolon = _mod13726.TYPE.Semicolon;
const AtKeyword = _mod13726.TYPE.AtKeyword;
const LeftCurlyBracket = _mod13726.TYPE.LeftCurlyBracket;
const RightCurlyBracket = _mod13726.TYPE.RightCurlyBracket;
const obj = {
  name: "Block",
  structure: null,
  parse(arg0) {
    const tmp = arg0 ? consumeDeclaration : consumeRule;
    const self = this;
    const list = this.createList();
    this.eat(LeftCurlyBracket);
    if (!this.scanner.eof) {
      const tokenType = self.scanner.tokenType;
      while (RightCurlyBracket !== tokenType) {
        if (WhiteSpace !== tokenType) {
          if (Comment !== tokenType) {
            if (AtKeyword === tokenType) {
              let arr = list.push(self.parseWithFallback(self.Atrule, consumeRaw));
            } else {
              let call = tmp.call;
              let arr3 = list.push(typeof call === "unknown" ? tmp() : call(self));
            }
          }
          if (self.scanner.eof) {
            break;
          }
        }
        let iter = self.scanner;
        let nextResult = iter.next();
      }
    }
    if (!self.scanner.eof) {
      self.eat(RightCurlyBracket);
    }
    const element = {
      type: "Block",
      loc: self.getLocation(this.scanner.tokenStart, self.scanner.tokenStart),
      children: list,
    };
    return element;
  },
  generate(arg0) {
    this.chunk("{");
    this.children(arg0, function (type) {
      if ("Declaration" === type.type) {
        const self = this;
        this.chunk(";");
      }
    });
    this.chunk("}");
  },
  walkContext: "block",
};
const obj2 = { children: null };
const items = [["Atrule", "Rule", "Declaration"]];
obj2.children = items;
obj.structure = obj2;

export default obj;
