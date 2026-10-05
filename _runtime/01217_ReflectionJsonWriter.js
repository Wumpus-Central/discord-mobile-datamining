// === Module 1217: ReflectionJsonWriter ===

// Module 1217 (ReflectionJsonWriter)
import base64decode from "base64decode" /* 1200 */;
import PbULong2 from "PbULong" /* 1205 */;
import assert4 from "assert" /* 1207 */;
import ScalarType from "ScalarType" /* 1211 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

class ReflectionJsonWriter {
  constructor(self) {
    _classCallCheck(this, ReflectionJsonWriter);
    const fields = self.fields ?? [];
    this.fields = fields;
  }
}
const entry = {
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
          let merged;
          if ("scalar" == tmp2.kind) {
            let _Object = Object;
            let _Object2 = Object;
            merged = Object.assign(Object.assign({}, useProtoFieldName), { emitDefaultValues: true });
          } else {
            merged = useProtoFieldName;
          }
          let fieldResult = self.field(tmp2, tmp9[tmp2.localName], merged);
          let tmp15 = fieldResult;
          let obj2 = assert4;
          let assertResult = obj2.assert(undefined !== fieldResult);
          obj[useProtoFieldName.useProtoFieldName ? tmp2.name : tmp2.jsonName] = tmp15;
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
};
let items = [
  entry,
  {
    key: "field",
    value: function field(kind, message, enumAsInteger) {
      let length;
      let length2;
      let scalarResult2;
      let str6;
      let tmp58;
      const self = this;
      if ("map" == kind.kind) {
        let tmp51 = typeof message === "object";
        const assert2 = assert4.assert;
        assert4;
        if (typeof message === "object") {
          tmp51 = null !== message;
        }
        assert2(tmp51);
        const kind3 = kind.V.kind;
        const obj3 = {};
        if ("scalar" === kind3) {
          const _Object2 = Object;
          const entries = Object.entries(message);
          const tmp98 = entries[Symbol.iterator]();
          while (tmp98 !== undefined) {
            let tmp103 = _slicedToArray(tmp100, 2);
            let str8 = tmp103[0];
            let flag5 = false;
            let flag6 = true;
            let scalarResult = self.scalar(kind.V.T, tmp103[1], kind.name, false, true);
            let obj8 = assert4;
            let assertResult = obj8.assert(undefined !== scalarResult);
            obj3[str8.toString()] = scalarResult;
            continue;
          }
        } else if ("message" === kind3) {
          const V = kind.V;
          const TResult = V.T();
          const _Object = Object;
          const entries1 = Object.entries(message);
          const tmp80 = entries1[Symbol.iterator]();
          while (tmp80 !== undefined) {
            let tmp85 = _slicedToArray(tmp82, 2);
            let str7 = tmp85[0];
            let messageResult = self.message(TResult, tmp85[1], kind.name, enumAsInteger);
            let obj7 = assert4;
            let assertResult1 = obj7.assert(undefined !== messageResult);
            obj3[str7.toString()] = messageResult;
            continue;
          }
        } else if ("enum" === kind3) {
          const V2 = kind.V;
          const TResult1 = V2.T();
          const _Object4 = Object;
          const entries2 = Object.entries(message);
          const tmp121 = entries2[Symbol.iterator]();
          while (tmp121 !== undefined) {
            let tmp57 = _slicedToArray(tmp54, 2);
            [str6, tmp58] = tmp57;
            let tmp64 = assert4;
            let tmp65 = undefined === tmp58;
            let assert3 = tmp64.assert;
            if (!tmp65) {
              tmp65 = typeof tmp58 === "number";
            }
            let assert3Result = assert3(tmp65);
            let flag3 = false;
            let flag4 = true;
            let enumResult = self.enum(TResult1, tmp58, kind.name, false, true, enumAsInteger.enumAsInteger);
            let tmp61Result = assert4;
            let assertResult2 = tmp61Result.assert(undefined !== enumResult);
            obj3[str6.toString()] = enumResult;
            continue;
          }
        }
        let emitDefaultValues2 = enumAsInteger.emitDefaultValues;
        if (!emitDefaultValues2) {
          const _Object3 = Object;
          emitDefaultValues2 = Object.keys(obj3).length > 0;
        }
        if (emitDefaultValues2) {
          scalarResult2 = obj3;
        }
      } else if (kind.repeat) {
        const _Array = Array;
        const obj = assert4;
        obj.assert(Array.isArray(message));
        const kind2 = kind.kind;
        const items = [];
        if ("scalar" === kind2) {
          let num4 = 0;
          if (0 < message.length) {
            do {
              let flag2 = true;
              let scalarResult1 = self.scalar(kind.T, message[num4], kind.name, kind.opt, true);
              let obj4 = assert4;
              let assertResult4 = obj4.assert(undefined !== scalarResult1);
              let arr = items.push(scalarResult1);
              num4 = num4 + 1;
              length2 = message.length;
            } while (num4 < length2);
          }
        } else if ("enum" === kind2) {
          let num2;
          const TResult2 = kind.T();
          for (let num2 = 0; num2 < message.length; num2 = num2 + 1) {
            let tmp27 = assert4;
            let tmp28 = undefined === message[num2];
            let assert = tmp27.assert;
            if (!tmp28) {
              tmp28 = typeof message[num2] === "number";
            }
            let assertResult5 = assert(tmp28);
            let flag = true;
            let enumResult1 = self.enum(TResult2, message[num2], kind.name, kind.opt, true, enumAsInteger.enumAsInteger);
            let tmp24Result = assert4;
            let assertResult6 = tmp24Result.assert(undefined !== enumResult1);
            let arr4 = items.push(enumResult1);
          }
        } else if ("message" === kind2) {
          const TResult3 = kind.T();
          let num = 0;
          if (0 < message.length) {
            do {
              let messageResult1 = self.message(TResult3, message[num], kind.name, enumAsInteger);
              let obj2 = assert4;
              let assertResult7 = obj2.assert(undefined !== messageResult1);
              let arr5 = items.push(messageResult1);
              num = num + 1;
              length = message.length;
            } while (num < length);
          }
        }
        const emitDefaultValues = enumAsInteger.emitDefaultValues || items.length > 0 || enumAsInteger.emitDefaultValues;
        if (emitDefaultValues) {
          scalarResult2 = items;
        }
      } else {
        kind = kind.kind;
        if ("scalar" === kind) {
          scalarResult2 = self.scalar(kind.T, message, kind.name, kind.opt, enumAsInteger.emitDefaultValues);
        } else if ("enum" === kind) {
          scalarResult2 = self.enum(kind.T(), message, kind.name, kind.opt, enumAsInteger.emitDefaultValues, enumAsInteger.enumAsInteger);
        } else if ("message" === kind) {
          scalarResult2 = self.message(kind.T(), message, kind.name, enumAsInteger);
        }
      }
      return scalarResult2;
    }
  },
  {
    key: "enum",
    value: function _enum(arg0, keys, arg2, opt, arg4, arg5) {
      if ("google.protobuf.NullValue" == arg0[0]) {
        return null;
      } else if (undefined !== keys) {
        const obj2 = assert4;
        obj2.assert(typeof keys === "number");
        const _Number = Number;
        const obj3 = assert4;
        obj3.assert(Number.isInteger(keys));
        let tmp11 = keys;
        if (!arg5) {
          tmp11 = keys;
          const obj4 = arg0[1];
          if (obj4.hasOwnProperty(keys)) {
            let sum;
            if (arg0[2]) {
              sum = arg0[2] + arg0[1][keys];
            } else {
              sum = arg0[1][keys];
            }
            tmp11 = sum;
          }
        }
        return tmp11;
      } else {
        const obj = assert4;
        obj.assert(opt);
      }
    }
  },
  {
    key: "message",
    value: function message(internalJsonWrite, arg1, arg2, emitDefaultValues) {
      let internalJsonWriteResult;
      if (undefined === arg1) {
        let tmp3;
        if (emitDefaultValues.emitDefaultValues) {
          tmp3 = null;
        }
        internalJsonWriteResult = tmp3;
      } else {
        internalJsonWriteResult = internalJsonWrite.internalJsonWrite(arg1, emitDefaultValues);
      }
      return internalJsonWriteResult;
    }
  },
  {
    key: "scalar",
    value: function scalar(arg0, NumberResult, arg2, opt, arg4) {
      let tmp = NumberResult;
      if (undefined !== NumberResult) {
        if (ScalarType.ScalarType.INT32 !== arg0) {
          if (ScalarType.ScalarType.SFIXED32 !== arg0) {
            if (ScalarType.ScalarType.SINT32 !== arg0) {
              let tmp26;
              if (ScalarType.ScalarType.FIXED32 !== arg0) {
                if (ScalarType.ScalarType.UINT32 !== arg0) {
                  let str6;
                  if (ScalarType.ScalarType.FLOAT === arg0) {
                    const tmp7Result = assert4;
                    tmp7Result.assertFloat32(tmp);
                  } else if (ScalarType.ScalarType.DOUBLE !== arg0) {
                    if (ScalarType.ScalarType.STRING === arg0) {
                      let tmp21;
                      if ("" === tmp) {
                        let str5;
                        if (arg4 || opt) {
                          str5 = "";
                        }
                        tmp21 = str5;
                      } else {
                        const tmp7Result10 = assert4;
                        tmp7Result10.assert(typeof tmp === "string");
                        tmp21 = tmp;
                      }
                      return tmp21;
                    } else if (ScalarType.ScalarType.BOOL === arg0) {
                      let tmp18;
                      if (false === tmp) {
                        tmp18 = !(arg4 || opt) && undefined;
                      } else {
                        const tmp7Result11 = assert4;
                        tmp7Result11.assert(typeof tmp === "boolean");
                        tmp18 = tmp;
                      }
                      return tmp18;
                    } else {
                      if (ScalarType.ScalarType.UINT64 !== arg0) {
                        if (ScalarType.ScalarType.FIXED64 !== arg0) {
                          if (ScalarType.ScalarType.INT64 !== arg0) {
                            if (ScalarType.ScalarType.SFIXED64 !== arg0) {
                              if (ScalarType.ScalarType.SINT64 !== arg0) {
                                if (ScalarType.ScalarType.BYTES === arg0) {
                                  let str;
                                  const _Uint8Array = Uint8Array;
                                  const tmp7Result12 = assert4;
                                  tmp7Result12.assert(tmp instanceof Uint8Array);
                                  if (tmp.byteLength) {
                                    const tmp7Result13 = base64decode;
                                    str = tmp7Result13.base64encode(tmp);
                                  } else if (arg4 || opt) {
                                    str = "";
                                  }
                                  return str;
                                }
                              }
                            }
                          }
                          let tmp12 = typeof tmp === "number";
                          const assert = assert4.assert;
                          assert4;
                          if (typeof tmp !== "number") {
                            tmp12 = typeof tmp === "string";
                          }
                          if (!tmp12) {
                            tmp12 = typeof tmp === "bigint";
                          }
                          assert(tmp12);
                          const PbLong = PbULong2.PbLong;
                          const str2 = PbLong.from(tmp);
                          return str2.toString();
                        }
                      }
                      let tmp15 = typeof tmp === "number";
                      const assert2 = assert4.assert;
                      assert4;
                      if (typeof tmp !== "number") {
                        tmp15 = typeof tmp === "string";
                      }
                      if (!tmp15) {
                        tmp15 = typeof tmp === "bigint";
                      }
                      assert2(tmp15);
                      const PbULong = PbULong2.PbULong;
                      const str3 = PbULong.from(tmp);
                      return str3.toString();
                    }
                  }
                  if (0 === tmp) {
                    let num2;
                    if (arg4 || opt) {
                      num2 = 0;
                    }
                    str6 = num2;
                  } else {
                    const tmp7Result16 = assert4;
                    tmp7Result16.assert(typeof tmp === "number");
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
                  }
                  return str6;
                }
              }
              if (0 === tmp) {
                let num4;
                if (arg4 || opt) {
                  num4 = 0;
                }
                tmp26 = num4;
              } else {
                const tmp7Result17 = assert4;
                tmp7Result17.assertUInt32(tmp);
                tmp26 = tmp;
              }
              return tmp26;
            }
          }
        }
        if (0 === tmp) {
          let num6;
          if (arg4 || opt) {
            num6 = 0;
          }
          tmp = num6;
        } else {
          const tmp7Result18 = assert4;
          tmp7Result18.assertInt32(tmp);
        }
        return tmp;
      } else {
        const obj = assert4;
        obj.assert(opt);
      }
    }
  }
];
const ReflectionJsonWriter_export = _createClass(ReflectionJsonWriter, items);

export { ReflectionJsonWriter_export as ReflectionJsonWriter };