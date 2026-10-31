// === Module 12883: ? ===

// Module 12883
import _mod12833 from "module_12833" /* 12833 */;

const CDO = _mod12833.TYPE.CDO;

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