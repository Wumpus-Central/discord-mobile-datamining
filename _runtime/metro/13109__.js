// === Module 13109: ? ===

// Module 13109
import _mod13050 from "module_13050" /* 13050 */;

const Ident = _mod13050.TYPE.Ident;
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