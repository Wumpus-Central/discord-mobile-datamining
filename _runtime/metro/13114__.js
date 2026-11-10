// === Module 13114: ? ===

// Module 13114
import _mod13064 from "module_13064" /* 13064 */;

const CDO = _mod13064.TYPE.CDO;

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