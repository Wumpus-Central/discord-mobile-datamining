// === Module 7896: duration ===

// Module 7896 (duration)
import _mod1188 from "module_1188" /* 1188 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const MessageType = fn(1188).MessageType;
class Duration$Type extends MessageType {
  constructor() {
    items = [, ];
    items[0] = { no: 1, name: "seconds", kind: "scalar", T: 3 };
    items[1] = { no: 2, name: "nanos", kind: "scalar", T: 5 };
    tmp = new tmp("google.protobuf.Duration", items, new.target);
    return tmp;
  }
}
let prototype = Duration$Type.prototype;
prototype["internalJsonWrite"] = function internalJsonWrite(seconds) {
  const PbLong = _mod1188.PbLong;
  const toNumberResult = PbLong.from(seconds.seconds).toNumber();
  if (toNumberResult <= 315576000000) {
    if (toNumberResult >= -315576000000) {
      let str = seconds.seconds.toString();
      if (0 === seconds.nanos) {
        return str + "s";
      } else {
        const _Math = Math;
        const str1 = Math.abs(seconds.nanos).toString();
        const repeat = "0".repeat;
        const str7 = "0".repeat(9 - str1.length) + str1;
        if ("000000" === str7.substring(3)) {
          let substr = str7.substring(0, 3);
        } else {
          str = "000";
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
    let obj = _mod1188;
    const error = new Error("Unable to parse Duration from JSON " + obj.typeofJsonValue(str) + ". Expected string.");
    throw error;
  } else {
    const match = str.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
    if (null === match) {
      const _Error2 = Error;
      const error1 = new Error("Unable to parse Duration from JSON string. Invalid format.");
      throw error1;
    } else {
      obj = arg2;
      if (!arg2) {
        const self = this;
        obj = this.create();
      }
      const PbLong = _mod1188.PbLong;
      str = PbLong.from(match[1]);
      if (str.toNumber() <= 315576000000) {
        if (str.toNumber() >= -315576000000) {
          obj.seconds = str.toString();
          if (typeof match[2] === "string") {
            const repeat = "0".repeat;
            const _parseInt = parseInt;
            obj.nanos = parseInt(match[2] + "0".repeat(9 - match[2].length));
            if (str.isNegative()) {
              obj.nanos = -obj.nanos;
            }
          }
          return obj;
        }
      }
      const _Error = Error;
      const error2 = new Error("Unable to parse Duration from JSON string. Value out of range.");
      throw error2;
    }
  }
};
prototype["create"] = function create(arr) {
  let obj = { seconds: "0", nanos: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
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
              onRead = _mod1188.UnknownFieldHandler.onRead;
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
    tag.tag(1, _mod1188.WireType.Varint).int64(seconds.seconds);
    const tagResult = tag.tag(1, _mod1188.WireType.Varint);
  }
  if (0 !== seconds.nanos) {
    tag.tag(2, _mod1188.WireType.Varint).int32(seconds.nanos);
    const tagResult1 = tag.tag(2, _mod1188.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, seconds, tag);
  }
  return tag;
};
let items = [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }];
prototype = new prototype("google.protobuf.Duration", items, tmp, Duration$Type, prototype, items, fn);
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/google/protobuf/duration.tsx");

export const Duration = prototype;