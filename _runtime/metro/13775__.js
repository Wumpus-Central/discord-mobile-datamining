// === Module 13775: ? ===

// Module 13775
import _mod13726 from "module_13726" /* 13726 */;

const CDC = _mod13726.TYPE.CDC;

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