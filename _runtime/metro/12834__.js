// === Module 12834: ? ===

// Module 12834
import _mod12833 from "module_12833" /* 12833 */;

const WhiteSpace = _mod12833.TYPE.WhiteSpace;
const Comment = _mod12833.TYPE.Comment;

export default function readSequence(recognizer) {
  const self = this;
  const list = this.createList();
  const obj = { recognizer, space: null, ignoreWS: false, ignoreWSAfter: false };
  const scanner = this.scanner;
  scanner.skipSC();
  if (!this.scanner.eof) {
    while (true) {
      let tokenType = self.scanner.tokenType;
      if (Comment === tokenType) {
        let iter2 = self.scanner;
        let nextResult = iter2.next();
      } else {
        if (WhiteSpace === tokenType) {
          if (obj.ignoreWS) {
            let iter = self.scanner;
            let nextResult1 = iter.next();
          } else {
            obj.space = self.WhiteSpace();
          }
        } else {
          let getNode = recognizer.getNode;
          let call = getNode.call;
          let tmp3 = typeof call === "unknown" ? getNode(obj) : call(self, obj);
          if (undefined === tmp3) {
            break;
          } else {
            if (null !== obj.space) {
              let arr = list.push(obj.space);
              obj.space = null;
            }
            let arr3 = list.push(tmp3);
            if (obj.ignoreWSAfter) {
              obj.ignoreWSAfter = false;
              obj.ignoreWS = true;
            } else {
              obj.ignoreWS = false;
            }
          }
        }
        break;
      }
      if (self.scanner.eof) {
        break;
      }
    }
  }
  return list;
};