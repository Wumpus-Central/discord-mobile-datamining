// === Module 13111: ? ===

// Module 13111
import _mod13062 from "module_13062" /* 13062 */;

const CDC = _mod13062.TYPE.CDC;

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