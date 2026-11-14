// === Module 13881: ? ===

// Module 13881
import _mod13831 from "module_13831" /* 13831 */;

const CDO = _mod13831.TYPE.CDO;

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