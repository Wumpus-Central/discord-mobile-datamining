// === Module 227: URLSearchParams ===

// Module 227 (URLSearchParams)
import _createClassDefault from "_createClass" /* 42 */;
import _slicedToArray from "module_32" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class URLSearchParams {
  constructor(arg0) {
    self = this;
    tmp = closure_1(this, URLSearchParams);
    map = new Map();
    this._searchParams = map;
    if (null !== global) {
      if (typeof global === "string") {
        str = "";
        str2 = global.replace(/^\?/, "");
        str3 = "&";
        parts = str2.split("&");
        item = parts.forEach((item) => {
          if (item) {
            const parts = item.split("=");
            const tmp2 = _slicedToArray(parts.map((item) => decodeURIComponent(item.replace(/\+/g, " "))), 2);
            self.append(tmp2[0], tmp2[1]);
          }
        });
      } else {
        _Array = Array;
        if (Array.isArray(global)) {
          item1 = global.forEach((item) => {
            [tmp, tmp2] = item;
            return self.append(tmp, tmp2);
          });
        } else if (typeof global === "object") {
          _Object = Object;
          entries = Object.entries(global);
          item2 = entries.forEach((item) => {
            [tmp, tmp2] = item;
            return self.append(tmp, tmp2);
          });
        }
      }
    }
    return;
  }
}
_slicedToArray = URLSearchParams;
let items = [
  {
    key: "size",
    get() {
      return this._searchParams.size;
    }
  },
  {
    key: "append",
    value: function append(arg0, arg1) {
      ({ _searchParams, _searchParams: _searchParams2 } = this);
      if (_searchParams.has(arg0)) {
        value = _searchParams2.get(arg0);
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
      value = _searchParams.get(arg0);
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
        c6 = 0;
        c9 = 0;
        c8 = 0;
        return (function* generateValues(arg0, value) {
          if (c9 === 2) {
            c9 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj = { value, done: true };
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            while (true) {
              c9 = 2;
              let tmp3 = c6;
              if (0 === c6) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c9 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  closure_5 = tmp3;
                  closure_133_0 = undefined;
                  closure_133_1 = undefined;
                  values = _searchParams.values();
                  closure_1 = values[Symbol.iterator]();
                  if (closure_1 === undefined) {
                    c9 = 3;
                    return { value: "HermesInternal", done: null };
                  } else {
                    c8 = 1;
                    closure_133_0 = tmp14;
                    closure_4 = closure_133_0;
                    closure_3 = closure_133_0[Symbol.iterator]();
                  }
                }
              } else if (1 === tmp3) {
                c8 = 0;
                closure_1.return();
                throw closure_1_7;
              } else if (2 === tmp3) {
                c8 = 1;
                closure_3.return();
                throw closure_1_7;
              } else if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                closure_3.return();
                c8 = 0;
                closure_1.return();
                c9 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c8 = 1;
              }
              if (closure_3 === undefined) {
                c8 = 0;
              } else {
                c8 = 2;
                closure_133_1 = tmp20;
                c6 = 3;
                c9 = 1;
                let obj1 = { value: closure_133_1, done: false };
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
        dependencyMap = _searchParams;
        c9 = 0;
        c10 = 0;
        c8 = 0;
        return (function* generateEntries(arg0, value) {
          if (c10 === 2) {
            c10 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj = { value, done: true };
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            while (true) {
              c10 = 2;
              let tmp5 = c9;
              if (0 === c9) {
                if (arg0 === 1) {
                  c10 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c10 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  closure_6 = tmp;
                  closure_5 = tmp2;
                  closure_133_0 = undefined;
                  closure_133_1 = undefined;
                  closure_133_2 = undefined;
                  closure_133_3 = undefined;
                  closure_133_4 = undefined;
                  closure_2 = dependencyMap;
                  closure_1 = dependencyMap[Symbol.iterator]();
                  if (closure_1 === undefined) {
                    c10 = 3;
                    return { value: "HermesInternal", done: null };
                  } else {
                    c8 = 1;
                    closure_133_0 = tmp16;
                    closure_133_1 = dependencyMap(closure_133_0, 2);
                    closure_133_2 = closure_133_1[0];
                    closure_133_3 = closure_133_1[1];
                    closure_4 = closure_133_3;
                    closure_3 = closure_133_3[Symbol.iterator]();
                  }
                }
              } else if (1 === tmp5) {
                c8 = 0;
                closure_1.return();
                throw closure_1_7;
              } else if (2 === tmp5) {
                c8 = 1;
                closure_3.return();
                throw closure_1_7;
              } else if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else if (arg0 === 2) {
                closure_3.return();
                c8 = 0;
                closure_1.return();
                c10 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c8 = 1;
              }
              if (closure_3 === undefined) {
                c8 = 0;
              } else {
                c8 = 2;
                closure_133_4 = tmp19;
                let items = [closure_133_2, ];
                items[1] = closure_133_4;
                c9 = 3;
                c10 = 1;
                let obj1 = { value: items, done: false };
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
    value: function forEach(fn) {
      while (tmp !== undefined) {
        let tmp4 = _slicedToArray(tmp2, 2);
        [tmp5, tmp6] = tmp4;
        for (const item10018 of tmp6) {
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
        [obj] = arg0;
        [tmp] = arg1;
        return obj.localeCompare(tmp);
      }));
    }
  },
,

];
const entry = {
  key: Symbol.iterator,
  value() {
    const items = [];
    while (tmp !== undefined) {
      let tmp4 = _slicedToArray(tmp2, 2);
      [tmp5, tmp6] = tmp4;
      for (const item10018 of tmp6) {
        let items1 = [tmp5, item10018];
        let arr = items.push(items1);
        continue;
      }
      continue;
    }
    return items[Symbol.iterator]();
  }
};
items[12] = entry;
items[13] = {
  key: "toString",
  value: function toString() {
    const _searchParams = this._searchParams;
    let mapped = Array.from(_searchParams.entries()).map((item) => {
      [, arr] = item;
      const mapped = arr.map((item) => {
        const replaced = encodeURIComponent(closure_1_0).replace(/%20/g, "+");
        const str = encodeURIComponent(closure_1_0);
        return "" + replaced + "=" + encodeURIComponent(item).replace(/%20/g, "+");
      });
      return mapped.join("&");
    });
    return mapped.join("&");
  }
};

export const URLSearchParams = _createClassDefault(URLSearchParams, items);