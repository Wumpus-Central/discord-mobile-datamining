// _runtime/metro/12887__.js
import _mod12836 from "12836__.js";

const Ident = _mod12836.TYPE.Ident;
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
