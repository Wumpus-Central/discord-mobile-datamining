// === Module 14161: ? ===

// Module 14161
import _createClass from "_createClass" /* 42 */;
import _mod14159 from "module_14159" /* 14159 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class URLSearchParamsImpl {
  constructor(arg0, arg1, doNotStripQMark) {
    let flag = doNotStripQMark.doNotStripQMark;
    if (flag === undefined) {
      flag = false;
    }
    const self = this;
    _classCallCheck(this, URLSearchParamsImpl);
    const first = arg1[0];
    this._list = [];
    this._url = null;
    if (!flag) {
      flag = typeof first !== "string";
    }
    if (!flag) {
      flag = "?" !== first[0];
    }
    let substr = first;
    if (!flag) {
      substr = first.slice(1);
    }
    if (Array.isArray(substr)) {
      const iter = substr[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp12 = nextResult;
        if (2 !== nextResult.length) {
          let _TypeError = TypeError;
          let self2 = this;
          let str2 = "Failed to construct 'URLSearchParams': parameter 1 sequence's element does not contain exactly two elements.";
          let self3 = this;
          let typeError = new TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence's element does not contain exactly two elements.");
          throw typeError;
        } else {
          let _list = self._list;
          let items = [, ];
          [arr6[0], arr6[1]] = tmp12;
          let arr = _list.push(items);
          continue;
        }
      }
    } else {
      if (typeof substr === "object") {
        const _Object2 = Object;
        if (null === Object.getPrototypeOf(substr)) {
          const _Object = Object;
          const keys = Object.keys(substr);
          for (const item10033 of keys) {
            let _list1 = self._list;
            let items1 = [item10033, substr[item10033]];
            let arr2 = _list1.push(items1);
            continue;
          }
        }
      }
      const obj = _mod14159;
      self._list = obj.parseUrlencoded(substr);
    }
  }
}
const entry = {
  key: "_updateSteps",
  value: function _updateSteps() {
    const self = this;
    if (null !== this._url) {
      const obj = _mod14159;
      let serializeUrlencodedResult = obj.serializeUrlencoded(self._list);
      if ("" === serializeUrlencodedResult) {
        serializeUrlencodedResult = null;
      }
      self._url._url.query = serializeUrlencodedResult;
    }
  }
};
let items = [
  entry,
  {
    key: "append",
    value: function append(arg0, arg1) {
      const _list = this._list;
      const items = [arg0, arg1];
      _list.push(items);
      this._updateSteps();
    }
  },
  {
    key: "delete",
    value: function _delete(arg0) {
      let sum;
      const self = this;
      let num = 0;
      if (0 < this._list.length) {
        do {
          if (self._list[num][0] === arg0) {
            let _list = self._list;
            let spliceResult = _list.splice(num, 1);
            sum = num;
          } else {
            sum = num + 1;
          }
          num = sum;
        } while (sum < self._list.length);
      }
      self._updateSteps();
    }
  },
  {
    key: "get",
    value: function get(arg0) {
      const _list = this._list;
      for (const item10008 of _list) {
        if (item10008[0] === arg0) {
          let tmp2 = item10008[1];
          obj.return();
          return tmp2;
        }
      }
      return null;
    }
  },
  {
    key: "getAll",
    value: function getAll(arg0) {
      const items = [];
      const _list = this._list;
      for (const item10009 of _list) {
        if (item10009[0] === arg0) {
          let arr = items.push(tmp[1]);
        }
        continue;
      }
      return items;
    }
  },
  {
    key: "has",
    value: function has(arg0) {
      const _list = this._list;
      for (const item10007 of _list) {
        if (item10007[0] === arg0) {
          obj.return();
          let flag = true;
          return true;
        }
      }
      return false;
    }
  },
  {
    key: "set",
    value: function set(arg0, arg1) {
      let sum;
      const self = this;
      let num = 0;
      let flag = false;
      let flag2 = false;
      if (0 < this._list.length) {
        do {
          let flag3;
          if (self._list[num][0] === arg0) {
            let _list = self._list;
            if (flag) {
              let spliceResult = _list.splice(num, 1);
              sum = num;
              flag3 = flag;
            } else {
              _list[num][1] = arg1;
              sum = num + 1;
              flag3 = true;
            }
          } else {
            sum = num + 1;
            flag3 = flag;
          }
          num = sum;
          flag = flag3;
          flag2 = flag3;
        } while (sum < self._list.length);
      }
      if (!flag2) {
        const _list1 = self._list;
        const items = [arg0, arg1];
        _list1.push(items);
      }
      self._updateSteps();
    }
  },
  {
    key: "sort",
    value: function sort() {
      const _list = this._list;
      const mapped = _list.map((item, index) => ({ item, index }));
      const sorted = mapped.sort((index, index2) => index.item[0] > index2.item[0] || index.index - index2.index);
      this._list = sorted.map((item) => item.item);
      this._updateSteps();
    }
  },
,

];
const entry1 = {
  key: Symbol.iterator,
  value() {
    const _list = this._list;
    return _list[Symbol.iterator]();
  }
};
items[8] = entry1;
items[9] = {
  key: "toString",
  value: function toString() {
    const obj = _mod14159;
    return obj.serializeUrlencoded(this._list);
  }
};

export const implementation = _createClass(URLSearchParamsImpl, items);