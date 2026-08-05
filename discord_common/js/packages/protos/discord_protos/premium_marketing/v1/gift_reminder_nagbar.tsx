// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_reminder_nagbar.tsx
import _slicedToArray from "_slicedToArray";
import { MessageType } from "module_1307";

const require = arg1;
class GiftReminderNagbar$Type extends MessageType {
  constructor() {
    items = [, ];
    items[0] = { no: 1, name: "body", kind: "scalar", T: 9 };
    items[1] = {
      no: 2,
      name: "body_localized",
      kind: "message",
      T() {
            return callback(table[2]).LocalizedString;
          }
    };
    tmp = new tmp("discord_protos.premium_marketing.v1.GiftReminderNagbar", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
let prototype = GiftReminderNagbar$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { body: "" };
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
        obj.body = pos.string();
      } else if (2 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let LocalizedString = require(7272) /* create */.LocalizedString;
        let tmp24 = LocalizedString;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(body, tag, writeUnknownFields) {
  if ("" !== body.body) {
    tag.tag(1, require(1307).WireType.LengthDelimited).string(body.body);
    const tagResult = tag.tag(1, require(1307).WireType.LengthDelimited);
  }
  if (body.bodyLocalized) {
    const LocalizedString = require(7272) /* create */.LocalizedString;
    const tagResult1 = tag.tag(2, require(1307).WireType.LengthDelimited);
    const joined = LocalizedString.internalBinaryWrite(body.bodyLocalized, tag.tag(2, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(body.bodyLocalized, tag.tag(2, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = require(1307).UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, body, tag);
  }
  return tag;
};
let items = [
  { no: 1, name: "body", kind: "scalar", T: 9 },
  {
    no: 2,
    name: "body_localized",
    kind: "message",
    T() {
      return callback(table[2]).LocalizedString;
    }
  }
];
prototype = new prototype("discord_protos.premium_marketing.v1.GiftReminderNagbar", items, tmp, GiftReminderNagbar$Type, prototype, items, arg1);
// ThrowIfThisInitialized (0x7c)
let result = require("create").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_reminder_nagbar.tsx");

export const GiftReminderNagbar = prototype;