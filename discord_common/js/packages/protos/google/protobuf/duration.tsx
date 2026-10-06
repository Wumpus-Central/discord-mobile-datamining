// === Module 7550: duration ===

// Module 7550 (duration)
import _mod1198 from "module_1198" /* 1198 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const MessageType = _mod1198.MessageType;
class Duration$Type extends MessageType {
  constructor() {
    const items = [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }];
    const tmp2 = new tmp("google.protobuf.Duration", items, new.target);
    return tmp2;
  }
  internalJsonWrite(seconds) {
    const PbLong = _mod1198.PbLong;
    const fromResult = PbLong.from(seconds.seconds);
    const toNumberResult = fromResult.toNumber();
    if (toNumberResult <= 315576000000) {
      if (toNumberResult >= -315576000000) {
        let text = str4.toString();
        seconds.seconds.toString();
        if (0 !== seconds.nanos) {
          const _Math = Math;
          const str5 = Math.abs(seconds.nanos);
          const str9 = str5.toString();
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
          text = `${tmp5}.${tmp2}`;
        }
        return text + "s";
      }
    }
    const error = new Error("Duration value out of range.");
    throw error;
  }
  internalJsonRead(str, arg1, arg2) {
    if (typeof str !== "string") {
      const _Error3 = Error;
      const self6 = this;
      const self7 = this;
      const obj = _mod1198;
      const error = new Error("Unable to parse Duration from JSON " + obj.typeofJsonValue(str) + ". Expected string.");
      throw error;
    } else {
      const match = str.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
      if (null === match) {
        const _Error2 = Error;
        const self4 = this;
        const self5 = this;
        const error1 = new Error("Unable to parse Duration from JSON string. Invalid format.");
        throw error1;
      } else {
        let obj2 = arg2;
        if (!obj2) {
          const self = this;
          obj2 = this.create();
        }
        const PbLong = _mod1198.PbLong;
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
        const self2 = this;
        const self3 = this;
        const error2 = new Error("Unable to parse Duration from JSON string. Value out of range.");
        throw error2;
      }
    }
  }
  create(arr) {
    const obj = { seconds: "0", nanos: 0 };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
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
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(seconds, tag, writeUnknownFields) {
    if ("0" !== seconds.seconds) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.int64(seconds.seconds);
    }
    if (0 !== seconds.nanos) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.Varint);
      tagResult1.int32(seconds.nanos);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, seconds, tag);
    }
    return tag;
  }
}
const prototype = Duration$Type.prototype;
let items = [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }];
const prototype1 = new prototype("google.protobuf.Duration", items, tmp, Duration$Type, prototype, items, require);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/google/protobuf/duration.tsx");

export const Duration = prototype1;