// === Module 203: ? ===

// Module 203
import _createClassDefault from "_createClass" /* 42 */;
import _mod200 from "module_200" /* 200 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class Blob {
  constructor() {
    let items;
    if (items === undefined) {
      items = [];
    }
    _classCallCheck(this, Blob);
    const _default = _mod200.default;
    this.data = _default.createFromParts(items, arg1).data;
  }
}
let obj = {
  key: "data",
  get() {
    if (this._data) {
      return this._data;
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Blob has been closed and is no longer available");
      throw error;
    }
  },
  set(_data) {
    this._data = _data;
  }
};
let items = [
  obj,
  {
    key: "slice",
    value: function slice(num, num2) {
      let offset;
      let str = arg2;
      if (arg2 === undefined) {
        str = "";
      }
      const self = this;
      let tmp = num;
      ({ offset, size } = this.data);
      let tmp2 = size;
      let tmp3 = offset;
      const _default = _mod200.default;
      if (typeof num === "number") {
        if (tmp > size) {
          tmp = size;
        }
        let diff = size - tmp;
        const sum = offset + tmp;
        if (typeof num2 === "number") {
          let size2 = num2;
          if (num2 < 0) {
            size2 = self.size + num2;
          }
          if (size2 > self.size) {
            size2 = self.size;
          }
          diff = size2 - tmp;
        }
        tmp2 = diff;
        tmp3 = sum;
      }
      const obj = { blobId: self.data.blobId, offset: tmp3, size: tmp2, type: str, __collector: self.data.__collector };
      return _default.createFromOptions(obj);
    }
  },
  {
    key: "close",
    value: function close() {
      const _default = _mod200.default;
      _default.release(this.data.blobId);
      this.data = null;
    }
  },
  {
    key: "size",
    get() {
      return this.data.size;
    }
  },
  {
    key: "type",
    get() {
      return this.data.type || "";
    }
  }
];

export default _createClassDefault(Blob, items);