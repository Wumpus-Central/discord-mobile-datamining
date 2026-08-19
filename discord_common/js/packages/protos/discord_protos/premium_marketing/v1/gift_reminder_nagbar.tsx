// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_reminder_nagbar.tsx
import _mod1307 from "../../../../../../../_runtime/metro/01307__.js";
import create from "../../common/v1/localized_string.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import { MessageType } from "../../../../../../../_runtime/metro/01307__.js";

require = fn;
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
  const _Object = Object;
  const obj = { enumerable: false, value: this };
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
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        obj.body = pos.string();
      } else if (2 === tmp5) {
        let LocalizedString = create.LocalizedString;
        obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              onRead = _mod1307.UnknownFieldHandler.onRead;
            }
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
    tag.tag(1, _mod1307.WireType.LengthDelimited).string(body.body);
    const tagResult = tag.tag(1, _mod1307.WireType.LengthDelimited);
  }
  if (body.bodyLocalized) {
    const LocalizedString = create.LocalizedString;
    const tagResult1 = tag.tag(2, _mod1307.WireType.LengthDelimited);
    const joined = LocalizedString.internalBinaryWrite(body.bodyLocalized, tag.tag(2, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(body.bodyLocalized, tag.tag(2, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1307.UnknownFieldHandler.onWrite;
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
prototype = new prototype("discord_protos.premium_marketing.v1.GiftReminderNagbar", items, tmp, GiftReminderNagbar$Type, prototype, items, fn);
// ThrowIfThisInitialized (0x7c)
let result = require("obj132").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_reminder_nagbar.tsx");

export const GiftReminderNagbar = prototype;