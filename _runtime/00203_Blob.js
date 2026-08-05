// _runtime/00203_Blob.js
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";

const Blob = arg1;
class Blob {
  constructor() {
    items = global;
    if (global === undefined) {
      items = [];
    }
    tmp = outer1_2(this, Blob);
    _default = require("BlobManager").default;
    this.data = _default.createFromParts(items, arg1).data;
    return;
  }
}
let items = [
  {
    key: "data",
    get() {
      if (this._data) {
        return this._data;
      } else {
        const _Error = Error;
        const error = new Error("Blob has been closed and is no longer available");
        throw error;
      }
    },
    set(_data) {
      this._data = _data;
    }
  },
  {
    key: "slice",
    value: function slice(num, num2) {
      let offset;
      let size;
      let str = arg2;
      if (arg2 === undefined) {
        str = "";
      }
      const self = this;
      let tmp = num;
      ({ offset, size } = this.data);
      let tmp2 = size;
      let tmp3 = offset;
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
      return Blob(200).default.createFromOptions({ blobId: self.data.blobId, offset: tmp3, size: tmp2, type: str, __collector: self.data.__collector });
    }
  },
  {
    key: "close",
    value: function close() {
      Blob(200).default.release(this.data.blobId);
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

export default _createClass(Blob, items);