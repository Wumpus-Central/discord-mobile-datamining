// === Module 12719: ? ===

// Module 12719
import _mod12657 from "module_12657" /* 12657 */;

const WhiteSpace = _mod12657.TYPE.WhiteSpace;
const Comment = _mod12657.TYPE.Comment;
const Ident = _mod12657.TYPE.Ident;
const LeftParenthesis = _mod12657.TYPE.LeftParenthesis;
const obj = {
  name: "MediaQuery",
  structure: null,
  parse() {
    const self = this;
    const scanner = this.scanner;
    scanner.skipSC();
    const list = this.createList();
    let tmp2 = null;
    let tmp3 = null;
    let tmp4 = null;
    if (!this.scanner.eof) {
      while (true) {
        let tokenType = self.scanner.tokenType;
        if (Comment === tokenType) {
          let iter = self.scanner;
          let nextResult = iter.next();
          let WhiteSpaceResult = tmp2;
          let IdentifierResult = tmp3;
        } else {
          if (WhiteSpace === tokenType) {
            WhiteSpaceResult = self.WhiteSpace();
            IdentifierResult = tmp3;
          } else {
            if (Ident === tokenType) {
              IdentifierResult = self.Identifier();
              WhiteSpaceResult = tmp2;
              if (null !== tmp2) {
                let arr = list.push(tmp2);
                WhiteSpaceResult = null;
              }
              let arr3 = list.push(IdentifierResult);
            } else {
              tmp4 = tmp3;
              if (LeftParenthesis !== tokenType) {
                break;
              } else {
                IdentifierResult = self.MediaFeature();
              }
            }
            break;
          }
          break;
        }
        tmp2 = WhiteSpaceResult;
        tmp3 = IdentifierResult;
        tmp4 = IdentifierResult;
        if (self.scanner.eof) {
          break;
        }
      }
    }
    if (null === tmp4) {
      self.error("Identifier or parenthesis is expected");
    }
    const element = { type: "MediaQuery", loc: self.getLocationFromList(list), children: list };
    return element;
  },
  generate(arg0) {
    this.children(arg0);
  }
};
const obj2 = { children: null };
const items = [["Identifier", "MediaFeature", "WhiteSpace"]];
obj2.children = items;
obj.structure = obj2;

export default obj;