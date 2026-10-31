// _runtime/12910_eatIdentifierOrAsterisk.js
import _mod12833 from "metro/12833__.js";

function eatIdentifierOrAsterisk() {
  const self = this;
  let tmp = this.scanner.tokenType !== Ident;
  if (tmp) {
    const scanner = self.scanner;
    tmp = false === scanner.isDelim(42);
  }
  if (tmp) {
    self.error("Identifier or asterisk is expected");
  }
  self.scanner.next();
}
const Ident = _mod12833.TYPE.Ident;
let obj = {
  name: "TypeSelector",
  structure: { name: String },
  parse() {
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    const scanner = this.scanner;
    if (scanner.isDelim(124)) {
      self.scanner.next();
      const call3 = eatIdentifierOrAsterisk.call;
      if (typeof call3 === "unknown") {
        let tmp14 = self.scanner.tokenType !== Ident;
        if (tmp14) {
          const scanner5 = self.scanner;
          tmp14 = false === scanner5.isDelim(42);
        }
        if (tmp14) {
          self.error("Identifier or asterisk is expected");
        }
        self.scanner.next();
        const iter5 = self.scanner;
      } else {
        call3(self);
      }
      const iter4 = self.scanner;
    } else {
      const call = eatIdentifierOrAsterisk.call;
      if (typeof call === "unknown") {
        let tmp3 = self.scanner.tokenType !== Ident;
        if (tmp3) {
          const scanner2 = self.scanner;
          tmp3 = false === scanner2.isDelim(42);
        }
        if (tmp3) {
          self.error("Identifier or asterisk is expected");
        }
        self.scanner.next();
        const iter = self.scanner;
      } else {
        call(self);
      }
      const scanner3 = self.scanner;
      if (scanner3.isDelim(124)) {
        self.scanner.next();
        const call2 = eatIdentifierOrAsterisk.call;
        if (typeof call2 === "unknown") {
          let tmp8 = self.scanner.tokenType !== Ident;
          if (tmp8) {
            const scanner4 = self.scanner;
            tmp8 = false === scanner4.isDelim(42);
          }
          if (tmp8) {
            self.error("Identifier or asterisk is expected");
          }
          self.scanner.next();
          const iter3 = self.scanner;
        } else {
          call2(self);
        }
        const iter2 = self.scanner;
      }
    }
    const obj = { type: "TypeSelector", loc: self.getLocation(tokenStart, self.scanner.tokenStart), name: null };
    const scanner6 = self.scanner;
    obj.name = scanner6.substrToCursor(tokenStart);
    return obj;
  },
  generate(name) {
    this.chunk(name.name);
  },
};

export default obj;
