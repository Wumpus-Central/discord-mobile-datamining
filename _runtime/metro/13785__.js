// _runtime/metro/13785__.js
import _mod13726 from "13726__.js";

const Ident = _mod13726.TYPE.Ident;
const obj = {
  name: "Identifier",
  structure: { name: String },
  parse() {
    return {
      type: "Identifier",
      loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
      name: this.consume(Ident),
    };
  },
  generate(name) {
    this.chunk(name.name);
  },
};

export default obj;
