// _runtime/metro/14902__.js
import _mod14852 from "14852__.js";

const CDO = _mod14852.TYPE.CDO;

export default {
  name: "CDO",
  structure: [],
  parse() {
    this.eat(CDO);
    return { type: "CDO", loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenStart) };
  },
  generate() {
    this.chunk("<!--");
  },
};
