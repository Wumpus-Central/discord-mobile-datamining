// === Module 13134: ? ===

// Module 13134
import _mod13062 from "module_13062" /* 13062 */;
import _mod13106 from "module_13106" /* 13106 */;

function consumeRaw(arg0) {
  return this.Raw(arg0, _mod13106.mode.leftCurlyBracket, true);
}
function consumePrelude() {
  const self = this;
  const SelectorListResult = this.SelectorList();
  let tmp2 = "Raw" !== SelectorListResult.type;
  if (tmp2) {
    tmp2 = false === self.scanner.eof;
  }
  if (tmp2) {
    tmp2 = self.scanner.tokenType !== LeftCurlyBracket;
  }
  if (tmp2) {
    self.error();
  }
  return SelectorListResult;
}
const LeftCurlyBracket = _mod13062.TYPE.LeftCurlyBracket;

export default {
  name: "Rule",
  structure: { prelude: ["SelectorList", "Raw"], block: ["Block"] },
  parse() {
    const self = this;
    const tokenIndex = this.scanner.tokenIndex;
    if (this.parseRulePrelude) {
      let parseWithFallbackResult = self.parseWithFallback(consumePrelude, consumeRaw);
    } else {
      const call = consumeRaw.call;
      if (typeof call === "unknown") {
        parseWithFallbackResult = self.Raw(tokenIndex, _mod13106.mode.leftCurlyBracket, true);
      } else {
        parseWithFallbackResult = call(self, tokenIndex);
      }
    }
    const obj = { type: "Rule", loc: self.getLocation(this.scanner.tokenStart, self.scanner.tokenStart), prelude: parseWithFallbackResult, block: self.Block(true) };
    return obj;
  },
  generate(prelude) {
    this.node(prelude.prelude);
    this.node(prelude.block);
  },
  walkContext: "rule"
};