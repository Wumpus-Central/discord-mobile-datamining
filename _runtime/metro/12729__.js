// === Module 12729: ? ===

// Module 12729
import _mod12657 from "module_12657" /* 12657 */;
import _mod12701 from "module_12701" /* 12701 */;

function consumeRaw(arg0) {
  return this.Raw(arg0, _mod12701.mode.leftCurlyBracket, true);
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
const LeftCurlyBracket = _mod12657.TYPE.LeftCurlyBracket;

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
        parseWithFallbackResult = self.Raw(tokenIndex, _mod12701.mode.leftCurlyBracket, true);
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