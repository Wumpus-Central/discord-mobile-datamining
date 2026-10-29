// === Module 12707: ? ===

// Module 12707
import _mod12657 from "module_12657" /* 12657 */;

const CDO = _mod12657.TYPE.CDO;

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