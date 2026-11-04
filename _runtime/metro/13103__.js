// === Module 13103: ? ===

// Module 13103
import _mod13054 from "module_13054" /* 13054 */;

const CDC = _mod13054.TYPE.CDC;

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