// === Module 13776: ? ===

// Module 13776
import _mod13726 from "module_13726" /* 13726 */;

const CDO = _mod13726.TYPE.CDO;

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