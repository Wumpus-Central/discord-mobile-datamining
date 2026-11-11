// === Module 13780: ? ===

// Module 13780
import _mod13730 from "module_13730" /* 13730 */;

const CDO = _mod13730.TYPE.CDO;

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