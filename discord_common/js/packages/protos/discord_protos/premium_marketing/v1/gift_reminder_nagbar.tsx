// === Module 10415: gift_reminder_nagbar ===

// Module 10415 (gift_reminder_nagbar)
import _mod1198 from "module_1198" /* 1198 */;
import localized_string from "localized_string" /* 10401 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let internalBinaryWrite;

function T() {
  return localized_string.LocalizedString;
}
const MessageType = _mod1198.MessageType;
class GiftReminderNagbar$Type extends MessageType {
  constructor() {
    const items = [{ no: 1, name: "body", kind: "scalar", T: 9 }, { no: 2, name: "body_localized", kind: "message", T }];
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.GiftReminderNagbar", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { body: "" };
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
          obj.body = pos.string();
        } else if (2 === tmp5) {
          let LocalizedString = localized_string.LocalizedString;
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
  internalBinaryWrite(body, tag, writeUnknownFields) {
    if ("" !== body.body) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(body.body);
    }
    if (body.bodyLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite = LocalizedString.internalBinaryWrite;
      const bodyLocalized = body.bodyLocalized;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(bodyLocalized, tagResult1.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, body, tag);
    }
    return tag;
  }
}
const prototype = GiftReminderNagbar$Type.prototype;
let items = [{ no: 1, name: "body", kind: "scalar", T: 9 }, { no: 2, name: "body_localized", kind: "message", T }];
const prototype1 = new prototype("discord_protos.premium_marketing.v1.GiftReminderNagbar", items, tmp, GiftReminderNagbar$Type, prototype, items, require);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_reminder_nagbar.tsx");

export const GiftReminderNagbar = prototype1;