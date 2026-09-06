// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/billing_settings_banner.tsx
import _mod1188 from "../../../../../../../_runtime/metro/01188__.js";
import localized_string from "../../common/v1/localized_string.tsx";
import help_article from "help_article.tsx";
import cta_button from "cta_button.tsx";
import theme_aware_asset from "theme_aware_asset.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";

require = fn;
const MessageType = fn(1188).MessageType;
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
        return require("theme_aware_asset").ThemeAwareAsset;
      },
    };
    items[3] = {
      no: 4,
      name: "button",
      kind: "message",
      T() {
        return require("cta_button").CTAButton;
      },
    };
    items[4] = {
      no: 5,
      name: "header_localized",
      kind: "message",
      T() {
        return require("localized_string").LocalizedString;
      },
    };
    obj = { no: 6, name: "body_localized", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[4]).LocalizedString;
      }
    }
    obj.T = T;
    items[5] = obj;
    items[6] = {
      no: 7,
      name: "help_article",
      kind: "message",
      T() {
        return require("help_article").HelpArticle;
      },
    };
    tmp = new tmp("discord_protos.premium_marketing.v1.BillingSettingsBanner", items, T);
    return tmp;
  }
}
let prototype = BillingSettingsBanner$Type.prototype;
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
        obj.header = pos.string();
      } else if (2 === tmp5) {
        obj.body = pos.string();
      } else if (3 === tmp5) {
        let ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
        obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
      } else if (4 === tmp5) {
        let CTAButton = cta_button.CTAButton;
        obj.button = CTAButton.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.button);
      } else if (5 === tmp5) {
        let LocalizedString2 = localized_string.LocalizedString;
        obj.headerLocalized = LocalizedString2.internalBinaryRead(
          pos,
          pos.uint32(),
          readUnknownField,
          obj.headerLocalized,
        );
      } else if (6 === tmp5) {
        let LocalizedString = localized_string.LocalizedString;
        obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
      } else if (7 === tmp5) {
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(header, tag, writeUnknownFields) {
  if ("" !== header.header) {
    tag.tag(1, _mod1188.WireType.LengthDelimited).string(header.header);
    const tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
  }
  if ("" !== header.body) {
    tag.tag(2, _mod1188.WireType.LengthDelimited).string(header.body);
    const tagResult1 = tag.tag(2, _mod1188.WireType.LengthDelimited);
  }
  if (header.asset) {
    const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
    const tagResult2 = tag.tag(3, _mod1188.WireType.LengthDelimited);
    const joined = ThemeAwareAsset.internalBinaryWrite(
      header.asset,
      tag.tag(3, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(
      header.asset,
      tag.tag(3, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (header.button) {
    const CTAButton = cta_button.CTAButton;
    const tagResult3 = tag.tag(4, _mod1188.WireType.LengthDelimited);
    const joined1 = CTAButton.internalBinaryWrite(
      header.button,
      tag.tag(4, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = CTAButton.internalBinaryWrite(
      header.button,
      tag.tag(4, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (header.headerLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult4 = tag.tag(5, _mod1188.WireType.LengthDelimited);
    const joined2 = LocalizedString.internalBinaryWrite(
      header.headerLocalized,
      tag.tag(5, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult2 = LocalizedString.internalBinaryWrite(
      header.headerLocalized,
      tag.tag(5, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (header.bodyLocalized) {
    const LocalizedString2 = localized_string.LocalizedString;
    const tagResult5 = tag.tag(6, _mod1188.WireType.LengthDelimited);
    const joined3 = LocalizedString2.internalBinaryWrite(
      header.bodyLocalized,
      tag.tag(6, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult3 = LocalizedString2.internalBinaryWrite(
      header.bodyLocalized,
      tag.tag(6, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (header.helpArticle) {
    const HelpArticle = help_article.HelpArticle;
    const tagResult6 = tag.tag(7, _mod1188.WireType.LengthDelimited);
    const joined4 = HelpArticle.internalBinaryWrite(
      header.helpArticle,
      tag.tag(7, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult4 = HelpArticle.internalBinaryWrite(
      header.helpArticle,
      tag.tag(7, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
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
      return require("theme_aware_asset").ThemeAwareAsset;
    },
  },
  {
    no: 4,
    name: "button",
    kind: "message",
    T() {
      return require("cta_button").CTAButton;
    },
  },
  {
    no: 5,
    name: "header_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    },
  },
  ,
];
let obj = { no: 6, name: "body_localized", kind: "message", T: null };
class T {
  constructor() {
    return closure_1_0(closure_1_1[4]).LocalizedString;
  }
}
obj.T = T;
items[5] = obj;
items[6] = {
  no: 7,
  name: "help_article",
  kind: "message",
  T() {
    return require("help_article").HelpArticle;
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
const size = fn(2);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/billing_settings_banner.tsx",
);

export const BillingSettingsBanner = prototype;
