// _runtime/metro/14911__.js
import _mod14852 from "14852__.js";

const Ident = _mod14852.TYPE.Ident;
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
