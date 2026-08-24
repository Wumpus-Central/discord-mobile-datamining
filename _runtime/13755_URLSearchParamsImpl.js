// _runtime/13755_URLSearchParamsImpl.js
import _createClass from "metro/00042__createClass.js";
import closure_2 from "metro/00041__classCallCheck.js";

const URLSearchParamsImpl = require;
class URLSearchParamsImpl {
  constructor(arg0, arg1, arg2) {
    flag = importDefault.doNotStripQMark;
    if (flag === undefined) {
      flag = false;
    }
    self = this;
    tmp = closure_2(this, URLSearchParamsImpl);
    first = require[0];
    this._list = [];
    this._url = null;
    if (!flag) {
      flag = typeof first !== "string";
    }
    if (!flag) {
      str = "?";
      flag = "?" !== first[0];
    }
    substr = first;
    if (!flag) {
      num = 1;
      substr = require("module_1");
    }
    if (Array.isArray(substr)) {
      tmp9 = substr;
      iter = substr[Symbol.iterator]();
      num2 = 2;
      tmp10 = substr;
      nextResult = iter.next();
      tmp11 = iter;
      while (iter !== undefined) {
        tmp12 = nextResult;
        if (2 !== nextResult.length) {
          _TypeError = TypeError;
          tmp15 = new.target;
          str2 = "Failed to construct 'URLSearchParams': parameter 1 sequence's element does not contain exactly two elements.";
          tmp16 = new.target;
          typeError = new TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence's element does not contain exactly two elements.");
          tmp18 = typeError;
          throw typeError;
        } else {
          _list = self._list;
          tmp13 = nextResult;
          items = [, ];
          [arr6[0], arr6[1]] = tmp12;
          arr = _list.push(items);
          continue;
        }
      }
    } else {
      if (typeof substr === "object") {
        _Object2 = Object;
        if (null === Object.getPrototypeOf(substr)) {
          _Object = Object;
          keys = Object.keys(substr);
          tmp6 = keys;
          tmp7 = keys;
          for (const item10033 of keys) {
            _list1 = self._list;
            items1 = [, ];
            items1[0] = item10033;
            items1[1] = substr[item10033];
            arr1 = _list1.push(items1);
            continue;
          }
        }
      }
      tmp3 = URLSearchParamsImpl;
      tmp4 = closure_1;
      obj = require("replaceByteInByteSequence");
      self._list = obj.parseUrlencoded(substr);
    }
    return;
  }
}
let obj = {
  key: "_updateSteps",
  value: function _updateSteps() {
    const self = this;
    if (null !== this._url) {
      let serializeUrlencodedResult = URLSearchParamsImpl(13753).serializeUrlencoded(self._list);
      if ("" === serializeUrlencodedResult) {
        serializeUrlencodedResult = null;
      }
      self._url._url.query = serializeUrlencodedResult;
      const obj = URLSearchParamsImpl(13753);
    }
  }
};
let items = [
  obj,
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
          let tmp = num;
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
      for (const item10008 of tmp) {
        let tmp2 = item10008;
        if (item10008[0] === arg0) {
          let tmp3 = obj;
          obj.return();
          return item10008[1];
        }
      }
      return null;
    }
  },
  {
    key: "getAll",
    value: function getAll(arg0) {
      const items = [];
      for (const item10009 of tmp) {
        if (item10009[0] === arg0) {
          let tmp3 = item10009;
          let arr = items.push(tmp2[1]);
        }
        continue;
      }
      return items;
    }
  },
  {
    key: "has",
    value: function has(arg0) {
      for (const item10007 of tmp) {
        if (item10007[0] === arg0) {
          let tmp2 = obj;
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
          let tmp = num;
          let tmp2 = flag;
          if (self._list[num][0] === arg0) {
            let _list = self._list;
            if (flag) {
              let spliceResult = _list.splice(num, 1);
              sum = num;
              let flag3 = flag;
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
obj = {
  key: Symbol.iterator,
  value() {
    const _list = this._list;
    return _list[Symbol.iterator]();
  }
};
items[8] = obj;
items[9] = {
  key: "toString",
  value: function toString() {
    return URLSearchParamsImpl(13753).serializeUrlencoded(this._list);
  }
};

export const implementation = _createClass(URLSearchParamsImpl, items);