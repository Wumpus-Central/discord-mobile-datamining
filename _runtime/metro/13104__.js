// === Module 13104: ? ===

// Module 13104
import _mod13055 from "module_13055" /* 13055 */;

const CDC = _mod13055.TYPE.CDC;

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