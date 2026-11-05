// === Module 9993: normalizeName ===

// Module 9993 (normalizeName)
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck_mod from "_classCallCheck" /* 41 */;

function normalizeName(str) {
  return str.toLowerCase();
}
let _classCallCheck = _classCallCheck_mod;
class NitroHeaders {
  constructor(arg0) {
    self = this;
    self = this;
    tmp = NitroHeaders;
    tmp2 = closure_0(this, NitroHeaders);
    map = new Map();
    this._map = map;
    if (global) {
      if (global instanceof tmp) {
        _map1 = global._map;
        item = _map1.forEach((item, index) => {
          const _map = self._map;
          items = [...item];
          const result = _map.set(index, items);
        });
      } else {
        if (typeof global === "object") {
          _Array3 = Array;
          if (!Array.isArray(global)) {
            if (typeof global.forEach === "function") {
              if (typeof global.get === "function") {
                item1 = global.forEach((item, index) => {
                  const _map = self._map;
                  items = [item];
                  const result = _map.set(index.toLowerCase(), items);
                });
              }
            }
          }
        }
        _Array = Array;
        if (Array.isArray(global)) {
          tmp10 = global;
          iter = global[Symbol.iterator]();
          num2 = 0;
          str = "value";
          str2 = "key";
          num3 = 2;
          tmp11 = global;
          nextResult = iter.next();
          tmp13 = iter;
          while (iter !== undefined) {
            arr2 = nextResult;
            _Array2 = Array;
            if (Array.isArray(nextResult)) {
              tmp14 = nextResult;
              if (arr2.length >= 2) {
                tmp29 = closure_1;
                _String2 = String;
                tmp30 = nextResult;
                tmp31 = closure_1(String(arr2[0]));
                _String3 = String;
                tmp32 = tmp31;
                StringResult = String(arr2[1]);
                _map4 = self._map;
                value1 = _map4.get(tmp31);
                arr5 = value1;
                if (value1) {
                  tmp38 = value1;
                  tmp39 = StringResult;
                  arr1 = arr5.push(StringResult);
                } else {
                  _map5 = self._map;
                  tmp35 = tmp31;
                  tmp36 = StringResult;
                  items = [];
                  items[0] = StringResult;
                  result = _map5.set(tmp32, items);
                }
                continue;
              }
            }
            tmp15 = nextResult;
            if (arr2) {
              tmp16 = nextResult;
              if (typeof arr2 === "object") {
                tmp44 = nextResult;
                if ("key" in arr2) {
                  tmp17 = nextResult;
                  if ("value" in arr2) {
                    tmp18 = closure_1;
                    tmp19 = nextResult;
                    tmp20 = closure_1(arr2.key);
                    value = arr2.value;
                    _map2 = self._map;
                    tmp21 = tmp20;
                    value2 = _map2.get(tmp20);
                    arr3 = value2;
                    if (value2) {
                      tmp26 = value2;
                      tmp27 = value;
                      arr9 = arr3.push(value);
                    } else {
                      _map3 = self._map;
                      tmp23 = tmp20;
                      tmp24 = value;
                      items1 = [];
                      items1[0] = value;
                      result1 = _map3.set(tmp21, items1);
                    }
                  }
                }
              }
            }
          }
        } else if (typeof global === "object") {
          tmp43 = null;
          if (null !== global) {
            _Object = Object;
            keys = Object.keys(global);
            num4 = 0;
            num5 = 1;
            for (let num = 0; num < keys.length; num = num + 1) {
              tmp4 = keys[num];
              tmp5 = global[tmp4];
              tmp6 = num;
              if (undefined !== tmp5) {
                _map = self._map;
                tmp7 = closure_1;
                _String = String;
                tmp8 = closure_1(tmp4);
                items2 = [];
                items2[0] = String(tmp5);
                result2 = _map.set(tmp8, items2);
              }
            }
          }
        }
      }
    }
    return;
  }
}
_classCallCheck = NitroHeaders;
const entry = {
  key: "append",
  value: function append(str, arg1) {
    const formatted = str.toLowerCase();
    const _map = this._map;
    value = _map.get(formatted);
    if (value) {
      value.push(arg1);
    } else {
      const _map2 = this._map;
      items = [arg1];
      const result = _map2.set(formatted, items);
    }
  }
};
let items = [
  entry,
  {
    key: "delete",
    value: function _delete(str) {
      const _map = this._map;
      _map.delete(str.toLowerCase());
    }
  },
  {
    key: "get",
    value: function get(str) {
      const _map = this._map;
      value = _map.get(str.toLowerCase());
      let joined = null;
      if (value) {
        joined = null;
        if (0 !== value.length) {
          joined = value.join(", ");
        }
      }
      return joined;
    }
  },
  {
    key: "getSetCookie",
    value: function getSetCookie() {
      const _map = this._map;
      items = _map.get("set-cookie");
      if (items == null) {
        items = [];
      }
      return items;
    }
  },
  {
    key: "has",
    value: function has(str) {
      const _map = this._map;
      return _map.has(str.toLowerCase());
    }
  },
  {
    key: "set",
    value: function set(str, arg1) {
      const _map = this._map;
      items = [arg1];
      const result = _map.set(str.toLowerCase(), items);
    }
  },
  {
    key: "forEach",
    value: function forEach(call, arg1) {
      const self = this;
      const _map = this._map;
      const sorted = Array.from(_map.keys()).sort();
      const iter = sorted[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        call = call.call;
        let _map2 = self._map;
        value = _map2.get(nextResult);
        let joined = value.join(", ");
        if (typeof call === "unknown") {
          let tmp4 = call(joined, nextResult, self);
        } else {
          let callResult = call(arg1, joined, nextResult, self);
        }
        continue;
      }
    }
  },
  {
    key: "entries",
    value: function entries() {
      let _map = this._map;
      closure_1 = Array.from(_map.keys()).sort();
      return (function* gen() {
        if (c7 === 2) {
          c7 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          while (true) {
            c7 = 2;
            let tmp4 = c6;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                closure_3 = tmp;
                closure_2 = tmp4;
                closure_130_0 = undefined;
                _map = dependencyMap[Symbol.iterator]();
              }
            } else if (1 === tmp4) {
              c5 = 0;
              _map.return();
              throw closure_1_4;
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              _map.return();
              c7 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              c5 = 0;
            }
            if (_map === undefined) {
              c7 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              c5 = 1;
              closure_130_0 = tmp11;
              items = [closure_130_0, ];
              value = closure_131_0.get(closure_130_0);
              items[1] = value.join(", ");
              c6 = 2;
              c7 = 1;
              let obj4 = { value: items, done: false };
              return obj4;
            }
          }
        }
      })();
    }
  },
  {
    key: "keys",
    value: function keys() {
      const _map = this._map;
      closure_0 = Array.from(_map.keys()).sort();
      return (function* gen() {
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          while (true) {
            c6 = 2;
            let tmp3 = c3;
            if (0 === c3) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                closure_2 = tmp3;
                closure_130_0 = undefined;
                closure_1 = closure_0;
                closure_0 = closure_0[Symbol.iterator]();
              }
            } else if (1 === tmp3) {
              c5 = 0;
              closure_0.return();
              throw closure_1_4;
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_0.return();
              c6 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              c5 = 0;
            }
            if (closure_0 === undefined) {
              c6 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              c5 = 1;
              closure_130_0 = tmp12;
              c3 = 2;
              c6 = 1;
              let obj4 = { value: closure_130_0, done: false };
              return obj4;
            }
          }
        }
      })();
    }
  },
  {
    key: "values",
    value: function values() {
      let _map = this._map;
      closure_1 = Array.from(_map.keys()).sort();
      return (function* gen() {
        if (c7 === 2) {
          c7 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          while (true) {
            c7 = 2;
            let tmp4 = c6;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                closure_3 = tmp;
                closure_2 = tmp4;
                closure_130_0 = undefined;
                _map = dependencyMap[Symbol.iterator]();
              }
            } else if (1 === tmp4) {
              c5 = 0;
              _map.return();
              throw closure_1_4;
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              _map.return();
              c7 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              c5 = 0;
            }
            if (_map === undefined) {
              c7 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              c5 = 1;
              closure_130_0 = tmp11;
              value = closure_131_0.get(closure_130_0);
              c6 = 2;
              c7 = 1;
              let obj4 = { value: value.join(", "), done: false };
              return obj4;
            }
          }
        }
      })();
    }
  },

];
const entry1 = {
  key: Symbol.iterator,
  value() {
    return this.entries();
  }
};
items[10] = entry1;

export const NitroHeaders = _createClassDefault(NitroHeaders, items);