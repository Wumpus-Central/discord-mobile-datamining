// _runtime/metro/12857__.js
import _mod12798 from "12798__.js";

const Ident = _mod12798.TYPE.Ident;
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
