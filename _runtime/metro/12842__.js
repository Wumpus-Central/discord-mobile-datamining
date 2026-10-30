// _runtime/metro/12842__.js
import _mod12798 from "12798__.js";

function getOffsetExcludeWS() {
  let self = this;
  if (this.scanner.tokenIndex > 0) {
    const scanner = self.scanner;
    if (scanner.lookupType(-1) === WhiteSpace) {
      let num2 = 1;
      if (self.scanner.tokenIndex > 1) {
        const scanner2 = self.scanner;
        self = self.scanner.tokenIndex;
        num2 = self - num2;
        let firstCharOffset = scanner2.getTokenStart(num2);
      } else {
        firstCharOffset = self.scanner.firstCharOffset;
      }
    }
  }
  return self.scanner.tokenStart;
}
function balanceEnd() {
  return 0;
}
const WhiteSpace = _mod12798.TYPE.WhiteSpace;
const Semicolon = _mod12798.TYPE.Semicolon;
const LeftCurlyBracket = _mod12798.TYPE.LeftCurlyBracket;
const Delim = _mod12798.TYPE.Delim;
let obj = {
  name: "Raw",
  structure: { value: String },
  parse(arg0, balanceEnd, arg2) {
    const self = this;
    let tmp = balanceEnd;
    const scanner = this.scanner;
    const tokenStart1 = scanner.getTokenStart(arg0);
    ({ scanner: scanner2, scanner: scanner3 } = this);
    if (!balanceEnd) {
      tmp = balanceEnd;
    }
    scanner2.skip(scanner3.getRawLength(arg0, tmp));
    if (arg2) {
      if (self.scanner.tokenStart > tokenStart1) {
        const call = getOffsetExcludeWS.call;
        if (typeof call !== "unknown") {
          call(self);
        }
        if (self.scanner.tokenIndex <= 0) {
          const tokenStart2 = self.scanner.tokenStart;
        } else {
          const scanner4 = self.scanner;
        }
        let num3 = 1;
        if (self.scanner.tokenIndex > 1) {
          const scanner5 = self.scanner;
          num3 = self.scanner.tokenIndex - num3;
          let firstCharOffset = scanner5.getTokenStart(num3);
        } else {
          firstCharOffset = self.scanner.firstCharOffset;
        }
      }
    }
    const tokenStart = self.scanner.tokenStart;
    const obj = {
      type: "Raw",
      loc: self.getLocation(tokenStart1, tokenStart),
      value: self.scanner.source.substring(tokenStart1, tokenStart),
    };
    return obj;
  },
  generate(value) {
    this.chunk(value.value);
  },
  mode: {
    default: balanceEnd,
    leftCurlyBracket(arg0) {
      let num = 0;
      if (arg0 === LeftCurlyBracket) {
        num = 1;
      }
      return num;
    },
    leftCurlyBracketOrSemicolon(arg0) {
      if (arg0 === LeftCurlyBracket) {
        let num = 1;
      } else {
        num = 0;
      }
      return num;
    },
    exclamationMarkOrSemicolon(arg0, str, sum) {
      if (arg0 !== Delim) {
        let num2 = 0;
        return num2;
      }
      num2 = 1;
    },
    semicolonIncluded(arg0) {
      let num = 0;
      if (arg0 === Semicolon) {
        num = 2;
      }
      return num;
    },
  },
};

export default obj;
