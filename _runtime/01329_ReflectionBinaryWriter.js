import _slicedToArray from "_slicedToArray";
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";

const ReflectionBinaryWriter = require;
class ReflectionBinaryWriter {
  constructor(arg0) {
    tmp = outer1_3(this, ReflectionBinaryWriter);
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
      let localName;
      let repeat;
      const self = this;
      this.prepare();
      const iter = this.fields[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let obj = nextResult;
        ({ repeat, localName } = nextResult);
        if (nextResult.oneof) {
          let tmp5 = nextResult;
          let tmp6 = arg0[obj.oneof];
          let tmp8 = localName;
          if (tmp6.oneofKind !== localName) {
            continue;
          } else {
            let tmp85 = tmp6;
            let tmp86 = localName;
            let tmp4 = tmp7[localName];
            let flag = true;
          }
        } else {
          let tmp3 = localName;
          tmp4 = arg0[localName];
          flag = false;
        }
        let tmp9 = nextResult;
        let kind = obj.kind;
        if ("scalar" !== kind) {
          if ("enum" !== kind) {
            if ("message" === kind) {
              let tmp22 = repeat;
              if (repeat) {
                let tmp29 = ReflectionBinaryWriter;
                let tmp30 = dependencyMap;
                let obj2 = ReflectionBinaryWriter(1316);
                let _Array = Array;
                let tmp31 = tmp4;
                let assertResult = obj2.assert(Array.isArray(tmp4));
                let tmp33 = tmp4;
                let tmp34 = tmp31;
                for (const item10091 of tmp4) {
                  let tmp35 = nextResult;
                  let tmp36 = self;
                  let tmp37 = arg1;
                  let tmp38 = arg2;
                  let tmp39 = item10091;
                  let messageResult = self.message(arg1, arg2, obj.T(), obj.no, item10091);
                  continue;
                }
              } else {
                let tmp23 = nextResult;
                let tmp24 = tmp4;
                let tmp25 = self;
                let tmp26 = tag;
                let tmp27 = writeUnknownFields;
                let messageResult1 = self.message(tag, writeUnknownFields, obj.T(), obj.no, tmp4);
              }
            } else if ("map" === kind) {
              let tmp87 = ReflectionBinaryWriter;
              let tmp88 = dependencyMap;
              let obj5 = ReflectionBinaryWriter(1316);
              let tmp89 = tmp4;
              let tmp90 = typeof tmp4 === "ay";
              if (typeof tmp4 !== "window") {
                let tmp91 = tmp4;
                tmp90 = null !== tmp4;
              }
              let assertResult1 = obj5.assert(tmp90);
              let _Object = Object;
              let tmp11 = tmp4;
              let entries = Object.entries(tmp4);
              let tmp13 = entries;
              let tmp14 = entries;
              for (const item10054 of entries) {
                let tmp15 = _slicedToArray;
                let tmp16 = _slicedToArray(item10054, 2);
                let tmp17 = nextResult;
                let tmp18 = self;
                let tmp19 = arg1;
                let tmp20 = arg2;
                let mapEntryResult = self.mapEntry(arg1, arg2, obj, tmp16[0], tmp16[1]);
                continue;
              }
            }
          }
          continue;
        }
        let tmp41 = nextResult;
        if ("enum" == obj.kind) {
          let tmp43 = ReflectionBinaryWriter;
          let tmp44 = dependencyMap;
          let T = ReflectionBinaryWriter(1320).ScalarType.INT32;
        } else {
          let tmp42 = nextResult;
          T = obj.T;
        }
        let tmp45 = T;
        let tmp46 = repeat;
        if (repeat) {
          let tmp63 = ReflectionBinaryWriter;
          let tmp64 = dependencyMap;
          let obj4 = ReflectionBinaryWriter(1316);
          let _Array2 = Array;
          let tmp65 = tmp4;
          let assertResult2 = obj4.assert(Array.isArray(tmp4));
          let tmp67 = repeat;
          if (repeat == ReflectionBinaryWriter(1320).RepeatType.PACKED) {
            let tmp76 = T;
            let tmp77 = nextResult;
            let tmp78 = tmp4;
            let tmp79 = self;
            let tmp80 = tag;
            let packedResult = self.packed(tag, tmp45, obj.no, tmp4);
          } else {
            let tmp68 = tmp4;
            let tmp69 = tmp4;
            for (const item10157 of tmp4) {
              let tmp70 = T;
              let tmp71 = nextResult;
              let tmp72 = self;
              let tmp73 = arg1;
              let tmp74 = item10157;
              let flag2 = true;
              let scalarResult = self.scalar(arg1, tmp45, obj.no, item10157, true);
              continue;
            }
          }
        } else {
          let tmp47 = tmp4;
          if (undefined === tmp4) {
            let tmp59 = ReflectionBinaryWriter;
            let tmp60 = dependencyMap;
            let obj3 = ReflectionBinaryWriter(1316);
            let tmp61 = nextResult;
            let assertResult3 = obj3.assert(obj.opt);
          } else {
            let tmp49 = nextResult;
            let no = obj.no;
            let opt = flag;
            let tmp48 = T;
            let tmp50 = tmp4;
            if (!flag) {
              let tmp51 = nextResult;
              opt = obj.opt;
            }
            let tmp52 = self;
            let tmp53 = tag;
            let tmp54 = tmp45;
            let tmp55 = no;
            let tmp56 = tmp4;
            let tmp57 = opt;
            let scalarResult1 = self.scalar(tag, tmp48, no, tmp50, opt);
          }
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
    value: function mapEntry(tag, arg1, no, joined) {
      tag.tag(no.no, ReflectionBinaryWriter(1311).WireType.LengthDelimited);
      tag.fork();
      const K = no.K;
      if (ReflectionBinaryWriter(1320).ScalarType.INT32 !== K) {
        if (tmp(1320).ScalarType.FIXED32 !== K) {
          if (tmp(1320).ScalarType.UINT32 !== K) {
            if (tmp(1320).ScalarType.SFIXED32 !== K) {
              if (tmp(1320).ScalarType.SINT32 !== K) {
                let parsed = joined;
                if (tmp(1320).ScalarType.BOOL === K) {
                  let tmp6 = "true" == joined;
                  if (!tmp6) {
                    tmp6 = "false" == joined;
                  }
                  tmp(1316).assert(tmp6);
                  parsed = "true" == joined;
                  const tmpResult = tmp(1316);
                }
              }
              const self = this;
              const self2 = this;
              this.scalar(tag, no.K, 1, parsed, true);
              const kind = no.V.kind;
              if ("scalar" === kind) {
                self.scalar(tag, no.V.T, 2, arg4, true);
              } else if ("enum" === kind) {
                self.scalar(tag, tmp(1320).ScalarType.INT32, 2, arg4, true);
              } else if ("message" === kind) {
                const V = no.V;
                self.message(tag, arg1, V.T(), 2, arg4);
              }
              joined = tag.join();
            }
          }
        }
      }
      parsed = Number.parseInt(joined);
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
      let tmp2;
      let tmp3;
      let tmp4;
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
        if (tmp(1320).ScalarType.STRING === arg0) {
          let tmp12 = tmp3;
          if (!tmp3) {
            tmp12 = !byteLength.length;
          }
          Bit64 = tmp(1311).WireType.LengthDelimited;
          str = "string";
          tmp5 = tmp12;
        } else if (tmp(1320).ScalarType.BOOL === arg0) {
          tmp5 = false === byteLength;
          str = "bool";
          Bit64 = Varint;
        } else {
          str = "uint32";
          tmp5 = tmp4;
          Bit64 = Varint;
          if (tmp(1320).ScalarType.UINT32 !== arg0) {
            if (tmp(1320).ScalarType.DOUBLE === arg0) {
              Bit64 = tmp(1311).WireType.Bit64;
              str = "double";
              tmp5 = tmp4;
            } else if (tmp(1320).ScalarType.FLOAT === arg0) {
              Bit64 = tmp(1311).WireType.Bit32;
              str = "float";
              tmp5 = tmp4;
            } else if (tmp(1320).ScalarType.INT64 === arg0) {
              let isZeroResult = tmp3;
              if (!tmp3) {
                const PbLong3 = tmp(1314).PbLong;
                isZeroResult = PbLong3.from(byteLength).isZero();
                const fromResult = PbLong3.from(byteLength);
              }
              str = "int64";
              tmp5 = isZeroResult;
              Bit64 = Varint;
            } else if (tmp(1320).ScalarType.UINT64 === arg0) {
              let isZeroResult1 = tmp3;
              if (!tmp3) {
                const PbULong2 = tmp(1314).PbULong;
                isZeroResult1 = PbULong2.from(byteLength).isZero();
                const fromResult1 = PbULong2.from(byteLength);
              }
              str = "uint64";
              tmp5 = isZeroResult1;
              Bit64 = Varint;
            } else if (tmp(1320).ScalarType.FIXED64 === arg0) {
              let isZeroResult2 = tmp3;
              if (!tmp3) {
                const PbULong = tmp(1314).PbULong;
                isZeroResult2 = PbULong.from(byteLength).isZero();
                const fromResult2 = PbULong.from(byteLength);
              }
              Bit64 = tmp(1311).WireType.Bit64;
              str = "fixed64";
              tmp5 = isZeroResult2;
            } else if (tmp(1320).ScalarType.BYTES === arg0) {
              let tmp8 = tmp3;
              if (!tmp3) {
                tmp8 = !byteLength.byteLength;
              }
              Bit64 = tmp(1311).WireType.LengthDelimited;
              str = "bytes";
              tmp5 = tmp8;
            } else if (tmp(1320).ScalarType.FIXED32 === arg0) {
              Bit64 = tmp(1311).WireType.Bit32;
              str = "fixed32";
              tmp5 = tmp4;
            } else if (tmp(1320).ScalarType.SFIXED32 === arg0) {
              Bit64 = tmp(1311).WireType.Bit32;
              str = "sfixed32";
              tmp5 = tmp4;
            } else if (tmp(1320).ScalarType.SFIXED64 === arg0) {
              let isZeroResult3 = tmp3;
              if (!tmp3) {
                const PbLong2 = tmp(1314).PbLong;
                isZeroResult3 = PbLong2.from(byteLength).isZero();
                const fromResult3 = PbLong2.from(byteLength);
              }
              Bit64 = tmp(1311).WireType.Bit64;
              str = "sfixed64";
              tmp5 = isZeroResult3;
            } else {
              str = "sint32";
              tmp5 = tmp4;
              Bit64 = Varint;
              if (tmp(1320).ScalarType.SINT32 !== arg0) {
                tmp5 = tmp4;
                Bit64 = Varint;
                if (tmp(1320).ScalarType.SINT64 === arg0) {
                  let isZeroResult4 = tmp3;
                  if (!tmp3) {
                    const PbLong = tmp(1314).PbLong;
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