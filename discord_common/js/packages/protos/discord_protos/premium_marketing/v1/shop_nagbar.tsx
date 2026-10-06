// === Module 10435: shop_nagbar ===

// Module 10435 (shop_nagbar)
import _mod1198 from "module_1198" /* 1198 */;
import wrappers from "wrappers" /* 1228 */;
import localized_string from "localized_string" /* 10414 */;
import help_article from "help_article" /* 10415 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3, internalBinaryWrite4;

const T2 = function T() {
  const items = ["discord_protos.premium_marketing.v1.ButtonAction", require("cta_button").ButtonAction, "BUTTON_ACTION_"];
  return items;
};
const T3 = function T() {
  return require("help_article").HelpArticle;
};
const T4 = function T() {
  return require("localized_string").LocalizedString;
};
const T5 = function T() {
  return require("wrappers").UInt64Value;
};
const MessageType = _mod1198.MessageType;
class ShopNagbar$Type extends MessageType {
  constructor() {
    let items = [{ no: 1, name: "body", kind: "scalar", T: 9 }, { no: 2, name: "cta_label", kind: "scalar", T: 9 }, { no: 3, name: "cta_action", kind: "enum", T: T2 }, { no: 4, name: "deeplink_section", kind: "scalar", T: 9 }, { no: 5, name: "help_article", kind: "message", T: T3 }, { no: 6, name: "body_localized", kind: "message", T: T4 }, , ];
    const obj = { no: 7, name: "cta_label_localized", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[4]).LocalizedString;
      }
    }
    items[6] = obj;
    items[7] = { no: 8, name: "navigable_storefront_application_id", kind: "message", T: T5 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.ShopNagbar", items, T);
    return tmp2;
  }
  create(arr) {
    const obj = { body: "", ctaLabel: "", ctaAction: 0, deeplinkSection: "" };
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
          obj.ctaLabel = pos.string();
        } else if (3 === tmp5) {
          obj.ctaAction = pos.int32();
        } else if (4 === tmp5) {
          obj.deeplinkSection = pos.string();
        } else if (5 === tmp5) {
          let HelpArticle = help_article.HelpArticle;
          obj.helpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.helpArticle);
        } else if (6 === tmp5) {
          let LocalizedString2 = localized_string.LocalizedString;
          obj.bodyLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
        } else if (7 === tmp5) {
          let LocalizedString = localized_string.LocalizedString;
          obj.ctaLabelLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.ctaLabelLocalized);
        } else if (8 === tmp5) {
          let UInt64Value = wrappers.UInt64Value;
          obj.navigableStorefrontApplicationId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.navigableStorefrontApplicationId);
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
    if ("" !== body.ctaLabel) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.string(body.ctaLabel);
    }
    if (0 !== body.ctaAction) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
      tagResult2.int32(body.ctaAction);
    }
    if ("" !== body.deeplinkSection) {
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      tagResult3.string(body.deeplinkSection);
    }
    if (body.helpArticle) {
      const HelpArticle = help_article.HelpArticle;
      internalBinaryWrite = HelpArticle.internalBinaryWrite;
      const helpArticle = body.helpArticle;
      const tagResult4 = tag.tag(5, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(helpArticle, tagResult4.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (body.bodyLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite2 = LocalizedString.internalBinaryWrite;
      const bodyLocalized = body.bodyLocalized;
      const tagResult5 = tag.tag(6, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(bodyLocalized, tagResult5.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (body.ctaLabelLocalized) {
      const LocalizedString2 = localized_string.LocalizedString;
      internalBinaryWrite3 = LocalizedString2.internalBinaryWrite;
      const ctaLabelLocalized = body.ctaLabelLocalized;
      const tagResult6 = tag.tag(7, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(ctaLabelLocalized, tagResult6.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if (body.navigableStorefrontApplicationId) {
      const UInt64Value = wrappers.UInt64Value;
      internalBinaryWrite4 = UInt64Value.internalBinaryWrite;
      const navigableStorefrontApplicationId = body.navigableStorefrontApplicationId;
      const tagResult7 = tag.tag(8, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(navigableStorefrontApplicationId, tagResult7.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
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
const prototype = ShopNagbar$Type.prototype;
let items = [{ no: 1, name: "body", kind: "scalar", T: 9 }, { no: 2, name: "cta_label", kind: "scalar", T: 9 }, { no: 3, name: "cta_action", kind: "enum", T: T2 }, { no: 4, name: "deeplink_section", kind: "scalar", T: 9 }, { no: 5, name: "help_article", kind: "message", T: T3 }, { no: 6, name: "body_localized", kind: "message", T: T4 }, , ];
let obj = { no: 7, name: "cta_label_localized", kind: "message", T };
class T {
  constructor() {
    return require("localized_string").LocalizedString;
  }
}
items[6] = obj;
items[7] = { no: 8, name: "navigable_storefront_application_id", kind: "message", T: T5 };
const prototype1 = new prototype("discord_protos.premium_marketing.v1.ShopNagbar", items, tmp, T, ShopNagbar$Type, prototype, items);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/shop_nagbar.tsx");

export const ShopNagbar = prototype1;