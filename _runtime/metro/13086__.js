// _runtime/metro/13086__.js
import _mod13027 from "13027__.js";

const Ident = _mod13027.TYPE.Ident;
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
