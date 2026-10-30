// _runtime/metro/12850__.js
import _mod12798 from "12798__.js";

const Ident = _mod12798.TYPE.Ident;
let obj = {
  name: "Combinator",
  structure: { name: String },
  parse() {
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    const source = this.scanner.source;
    const charCodeAtResult = source.charCodeAt(this.scanner.tokenStart);
    if (62 !== charCodeAtResult) {
      if (43 !== charCodeAtResult) {
        if (126 !== charCodeAtResult) {
          if (47 === charCodeAtResult) {
            self.scanner.next();
            let tmp5 = self.scanner.tokenType === Ident;
            if (tmp5) {
              const scanner = self.scanner;
              tmp5 = false !== scanner.lookupValue(0, "deep");
            }
            if (!tmp5) {
              self.error("Identifier `deep` is expected");
            }
            self.scanner.next();
            const scanner2 = self.scanner;
            if (!scanner2.isDelim(47)) {
              self.error("Solidus is expected");
            }
            self.scanner.next();
            const iter = self.scanner;
            const iter2 = self.scanner;
            const iter3 = self.scanner;
          } else {
            self.error("Combinator is expected");
          }
        }
        const obj = { type: "Combinator", loc: self.getLocation(tokenStart, self.scanner.tokenStart), name: null };
        const scanner3 = self.scanner;
        obj.name = scanner3.substrToCursor(tokenStart);
        return obj;
      }
    }
    self.scanner.next();
    const iter4 = self.scanner;
  },
  generate(name) {
    this.chunk(name.name);
  },
};

export default obj;
