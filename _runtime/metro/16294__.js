// === Module 16294: ? ===

// Module 16294
import _mod16244 from "module_16244" /* 16244 */;

const CDO = _mod16244.TYPE.CDO;

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