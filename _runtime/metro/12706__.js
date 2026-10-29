// === Module 12706: ? ===

// Module 12706
import _mod12657 from "module_12657" /* 12657 */;

const CDC = _mod12657.TYPE.CDC;

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