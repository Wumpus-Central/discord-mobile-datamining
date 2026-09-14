// === Module 8000: duration ===

// Module 8000 (duration)
import _mod1186 from "module_1186" /* 1186 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const MessageType = fn(1186).MessageType;
class Duration$Type extends MessageType {
  constructor() {
    items = [, ];
    items[0] = { no: 1, name: "seconds", kind: "scalar", T: 3 };
    items[1] = { no: 2, name: "nanos", kind: "scalar", T: 5 };
    tmp1 = new tmp("google.protobuf.Duration", items, new.target);
    return tmp1;
  }
}
const prototype = Duration$Type.prototype;
prototype["internalJsonWrite"] = function internalJsonWrite(seconds) {
  const PbLong = _mod1186.PbLong;
  const toNumberResult = PbLong.from(seconds.seconds).toNumber();
  if (toNumberResult <= 315576000000) {
    if (toNumberResult >= -315576000000) {
      const str1 = seconds.seconds.toString();
      if (0 === seconds.nanos) {
        return str1 + "s";
      } else {
        const _Math = Math;
        const str9 = Math.abs(seconds.nanos).toString();
        const repeat = "0".repeat;
        const str7 = "0".repeat(9 - str9.length) + str9;
        if ("000000" === str7.substring(3)) {
          let substr = str7.substring(0, 3);
        } else {
          substr = str7;
          if ("000" === str7.substring(6)) {
            substr = str7.substring(0, 6);
          }
        }
        const text = `${tmp5}.${tmp2}`;
        const str5 = Math.abs(seconds.nanos);
      }
    }
  }
  const error = new Error("Duration value out of range.");
  throw error;
};
prototype["internalJsonRead"] = function internalJsonRead(str, arg1, arg2) {
  if (typeof str !== "string") {
    const _Error3 = Error;
    const error = new Error("Unable to parse Duration from JSON " + _mod1186.typeofJsonValue(str) + ". Expected string.");
    throw error;
  } else {
    const match = str.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
    if (null === match) {
      const _Error2 = Error;
      const error1 = new Error("Unable to parse Duration from JSON string. Invalid format.");
      throw error1;
    } else {
      let obj2 = arg2;
      if (!arg2) {
        const self = this;
        obj2 = this.create();
      }
      const PbLong = _mod1186.PbLong;
      str = PbLong.from(match[1]);
      if (str.toNumber() <= 315576000000) {
        if (str.toNumber() >= -315576000000) {
          obj2.seconds = str.toString();
          if (typeof match[2] === "string") {
            const repeat = "0".repeat;
            const _parseInt = parseInt;
            obj2.nanos = parseInt(match[2] + "0".repeat(9 - match[2].length));
            if (str.isNegative()) {
              obj2.nanos = -obj2.nanos;
            }
          }
          return obj2;
        }
      }
      const _Error = Error;
      const error2 = new Error("Unable to parse Duration from JSON string. Value out of range.");
      throw error2;
    }
  }
};
prototype["create"] = function create(arr) {
  const obj = { seconds: "0", nanos: 0 };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1186.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1186.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1186;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp4 = _slicedToArray(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let str4 = pos.int64();
        obj.seconds = str4.toString();
      } else if (2 === tmp5) {
        obj.nanos = pos.int32();
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let tmp15 = globalThis;
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          let str = ") for ";
          let str2 = " (wire type ";
          let str3 = "Unknown field ";
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              onRead = _mod1186.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(seconds, tag, writeUnknownFields) {
  if ("0" !== seconds.seconds) {
    tag.tag(1, _mod1186.WireType.Varint).int64(seconds.seconds);
    const tagResult = tag.tag(1, _mod1186.WireType.Varint);
  }
  if (0 !== seconds.nanos) {
    tag.tag(2, _mod1186.WireType.Varint).int32(seconds.nanos);
    const tagResult1 = tag.tag(2, _mod1186.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1186.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, seconds, tag);
  }
  return tag;
};
let items = [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }];
const prototype1 = new prototype("google.protobuf.Duration", items, tmp, Duration$Type, prototype, items, fn);
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/google/protobuf/duration.tsx");

export const Duration = prototype1;