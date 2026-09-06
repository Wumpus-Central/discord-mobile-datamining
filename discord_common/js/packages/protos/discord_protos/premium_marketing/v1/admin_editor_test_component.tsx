// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/admin_editor_test_component.tsx
import _mod1188 from "../../../../../../../_runtime/metro/01188__.js";
import localized_string from "../../common/v1/localized_string.tsx";
import help_article from "help_article.tsx";
import cta_button from "cta_button.tsx";
import theme_aware_asset from "theme_aware_asset.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";

require = fn;
const MessageType = fn(1188).MessageType;
class AdminEditorTestComponent$Type extends MessageType {
  constructor() {
    items = [, , , , , , , ,];
    items[0] = { no: 1, name: "deprecated_field", kind: "scalar", T: 9 };
    items[1] = {
      no: 2,
      name: "localized_text_field",
      kind: "message",
      T() {
        return require("localized_string").LocalizedString;
      },
    };
    items[2] = { no: 3, name: "plain_text_field", kind: "scalar", T: 9 };
    items[3] = {
      no: 4,
      name: "textarea_field",
      kind: "message",
      T() {
        return require("localized_string").LocalizedString;
      },
    };
    items[4] = { no: 5, name: "checkbox_field", kind: "scalar", T: 8 };
    items[5] = { no: 6, name: "asset_field", kind: "scalar", T: 9 };
    items[6] = {
      no: 7,
      name: "themed_asset_field",
      kind: "message",
      T() {
        return require("theme_aware_asset").ThemeAwareAsset;
      },
    };
    obj = { no: 8, name: "help_article_field", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[4]).HelpArticle;
      }
    }
    obj.T = T;
    items[7] = obj;
    items[8] = {
      no: 9,
      name: "cta_field",
      kind: "message",
      T() {
        return require("cta_button").CTAButton;
      },
    };
    tmp = new tmp("discord_protos.premium_marketing.v1.AdminEditorTestComponent", items, T);
    return tmp;
  }
}
let prototype = AdminEditorTestComponent$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { deprecatedField: "", plainTextField: "", checkboxField: false, assetField: "" };
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
        obj.deprecatedField = pos.string();
      } else if (2 === tmp5) {
        let LocalizedString2 = localized_string.LocalizedString;
        obj.localizedTextField = LocalizedString2.internalBinaryRead(
          pos,
          pos.uint32(),
          readUnknownField,
          obj.localizedTextField,
        );
      } else if (3 === tmp5) {
        obj.plainTextField = pos.string();
      } else if (4 === tmp5) {
        let LocalizedString = localized_string.LocalizedString;
        obj.textareaField = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.textareaField);
      } else if (5 === tmp5) {
        obj.checkboxField = pos.bool();
      } else if (6 === tmp5) {
        obj.assetField = pos.string();
      } else if (7 === tmp5) {
        let ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
        obj.themedAssetField = ThemeAwareAsset.internalBinaryRead(
          pos,
          pos.uint32(),
          readUnknownField,
          obj.themedAssetField,
        );
      } else if (8 === tmp5) {
        let HelpArticle = help_article.HelpArticle;
        obj.helpArticleField = HelpArticle.internalBinaryRead(
          pos,
          pos.uint32(),
          readUnknownField,
          obj.helpArticleField,
        );
      } else if (9 === tmp5) {
        let CTAButton = cta_button.CTAButton;
        obj.ctaField = CTAButton.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.ctaField);
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(deprecatedField, tag, writeUnknownFields) {
  if ("" !== deprecatedField.deprecatedField) {
    tag.tag(1, _mod1188.WireType.LengthDelimited).string(deprecatedField.deprecatedField);
    const tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
  }
  if (deprecatedField.localizedTextField) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult1 = tag.tag(2, _mod1188.WireType.LengthDelimited);
    const joined = LocalizedString.internalBinaryWrite(
      deprecatedField.localizedTextField,
      tag.tag(2, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(
      deprecatedField.localizedTextField,
      tag.tag(2, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("" !== deprecatedField.plainTextField) {
    tag.tag(3, _mod1188.WireType.LengthDelimited).string(deprecatedField.plainTextField);
    const tagResult2 = tag.tag(3, _mod1188.WireType.LengthDelimited);
  }
  if (deprecatedField.textareaField) {
    const LocalizedString2 = localized_string.LocalizedString;
    const tagResult3 = tag.tag(4, _mod1188.WireType.LengthDelimited);
    const joined1 = LocalizedString2.internalBinaryWrite(
      deprecatedField.textareaField,
      tag.tag(4, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = LocalizedString2.internalBinaryWrite(
      deprecatedField.textareaField,
      tag.tag(4, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (false !== deprecatedField.checkboxField) {
    tag.tag(5, _mod1188.WireType.Varint).bool(deprecatedField.checkboxField);
    const tagResult4 = tag.tag(5, _mod1188.WireType.Varint);
  }
  if ("" !== deprecatedField.assetField) {
    tag.tag(6, _mod1188.WireType.LengthDelimited).string(deprecatedField.assetField);
    const tagResult5 = tag.tag(6, _mod1188.WireType.LengthDelimited);
  }
  if (deprecatedField.themedAssetField) {
    const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
    const tagResult6 = tag.tag(7, _mod1188.WireType.LengthDelimited);
    const joined2 = ThemeAwareAsset.internalBinaryWrite(
      deprecatedField.themedAssetField,
      tag.tag(7, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult2 = ThemeAwareAsset.internalBinaryWrite(
      deprecatedField.themedAssetField,
      tag.tag(7, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (deprecatedField.helpArticleField) {
    const HelpArticle = help_article.HelpArticle;
    const tagResult7 = tag.tag(8, _mod1188.WireType.LengthDelimited);
    const joined3 = HelpArticle.internalBinaryWrite(
      deprecatedField.helpArticleField,
      tag.tag(8, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult3 = HelpArticle.internalBinaryWrite(
      deprecatedField.helpArticleField,
      tag.tag(8, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (deprecatedField.ctaField) {
    const CTAButton = cta_button.CTAButton;
    const tagResult8 = tag.tag(9, _mod1188.WireType.LengthDelimited);
    const joined4 = CTAButton.internalBinaryWrite(
      deprecatedField.ctaField,
      tag.tag(9, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult4 = CTAButton.internalBinaryWrite(
      deprecatedField.ctaField,
      tag.tag(9, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, deprecatedField, tag);
  }
  return tag;
};
let items = [
  { no: 1, name: "deprecated_field", kind: "scalar", T: 9 },
  {
    no: 2,
    name: "localized_text_field",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    },
  },
  { no: 3, name: "plain_text_field", kind: "scalar", T: 9 },
  {
    no: 4,
    name: "textarea_field",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    },
  },
  { no: 5, name: "checkbox_field", kind: "scalar", T: 8 },
  { no: 6, name: "asset_field", kind: "scalar", T: 9 },
  {
    no: 7,
    name: "themed_asset_field",
    kind: "message",
    T() {
      return require("theme_aware_asset").ThemeAwareAsset;
    },
  },
  ,
];
let obj = { no: 8, name: "help_article_field", kind: "message", T: null };
class T {
  constructor() {
    return closure_1_0(closure_1_1[4]).HelpArticle;
  }
}
obj.T = T;
items[7] = obj;
items[8] = {
  no: 9,
  name: "cta_field",
  kind: "message",
  T() {
    return require("cta_button").CTAButton;
  },
};
prototype = new prototype(
  "discord_protos.premium_marketing.v1.AdminEditorTestComponent",
  items,
  tmp,
  T,
  AdminEditorTestComponent$Type,
  prototype,
  items,
);
const size = fn(2);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/admin_editor_test_component.tsx",
);

export const AdminEditorTestComponent = prototype;
