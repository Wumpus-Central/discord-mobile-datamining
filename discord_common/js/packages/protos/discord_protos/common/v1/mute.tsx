// === Module 13248: create ===

// Module 13248 (create)
import _mod1307 from "module_1307" /* 1307 */;
import now from "now" /* 1336 */;
import defineProperty from "defineProperty" /* 1337 */;
import closure_2 from "_slicedToArray" /* 32 */;
import { MessageType } from "module_1307" /* 1307 */;

require = arg1;
class MuteNotificationSettings$Type extends MessageType {
  constructor() {
    obj = {
      no: 1,
      name: "end_time",
      kind: "message",
      T() {
            return callback(1336).Timestamp;
          }
    };
    items = [, ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "selected_time_window",
      kind: "message",
      T() {
            return callback(1337).Int32Value;
          }
    };
    tmp = new tmp("discord_protos.common.v1.MuteNotificationSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
let prototype = MuteNotificationSettings$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = {};
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1307.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1307.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1307;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let Timestamp = now.Timestamp;
        let tmp29 = Timestamp;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.endTime = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.endTime);
      } else if (2 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let Int32Value = defineProperty.Int32Value;
        let tmp24 = Int32Value;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1307.UnknownFieldHandler.onRead;
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(endTime, tag, writeUnknownFields) {
  if (endTime.endTime) {
    const Timestamp = now.Timestamp;
    const tagResult = tag.tag(1, _mod1307.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(endTime.endTime, tag.tag(1, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(endTime.endTime, tag.tag(1, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (endTime.selectedTimeWindow) {
    const Int32Value = defineProperty.Int32Value;
    const tagResult1 = tag.tag(2, _mod1307.WireType.LengthDelimited);
    const joined1 = Int32Value.internalBinaryWrite(endTime.selectedTimeWindow, tag.tag(2, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = Int32Value.internalBinaryWrite(endTime.selectedTimeWindow, tag.tag(2, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1307.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, endTime, tag);
  }
  return tag;
};
let items = [
  {
    no: 1,
    name: "end_time",
    kind: "message",
    T() {
      return callback(1336).Timestamp;
    }
  },
  {
    no: 2,
    name: "selected_time_window",
    kind: "message",
    T() {
      return callback(1337).Int32Value;
    }
  }
];
prototype = new prototype("discord_protos.common.v1.MuteNotificationSettings", items, tmp, MuteNotificationSettings$Type, prototype, items, arg1);
// ThrowIfThisInitialized (0x7c)
let result = require("set").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/common/v1/mute.tsx");

export const MuteNotificationSettings = prototype;