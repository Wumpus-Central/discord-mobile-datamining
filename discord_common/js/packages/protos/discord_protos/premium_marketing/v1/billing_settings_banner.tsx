// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/billing_settings_banner.tsx
import _mod1306 from "../../../../../../../_runtime/metro/01306__.js";
import create from "../../common/v1/localized_string.tsx";
import create2 from "help_article.tsx";
import create3 from "cta_button.tsx";
import create4 from "theme_aware_asset.tsx";
import closure_2 from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import { MessageType } from "../../../../../../../_runtime/metro/01306__.js";

require = arg1;
class BillingSettingsBanner$Type extends MessageType {
  constructor() {
    items = [, , , , , ,];
    items[0] = { no: 1, name: "header", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "body", kind: "scalar", T: 9 };
    items[2] = {
      no: 3,
      name: "asset",
      kind: "message",
      T() {
        return callback(8476).ThemeAwareAsset;
      },
    };
    items[3] = {
      no: 4,
      name: "button",
      kind: "message",
      T() {
        return callback(8468).CTAButton;
      },
    };
    items[4] = {
      no: 5,
      name: "header_localized",
      kind: "message",
      T() {
        return callback(8466).LocalizedString;
      },
    };
    obj = { no: 6, name: "body_localized", kind: "message", T: null };
    class T {
      constructor() {
        return require("create").LocalizedString;
      }
    }
    obj[3] = T;
    items[5] = obj;
    items[6] = {
      no: 7,
      name: "help_article",
      kind: "message",
      T() {
        return callback(8467).HelpArticle;
      },
    };
    tmp = new tmp("discord_protos.premium_marketing.v1.BillingSettingsBanner", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
let prototype = BillingSettingsBanner$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { header: "", body: "" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
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
        obj.header = pos.string();
      } else if (2 === tmp5) {
        obj.body = pos.string();
      } else if (3 === tmp5) {
        let tmp42 = require;
        let tmp43 = dependencyMap;
        let ThemeAwareAsset = create4.ThemeAwareAsset;
        let tmp44 = ThemeAwareAsset;
        let tmp45 = pos;
        let tmp46 = readUnknownField;
        obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
      } else if (4 === tmp5) {
        let tmp37 = require;
        let tmp38 = dependencyMap;
        let CTAButton = create3.CTAButton;
        let tmp39 = CTAButton;
        let tmp40 = pos;
        let tmp41 = readUnknownField;
        obj.button = CTAButton.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.button);
      } else if (5 === tmp5) {
        let tmp32 = require;
        let tmp33 = dependencyMap;
        let LocalizedString2 = create.LocalizedString;
        let tmp34 = LocalizedString2;
        let tmp35 = pos;
        let tmp36 = readUnknownField;
        obj.headerLocalized = LocalizedString2.internalBinaryRead(
          pos,
          pos.uint32(),
          readUnknownField,
          obj.headerLocalized,
        );
      } else if (6 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let LocalizedString = create.LocalizedString;
        let tmp29 = LocalizedString;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
      } else if (7 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let HelpArticle = create2.HelpArticle;
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
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1306.UnknownFieldHandler.onRead;
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
    tag.tag(1, _mod1306.WireType.LengthDelimited).string(header.header);
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
  }
  if ("" !== header.body) {
    tag.tag(2, _mod1306.WireType.LengthDelimited).string(header.body);
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
  }
  if (header.asset) {
    const ThemeAwareAsset = create4.ThemeAwareAsset;
    const tagResult2 = tag.tag(3, _mod1306.WireType.LengthDelimited);
    const joined = ThemeAwareAsset.internalBinaryWrite(
      header.asset,
      tag.tag(3, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(
      header.asset,
      tag.tag(3, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (header.button) {
    const CTAButton = create3.CTAButton;
    const tagResult3 = tag.tag(4, _mod1306.WireType.LengthDelimited);
    const joined1 = CTAButton.internalBinaryWrite(
      header.button,
      tag.tag(4, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = CTAButton.internalBinaryWrite(
      header.button,
      tag.tag(4, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (header.headerLocalized) {
    const LocalizedString = create.LocalizedString;
    const tagResult4 = tag.tag(5, _mod1306.WireType.LengthDelimited);
    const joined2 = LocalizedString.internalBinaryWrite(
      header.headerLocalized,
      tag.tag(5, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult2 = LocalizedString.internalBinaryWrite(
      header.headerLocalized,
      tag.tag(5, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (header.bodyLocalized) {
    const LocalizedString2 = create.LocalizedString;
    const tagResult5 = tag.tag(6, _mod1306.WireType.LengthDelimited);
    const joined3 = LocalizedString2.internalBinaryWrite(
      header.bodyLocalized,
      tag.tag(6, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult3 = LocalizedString2.internalBinaryWrite(
      header.bodyLocalized,
      tag.tag(6, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (header.helpArticle) {
    const HelpArticle = create2.HelpArticle;
    const tagResult6 = tag.tag(7, _mod1306.WireType.LengthDelimited);
    const joined4 = HelpArticle.internalBinaryWrite(
      header.helpArticle,
      tag.tag(7, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult4 = HelpArticle.internalBinaryWrite(
      header.helpArticle,
      tag.tag(7, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
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
      return callback(8476).ThemeAwareAsset;
    },
  },
  {
    no: 4,
    name: "button",
    kind: "message",
    T() {
      return callback(8468).CTAButton;
    },
  },
  {
    no: 5,
    name: "header_localized",
    kind: "message",
    T() {
      return callback(8466).LocalizedString;
    },
  },
  ,
];
let obj = { no: 6, name: "body_localized", kind: "message", T: null };
class T {
  constructor() {
    return require("create").LocalizedString;
  }
}
obj[3] = T;
items[5] = obj;
items[6] = {
  no: 7,
  name: "help_article",
  kind: "message",
  T() {
    return callback(8467).HelpArticle;
  },
};
prototype = new prototype(
  "discord_protos.premium_marketing.v1.BillingSettingsBanner",
  items,
  tmp,
  T,
  BillingSettingsBanner$Type,
  prototype,
  items,
);
// ThrowIfThisInitialized (0x7c)
let result = require("set").fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/billing_settings_banner.tsx",
);

export const BillingSettingsBanner = prototype;
