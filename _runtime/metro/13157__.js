// _runtime/metro/13157__.js
import _mod13062 from "13062__.js";

function consumeRaw() {
  return this.createSingleNodeList(this.Raw(this.scanner.tokenIndex, null, false));
}
function parentheses() {
  const self = this;
  const scanner = this.scanner;
  scanner.skipSC();
  if (this.scanner.tokenType === Ident) {
    if (self.lookupNonWSType(1) === Colon) {
      let singleNodeList = self.createSingleNodeList(self.Declaration());
    }
    return singleNodeList;
  }
  const call = readSequence.call;
  singleNodeList = typeof call === "unknown" ? readSequence() : call(self);
}
function readSequence() {
  const self = this;
  const list = this.createList();
  const scanner = this.scanner;
  scanner.skipSC();
  let tmp2 = null;
  if (!this.scanner.eof) {
    while (true) {
      let tokenType = self.scanner.tokenType;
      if (WhiteSpace === tokenType) {
        let WhiteSpaceResult = self.WhiteSpace();
      } else {
        if (Comment === tokenType) {
          let iter = self.scanner;
          let nextResult = iter.next();
          WhiteSpaceResult = tmp2;
        } else {
          if (Function === tokenType) {
            let FunctionResult = self.Function(consumeRaw, self.scope.AtrulePrelude);
          } else {
            if (Ident === tokenType) {
              FunctionResult = self.Identifier();
            } else if (LeftParenthesis !== tokenType) {
              break;
            } else {
              FunctionResult = self.Parentheses(parentheses, self.scope.AtrulePrelude);
            }
            break;
          }
          WhiteSpaceResult = tmp2;
          if (null !== tmp2) {
            let arr = list.push(tmp2);
            WhiteSpaceResult = null;
          }
          let arr3 = list.push(FunctionResult);
        }
        break;
      }
      tmp2 = WhiteSpaceResult;
      if (self.scanner.eof) {
        break;
      }
    }
  }
  return list;
}
const WhiteSpace = _mod13062.TYPE.WhiteSpace;
const Comment = _mod13062.TYPE.Comment;
const Ident = _mod13062.TYPE.Ident;
const Function = _mod13062.TYPE.Function;
const Colon = _mod13062.TYPE.Colon;
const LeftParenthesis = _mod13062.TYPE.LeftParenthesis;

export default {
  parse: {
    prelude() {
      const self = this;
      const call = readSequence.call;
      const tmp2 = typeof call === "unknown" ? readSequence() : call(self);
      if (null === self.getFirstListNode(tmp2)) {
        self.error("Condition is expected");
      }
      return tmp2;
    },
    block() {
      return this.Block(false);
    },
  },
};
