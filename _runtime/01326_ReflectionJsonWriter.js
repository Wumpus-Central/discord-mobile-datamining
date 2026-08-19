// _runtime/01326_ReflectionJsonWriter.js
import _slicedToArray from "metro/00032__slicedToArray.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

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
          let tmp8 = arg0[tmp2.oneof];
          if (tmp8.oneofKind === tmp2.localName) {
            if ("scalar" == tmp2.kind) {
              let _Object = Object;
              let _Object2 = Object;
              let merged = Object.assign(Object.assign({}, useProtoFieldName), { emitDefaultValues: true });
            } else {
              merged = useProtoFieldName;
            }
            let fieldResult = self.field(tmp2, tmp9[tmp2.localName], merged);
            let obj2 = ReflectionJsonWriter(1316);
            let assertResult = obj2.assert(undefined !== fieldResult);
            let tmp19 = nextResult;
            let tmp20 = useProtoFieldName.useProtoFieldName ? tmp19.name : tmp19.jsonName;
            tmp19 = fieldResult;
            obj[tmp20] = fieldResult;
          }
        } else {
          let fieldResult1 = self.field(tmp2, arg0[tmp2.localName], useProtoFieldName);
          if (undefined !== fieldResult1) {
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
            let tmp100 = _slicedToArray(tmp97, 2);
            let str8 = tmp100[0];
            let flag5 = false;
            let flag6 = true;
            let scalarResult = self.scalar(kind.V.T, tmp100[1], kind.name, false, true);
            let obj11 = ReflectionJsonWriter(1316);
            let assertResult1 = obj11.assert(undefined !== scalarResult);
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
            let tmp82 = _slicedToArray(tmp79, 2);
            let str7 = tmp82[0];
            let messageResult = self.message(TResult, tmp82[1], kind.name, enumAsInteger);
            let obj10 = ReflectionJsonWriter(1316);
            let assertResult2 = obj10.assert(undefined !== messageResult);
            obj[str7.toString()] = messageResult;
            continue;
          }
        } else if ("enum" === kind3) {
          const V2 = kind.V;
          const TResult1 = V2.T();
          const _Object4 = Object;
          const entries2 = Object.entries(obj);
          const tmp118 = entries2[Symbol.iterator]();
          while (tmp118 !== undefined) {
            let tmp55 = _slicedToArray(tmp52, 2);
            [str6, tmp56] = tmp55;
            let obj8 = ReflectionJsonWriter(1316);
            let tmp62 = undefined === tmp56;
            if (!tmp62) {
              tmp62 = typeof tmp56 === "number";
            }
            let assertResult3 = obj8.assert(tmp62);
            let flag3 = false;
            let flag4 = true;
            let enumResult = self.enum(TResult1, tmp56, kind.name, false, true, enumAsInteger.enumAsInteger);
            let tmp59Result = ReflectionJsonWriter(1316);
            let assertResult4 = tmp59Result.assert(undefined !== enumResult);
            obj[str6.toString()] = enumResult;
            continue;
          }
        }
        let emitDefaultValues2 = enumAsInteger.emitDefaultValues;
        if (!emitDefaultValues2) {
          const _Object3 = Object;
          emitDefaultValues2 = Object.keys(obj).length > 0;
        }
        if (emitDefaultValues2) {
          let scalarResult2 = obj;
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
              let flag2 = true;
              let scalarResult1 = self.scalar(kind.T, obj[num4], kind.name, kind.opt, true);
              let obj5 = ReflectionJsonWriter(1316);
              let assertResult6 = obj5.assert(undefined !== scalarResult1);
              let arr = items.push(scalarResult1);
              num4 = num4 + 1;
              length2 = obj.length;
            } while (num4 < length2);
          }
        } else if ("enum" === kind2) {
          const TResult2 = kind.T();
          for (let num2 = 0; num2 < obj.length; num2 = num2 + 1) {
            let obj3 = ReflectionJsonWriter(1316);
            let tmp27 = undefined === obj[num2];
            if (!tmp27) {
              tmp27 = typeof obj[num2] === "number";
            }
            let assertResult7 = obj3.assert(tmp27);
            let flag = true;
            let enumResult1 = self.enum(TResult2, obj[num2], kind.name, kind.opt, true, enumAsInteger.enumAsInteger);
            let tmp24Result = ReflectionJsonWriter(1316);
            let assertResult8 = tmp24Result.assert(undefined !== enumResult1);
            arr = items.push(enumResult1);
          }
        } else if ("message" === kind2) {
          const TResult3 = kind.T();
          let num = 0;
          if (0 < obj.length) {
            do {
              let messageResult1 = self.message(TResult3, obj[num], kind.name, enumAsInteger);
              let obj2 = ReflectionJsonWriter(1316);
              let assertResult9 = obj2.assert(undefined !== messageResult1);
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
          scalarResult2 = items;
        }
      } else {
        kind = kind.kind;
        if ("scalar" === kind) {
          scalarResult2 = self.scalar(kind.T, obj, kind.name, kind.opt, enumAsInteger.emitDefaultValues);
        } else if ("enum" === kind) {
          scalarResult2 = self.enum(kind.T(), obj, kind.name, kind.opt, enumAsInteger.emitDefaultValues, enumAsInteger.enumAsInteger);
        } else if ("message" === kind) {
          scalarResult2 = self.message(kind.T(), obj, kind.name, enumAsInteger);
        }
      }
      return scalarResult2;
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
          if (ReflectionJsonWriter(1320).ScalarType.SFIXED32 !== arg0) {
            if (ReflectionJsonWriter(1320).ScalarType.SINT32 !== arg0) {
              if (ReflectionJsonWriter(1320).ScalarType.FIXED32 !== arg0) {
                if (ReflectionJsonWriter(1320).ScalarType.UINT32 !== arg0) {
                  if (ReflectionJsonWriter(1320).ScalarType.FLOAT === arg0) {
                    let tmp7Result = ReflectionJsonWriter(1316);
                    tmp7Result.assertFloat32(tmp);
                  } else if (ReflectionJsonWriter(1320).ScalarType.DOUBLE !== arg0) {
                    if (ReflectionJsonWriter(1320).ScalarType.STRING === arg0) {
                      if ("" === tmp) {
                        let str5;
                        if (tmp5) {
                          str5 = "";
                        }
                        let tmp19 = str5;
                      } else {
                        tmp7Result = ReflectionJsonWriter(1316);
                        tmp7Result.assert(typeof tmp === "string");
                        tmp19 = tmp;
                      }
                      return tmp19;
                    } else if (ReflectionJsonWriter(1320).ScalarType.BOOL === arg0) {
                      if (false === tmp) {
                        let tmp16 = !tmp5;
                      } else {
                        ReflectionJsonWriter(1316).assert(typeof tmp === "boolean");
                        tmp16 = tmp;
                        const tmp7Result1 = ReflectionJsonWriter(1316);
                      }
                      return tmp16;
                    } else {
                      if (ReflectionJsonWriter(1320).ScalarType.UINT64 !== arg0) {
                        if (ReflectionJsonWriter(1320).ScalarType.FIXED64 !== arg0) {
                          if (ReflectionJsonWriter(1320).ScalarType.INT64 !== arg0) {
                            if (ReflectionJsonWriter(1320).ScalarType.SFIXED64 !== arg0) {
                              if (ReflectionJsonWriter(1320).ScalarType.SINT64 !== arg0) {
                                if (ReflectionJsonWriter(1320).ScalarType.BYTES === arg0) {
                                  const _Uint8Array = Uint8Array;
                                  ReflectionJsonWriter(1316).assert(tmp instanceof Uint8Array);
                                  if (tmp.byteLength) {
                                    let str = ReflectionJsonWriter(1309).base64encode(tmp);
                                    const tmp7Result3 = ReflectionJsonWriter(1309);
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
                          ReflectionJsonWriter(1316).assert(tmp11);
                          const PbLong = ReflectionJsonWriter(1314).PbLong;
                          const tmp7Result4 = ReflectionJsonWriter(1316);
                          return PbLong.from(tmp).toString();
                        }
                      }
                      let tmp13 = typeof tmp === "number";
                      if (typeof tmp !== "number") {
                        tmp13 = typeof tmp === "string";
                      }
                      if (!tmp13) {
                        tmp13 = typeof tmp === "bigint";
                      }
                      ReflectionJsonWriter(1316).assert(tmp13);
                      const PbULong = ReflectionJsonWriter(1314).PbULong;
                      const tmp7Result5 = ReflectionJsonWriter(1316);
                      return PbULong.from(tmp).toString();
                    }
                  }
                  if (0 === tmp) {
                    let num2;
                    if (tmp5) {
                      num2 = 0;
                    }
                    let str6 = num2;
                  } else {
                    ReflectionJsonWriter(1316).assert(typeof tmp === "number");
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
                    const tmp7Result6 = ReflectionJsonWriter(1316);
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
                ReflectionJsonWriter(1316).assertUInt32(tmp);
                tmp24 = tmp;
                const tmp7Result7 = ReflectionJsonWriter(1316);
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
          ReflectionJsonWriter(1316).assertInt32(tmp);
          const tmp7Result8 = ReflectionJsonWriter(1316);
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