// _runtime/metro/00227__.js
import _createClassDefault from "00042__createClass.js";
import _slicedToArray from "00032__slicedToArray.js";
import _classCallCheck from "00041__classCallCheck.js";

let closure_1, closure_2, closure_3, closure_4, closure_5, closure_6;

class URLSearchParams {
  constructor(str) {
    const self = this;
    let tmp = _classCallCheck(this, URLSearchParams);
    this._searchParams = new Map();
    new Map();
    if (null !== str) {
      if (typeof str === "string") {
        const str2 = "".replace(/^\?/, "");
        let parts = str2.split("&");
        const item = parts.forEach((item) => {
          const tmp = item;
          if (tmp) {
            const parts = item.split("=");
            const tmp3 = URLSearchParams(
              parts.map((item) => decodeURIComponent(item.replace(/\+/g, " "))),
              2,
            );
            self.append(tmp3[0], tmp3[1]);
          }
        });
      } else {
        const _Array = Array;
        if (Array.isArray(str)) {
          const item1 = str.forEach((item) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = item;
            return self.append(tmp, tmp2);
          });
        } else if (typeof str === "object") {
          const _Object = Object;
          const entries = Object.entries(str);
          const item2 = entries.forEach((item) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = item;
            return self.append(tmp, tmp2);
          });
        }
      }
    }
  }
}
let obj = {
  key: "size",
  get() {
    return this._searchParams.size;
  },
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
    },
  },
  {
    key: "delete",
    value: function _delete(arg0) {
      const _searchParams = this._searchParams;
      _searchParams.delete(arg0);
    },
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
    },
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
    },
  },
  {
    key: "has",
    value: function has(arg0) {
      const _searchParams = this._searchParams;
      return _searchParams.has(arg0);
    },
  },
  {
    key: "set",
    value: function set(arg0, arg1) {
      const _searchParams = this._searchParams;
      const items = [arg1];
      const result = _searchParams.set(arg0, items);
    },
  },
  {
    key: "keys",
    value: function keys() {
      const _searchParams = this._searchParams;
      return _searchParams.keys();
    },
  },
  {
    key: "values",
    value: function values() {
      function generateValues(_searchParams) {
        let c6 = 0;
        let c9 = 0;
        let c8 = 0;
        return (function* generateValues(arg0) {
          if (c9 === 2) {
            c9 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
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
                  let obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_5 = tmp3;
                  _searchParams = undefined;
                  values = _searchParams.values();
                  value = values[Symbol.iterator]();
                  if (value === undefined) {
                    c9 = 3;
                    return { value: "IconComponent", done: null };
                  } else {
                    c8 = 1;
                    _searchParams = tmp14;
                    closure_4 = _searchParams;
                    closure_3 = _searchParams[Symbol.iterator]();
                  }
                }
              } else if (1 === tmp3) {
                c8 = 0;
                value.return();
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
                value.return();
                c9 = 3;
                let obj = { value, done: true };
                return obj;
              } else {
                c8 = 1;
              }
              if (closure_3 === undefined) {
                c8 = 0;
              } else {
                c8 = 2;
                value = tmp20;
                c6 = 3;
                c9 = 1;
                let obj4 = { value, done: false };
                return obj4;
              }
            }
          }
        })();
      }
      return generateValues(this._searchParams);
    },
  },
  {
    key: "entries",
    value: function entries() {
      function generateEntries(_searchParams) {
        let closure_0 = _searchParams;
        let c9 = 0;
        let c10 = 0;
        let c8 = 0;
        return (function* generateEntries(arg0) {
          if (c10 === 2) {
            c10 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            while (true) {
              let c4;
              c10 = 2;
              let tmp5 = c9;
              if (0 === c9) {
                if (arg0 === 1) {
                  c10 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c10 = 3;
                  let obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_6 = tmp;
                  closure_5 = tmp2;
                  let c0;
                  closure_3 = undefined;
                  c4 = undefined;
                  closure_2 = _searchParams;
                  closure_1 = _searchParams[Symbol.iterator]();
                  if (closure_1 === undefined) {
                    c10 = 3;
                    return { value: "IconComponent", done: null };
                  } else {
                    c8 = 1;
                    c0 = tmp16;
                    closure_1 = _searchParams(c0, 2);
                    closure_2 = closure_1[0];
                    closure_3 = closure_1[1];
                    closure_4 = closure_3;
                    closure_3 = closure_3[Symbol.iterator]();
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
                let obj = { value, done: true };
                return obj;
              } else {
                c8 = 1;
              }
              if (closure_3 === undefined) {
                c8 = 0;
              } else {
                c8 = 2;
                c4 = tmp19;
                let items = [closure_2];
                items[1] = c4;
                c9 = 3;
                c10 = 1;
                let obj4 = { value: items, done: false };
                return obj4;
              }
            }
          }
        })();
      }
      return generateEntries(this._searchParams);
    },
  },
  {
    key: "forEach",
    value: function forEach(fn) {
      let tmp5;
      let tmp6;
      const tmp = this._searchParams[Symbol.iterator]();
      while (tmp !== undefined) {
        let tmp4 = _slicedToArray(tmp2, 2);
        [tmp5, tmp6] = tmp4;
        for (const item10018 of tmp6) {
          let tmp10 = fn(item10018, tmp5, this);
          continue;
        }
        continue;
      }
    },
  },
  {
    key: "sort",
    value: function sort() {
      const f133972 = (arg0, arg1) => {
        let obj;
        let tmp;
        [obj] = arg0;
        [tmp] = arg1;
        return obj.localeCompare(tmp);
      };
      const _searchParams = this._searchParams;
      const items = [..._searchParams.entries()];
      this._searchParams = new Map(items.sort(f133972));
      new Map(items.sort(f133972));
    },
  },
  ,
];
const entry = {
  key: Symbol.iterator,
  value() {
    let tmp5;
    let tmp6;
    const items = [];
    const tmp = this._searchParams[Symbol.iterator]();
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
  },
};
items[12] = entry;
items[13] = {
  key: "toString",
  value: function toString() {
    const _searchParams = this._searchParams;
    const arr = Array.from(_searchParams.entries());
    let mapped = arr.map((item) => {
      let arr;
      [, arr] = item;
      const mapped = arr.map((item) => {
        const str = encodeURIComponent(closure_1_0);
        const replaced = str.replace(/%20/g, "+");
        const str2 = encodeURIComponent(item);
        return "" + replaced + "=" + str2.replace(/%20/g, "+");
      });
      return mapped.join("&");
    });
    return mapped.join("&");
  },
};
const URLSearchParams_export = _createClassDefault(URLSearchParams, items);

export { URLSearchParams_export as URLSearchParams };
