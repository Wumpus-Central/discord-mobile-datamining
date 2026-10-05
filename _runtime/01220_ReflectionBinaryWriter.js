// === Module 1220: ReflectionBinaryWriter ===

// Module 1220 (ReflectionBinaryWriter)
import UnknownFieldHandler from "UnknownFieldHandler" /* 1202 */;
import PbULong3 from "PbULong" /* 1205 */;
import assert2 from "assert" /* 1207 */;
import ScalarType from "ScalarType" /* 1211 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

class ReflectionBinaryWriter {
  constructor(self) {
    _classCallCheck(this, ReflectionBinaryWriter);
    this.info = self;
  }
}
const entry = {
  key: "prepare",
  value: function prepare() {
    const self = this;
    if (!this.fields) {
      let combined;
      if (self.info.fields) {
        const fields = self.info.fields;
        combined = fields.concat();
      } else {
        combined = [];
      }
      self.fields = combined.sort((no, no2) => no.no - no2.no);
    }
  }
};
let items = [
  entry,
  {
    key: "write",
    value: function write(arg0, tag, writeUnknownFields) {
      let localName;
      let repeat;
      const self = this;
      this.prepare();
      const iter = this.fields[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4;
        let flag;
        let T;
        let obj = nextResult;
        ({ repeat, localName } = nextResult);
        if (nextResult.oneof) {
          let tmp6 = arg0[obj.oneof];
          if (tmp6.oneofKind !== localName) {
            continue;
          } else {
            tmp4 = tmp7[localName];
            flag = true;
          }
        } else {
          tmp4 = arg0[localName];
          flag = false;
        }
        let kind = obj.kind;
        if ("scalar" !== kind) {
          if ("enum" !== kind) {
            if ("message" === kind) {
              if (repeat) {
                let obj2 = assert2;
                let _Array = Array;
                let assertResult = obj2.assert(Array.isArray(tmp4));
                for (const item10091 of tmp4) {
                  let messageResult = self.message(tag, writeUnknownFields, obj.T(), obj.no, item10091);
                  continue;
                }
              } else {
                let messageResult1 = self.message(tag, writeUnknownFields, obj.T(), obj.no, tmp4);
              }
            } else if ("map" === kind) {
              let tmp89 = assert2;
              let tmp91 = typeof tmp4 === "object";
              let assert = tmp89.assert;
              if (typeof tmp4 === "object") {
                tmp91 = null !== tmp4;
              }
              let assertResult1 = assert(tmp91);
              let _Object = Object;
              let entries = Object.entries(tmp4);
              for (const item10054 of entries) {
                let tmp16 = _slicedToArray(item10054, 2);
                let mapEntryResult = self.mapEntry(tag, writeUnknownFields, obj, tmp16[0], tmp16[1]);
                continue;
              }
            }
          }
          continue;
        }
        if ("enum" == obj.kind) {
          T = ScalarType.ScalarType.INT32;
        } else {
          T = obj.T;
        }
        let tmp45 = T;
        if (repeat) {
          let obj4 = assert2;
          let _Array2 = Array;
          let assertResult2 = obj4.assert(Array.isArray(tmp4));
          if (repeat == ScalarType.RepeatType.PACKED) {
            let packedResult = self.packed(tag, tmp45, obj.no, tmp4);
          } else {
            for (const item10157 of tmp4) {
              let flag2 = true;
              let scalarResult = self.scalar(tag, tmp45, obj.no, item10157, true);
              continue;
            }
          }
        } else if (undefined === tmp4) {
          let obj3 = assert2;
          let assertResult3 = obj3.assert(obj.opt);
        } else {
          let no = obj.no;
          let opt = flag;
          let scalar = self.scalar;
          let tmp48 = T;
          let tmp50 = tmp4;
          if (!flag) {
            opt = obj.opt;
          }
          let scalarResult1 = scalar(tag, tmp48, no, tmp50, opt);
        }
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (true === onWrite) {
          onWrite = UnknownFieldHandler.UnknownFieldHandler.onWrite;
        }
        onWrite(self.info.typeName, arg0, tag);
      }
    }
  },
  {
    key: "mapEntry",
    value: function mapEntry(tag, arg1, no, match, arg4) {
      tag.tag(no.no, UnknownFieldHandler.WireType.LengthDelimited);
      tag.fork();
      const K = no.K;
      if (ScalarType.ScalarType.INT32 !== K) {
        if (ScalarType.ScalarType.FIXED32 !== K) {
          if (ScalarType.ScalarType.UINT32 !== K) {
            if (ScalarType.ScalarType.SFIXED32 !== K) {
              let parsed;
              if (ScalarType.ScalarType.SINT32 !== K) {
                parsed = match;
                if (ScalarType.ScalarType.BOOL === K) {
                  let tmp7 = "true" == match;
                  const assert = assert2.assert;
                  assert2;
                  if (!tmp7) {
                    tmp7 = "false" == match;
                  }
                  assert(tmp7);
                  parsed = "true" == match;
                }
              }
              const self = this;
              const self2 = this;
              this.scalar(tag, no.K, 1, parsed, true);
              const kind = no.V.kind;
              if ("scalar" === kind) {
                self.scalar(tag, no.V.T, 2, arg4, true);
              } else if ("enum" === kind) {
                self.scalar(tag, ScalarType.ScalarType.INT32, 2, arg4, true);
              } else if ("message" === kind) {
                const V = no.V;
                self.message(tag, arg1, V.T(), 2, arg4);
              }
              const joined = tag.join();
            }
          }
        }
      }
      parsed = Number.parseInt(match);
    }
  },
  {
    key: "message",
    value: function message(tag, arg1, internalBinaryWrite, arg3, arg4) {
      if (undefined !== arg4) {
        internalBinaryWrite = internalBinaryWrite.internalBinaryWrite;
        const tagResult = tag.tag(arg3, UnknownFieldHandler.WireType.LengthDelimited);
        internalBinaryWrite(arg4, tagResult.fork(), arg1);
        const joined = tag.join();
      }
    }
  },
  {
    key: "scalar",
    value: function scalar(tag, arg1, arg2, byteLength, arg4) {
      let tmp2;
      let tmp3;
      let tmp4;
      [tmp2, tmp3, tmp4] = this.scalarInfo(arg1, byteLength);
      _slicedToArray(this.scalarInfo(arg1, byteLength), 3);
      if (!tmp4) {
        tag.tag(arg2, tmp2);
        tag[tmp3](byteLength);
      }
    }
  },
  {
    key: "packed",
    value: function packed(tag, arg1, no, arg3) {
      let length;
      if (arg3.length) {
        const assert = assert2.assert;
        assert2;
        const self = this;
        const tmp5 = arg1 !== ScalarType.ScalarType.BYTES && arg1 !== ScalarType.ScalarType.STRING;
        assert(tmp5);
        tag.tag(no, UnknownFieldHandler.WireType.LengthDelimited);
        tag.fork();
        let num2 = 0;
        if (0 < arg3.length) {
          do {
            let tmp12 = tag[_slicedToArray(undefined, this.scalarInfo(this, arg1), 2)[1]](arg3[num2]);
            num2 = num2 + 1;
            length = arg3.length;
          } while (num2 < length);
        }
        const joined = tag.join();
      }
    }
  },
  {
    key: "scalarInfo",
    value: function scalarInfo(arg0, byteLength) {
      const Varint = UnknownFieldHandler.WireType.Varint;
      let tmp3 = undefined === byteLength;
      let str = "int32";
      let tmp5 = tmp4;
      let Bit64 = Varint;
      if (ScalarType.ScalarType.INT32 !== arg0) {
        if (ScalarType.ScalarType.STRING === arg0) {
          const tmp12 = tmp3 || !byteLength.length;
          Bit64 = UnknownFieldHandler.WireType.LengthDelimited;
          str = "string";
          tmp5 = tmp12;
        } else if (ScalarType.ScalarType.BOOL === arg0) {
          tmp5 = false === byteLength;
          str = "bool";
          Bit64 = Varint;
        } else {
          str = "uint32";
          tmp5 = tmp4;
          Bit64 = Varint;
          if (ScalarType.ScalarType.UINT32 !== arg0) {
            if (ScalarType.ScalarType.DOUBLE === arg0) {
              Bit64 = UnknownFieldHandler.WireType.Bit64;
              str = "double";
              tmp5 = tmp4;
            } else if (ScalarType.ScalarType.FLOAT === arg0) {
              Bit64 = UnknownFieldHandler.WireType.Bit32;
              str = "float";
              tmp5 = tmp4;
            } else if (ScalarType.ScalarType.INT64 === arg0) {
              let isZeroResult = tmp3;
              if (!isZeroResult) {
                const PbLong3 = PbULong3.PbLong;
                const fromResult = PbLong3.from(byteLength);
                isZeroResult = fromResult.isZero();
              }
              str = "int64";
              tmp5 = isZeroResult;
              Bit64 = Varint;
            } else if (ScalarType.ScalarType.UINT64 === arg0) {
              let isZeroResult1 = tmp3;
              if (!isZeroResult1) {
                const PbULong2 = PbULong3.PbULong;
                const fromResult1 = PbULong2.from(byteLength);
                isZeroResult1 = fromResult1.isZero();
              }
              str = "uint64";
              tmp5 = isZeroResult1;
              Bit64 = Varint;
            } else if (ScalarType.ScalarType.FIXED64 === arg0) {
              let isZeroResult2 = tmp3;
              if (!isZeroResult2) {
                const PbULong = PbULong3.PbULong;
                const fromResult2 = PbULong.from(byteLength);
                isZeroResult2 = fromResult2.isZero();
              }
              Bit64 = UnknownFieldHandler.WireType.Bit64;
              str = "fixed64";
              tmp5 = isZeroResult2;
            } else if (ScalarType.ScalarType.BYTES === arg0) {
              const tmp8 = tmp3 || !byteLength.byteLength;
              Bit64 = UnknownFieldHandler.WireType.LengthDelimited;
              str = "bytes";
              tmp5 = tmp8;
            } else if (ScalarType.ScalarType.FIXED32 === arg0) {
              Bit64 = UnknownFieldHandler.WireType.Bit32;
              str = "fixed32";
              tmp5 = tmp4;
            } else if (ScalarType.ScalarType.SFIXED32 === arg0) {
              Bit64 = UnknownFieldHandler.WireType.Bit32;
              str = "sfixed32";
              tmp5 = tmp4;
            } else if (ScalarType.ScalarType.SFIXED64 === arg0) {
              let isZeroResult3 = tmp3;
              if (!isZeroResult3) {
                const PbLong2 = PbULong3.PbLong;
                const fromResult3 = PbLong2.from(byteLength);
                isZeroResult3 = fromResult3.isZero();
              }
              Bit64 = UnknownFieldHandler.WireType.Bit64;
              str = "sfixed64";
              tmp5 = isZeroResult3;
            } else {
              str = "sint32";
              tmp5 = tmp4;
              Bit64 = Varint;
              if (ScalarType.ScalarType.SINT32 !== arg0) {
                tmp5 = tmp4;
                Bit64 = Varint;
                if (ScalarType.ScalarType.SINT64 === arg0) {
                  let isZeroResult4 = tmp3;
                  if (!isZeroResult4) {
                    const PbLong = PbULong3.PbLong;
                    const fromResult4 = PbLong.from(byteLength);
                    isZeroResult4 = fromResult4.isZero();
                  }
                  str = "sint64";
                  tmp5 = isZeroResult4;
                  Bit64 = Varint;
                }
              }
            }
          }
        }
      }
      const items = [Bit64, str, ];
      if (!tmp3) {
        tmp3 = tmp5;
      }
      items[2] = tmp3;
      return items;
    }
  }
];
const ReflectionBinaryWriter_export = _createClass(ReflectionBinaryWriter, items);

export { ReflectionBinaryWriter_export as ReflectionBinaryWriter };