// === Module 12857: ? ===

// Module 12857
import _mod12798 from "module_12798" /* 12798 */;

const Ident = _mod12798.TYPE.Ident;
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