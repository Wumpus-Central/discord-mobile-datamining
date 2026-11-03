// === Module 13022: ? ===

// Module 13022
import _mod12972 from "module_12972" /* 12972 */;

const CDO = _mod12972.TYPE.CDO;

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