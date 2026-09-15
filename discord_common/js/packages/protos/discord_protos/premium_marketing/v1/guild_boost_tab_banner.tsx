// === Module 10829: guild_boost_tab_banner ===

// Module 10829 (guild_boost_tab_banner)
import _mod1187 from "module_1187" /* 1187 */;
import localized_string from "localized_string" /* 10803 */;
import help_article from "help_article" /* 10804 */;
import theme_aware_asset from "theme_aware_asset" /* 10813 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const MessageType = fn(1187).MessageType;
class GuildBoostTabBanner$Type extends MessageType {
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
    obj1 = { no: 3, name: "body_localized", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).LocalizedString;
      }
    }
    obj1.T = T;
    items[2] = obj1;
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
    tmp1 = new tmp("discord_protos.premium_marketing.v1.GuildBoostTabBanner", items, T);
    return tmp1;
  }
}
const prototype = GuildBoostTabBanner$Type.prototype;
prototype["create"] = function create(arr) {
  const obj = { header: "", body: "" };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1187.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1187.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1187;
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
              onRead = _mod1187.UnknownFieldHandler.onRead;
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
    const tagResult = tag.tag(1, _mod1187.WireType.LengthDelimited);
    const joined = ThemeAwareAsset.internalBinaryWrite(asset.asset, tag.tag(1, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(asset.asset, tag.tag(1, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (asset.headerLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult1 = tag.tag(2, _mod1187.WireType.LengthDelimited);
    const joined1 = LocalizedString.internalBinaryWrite(asset.headerLocalized, tag.tag(2, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(asset.headerLocalized, tag.tag(2, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (asset.bodyLocalized) {
    const LocalizedString2 = localized_string.LocalizedString;
    const tagResult2 = tag.tag(3, _mod1187.WireType.LengthDelimited);
    const joined2 = LocalizedString2.internalBinaryWrite(asset.bodyLocalized, tag.tag(3, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = LocalizedString2.internalBinaryWrite(asset.bodyLocalized, tag.tag(3, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (asset.helpArticle) {
    const HelpArticle = help_article.HelpArticle;
    const tagResult3 = tag.tag(4, _mod1187.WireType.LengthDelimited);
    const joined3 = HelpArticle.internalBinaryWrite(asset.helpArticle, tag.tag(4, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = HelpArticle.internalBinaryWrite(asset.helpArticle, tag.tag(4, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== asset.header) {
    tag.tag(5, _mod1187.WireType.LengthDelimited).string(asset.header);
    const tagResult4 = tag.tag(5, _mod1187.WireType.LengthDelimited);
  }
  if ("" !== asset.body) {
    tag.tag(6, _mod1187.WireType.LengthDelimited).string(asset.body);
    const tagResult5 = tag.tag(6, _mod1187.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, asset, tag);
  }
  return tag;
};
let items = [
  {
    no: 1,
    name: "asset",
    kind: "message",
    T() {
      return require("theme_aware_asset").ThemeAwareAsset;
    }
  },
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
let obj2 = { no: 3, name: "body_localized", kind: "message", T: null };
class T {
  constructor() {
    return closure_1_0(closure_1_1[3]).LocalizedString;
  }
}
obj2.T = T;
items[2] = obj2;
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
const prototype1 = new prototype("discord_protos.premium_marketing.v1.GuildBoostTabBanner", items, tmp, T, GuildBoostTabBanner$Type, prototype, items);
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/guild_boost_tab_banner.tsx");

export const GuildBoostTabBanner = prototype1;