// _runtime/metro/12746__.js
import _mod12657 from "12657__.js";
import _mod12701 from "12701__.js";

const Comma = _mod12657.TYPE.Comma;
const WhiteSpace = _mod12657.TYPE.WhiteSpace;

export default function () {
  const self = this;
  const list = this.createList();
  const scanner = this.scanner;
  scanner.skipSC();
  list.push(this.Identifier());
  const scanner2 = this.scanner;
  scanner2.skipSC();
  if (this.scanner.tokenType !== Comma) {
    return list;
  } else {
    list.push(self.Operator());
    if (self.parseCustomProperty) {
      let element = self.Value(null);
    } else {
      element = self.Raw(self.scanner.tokenIndex, _mod12701.mode.exclamationMarkOrSemicolon, false);
    }
    if ("Value" === element.type) {
      const children = element.children;
      if (children.isEmpty()) {
        let diff = self.scanner.tokenIndex - self.scanner.tokenIndex;
        if (diff <= 0) {
          const scanner3 = self.scanner;
          while (scanner3.lookupType(diff) !== WhiteSpace) {
            diff = diff + 1;
          }
        }
        const children2 = element.children;
        children2.appendData({ type: "WhiteSpace", loc: null, value: " " });
      }
    }
    list.push(element);
  }
}
