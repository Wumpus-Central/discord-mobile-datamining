// === Module 227: URLSearchParams ===

// Module 227 (URLSearchParams)
import URLSearchParams from "_slicedToArray";
import _classCallCheck from "_classCallCheck";

class URLSearchParams {
  constructor(arg0) {
    self = this;
    tmp = outer1_1(this, self);
    map = new Map();
    this._searchParams = map;
    if (null !== global) {
      if (typeof global === "y") {
        str = "";
        str2 = global.replace(/^\?/, "");
        str3 = "&";
        parts = str2.split("&");
        item = parts.forEach((str) => {
          if (str) {
            const parts = str.split("=");
            const tmp2 = self(parts.map((str) => decodeURIComponent(str.replace(/\+/g, " "))), 2);
            self.append(tmp2[0], tmp2[1]);
          }
        });
      } else {
        _Array = Array;
        if (Array.isArray(global)) {
          item1 = global.forEach((arg0) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = arg0;
            return self.append(tmp, tmp2);
          });
        } else if (typeof global !== "window") {
          _Object = Object;
          entries = Object.entries(global);
          item2 = entries.forEach((arg0) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = arg0;
            return self.append(tmp, tmp2);
          });
        }
      }
    }
    return;
  }
}
let obj = {
  key: "size",
  get() {
    return this._searchParams.size;
  }
};
let items = [
  obj,
  {
    key: "append",
    value: function append(arg0, arg1) {
      let _searchParams;
      let _searchParams2;
      ({ _searchParams, _searchParams: _searchParams2 } = this);
      if (_searchParams.has(arg0)) {
        const value = _searchParams2.get(arg0);
        if (value != null) {
          value.push(arg1);
        }
      } else {
        const items = [arg1];
        const result = _searchParams2.set(arg0, items);
      }
    }
  },
  {
    key: "delete",
    value: function _delete(arg0) {
      const _searchParams = this._searchParams;
      _searchParams.delete(arg0);
    }
  },
  {
    key: "get",
    value: function get(arg0) {
      const _searchParams = this._searchParams;
      const value = _searchParams.get(arg0);
      let first = null;
      if (value) {
        first = value[0];
      }
      return first;
    }
  },
  {
    key: "getAll",
    value: function getAll(arg0) {
      const _searchParams = this._searchParams;
      let items = _searchParams.get(arg0);
      if (items == null) {
        items = [];
      }
      return items;
    }
  },
  {
    key: "has",
    value: function has(arg0) {
      const _searchParams = this._searchParams;
      return _searchParams.has(arg0);
    }
  },
  {
    key: "set",
    value: function set(arg0, arg1) {
      const _searchParams = this._searchParams;
      const items = [arg1];
      const result = _searchParams.set(arg0, items);
    }
  },
  {
    key: "keys",
    value: function keys() {
      const _searchParams = this._searchParams;
      return _searchParams.keys();
    }
  },
  {
    key: "values",
    value: function values() {
      return (function generateValues(_searchParams) {
        let closure_0 = _searchParams;
        let c6 = 0;
        let c9 = 0;
        let c8 = 0;
        return (function* generateValues(arg0) {
          if (c9 === 2) {
            c9 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            while (true) {
              let num = 2;
              c9 = 2;
              let tmp3 = c6;
              if (0 === c6) {
                if (arg0 === 1) {
                  let num7 = 3;
                  c9 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  let num6 = 3;
                  c9 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let closure_5 = tmp3;
                  let tmp26 = _searchParams;
                  _searchParams = undefined;
                  let _classCallCheck;
                  let values = _searchParams.values();
                  let tmp28 = values;
                  _classCallCheck = values[Symbol.iterator]();
                  let tmp12 = values;
                  let tmp13 = _classCallCheck;
                  if (_classCallCheck === undefined) {
                    let num5 = 3;
                    c9 = 3;
                    return { value: "HermesInternal", done: null };
                  } else {
                    let tmp15 = closure_5;
                    let c8 = 1;
                    _searchParams = tmp14;
                    let tmp16 = _searchParams;
                    let closure_4 = _searchParams;
                    let tmp17 = _searchParams;
                    closure_4 = _searchParams;
                    let closure_3 = _searchParams[Symbol.iterator]();
                  }
                }
              } else if (1 === tmp3) {
                let tmp9 = closure_7;
                let tmp10 = closure_7;
                c8 = 0;
                let tmp11 = _classCallCheck;
                _classCallCheck.return();
                throw closure_7;
              } else if (2 === tmp3) {
                let tmp6 = closure_7;
                let tmp7 = closure_7;
                c8 = 1;
                let tmp8 = closure_3;
                closure_3.return();
                throw closure_7;
              } else if (arg0 === 1) {
                let num3 = 3;
                c9 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c8 = 1;
                let tmp4 = closure_3;
                closure_3.return();
                c8 = 0;
                let tmp5 = _classCallCheck;
                _classCallCheck.return();
                let num2 = 3;
                c9 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c8 = 1;
              }
              let tmp18 = closure_4;
              let tmp19 = closure_3;
              if (closure_3 === undefined) {
                c8 = 0;
              } else {
                let tmp21 = closure_5;
                c8 = 2;
                _classCallCheck = tmp20;
                c6 = 3;
                let num4 = 1;
                c9 = 1;
                let obj1 = { value: null, done: false };
                obj1[0] = _classCallCheck;
                return obj1;
              }
            }
          }
        })();
      })(this._searchParams);
    }
  },
  {
    key: "entries",
    value: function entries() {
      return (function generateEntries(_searchParams) {
        let closure_0 = _searchParams;
        let c9 = 0;
        let c10 = 0;
        let c8 = 0;
        return (function* generateEntries(arg0) {
          if (c10 === 2) {
            c10 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            while (true) {
              let num = 2;
              c10 = 2;
              let tmp5 = c9;
              if (0 === c9) {
                if (arg0 === 1) {
                  let num7 = 3;
                  c10 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  let num6 = 3;
                  c10 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let closure_6 = tmp;
                  let closure_5 = tmp2;
                  let tmp27 = dependencyMap;
                  dependencyMap = undefined;
                  let _classCallCheck;
                  let closure_2;
                  let lib;
                  let closure_4;
                  closure_2 = dependencyMap;
                  let tmp28 = dependencyMap;
                  closure_2 = dependencyMap;
                  _classCallCheck = dependencyMap[Symbol.iterator]();
                  let tmp14 = closure_2;
                  let tmp15 = _classCallCheck;
                  if (_classCallCheck === undefined) {
                    let num5 = 3;
                    c10 = 3;
                    return { value: "HermesInternal", done: null };
                  } else {
                    let tmp29 = closure_5;
                    let tmp30 = closure_6;
                    let c8 = 1;
                    dependencyMap = tmp16;
                    let tmp31 = dependencyMap;
                    let tmp32 = dependencyMap;
                    _classCallCheck = dependencyMap(dependencyMap, 2);
                    let tmp33 = _classCallCheck;
                    closure_2 = _classCallCheck[0];
                    let tmp34 = _classCallCheck;
                    lib = _classCallCheck[1];
                    let tmp35 = lib;
                    closure_4 = lib;
                    let tmp36 = lib;
                    closure_4 = lib;
                    lib = lib[Symbol.iterator]();
                  }
                }
              } else if (1 === tmp5) {
                let tmp11 = closure_7;
                let tmp12 = closure_7;
                c8 = 0;
                let tmp13 = _classCallCheck;
                _classCallCheck.return();
                throw closure_7;
              } else if (2 === tmp5) {
                let tmp8 = closure_7;
                let tmp9 = closure_7;
                c8 = 1;
                let tmp10 = lib;
                lib.return();
                throw closure_7;
              } else if (arg0 === 1) {
                let num3 = 3;
                c10 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c8 = 1;
                let tmp6 = lib;
                lib.return();
                c8 = 0;
                let tmp7 = _classCallCheck;
                _classCallCheck.return();
                let num2 = 3;
                c10 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c8 = 1;
              }
              let tmp17 = closure_4;
              let tmp18 = lib;
              if (lib === undefined) {
                c8 = 0;
              } else {
                let tmp20 = closure_5;
                c8 = 2;
                closure_4 = tmp19;
                let tmp21 = closure_2;
                let items = [closure_2, ];
                let tmp22 = closure_4;
                items[1] = closure_4;
                c9 = 3;
                let num4 = 1;
                c10 = 1;
                let obj1 = { value: null, done: false };
                obj1[0] = items;
                return obj1;
              }
            }
          }
        })();
      })(this._searchParams);
    }
  },
  {
    key: "forEach",
    value: function forEach(arg0) {
      let tmp5;
      let tmp6;
      while (tmp !== undefined) {
        let tmp3 = URLSearchParams;
        let tmp4 = URLSearchParams(tmp2, 2);
        [tmp5, tmp6] = tmp4;
        let tmp7 = tmp6;
        let tmp8 = tmp6;
        for (const item10018 of tmp6) {
          let tmp9 = tmp5;
          let tmp10 = arg0(item10018, tmp5, this);
          continue;
        }
        continue;
      }
    }
  },
  {
    key: "sort",
    value: function sort() {
      const _searchParams = this._searchParams;
      const items = [..._searchParams.entries()];
      this._searchParams = new Map(items.sort((arg0, arg1) => {
        let obj;
        let tmp;
        [obj] = arg0;
        [tmp] = arg1;
        return obj.localeCompare(tmp);
      }));
    }
  },
,

];
obj = {
  key: Symbol.iterator,
  value() {
    let tmp5;
    let tmp6;
    const items = [];
    while (tmp !== undefined) {
      let tmp3 = URLSearchParams;
      let tmp4 = URLSearchParams(tmp2, 2);
      [tmp5, tmp6] = tmp4;
      let tmp7 = tmp6;
      let tmp8 = tmp6;
      for (const item10018 of tmp6) {
        let tmp9 = tmp5;
        let items1 = [tmp5, item10018];
        let arr = items.push(items1);
        continue;
      }
      continue;
    }
    return items[Symbol.iterator]();
  }
};
items[12] = obj;
items[13] = {
  key: "toString",
  value: function toString() {
    const _searchParams = this._searchParams;
    let mapped = Array.from(_searchParams.entries()).map((arg0) => {
      let arr;
      [, arr] = arg0;
      const mapped = arr.map((arg0) => {
        const replaced = encodeURIComponent(closure_0).replace(/%20/g, "+");
        const str = encodeURIComponent(closure_0);
        return "" + replaced + "=" + encodeURIComponent(arg0).replace(/%20/g, "+");
      });
      return mapped.join("&");
    });
    return mapped.join("&");
  }
};

export const URLSearchParams = require("_createClass")(URLSearchParams, items);