// === Module 10694: guild_boost_checkout_banner ===

// Module 10694 (guild_boost_checkout_banner)
import _mod1188 from "module_1188" /* 1188 */;
import localized_string from "localized_string" /* 10670 */;
import help_article from "help_article" /* 10671 */;
import theme_aware_asset from "theme_aware_asset" /* 10680 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const MessageType = fn(1188).MessageType;
class GuildBoostCheckoutBanner$Type extends MessageType {
  constructor() {
    obj = {
      no: 1,
      name: "asset",
      kind: "message",
      T() {
            return require("theme_aware_asset").ThemeAwareAsset;
          }
    };
    items = [, , , , , ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "header_localized",
      kind: "message",
      T() {
            return require("localized_string").LocalizedString;
          }
    };
    obj = { no: 3, name: "body_localized", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).LocalizedString;
      }
    }
    obj.T = T;
    items[2] = obj;
    items[3] = {
      no: 4,
      name: "help_article",
      kind: "message",
      T() {
            return require("help_article").HelpArticle;
          }
    };
    items[4] = { no: 5, name: "header", kind: "scalar", T: 9 };
    items[5] = { no: 6, name: "body", kind: "scalar", T: 9 };
    tmp = new tmp("discord_protos.premium_marketing.v1.GuildBoostCheckoutBanner", items, T);
    return tmp;
  }
}
let prototype = GuildBoostCheckoutBanner$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { header: "", body: "" };
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
        let ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
        obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
      } else if (2 === tmp5) {
        let LocalizedString2 = localized_string.LocalizedString;
        obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
      } else if (3 === tmp5) {
        let LocalizedString = localized_string.LocalizedString;
        obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
      } else if (4 === tmp5) {
        let HelpArticle = help_article.HelpArticle;
        obj.helpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.helpArticle);
      } else if (5 === tmp5) {
        obj.header = pos.string();
      } else if (6 === tmp5) {
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(asset, tag, writeUnknownFields) {
  if (asset.asset) {
    const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
    const tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
    const joined = ThemeAwareAsset.internalBinaryWrite(asset.asset, tag.tag(1, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(asset.asset, tag.tag(1, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (asset.headerLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult1 = tag.tag(2, _mod1188.WireType.LengthDelimited);
    const joined1 = LocalizedString.internalBinaryWrite(asset.headerLocalized, tag.tag(2, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(asset.headerLocalized, tag.tag(2, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (asset.bodyLocalized) {
    const LocalizedString2 = localized_string.LocalizedString;
    const tagResult2 = tag.tag(3, _mod1188.WireType.LengthDelimited);
    const joined2 = LocalizedString2.internalBinaryWrite(asset.bodyLocalized, tag.tag(3, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = LocalizedString2.internalBinaryWrite(asset.bodyLocalized, tag.tag(3, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (asset.helpArticle) {
    const HelpArticle = help_article.HelpArticle;
    const tagResult3 = tag.tag(4, _mod1188.WireType.LengthDelimited);
    const joined3 = HelpArticle.internalBinaryWrite(asset.helpArticle, tag.tag(4, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = HelpArticle.internalBinaryWrite(asset.helpArticle, tag.tag(4, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== asset.header) {
    tag.tag(5, _mod1188.WireType.LengthDelimited).string(asset.header);
    const tagResult4 = tag.tag(5, _mod1188.WireType.LengthDelimited);
  }
  if ("" !== asset.body) {
    tag.tag(6, _mod1188.WireType.LengthDelimited).string(asset.body);
    const tagResult5 = tag.tag(6, _mod1188.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, asset, tag);
  }
  return tag;
};
let obj = {
  no: 1,
  name: "asset",
  kind: "message",
  T() {
    return require("theme_aware_asset").ThemeAwareAsset;
  }
};
let items = [
  obj,
  {
    no: 2,
    name: "header_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    }
  },
,
,
,

];
obj = { no: 3, name: "body_localized", kind: "message", T: null };
class T {
  constructor() {
    return closure_1_0(closure_1_1[3]).LocalizedString;
  }
}
obj.T = T;
items[2] = obj;
items[3] = {
  no: 4,
  name: "help_article",
  kind: "message",
  T() {
    return require("help_article").HelpArticle;
  }
};
items[4] = { no: 5, name: "header", kind: "scalar", T: 9 };
items[5] = { no: 6, name: "body", kind: "scalar", T: 9 };
prototype = new prototype("discord_protos.premium_marketing.v1.GuildBoostCheckoutBanner", items, tmp, T, GuildBoostCheckoutBanner$Type, prototype, items);
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/guild_boost_checkout_banner.tsx");

export const GuildBoostCheckoutBanner = prototype;