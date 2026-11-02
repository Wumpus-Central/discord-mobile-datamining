// === Module 12885: ? ===

// Module 12885
import _mod12836 from "module_12836" /* 12836 */;

const CDC = _mod12836.TYPE.CDC;

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