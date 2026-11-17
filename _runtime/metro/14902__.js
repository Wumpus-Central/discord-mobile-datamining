// === Module 14902: ? ===

// Module 14902
import _mod14852 from "module_14852" /* 14852 */;

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
  }
};