// === Module 13113: ? ===

// Module 13113
import _mod13064 from "module_13064" /* 13064 */;

const CDC = _mod13064.TYPE.CDC;

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