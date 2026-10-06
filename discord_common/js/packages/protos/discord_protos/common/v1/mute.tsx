// === Module 13509: mute ===

// Module 13509 (mute)
import _mod1198 from "module_1198" /* 1198 */;
import timestamp from "timestamp" /* 1227 */;
import wrappers from "wrappers" /* 1228 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let internalBinaryWrite, internalBinaryWrite2;

function T() {
  return timestamp.Timestamp;
}
const T2 = function T() {
  return wrappers.Int32Value;
};
const MessageType = _mod1198.MessageType;
class MuteNotificationSettings$Type extends MessageType {
  constructor() {
    const items = [, ];
    const obj = { no: 1, name: "end_time", kind: "message", T };
    items[0] = obj;
    items[1] = { no: 2, name: "selected_time_window", kind: "message", T: T2 };
    const tmp2 = new tmp("discord_protos.common.v1.MuteNotificationSettings", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = {};
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
          let Timestamp = timestamp.Timestamp;
          obj.endTime = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.endTime);
        } else if (2 === tmp5) {
          let Int32Value = wrappers.Int32Value;
          obj.selectedTimeWindow = Int32Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.selectedTimeWindow);
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
  internalBinaryWrite(endTime, tag, writeUnknownFields) {
    if (endTime.endTime) {
      const Timestamp = timestamp.Timestamp;
      internalBinaryWrite = Timestamp.internalBinaryWrite;
      endTime = endTime.endTime;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(endTime, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (endTime.selectedTimeWindow) {
      const Int32Value = wrappers.Int32Value;
      internalBinaryWrite2 = Int32Value.internalBinaryWrite;
      const selectedTimeWindow = endTime.selectedTimeWindow;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(selectedTimeWindow, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, endTime, tag);
    }
    return tag;
  }
}
const prototype = MuteNotificationSettings$Type.prototype;
let obj = { no: 1, name: "end_time", kind: "message", T };
let items = [obj, { no: 2, name: "selected_time_window", kind: "message", T: T2 }];
const prototype1 = new prototype("discord_protos.common.v1.MuteNotificationSettings", items, tmp, MuteNotificationSettings$Type, prototype, items, require);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/common/v1/mute.tsx");

export const MuteNotificationSettings = prototype1;