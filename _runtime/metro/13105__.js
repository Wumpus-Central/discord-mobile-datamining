// === Module 13105: ? ===

// Module 13105
import _mod13055 from "module_13055" /* 13055 */;

const CDO = _mod13055.TYPE.CDO;

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