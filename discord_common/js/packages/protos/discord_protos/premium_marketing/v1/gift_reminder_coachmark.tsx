// === Module 10416: gift_reminder_coachmark ===

// Module 10416 (gift_reminder_coachmark)
import _mod1198 from "module_1198" /* 1198 */;
import localized_string from "localized_string" /* 10401 */;
import theme_aware_asset from "theme_aware_asset" /* 10411 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3;

const T2 = function T() {
  return require("theme_aware_asset").ThemeAwareAsset;
};
const T3 = function T() {
  return require("localized_string").LocalizedString;
};
const MessageType = _mod1198.MessageType;
class GiftReminderCoachmark$Type extends MessageType {
  constructor() {
    const items = [{ no: 1, name: "header", kind: "scalar", T: 9 }, { no: 2, name: "body", kind: "scalar", T: 9 }, { no: 3, name: "asset_url", kind: "scalar", T: 9 }, { no: 4, name: "asset", kind: "message", T: T2 }, , ];
    const obj = { no: 5, name: "header_localized", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).LocalizedString;
      }
    }
    items[4] = obj;
    items[5] = { no: 6, name: "body_localized", kind: "message", T: T3 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.GiftReminderCoachmark", items, T);
    return tmp2;
  }
  create(arr) {
    const obj = { header: "", body: "", assetUrl: "" };
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
          obj.header = pos.string();
        } else if (2 === tmp5) {
          obj.body = pos.string();
        } else if (3 === tmp5) {
          obj.assetUrl = pos.string();
        } else if (4 === tmp5) {
          let ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
          obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
        } else if (5 === tmp5) {
          let LocalizedString2 = localized_string.LocalizedString;
          obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
        } else if (6 === tmp5) {
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
  internalBinaryWrite(header, tag, writeUnknownFields) {
    if ("" !== header.header) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(header.header);
    }
    if ("" !== header.body) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.string(header.body);
    }
    if ("" !== header.assetUrl) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      tagResult2.string(header.assetUrl);
    }
    if (header.asset) {
      const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite = ThemeAwareAsset.internalBinaryWrite;
      const asset = header.asset;
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(asset, tagResult3.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (header.headerLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite2 = LocalizedString.internalBinaryWrite;
      const headerLocalized = header.headerLocalized;
      const tagResult4 = tag.tag(5, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(headerLocalized, tagResult4.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (header.bodyLocalized) {
      const LocalizedString2 = localized_string.LocalizedString;
      internalBinaryWrite3 = LocalizedString2.internalBinaryWrite;
      const bodyLocalized = header.bodyLocalized;
      const tagResult5 = tag.tag(6, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(bodyLocalized, tagResult5.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, header, tag);
    }
    return tag;
  }
}
const prototype = GiftReminderCoachmark$Type.prototype;
let items = [{ no: 1, name: "header", kind: "scalar", T: 9 }, { no: 2, name: "body", kind: "scalar", T: 9 }, { no: 3, name: "asset_url", kind: "scalar", T: 9 }, { no: 4, name: "asset", kind: "message", T: T2 }, , ];
let obj = { no: 5, name: "header_localized", kind: "message", T };
class T {
  constructor() {
    return require("localized_string").LocalizedString;
  }
}
items[4] = obj;
items[5] = { no: 6, name: "body_localized", kind: "message", T: T3 };
const prototype1 = new prototype("discord_protos.premium_marketing.v1.GiftReminderCoachmark", items, tmp, T, GiftReminderCoachmark$Type, prototype, items);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_reminder_coachmark.tsx");

export const GiftReminderCoachmark = prototype1;