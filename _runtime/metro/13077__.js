// === Module 13077: ? ===

// Module 13077
import _mod13027 from "module_13027" /* 13027 */;

const CDO = _mod13027.TYPE.CDO;

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