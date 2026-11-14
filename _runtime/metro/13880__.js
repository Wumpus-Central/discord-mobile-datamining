// === Module 13880: ? ===

// Module 13880
import _mod13831 from "module_13831" /* 13831 */;

const CDC = _mod13831.TYPE.CDC;

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