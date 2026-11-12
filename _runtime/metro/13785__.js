// === Module 13785: ? ===

// Module 13785
import _mod13726 from "module_13726" /* 13726 */;

const Ident = _mod13726.TYPE.Ident;
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