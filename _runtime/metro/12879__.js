// _runtime/metro/12879__.js
import _mod12833 from "12833__.js";

function getAttributeName() {
  const self = this;
  if (this.scanner.eof) {
    self.error("Unexpected end of input");
  }
  const tokenStart = self.scanner.tokenStart;
  const scanner = self.scanner;
  if (scanner.isDelim(42)) {
    iter.next();
    let flag = false;
    let flag2 = true;
  } else {
    flag = true;
    flag2 = false;
    if (!iter.isDelim(124)) {
      self.eat(Ident);
      flag = true;
      flag2 = false;
    }
  }
  const scanner2 = self.scanner;
  if (scanner2.isDelim(124)) {
    const source = self.scanner.source;
    if (61 !== source.charCodeAt(self.scanner.tokenStart + 1)) {
      self.scanner.next();
      self.eat(Ident);
      const iter2 = self.scanner;
    } else if (flag2) {
      self.error("Identifier is expected", self.scanner.tokenEnd);
    }
  } else if (flag2) {
    self.error("Vertical line is expected");
  }
  if (flag) {
    flag = self.scanner.tokenType === Colon;
  }
  if (flag) {
    self.scanner.next();
    self.eat(Ident);
    const iter3 = self.scanner;
  }
  const obj = { type: "Identifier", loc: self.getLocation(tokenStart, self.scanner.tokenStart), name: null };
  const scanner3 = self.scanner;
  obj.name = scanner3.substrToCursor(tokenStart);
  return obj;
}
function getOperator() {
  const self = this;
  const tokenStart = this.scanner.tokenStart;
  const source = this.scanner.source;
  const charCodeAtResult = source.charCodeAt(tokenStart);
  let tmp3 = tmp2;
  if (61 !== charCodeAtResult) {
    tmp3 = 126 !== charCodeAtResult;
  }
  if (tmp3) {
    tmp3 = 94 !== charCodeAtResult;
  }
  if (tmp3) {
    tmp3 = 36 !== charCodeAtResult;
  }
  if (tmp3) {
    tmp3 = 42 !== charCodeAtResult;
  }
  if (tmp3) {
    tmp3 = 124 !== charCodeAtResult;
  }
  if (tmp3) {
    self.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected");
  }
  self.scanner.next();
  if (61 !== charCodeAtResult) {
    const scanner = self.scanner;
    if (!scanner.isDelim(61)) {
      self.error("Equal sign is expected");
    }
    self.scanner.next();
    const iter2 = self.scanner;
  }
  const scanner2 = self.scanner;
  return scanner2.substrToCursor(tokenStart);
}
const Ident = _mod12833.TYPE.Ident;
const String = _mod12833.TYPE.String;
const Colon = _mod12833.TYPE.Colon;
const LeftSquareBracket = _mod12833.TYPE.LeftSquareBracket;
const RightSquareBracket = _mod12833.TYPE.RightSquareBracket;
let obj = {
  name: "AttributeSelector",
  structure: null,
  parse() {
    const self = this;
    this.eat(LeftSquareBracket);
    const scanner = this.scanner;
    scanner.skipSC();
    const call = getAttributeName.call;
    const scanner2 = self.scanner;
    scanner2.skipSC();
    let tmp7 = null;
    let tmp8 = null;
    let tmp9 = null;
    if (self.scanner.tokenType !== RightSquareBracket) {
      if (self.scanner.tokenType === Ident) {
        let tokenValue = null;
        if (self.scanner.tokenType === tmp28) {
          const scanner7 = self.scanner;
          tokenValue = scanner7.getTokenValue();
          self.scanner.next();
          const scanner8 = self.scanner;
          scanner8.skipSC();
          const iter3 = self.scanner;
        }
        tmp7 = tokenValue;
        tmp8 = null;
        tmp9 = null;
      } else {
        const call2 = getOperator.call;
        if (typeof call2 === "unknown") {
          const tokenStart = self.scanner.tokenStart;
          const source = self.scanner.source;
          const charCodeAtResult = source.charCodeAt(tokenStart);
          let tmp12 = tmp11;
          if (61 !== charCodeAtResult) {
            tmp12 = 126 !== charCodeAtResult;
          }
          if (tmp12) {
            tmp12 = 94 !== charCodeAtResult;
          }
          if (tmp12) {
            tmp12 = 36 !== charCodeAtResult;
          }
          if (tmp12) {
            tmp12 = 42 !== charCodeAtResult;
          }
          if (tmp12) {
            tmp12 = 124 !== charCodeAtResult;
          }
          if (tmp12) {
            self.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected");
          }
          self.scanner.next();
          if (61 !== charCodeAtResult) {
            const scanner3 = self.scanner;
            if (!scanner3.isDelim(61)) {
              self.error("Equal sign is expected");
            }
            self.scanner.next();
            const iter2 = self.scanner;
          }
          const scanner4 = self.scanner;
          let substrToCursorResult = scanner4.substrToCursor(tokenStart);
          const iter = self.scanner;
        } else {
          substrToCursorResult = call2(self);
        }
        const scanner5 = self.scanner;
        scanner5.skipSC();
        if (self.scanner.tokenType === String) {
          let StringResult = self.String();
        } else {
          StringResult = self.Identifier();
        }
        const scanner6 = self.scanner;
        scanner6.skipSC();
      }
    }
    self.eat(RightSquareBracket);
    const tmp4 = typeof call === "unknown" ? getAttributeName() : call(self);
    return {
      type: "AttributeSelector",
      loc: self.getLocation(this.scanner.tokenStart, self.scanner.tokenStart),
      name: typeof call === "unknown" ? getAttributeName() : call(self),
      matcher: tmp9,
      value: tmp8,
      flags: tmp7,
    };
  },
  generate(name) {
    const self = this;
    this.chunk("[");
    this.node(name.name);
    let str = " ";
    let str2 = " ";
    if (null !== name.matcher) {
      self.chunk(name.matcher);
      let tmp4 = str;
      if (null !== name.value) {
        self.node(name.value);
        if ("String" === name.value.type) {
          str = "";
        }
        tmp4 = str;
      }
      str2 = tmp4;
    }
    if (null !== name.flags) {
      self.chunk(str2);
      self.chunk(name.flags);
    }
    self.chunk("]");
  },
};
const obj2 = { name: "Identifier", matcher: null, value: ["String", "Identifier", null], flags: null };
const items = [String, null];
obj2.matcher = items;
const items1 = [String, null];
obj2.flags = items1;
obj.structure = obj2;

export default obj;
