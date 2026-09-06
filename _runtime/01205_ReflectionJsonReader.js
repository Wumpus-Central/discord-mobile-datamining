// _runtime/01205_ReflectionJsonReader.js
import _slicedToArray from "metro/00032__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

const ReflectionJsonReader = require;
class ReflectionJsonReader {
  constructor(arg0) {
    tmp = closure_3(this, ReflectionJsonReader);
    this.info = global;
    return;
  }
}
const entry = {
  key: "prepare",
  value: function prepare() {
    const self = this;
    if (undefined === this.fMap) {
      self.fMap = {};
      let fields = self.info.fields;
      if (null === fields) {
        fields = [];
      }
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
      if (!arg0) {
        const typeofJsonValueResult = ReflectionJsonReader(1189).typeofJsonValue(PbLong);
        let str = "number";
        let tmp5 = "number" != typeofJsonValueResult;
        if (tmp5) {
          tmp5 = "boolean" != typeofJsonValueResult;
        }
        str = typeofJsonValueResult;
        if (!tmp5) {
          str = PbLong.toString();
        }
        const self = this;
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Cannot parse JSON " + str + " for " + this.info.typeName + "#" + arg1);
        throw error;
      }
    },
  },
  {
    key: "read",
    value: function read(arg0, arg1, ignoreUnknownFields) {
      const self = this;
      this.prepare();
      const items = [];
      const entries = Object.entries(arg0);
      while (tmp3 !== undefined) {
        let tmp6 = _slicedToArray(tmp4, 2);
        [tmp7, tmp9] = tmp6;
        let tmp10 = self.fMap[tmp7];
        let obj = tmp10;
        if (tmp10) {
          let localName = obj.localName;
          if (obj.oneof) {
            if (items.includes(obj.oneof)) {
              let _Error2 = Error;
              let _HermesInternal2 = HermesInternal;
              let str4 = " are present in JSON.";
              let str5 = '" of ';
              let str6 = 'Multiple members of the oneof group "';
              let tmp99 = new.target;
              let tmp100 = new.target;
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
              obj = { oneofKind: null };
              obj.oneofKind = localName;
              arg1[obj.oneof] = obj;
              let tmp17 = obj;
            }
          } else {
            tmp17 = arg1;
          }
          if ("map" == obj.kind) {
            if (null === tmp9) {
              continue;
            } else {
              let obj6 = ReflectionJsonReader(1189);
              let assertResult = self.assert(obj6.isJsonObject(tmp9), obj.name, tmp9);
              let tmp124 = tmp17[localName];
              let _Object = Object;
              let entries1 = Object.entries(tmp9);
              for (const item10165 of entries1) {
                let tmp64 = _slicedToArray(item10165, 2);
                let tmp65 = tmp64[1];
                let tmp66 = tmp65;
                let assertResult1 = self.assert(null !== tmp65, obj.name + " map value", null);
                let internalJsonReadResult;
                let kind3 = obj.V.kind;
                if ("message" === kind3) {
                  let V2 = obj.V;
                  let TResult = V2.T();
                  internalJsonReadResult = TResult.internalJsonRead(tmp66, arg2);
                } else if ("enum" === kind3) {
                  let V = obj.V;
                  let enumResult = self.enum(V.T(), tmp66, obj.name, arg2.ignoreUnknownFields);
                  internalJsonReadResult = enumResult;
                  continue;
                } else if ("scalar" === kind3) {
                  internalJsonReadResult = self.scalar(tmp66, obj.V.T, obj.V.L, obj.name);
                }
                let assertResult2 = self.assert(undefined !== internalJsonReadResult, obj.name + " map value", tmp66);
                let first = tmp64[0];
                if (obj.K == ReflectionJsonReader(1201).ScalarType.BOOL) {
                  let tmp86 = "true" == first;
                  if (!tmp86) {
                    let tmp88 = "false" != first;
                    if (tmp88) {
                      tmp88 = first;
                    }
                    tmp86 = tmp88;
                  }
                  first = tmp86;
                }
                let str3 = self.scalar(first, obj.K, ReflectionJsonReader(1201).LongType.STRING, obj.name);
                let str = str3.toString();
                tmp124[str] = internalJsonReadResult;
                continue;
              }
            }
          } else if (obj.repeat) {
            if (null === tmp9) {
              continue;
            } else {
              let _Array = Array;
              let assertResult3 = self.assert(Array.isArray(tmp9), obj.name, tmp9);
              let arr2 = tmp17[localName];
              for (const item10121 of tmp9) {
                let assertResult4 = self.assert(null !== item10121, obj.name, null);
                let internalJsonReadResult1;
                let kind2 = obj.kind;
                if ("message" === kind2) {
                  let TResult1 = obj.T();
                  internalJsonReadResult1 = TResult1.internalJsonRead(item10121, arg2);
                } else if ("enum" === kind2) {
                  let enumResult1 = self.enum(obj.T(), item10121, obj.name, arg2.ignoreUnknownFields);
                  internalJsonReadResult1 = enumResult1;
                  continue;
                } else if ("scalar" === kind2) {
                  internalJsonReadResult1 = self.scalar(item10121, obj.T, obj.L, obj.name);
                }
                let assertResult5 = self.assert(undefined !== internalJsonReadResult1, obj.name, tmp9);
                arr = arr2.push(internalJsonReadResult1);
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
              tmp17[localName] = TResult2.internalJsonRead(tmp9, ignoreUnknownFields, tmp17[localName]);
            } else if ("enum" === kind) {
              let enumResult2 = self.enum(obj.T(), tmp9, obj.name, ignoreUnknownFields.ignoreUnknownFields);
              if (false === enumResult2) {
                continue;
              } else {
                tmp17[localName] = tmp28;
              }
            } else if ("scalar" === kind) {
              tmp17[localName] = self.scalar(tmp9, obj.T, obj.L, obj.name);
            }
          }
          continue;
        } else if (!ignoreUnknownFields.ignoreUnknownFields) {
          let _Error = Error;
          let _HermesInternal = HermesInternal;
          str = " from JSON format. JSON key: ";
          let str2 = "Found unknown field while reading ";
          let tmp12 = new.target;
          let tmp13 = new.target;
          let error1 = new Error(
            "Found unknown field while reading " + self.info.typeName + " from JSON format. JSON key: " + tmp8,
          );
          throw error1;
        }
        continue;
      }
      tmp3 = entries[Symbol.iterator]();
    },
  },
  {
    key: "enum",
    value: function _enum(arg0, str, arg2, arg3) {
      const self = this;
      if ("google.protobuf.NullValue" == arg0[0]) {
        const _HermesInternal = HermesInternal;
        ReflectionJsonReader(1197).assert(
          null === " only accepts null.",
          "Unable to parse field " + self.info.typeName + "#" + arg2 + ", enum " + arg0[0] + " only accepts null.",
        );
        const obj = ReflectionJsonReader(1197);
      }
      if (null === str) {
        return 0;
      } else if ("number" === typeof str) {
        const _Number = Number;
        const _HermesInternal4 = HermesInternal;
        const obj4 = ReflectionJsonReader(1197);
        obj4.assert(
          Number.isInteger(str),
          "Unable to parse field " +
            self.info.typeName +
            "#" +
            arg2 +
            ", enum can only be integral number, got " +
            str +
            ".",
        );
        return str;
      } else if ("string" === tmp31) {
        let tmp13 = arg0[2];
        if (tmp13) {
          tmp13 = str.substring(0, arg0[2].length) === arg0[2];
        }
        let substr = str;
        if (tmp13) {
          substr = str.substring(arg0[2].length);
        }
        let tmp16 = undefined !== tmp15;
        if (!tmp16) {
          tmp16 = !arg3;
        }
        if (tmp16) {
          const _HermesInternal3 = HermesInternal;
          ReflectionJsonReader(1197).assert(
            typeof tmp15 === "number",
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
          const obj3 = ReflectionJsonReader(1197);
        }
        return tmp16;
      } else {
        const _HermesInternal2 = HermesInternal;
        ReflectionJsonReader(1197).assert(
          false,
          "Unable to parse field " + self.info.typeName + "#" + arg2 + ", cannot parse enum value from " + tmp31 + '".',
        );
        const obj2 = ReflectionJsonReader(1197);
      }
    },
  },
  {
    key: "scalar",
    value: function scalar(flag, arg1, STRING, arg3) {
      try {
        if (ReflectionJsonReader(1201).ScalarType.DOUBLE !== arg1) {
          if (ReflectionJsonReader(1201).ScalarType.FLOAT !== arg1) {
            if (ReflectionJsonReader(1201).ScalarType.INT32 !== arg1) {
              if (ReflectionJsonReader(1201).ScalarType.FIXED32 !== arg1) {
                if (ReflectionJsonReader(1201).ScalarType.SFIXED32 !== arg1) {
                  if (ReflectionJsonReader(1201).ScalarType.SINT32 !== arg1) {
                    if (ReflectionJsonReader(1201).ScalarType.UINT32 !== arg1) {
                      if (ReflectionJsonReader(1201).ScalarType.INT64 !== arg1) {
                        if (ReflectionJsonReader(1201).ScalarType.SFIXED64 !== arg1) {
                          if (ReflectionJsonReader(1201).ScalarType.SINT64 !== arg1) {
                            if (ReflectionJsonReader(1201).ScalarType.FIXED64 !== arg1) {
                              if (ReflectionJsonReader(1201).ScalarType.UINT64 !== arg1) {
                                if (ReflectionJsonReader(1201).ScalarType.BOOL === arg1) {
                                  if (null === flag) {
                                    return false;
                                  } else if (typeof flag === "boolean") {
                                    return flag;
                                  }
                                } else if (ReflectionJsonReader(1201).ScalarType.STRING === arg1) {
                                  if (null === flag) {
                                    return "";
                                  } else if (typeof flag !== "string") {
                                    let str = "extra whitespace";
                                  } else {
                                    try {
                                      const _encodeURIComponent = encodeURIComponent;
                                      encodeURIComponent(flag);
                                      return flag;
                                    } catch (err) {}
                                  }
                                } else if (ReflectionJsonReader(1201).ScalarType.BYTES === arg1) {
                                  if (null !== flag) {
                                    if ("" !== flag) {
                                      if (typeof flag === "string") {
                                        let tmp3Result = ReflectionJsonReader(1190);
                                        return tmp3Result.base64decode(flag);
                                      }
                                    }
                                  }
                                  const _Uint8Array = Uint8Array;
                                  const uint8Array = new Uint8Array(0);
                                  return uint8Array;
                                }
                              }
                            }
                            if (null === flag) {
                              tmp3Result = ReflectionJsonReader(1206);
                              return tmp3Result.reflectionLongConvert(ReflectionJsonReader(1195).PbULong.ZERO, STRING);
                            } else {
                              const PbULong = ReflectionJsonReader(1195).PbULong;
                              return ReflectionJsonReader(1206).reflectionLongConvert(PbULong.from(flag), STRING);
                            }
                          }
                        }
                      }
                      if (null === flag) {
                        return ReflectionJsonReader(1206).reflectionLongConvert(
                          ReflectionJsonReader(1195).PbLong.ZERO,
                          STRING,
                        );
                      } else {
                        const PbLong = ReflectionJsonReader(1195).PbLong;
                        return ReflectionJsonReader(1206).reflectionLongConvert(PbLong.from(flag), STRING);
                      }
                    }
                  }
                }
              }
            }
            if (null === flag) {
              return 0;
            } else {
              if (typeof flag === "number") {
                let NumberResult = flag;
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
                if (arg1 == ReflectionJsonReader(1201).ScalarType.UINT32) {
                  ReflectionJsonReader(1197).assertUInt32(NumberResult);
                  const tmp3Result4 = ReflectionJsonReader(1197);
                } else {
                  ReflectionJsonReader(1197).assertInt32(NumberResult);
                  const tmp3Result5 = ReflectionJsonReader(1197);
                }
                return NumberResult;
              }
            }
          }
          let str4 = "";
          const self = this;
          if (str) {
            str4 = ` - ${str}`;
          }
          this.assert(false, arg3 + str4, flag);
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
              if (Number.isFinite(tmp26)) {
                if (arg1 == ReflectionJsonReader(1201).ScalarType.FLOAT) {
                  ReflectionJsonReader(1197).assertFloat32(tmp26);
                  const tmp3Result6 = ReflectionJsonReader(1197);
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

export const ReflectionJsonReader = _createClass(ReflectionJsonReader, items);
