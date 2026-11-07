// === Module 13100: ? ===

// Module 13100
import _mod13050 from "module_13050" /* 13050 */;

const CDO = _mod13050.TYPE.CDO;

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