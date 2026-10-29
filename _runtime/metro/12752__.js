// === Module 12752: ? ===

// Module 12752
import _mod12657 from "module_12657" /* 12657 */;

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
const WhiteSpace = _mod12657.TYPE.WhiteSpace;
const Comment = _mod12657.TYPE.Comment;
const Ident = _mod12657.TYPE.Ident;
const Function = _mod12657.TYPE.Function;
const Colon = _mod12657.TYPE.Colon;
const LeftParenthesis = _mod12657.TYPE.LeftParenthesis;

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
    }
  }
};