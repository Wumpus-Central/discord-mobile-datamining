// === Module 10695: create ===

// Module 10695 (create)
import _mod1188 from "module_1188" /* 1188 */;
import create from "create" /* 10670 */;
import create2 from "create" /* 10671 */;
import create3 from "create" /* 10680 */;
import closure_2 from "_slicedToArray" /* 32 */;
import { MessageType } from "module_1188" /* 1188 */;

require = arg1;
class GuildBoostMarketingPageBanner$Type extends MessageType {
  constructor() {
    obj = {
      no: 1,
      name: "asset",
      kind: "message",
      T() {
            return callback(10680).ThemeAwareAsset;
          }
    };
    items = [, , , , , ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "header_localized",
      kind: "message",
      T() {
            return callback(10670).LocalizedString;
          }
    };
    obj = { no: 3, name: "body_localized", kind: "message", T: null };
    class T {
      constructor() {
        return require("create").LocalizedString;
      }
    }
    obj[3] = T;
    items[2] = obj;
    items[3] = {
      no: 4,
      name: "help_article",
      kind: "message",
      T() {
            return callback(10671).HelpArticle;
          }
    };
    items[4] = { no: 5, name: "header", kind: "scalar", T: 9 };
    items[5] = { no: 6, name: "body", kind: "scalar", T: 9 };
    tmp = new tmp("discord_protos.premium_marketing.v1.GuildBoostMarketingPageBanner", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
let prototype = GuildBoostMarketingPageBanner$Type.prototype;
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
prototype["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let tmp37 = require;
        let tmp38 = dependencyMap;
        let ThemeAwareAsset = create3.ThemeAwareAsset;
        let tmp39 = ThemeAwareAsset;
        let tmp40 = pos;
        let tmp41 = readUnknownField;
        obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
      } else if (2 === tmp5) {
        let tmp32 = require;
        let tmp33 = dependencyMap;
        let LocalizedString2 = create.LocalizedString;
        let tmp34 = LocalizedString2;
        let tmp35 = pos;
        let tmp36 = readUnknownField;
        obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
      } else if (3 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let LocalizedString = create.LocalizedString;
        let tmp29 = LocalizedString;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
      } else if (4 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let HelpArticle = create2.HelpArticle;
        let tmp24 = HelpArticle;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1188.UnknownFieldHandler.onRead;
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(asset, tag, writeUnknownFields) {
  if (asset.asset) {
    const ThemeAwareAsset = create3.ThemeAwareAsset;
    const tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
    const joined = ThemeAwareAsset.internalBinaryWrite(asset.asset, tag.tag(1, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(asset.asset, tag.tag(1, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (asset.headerLocalized) {
    const LocalizedString = create.LocalizedString;
    const tagResult1 = tag.tag(2, _mod1188.WireType.LengthDelimited);
    const joined1 = LocalizedString.internalBinaryWrite(asset.headerLocalized, tag.tag(2, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(asset.headerLocalized, tag.tag(2, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (asset.bodyLocalized) {
    const LocalizedString2 = create.LocalizedString;
    const tagResult2 = tag.tag(3, _mod1188.WireType.LengthDelimited);
    const joined2 = LocalizedString2.internalBinaryWrite(asset.bodyLocalized, tag.tag(3, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = LocalizedString2.internalBinaryWrite(asset.bodyLocalized, tag.tag(3, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (asset.helpArticle) {
    const HelpArticle = create2.HelpArticle;
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
    return callback(10680).ThemeAwareAsset;
  }
};
let items = [
  obj,
  {
    no: 2,
    name: "header_localized",
    kind: "message",
    T() {
      return callback(10670).LocalizedString;
    }
  },
,
,
,

];
obj = { no: 3, name: "body_localized", kind: "message", T: null };
class T {
  constructor() {
    return require("create").LocalizedString;
  }
}
obj[3] = T;
items[2] = obj;
items[3] = {
  no: 4,
  name: "help_article",
  kind: "message",
  T() {
    return callback(10671).HelpArticle;
  }
};
items[4] = { no: 5, name: "header", kind: "scalar", T: 9 };
items[5] = { no: 6, name: "body", kind: "scalar", T: 9 };
prototype = new prototype("discord_protos.premium_marketing.v1.GuildBoostMarketingPageBanner", items, tmp, T, GuildBoostMarketingPageBanner$Type, prototype, items);
// ThrowIfThisInitialized (0x7c)
let result = require("set").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/guild_boost_marketing_page_banner.tsx");

export const GuildBoostMarketingPageBanner = prototype;