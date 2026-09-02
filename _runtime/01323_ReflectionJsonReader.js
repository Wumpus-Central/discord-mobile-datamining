// === Module 1323: ReflectionJsonReader ===

// Module 1323 (ReflectionJsonReader)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const ReflectionJsonReader = require;
class ReflectionJsonReader {
  constructor(arg0) {
    tmp = closure_3(this, ReflectionJsonReader);
    this.info = global;
    return;
  }
}
let items = [
  {
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
    }
  },
  {
    key: "assert",
    value: function assert(arg0, arg1, arg2) {
      if (!arg0) {
        const typeofJsonValueResult = ReflectionJsonReader(1307).typeofJsonValue(arg2);
        let str = "number";
        let tmp5 = "number" != typeofJsonValueResult;
        if (tmp5) {
          tmp5 = "boolean" != typeofJsonValueResult;
        }
        str = typeofJsonValueResult;
        if (!tmp5) {
          str = arg2.toString();
        }
        const self = this;
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        error = new Error("Cannot parse JSON " + str + " for " + this.info.typeName + "#" + arg1);
        throw error;
      }
    }
  },
  {
    key: "read",
    value: function read(arg0, arg1, ignoreUnknownFields) {
      const self = this;
      let prepareResult = this.prepare();
      const items = [];
      const entries = Object.entries(arg0);
      while (tmp3 !== undefined) {
        let tmp5 = callback;
        let tmp6 = callback(tmp4, 2);
        [tmp7, tmp9] = tmp6;
        let tmp10 = self.fMap[tmp7];
        let obj = tmp10;
        if (tmp10) {
          let tmp16 = tmp10;
          let localName = obj.localName;
          if (obj.oneof) {
            let tmp18 = tmp10;
            if (items.includes(obj.oneof)) {
              let _Error2 = Error;
              let _HermesInternal2 = HermesInternal;
              let str4 = " are present in JSON.";
              let str5 = "\" of ";
              let str6 = "Multiple members of the oneof group \"";
              let tmp99 = new.target;
              prepareResult = new.target;
              prepareResult = new Error("Multiple members of the oneof group \"" + tmp10.oneof + "\" of " + self.info.typeName + " are present in JSON.");
              throw prepareResult;
            } else {
              let tmp19 = tmp10;
              let arr = items.push(obj.oneof);
              obj = { oneofKind: null };
              let tmp21 = localName;
              obj[0] = localName;
              arg1[obj.oneof] = obj;
              let tmp17 = obj;
            }
          } else {
            tmp17 = arg1;
          }
          let tmp22 = tmp10;
          if ("map" == obj.kind) {
            let tmp61 = tmp9;
            if (null === tmp9) {
              continue;
            } else {
              prepareResult = ReflectionJsonReader;
              prepareResult = ReflectionJsonReader;
              prepareResult = dependencyMap;
              prepareResult = dependencyMap;
              let obj6 = ReflectionJsonReader(1307);
              prepareResult = tmp9;
              prepareResult = tmp10;
              prepareResult = self.assert(obj6.isJsonObject(tmp9), obj.name, tmp9);
              prepareResult = tmp17;
              prepareResult = localName;
              prepareResult = tmp17[localName];
              let _Object = Object;
              prepareResult = Object.entries(tmp9);
              let tmp62 = prepareResult;
              for (const item10165 of prepareResult) {
                let tmp63 = callback;
                let tmp64 = callback(item10165, 2);
                let tmp65 = tmp64[1];
                let tmp66 = tmp65;
                let tmp67 = tmp10;
                let assertResult = self.assert(null !== tmp65, obj.name + " map value", null);
                let internalJsonReadResult;
                let kind3 = obj.V.kind;
                if ("message" === kind3) {
                  let tmp74 = tmp10;
                  let V2 = obj.V;
                  let TResult = V2.T();
                  let tmp75 = tmp65;
                  internalJsonReadResult = TResult.internalJsonRead(tmp66, arg2);
                } else if ("enum" === kind3) {
                  let tmp70 = tmp10;
                  let V = obj.V;
                  let tmp71 = tmp65;
                  let tmp72 = self;
                  let enumResult = self.enum(V.T(), tmp66, obj.name, arg2.ignoreUnknownFields);
                  internalJsonReadResult = enumResult;
                  continue;
                } else if ("scalar" === kind3) {
                  prepareResult = tmp65;
                  prepareResult = tmp10;
                  prepareResult = self;
                  internalJsonReadResult = self.scalar(tmp66, obj.V.T, obj.V.L, obj.name);
                }
                let tmp76 = internalJsonReadResult;
                let tmp77 = tmp10;
                let tmp78 = tmp65;
                let assertResult1 = self.assert(undefined !== internalJsonReadResult, obj.name + " map value", tmp66);
                let first = tmp64[0];
                let tmp81 = ReflectionJsonReader;
                let tmp82 = ReflectionJsonReader;
                let tmp83 = dependencyMap;
                let tmp84 = dependencyMap;
                if (obj.K == ReflectionJsonReader(1319).ScalarType.BOOL) {
                  let tmp85 = first;
                  let tmp86 = "true" == first;
                  if (!tmp86) {
                    let tmp87 = first;
                    let tmp88 = "false" != first;
                    if (tmp88) {
                      tmp88 = first;
                    }
                    tmp86 = tmp88;
                  }
                  first = tmp86;
                }
                let tmp89 = prepareResult;
                let tmp90 = first;
                let tmp91 = tmp10;
                let tmp92 = tmp81;
                let tmp93 = tmp83;
                let tmp94 = self;
                let tmp95 = first;
                let str3 = self.scalar(first, obj.K, tmp82(1319).LongType.STRING, obj.name);
                let str = str3.toString();
                let tmp97 = str;
                let tmp98 = internalJsonReadResult;
                prepareResult[str] = internalJsonReadResult;
                continue;
              }
            }
          } else {
            prepareResult = tmp10;
            if (obj.repeat) {
              let tmp40 = tmp9;
              if (null === tmp9) {
                continue;
              } else {
                let _Array = Array;
                prepareResult = tmp9;
                prepareResult = tmp10;
                prepareResult = self.assert(Array.isArray(tmp9), obj.name, tmp9);
                prepareResult = tmp17;
                prepareResult = localName;
                let arr2 = tmp17[localName];
                prepareResult = tmp9;
                let tmp41 = prepareResult;
                for (const item10121 of tmp9) {
                  let tmp42 = item10121;
                  let tmp43 = tmp10;
                  let assertResult2 = self.assert(null !== item10121, obj.name, null);
                  let internalJsonReadResult1;
                  let kind2 = obj.kind;
                  if ("message" === kind2) {
                    let tmp53 = tmp10;
                    let TResult1 = obj.T();
                    let tmp54 = item10121;
                    internalJsonReadResult1 = TResult1.internalJsonRead(tmp42, arg2);
                  } else if ("enum" === kind2) {
                    let tmp49 = tmp10;
                    let tmp50 = item10121;
                    let tmp51 = self;
                    let enumResult1 = self.enum(obj.T(), tmp42, obj.name, arg2.ignoreUnknownFields);
                    internalJsonReadResult1 = enumResult1;
                    continue;
                  } else if ("scalar" === kind2) {
                    let tmp46 = item10121;
                    let tmp47 = tmp10;
                    let tmp48 = self;
                    internalJsonReadResult1 = self.scalar(tmp42, obj.T, obj.L, obj.name);
                  }
                  let tmp55 = internalJsonReadResult1;
                  let tmp56 = tmp10;
                  let tmp57 = tmp9;
                  let assertResult3 = self.assert(undefined !== internalJsonReadResult1, obj.name, tmp9);
                  let tmp59 = arr2;
                  arr = arr2.push(internalJsonReadResult1);
                  continue;
                }
              }
            } else {
              let tmp23 = tmp10;
              let kind = obj.kind;
              if ("message" === kind) {
                let tmp32 = tmp9;
                if (null === tmp9) {
                  let tmp33 = tmp10;
                  if ("google.protobuf.Value" != obj.T().typeName) {
                    let tmp38 = tmp10;
                    let assertResult4 = self.assert(undefined === obj.oneof, `${obj.name} (oneof member)`, null);
                    continue;
                  }
                }
                let tmp34 = tmp17;
                let tmp35 = localName;
                let tmp36 = tmp10;
                let TResult2 = obj.T();
                let tmp37 = tmp9;
                tmp17[localName] = TResult2.internalJsonRead(tmp9, ignoreUnknownFields, tmp17[localName]);
              } else if ("enum" === kind) {
                let tmp24 = tmp10;
                let tmp25 = tmp9;
                let tmp26 = self;
                let enumResult2 = self.enum(obj.T(), tmp9, obj.name, ignoreUnknownFields.ignoreUnknownFields);
                if (false === enumResult2) {
                  continue;
                } else {
                  let tmp29 = tmp17;
                  let tmp30 = localName;
                  let tmp31 = enumResult2;
                  tmp17[localName] = tmp28;
                }
              } else if ("scalar" === kind) {
                prepareResult = tmp17;
                prepareResult = localName;
                prepareResult = tmp9;
                prepareResult = tmp10;
                prepareResult = self;
                tmp17[localName] = self.scalar(tmp9, obj.T, obj.L, obj.name);
              }
            }
          }
          continue;
        } else if (!ignoreUnknownFields.ignoreUnknownFields) {
          let _Error = Error;
          let tmp11 = tmp7;
          let _HermesInternal = HermesInternal;
          str = " from JSON format. JSON key: ";
          let str2 = "Found unknown field while reading ";
          let tmp12 = new.target;
          let tmp13 = new.target;
          error = new Error("Found unknown field while reading " + self.info.typeName + " from JSON format. JSON key: " + tmp8);
          let tmp15 = error;
          throw error;
        }
        continue;
      }
    }
  },
  {
    key: "enum",
    value: function _enum(arg0, str) {
      const self = this;
      if ("google.protobuf.NullValue" == arg0[0]) {
        const _HermesInternal = HermesInternal;
        ReflectionJsonReader(1315).assert(null === str, "Unable to parse field " + self.info.typeName + "#" + arg2 + ", enum " + arg0[0] + " only accepts null.");
        const obj = ReflectionJsonReader(1315);
      }
      if (null === str) {
        return 0;
      } else if ("number" === typeof str) {
        const _Number = Number;
        const _HermesInternal4 = HermesInternal;
        const obj4 = ReflectionJsonReader(1315);
        obj4.assert(Number.isInteger(str), "Unable to parse field " + self.info.typeName + "#" + arg2 + ", enum can only be integral number, got " + str + ".");
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
          ReflectionJsonReader(1315).assert(typeof tmp15 === "number", "Unable to parse field " + self.info.typeName + "#" + arg2 + ", enum " + arg0[0] + " has no value for \"" + str + "\".");
          tmp16 = tmp15;
          const obj3 = ReflectionJsonReader(1315);
        }
        return tmp16;
      } else {
        const _HermesInternal2 = HermesInternal;
        ReflectionJsonReader(1315).assert(false, "Unable to parse field " + self.info.typeName + "#" + arg2 + ", cannot parse enum value from " + tmp31 + "\".");
      }
    }
  },
  {
    key: "scalar",
    value: function scalar(flag, arg1, STRING) {
      try {
        if (ReflectionJsonReader(1319).ScalarType.DOUBLE !== arg1) {
          if (tmp3(1319).ScalarType.FLOAT !== arg1) {
            if (tmp3(1319).ScalarType.INT32 !== arg1) {
              if (tmp3(1319).ScalarType.FIXED32 !== arg1) {
                if (tmp3(1319).ScalarType.SFIXED32 !== arg1) {
                  if (tmp3(1319).ScalarType.SINT32 !== arg1) {
                    if (tmp3(1319).ScalarType.UINT32 !== arg1) {
                      if (tmp3(1319).ScalarType.INT64 !== arg1) {
                        if (tmp3(1319).ScalarType.SFIXED64 !== arg1) {
                          if (tmp3(1319).ScalarType.SINT64 !== arg1) {
                            if (tmp3(1319).ScalarType.FIXED64 !== arg1) {
                              if (tmp3(1319).ScalarType.UINT64 !== arg1) {
                                if (tmp3(1319).ScalarType.BOOL === arg1) {
                                  if (null === flag) {
                                    return false;
                                  } else if (typeof flag === "boolean") {
                                    return flag;
                                  }
                                } else if (tmp3(1319).ScalarType.STRING === arg1) {
                                  if (null === flag) {
                                    return "";
                                  } else if (typeof flag !== "string") {
                                    let str = "extra whitespace";
                                  } else {
                                    try {
                                      const _encodeURIComponent = encodeURIComponent;
                                      encodeURIComponent(flag);
                                      return flag;
                                    } catch (err) {
                                    }
                                  }
                                } else if (tmp3(1319).ScalarType.BYTES === arg1) {
                                  if (null !== flag) {
                                    if ("" !== flag) {
                                      if (typeof flag === "string") {
                                        let tmp3Result = tmp3(1308);
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
                              tmp3Result = tmp3(1324);
                              return tmp3Result.reflectionLongConvert(tmp3(1313).PbULong.ZERO, STRING);
                            } else {
                              const PbULong = tmp3(1313).PbULong;
                              return tmp3(1324).reflectionLongConvert(PbULong.from(flag), STRING);
                            }
                          }
                        }
                      }
                      if (null === flag) {
                        return tmp3(1324).reflectionLongConvert(tmp3(1313).PbLong.ZERO, STRING);
                      } else {
                        const PbLong = tmp3(1313).PbLong;
                        return tmp3(1324).reflectionLongConvert(PbLong.from(flag), STRING);
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
                if (arg1 == tmp3(1319).ScalarType.UINT32) {
                  tmp3(1315).assertUInt32(NumberResult);
                  const tmp3Result4 = tmp3(1315);
                } else {
                  tmp3(1315).assertInt32(NumberResult);
                  const tmp3Result5 = tmp3(1315);
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
                if (arg1 == tmp3(1319).ScalarType.FLOAT) {
                  tmp3(1315).assertFloat32(tmp26);
                  const tmp3Result6 = tmp3(1315);
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
    }
  }
];

export const ReflectionJsonReader = _createClass(ReflectionJsonReader, items);