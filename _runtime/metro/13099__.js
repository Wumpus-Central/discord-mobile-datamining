// === Module 13099: ? ===

// Module 13099
import _mod13050 from "module_13050" /* 13050 */;

const CDC = _mod13050.TYPE.CDC;

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