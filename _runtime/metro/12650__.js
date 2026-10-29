// === Module 12650: ? ===

// Module 12650
import _mod12651 from "module_12651" /* 12651 */;
import _mod12653 from "module_12653" /* 12653 */;

const require = globalThis.__r;

function noop() {

}
const WhiteSpace = _mod12651.TYPE.WhiteSpace;
const Comment = _mod12651.TYPE.Comment;
const Ident = _mod12651.TYPE.Ident;
const Function = _mod12651.TYPE.Function;
const Url = _mod12651.TYPE.Url;
const Hash = _mod12651.TYPE.Hash;
const Percentage = _mod12651.TYPE.Percentage;
const Number = _mod12651.TYPE.Number;

export default function createParser(arg0) {
  let obj = arg0;
  const obj2 = { scanner: new require("TokenStream")(), locationMap: null, filename: "<unknown>", needPositions: false, onParseError: null, onParseErrorThrow: false, parseAtrulePrelude: true, parseRulePrelude: true, parseValue: true, parseCustomProperty: false, readSequence: null, createList: null, createSingleNodeList: null, getFirstListNode: null, getLastListNode: null, parseWithFallback: null, lookupNonWSType: null, eat: null, consume: null, consumeFunctionName: null, getLocation: null, getLocationFromList: null, error: null };
  const tmp = new require("TokenStream")();
  obj2.locationMap = new require("OffsetToLocation")();
  obj2.onParseError = noop;
  obj2.readSequence = require("module_12658");
  obj2.createList = function createList() {
    return new closure_0(12659)();
  };
  obj2.createSingleNodeList = function createSingleNodeList(self) {
    return new closure_0(12659)().appendData(self);
  };
  obj2.getFirstListNode = function getFirstListNode(sequence) {
    let firstResult = sequence;
    if (sequence) {
      firstResult = sequence.first();
    }
    return firstResult;
  };
  obj2.getLastListNode = function getLastListNode(children) {
    return children.last();
  };
  obj2.parseWithFallback = function parseWithFallback(Atrule, consumeRaw) {
    const self = this;
    try {
      const call = Atrule.call;
      if (typeof call === "unknown") {
        let callResult = Atrule();
      } else {
        callResult = call(self);
      }
      return callResult;
    } catch (tmp4) {
      if (obj.onParseErrorThrow) {
        throw tmp4;
      } else {
        const call2 = consumeRaw.call;
        if (typeof call2 === "unknown") {
          let call2Result = consumeRaw(tmp);
        } else {
          call2Result = call2(obj, tmp);
        }
        obj.onParseErrorThrow = true;
        obj.onParseError(tmp4, call2Result);
        obj.onParseErrorThrow = false;
        return call2Result;
      }
    }
  };
  obj2.lookupNonWSType = function lookupNonWSType(arg0) {
    let sum = arg0;
    const scanner = this.scanner;
    const lookupTypeResult = scanner.lookupType(+sum);
    while (lookupTypeResult === WhiteSpace) {
      sum = tmp2 + 1;
      if (0 !== lookupTypeResult) {
        continue;
      } else {
        return 0;
      }
    }
    return lookupTypeResult;
  };
  obj2.eat = function eat(arg0) {
    const self = this;
    if (this.scanner.tokenType === arg0) {
      self.scanner.next();
      const iter2 = self.scanner;
    } else {
      const tokenStart = self.scanner.tokenStart;
      let iter = `${closure_0(closure_1_1[0]).NAME[arg0]} is expected`;
      if (Ident === arg0) {
        if (self.scanner.tokenType === Function) {
          let tokenEnd = self.scanner.tokenEnd - 1;
          let str = "Identifier is expected but function found";
        } else {
          str = "Identifier is expected";
          tokenEnd = tokenStart;
        }
      } else {
        if (Hash === arg0) {
          const scanner = self.scanner;
          str = iter;
          tokenEnd = tokenStart;
          if (scanner.isDelim(35)) {
            iter = self.scanner;
            iter.next();
            tokenEnd = tokenStart + 1;
            str = "Name is expected";
          }
        } else if (Percentage !== arg0) {
          const source = self.scanner.source;
          str = iter;
          tokenEnd = tokenStart;
          if (source.charCodeAt(self.scanner.tokenStart) === arg0) {
            tokenEnd = tokenStart + 1;
            str = iter;
          }
        }
        str = iter;
        tokenEnd = tokenStart;
        if (self.scanner.tokenType === Number) {
          tokenEnd = self.scanner.tokenEnd;
          str = "Percent sign is expected";
        }
      }
      self.error(str, tokenEnd);
    }
  };
  obj2.consume = function consume(Number) {
    const scanner = this.scanner;
    const tokenValue = scanner.getTokenValue();
    this.eat(Number);
    return tokenValue;
  };
  obj2.consumeFunctionName = function consumeFunctionName() {
    const substr = this.scanner.source.substring(this.scanner.tokenStart, this.scanner.tokenEnd - 1);
    this.eat(Function);
    return substr;
  };
  obj2.getLocation = function getLocation(tokenStart, tokenStart2) {
    const self = this;
    let locationRange = null;
    if (this.needPositions) {
      const locationMap = self.locationMap;
      locationRange = locationMap.getLocationRange(tokenStart, tokenStart2, self.filename);
    }
    return locationRange;
  };
  obj2.getLocationFromList = function getLocationFromList(list) {
    const self = this;
    if (this.needPositions) {
      const firstListNode = self.getFirstListNode(list);
      const lastListNode = self.getLastListNode(list);
      const locationMap = self.locationMap;
      if (null !== firstListNode) {
        let tokenStart = firstListNode.loc.start.offset - self.locationMap.startOffset;
      } else {
        tokenStart = self.scanner.tokenStart;
      }
      if (null !== lastListNode) {
        let tokenStart2 = lastListNode.loc.end.offset - self.locationMap.startOffset;
      } else {
        tokenStart2 = self.scanner.tokenStart;
      }
      return locationMap.getLocationRange(tokenStart, tokenStart2, self.filename);
    } else {
      return null;
    }
  };
  obj2.error = function error(arg0, arg1) {
    const self = this;
    if (undefined !== arg1) {
      if (arg1 < self.scanner.source.length) {
        const locationMap2 = self.locationMap;
        let _location = locationMap2.getLocation(arg1);
      }
      let str = arg0;
      if (!arg0) {
        str = "Unexpected input";
      }
      const tmp62 = new closure_0(12660)(str, self.scanner.source, _location.offset, _location.line, _location.column);
      throw tmp62;
    }
    const locationMap = self.locationMap;
    const getLocation = locationMap.getLocation;
    if (self.scanner.eof) {
      _location = getLocation(closure_0(12653).findWhiteSpaceStart(self.scanner.source, self.scanner.source.length - 1));
      const obj = closure_0(12653);
    } else {
      _location = getLocation(self.scanner.tokenStart);
    }
  };
  _require = obj2;
  if (!arg0) {
    obj = {};
  }
  const obj3 = { context: {}, scope: {}, atrule: {}, pseudo: {} };
  if (obj.parseContext) {
    for (const key10042 in obj.parseContext) {
      let tmp4 = typeof obj.parseContext[key10042];
      if ("function" === tmp4) {
        obj3.context[key10042] = obj.parseContext[key10042];
        continue;
      } else {
        if ("string" !== tmp4) {
          continue;
        } else {
          _require = obj.parseContext[key10042];
          obj3.context[key10042] = function() {
            return this[closure_0]();
          };
          continue;
        }
        continue;
      }
      continue;
    }
  }
  if (obj.scope) {
    for (const key10053 in obj.scope) {
      obj3.scope[key10053] = obj.scope[key10053];
      continue;
    }
  }
  if (obj.atrule) {
    for (const key10057 in obj.atrule) {
      let tmp7 = obj.atrule[key10057];
      if (!tmp7.parse) {
        continue;
      } else {
        obj3.atrule[key10057] = tmp7.parse;
        continue;
      }
      continue;
    }
  }
  if (obj.pseudo) {
    for (const key10063 in obj.pseudo) {
      let tmp9 = obj.pseudo[key10063];
      if (!tmp9.parse) {
        continue;
      } else {
        obj3.pseudo[key10063] = tmp9.parse;
        continue;
      }
      continue;
    }
  }
  if (obj.node) {
    for (const key10069 in obj.node) {
      obj3[key10069] = obj.node[key10069].parse;
      continue;
    }
  }
  for (const key10072 in obj3) {
    obj2[key10072] = obj3[key10072];
    continue;
  }
  return (source, arg1) => {
    let obj = arg1;
    if (!arg1) {
      obj = {};
    }
    const onComment = obj.onComment;
    source(12657)(source, source.scanner);
    const locationMap = source.locationMap;
    locationMap.setSource(source, obj.offset, obj.line, obj.column);
    source.filename = obj.filename || "<unknown>";
    source.needPositions = Boolean(obj.positions);
    source.onParseError = typeof obj.onParseError === "function" ? obj.onParseError : noop;
    source.onParseErrorThrow = false;
    let BooleanResult = !("parseAtrulePrelude" in obj);
    if (!BooleanResult) {
      const _Boolean = Boolean;
      BooleanResult = Boolean(obj.parseAtrulePrelude);
    }
    source.parseAtrulePrelude = BooleanResult;
    let BooleanResult1 = !("parseRulePrelude" in obj);
    if (!BooleanResult1) {
      const _Boolean2 = Boolean;
      BooleanResult1 = Boolean(obj.parseRulePrelude);
    }
    source.parseRulePrelude = BooleanResult1;
    let BooleanResult2 = !("parseValue" in obj);
    if (!BooleanResult2) {
      const _Boolean3 = Boolean;
      BooleanResult2 = Boolean(obj.parseValue);
    }
    source.parseValue = BooleanResult2;
    let BooleanResult3 = "parseCustomProperty" in obj;
    if (BooleanResult3) {
      const _Boolean4 = Boolean;
      BooleanResult3 = Boolean(obj.parseCustomProperty);
    }
    source.parseCustomProperty = BooleanResult3;
    const context = obj2.context;
    if (context.hasOwnProperty(obj.context || "default")) {
      if (typeof onComment === "function") {
        const scanner = obj2.scanner;
        scanner.forEachToken((arg0, arg1, length) => {
          if (arg0 === Comment) {
            const _location = source.getLocation(arg1, length);
            const obj = _mod12653;
            let num = 2;
            const slice = source.slice;
            const sum = arg1 + 2;
            if (obj.cmpStr(source, length - 2, length, "*/")) {
              num = length - num;
              let substr = slice(sum, num);
            } else {
              substr = slice(sum, length);
            }
            onComment(substr, _location);
          }
        });
      }
      const call = tmp12.call;
      if (!obj2.scanner.eof) {
        obj2.error();
      }
      return typeof call === "unknown" ? obj2.context[tmp](obj) : call(obj2, obj);
    } else {
      const _Error = Error;
      const error = new Error("Unknown context `" + tmp + "`");
      throw error;
    }
  };
};