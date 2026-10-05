// _runtime/01203_binaryReadOptions.js
import UnknownFieldHandler from "01202_UnknownFieldHandler.js";
import varint64read from "01204_varint64read.js";
import PbULong2 from "01205_PbULong.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

let closure_4 = {
  readUnknownField: true,
  readerFactory(View) {
    const tmp = new hasOwnProperty(View);
    return tmp;
  },
};
class BinaryReader {
  constructor(buf, textDecoder) {
    _classCallCheck(this, BinaryReader);
    this.varint64 = varint64read.varint64read;
    this.uint32 = varint64read.varint32read;
    this.buf = buf;
    this.len = buf.length;
    this.pos = 0;
    const dataView = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
    this.view = dataView;
    if (null == textDecoder) {
      const _TextDecoder = TextDecoder;
      const self = this;
      const self2 = this;
      textDecoder = new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
    }
    this.textDecoder = textDecoder;
  }
}
const entry = {
  key: "tag",
  value: function tag() {
    const uint32Result = this.uint32();
    if (uint32Result >>> 3 > 0) {
      if ((7 & uint32Result) >= 0) {
        if (5 >= (7 & uint32Result)) {
          const items = [uint32Result >>> 3, 7 & uint32Result];
          return items;
        }
      }
    }
    const error = new Error("illegal tag: field no " + tmp2 + " wire type " + tmp3);
    throw error;
  },
};
let items = [
  entry,
  {
    key: "skip",
    value: function skip(arg0) {
      let EndGroup;
      let tmp12;
      const self = this;
      const pos = this.pos;
      if (UnknownFieldHandler.WireType.Varint === arg0) {
        self.pos = +self.pos + 1;
        if (128 & self.buf[+self.pos]) {
          do {
            let tmp11 = +self.pos;
            self.pos = tmp11 + 1;
            tmp12 = 128 & self.buf[tmp11];
          } while (tmp12);
        }
      } else {
        if (UnknownFieldHandler.WireType.Bit64 === arg0) {
          self.pos = self.pos + 4;
        } else if (UnknownFieldHandler.WireType.Bit32 !== arg0) {
          if (UnknownFieldHandler.WireType.LengthDelimited === arg0) {
            self.pos = self.pos + self.uint32();
          } else if (UnknownFieldHandler.WireType.StartGroup === arg0) {
            let tmp6 = self.tag()[1];
            if (tmp6 !== UnknownFieldHandler.WireType.EndGroup) {
              do {
                let skipResult = self.skip(tmp6);
                tmp6 = self.tag()[1];
                EndGroup = UnknownFieldHandler.WireType.EndGroup;
              } while (tmp6 !== EndGroup);
            }
          } else {
            const _Error = Error;
            const self2 = this;
            const self3 = this;
            const error = new Error("cant skip wire type " + arg0);
            throw error;
          }
        }
        self.pos = self.pos + 4;
      }
      self.assertBounds();
      const buf = self.buf;
      return buf.subarray(pos, self.pos);
    },
  },
  {
    key: "assertBounds",
    value: function assertBounds() {
      if (this.pos > this.len) {
        const _RangeError = RangeError;
        const self = this;
        const self2 = this;
        const rangeError = new RangeError("premature EOF");
        throw rangeError;
      }
    },
  },
  {
    key: "int32",
    value: function int32() {
      return this.uint32() | 0;
    },
  },
  {
    key: "sint32",
    value: function sint32() {
      const uint32Result = this.uint32();
      return (uint32Result >>> 1) ^ (-1 & uint32Result);
    },
  },
  {
    key: "int64",
    value: function int64() {
      return PbULong2.PbLong(...this.varint64());
    },
  },
  {
    key: "uint64",
    value: function uint64() {
      return PbULong2.PbULong(...this.varint64());
    },
  },
  {
    key: "sint64",
    value: function sint64() {
      let tmp2;
      let tmp3;
      [tmp2, tmp3] = this.varint64();
      _slicedToArray(this.varint64(), 2);
      const tmp5 = tmp2 >>> 1;
      const tmp6 = 1 & tmp3;
      const tmp7 = tmp3 >>> 1;
      const pbLong = new PbULong2.PbLong((tmp5 | (tmp6 << 31)) ^ tmp4, tmp7 ^ tmp4);
      return pbLong;
    },
  },
  {
    key: "bool",
    value: function bool() {
      const tmp = _slicedToArray(this.varint64(), 2);
      return 0 !== tmp[0] || 0 !== tmp[1];
    },
  },
  {
    key: "fixed32",
    value: function fixed32() {
      const view = this.view;
      const sum = this.pos + 4;
      this.pos = sum;
      return view.getUint32(sum - 4, true);
    },
  },
  {
    key: "sfixed32",
    value: function sfixed32() {
      const view = this.view;
      const sum = this.pos + 4;
      this.pos = sum;
      return view.getInt32(sum - 4, true);
    },
  },
  {
    key: "fixed64",
    value: function fixed64() {
      const PbULong = PbULong2.PbULong;
      const sfixed32Result = this.sfixed32();
      const pbULong = new PbULong(sfixed32Result, this.sfixed32());
      return pbULong;
    },
  },
  {
    key: "sfixed64",
    value: function sfixed64() {
      const PbLong = PbULong2.PbLong;
      const sfixed32Result = this.sfixed32();
      const pbLong = new PbLong(sfixed32Result, this.sfixed32());
      return pbLong;
    },
  },
  {
    key: "float",
    value: function float() {
      const view = this.view;
      const sum = this.pos + 4;
      this.pos = sum;
      return view.getFloat32(sum - 4, true);
    },
  },
  {
    key: "double",
    value: function double() {
      const view = this.view;
      const sum = this.pos + 8;
      this.pos = sum;
      return view.getFloat64(sum - 8, true);
    },
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
    },
  },
  {
    key: "string",
    value: function string() {
      const textDecoder = this.textDecoder;
      return textDecoder.decode(this.bytes());
    },
  },
];
const _moduleResult = _createClass(BinaryReader, items);
const hasOwnProperty = _moduleResult;
const BinaryReader_export = _moduleResult;

export const binaryReadOptions = function binaryReadOptions(BINARY_READ_OPTIONS) {
  let merged;
  const tmp = BINARY_READ_OPTIONS;
  if (tmp) {
    const _Object = Object;
    const _Object2 = Object;
    merged = Object.assign(Object.assign({}, closure_4), BINARY_READ_OPTIONS);
  } else {
    merged = closure_4;
  }
  return merged;
};
export { BinaryReader_export as BinaryReader };
