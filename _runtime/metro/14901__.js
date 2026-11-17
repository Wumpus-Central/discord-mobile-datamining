// === Module 14901: ? ===

// Module 14901
import _mod14852 from "module_14852" /* 14852 */;

const CDC = _mod14852.TYPE.CDC;

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