// === Module 13076: ? ===

// Module 13076
import _mod13027 from "module_13027" /* 13027 */;

const CDC = _mod13027.TYPE.CDC;

export default {
  name: "CDC",
  structure: [],
  parse() {
    this.eat(CDC);
    return { type: "CDC", loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenStart) };
  },
  generate() {
    this.chunk("-->");
  }
};