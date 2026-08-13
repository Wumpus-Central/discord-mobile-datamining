// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_tab_popover.tsx
import _slicedToArray from "_slicedToArray";
import { MessageType } from "module_1307";
import { 01307__ } from "../../../../../../../_runtime/metro/01307__.js";
import { create } from "../../common/v1/localized_string.tsx";
import { create } from "cta_button.tsx";
import { create } from "help_article.tsx";
import { create } from "theme_aware_asset.tsx";

const require = arg1;
class PremiumTabPopover$Type extends MessageType {
  constructor() {
    items = [, , , , , , , ];
    items[0] = { no: 1, name: "header", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "body", kind: "scalar", T: 9 };
    items[2] = {
      no: 3,
      name: "asset",
      kind: "message",
      T() {
            return callback(7404).ThemeAwareAsset;
          }
    };
    items[3] = {
      no: 4,
      name: "button",
      kind: "message",
      T() {
            return callback(7396).CTAButton;
          }
    };
    items[4] = { no: 5, name: "help_article_id", kind: "scalar", T: 9 };
    items[5] = {
      no: 6,
      name: "help_article",
      kind: "message",
      T() {
            return callback(7395).HelpArticle;
          }
    };
    obj = { no: 7, name: "header_localized", kind: "message", T: null };
    class T {
      constructor() {
        return require("create").LocalizedString;
      }
    }
    obj[3] = T;
    items[6] = obj;
    items[7] = {
      no: 8,
      name: "body_localized",
      kind: "message",
      T() {
            return callback(7394).LocalizedString;
          }
    };
    tmp = new tmp("discord_protos.premium_marketing.v1.PremiumTabPopover", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
let prototype = PremiumTabPopover$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { header: "", body: "", helpArticleId: "" };
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
        obj.header = pos.string();
      } else if (2 === tmp5) {
        obj.body = pos.string();
      } else if (3 === tmp5) {
        let tmp42 = require;
        let tmp43 = dependencyMap;
        let ThemeAwareAsset = create.ThemeAwareAsset;
        let tmp44 = ThemeAwareAsset;
        let tmp45 = pos;
        let tmp46 = readUnknownField;
        obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
      } else if (4 === tmp5) {
        let tmp37 = require;
        let tmp38 = dependencyMap;
        let CTAButton = create.CTAButton;
        let tmp39 = CTAButton;
        let tmp40 = pos;
        let tmp41 = readUnknownField;
        obj.button = CTAButton.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.button);
      } else if (5 === tmp5) {
        obj.helpArticleId = pos.string();
      } else if (6 === tmp5) {
        let tmp32 = require;
        let tmp33 = dependencyMap;
        let HelpArticle = create.HelpArticle;
        let tmp34 = HelpArticle;
        let tmp35 = pos;
        let tmp36 = readUnknownField;
        obj.helpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.helpArticle);
      } else if (7 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let LocalizedString2 = create.LocalizedString;
        let tmp29 = LocalizedString2;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
      } else if (8 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let LocalizedString = create.LocalizedString;
        let tmp24 = LocalizedString;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(header, tag, writeUnknownFields) {
  if ("" !== header.header) {
    tag.tag(1, 01307__.WireType.LengthDelimited).string(header.header);
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
  }
  if ("" !== header.body) {
    tag.tag(2, 01307__.WireType.LengthDelimited).string(header.body);
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
  }
  if (header.asset) {
    const ThemeAwareAsset = create.ThemeAwareAsset;
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined = ThemeAwareAsset.internalBinaryWrite(header.asset, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(header.asset, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (header.button) {
    const CTAButton = create.CTAButton;
    const tagResult3 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined1 = CTAButton.internalBinaryWrite(header.button, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = CTAButton.internalBinaryWrite(header.button, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== header.helpArticleId) {
    tag.tag(5, 01307__.WireType.LengthDelimited).string(header.helpArticleId);
    const tagResult4 = tag.tag(5, 01307__.WireType.LengthDelimited);
  }
  if (header.helpArticle) {
    const HelpArticle = create.HelpArticle;
    const tagResult5 = tag.tag(6, 01307__.WireType.LengthDelimited);
    const joined2 = HelpArticle.internalBinaryWrite(header.helpArticle, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = HelpArticle.internalBinaryWrite(header.helpArticle, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (header.headerLocalized) {
    const LocalizedString = create.LocalizedString;
    const tagResult6 = tag.tag(7, 01307__.WireType.LengthDelimited);
    const joined3 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(7, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(7, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (header.bodyLocalized) {
    const LocalizedString2 = create.LocalizedString;
    const tagResult7 = tag.tag(8, 01307__.WireType.LengthDelimited);
    const joined4 = LocalizedString2.internalBinaryWrite(header.bodyLocalized, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = LocalizedString2.internalBinaryWrite(header.bodyLocalized, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, header, tag);
  }
  return tag;
};
let items = [
  { no: 1, name: "header", kind: "scalar", T: 9 },
  { no: 2, name: "body", kind: "scalar", T: 9 },
  {
    no: 3,
    name: "asset",
    kind: "message",
    T() {
      return callback(7404).ThemeAwareAsset;
    }
  },
  {
    no: 4,
    name: "button",
    kind: "message",
    T() {
      return callback(7396).CTAButton;
    }
  },
  { no: 5, name: "help_article_id", kind: "scalar", T: 9 },
  {
    no: 6,
    name: "help_article",
    kind: "message",
    T() {
      return callback(7395).HelpArticle;
    }
  },
,

];
let obj = { no: 7, name: "header_localized", kind: "message", T: null };
class T {
  constructor() {
    return require("create").LocalizedString;
  }
}
obj[3] = T;
items[6] = obj;
items[7] = {
  no: 8,
  name: "body_localized",
  kind: "message",
  T() {
    return callback(7394).LocalizedString;
  }
};
prototype = new prototype("discord_protos.premium_marketing.v1.PremiumTabPopover", items, tmp, T, PremiumTabPopover$Type, prototype, items);
// ThrowIfThisInitialized (0x7c)
let result = require("create").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_tab_popover.tsx");

export const PremiumTabPopover = prototype;