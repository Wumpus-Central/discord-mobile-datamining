// === Module 12886: ? ===

// Module 12886
import _mod12833 from "module_12833" /* 12833 */;

const Comment = _mod12833.TYPE.Comment;
let obj = {
  name: "Comment",
  structure: { value: String },
  parse() {
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    const tokenEnd = this.scanner.tokenEnd;
    this.eat(Comment);
    const sum = tokenEnd - tokenStart + 2;
    let tmp3 = sum >= 2;
    if (2 <= sum) {
      const source = self.scanner.source;
      tmp3 = 42 === source.charCodeAt(tokenEnd - 2);
    }
    if (tmp3) {
      const source2 = self.scanner.source;
      tmp3 = 47 === source2.charCodeAt(tokenEnd - 1);
    }
    let diff = tokenEnd;
    if (tmp3) {
      diff = tokenEnd - 2;
    }
    const obj = { type: "Comment", loc: self.getLocation(tokenStart, self.scanner.tokenStart), value: self.scanner.source.substring(tokenStart + 2, diff) };
    return obj;
  },
  generate(value) {
    this.chunk("/*");
    this.chunk(value.value);
    this.chunk("*/");
  }
};

export default obj;