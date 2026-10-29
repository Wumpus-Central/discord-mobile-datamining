// === Module 12723: ? ===

// Module 12723
let obj = {
  name: "Operator",
  structure: { value: String },
  parse() {
    const tokenStart = this.scanner.tokenStart;
    this.scanner.next();
    const obj = { type: "Operator", loc: this.getLocation(tokenStart, this.scanner.tokenStart), value: null };
    const scanner = this.scanner;
    obj.value = scanner.substrToCursor(tokenStart);
    return obj;
  },
  generate(value) {
    this.chunk(value.value);
  }
};

export default obj;