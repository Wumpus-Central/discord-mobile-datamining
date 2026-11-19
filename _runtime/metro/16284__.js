// === Module 16284: ? ===

// Module 16284
import _mod16235 from "module_16235" /* 16235 */;

const CDC = _mod16235.TYPE.CDC;

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