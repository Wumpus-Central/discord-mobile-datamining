// === Module 13112: ? ===

// Module 13112
import _mod13062 from "module_13062" /* 13062 */;

const CDO = _mod13062.TYPE.CDO;

export default {
  name: "CDO",
  structure: [],
  parse() {
    this.eat(CDO);
    return { type: "CDO", loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenStart) };
  },
  generate() {
    this.chunk("<!--");
  }
};