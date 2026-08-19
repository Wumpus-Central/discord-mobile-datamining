// === Module 1327: ReflectionBinaryReader ===

// Module 1327 (ReflectionBinaryReader)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const ReflectionBinaryReader = require;
class ReflectionBinaryReader {
  constructor(arg0) {
    tmp = closure_3(this, ReflectionBinaryReader);
    this.info = global;
    return;
  }
}
let items = [
  {
    key: "prepare",
    value: function prepare() {
      const self = this;
      if (!this.fieldNoToField) {
        let fields = self.info.fields;
        if (null === fields) {
          fields = [];
        }
        const _Map = Map;
        const map = new Map(fields.map((no) => {
          const items = [no.no, no];
          return items;
        }));
        self.fieldNoToField = map;
      }
    }
  },
  {
    key: "read",
    value: function read(len, arg1, readUnknownField) {
      const self = this;
      this.prepare();
      if (undefined === arg3) {
        len = len.len;
      } else {
        len = len.pos + arg3;
      }
      if (len.pos < len) {
        while (true) {
          let tmp2 = callback;
          let tmp3 = callback(len.tag(), 2);
          [tmp4, tmp5] = tmp3;
          let fieldNoToField = self.fieldNoToField;
          let value = fieldNoToField.get(tmp4);
          if (value) {
            ({ repeat, localName, oneof } = value);
            let tmp21 = arg1;
            if (oneof) {
              let tmp22 = arg1[value.oneof];
              oneof = tmp22.oneofKind !== localName;
              tmp21 = tmp22;
            }
            if (oneof) {
              let obj = { oneofKind: null };
              obj[0] = localName;
              arg1[value.oneof] = obj;
              tmp21 = obj;
            }
            let kind = value.kind;
            if ("scalar" !== kind) {
              if ("enum" !== kind) {
                if ("message" === kind) {
                  if (repeat) {
                    let arr = tmp21[localName];
                    let TResult = value.T();
                    arr = arr.push(TResult.internalBinaryRead(len, len.uint32(), readUnknownField));
                  } else {
                    let TResult1 = value.T();
                    let tmp23 = TResult1;
                    let tmp24 = len;
                    let tmp25 = readUnknownField;
                    tmp21[localName] = TResult1.internalBinaryRead(len, len.uint32(), readUnknownField, tmp21[localName]);
                  }
                } else if ("map" === kind) {
                  let tmp2Result = tmp2(self.mapEntry(value, len, readUnknownField), 2);
                  tmp21[localName][tmp2Result[0]] = tmp2Result[1];
                }
              }
            }
            if ("enum" == value.kind) {
              let tmp27 = ReflectionBinaryReader;
              let tmp28 = dependencyMap;
              let T = ReflectionBinaryReader(1320).ScalarType.INT32;
            } else {
              T = value.T;
            }
            if ("scalar" == value.kind) {
              let L = value.L;
            }
            if (repeat) {
              let arr1 = tmp21[localName];
              let tmp29 = ReflectionBinaryReader;
              let tmp30 = dependencyMap;
              if (tmp5 == ReflectionBinaryReader(1311).WireType.LengthDelimited) {
                if (T != tmp29(1320).ScalarType.STRING) {
                  if (T != tmp29(1320).ScalarType.BYTES) {
                    let sum = len.uint32() + len.pos;
                    if (len.pos < sum) {
                      do {
                        arr = arr1.push(self.scalar(len, T, L));
                        pos = len.pos;
                      } while (pos < sum);
                    }
                  }
                }
              }
              arr1 = arr1.push(self.scalar(len, T, L));
            } else {
              tmp21[localName] = self.scalar(len, T, L);
            }
          } else {
            let onRead = readUnknownField.readUnknownField;
            if ("throw" == onRead) {
              break;
            } else {
              let skipResult = len.skip(tmp5);
              if (false !== onRead) {
                if (true === onRead) {
                  let tmp7 = ReflectionBinaryReader;
                  let tmp8 = dependencyMap;
                  onRead = ReflectionBinaryReader(1311).UnknownFieldHandler.onRead;
                }
                let tmp9 = arg1;
                let tmp10 = tmp4;
                let tmp11 = tmp5;
                let tmp12 = skipResult;
                let onReadResult = onRead(self.info.typeName, arg1, tmp4, tmp5, skipResult);
              }
            }
          }
        }
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        error = new Error("Unknown field " + tmp4 + " (wire type " + tmp5 + ") for " + self.info.typeName);
        throw error;
      }
    }
  },
  {
    key: "mapEntry",
    value: function mapEntry(V, pos) {
      const self = this;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let tmp5;
      if (pos.pos < sum) {
        [tmp8, tmp9] = callback(pos.tag(), 2);
        while (1 !== tmp8) {
          if (2 === tmp8) {
            let kind = V.V.kind;
            if ("scalar" === kind) {
              let scalarResult = self.scalar(pos, V.V.T, V.V.L);
              let tmp20 = tmp3;
            } else if ("enum" === kind) {
              scalarResult = pos.int32();
              tmp20 = tmp3;
            } else {
              scalarResult = tmp2;
              tmp20 = tmp3;
              if ("message" === kind) {
                let V2 = V.V;
                let TResult = V2.T();
                scalarResult = TResult.internalBinaryRead(pos, pos.uint32(), arg2);
                tmp20 = tmp3;
              }
            }
            tmp2 = scalarResult;
            tmp3 = tmp20;
            tmp4 = scalarResult;
            tmp5 = tmp20;
          } else {
            let tmp12 = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "#";
            let str2 = ") in map entry for ";
            let str3 = " (wire type ";
            let str4 = "Unknown field ";
            let tmp13 = tmp8;
            let tmp14 = tmp9;
            let tmp15 = new.target;
            let tmp16 = new.target;
            error = new Error("Unknown field " + tmp8 + " (wire type " + tmp9 + ") in map entry for " + self.info.typeName + "#" + V.name);
            let tmp18 = error;
            throw error;
          }
        }
        if (V.K == ReflectionBinaryReader(1320).ScalarType.BOOL) {
          str = pos.bool().toString();
          const str5 = pos.bool();
        } else {
          str = self.scalar(pos, V.K, tmp21(1320).LongType.STRING);
        }
        tmp21 = ReflectionBinaryReader;
        const tmp7 = callback(pos.tag(), 2);
      }
      if (undefined === tmp5) {
        const str6 = ReflectionBinaryReader(1328).reflectionScalarDefault(V.K);
        let str1 = str6;
        if (V.K == ReflectionBinaryReader(1320).ScalarType.BOOL) {
          str1 = str6.toString();
        }
        tmp5 = str1;
        const obj = ReflectionBinaryReader(1328);
      }
      let num = tmp4;
      if (undefined === tmp4) {
        const kind2 = V.V.kind;
        if ("scalar" === kind2) {
          num = ReflectionBinaryReader(1328).reflectionScalarDefault(V.V.T, V.V.L);
          const obj3 = ReflectionBinaryReader(1328);
        } else if ("enum" === kind2) {
          num = 0;
        } else {
          num = tmp4;
          if ("message" === kind2) {
            V = V.V;
            num = V.T().create();
            const TResult1 = V.T();
          }
        }
      }
      const items = [tmp5, num];
      return items;
    }
  },
  {
    key: "scalar",
    value: function scalar(int32, arg1, STRING) {
      if (ReflectionBinaryReader(1320).ScalarType.INT32 === arg1) {
        return int32.int32();
      } else if (tmp(1320).ScalarType.STRING === arg1) {
        return int32.string();
      } else if (tmp(1320).ScalarType.BOOL === arg1) {
        return int32.bool();
      } else if (tmp(1320).ScalarType.DOUBLE === arg1) {
        return int32.double();
      } else if (tmp(1320).ScalarType.FLOAT === arg1) {
        return int32.float();
      } else if (tmp(1320).ScalarType.INT64 === arg1) {
        let tmpResult = tmp(1325);
        return tmpResult.reflectionLongConvert(int32.int64(), STRING);
      } else if (tmp(1320).ScalarType.UINT64 === arg1) {
        tmpResult = tmp(1325);
        return tmpResult.reflectionLongConvert(int32.uint64(), STRING);
      } else if (tmp(1320).ScalarType.FIXED64 === arg1) {
        return tmp(1325).reflectionLongConvert(int32.fixed64(), STRING);
      } else if (tmp(1320).ScalarType.FIXED32 === arg1) {
        return int32.fixed32();
      } else if (tmp(1320).ScalarType.BYTES === arg1) {
        return int32.bytes();
      } else if (tmp(1320).ScalarType.UINT32 === arg1) {
        return int32.uint32();
      } else if (tmp(1320).ScalarType.SFIXED32 === arg1) {
        return int32.sfixed32();
      } else if (tmp(1320).ScalarType.SFIXED64 === arg1) {
        return tmp(1325).reflectionLongConvert(int32.sfixed64(), STRING);
      } else if (tmp(1320).ScalarType.SINT32 === arg1) {
        return int32.sint32();
      } else if (tmp(1320).ScalarType.SINT64 === arg1) {
        return tmp(1325).reflectionLongConvert(int32.sint64(), STRING);
      }
    }
  }
];

export const ReflectionBinaryReader = _createClass(ReflectionBinaryReader, items);