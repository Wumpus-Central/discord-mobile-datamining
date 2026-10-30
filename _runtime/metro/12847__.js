// === Module 12847: ? ===

// Module 12847
import _mod12798 from "module_12798" /* 12798 */;

const CDC = _mod12798.TYPE.CDC;

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