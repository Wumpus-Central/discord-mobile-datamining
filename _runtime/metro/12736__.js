// === Module 12736: ? ===

// Module 12736
import _mod12657 from "module_12657" /* 12657 */;

const Function = _mod12657.TYPE.Function;
const Url = _mod12657.TYPE.Url;
const RightParenthesis = _mod12657.TYPE.RightParenthesis;

export default {
  name: "Url",
  structure: { value: ["String", "Raw"] },
  parse() {
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    const tokenType = this.scanner.tokenType;
    if (Url === tokenType) {
      const sum = tokenStart + 4;
      const diff = self.scanner.tokenEnd - 1;
      let tmp14 = sum;
      if (sum < diff) {
        const source3 = self.scanner.source;
        let tmp18 = sum;
        tmp14 = sum;
        if (obj6.isWhiteSpace(source3.charCodeAt(sum))) {
          const sum1 = tmp18 + 1;
          tmp14 = sum1;
          while (sum1 < diff) {
            let obj2 = _mod12657;
            let source = self.scanner.source;
            tmp18 = sum1;
            tmp14 = sum1;
            if (!obj2.isWhiteSpace(source.charCodeAt(sum1))) {
              break;
            }
          }
        }
        obj6 = _mod12657;
      }
      let tmp19 = diff;
      if (tmp14 < diff) {
        const source4 = self.scanner.source;
        let tmp23 = diff;
        tmp19 = diff;
        if (obj7.isWhiteSpace(source4.charCodeAt(diff - 1))) {
          const diff1 = tmp23 - 1;
          tmp19 = diff1;
          while (tmp14 < diff1) {
            let obj3 = _mod12657;
            let source2 = self.scanner.source;
            tmp23 = diff1;
            tmp19 = diff1;
            if (!obj3.isWhiteSpace(source2.charCodeAt(diff1 - 1))) {
              break;
            }
          }
        }
        obj7 = _mod12657;
      }
      const obj4 = { type: "Raw", loc: self.getLocation(tmp14, tmp19), value: self.scanner.source.substring(tmp14, tmp19) };
      self.eat(Url);
      let StringResult = obj4;
    } else if (Function === tokenType) {
      const obj = _mod12657;
      if (!obj.cmpStr(self.scanner.source, self.scanner.tokenStart, self.scanner.tokenEnd, "url(")) {
        self.error("Function name must be `url`");
      }
      self.eat(tmp26);
      const scanner = self.scanner;
      scanner.skipSC();
      StringResult = self.String();
      const scanner2 = self.scanner;
      scanner2.skipSC();
      self.eat(RightParenthesis);
    } else {
      self.error("Url or Function is expected");
    }
    return { type: "Url", loc: self.getLocation(tokenStart, self.scanner.tokenStart), value: StringResult };
  },
  generate(value) {
    this.chunk("url");
    this.chunk("(");
    this.node(value.value);
    this.chunk(")");
  }
};