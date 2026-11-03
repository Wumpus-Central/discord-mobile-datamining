// === Module 1739: ? ===

// Module 1739
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const Blob = arg1;
function toUint8Array(__getBytes) {
  if (typeof __getBytes === "string") {
    let utf8EncodeResult = Blob(1741).utf8Encode(__getBytes);
    const obj2 = Blob(1741);
  } else if (__getBytes instanceof closure_3) {
    utf8EncodeResult = __getBytes.__getBytes();
  } else {
    const _ArrayBuffer = ArrayBuffer;
    if (ArrayBuffer.isView(__getBytes)) {
      const _Uint8Array2 = Uint8Array;
      const buffer = __getBytes.buffer;
      utf8EncodeResult = new Uint8Array(buffer.slice(__getBytes.byteOffset, __getBytes.byteOffset + __getBytes.byteLength));
    } else {
      const _ArrayBuffer2 = ArrayBuffer;
      if (__getBytes instanceof ArrayBuffer) {
        const _Uint8Array = Uint8Array;
        utf8EncodeResult = new Uint8Array(__getBytes.slice(0));
      } else {
        const _String = String;
        utf8EncodeResult = Blob(1741).utf8Encode(String(__getBytes));
        const obj = Blob(1741);
      }
    }
  }
  return utf8EncodeResult;
}
class Blob {
  constructor() {
    items = global;
    if (global === undefined) {
      items = [];
    }
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    self = this;
    tmp = c2(this, Blob);
    mapped = items.map(closure_4);
    uint8Array = new Uint8Array(mapped.reduce((acc, item) => acc + item.length, 0));
    num = 0;
    for (const item10025 of mapped) {
      tmp2 = num;
      result = uint8Array.set(item10025, num);
      num = num + item10025.length;
      continue;
    }
    self.bytes = uint8Array;
    str = obj.type;
    if (str == null) {
      str = "";
    }
    str2 = String(str);
    self.type = str2.toLowerCase();
    return;
  }
}
let items = [
  {
    key: "size",
    get() {
      return this.bytes.byteLength;
    }
  },
  {
    key: Symbol.toStringTag,
    get() {
      return "Blob";
    }
  },
  {
    key: "slice",
    value: function slice() {
      let num = arg0;
      if (arg0 === undefined) {
        num = 0;
      }
      const self = this;
      let size = arg1;
      if (arg1 === undefined) {
        size = self.size;
      }
      let str = arg2;
      if (arg2 === undefined) {
        str = "";
      }
      const size2 = self.size;
      if (num < 0) {
        const _Math2 = Math;
        let bound = Math.max(size2 + num, 0);
      } else {
        const _Math = Math;
        bound = Math.min(num, size2);
      }
      if (size < 0) {
        const _Math4 = Math;
        let bound1 = Math.max(size2 + size, 0);
      } else {
        const _Math3 = Math;
        bound1 = Math.min(size, size2);
      }
      const bound2 = Math.max(bound1 - bound, 0);
      const obj = Object.create(Blob.prototype);
      Blob([], { type: str });
      const bytes = self.bytes;
      obj.bytes = bytes.slice(bound, bound + bound2);
      return obj;
    }
  },
  {
    key: "arrayBuffer",
    value: function arrayBuffer() {
      return Promise.resolve(Blob(1740).toArrayBuffer(this.bytes));
    }
  },
  {
    key: "text",
    value: function text() {
      const obj = Blob(1741);
      return Promise.resolve(obj.utf8Decode(Blob(1741).stripUtf8Bom(this.bytes)));
    }
  },
  {
    key: "__getBytes",
    value: function __getBytes() {
      return this.bytes;
    }
  }
];
let tmp2 = _createClassDefault(Blob, items);
let closure_3 = tmp2;

export const Blob = tmp2;