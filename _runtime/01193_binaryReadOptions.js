// === Module 1193: binaryReadOptions ===

// Module 1193 (binaryReadOptions)
import _slicedToArray from "module_32" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const BinaryReader = require;
let closure_4 = {
  readUnknownField: true,
  readerFactory(arg0) {
    return new _moduleResult(arg0);
  }
};
class BinaryReader {
  constructor(arg0, arg1) {
    textDecoder = require;
    tmp2 = closure_3(this, BinaryReader);
    this.varint64 = closure_0(closure_1[3]).varint64read;
    this.uint32 = closure_0(closure_1[3]).varint32read;
    this.buf = global;
    this.len = global.length;
    this.pos = 0;
    dataView = new DataView(global.buffer, global.byteOffset, global.byteLength);
    this.view = dataView;
    if (null == require) {
      _TextDecoder = TextDecoder;
      tmp4 = new.target;
      str = "utf-8";
      tmp5 = new.target;
      textDecoder = new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
    }
    this.textDecoder = textDecoder;
    return;
  }
}
const entry = {
  key: "tag",
  value: function tag() {
    const uint32Result = this.uint32();
    if (uint32Result >>> 3 > 0) {
      if (tmp3 >= 0) {
        if (5 >= tmp3) {
          const items = [tmp2, tmp3];
          return items;
        }
      }
    }
    const error = new Error("illegal tag: field no " + tmp2 + " wire type " + tmp3);
    throw error;
  }
};
let items = [
  entry,
  {
    key: "skip",
    value: function skip(arg0) {
      let EndGroup;
      let tmp14;
      const self = this;
      if (BinaryReader(1192).WireType.Varint === arg0) {
        self.pos = +self.pos + 1;
        if (128 & self.buf[+self.pos]) {
          do {
            let tmp13 = +self.pos;
            self.pos = tmp13 + 1;
            tmp14 = 128 & self.buf[tmp13];
          } while (tmp14);
        }
      } else {
        if (BinaryReader(1192).WireType.Bit64 === arg0) {
          self.pos = self.pos + 4;
        } else if (BinaryReader(1192).WireType.Bit32 !== arg0) {
          if (BinaryReader(1192).WireType.LengthDelimited === arg0) {
            self.pos = self.pos + self.uint32();
          } else if (BinaryReader(1192).WireType.StartGroup === arg0) {
            const tmp8 = self.tag()[1];
            if (tmp8 !== BinaryReader(1192).WireType.EndGroup) {
              do {
                let skipResult = self.skip(self.tag()[1]);
                EndGroup = BinaryReader(1192).WireType.EndGroup;
              } while (tmp8 !== EndGroup);
            }
          } else {
            const _Error = Error;
            const error = new Error("cant skip wire type " + arg0);
            throw error;
          }
        }
        self.pos = self.pos + 4;
      }
      self.assertBounds();
      const buf = self.buf;
      return buf.subarray(this.pos, self.pos);
    }
  },
  {
    key: "assertBounds",
    value: function assertBounds() {
      if (this.pos > this.len) {
        const _RangeError = RangeError;
        const rangeError = new RangeError("premature EOF");
        throw rangeError;
      }
    }
  },
  {
    key: "int32",
    value: function int32() {
      return this.uint32() | 0;
    }
  },
  {
    key: "sint32",
    value: function sint32() {
      const uint32Result = this.uint32();
      return uint32Result >>> 1 ^ -1 & uint32Result;
    }
  },
  {
    key: "int64",
    value: function int64() {
      return BinaryReader(1195).PbLong(...this.varint64());
    }
  },
  {
    key: "uint64",
    value: function uint64() {
      return BinaryReader(1195).PbULong(...this.varint64());
    }
  },
  {
    key: "sint64",
    value: function sint64() {
      [tmp2, tmp3] = _slicedToArray(this.varint64(), 2);
      const pbLong = new BinaryReader(1195).PbLong((tmp2 >>> 1 | (1 & tmp3) << 31) ^ tmp4, tmp3 >>> 1 ^ tmp4);
      return pbLong;
    }
  },
  {
    key: "bool",
    value: function bool() {
      const tmp = _slicedToArray(this.varint64(), 2);
      return 0 !== tmp[0] || 0 !== tmp[1];
    }
  },
  {
    key: "fixed32",
    value: function fixed32() {
      const view = this.view;
      const sum = this.pos + 4;
      this.pos = sum;
      return view.getUint32(sum - 4, true);
    }
  },
  {
    key: "sfixed32",
    value: function sfixed32() {
      const view = this.view;
      const sum = this.pos + 4;
      this.pos = sum;
      return view.getInt32(sum - 4, true);
    }
  },
  {
    key: "fixed64",
    value: function fixed64() {
      const pbULong = new BinaryReader(1195).PbULong(this.sfixed32(), this.sfixed32());
      return pbULong;
    }
  },
  {
    key: "sfixed64",
    value: function sfixed64() {
      const pbLong = new BinaryReader(1195).PbLong(this.sfixed32(), this.sfixed32());
      return pbLong;
    }
  },
  {
    key: "float",
    value: function float() {
      const view = this.view;
      const sum = this.pos + 4;
      this.pos = sum;
      return view.getFloat32(sum - 4, true);
    }
  },
  {
    key: "double",
    value: function double() {
      const view = this.view;
      const sum = this.pos + 8;
      this.pos = sum;
      return view.getFloat64(sum - 8, true);
    }
  },
  {
    key: "bytes",
    value: function bytes() {
      const uint32Result = this.uint32();
      const pos = this.pos;
      this.pos = this.pos + uint32Result;
      this.assertBounds();
      const buf = this.buf;
      return buf.subarray(pos, pos + uint32Result);
    }
  },
  {
    key: "string",
    value: function string() {
      const textDecoder = this.textDecoder;
      return textDecoder.decode(this.bytes());
    }
  }
];
const _moduleResult = _createClass(BinaryReader, items);
const hasOwnProperty = _moduleResult;

export const binaryReadOptions = function binaryReadOptions(BINARY_READ_OPTIONS) {
  if (BINARY_READ_OPTIONS) {
    const _Object = Object;
    const _Object2 = Object;
    let merged = Object.assign(Object.assign({}, closure_4), BINARY_READ_OPTIONS);
  } else {
    merged = closure_4;
  }
  return merged;
};
export const BinaryReader = _moduleResult;