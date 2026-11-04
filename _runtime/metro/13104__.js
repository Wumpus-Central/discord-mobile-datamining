// === Module 13104: ? ===

// Module 13104
import _mod13054 from "module_13054" /* 13054 */;

const CDO = _mod13054.TYPE.CDO;

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