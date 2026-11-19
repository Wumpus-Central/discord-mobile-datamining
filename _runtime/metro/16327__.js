// === Module 16327: ? ===

// Module 16327
import _mod16235 from "module_16235" /* 16235 */;

const String = _mod16235.TYPE.String;
const Ident = _mod16235.TYPE.Ident;
const Url = _mod16235.TYPE.Url;
const Function = _mod16235.TYPE.Function;
const LeftParenthesis = _mod16235.TYPE.LeftParenthesis;

export default {
  parse: {
    prelude() {
      const self = this;
      const list = this.createList();
      const scanner = this.scanner;
      scanner.skipSC();
      const tokenType = this.scanner.tokenType;
      if (String === tokenType) {
        list.push(self.String());
      } else {
        if (Url !== tokenType) {
          if (Function !== tokenType) {
            self.error("String or url() is expected");
          }
        }
        list.push(self.Url());
      }
      let tmp7 = self.lookupNonWSType(0) !== Ident;
      if (tmp7) {
        tmp7 = self.lookupNonWSType(0) !== LeftParenthesis;
      }
      if (!tmp7) {
        list.push(self.WhiteSpace());
        list.push(self.MediaQueryList());
      }
      return list;
    },
    block: null
  }
};