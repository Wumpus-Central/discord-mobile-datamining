// === Module 11986: QueryTokenizer ===

// Module 11986 (QueryTokenizer)
import size from "module_2" /* 2 */;

function getMatch(str, arg1, index) {
  let tmp3;
  if (null == arg1) {
    return null;
  } else {
    let num8 = 0;
    if (0 < arg1.length) {
      while (true) {
        let obj = arg1[num8];
        let match = str.match(obj.regex);
        tmp3 = null;
        if (null != match) {
          let items = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(match, 0);
          items.index = index;
          tmp3 = items;
        }
        if (null != tmp3) {
          let cache = obj.cache;
          let tmp8 = null != cache;
          index = undefined;
          if (tmp8) {
            value = cache.get(tmp3[0]);
            tmp8 = null != value;
            index = value;
          }
          let tmp10 = index;
          if (tmp8) {
            break;
          } else {
            if (null == tmp10) {
              let type = obj.type;
              let tmp27 = new.target;
              if (typeof Token === "function") {
                let obj3 = Object.create(Token.prototype);
                if (tmp3 instanceof Token) {
                  let items1 = [];
                  let arraySpreadResult5 = HermesBuiltin.arraySpread(tmp3.match, 0);
                  obj3.match = items1;
                  ({ start: tmp17.start, type: tmp17.type } = tmp3);
                  if (null != tmp3._data) {
                    obj3._data = tmp3._data;
                  }
                } else if (null != tmp3) {
                  if (typeof tmp3 === "string") {
                    let items2 = [tmp3];
                    let items3 = items2;
                  } else {
                    items3 = [];
                    let arraySpreadResult6 = HermesBuiltin.arraySpread(tmp3, 0);
                  }
                  obj3.match = items3;
                  let num5 = 0;
                  if (typeof tmp3 !== "string") {
                    let num6 = tmp3.index;
                    if (num6 == null) {
                      num6 = 0;
                    }
                    num5 = num6;
                  }
                  obj3.start = num5;
                  obj3.type = type;
                } else {
                  obj3.match = [];
                  obj3.start = 0;
                  obj3.type = type;
                }
                let tmp21 = null == cache;
                if (!tmp21) {
                  let hasItem;
                  if (cache != null) {
                    hasItem = cache.has(tmp3[0]);
                  }
                  tmp21 = hasItem;
                }
                tmp10 = obj3;
                if (!tmp21) {
                  let result = cache.set(tmp3[0], obj3);
                  tmp10 = obj3;
                }
              } else {
                let str2 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            }
            return tmp10;
          }
        }
        num8 = num8 + 1;
      }
      if (typeof Token === "function") {
        const obj4 = Object.create(Token.prototype);
        if (index instanceof Token) {
          const items4 = [];
          HermesBuiltin.arraySpread(index.match, 0);
          obj4.match = items4;
          ({ start: tmp12.start, type: tmp12.type } = index);
          if (null != index._data) {
            obj4._data = index._data;
          }
          index = tmp3.index;
          obj4.start = index;
        } else if (null == index) {
          obj4.match = [];
          obj4.start = 0;
          obj4.type = undefined;
        }
        if (typeof index === "string") {
          const items5 = [index];
          let items6 = items5;
        } else {
          items6 = [];
          HermesBuiltin.arraySpread(index, 0);
        }
        obj4.match = items6;
        let num2 = 0;
        if (typeof index !== "string") {
          let num3 = index.index;
          if (num3 == null) {
            num3 = 0;
          }
          num2 = num3;
        }
        obj4.start = num2;
        obj4.type = undefined;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return null;
  }
}
const re0 = /[\s\S]+/;
const NON_TOKEN = "NON_TOKEN";
class QueryTokenizer {
  constructor() {
    items = global;
    if (global === undefined) {
      items = [];
    }
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj._rules = [];
    obj._followers = {};
    obj._nonTokenType = NON_TOKEN;
    resetResult = obj.reset();
    item = items.forEach((item) => obj.addRule(item));
    return obj;
  }
}
const prototype = QueryTokenizer.prototype;
prototype["reset"] = function reset() {
  this._rules = [];
  this._followers = {};
  this._nonTokenType = NON_TOKEN;
};
prototype["addRule"] = function addRule(type) {
  const self = this;
  type = type.type;
  ({ follows, validator } = type);
  const regex = type.regex;
  let regExp = regex;
  let tmp = regex;
  if ("^" !== str.charAt(0)) {
    const _RegExp = RegExp;
    const _HermesInternal = HermesInternal;
    regExp = new RegExp("^" + regex.source, regex.flags);
    tmp = regExp;
  }
  if (null != validator) {
    const _Map = Map;
    const map = new Map();
    const tmp7 = map;
  }
  if (null != follows) {
    const item = follows.forEach((item) => {
      if (null == self._followers[item]) {
        self._followers[item] = [];
      }
      self._followers[item].push({ regex: regExp, type, validator, cache: map });
      const obj = { regex: regExp, type, validator, cache: map };
    });
  } else {
    const _rules = this._rules;
    let obj = { regex: tmp, type, validator, cache: tmp7 };
    _rules.push(obj);
  }
};
prototype["tokenize"] = function tokenize(errorcode) {
  const self = this;
  let str = errorcode;
  const items = [];
  let num = 0;
  let str2 = "";
  let num2 = 0;
  let str3 = "";
  if (errorcode.length > 0) {
    while (true) {
      let _getMatchResult = self._getMatch(str, tmp, num + ``.length);
      let tmp5 = tmp;
      if (null != _getMatchResult) {
        if ("" !== ``) {
          break;
        } else {
          let arr = items.push(_getMatchResult);
          let sum = num + (_getMatchResult.length + ``.length);
          let substr = str.substring(_getMatchResult.length);
          let str4 = "";
          tmp5 = _getMatchResult;
        }
      } else {
        str4 = str2 + str[0];
        substr = str.substring(1);
        sum = num;
      }
      num = sum;
      str2 = str4;
      str = substr;
      tmp = tmp5;
      num2 = sum;
      str3 = str4;
    }
    const match = str2.match(re0);
    let _data1 = null;
    if (null != match) {
      const items1 = [];
      HermesBuiltin.arraySpread(match, 0);
      items1.index = num;
      _data1 = items1;
    }
    _data = self._nonTokenType;
    if (typeof Token === "function") {
      let arr2 = Object.create(Token.prototype);
      if (_data1 instanceof Token) {
        const items2 = [];
        HermesBuiltin.arraySpread(_data1.match, 0);
        arr2.match = items2;
        ({ start: tmp12.start, type: tmp12.type, _data } = _data1);
        if (null != _data) {
          _data1 = _data1._data;
          arr2._data = _data1;
        }
        arr2 = items.push(arr2);
      } else if (null == _data1) {
        arr2.match = [];
        arr2.start = 0;
        arr2.type = _data;
      }
      if (typeof _data1 === "string") {
        const items3 = [_data1];
        let items4 = items3;
      } else {
        items4 = [];
        HermesBuiltin.arraySpread(_data1, 0);
      }
      arr2.match = items4;
      let num4 = 0;
      if (typeof _data1 !== "string") {
        let num5 = _data1.index;
        if (num5 == null) {
          num5 = 0;
        }
        num4 = num5;
      }
      arr2.start = num4;
      arr2.type = _data;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  if ("" === str3) {
    return items;
  } else {
    const match1 = str3.match(re0);
    let _data3 = null;
    if (null != match1) {
      const items5 = [];
      HermesBuiltin.arraySpread(match1, 0);
      items5.index = num2;
      _data3 = items5;
    }
    _data2 = self._nonTokenType;
    if (typeof Token === "function") {
      let obj2 = Object.create(Token.prototype);
      if (_data3 instanceof Token) {
        const items6 = [];
        HermesBuiltin.arraySpread(_data3.match, 0);
        obj2.match = items6;
        ({ start: tmp22.start, type: tmp22.type, _data: _data2 } = _data3);
        if (null != _data2) {
          _data3 = _data3._data;
          obj2._data = _data3;
        }
        obj2 = items.push(obj2);
      } else if (null == _data3) {
        obj2.match = [];
        obj2.start = 0;
        obj2.type = _data2;
      }
      if (typeof _data3 === "string") {
        const items7 = [_data3];
        let items8 = items7;
      } else {
        items8 = [];
        HermesBuiltin.arraySpread(_data3, 0);
      }
      obj2.match = items8;
      let num8 = 0;
      if (typeof _data3 !== "string") {
        let num9 = _data3.index;
        if (num9 == null) {
          num9 = 0;
        }
        num8 = num9;
      }
      obj2.start = num8;
      obj2.type = _data2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
};
prototype["clearCache"] = function clearCache() {
  const _rules = this._rules;
  const item = _rules.forEach((cache) => {
    cache = cache.cache;
    let clearResult;
    if (cache != null) {
      clearResult = cache.clear();
    }
    return clearResult;
  });
  for (const key10008 in this._followers) {
    let arr2 = this._followers[key10008];
    let item1 = arr2.forEach((cache) => {
      cache = cache.cache;
      let clearResult;
      if (cache != null) {
        clearResult = cache.clear();
      }
      return clearResult;
    });
    continue;
  }
};
prototype["_getMatch"] = function _getMatch(errorcode, type, arg2) {
  type = null;
  if (null != type) {
    type = type.type;
  }
  let end;
  if (type != null) {
    end = type.end;
  }
  const self = this;
  let tmp3;
  if (end === arg2) {
    const _String = String;
    tmp3 = getMatch(errorcode, self._followers[String(undefined, type)], arg2);
  }
  if (null == tmp3) {
    tmp3 = getMatch(errorcode, self._rules, arg2);
  }
  return tmp3;
};
let Token;
class Token {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    if (global instanceof Token) {
      items = [];
      num4 = 0;
      tmp4 = items;
      arraySpreadResult = HermesBuiltin.arraySpread(global.match, 0);
      obj.match = items;
      ({ start: tmp.start, type: tmp.type } = global);
      tmp6 = null;
      if (null != global._data) {
        obj._data = global._data;
      }
    } else {
      tmp2 = require;
      tmp3 = null;
      if (null != global) {
        if (typeof global === "string") {
          items1 = [];
          items1[0] = global;
          items2 = items1;
        } else {
          items2 = [];
          num5 = 0;
          tmp7 = items2;
          tmp8 = global;
          arraySpreadResult1 = HermesBuiltin.arraySpread(global, 0);
        }
        obj.match = items2;
        num2 = 0;
        if (typeof global !== "string") {
          num3 = global.index;
          if (num3 == null) {
            num3 = 0;
          }
          num2 = num3;
        }
        obj.start = num2;
        obj.type = require;
      } else {
        obj.match = [];
        num = 0;
        obj.start = 0;
        obj.type = require;
      }
    }
    return obj;
  }
}
const prototype2 = Token.prototype;
Object.defineProperty(prototype2, "end", {
  get: function end() {
    return this.start + this.length;
  },
  set: undefined
});
Object.defineProperty(prototype2, "length", {
  get: function length() {
    const first = this.match[0];
    let num;
    if (first != null) {
      num = first.length;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  },
  set: undefined
});
prototype2["valueOf"] = function valueOf() {
  return this.match[0];
};
prototype2["getFullMatch"] = function getFullMatch() {
  return this.match[0];
};
prototype2["getMatch"] = function getMatch() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  return this.match[num];
};
prototype2["setData"] = function setData(pinned, combined) {
  const self = this;
  if (null == this._data) {
    const _Map = Map;
    const map = new Map();
    self._data = map;
  }
  const _data = self._data;
  const result = _data.set(pinned, combined);
};
prototype2["getData"] = function getData(arg0) {
  if (null != this._data) {
    const _data = tmp._data;
    return _data.get(arg0);
  }
};
QueryTokenizer.NON_TOKEN_TYPE = "NON_TOKEN";
QueryTokenizer.Token = Token;
let result = size.fileFinishedImporting("lib/QueryTokenizer.tsx");

export default QueryTokenizer;
export const NON_TOKEN_TYPE = "NON_TOKEN";
export { QueryTokenizer };
export { Token };