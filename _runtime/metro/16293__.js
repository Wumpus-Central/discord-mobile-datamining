// === Module 16293: ? ===

// Module 16293
import _mod16244 from "module_16244" /* 16244 */;

const CDC = _mod16244.TYPE.CDC;

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