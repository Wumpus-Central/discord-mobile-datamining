// _runtime/01215_ReflectionJsonReader.js
import typeofJsonValue from "01199_typeofJsonValue.js";
import base64decode from "01200_base64decode.js";
import PbULong2 from "01205_PbULong.js";
import assert2 from "01207_assert.js";
import ScalarType from "01211_ScalarType.js";
import reflectionLongConvert3 from "01216_reflectionLongConvert.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

class ReflectionJsonReader {
  constructor(self) {
    _classCallCheck(this, ReflectionJsonReader);
    this.info = self;
  }
}
const entry = {
  key: "prepare",
  value: function prepare() {
    const self = this;
    if (undefined === this.fMap) {
      self.fMap = {};
      const fields = self.info.fields ?? [];
      for (const item10010 of fields) {
        self.fMap[item10010.name] = item10010;
        self.fMap[item10010.jsonName] = item10010;
        self.fMap[item10010.localName] = item10010;
        continue;
      }
    }
  },
};
let items = [
  entry,
  {
    key: "assert",
    value: function assert(arg0, arg1, PbLong) {
      const tmp = arg0;
      if (!tmp) {
        const obj = typeofJsonValue;
        const typeofJsonValueResult = obj.typeofJsonValue(PbLong);
        let str1 = typeofJsonValueResult;
        const tmp6 = "number" != typeofJsonValueResult && "boolean" != typeofJsonValueResult;
        if (!tmp6) {
          str1 = PbLong.toString();
        }
        const self = this;
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const error = new Error("Cannot parse JSON " + str1 + " for " + this.info.typeName + "#" + arg1);
        throw error;
      }
    },
  },
  {
    key: "read",
    value: function read(arg0, arg1, ignoreUnknownFields) {
      let first;
      let tmp64;
      let tmp7;
      let tmp9;
      const self = this;
      this.prepare();
      const items = [];
      const entries = Object.entries(arg0);
      const tmp3 = entries[Symbol.iterator]();
      while (tmp3 !== undefined) {
        let tmp6 = _slicedToArray(tmp4, 2);
        [tmp7, tmp9] = tmp6;
        let tmp10 = self.fMap[tmp7];
        let obj = tmp10;
        if (obj) {
          let tmp15;
          let localName = obj.localName;
          if (obj.oneof) {
            if (items.includes(obj.oneof)) {
              let _Error2 = Error;
              let _HermesInternal2 = HermesInternal;
              let str4 = " are present in JSON.";
              let str5 = '" of ';
              let str6 = 'Multiple members of the oneof group "';
              let self4 = this;
              let self5 = this;
              let error = new Error(
                'Multiple members of the oneof group "' +
                  tmp10.oneof +
                  '" of ' +
                  self.info.typeName +
                  " are present in JSON.",
              );
              throw error;
            } else {
              let arr = items.push(obj.oneof);
              let obj2 = { oneofKind: localName };
              arg1[obj.oneof] = obj2;
              tmp15 = obj2;
            }
          } else {
            tmp15 = arg1;
          }
          if ("map" == obj.kind) {
            if (null === tmp9) {
              continue;
            } else {
              let assert = self.assert;
              let obj6 = typeofJsonValue;
              let assertResult = assert(obj6.isJsonObject(tmp9), obj.name, tmp9);
              let tmp121 = tmp15[localName];
              let _Object = Object;
              let entries1 = Object.entries(tmp9);
              for (const item10165 of entries1) {
                [first, tmp64] = item10165;
                let tmp65 = tmp64;
                let assertResult1 = self.assert(null !== tmp64, obj.name + " map value", null);
                let internalJsonReadResult;
                let kind3 = obj.V.kind;
                if ("message" === kind3) {
                  let V2 = obj.V;
                  let TResult = V2.T();
                  internalJsonReadResult = TResult.internalJsonRead(tmp65, ignoreUnknownFields);
                } else if ("enum" === kind3) {
                  let V = obj.V;
                  let enumResult = self.enum(V.T(), tmp65, obj.name, ignoreUnknownFields.ignoreUnknownFields);
                  internalJsonReadResult = enumResult;
                  continue;
                } else if ("scalar" === kind3) {
                  internalJsonReadResult = self.scalar(tmp65, obj.V.T, obj.V.L, obj.name);
                }
                let assertResult2 = self.assert(undefined !== internalJsonReadResult, obj.name + " map value", tmp65);
                let tmp79 = first;
                if (obj.K == ScalarType.ScalarType.BOOL) {
                  let tmp85 = "true" == tmp79;
                  if (!tmp85) {
                    let tmp87 = "false" != tmp79 && tmp79;
                    tmp85 = tmp87;
                  }
                  tmp79 = tmp85;
                }
                let str3 = self.scalar(tmp79, obj.K, ScalarType.LongType.STRING, obj.name);
                let str1 = str3.toString();
                tmp121[str1] = internalJsonReadResult;
                continue;
              }
            }
          } else if (obj.repeat) {
            if (null === tmp9) {
              continue;
            } else {
              let _Array = Array;
              let assertResult3 = self.assert(Array.isArray(tmp9), obj.name, tmp9);
              let arr2 = tmp15[localName];
              for (const item10121 of tmp9) {
                let assertResult4 = self.assert(null !== item10121, obj.name, null);
                let internalJsonReadResult1;
                let kind2 = obj.kind;
                if ("message" === kind2) {
                  let TResult1 = obj.T();
                  internalJsonReadResult1 = TResult1.internalJsonRead(item10121, ignoreUnknownFields);
                } else if ("enum" === kind2) {
                  let enumResult1 = self.enum(obj.T(), item10121, obj.name, ignoreUnknownFields.ignoreUnknownFields);
                  internalJsonReadResult1 = enumResult1;
                  continue;
                } else if ("scalar" === kind2) {
                  internalJsonReadResult1 = self.scalar(item10121, obj.T, obj.L, obj.name);
                }
                let assertResult5 = self.assert(undefined !== internalJsonReadResult1, obj.name, tmp9);
                let arr4 = arr2.push(internalJsonReadResult1);
                continue;
              }
            }
          } else {
            let kind = obj.kind;
            if ("message" === kind) {
              if (null === tmp9) {
                if ("google.protobuf.Value" != obj.T().typeName) {
                  let assertResult6 = self.assert(undefined === obj.oneof, `${obj.name} (oneof member)`, null);
                  continue;
                }
              }
              let TResult2 = obj.T();
              tmp15[localName] = TResult2.internalJsonRead(tmp9, ignoreUnknownFields, tmp15[localName]);
            } else if ("enum" === kind) {
              let enumResult2 = self.enum(obj.T(), tmp9, obj.name, ignoreUnknownFields.ignoreUnknownFields);
              if (false === enumResult2) {
                continue;
              } else {
                tmp15[localName] = tmp26;
              }
            } else if ("scalar" === kind) {
              tmp15[localName] = self.scalar(tmp9, obj.T, obj.L, obj.name);
            }
          }
          continue;
        } else if (!ignoreUnknownFields.ignoreUnknownFields) {
          let _Error = Error;
          let _HermesInternal = HermesInternal;
          let str = " from JSON format. JSON key: ";
          let str2 = "Found unknown field while reading ";
          let self2 = this;
          let self3 = this;
          let error1 = new Error(
            "Found unknown field while reading " + self.info.typeName + " from JSON format. JSON key: " + tmp8,
          );
          throw error1;
        }
        continue;
      }
    },
  },
  {
    key: "enum",
    value: function _enum(arg0, str, arg2, arg3) {
      const self = this;
      if ("google.protobuf.NullValue" == arg0[0]) {
        const _HermesInternal = HermesInternal;
        const obj = assert2;
        obj.assert(
          null === " only accepts null.",
          "Unable to parse field " + self.info.typeName + "#" + arg2 + ", enum " + arg0[0] + " only accepts null.",
        );
      }
      if (null === str) {
        return 0;
      } else if ("number" === typeof str) {
        const _Number = Number;
        const assert = assert2.assert;
        const _HermesInternal4 = HermesInternal;
        assert2;
        const isIntegerResult = Number.isInteger(str);
        assert(
          isIntegerResult,
          "Unable to parse field " +
            self.info.typeName +
            "#" +
            arg2 +
            ", enum can only be integral number, got " +
            str +
            ".",
        );
        return str;
      } else if ("string" === typeof str) {
        let substr = str;
        const tmp13 = arg0[2] && str.substring(0, arg0[2].length) === arg0[2];
        if (tmp13) {
          substr = str.substring(arg0[2].length);
        }
        let tmp16 = undefined !== tmp15 || !arg3;
        if (tmp16) {
          const _HermesInternal3 = HermesInternal;
          const obj3 = assert2;
          obj3.assert(
            typeof arg0[1][substr] === "number",
            "Unable to parse field " +
              self.info.typeName +
              "#" +
              arg2 +
              ", enum " +
              arg0[0] +
              ' has no value for "' +
              str +
              '".',
          );
          tmp16 = tmp15;
        }
        return tmp16;
      } else {
        const _HermesInternal2 = HermesInternal;
        const obj2 = assert2;
        obj2.assert(
          false,
          "Unable to parse field " +
            self.info.typeName +
            "#" +
            arg2 +
            ", cannot parse enum value from " +
            typeof str +
            '".',
        );
      }
    },
  },
  {
    key: "scalar",
    value: function scalar(flag, arg1, STRING, arg3) {
      let str;
      try {
        if (ScalarType.ScalarType.DOUBLE !== arg1) {
          if (ScalarType.ScalarType.FLOAT !== arg1) {
            if (ScalarType.ScalarType.INT32 !== arg1) {
              if (ScalarType.ScalarType.FIXED32 !== arg1) {
                if (ScalarType.ScalarType.SFIXED32 !== arg1) {
                  if (ScalarType.ScalarType.SINT32 !== arg1) {
                    if (ScalarType.ScalarType.UINT32 !== arg1) {
                      if (ScalarType.ScalarType.INT64 !== arg1) {
                        if (ScalarType.ScalarType.SFIXED64 !== arg1) {
                          if (ScalarType.ScalarType.SINT64 !== arg1) {
                            if (ScalarType.ScalarType.FIXED64 !== arg1) {
                              if (ScalarType.ScalarType.UINT64 !== arg1) {
                                if (ScalarType.ScalarType.BOOL === arg1) {
                                  if (null === flag) {
                                    return false;
                                  } else if (typeof flag === "boolean") {
                                    return flag;
                                  }
                                } else if (ScalarType.ScalarType.STRING === arg1) {
                                  if (null === flag) {
                                    return "";
                                  } else if (typeof flag !== "string") {
                                    str = "extra whitespace";
                                  } else {
                                    try {
                                      const _encodeURIComponent = encodeURIComponent;
                                      encodeURIComponent(flag);
                                      return flag;
                                    } catch (err) {}
                                  }
                                } else if (ScalarType.ScalarType.BYTES === arg1) {
                                  if (null !== flag) {
                                    if ("" !== flag) {
                                      if (typeof flag === "string") {
                                        const tmp3Result = base64decode;
                                        return tmp3Result.base64decode(flag);
                                      }
                                    }
                                  }
                                  const _Uint8Array = Uint8Array;
                                  const self = this;
                                  const self2 = this;
                                  const uint8Array = new Uint8Array(0);
                                  return uint8Array;
                                }
                              }
                            }
                            if (null === flag) {
                              const tmp3Result8 = reflectionLongConvert3;
                              return tmp3Result8.reflectionLongConvert(PbULong2.PbULong.ZERO, STRING);
                            } else {
                              const reflectionLongConvert = reflectionLongConvert3.reflectionLongConvert;
                              reflectionLongConvert3;
                              const PbULong = PbULong2.PbULong;
                              return reflectionLongConvert(PbULong.from(flag), STRING);
                            }
                          }
                        }
                      }
                      if (null === flag) {
                        const tmp3Result10 = reflectionLongConvert3;
                        return tmp3Result10.reflectionLongConvert(PbULong2.PbLong.ZERO, STRING);
                      } else {
                        const reflectionLongConvert2 = reflectionLongConvert3.reflectionLongConvert;
                        reflectionLongConvert3;
                        const PbLong = PbULong2.PbLong;
                        return reflectionLongConvert2(PbLong.from(flag), STRING);
                      }
                    }
                  }
                }
              }
            }
            if (null === flag) {
              return 0;
            } else {
              let NumberResult;
              if (typeof flag === "number") {
                NumberResult = flag;
              } else if ("" === flag) {
                str = "empty string";
              } else if (typeof flag === "string") {
                if (flag.trim().length !== flag.length) {
                  str = "extra whitespace";
                } else {
                  const _Number = Number;
                  NumberResult = Number(flag);
                }
              }
              if (undefined !== NumberResult) {
                if (arg1 == ScalarType.ScalarType.UINT32) {
                  const tmp3Result12 = assert2;
                  tmp3Result12.assertUInt32(NumberResult);
                } else {
                  const tmp3Result13 = assert2;
                  tmp3Result13.assertInt32(NumberResult);
                }
                return NumberResult;
              }
            }
          }
          let str4 = "";
          const self3 = this;
          const assert = this.assert;
          if (str) {
            str4 = ` - ${str}`;
          }
          assert(false, arg3 + str4, flag);
        }
        if (null === flag) {
          return 0;
        } else if ("NaN" === flag) {
          const _Number7 = Number;
          return Number.NaN;
        } else if ("Infinity" === flag) {
          const _Number6 = Number;
          return Number.POSITIVE_INFINITY;
        } else if ("-Infinity" === flag) {
          const _Number5 = Number;
          return Number.NEGATIVE_INFINITY;
        } else if ("" === flag) {
          str = "empty string";
        } else {
          if (typeof flag === "string") {
            if (flag.trim().length !== flag.length) {
              str = "extra whitespace";
            }
          }
          if (typeof flag === "string") {
            const _Number2 = Number;
            const NumberResult1 = Number(flag);
            const _Number3 = Number;
            if (Number.isNaN(NumberResult1)) {
              str = "not a number";
            } else {
              const _Number4 = Number;
              if (Number.isFinite(NumberResult1)) {
                if (arg1 == ScalarType.ScalarType.FLOAT) {
                  const tmp3Result14 = assert2;
                  tmp3Result14.assertFloat32(NumberResult1);
                }
                return NumberResult1;
              } else {
                str = "too large or small";
              }
            }
          }
        }
      } catch (tmp33) {
        str = tmp33.message;
      }
    },
  },
];
const ReflectionJsonReader_export = _createClass(ReflectionJsonReader, items);

export { ReflectionJsonReader_export as ReflectionJsonReader };
