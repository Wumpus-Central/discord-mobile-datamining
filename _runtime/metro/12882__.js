// === Module 12882: ? ===

// Module 12882
import _mod12833 from "module_12833" /* 12833 */;

const CDC = _mod12833.TYPE.CDC;

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