// discord_common/js/packages/protos/google/protobuf/timestamp.tsx
import _mod1198 from "../../../../../../_runtime/metro/01198__.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const MessageType = _mod1198.MessageType;
class Timestamp$Type extends MessageType {
  constructor() {
    const items = [
      { no: 1, name: "seconds", kind: "scalar", T: 3 },
      { no: 2, name: "nanos", kind: "scalar", T: 5 },
    ];
    const tmp2 = new tmp("google.protobuf.Timestamp", items, new.target);
    return tmp2;
  }
  now() {
    const obj = this.create();
    const timestamp = Date.now();
    const PbLong = _mod1198.PbLong;
    const str = PbLong.from(Math.floor(timestamp / 1000));
    obj.seconds = str.toString();
    obj.nanos = (timestamp % 1000) * 1000000;
    return obj;
  }
  toDate(seconds) {
    const PbLong = _mod1198.PbLong;
    const fromResult = PbLong.from(seconds.seconds);
    const result = 1000 * fromResult.toNumber();
    const date = new Date(result + Math.ceil(seconds.nanos / 1000000));
    return date;
  }
  fromDate(getTime) {
    const obj = this.create();
    const time = getTime.getTime();
    const PbLong = _mod1198.PbLong;
    const str = PbLong.from(Math.floor(time / 1000));
    obj.seconds = str.toString();
    obj.nanos = (time % 1000) * 1000000;
    return obj;
  }
  internalJsonWrite(seconds) {
    const PbLong = _mod1198.PbLong;
    const fromResult = PbLong.from(seconds.seconds);
    const result = 1000 * fromResult.toNumber();
    if (result >= Date.parse("0001-01-01T00:00:00Z")) {
      const _Date2 = Date;
      if (result <= Date.parse("9999-12-31T23:59:59Z")) {
        if (seconds.nanos < 0) {
          const _Error = Error;
          const self3 = this;
          const self4 = this;
          const error = new Error("Unable to encode invalid Timestamp to JSON. Nanos must not be negative.");
          throw error;
        } else {
          let str9 = "Z";
          if (seconds.nanos > 0) {
            let text;
            const str = seconds.nanos + 1000000000;
            const str2 = str.toString();
            const str3 = str2.substring(1);
            if ("000000" === str3.substring(3)) {
              text = `${"." + str3.substring(0, 3)}Z`;
            } else if ("000" === str3.substring(6)) {
              text = `${"." + str3.substring(0, 6)}Z`;
            } else {
              text = `${"." + str3}Z`;
            }
            str9 = text;
          }
          const _Date = Date;
          const self = this;
          const self2 = this;
          const date = new Date(result);
          const str10 = date.toISOString();
          return str10.replace(".000Z", str9);
        }
      }
    }
    const error1 = new Error(
      "Unable to encode Timestamp to JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.",
    );
    throw error1;
  }
  internalJsonRead(str, arg1, arg2) {
    if (typeof str !== "string") {
      const _Error3 = Error;
      const self8 = this;
      const self9 = this;
      const obj = _mod1198;
      const error = new Error("Unable to parse Timestamp from JSON " + obj.typeofJsonValue(str) + ".");
      throw error;
    } else {
      const match = str.match(
        /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/,
      );
      if (match) {
        let str5 = "Z";
        const _Date = Date;
        const text = `${tmp18[1]}-${tmp18[2]}-${tmp18[3]}T${tmp18[4]}:${tmp18[5]}:${tmp18[6]}`;
        if (match[8]) {
          str5 = match[8];
        }
        const parsed = parse(text + str5);
        const _Number = Number;
        if (Number.isNaN(parsed)) {
          const _Error2 = Error;
          const self6 = this;
          const self7 = this;
          const error1 = new Error("Unable to parse Timestamp from JSON. Invalid value.");
          throw error1;
        } else {
          const _Date2 = Date;
          if (parsed >= Date.parse("0001-01-01T00:00:00Z")) {
            const _Date3 = Date;
            if (parsed <= Date.parse("9999-12-31T23:59:59Z")) {
              let obj2 = arg2;
              if (!obj2) {
                const self3 = this;
                obj2 = this.create();
              }
              const PbLong = _mod1198.PbLong;
              const str7 = PbLong.from(parsed / 1000);
              obj2.seconds = str7.toString();
              obj2.nanos = 0;
              if (match[7]) {
                const _parseInt = parseInt;
                const repeat = "0".repeat;
                const text1 = `1${tmp18[7]}`;
                obj2.nanos = parseInt(`1${tmp18[7]}` + "0".repeat(9 - match[7].length)) - 1000000000;
              }
              return obj2;
            }
          }
          const _globalThis = globalThis;
          const self4 = this;
          const self5 = this;
          const error2 = new Error(
            "Unable to parse Timestamp from JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.",
          );
          throw error2;
        }
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error3 = new Error("Unable to parse Timestamp from JSON. Invalid format.");
        throw error3;
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
const prototype = Timestamp$Type.prototype;
let items = [
  { no: 1, name: "seconds", kind: "scalar", T: 3 },
  { no: 2, name: "nanos", kind: "scalar", T: 5 },
];
const prototype1 = new prototype("google.protobuf.Timestamp", items, tmp, Timestamp$Type, prototype, items, require);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/google/protobuf/timestamp.tsx");

export const Timestamp = prototype1;
