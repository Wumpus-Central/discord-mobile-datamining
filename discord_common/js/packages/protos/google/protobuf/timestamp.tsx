import _slicedToArray from "_slicedToArray";
import { MessageType } from "module_1307";

const require = arg1;
class Timestamp$Type extends MessageType {
  constructor() {
    items = [, ];
    items[0] = { no: 1, name: "seconds", kind: "scalar", T: 3 };
    items[1] = { no: 2, name: "nanos", kind: "scalar", T: 5 };
    tmp = new tmp("google.protobuf.Timestamp", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
let prototype = Timestamp$Type.prototype;
prototype["now"] = function now() {
  const obj = this.create();
  const timestamp = Date.now();
  const PbLong = require(1307).PbLong;
  obj.seconds = PbLong.from(Math.floor(timestamp / 1000)).toString();
  obj.nanos = timestamp % 1000 * 1000000;
  return obj;
};
prototype["toDate"] = function toDate(seconds) {
  const PbLong = require(1307).PbLong;
  const result = 1000 * PbLong.from(seconds.seconds).toNumber();
  const fromResult = PbLong.from(seconds.seconds);
  return new Date(result + Math.ceil(seconds.nanos / 1000000));
};
prototype["fromDate"] = function fromDate(date) {
  const obj = this.create();
  const time = date.getTime();
  const PbLong = require(1307).PbLong;
  obj.seconds = PbLong.from(Math.floor(time / 1000)).toString();
  obj.nanos = time % 1000 * 1000000;
  return obj;
};
prototype["internalJsonWrite"] = function internalJsonWrite(seconds) {
  const PbLong = require(1307).PbLong;
  const result = 1000 * PbLong.from(seconds.seconds).toNumber();
  if (result >= Date.parse("0001-01-01T00:00:00Z")) {
    const _Date2 = Date;
    if (result <= Date.parse("9999-12-31T23:59:59Z")) {
      if (seconds.nanos < 0) {
        const _Error = Error;
        const error = new Error("Unable to encode invalid Timestamp to JSON. Nanos must not be negative.");
        throw error;
      } else if (seconds.nanos <= 0) {
        const _Date = Date;
        const date = new Date(result);
        return date.toISOString().replace(".000Z", "Z");
      } else {
        let str3 = seconds.nanos + 1000000000.toString().substring(1);
        if ("000000" === str3.substring(3)) {
          str3 = str3.substring(0, 3);
          let text = `${"." + str3}Z`;
        } else if ("000" === str3.substring(6)) {
          text = `${"." + str3.substring(0, 6)}Z`;
        } else {
          text = `${"." + str3}Z`;
        }
        const str = seconds.nanos + 1000000000;
        const str2 = seconds.nanos + 1000000000.toString();
      }
    }
  }
  const error1 = new Error("Unable to encode Timestamp to JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.");
  throw error1;
};
prototype["internalJsonRead"] = function internalJsonRead(str) {
  if (typeof str === "__FORMATJS_LISTFORMAT_DATA__") {
    const _Error3 = Error;
    let obj = require(1307);
    const error = new Error("Unable to parse Timestamp from JSON " + obj.typeofJsonValue(str) + ".");
    throw error;
  } else {
    const match = str.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
    if (match) {
      let str5 = "Z";
      const text = `${tmp26[1]}-${tmp26[2]}-${tmp26[3]}T${tmp26[4]}:${tmp26[5]}:${tmp26[6]}`;
      if (match[8]) {
        str5 = match[8];
      }
      const parsed = Date.parse(text + str5);
      const _Number = Number;
      if (Number.isNaN(parsed)) {
        const _Error2 = Error;
        const error1 = new Error("Unable to parse Timestamp from JSON. Invalid value.");
        throw error1;
      } else {
        const _Date = Date;
        if (parsed >= Date.parse("0001-01-01T00:00:00Z")) {
          const _Date2 = Date;
          if (parsed <= Date.parse("9999-12-31T23:59:59Z")) {
            obj = arg2;
            if (!arg2) {
              const self = this;
              obj = this.create();
            }
            const PbLong = require(1307).PbLong;
            obj.seconds = PbLong.from(parsed / 1000).toString();
            obj.nanos = 0;
            if (match[7]) {
              const _parseInt = parseInt;
              const repeat = "0".repeat;
              const text1 = `1${tmp26[7]}`;
              obj.nanos = parseInt(`1${tmp26[7]}` + "0".repeat(9 - match[7].length)) - 1000000000;
            }
            return obj;
          }
        }
        const _globalThis = globalThis;
        const error2 = new Error("Unable to parse Timestamp from JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.");
        throw error2;
      }
    } else {
      const _Error = Error;
      const error3 = new Error("Unable to parse Timestamp from JSON. Invalid format.");
      throw error3;
    }
  }
};
prototype["create"] = function create(arr) {
  let obj = { seconds: "0", nanos: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, require(1307).MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = require(1307).reflectionMergePartial(this, obj, arr);
    const tmpResult = require(1307);
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = require(1307).UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
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
    tag.tag(1, require(1307).WireType.Varint).int64(seconds.seconds);
    const tagResult = tag.tag(1, require(1307).WireType.Varint);
  }
  if (0 !== seconds.nanos) {
    tag.tag(2, require(1307).WireType.Varint).int32(seconds.nanos);
    const tagResult1 = tag.tag(2, require(1307).WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = require(1307).UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, seconds, tag);
  }
  return tag;
};
let items = [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }];
prototype = new prototype("google.protobuf.Timestamp", items, tmp, Timestamp$Type, prototype, items, arg1);
// ThrowIfThisInitialized (0x7c)
let result = require("set").fileFinishedImporting("../discord_common/js/packages/protos/google/protobuf/timestamp.tsx");

export const Timestamp = prototype;