// === Module 13021: ? ===

// Module 13021
import _mod12972 from "module_12972" /* 12972 */;

const CDC = _mod12972.TYPE.CDC;

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