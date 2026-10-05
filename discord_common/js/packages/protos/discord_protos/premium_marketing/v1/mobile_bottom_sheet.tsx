// === Module 10407: mobile_bottom_sheet ===

// Module 10407 (mobile_bottom_sheet)
import _mod1198 from "module_1198" /* 1198 */;
import localized_string from "localized_string" /* 10401 */;
import help_article from "help_article" /* 10402 */;
import cta_button from "cta_button" /* 10403 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3, internalBinaryWrite4;

const T2 = function T() {
  return require("cta_button").CTAButton;
};
const T3 = function T() {
  const items = ["discord_protos.discord_users.v1.DismissibleContent", require("dismissible_content").DismissibleContent];
  return items;
};
const T4 = function T() {
  return require("help_article").HelpArticle;
};
const T5 = function T() {
  return require("localized_string").LocalizedString;
};
const MessageType = _mod1198.MessageType;
class MobileBottomSheet$Type extends MessageType {
  constructor() {
    let items = [{ no: 1, name: "asset_url", kind: "scalar", T: 9 }, { no: 2, name: "header", kind: "scalar", T: 9 }, { no: 3, name: "body", kind: "scalar", T: 9 }, { no: 4, name: "help_article_id", kind: "scalar", T: 9 }, { no: 5, name: "button", kind: "message", T: T2 }, { no: 6, name: "dismissible_content", kind: "enum", T: T3 }, { no: 7, name: "help_article", kind: "message", T: T4 }, , ];
    const obj = { no: 8, name: "header_localized", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[5]).LocalizedString;
      }
    }
    items[7] = obj;
    items[8] = { no: 9, name: "body_localized", kind: "message", T: T5 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.MobileBottomSheet", items, T);
    return tmp2;
  }
  create(arr) {
    const obj = { assetUrl: "", header: "", body: "", helpArticleId: "", dismissibleContent: 0 };
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
          obj.assetUrl = pos.string();
        } else if (2 === tmp5) {
          obj.header = pos.string();
        } else if (3 === tmp5) {
          obj.body = pos.string();
        } else if (4 === tmp5) {
          obj.helpArticleId = pos.string();
        } else if (5 === tmp5) {
          let CTAButton = cta_button.CTAButton;
          obj.button = CTAButton.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.button);
        } else if (6 === tmp5) {
          obj.dismissibleContent = pos.int32();
        } else if (7 === tmp5) {
          let HelpArticle = help_article.HelpArticle;
          obj.helpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.helpArticle);
        } else if (8 === tmp5) {
          let LocalizedString2 = localized_string.LocalizedString;
          obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
        } else if (9 === tmp5) {
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
  internalBinaryWrite(assetUrl, tag, writeUnknownFields) {
    if ("" !== assetUrl.assetUrl) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(assetUrl.assetUrl);
    }
    if ("" !== assetUrl.header) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.string(assetUrl.header);
    }
    if ("" !== assetUrl.body) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      tagResult2.string(assetUrl.body);
    }
    if ("" !== assetUrl.helpArticleId) {
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      tagResult3.string(assetUrl.helpArticleId);
    }
    if (assetUrl.button) {
      const CTAButton = cta_button.CTAButton;
      internalBinaryWrite = CTAButton.internalBinaryWrite;
      const button = assetUrl.button;
      const tagResult4 = tag.tag(5, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(button, tagResult4.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (0 !== assetUrl.dismissibleContent) {
      const tagResult5 = tag.tag(6, _mod1198.WireType.Varint);
      tagResult5.int32(assetUrl.dismissibleContent);
    }
    if (assetUrl.helpArticle) {
      const HelpArticle = help_article.HelpArticle;
      internalBinaryWrite2 = HelpArticle.internalBinaryWrite;
      const helpArticle = assetUrl.helpArticle;
      const tagResult6 = tag.tag(7, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(helpArticle, tagResult6.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (assetUrl.headerLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite3 = LocalizedString.internalBinaryWrite;
      const headerLocalized = assetUrl.headerLocalized;
      const tagResult7 = tag.tag(8, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(headerLocalized, tagResult7.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if (assetUrl.bodyLocalized) {
      const LocalizedString2 = localized_string.LocalizedString;
      internalBinaryWrite4 = LocalizedString2.internalBinaryWrite;
      const bodyLocalized = assetUrl.bodyLocalized;
      const tagResult8 = tag.tag(9, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(bodyLocalized, tagResult8.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, assetUrl, tag);
    }
    return tag;
  }
}
const prototype = MobileBottomSheet$Type.prototype;
let items = [{ no: 1, name: "asset_url", kind: "scalar", T: 9 }, { no: 2, name: "header", kind: "scalar", T: 9 }, { no: 3, name: "body", kind: "scalar", T: 9 }, { no: 4, name: "help_article_id", kind: "scalar", T: 9 }, { no: 5, name: "button", kind: "message", T: T2 }, { no: 6, name: "dismissible_content", kind: "enum", T: T3 }, { no: 7, name: "help_article", kind: "message", T: T4 }, , ];
let obj = { no: 8, name: "header_localized", kind: "message", T };
class T {
  constructor() {
    return require("localized_string").LocalizedString;
  }
}
items[7] = obj;
items[8] = { no: 9, name: "body_localized", kind: "message", T: T5 };
const prototype1 = new prototype("discord_protos.premium_marketing.v1.MobileBottomSheet", items, tmp, T, MobileBottomSheet$Type, prototype, items);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/mobile_bottom_sheet.tsx");

export const MobileBottomSheet = prototype1;