// === Module 12886: ? ===

// Module 12886
import _mod12836 from "module_12836" /* 12836 */;

const CDO = _mod12836.TYPE.CDO;

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