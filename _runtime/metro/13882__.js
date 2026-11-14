// _runtime/metro/13882__.js
import _mod13831 from "13831__.js";

const Ident = _mod13831.TYPE.Ident;
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
    return {
      type: "ClassSelector",
      loc: self.getLocation(self.scanner.tokenStart - 1, self.scanner.tokenEnd),
      name: self.consume(Ident),
    };
  },
  generate(name) {
    this.chunk(".");
    this.chunk(name.name);
  },
};

export default obj;
