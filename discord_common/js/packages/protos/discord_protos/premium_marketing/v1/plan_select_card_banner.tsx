// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/plan_select_card_banner.tsx
import _slicedToArray from "_slicedToArray";
import { MessageType } from "module_1307";
import { 01307__ } from "../../../../../../../_runtime/metro/01307__.js";
import { create } from "../../common/v1/localized_string.tsx";
import { create } from "help_article.tsx";
import { create } from "theme_aware_asset.tsx";

const require = arg1;
class PlanSelectCardBanner$Type extends MessageType {
  constructor() {
    obj = {
      no: 1,
      name: "asset",
      kind: "message",
      T() {
            return callback(7400).ThemeAwareAsset;
          }
    };
    items = [, , , ];
    items[0] = obj;
    items[1] = { no: 2, name: "body", kind: "scalar", T: 9 };
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
            return callback(7391).HelpArticle;
          }
    };
    tmp = new tmp("discord_protos.premium_marketing.v1.PlanSelectCardBanner", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
let prototype = PlanSelectCardBanner$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { body: "" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let tmp32 = require;
        let tmp33 = dependencyMap;
        let ThemeAwareAsset = create.ThemeAwareAsset;
        let tmp34 = ThemeAwareAsset;
        let tmp35 = pos;
        let tmp36 = readUnknownField;
        obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
      } else if (2 === tmp5) {
        obj.body = pos.string();
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
        let HelpArticle = create.HelpArticle;
        let tmp24 = HelpArticle;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
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
    const ThemeAwareAsset = create.ThemeAwareAsset;
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
    const joined = ThemeAwareAsset.internalBinaryWrite(asset.asset, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(asset.asset, tag.tag(1, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== asset.body) {
    tag.tag(2, 01307__.WireType.LengthDelimited).string(asset.body);
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
  }
  if (asset.bodyLocalized) {
    const LocalizedString = create.LocalizedString;
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined1 = LocalizedString.internalBinaryWrite(asset.bodyLocalized, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(asset.bodyLocalized, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (asset.helpArticle) {
    const HelpArticle = create.HelpArticle;
    const tagResult3 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined2 = HelpArticle.internalBinaryWrite(asset.helpArticle, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = HelpArticle.internalBinaryWrite(asset.helpArticle, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
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
    return callback(7400).ThemeAwareAsset;
  }
};
let items = [obj, { no: 2, name: "body", kind: "scalar", T: 9 }, , ];
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
    return callback(7391).HelpArticle;
  }
};
prototype = new prototype("discord_protos.premium_marketing.v1.PlanSelectCardBanner", items, tmp, T, PlanSelectCardBanner$Type, prototype, items);
// ThrowIfThisInitialized (0x7c)
let result = require("create").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/plan_select_card_banner.tsx");

export const PlanSelectCardBanner = prototype;