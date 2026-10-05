// === Module 1206: binaryWriteOptions ===

// Module 1206 (binaryWriteOptions)
import varint64read from "varint64read" /* 1204 */;
import PbULong2 from "PbULong" /* 1205 */;
import assert from "assert" /* 1207 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let closure_3 = {
  writeUnknownFields: true,
  writerFactory() {
    const tmp = new _moduleResult();
    return tmp;
  }
};
class BinaryWriter {
  constructor(arg0) {
    const self = this;
    let textEncoder = arg0;
    _classCallCheck(this, BinaryWriter);
    this.stack = [];
    if (null == arg0) {
      const _TextEncoder = TextEncoder;
      const self2 = this;
      const self3 = this;
      textEncoder = new TextEncoder();
    }
    self.textEncoder = textEncoder;
    self.chunks = [];
    self.buf = [];
  }
}
const entry = {
  key: "finish",
  value: function finish() {
    let length;
    let length2;
    const self = this;
    const chunks = this.chunks;
    const push = chunks.push;
    const uint8Array = new Uint8Array(this.buf);
    push(uint8Array);
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    if (0 < this.chunks.length) {
      do {
        num2 = num2 + self.chunks[num].length;
        num = num + 1;
        num3 = num2;
        length = self.chunks.length;
      } while (num < length);
    }
    const uint8Array1 = new Uint8Array(num3);
    let num4 = 0;
    let num5 = 0;
    if (0 < self.chunks.length) {
      do {
        let result = uint8Array1.set(self.chunks[num4], num5);
        num5 = num5 + self.chunks[num4].length;
        num4 = num4 + 1;
        length2 = self.chunks.length;
      } while (num4 < length2);
    }
    self.chunks = [];
    return uint8Array1;
  }
};
const items = [
  entry,
  {
    key: "fork",
    value: function fork() {
      const stack = this.stack;
      const obj = { chunks: this.chunks, buf: this.buf };
      stack.push(obj);
      this.chunks = [];
      this.buf = [];
      return this;
    }
  },
  {
    key: "join",
    value: function join() {
      const self = this;
      const finishResult = this.finish();
      const stack = this.stack;
      const arr = stack.pop();
      if (arr) {
        ({ chunks: self.chunks, buf: self.buf } = arr);
        self.uint32(finishResult.byteLength);
        return self.raw(finishResult);
      } else {
        const _Error = Error;
        const self2 = this;
        const self3 = this;
        const error = new Error("invalid state, fork stack empty");
        throw error;
      }
    }
  },
  {
    key: "tag",
    value: function tag(arg0, arg1) {
      return this.uint32((arg0 << 3 | arg1) >>> 0);
    }
  },
  {
    key: "raw",
    value: function raw(arg0) {
      const self = this;
      if (this.buf.length) {
        const chunks = self.chunks;
        const _Uint8Array = Uint8Array;
        const self2 = this;
        const self3 = this;
        const push = chunks.push;
        const uint8Array = new Uint8Array(self.buf);
        push(uint8Array);
        self.buf = [];
      }
      const chunks1 = self.chunks;
      chunks1.push(arg0);
      return self;
    }
  },
  {
    key: "uint32",
    value: function uint32(NumberResult) {
      const self = this;
      const obj = assert;
      obj.assertUInt32(NumberResult);
      let tmp2 = NumberResult;
      let tmp3 = NumberResult;
      if (NumberResult > 127) {
        do {
          let buf = self.buf;
          let arr = buf.push(127 & tmp2 | 128);
          tmp2 = tmp2 >>> 7;
          tmp3 = tmp2;
        } while (127 < tmp2);
      }
      const buf1 = self.buf;
      buf1.push(tmp3);
      return self;
    }
  },
  {
    key: "int32",
    value: function int32(NumberResult) {
      const obj = assert;
      obj.assertInt32(NumberResult);
      const obj2 = varint64read;
      obj2.varint32write(NumberResult, this.buf);
      return this;
    }
  },
  {
    key: "bool",
    value: function bool(arg0) {
      const buf = this.buf;
      let num = 0;
      const push = buf.push;
      if (arg0) {
        num = 1;
      }
      push(num);
      return this;
    }
  },
  {
    key: "bytes",
    value: function bytes(byteLength) {
      this.uint32(byteLength.byteLength);
      return this.raw(byteLength);
    }
  },
  {
    key: "string",
    value: function string(arg0) {
      const textEncoder = this.textEncoder;
      const encodeResult = textEncoder.encode(arg0);
      this.uint32(encodeResult.byteLength);
      return this.raw(encodeResult);
    }
  },
  {
    key: "float",
    value: function float(NumberResult) {
      const obj = assert;
      obj.assertFloat32(NumberResult);
      const uint8Array = new Uint8Array(4);
      const dataView = new DataView(uint8Array.buffer);
      dataView.setFloat32(0, NumberResult, true);
      return this.raw(uint8Array);
    }
  },
  {
    key: "double",
    value: function double(arg0) {
      const uint8Array = new Uint8Array(8);
      const dataView = new DataView(uint8Array.buffer);
      dataView.setFloat64(0, arg0, true);
      return this.raw(uint8Array);
    }
  },
  {
    key: "fixed32",
    value: function fixed32(NumberResult) {
      const obj = assert;
      obj.assertUInt32(NumberResult);
      const uint8Array = new Uint8Array(4);
      const dataView = new DataView(uint8Array.buffer);
      dataView.setUint32(0, NumberResult, true);
      return this.raw(uint8Array);
    }
  },
  {
    key: "sfixed32",
    value: function sfixed32(NumberResult) {
      const obj = assert;
      obj.assertInt32(NumberResult);
      const uint8Array = new Uint8Array(4);
      const dataView = new DataView(uint8Array.buffer);
      dataView.setInt32(0, NumberResult, true);
      return this.raw(uint8Array);
    }
  },
  {
    key: "sint32",
    value: function sint32(NumberResult) {
      const obj = assert;
      obj.assertInt32(NumberResult);
      const tmp2 = NumberResult << 1;
      const tmp3 = NumberResult >> 31;
      const obj2 = varint64read;
      obj2.varint32write((tmp2 ^ tmp3) >>> 0, this.buf);
      return this;
    }
  },
  {
    key: "sfixed64",
    value: function sfixed64(arg0) {
      const uint8Array = new Uint8Array(8);
      const dataView = new DataView(uint8Array.buffer);
      const PbLong = PbULong2.PbLong;
      const fromResult = PbLong.from(arg0);
      dataView.setInt32(0, fromResult.lo, true);
      dataView.setInt32(4, fromResult.hi, true);
      return this.raw(uint8Array);
    }
  },
  {
    key: "fixed64",
    value: function fixed64(arg0) {
      const uint8Array = new Uint8Array(8);
      const dataView = new DataView(uint8Array.buffer);
      const PbULong = PbULong2.PbULong;
      const fromResult = PbULong.from(arg0);
      dataView.setInt32(0, fromResult.lo, true);
      dataView.setInt32(4, fromResult.hi, true);
      return this.raw(uint8Array);
    }
  },
  {
    key: "int64",
    value: function int64(arg0) {
      const PbLong = PbULong2.PbLong;
      const fromResult = PbLong.from(arg0);
      const obj = varint64read;
      obj.varint64write(fromResult.lo, fromResult.hi, this.buf);
      return this;
    }
  },
  {
    key: "sint64",
    value: function sint64(arg0) {
      const PbLong = PbULong2.PbLong;
      const fromResult = PbLong.from(arg0);
      const tmp3 = fromResult.lo << 1;
      const tmp4 = fromResult.hi << 1;
      const tmp5 = fromResult.lo >>> 31;
      const obj = varint64read;
      obj.varint64write(tmp3 ^ fromResult.hi >> 31, (tmp4 | tmp5) ^ fromResult.hi >> 31, this.buf);
      return this;
    }
  },
  {
    key: "uint64",
    value: function uint64(arg0) {
      const PbULong = PbULong2.PbULong;
      const fromResult = PbULong.from(arg0);
      const obj = varint64read;
      obj.varint64write(fromResult.lo, fromResult.hi, this.buf);
      return this;
    }
  }
];
const _moduleResult = _createClass(BinaryWriter, items);
const BinaryWriter_export = _moduleResult;

export const binaryWriteOptions = function binaryWriteOptions(arg0) {
  let merged;
  const tmp = arg0;
  if (tmp) {
    const _Object = Object;
    const _Object2 = Object;
    merged = Object.assign(Object.assign({}, closure_3), arg0);
  } else {
    merged = closure_3;
  }
  return merged;
};
export { BinaryWriter_export as BinaryWriter };