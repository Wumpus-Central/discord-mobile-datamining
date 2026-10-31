// === Module 12876: ? ===

// Module 12876
import _mod12833 from "module_12833" /* 12833 */;
import _mod12877 from "module_12877" /* 12877 */;

function consumeRaw(arg0) {
  return this.Raw(arg0, _mod12877.mode.leftCurlyBracketOrSemicolon, true);
}
function isDeclarationBlockAtrule() {
  const scanner = this.scanner;
  let lookupTypeResult = scanner.lookupType(1);
  let num = 1;
  if (lookupTypeResult) {
    while (lookupTypeResult !== RightCurlyBracket) {
      if (lookupTypeResult !== LeftCurlyBracket) {
        if (lookupTypeResult !== AtKeyword) {
          let sum = num + 1;
          let scanner2 = this.scanner;
          lookupTypeResult = scanner2.lookupType(sum);
          num = sum;
        }
      }
      let flag = false;
      return false;
    }
    return true;
  }
  return false;
}
const AtKeyword = _mod12833.TYPE.AtKeyword;
const Semicolon = _mod12833.TYPE.Semicolon;
const LeftCurlyBracket = _mod12833.TYPE.LeftCurlyBracket;
const RightCurlyBracket = _mod12833.TYPE.RightCurlyBracket;
let obj = {
  name: "Atrule",
  structure: { name: String, prelude: ["AtrulePrelude", "Raw", null], block: ["Block", null] },
  parse() {
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    this.eat(AtKeyword);
    const scanner = this.scanner;
    const str = scanner.substrToCursor(tokenStart + 1);
    const formatted = str.toLowerCase();
    const scanner2 = this.scanner;
    scanner2.skipSC();
    let tmp4 = false === this.scanner.eof;
    if (tmp4) {
      tmp4 = self.scanner.tokenType !== LeftCurlyBracket;
    }
    if (tmp4) {
      tmp4 = self.scanner.tokenType !== Semicolon;
    }
    if (!tmp4) {
      const tokenType = self.scanner.tokenType;
      if (Semicolon === tokenType) {
        self.scanner.next();
        let BlockResult = null;
        const iter = self.scanner;
      } else {
        BlockResult = null;
        if (LeftCurlyBracket === tokenType) {
          const atrule = self.atrule;
          if (atrule.hasOwnProperty(formatted)) {
            if (typeof self.atrule[formatted].block === "function") {
              const block = self.atrule[formatted].block;
              const call3 = block.call;
              typeof call3 === "unknown" ? block() : call3(self);
            }
          }
          const call2 = isDeclarationBlockAtrule.call;
          if (typeof call2 === "unknown") {
            const scanner4 = self.scanner;
            let lookupTypeResult = scanner4.lookupType(1);
            let num = 1;
            let flag2 = false;
            if (lookupTypeResult) {
              flag2 = true;
              while (lookupTypeResult !== RightCurlyBracket) {
                flag2 = false;
                if (lookupTypeResult === LeftCurlyBracket) {
                  break;
                } else {
                  flag2 = false;
                  if (lookupTypeResult === AtKeyword) {
                    break;
                  } else {
                    let sum = num + 1;
                    let scanner5 = self.scanner;
                    lookupTypeResult = scanner5.lookupType(sum);
                    num = sum;
                    flag2 = false;
                    if (!lookupTypeResult) {
                      break;
                    }
                  }
                }
              }
            }
            let call2Result = flag2;
          } else {
            call2Result = call2(self);
          }
          BlockResult = self.Block(call2Result);
        }
      }
      const obj = { type: "Atrule", loc: self.getLocation(tokenStart, self.scanner.tokenStart), name: str, prelude: null, block: BlockResult };
      return obj;
    } else {
      if (self.parseAtrulePrelude) {
        ({ AtrulePrelude, parseWithFallback } = self);
        const element = parseWithFallback(AtrulePrelude.bind(self, str), consumeRaw);
        let RawResult = element;
        if (tmp12) {
          RawResult = null;
        }
        tmp12 = "AtrulePrelude" === element.type && null === element.children.head;
      } else {
        const call = consumeRaw.call;
        const tokenIndex = self.scanner.tokenIndex;
        if (typeof call === "unknown") {
          RawResult = self.Raw(tokenIndex, _mod12877.mode.leftCurlyBracketOrSemicolon, true);
        } else {
          RawResult = call(self, tokenIndex);
        }
      }
      const scanner3 = self.scanner;
      scanner3.skipSC();
    }
  },
  generate(name) {
    const self = this;
    this.chunk("@");
    this.chunk(name.name);
    if (null !== name.prelude) {
      self.chunk(" ");
      self.node(name.prelude);
    }
    if (name.block) {
      self.node(name.block);
    } else {
      self.chunk(";");
    }
  },
  walkContext: "atrule"
};

export default obj;