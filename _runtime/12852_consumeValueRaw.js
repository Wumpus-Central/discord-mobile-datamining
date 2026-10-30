// _runtime/12852_consumeValueRaw.js
import _mod12798 from "metro/12798__.js";
import _mod12827 from "metro/12827__.js";
import _mod12842 from "metro/12842__.js";

function consumeValueRaw(arg0) {
  return this.Raw(arg0, _mod12842.mode.exclamationMarkOrSemicolon, true);
}
function consumeCustomPropertyRaw(arg0) {
  return this.Raw(arg0, _mod12842.mode.exclamationMarkOrSemicolon, false);
}
function consumeValue() {
  const self = this;
  const ValueResult = this.Value();
  let tmp2 = "Raw" !== ValueResult.type;
  if (tmp2) {
    tmp2 = false === self.scanner.eof;
  }
  if (tmp2) {
    tmp2 = self.scanner.tokenType !== Semicolon;
  }
  if (tmp2) {
    const scanner = self.scanner;
    tmp2 = false === scanner.isDelim(33);
  }
  if (tmp2) {
    const scanner2 = self.scanner;
    tmp2 = false === scanner2.isBalanceEdge(this.scanner.tokenIndex);
  }
  if (tmp2) {
    self.error();
  }
  return ValueResult;
}
function readProperty() {
  const self = this;
  if (this.scanner.tokenType === Delim) {
    const source = self.scanner.source;
    const charCodeAtResult = source.charCodeAt(self.scanner.tokenStart);
    if (42 !== charCodeAtResult) {
      if (36 !== charCodeAtResult) {
        if (43 !== charCodeAtResult) {
          if (35 !== charCodeAtResult) {
            if (38 !== charCodeAtResult) {
              if (47 === charCodeAtResult) {
                self.scanner.next();
                const scanner = self.scanner;
                if (scanner.isDelim(47)) {
                  self.scanner.next();
                  const iter2 = self.scanner;
                }
                const iter = self.scanner;
              }
            }
          }
        }
      }
    }
    self.scanner.next();
    const iter3 = self.scanner;
  }
  if (self.scanner.tokenType === Hash) {
    self.eat(tmp4);
  } else {
    self.eat(Ident);
  }
  const scanner2 = self.scanner;
  return scanner2.substrToCursor(this.scanner.tokenStart);
}
function getImportant() {
  this.eat(Delim);
  const scanner = this.scanner;
  scanner.skipSC();
  const consumeResult = this.consume(Ident);
  return "important" === consumeResult || consumeResult;
}
const Ident = _mod12798.TYPE.Ident;
const Hash = _mod12798.TYPE.Hash;
const Colon = _mod12798.TYPE.Colon;
const Semicolon = _mod12798.TYPE.Semicolon;
const Delim = _mod12798.TYPE.Delim;
const WhiteSpace = _mod12798.TYPE.WhiteSpace;
let obj = {
  name: "Declaration",
  structure: null,
  parse() {
    const self = this;
    const call = readProperty.call;
    if (typeof call === "unknown") {
      if (self.scanner.tokenType === Delim) {
        const source = self.scanner.source;
        const charCodeAtResult = source.charCodeAt(self.scanner.tokenStart);
        if (42 !== charCodeAtResult) {
          if (36 !== charCodeAtResult) {
            if (43 !== charCodeAtResult) {
              if (35 !== charCodeAtResult) {
                if (38 !== charCodeAtResult) {
                  if (47 === charCodeAtResult) {
                    self.scanner.next();
                    const scanner = self.scanner;
                    if (scanner.isDelim(47)) {
                      self.scanner.next();
                      const iter2 = self.scanner;
                    }
                    const iter = self.scanner;
                  }
                }
              }
            }
          }
        }
        self.scanner.next();
        const iter3 = self.scanner;
      }
      let scanner2 = Hash;
      if (self.scanner.tokenType === Hash) {
        self.eat(scanner2);
      } else {
        self.eat(Ident);
      }
      scanner2 = self.scanner;
      scanner2.substrToCursor(self.scanner.tokenStart);
    } else {
      const callResult = call(self);
      const isCustomPropertyResult = _mod12827.isCustomProperty(callResult);
      const tmp17 = isCustomPropertyResult ? consumeCustomPropertyRaw : consumeValueRaw;
      const scanner3 = self.scanner;
      scanner3.skipSC();
      self.eat(Colon);
      if (!isCustomPropertyResult) {
        const scanner4 = self.scanner;
        scanner4.skipSC();
      }
      if (tmp16) {
        let element = self.parseWithFallback(consumeValue, tmp17);
      } else {
        const call2 = tmp17.call;
        const tokenIndex = self.scanner.tokenIndex;
        element = typeof call2 === "unknown" ? tmp17(tokenIndex) : call2(self, tokenIndex);
      }
      if (isCustomPropertyResult) {
        if ("Value" === element.type) {
          const children = element.children;
          if (children.isEmpty()) {
            let diff = self.scanner.tokenIndex - self.scanner.tokenIndex;
            if (diff <= 0) {
              const scanner5 = self.scanner;
              while (scanner5.lookupType(diff) !== WhiteSpace) {
                diff = diff + 1;
              }
              const children2 = element.children;
              children2.appendData({ type: "WhiteSpace", loc: null, value: " " });
            }
          }
        }
      }
      const scanner6 = self.scanner;
      if (!scanner6.isDelim(33)) {
        let tmp37 = false === self.scanner.eof;
        if (tmp37) {
          tmp37 = self.scanner.tokenType !== Semicolon;
        }
        if (tmp37) {
          const scanner9 = self.scanner;
          tmp37 = false === scanner9.isBalanceEdge(tmp2);
        }
        if (tmp37) {
          self.error();
        }
        const obj2 = {
          type: "Declaration",
          loc: self.getLocation(tmp, self.scanner.tokenStart),
          important: false,
          property: callResult,
          value: element,
        };
        return obj2;
      } else {
        const call3 = getImportant.call;
        if (typeof call3 === "unknown") {
          self.eat(Delim);
          const scanner7 = self.scanner;
          scanner7.skipSC();
          const consumeResult = self.consume(Ident);
          let call3Result = "important" === consumeResult || consumeResult;
          const tmp33 = "important" === consumeResult || consumeResult;
        } else {
          call3Result = call3(self);
        }
        const scanner8 = self.scanner;
        scanner8.skipSC();
      }
      tmp16 = isCustomPropertyResult ? self.parseCustomProperty : self.parseValue;
    }
  },
  generate(property) {
    const self = this;
    this.chunk(property.property);
    this.chunk(":");
    this.node(property.value);
    if (property.important) {
      let str = "!important";
      if (true !== property.important) {
        str = `!${property.important}`;
      }
      self.chunk(str);
    }
  },
  walkContext: "declaration",
};
let obj2 = { important: null, property: String, value: ["Value", "Raw"] };
const items = [Boolean, String];
obj2.important = items;
obj.structure = obj2;

export default obj;
