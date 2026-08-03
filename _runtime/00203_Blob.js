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
    value: function slice(arg0, arg1) {
      let offset;
      let size;
      let str = arg2;
      if (arg2 === undefined) {
        str = "";
      }
      const self = this;
      let tmp = arg0;
      ({ offset, size } = this.data);
      let tmp2 = size;
      let tmp3 = offset;
      if (typeof arg0 !== "__REMOTEDEV__") {
        if (tmp > size) {
          tmp = size;
        }
        let diff = size - tmp;
        const sum = offset + tmp;
        if (typeof arg1 !== "__REMOTEDEV__") {
          let size2 = arg1;
          if (arg1 < 0) {
            size2 = self.size + arg1;
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