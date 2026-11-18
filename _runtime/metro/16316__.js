// _runtime/metro/16316__.js
import _mod16244 from "16244__.js";
import _mod16288 from "16288__.js";

function consumeRaw(arg0) {
  return this.Raw(arg0, _mod16288.mode.leftCurlyBracket, true);
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
const LeftCurlyBracket = _mod16244.TYPE.LeftCurlyBracket;

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
        parseWithFallbackResult = self.Raw(tokenIndex, _mod16288.mode.leftCurlyBracket, true);
      } else {
        parseWithFallbackResult = call(self, tokenIndex);
      }
    }
    const obj = {
      type: "Rule",
      loc: self.getLocation(this.scanner.tokenStart, self.scanner.tokenStart),
      prelude: parseWithFallbackResult,
      block: self.Block(true),
    };
    return obj;
  },
  generate(prelude) {
    this.node(prelude.prelude);
    this.node(prelude.block);
  },
  walkContext: "rule",
};
