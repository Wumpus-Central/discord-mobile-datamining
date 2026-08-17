// _runtime/01326_ReflectionJsonWriter.js
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const ReflectionJsonWriter = require;
class ReflectionJsonWriter {
  constructor(arg0) {
    tmp = closure_3(this, ReflectionJsonWriter);
    fields = global.fields;
    if (null === fields) {
      fields = [];
    }
    this.fields = fields;
    return;
  }
}
let items = [
  {
    key: "write",
    value: function write(arg0, useProtoFieldName) {
      const self = this;
      const obj = {};
      const iter = this.fields[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = nextResult;
        if (nextResult.oneof) {
          let tmp7 = nextResult;
          let tmp8 = arg0[tmp2.oneof];
          if (tmp8.oneofKind === tmp2.localName) {
            let tmp22 = nextResult;
            if ("scalar" == tmp2.kind) {
              let _Object = Object;
              let _Object2 = Object;
              let merged = Object.assign(Object.assign({}, useProtoFieldName), { emitDefaultValues: true });
            } else {
              let tmp10 = nextResult;
              merged = useProtoFieldName;
            }
            let tmp12 = nextResult;
            let tmp13 = tmp8;
            let fieldResult = self.field(tmp2, tmp9[tmp2.localName], merged);
            let tmp15 = fieldResult;
            let tmp16 = ReflectionJsonWriter;
            let tmp17 = dependencyMap;
            let obj2 = ReflectionJsonWriter(1316);
            let assertResult = obj2.assert(undefined !== fieldResult);
            let tmp19 = nextResult;
            let tmp20 = useProtoFieldName.useProtoFieldName ? tmp19.name : tmp19.jsonName;
            tmp19 = fieldResult;
            obj[tmp20] = fieldResult;
          }
        } else {
          let tmp3 = nextResult;
          let fieldResult1 = self.field(tmp2, arg0[tmp2.localName], useProtoFieldName);
          if (undefined !== fieldResult1) {
            let tmp21 = nextResult;
            let tmp6 = fieldResult1;
            obj[useProtoFieldName.useProtoFieldName ? tmp2.name : tmp2.jsonName] = tmp5;
          }
        }
        continue;
      }
      return obj;
    }
  },
  {
    key: "field",
    value: function field(kind, obj, enumAsInteger) {
      let length;
      let length2;
      const self = this;
      if ("map" == kind.kind) {
        let tmp49 = typeof obj === "object";
        if (typeof obj === "object") {
          let scalarResult = null;
          tmp49 = null !== obj;
        }
        ReflectionJsonWriter(1316).assert(tmp49);
        const kind3 = kind.V.kind;
        obj = {};
        if ("scalar" === kind3) {
          const _Object2 = Object;
          const entries = Object.entries(obj);
          const tmp95 = entries[Symbol.iterator]();
          while (tmp95 !== undefined) {
            let tmp99 = callback;
            scalarResult = callback(tmp97, 2);
            let str8 = 32;
            scalarResult = self;
            let flag5 = false;
            let flag6 = true;
            scalarResult = self.scalar(kind.V.T, 41, kind.name, false, true);
            scalarResult = ReflectionJsonWriter;
            scalarResult = ReflectionJsonWriter;
            scalarResult = dependencyMap;
            scalarResult = dependencyMap;
            let obj11 = ReflectionJsonWriter(1316);
            scalarResult = obj11.assert(undefined !== scalarResult);
            obj[str8.toString()] = scalarResult;
            continue;
          }
        } else if ("message" === kind3) {
          const V = kind.V;
          const TResult = V.T();
          const _Object = Object;
          const entries1 = Object.entries(obj);
          const tmp77 = entries1[Symbol.iterator]();
          while (tmp77 !== undefined) {
            let tmp81 = callback;
            let tmp82 = callback(tmp79, 2);
            let str7 = tmp82[0];
            let tmp83 = self;
            let tmp84 = TResult;
            let tmp85 = enumAsInteger;
            let messageResult = self.message(TResult, tmp82[1], kind.name, enumAsInteger);
            let tmp87 = ReflectionJsonWriter;
            let tmp88 = ReflectionJsonWriter;
            let tmp89 = dependencyMap;
            let tmp90 = dependencyMap;
            let obj10 = ReflectionJsonWriter(1316);
            let assertResult1 = obj10.assert(undefined !== messageResult);
            obj[str7.toString()] = messageResult;
            continue;
          }
        } else if ("enum" === kind3) {
          const V2 = kind.V;
          scalarResult = V2.T();
          scalarResult = globalThis;
          const _Object4 = Object;
          scalarResult = Object.entries(obj);
          scalarResult = scalarResult[Symbol.iterator]();
          while (scalarResult !== undefined) {
            let tmp54 = callback;
            let tmp55 = callback(tmp52, 2);
            [str6, tmp56] = tmp55;
            let tmp57 = tmp56;
            let tmp58 = ReflectionJsonWriter;
            let tmp59 = ReflectionJsonWriter;
            let tmp60 = dependencyMap;
            let tmp61 = dependencyMap;
            let obj8 = ReflectionJsonWriter(1316);
            let tmp62 = undefined === tmp56;
            if (!tmp62) {
              let tmp63 = tmp56;
              tmp62 = typeof tmp57 === "number";
            }
            let assertResult2 = obj8.assert(tmp62);
            let tmp65 = tmp56;
            let tmp66 = self;
            let tmp67 = scalarResult;
            let flag3 = false;
            let flag4 = true;
            let enumResult = self.enum(scalarResult, tmp57, kind.name, false, true, enumAsInteger.enumAsInteger);
            let tmp69 = tmp58;
            let tmp70 = tmp60;
            let tmp59Result = tmp59(1316);
            let assertResult3 = tmp59Result.assert(undefined !== enumResult);
            let tmp72 = str6;
            obj[str6.toString()] = enumResult;
            continue;
          }
        }
        let emitDefaultValues2 = enumAsInteger.emitDefaultValues;
        if (!emitDefaultValues2) {
          scalarResult = globalThis;
          const _Object3 = Object;
          emitDefaultValues2 = Object.keys(obj).length > 0;
        }
        if (emitDefaultValues2) {
          scalarResult = obj;
        }
        const obj6 = ReflectionJsonWriter(1316);
      } else if (kind.repeat) {
        obj = ReflectionJsonWriter(1316);
        const _Array = Array;
        obj.assert(Array.isArray(obj));
        const kind2 = kind.kind;
        const items = [];
        if ("scalar" === kind2) {
          let num4 = 0;
          if (0 < obj.length) {
            do {
              let tmp37 = self;
              let flag2 = true;
              let scalarResult1 = self.scalar(kind.T, obj[num4], kind.name, kind.opt, true);
              let tmp39 = ReflectionJsonWriter;
              let tmp40 = ReflectionJsonWriter;
              let tmp41 = dependencyMap;
              let tmp42 = dependencyMap;
              let obj5 = ReflectionJsonWriter(1316);
              let assertResult5 = obj5.assert(undefined !== scalarResult1);
              let arr = items.push(scalarResult1);
              num4 = num4 + 1;
              length2 = obj.length;
            } while (num4 < length2);
          }
        } else if ("enum" === kind2) {
          const TResult1 = kind.T();
          for (let num2 = 0; num2 < obj.length; num2 = num2 + 1) {
            let tmp23 = ReflectionJsonWriter;
            let tmp24 = ReflectionJsonWriter;
            let tmp25 = dependencyMap;
            let tmp26 = dependencyMap;
            let obj3 = ReflectionJsonWriter(1316);
            let tmp27 = undefined === obj[num2];
            let tmp28 = num2;
            if (!tmp27) {
              tmp27 = typeof obj[num2] === "number";
            }
            let assertResult6 = obj3.assert(tmp27);
            let tmp30 = self;
            let tmp31 = TResult1;
            let flag = true;
            let enumResult1 = self.enum(TResult1, obj[num2], kind.name, kind.opt, true, enumAsInteger.enumAsInteger);
            let tmp33 = tmp23;
            let tmp34 = tmp25;
            let tmp24Result = tmp24(1316);
            let assertResult7 = tmp24Result.assert(undefined !== enumResult1);
            arr = items.push(enumResult1);
          }
        } else if ("message" === kind2) {
          scalarResult = kind.T();
          let num = 0;
          if (0 < obj.length) {
            do {
              let tmp12 = self;
              let tmp13 = scalarResult;
              let tmp14 = enumAsInteger;
              let messageResult1 = self.message(scalarResult, obj[num], kind.name, enumAsInteger);
              let tmp16 = ReflectionJsonWriter;
              let tmp17 = ReflectionJsonWriter;
              let tmp18 = dependencyMap;
              let tmp19 = dependencyMap;
              let obj2 = ReflectionJsonWriter(1316);
              let assertResult8 = obj2.assert(undefined !== messageResult1);
              let arr1 = items.push(messageResult1);
              num = num + 1;
              length = obj.length;
            } while (num < length);
          }
        }
        let emitDefaultValues = enumAsInteger.emitDefaultValues;
        if (!emitDefaultValues) {
          emitDefaultValues = items.length > 0;
        }
        if (!emitDefaultValues) {
          emitDefaultValues = enumAsInteger.emitDefaultValues;
        }
        if (emitDefaultValues) {
          scalarResult = items;
        }
      } else {
        kind = kind.kind;
        if ("scalar" === kind) {
          scalarResult = self.scalar(kind.T, obj, kind.name, kind.opt, enumAsInteger.emitDefaultValues);
        } else if ("enum" === kind) {
          scalarResult = self.enum(kind.T(), obj, kind.name, kind.opt, enumAsInteger.emitDefaultValues, enumAsInteger.enumAsInteger);
        } else if ("message" === kind) {
          scalarResult = self;
          scalarResult = obj;
          scalarResult = enumAsInteger;
          scalarResult = self.message(kind.T(), obj, kind.name, enumAsInteger);
        }
      }
      return scalarResult;
    }
  },
  {
    key: "enum",
    value: function _enum(arg0, key10009) {
      let tmp = arg0;
      if ("google.protobuf.NullValue" == arg0[0]) {
        return null;
      } else if (undefined !== key10009) {
        ReflectionJsonWriter(1316).assert(typeof key10009 === "number");
        const obj2 = ReflectionJsonWriter(1316);
        const _Number = Number;
        ReflectionJsonWriter(1316).assert(Number.isInteger(key10009));
        let tmp12 = key10009;
        if (!arg5) {
          tmp12 = key10009;
          if (obj4.hasOwnProperty(key10009)) {
            if (tmp[2]) {
              tmp = tmp[1][key10009];
              let sum = tmp[2] + tmp;
            } else {
              sum = tmp[1][key10009];
            }
          }
          obj4 = tmp[1];
        }
        return tmp12;
      } else {
        ReflectionJsonWriter(1316).assert(arg3);
        const obj = ReflectionJsonWriter(1316);
      }
    }
  },
  {
    key: "message",
    value: function message(internalJsonWrite, arg1, arg2, emitDefaultValues) {
      if (undefined === arg1) {
        let tmp3;
        if (emitDefaultValues.emitDefaultValues) {
          tmp3 = null;
        }
        let internalJsonWriteResult = tmp3;
      } else {
        internalJsonWriteResult = internalJsonWrite.internalJsonWrite(arg1, emitDefaultValues);
      }
      return internalJsonWriteResult;
    }
  },
  {
    key: "scalar",
    value: function scalar(arg0, NumberResult) {
      let tmp = NumberResult;
      if (undefined !== NumberResult) {
        let tmp5 = arg4;
        if (!arg4) {
          tmp5 = arg3;
        }
        if (ReflectionJsonWriter(1320).ScalarType.INT32 !== arg0) {
          if (tmp7(1320).ScalarType.SFIXED32 !== arg0) {
            if (tmp7(1320).ScalarType.SINT32 !== arg0) {
              if (tmp7(1320).ScalarType.FIXED32 !== arg0) {
                if (tmp7(1320).ScalarType.UINT32 !== arg0) {
                  if (tmp7(1320).ScalarType.FLOAT === arg0) {
                    let tmp7Result = tmp7(1316);
                    tmp7Result.assertFloat32(tmp);
                  } else if (tmp7(1320).ScalarType.DOUBLE !== arg0) {
                    if (tmp7(1320).ScalarType.STRING === arg0) {
                      if ("" === tmp) {
                        let str5;
                        if (tmp5) {
                          str5 = "";
                        }
                        let tmp19 = str5;
                      } else {
                        tmp7Result = tmp7(1316);
                        tmp7Result.assert(typeof tmp === "string");
                        tmp19 = tmp;
                      }
                      return tmp19;
                    } else if (tmp7(1320).ScalarType.BOOL === arg0) {
                      if (false === tmp) {
                        let tmp16 = !tmp5;
                        const tmp17 = !tmp5;
                      } else {
                        tmp7(1316).assert(typeof tmp === "boolean");
                        tmp16 = tmp;
                        const tmp7Result1 = tmp7(1316);
                      }
                      return tmp16;
                    } else {
                      if (tmp7(1320).ScalarType.UINT64 !== arg0) {
                        if (tmp7(1320).ScalarType.FIXED64 !== arg0) {
                          if (tmp7(1320).ScalarType.INT64 !== arg0) {
                            if (tmp7(1320).ScalarType.SFIXED64 !== arg0) {
                              if (tmp7(1320).ScalarType.SINT64 !== arg0) {
                                if (tmp7(1320).ScalarType.BYTES === arg0) {
                                  const _Uint8Array = Uint8Array;
                                  tmp7(1316).assert(tmp instanceof Uint8Array);
                                  if (tmp.byteLength) {
                                    let str = tmp7(1309).base64encode(tmp);
                                    const tmp7Result3 = tmp7(1309);
                                  } else if (tmp5) {
                                    str = "";
                                  }
                                  return str;
                                }
                              }
                            }
                          }
                          let tmp11 = typeof tmp === "number";
                          if (typeof tmp !== "number") {
                            tmp11 = typeof tmp === "string";
                          }
                          if (!tmp11) {
                            tmp11 = typeof tmp === "bigint";
                          }
                          tmp7(1316).assert(tmp11);
                          const PbLong = tmp7(1314).PbLong;
                          const str2 = PbLong.from(tmp);
                          return str2.toString();
                        }
                      }
                      let tmp13 = typeof tmp === "number";
                      if (typeof tmp !== "number") {
                        tmp13 = typeof tmp === "string";
                      }
                      if (!tmp13) {
                        tmp13 = typeof tmp === "bigint";
                      }
                      tmp7(1316).assert(tmp13);
                      const PbULong = tmp7(1314).PbULong;
                      const str3 = PbULong.from(tmp);
                      return str3.toString();
                    }
                  }
                  if (0 === tmp) {
                    let num2;
                    if (tmp5) {
                      num2 = 0;
                    }
                    let str6 = num2;
                  } else {
                    tmp7(1316).assert(typeof tmp === "number");
                    const _Number = Number;
                    str6 = "NaN";
                    if (!Number.isNaN(tmp)) {
                      const _Number2 = Number;
                      let str7 = "Infinity";
                      if (tmp !== Number.POSITIVE_INFINITY) {
                        const _Number3 = Number;
                        let str8 = "-Infinity";
                        if (tmp !== Number.NEGATIVE_INFINITY) {
                          str8 = tmp;
                        }
                        str7 = str8;
                      }
                      str6 = str7;
                    }
                    const tmp7Result6 = tmp7(1316);
                  }
                  return str6;
                }
              }
              if (0 === tmp) {
                let num4;
                if (tmp5) {
                  num4 = 0;
                }
                let tmp24 = num4;
              } else {
                tmp7(1316).assertUInt32(tmp);
                tmp24 = tmp;
                const tmp7Result7 = tmp7(1316);
              }
              return tmp24;
            }
          }
        }
        if (0 === tmp) {
          let num6;
          if (tmp5) {
            num6 = 0;
          }
          tmp = num6;
        } else {
          tmp7(1316).assertInt32(tmp);
          const tmp7Result8 = tmp7(1316);
        }
        return tmp;
      } else {
        ReflectionJsonWriter(1316).assert(arg3);
        const obj = ReflectionJsonWriter(1316);
      }
    }
  }
];

export const ReflectionJsonWriter = _createClass(ReflectionJsonWriter, items);