// === Module 13101: ? ===

// Module 13101
import _mod13050 from "module_13050" /* 13050 */;

const Ident = _mod13050.TYPE.Ident;
const obj = {
  name: "ClassSelector",
  structure: { name: String },
  parse() {
    const self = this;
    const scanner = this.scanner;
    if (!scanner.isDelim(46)) {
      self.error("Full stop is expected");
    }
    self.scanner.next();
    return { type: "ClassSelector", loc: self.getLocation(self.scanner.tokenStart - 1, self.scanner.tokenEnd), name: self.consume(Ident) };
  },
  generate(name) {
    this.chunk(".");
    this.chunk(name.name);
  }
};

export default obj;