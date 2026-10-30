// _runtime/metro/12862__.js

export default {
  name: "Nth",
  structure: { nth: ["AnPlusB", "Identifier"], selector: ["SelectorList", null] },
  parse(arg0) {
    const self = this;
    const scanner = this.scanner;
    scanner.skipSC();
    const tokenStart = this.scanner.tokenStart;
    const scanner2 = this.scanner;
    if (!scanner2.lookupValue(0, "odd")) {
      const scanner3 = self.scanner;
      if (!scanner3.lookupValue(0, "even")) {
        let AnPlusBResult = self.AnPlusB();
      }
      const scanner4 = self.scanner;
      scanner4.skipSC();
      if (arg0) {
        const scanner5 = self.scanner;
        if (scanner5.lookupValue(0, "of")) {
          self.scanner.next();
          const SelectorListResult = self.SelectorList();
          let tmp5 = SelectorListResult;
          let offset = tokenStart;
          if (self.needPositions) {
            offset = self.getLastListNode(SelectorListResult.children).loc.end.offset;
            tmp5 = SelectorListResult;
          }
          const iter = self.scanner;
        }
        const obj = { type: "Nth", loc: self.getLocation(tokenStart, offset), nth: AnPlusBResult, selector: tmp5 };
        return obj;
      }
      tmp5 = null;
      offset = tokenStart;
      if (self.needPositions) {
        offset = AnPlusBResult.loc.end.offset;
        tmp5 = null;
      }
    }
    AnPlusBResult = self.Identifier();
  },
  generate(nth) {
    const self = this;
    this.node(nth.nth);
    if (null !== nth.selector) {
      self.chunk(" of ");
      self.node(nth.selector);
    }
  },
};
