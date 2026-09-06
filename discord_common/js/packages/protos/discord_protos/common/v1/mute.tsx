// discord_common/js/packages/protos/discord_protos/common/v1/mute.tsx
import _mod1188 from "../../../../../../../_runtime/metro/01188__.js";
import timestamp from "../../../google/protobuf/timestamp.tsx";
import wrappers from "../../../google/protobuf/wrappers.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";

require = fn;
const MessageType = fn(1188).MessageType;
class MuteNotificationSettings$Type extends MessageType {
  constructor() {
    obj = {
      no: 1,
      name: "end_time",
      kind: "message",
      T() {
        return timestamp.Timestamp;
      },
    };
    items = [,];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "selected_time_window",
      kind: "message",
      T() {
        return wrappers.Int32Value;
      },
    };
    tmp = new tmp("discord_protos.common.v1.MuteNotificationSettings", items, new.target);
    return tmp;
  }
}
let prototype = MuteNotificationSettings$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = {};
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
        let Timestamp = timestamp.Timestamp;
        obj.endTime = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.endTime);
      } else if (2 === tmp5) {
        let Int32Value = wrappers.Int32Value;
        obj.selectedTimeWindow = Int32Value.internalBinaryRead(
          pos,
          pos.uint32(),
          readUnknownField,
          obj.selectedTimeWindow,
        );
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(endTime, tag, writeUnknownFields) {
  if (endTime.endTime) {
    const Timestamp = timestamp.Timestamp;
    const tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(
      endTime.endTime,
      tag.tag(1, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(
      endTime.endTime,
      tag.tag(1, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (endTime.selectedTimeWindow) {
    const Int32Value = wrappers.Int32Value;
    const tagResult1 = tag.tag(2, _mod1188.WireType.LengthDelimited);
    const joined1 = Int32Value.internalBinaryWrite(
      endTime.selectedTimeWindow,
      tag.tag(2, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = Int32Value.internalBinaryWrite(
      endTime.selectedTimeWindow,
      tag.tag(2, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
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
      return timestamp.Timestamp;
    },
  },
  {
    no: 2,
    name: "selected_time_window",
    kind: "message",
    T() {
      return wrappers.Int32Value;
    },
  },
];
prototype = new prototype(
  "discord_protos.common.v1.MuteNotificationSettings",
  items,
  tmp,
  MuteNotificationSettings$Type,
  prototype,
  items,
  fn,
);
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/common/v1/mute.tsx");

export const MuteNotificationSettings = prototype;
