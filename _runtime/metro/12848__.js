// === Module 12848: ? ===

// Module 12848
import _mod12798 from "module_12798" /* 12798 */;

const CDO = _mod12798.TYPE.CDO;

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