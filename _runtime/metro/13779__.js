// === Module 13779: ? ===

// Module 13779
import _mod13730 from "module_13730" /* 13730 */;

const CDC = _mod13730.TYPE.CDC;

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