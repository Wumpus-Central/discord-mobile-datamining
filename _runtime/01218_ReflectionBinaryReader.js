// _runtime/01218_ReflectionBinaryReader.js
import UnknownFieldHandler from "01202_UnknownFieldHandler.js";
import ScalarType from "01211_ScalarType.js";
import reflectionLongConvert from "01216_reflectionLongConvert.js";
import reflectionScalarDefault from "01219_reflectionScalarDefault.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

let map;

class ReflectionBinaryReader {
  constructor(self) {
    _classCallCheck(this, ReflectionBinaryReader);
    this.info = self;
  }
}
const entry = {
  key: "prepare",
  value: function prepare() {
    const f134839 = (no) => {
      const items = [no.no, no];
      return items;
    };
    const self = this;
    if (!this.fieldNoToField) {
      const fields = self.info.fields ?? [];
      const _Map = Map;
      const self2 = this;
      const self3 = this;
      self.fieldNoToField = new Map(fields.map(f134839));
      map = new Map(fields.map(f134839));
    }
  },
};
let items = [
  entry,
  {
    key: "read",
    value: function read(len, arg1, readUnknownField, arg3) {
      let localName;
      let oneof;
      let pos;
      let repeat;
      let tmp4;
      let tmp5;
      const self = this;
      this.prepare();
      if (undefined === arg3) {
        len = len.len;
      } else {
        len = len.pos + arg3;
      }
      if (len.pos < len) {
        while (true) {
          let tmp3 = _slicedToArray(len.tag(), 2);
          [tmp4, tmp5] = tmp3;
          let fieldNoToField = self.fieldNoToField;
          let value = fieldNoToField.get(tmp4);
          if (value) {
            let T;
            let L;
            ({ repeat, localName, oneof } = value);
            let tmp19 = arg1;
            if (oneof) {
              let tmp20 = arg1[value.oneof];
              oneof = tmp20.oneofKind !== localName;
              tmp19 = tmp20;
            }
            if (oneof) {
              let obj = { oneofKind: localName };
              arg1[value.oneof] = obj;
              tmp19 = obj;
            }
            let kind = value.kind;
            if ("scalar" !== kind) {
              if ("enum" !== kind) {
                if ("message" === kind) {
                  if (repeat) {
                    let arr = tmp19[localName];
                    let TResult = value.T();
                    let arr5 = arr.push(TResult.internalBinaryRead(len, len.uint32(), readUnknownField));
                  } else {
                    let TResult1 = value.T();
                    tmp19[localName] = TResult1.internalBinaryRead(
                      len,
                      len.uint32(),
                      readUnknownField,
                      tmp19[localName],
                    );
                  }
                } else if ("map" === kind) {
                  [, tmp19[localName][tmp2Result[0]]] = self.mapEntry(value, len, readUnknownField);
                }
              }
            }
            if ("enum" == value.kind) {
              T = ScalarType.ScalarType.INT32;
            } else {
              T = value.T;
            }
            if ("scalar" == value.kind) {
              L = value.L;
            }
            if (repeat) {
              let arr2 = tmp19[localName];
              if (tmp5 == UnknownFieldHandler.WireType.LengthDelimited) {
                if (T != ScalarType.ScalarType.STRING) {
                  if (T != ScalarType.ScalarType.BYTES) {
                    let sum = len.uint32() + len.pos;
                    if (len.pos < sum) {
                      do {
                        let arr6 = arr2.push(self.scalar(len, T, L));
                        pos = len.pos;
                      } while (pos < sum);
                    }
                  }
                }
              }
              let arr7 = arr2.push(self.scalar(len, T, L));
            } else {
              tmp19[localName] = self.scalar(len, T, L);
            }
          } else {
            let onRead = readUnknownField.readUnknownField;
            if ("throw" == onRead) {
              break;
            } else {
              let skipResult = len.skip(tmp5);
              if (false !== onRead) {
                if (true === onRead) {
                  onRead = UnknownFieldHandler.UnknownFieldHandler.onRead;
                }
                let onReadResult = onRead(self.info.typeName, arg1, tmp4, tmp5, skipResult);
              }
            }
          }
        }
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const error = new Error("Unknown field " + tmp4 + " (wire type " + tmp5 + ") for " + self.info.typeName);
        throw error;
      }
    },
  },
  {
    key: "mapEntry",
    value: function mapEntry(K, pos, arg2) {
      let tmp2;
      let tmp3;
      let tmp8;
      let tmp9;
      const self = this;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let tmp5;
      while (pos.pos < sum) {
        let tmp18;
        let scalarResult;
        let tmp7 = _slicedToArray(pos.tag(), 2);
        [tmp8, tmp9] = tmp7;
        if (1 === tmp8) {
          let str1;
          if (K.K == ScalarType.ScalarType.BOOL) {
            let str5 = pos.bool();
            str1 = str5.toString();
          } else {
            str1 = self.scalar(pos, K.K, ScalarType.LongType.STRING);
          }
          tmp18 = str1;
          scalarResult = tmp2;
        } else if (2 === tmp8) {
          let kind = K.V.kind;
          if ("scalar" === kind) {
            scalarResult = self.scalar(pos, K.V.T, K.V.L);
            tmp18 = tmp3;
          } else if ("enum" === kind) {
            scalarResult = pos.int32();
            tmp18 = tmp3;
          } else {
            scalarResult = tmp2;
            tmp18 = tmp3;
            if ("message" === kind) {
              let V2 = K.V;
              let TResult = V2.T();
              scalarResult = TResult.internalBinaryRead(pos, pos.uint32(), arg2);
              tmp18 = tmp3;
            }
          }
        } else {
          let tmp12 = globalThis;
          let _Error = Error;
          let _HermesInternal = HermesInternal;
          let str = "#";
          let str2 = ") in map entry for ";
          let str3 = " (wire type ";
          let str4 = "Unknown field ";
          let self2 = this;
          let self3 = this;
          let error = new Error(
            "Unknown field " + tmp8 + " (wire type " + tmp9 + ") in map entry for " + self.info.typeName + "#" + K.name,
          );
          throw error;
        }
        tmp2 = scalarResult;
        tmp3 = tmp18;
        tmp4 = scalarResult;
        tmp5 = tmp18;
      }
      if (undefined === tmp5) {
        const obj = reflectionScalarDefault;
        const str6 = obj.reflectionScalarDefault(K.K);
        let str7 = str6;
        if (K.K == ScalarType.ScalarType.BOOL) {
          str7 = str6.toString();
        }
        tmp5 = str7;
      }
      let num = tmp4;
      if (undefined === tmp4) {
        const kind2 = K.V.kind;
        if ("scalar" === kind2) {
          const obj3 = reflectionScalarDefault;
          num = obj3.reflectionScalarDefault(K.V.T, K.V.L);
        } else if ("enum" === kind2) {
          num = 0;
        } else {
          num = tmp4;
          if ("message" === kind2) {
            const V = K.V;
            const TResult1 = V.T();
            num = TResult1.create();
          }
        }
      }
      const items = [tmp5, num];
      return items;
    },
  },
  {
    key: "scalar",
    value: function scalar(int32, arg1, STRING) {
      if (ScalarType.ScalarType.INT32 === arg1) {
        return int32.int32();
      } else if (ScalarType.ScalarType.STRING === arg1) {
        return int32.string();
      } else if (ScalarType.ScalarType.BOOL === arg1) {
        return int32.bool();
      } else if (ScalarType.ScalarType.DOUBLE === arg1) {
        return int32.double();
      } else if (ScalarType.ScalarType.FLOAT === arg1) {
        return int32.float();
      } else if (ScalarType.ScalarType.INT64 === arg1) {
        const tmpResult = reflectionLongConvert;
        return tmpResult.reflectionLongConvert(int32.int64(), STRING);
      } else if (ScalarType.ScalarType.UINT64 === arg1) {
        const tmpResult5 = reflectionLongConvert;
        return tmpResult5.reflectionLongConvert(int32.uint64(), STRING);
      } else if (ScalarType.ScalarType.FIXED64 === arg1) {
        const tmpResult6 = reflectionLongConvert;
        return tmpResult6.reflectionLongConvert(int32.fixed64(), STRING);
      } else if (ScalarType.ScalarType.FIXED32 === arg1) {
        return int32.fixed32();
      } else if (ScalarType.ScalarType.BYTES === arg1) {
        return int32.bytes();
      } else if (ScalarType.ScalarType.UINT32 === arg1) {
        return int32.uint32();
      } else if (ScalarType.ScalarType.SFIXED32 === arg1) {
        return int32.sfixed32();
      } else if (ScalarType.ScalarType.SFIXED64 === arg1) {
        const tmpResult7 = reflectionLongConvert;
        return tmpResult7.reflectionLongConvert(int32.sfixed64(), STRING);
      } else if (ScalarType.ScalarType.SINT32 === arg1) {
        return int32.sint32();
      } else if (ScalarType.ScalarType.SINT64 === arg1) {
        const tmpResult8 = reflectionLongConvert;
        return tmpResult8.reflectionLongConvert(int32.sint64(), STRING);
      }
    },
  },
];
const ReflectionBinaryReader_export = _createClass(ReflectionBinaryReader, items);

export { ReflectionBinaryReader_export as ReflectionBinaryReader };
