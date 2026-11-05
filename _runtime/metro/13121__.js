// === Module 13121: ? ===

// Module 13121
import _mod13062 from "module_13062" /* 13062 */;

const Ident = _mod13062.TYPE.Ident;
const obj = {
  name: "Identifier",
  structure: { name: String },
  parse() {
    return { type: "Identifier", loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd), name: this.consume(Ident) };
  },
  generate(name) {
    this.chunk(name.name);
  }
};

export default obj;