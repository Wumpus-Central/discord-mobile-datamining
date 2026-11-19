// === Module 16285: ? ===

// Module 16285
import _mod16235 from "module_16235" /* 16235 */;

const CDO = _mod16235.TYPE.CDO;

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