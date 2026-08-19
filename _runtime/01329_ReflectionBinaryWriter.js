// === Module 1329: ReflectionBinaryWriter ===

// Module 1329 (ReflectionBinaryWriter)
import _slicedToArray from "_slicedToArray" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const ReflectionBinaryWriter = require;
class ReflectionBinaryWriter {
  constructor(arg0) {
    tmp = closure_3(this, ReflectionBinaryWriter);
    this.info = global;
    return;
  }
}
let items = [
  {
    key: "prepare",
    value: function prepare() {
      const self = this;
      if (!this.fields) {
        if (self.info.fields) {
          const fields = self.info.fields;
          let combined = fields.concat();
        } else {
          combined = [];
        }
        self.fields = combined.sort((no, no2) => no.no - no2.no);
      }
    }
  },
  {
    key: "write",
    value: function write(arg0, tag, writeUnknownFields) {
      const self = this;
      this.prepare();
      const iter = this.fields[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let obj = nextResult;
        ({ repeat, localName } = nextResult);
        if (nextResult.oneof) {
          let tmp6 = arg0[obj.oneof];
          if (tmp6.oneofKind !== localName) {
            continue;
          } else {
            let tmp4 = tmp7[localName];
            let flag = true;
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
                let obj2 = ReflectionBinaryWriter(1316);
                let _Array = Array;
                let assertResult = obj2.assert(Array.isArray(tmp4));
                for (const item10091 of tmp4) {
                  let messageResult = self.message(arg1, arg2, obj.T(), obj.no, item10091);
                  continue;
                }
              } else {
                let messageResult1 = self.message(tag, writeUnknownFields, obj.T(), obj.no, tmp4);
              }
            } else if ("map" === kind) {
              let obj5 = ReflectionBinaryWriter(1316);
              let tmp90 = typeof tmp4 === "object";
              if (typeof tmp4 === "object") {
                tmp90 = null !== tmp4;
              }
              let assertResult1 = obj5.assert(tmp90);
              let _Object = Object;
              let entries = Object.entries(tmp4);
              for (const item10054 of entries) {
                let tmp16 = _slicedToArray(item10054, 2);
                let mapEntryResult = self.mapEntry(arg1, arg2, obj, tmp16[0], tmp16[1]);
                continue;
              }
            }
          }
          continue;
        }
        if ("enum" == obj.kind) {
          let T = ReflectionBinaryWriter(1320).ScalarType.INT32;
        } else {
          T = obj.T;
        }
        let tmp45 = T;
        if (repeat) {
          let obj4 = ReflectionBinaryWriter(1316);
          let _Array2 = Array;
          let assertResult2 = obj4.assert(Array.isArray(tmp4));
          if (repeat == ReflectionBinaryWriter(1320).RepeatType.PACKED) {
            let packedResult = self.packed(tag, tmp45, obj.no, tmp4);
          } else {
            for (const item10157 of tmp4) {
              let flag2 = true;
              let scalarResult = self.scalar(arg1, tmp45, obj.no, item10157, true);
              continue;
            }
          }
        } else if (undefined === tmp4) {
          let obj3 = ReflectionBinaryWriter(1316);
          let assertResult3 = obj3.assert(obj.opt);
        } else {
          let no = obj.no;
          let opt = flag;
          let tmp48 = T;
          let tmp50 = tmp4;
          if (!flag) {
            opt = obj.opt;
          }
          let scalarResult1 = self.scalar(tag, tmp48, no, tmp50, opt);
        }
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (true === onWrite) {
          onWrite = ReflectionBinaryWriter(1311).UnknownFieldHandler.onWrite;
        }
        onWrite(self.info.typeName, arg0, tag);
      }
    }
  },
  {
    key: "mapEntry",
    value: function mapEntry(tag, arg1, no, match) {
      tag.tag(no.no, ReflectionBinaryWriter(1311).WireType.LengthDelimited);
      tag.fork();
      const K = no.K;
      if (ReflectionBinaryWriter(1320).ScalarType.INT32 !== K) {
        if (ReflectionBinaryWriter(1320).ScalarType.FIXED32 !== K) {
          if (ReflectionBinaryWriter(1320).ScalarType.UINT32 !== K) {
            if (ReflectionBinaryWriter(1320).ScalarType.SFIXED32 !== K) {
              if (ReflectionBinaryWriter(1320).ScalarType.SINT32 !== K) {
                let parsed = match;
                if (ReflectionBinaryWriter(1320).ScalarType.BOOL === K) {
                  let tmp6 = "true" == match;
                  if (!tmp6) {
                    tmp6 = "false" == match;
                  }
                  ReflectionBinaryWriter(1316).assert(tmp6);
                  parsed = "true" == match;
                  const tmpResult = ReflectionBinaryWriter(1316);
                }
              }
              const self = this;
              const self2 = this;
              this.scalar(tag, no.K, 1, parsed, true);
              const kind = no.V.kind;
              if ("scalar" === kind) {
                self.scalar(tag, no.V.T, 2, arg4, true);
              } else if ("enum" === kind) {
                self.scalar(tag, ReflectionBinaryWriter(1320).ScalarType.INT32, 2, arg4, true);
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
    value: function message(tag, arg1, internalBinaryWrite) {
      if (undefined !== arg4) {
        internalBinaryWrite.internalBinaryWrite(arg4, tag.tag(arg3, ReflectionBinaryWriter(1311).WireType.LengthDelimited).fork(), arg1);
        const joined = tag.join();
        const tagResult = tag.tag(arg3, ReflectionBinaryWriter(1311).WireType.LengthDelimited);
      }
    }
  },
  {
    key: "scalar",
    value: function scalar(tag, arg1, arg2, byteLength) {
      [tmp2, tmp3, tmp4] = _slicedToArray(this.scalarInfo(arg1, byteLength), 3);
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
        const obj = ReflectionBinaryWriter(1316);
        const self = this;
        obj.assert(arg1 !== ReflectionBinaryWriter(1320).ScalarType.BYTES && arg1 !== ReflectionBinaryWriter(1320).ScalarType.STRING);
        tag.tag(no, ReflectionBinaryWriter(1311).WireType.LengthDelimited);
        tag.fork();
        let num2 = 0;
        if (0 < arg3.length) {
          do {
            let tmp11 = tag[_slicedToArray(undefined, this.scalarInfo(this, arg1), 2)[1]](arg3[num2]);
            num2 = num2 + 1;
            length = arg3.length;
          } while (num2 < length);
        }
        const joined = tag.join();
        const tmp4 = arg1 !== ReflectionBinaryWriter(1320).ScalarType.BYTES && arg1 !== ReflectionBinaryWriter(1320).ScalarType.STRING;
      }
    }
  },
  {
    key: "scalarInfo",
    value: function scalarInfo(arg0, byteLength) {
      const Varint = ReflectionBinaryWriter(1311).WireType.Varint;
      let tmp3 = undefined === byteLength;
      let str = "int32";
      let tmp5 = tmp4;
      let Bit64 = Varint;
      if (ReflectionBinaryWriter(1320).ScalarType.INT32 !== arg0) {
        if (ReflectionBinaryWriter(1320).ScalarType.STRING === arg0) {
          let tmp12 = tmp3;
          if (!tmp3) {
            tmp12 = !byteLength.length;
          }
          Bit64 = ReflectionBinaryWriter(1311).WireType.LengthDelimited;
          str = "string";
          tmp5 = tmp12;
        } else if (ReflectionBinaryWriter(1320).ScalarType.BOOL === arg0) {
          tmp5 = false === byteLength;
          str = "bool";
          Bit64 = Varint;
        } else {
          str = "uint32";
          tmp5 = tmp4;
          Bit64 = Varint;
          if (ReflectionBinaryWriter(1320).ScalarType.UINT32 !== arg0) {
            if (ReflectionBinaryWriter(1320).ScalarType.DOUBLE === arg0) {
              Bit64 = ReflectionBinaryWriter(1311).WireType.Bit64;
              str = "double";
              tmp5 = tmp4;
            } else if (ReflectionBinaryWriter(1320).ScalarType.FLOAT === arg0) {
              Bit64 = ReflectionBinaryWriter(1311).WireType.Bit32;
              str = "float";
              tmp5 = tmp4;
            } else if (ReflectionBinaryWriter(1320).ScalarType.INT64 === arg0) {
              let isZeroResult = tmp3;
              if (!tmp3) {
                const PbLong3 = ReflectionBinaryWriter(1314).PbLong;
                isZeroResult = PbLong3.from(byteLength).isZero();
                const fromResult = PbLong3.from(byteLength);
              }
              str = "int64";
              tmp5 = isZeroResult;
              Bit64 = Varint;
            } else if (ReflectionBinaryWriter(1320).ScalarType.UINT64 === arg0) {
              let isZeroResult1 = tmp3;
              if (!tmp3) {
                const PbULong2 = ReflectionBinaryWriter(1314).PbULong;
                isZeroResult1 = PbULong2.from(byteLength).isZero();
                const fromResult1 = PbULong2.from(byteLength);
              }
              str = "uint64";
              tmp5 = isZeroResult1;
              Bit64 = Varint;
            } else if (ReflectionBinaryWriter(1320).ScalarType.FIXED64 === arg0) {
              let isZeroResult2 = tmp3;
              if (!tmp3) {
                const PbULong = ReflectionBinaryWriter(1314).PbULong;
                isZeroResult2 = PbULong.from(byteLength).isZero();
                const fromResult2 = PbULong.from(byteLength);
              }
              Bit64 = ReflectionBinaryWriter(1311).WireType.Bit64;
              str = "fixed64";
              tmp5 = isZeroResult2;
            } else if (ReflectionBinaryWriter(1320).ScalarType.BYTES === arg0) {
              let tmp8 = tmp3;
              if (!tmp3) {
                tmp8 = !byteLength.byteLength;
              }
              Bit64 = ReflectionBinaryWriter(1311).WireType.LengthDelimited;
              str = "bytes";
              tmp5 = tmp8;
            } else if (ReflectionBinaryWriter(1320).ScalarType.FIXED32 === arg0) {
              Bit64 = ReflectionBinaryWriter(1311).WireType.Bit32;
              str = "fixed32";
              tmp5 = tmp4;
            } else if (ReflectionBinaryWriter(1320).ScalarType.SFIXED32 === arg0) {
              Bit64 = ReflectionBinaryWriter(1311).WireType.Bit32;
              str = "sfixed32";
              tmp5 = tmp4;
            } else if (ReflectionBinaryWriter(1320).ScalarType.SFIXED64 === arg0) {
              let isZeroResult3 = tmp3;
              if (!tmp3) {
                const PbLong2 = ReflectionBinaryWriter(1314).PbLong;
                isZeroResult3 = PbLong2.from(byteLength).isZero();
                const fromResult3 = PbLong2.from(byteLength);
              }
              Bit64 = ReflectionBinaryWriter(1311).WireType.Bit64;
              str = "sfixed64";
              tmp5 = isZeroResult3;
            } else {
              str = "sint32";
              tmp5 = tmp4;
              Bit64 = Varint;
              if (ReflectionBinaryWriter(1320).ScalarType.SINT32 !== arg0) {
                tmp5 = tmp4;
                Bit64 = Varint;
                if (ReflectionBinaryWriter(1320).ScalarType.SINT64 === arg0) {
                  let isZeroResult4 = tmp3;
                  if (!tmp3) {
                    const PbLong = ReflectionBinaryWriter(1314).PbLong;
                    isZeroResult4 = PbLong.from(byteLength).isZero();
                    const fromResult4 = PbLong.from(byteLength);
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

export const ReflectionBinaryWriter = _createClass(ReflectionBinaryWriter, items);