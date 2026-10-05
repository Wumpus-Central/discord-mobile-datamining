// === Module 10424: guild_header_coachmark ===

// Module 10424 (guild_header_coachmark)
import _mod1198 from "module_1198" /* 1198 */;
import localized_string from "localized_string" /* 10401 */;
import help_article from "help_article" /* 10402 */;
import cta_button from "cta_button" /* 10403 */;
import theme_aware_asset from "theme_aware_asset" /* 10411 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3, internalBinaryWrite4, internalBinaryWrite5;

const T2 = function T() {
  return require("theme_aware_asset").ThemeAwareAsset;
};
const T3 = function T() {
  return require("cta_button").CTAButton;
};
const T4 = function T() {
  return require("help_article").HelpArticle;
};
const T5 = function T() {
  return require("localized_string").LocalizedString;
};
const MessageType = _mod1198.MessageType;
class GuildHeaderCoachmark$Type extends MessageType {
  constructor() {
    const items = [, , , , , , ];
    const obj = { no: 1, name: "asset", kind: "message", T: T2 };
    items[0] = obj;
    items[1] = { no: 2, name: "button", kind: "message", T: T3 };
    items[2] = { no: 3, name: "help_article", kind: "message", T: T4 };
    const obj2 = { no: 4, name: "header_localized", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[5]).LocalizedString;
      }
    }
    items[3] = obj2;
    items[4] = { no: 5, name: "body_localized", kind: "message", T: T5 };
    items[5] = { no: 6, name: "header", kind: "scalar", T: 9 };
    items[6] = { no: 7, name: "body", kind: "scalar", T: 9 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.GuildHeaderCoachmark", items, T);
    return tmp2;
  }
  create(arr) {
    const obj = { header: "", body: "" };
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
          let ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
          obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
        } else if (2 === tmp5) {
          let CTAButton = cta_button.CTAButton;
          obj.button = CTAButton.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.button);
        } else if (3 === tmp5) {
          let HelpArticle = help_article.HelpArticle;
          obj.helpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.helpArticle);
        } else if (4 === tmp5) {
          let LocalizedString2 = localized_string.LocalizedString;
          obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
        } else if (5 === tmp5) {
          let LocalizedString = localized_string.LocalizedString;
          obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
        } else if (6 === tmp5) {
          obj.header = pos.string();
        } else if (7 === tmp5) {
          obj.body = pos.string();
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
  internalBinaryWrite(asset, tag, writeUnknownFields) {
    if (asset.asset) {
      const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite = ThemeAwareAsset.internalBinaryWrite;
      asset = asset.asset;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(asset, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (asset.button) {
      const CTAButton = cta_button.CTAButton;
      internalBinaryWrite2 = CTAButton.internalBinaryWrite;
      const button = asset.button;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(button, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (asset.helpArticle) {
      const HelpArticle = help_article.HelpArticle;
      internalBinaryWrite3 = HelpArticle.internalBinaryWrite;
      const helpArticle = asset.helpArticle;
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(helpArticle, tagResult2.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if (asset.headerLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite4 = LocalizedString.internalBinaryWrite;
      const headerLocalized = asset.headerLocalized;
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(headerLocalized, tagResult3.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    if (asset.bodyLocalized) {
      const LocalizedString2 = localized_string.LocalizedString;
      internalBinaryWrite5 = LocalizedString2.internalBinaryWrite;
      const bodyLocalized = asset.bodyLocalized;
      const tagResult4 = tag.tag(5, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(bodyLocalized, tagResult4.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite5Result.join();
    }
    if ("" !== asset.header) {
      const tagResult5 = tag.tag(6, _mod1198.WireType.LengthDelimited);
      tagResult5.string(asset.header);
    }
    if ("" !== asset.body) {
      const tagResult6 = tag.tag(7, _mod1198.WireType.LengthDelimited);
      tagResult6.string(asset.body);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, asset, tag);
    }
    return tag;
  }
}
const prototype = GuildHeaderCoachmark$Type.prototype;
let obj = { no: 1, name: "asset", kind: "message", T: T2 };
let items = [obj, { no: 2, name: "button", kind: "message", T: T3 }, { no: 3, name: "help_article", kind: "message", T: T4 }, , , , ];
let obj2 = { no: 4, name: "header_localized", kind: "message", T };
class T {
  constructor() {
    return require("localized_string").LocalizedString;
  }
}
items[3] = obj2;
items[4] = { no: 5, name: "body_localized", kind: "message", T: T5 };
items[5] = { no: 6, name: "header", kind: "scalar", T: 9 };
items[6] = { no: 7, name: "body", kind: "scalar", T: 9 };
const prototype1 = new prototype("discord_protos.premium_marketing.v1.GuildHeaderCoachmark", items, tmp, T, GuildHeaderCoachmark$Type, prototype, items);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/guild_header_coachmark.tsx");

export const GuildHeaderCoachmark = prototype1;