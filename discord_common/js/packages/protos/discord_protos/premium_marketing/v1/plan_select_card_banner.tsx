// === Module 10689: plan_select_card_banner ===

// Module 10689 (plan_select_card_banner)
import _mod1188 from "module_1188" /* 1188 */;
import localized_string from "localized_string" /* 10670 */;
import help_article from "help_article" /* 10671 */;
import theme_aware_asset from "theme_aware_asset" /* 10680 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const MessageType = fn(1188).MessageType;
class PlanSelectCardBanner$Type extends MessageType {
  constructor() {
    obj = {
      no: 1,
      name: "asset",
      kind: "message",
      T() {
            return require("theme_aware_asset").ThemeAwareAsset;
          }
    };
    items = [, , , ];
    items[0] = obj;
    items[1] = { no: 2, name: "body", kind: "scalar", T: 9 };
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
    tmp = new tmp("discord_protos.premium_marketing.v1.PlanSelectCardBanner", items, T);
    return tmp;
  }
}
let prototype = PlanSelectCardBanner$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { body: "" };
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
        obj.body = pos.string();
      } else if (3 === tmp5) {
        let LocalizedString = localized_string.LocalizedString;
        obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
      } else if (4 === tmp5) {
        let HelpArticle = help_article.HelpArticle;
        obj.helpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.helpArticle);
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
  if ("" !== asset.body) {
    tag.tag(2, _mod1188.WireType.LengthDelimited).string(asset.body);
    const tagResult1 = tag.tag(2, _mod1188.WireType.LengthDelimited);
  }
  if (asset.bodyLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult2 = tag.tag(3, _mod1188.WireType.LengthDelimited);
    const joined1 = LocalizedString.internalBinaryWrite(asset.bodyLocalized, tag.tag(3, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(asset.bodyLocalized, tag.tag(3, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (asset.helpArticle) {
    const HelpArticle = help_article.HelpArticle;
    const tagResult3 = tag.tag(4, _mod1188.WireType.LengthDelimited);
    const joined2 = HelpArticle.internalBinaryWrite(asset.helpArticle, tag.tag(4, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = HelpArticle.internalBinaryWrite(asset.helpArticle, tag.tag(4, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields);
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
let items = [obj, { no: 2, name: "body", kind: "scalar", T: 9 }, , ];
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
prototype = new prototype("discord_protos.premium_marketing.v1.PlanSelectCardBanner", items, tmp, T, PlanSelectCardBanner$Type, prototype, items);
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/plan_select_card_banner.tsx");

export const PlanSelectCardBanner = prototype;