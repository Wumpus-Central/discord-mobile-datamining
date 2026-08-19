// _runtime/00227_URLSearchParams.js
import _createClassDefault from "metro/00042__createClass.js";
import URLSearchParams from "metro/00032__slicedToArray.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

class URLSearchParams {
  constructor(arg0) {
    self = this;
    tmp = closure_1(this, self);
    map = new Map();
    this._searchParams = map;
    if (null !== global) {
      if (typeof global === "string") {
        str = "";
        str2 = global.replace(/^\?/, "");
        str3 = "&";
        parts = str2.split("&");
        item = parts.forEach((item, index) => {
          if (item) {
            const parts = item.split("=");
            const tmp2 = self(parts.map((item, index) => decodeURIComponent(item.replace(/\+/g, " "))), 2);
            self.append(tmp2[0], tmp2[1]);
          }
        });
      } else {
        _Array = Array;
        if (Array.isArray(global)) {
          item1 = global.forEach((item, index) => {
            [tmp, tmp2] = item;
            return self.append(tmp, tmp2);
          });
        } else if (typeof global === "object") {
          _Object = Object;
          entries = Object.entries(global);
          item2 = entries.forEach((item, index) => {
            [tmp, tmp2] = item;
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
        closure_0 = _searchParams;
        c6 = 0;
        c9 = 0;
        c8 = 0;
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
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            while (true) {
              c9 = 2;
              let tmp3 = c6;
              if (0 === c6) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c9 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  closure_5 = tmp3;
                  _searchParams = undefined;
                  let values = _searchParams.values();
                  closure_1 = values[Symbol.iterator]();
                  if (closure_1 === undefined) {
                    c9 = 3;
                    return { value: "HermesInternal", done: "HermesInternal" };
                  } else {
                    c8 = 1;
                    _searchParams = tmp14;
                    closure_4 = _searchParams;
                    closure_3 = _searchParams[Symbol.iterator]();
                  }
                }
              } else if (1 === tmp3) {
                c8 = 0;
                closure_1.return();
                throw closure_7;
              } else if (2 === tmp3) {
                c8 = 1;
                closure_3.return();
                throw closure_7;
              } else if (arg0 === 1) {
                c9 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                closure_3.return();
                c8 = 0;
                closure_1.return();
                c9 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c8 = 1;
              }
              if (closure_3 === undefined) {
                c8 = 0;
              } else {
                c8 = 2;
                closure_1 = tmp20;
                c6 = 3;
                c9 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1;
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
        closure_0 = _searchParams;
        c9 = 0;
        c10 = 0;
        c8 = 0;
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
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            while (true) {
              c10 = 2;
              let tmp5 = c9;
              if (0 === c9) {
                if (arg0 === 1) {
                  c10 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c10 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  closure_6 = tmp;
                  closure_5 = tmp2;
                  let dependencyMap;
                  let lib;
                  closure_4 = undefined;
                  closure_2 = dependencyMap;
                  closure_1 = dependencyMap[Symbol.iterator]();
                  if (closure_1 === undefined) {
                    c10 = 3;
                    return { value: "HermesInternal", done: "HermesInternal" };
                  } else {
                    c8 = 1;
                    dependencyMap = tmp16;
                    closure_1 = dependencyMap(dependencyMap, 2);
                    closure_2 = closure_1[0];
                    lib = closure_1[1];
                    closure_4 = lib;
                    lib = lib[Symbol.iterator]();
                  }
                }
              } else if (1 === tmp5) {
                c8 = 0;
                closure_1.return();
                throw closure_7;
              } else if (2 === tmp5) {
                c8 = 1;
                lib.return();
                throw closure_7;
              } else if (arg0 === 1) {
                c10 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                lib.return();
                c8 = 0;
                closure_1.return();
                c10 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c8 = 1;
              }
              if (lib === undefined) {
                c8 = 0;
              } else {
                c8 = 2;
                closure_4 = tmp19;
                let items = [closure_2, ];
                items[1] = closure_4;
                c9 = 3;
                c10 = 1;
                obj1 = { value: null, done: false };
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
    value: function forEach(fn) {
      while (tmp !== undefined) {
        let tmp4 = URLSearchParams(tmp2, 2);
        [tmp5, tmp6] = tmp4;
        for (const item10018 of tmp6) {
          let tmp10 = arg0(item10018, tmp5, this);
          continue;
        }
        continue;
      }
      tmp = this._searchParams[Symbol.iterator]();
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
obj = {
  key: Symbol.iterator,
  value() {
    const items = [];
    while (tmp !== undefined) {
      let tmp4 = URLSearchParams(tmp2, 2);
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
items[12] = obj;
items[13] = {
  key: "toString",
  value: function toString() {
    const _searchParams = this._searchParams;
    let mapped = Array.from(_searchParams.entries()).map((item, index) => {
      [, arr] = item;
      const mapped = arr.map((item, index) => {
        const replaced = encodeURIComponent(closure_0).replace(/%20/g, "+");
        const str = encodeURIComponent(closure_0);
        return "" + replaced + "=" + encodeURIComponent(item).replace(/%20/g, "+");
      });
      return mapped.join("&");
    });
    return mapped.join("&");
  }
};

export const URLSearchParams = _createClassDefault(URLSearchParams, items);