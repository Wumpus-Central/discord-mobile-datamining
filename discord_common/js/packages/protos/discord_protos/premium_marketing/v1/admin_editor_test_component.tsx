// === Module 10841: admin_editor_test_component ===

// Module 10841 (admin_editor_test_component)
import _mod1187 from "module_1187" /* 1187 */;
import localized_string from "localized_string" /* 10819 */;
import help_article from "help_article" /* 10820 */;
import cta_button from "cta_button" /* 10821 */;
import gradient from "gradient" /* 10827 */;
import theme_aware_asset from "theme_aware_asset" /* 10829 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const MessageType = fn(1187).MessageType;
class AdminEditorTestComponent$Type extends MessageType {
  constructor() {
    items = [, , , , , , , , , ];
    items[0] = { no: 1, name: "deprecated_field", kind: "scalar", T: 9 };
    items[1] = {
      no: 2,
      name: "localized_text_field",
      kind: "message",
      T() {
            return require("localized_string").LocalizedString;
          }
    };
    items[2] = { no: 3, name: "plain_text_field", kind: "scalar", T: 9 };
    items[3] = {
      no: 4,
      name: "textarea_field",
      kind: "message",
      T() {
            return require("localized_string").LocalizedString;
          }
    };
    items[4] = { no: 5, name: "checkbox_field", kind: "scalar", T: 8 };
    items[5] = { no: 6, name: "asset_field", kind: "scalar", T: 9 };
    items[6] = {
      no: 7,
      name: "themed_asset_field",
      kind: "message",
      T() {
            return require("theme_aware_asset").ThemeAwareAsset;
          }
    };
    items[7] = {
      no: 8,
      name: "help_article_field",
      kind: "message",
      T() {
            return require("help_article").HelpArticle;
          }
    };
    obj = { no: 9, name: "cta_field", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[5]).CTAButton;
      }
    }
    obj.T = T;
    items[8] = obj;
    items[9] = {
      no: 10,
      name: "gradient_field",
      kind: "message",
      T() {
            return require("gradient").Gradient;
          }
    };
    tmp1 = new tmp("discord_protos.premium_marketing.v1.AdminEditorTestComponent", items, T);
    return tmp1;
  }
}
const prototype = AdminEditorTestComponent$Type.prototype;
prototype["create"] = function create(arr) {
  const obj = { deprecatedField: "", plainTextField: "", checkboxField: false, assetField: "" };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1187.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1187.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1187;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos, arg1, arg2, arg3) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  if (pos.pos < pos.pos + arg1) {
    [r10019, r10020] = pos.tag();
    const tmp3 = _slicedToArray(pos.tag(), 2);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(deprecatedField, tag, writeUnknownFields) {
  if ("" !== deprecatedField.deprecatedField) {
    tag.tag(1, _mod1187.WireType.LengthDelimited).string(deprecatedField.deprecatedField);
    const tagResult = tag.tag(1, _mod1187.WireType.LengthDelimited);
  }
  if (deprecatedField.localizedTextField) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult1 = tag.tag(2, _mod1187.WireType.LengthDelimited);
    const joined = LocalizedString.internalBinaryWrite(deprecatedField.localizedTextField, tag.tag(2, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(deprecatedField.localizedTextField, tag.tag(2, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== deprecatedField.plainTextField) {
    tag.tag(3, _mod1187.WireType.LengthDelimited).string(deprecatedField.plainTextField);
    const tagResult2 = tag.tag(3, _mod1187.WireType.LengthDelimited);
  }
  if (deprecatedField.textareaField) {
    const LocalizedString2 = localized_string.LocalizedString;
    const tagResult3 = tag.tag(4, _mod1187.WireType.LengthDelimited);
    const joined1 = LocalizedString2.internalBinaryWrite(deprecatedField.textareaField, tag.tag(4, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = LocalizedString2.internalBinaryWrite(deprecatedField.textareaField, tag.tag(4, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (false !== deprecatedField.checkboxField) {
    tag.tag(5, _mod1187.WireType.Varint).bool(deprecatedField.checkboxField);
    const tagResult4 = tag.tag(5, _mod1187.WireType.Varint);
  }
  if ("" !== deprecatedField.assetField) {
    tag.tag(6, _mod1187.WireType.LengthDelimited).string(deprecatedField.assetField);
    const tagResult5 = tag.tag(6, _mod1187.WireType.LengthDelimited);
  }
  if (deprecatedField.themedAssetField) {
    const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
    const tagResult6 = tag.tag(7, _mod1187.WireType.LengthDelimited);
    const joined2 = ThemeAwareAsset.internalBinaryWrite(deprecatedField.themedAssetField, tag.tag(7, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = ThemeAwareAsset.internalBinaryWrite(deprecatedField.themedAssetField, tag.tag(7, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (deprecatedField.helpArticleField) {
    const HelpArticle = help_article.HelpArticle;
    const tagResult7 = tag.tag(8, _mod1187.WireType.LengthDelimited);
    const joined3 = HelpArticle.internalBinaryWrite(deprecatedField.helpArticleField, tag.tag(8, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = HelpArticle.internalBinaryWrite(deprecatedField.helpArticleField, tag.tag(8, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (deprecatedField.ctaField) {
    const CTAButton = cta_button.CTAButton;
    const tagResult8 = tag.tag(9, _mod1187.WireType.LengthDelimited);
    const joined4 = CTAButton.internalBinaryWrite(deprecatedField.ctaField, tag.tag(9, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = CTAButton.internalBinaryWrite(deprecatedField.ctaField, tag.tag(9, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (deprecatedField.gradientField) {
    const Gradient = gradient.Gradient;
    const tagResult9 = tag.tag(10, _mod1187.WireType.LengthDelimited);
    const joined5 = Gradient.internalBinaryWrite(deprecatedField.gradientField, tag.tag(10, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult5 = Gradient.internalBinaryWrite(deprecatedField.gradientField, tag.tag(10, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
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
    }
  },
  { no: 3, name: "plain_text_field", kind: "scalar", T: 9 },
  {
    no: 4,
    name: "textarea_field",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    }
  },
  { no: 5, name: "checkbox_field", kind: "scalar", T: 8 },
  { no: 6, name: "asset_field", kind: "scalar", T: 9 },
  {
    no: 7,
    name: "themed_asset_field",
    kind: "message",
    T() {
      return require("theme_aware_asset").ThemeAwareAsset;
    }
  },
  {
    no: 8,
    name: "help_article_field",
    kind: "message",
    T() {
      return require("help_article").HelpArticle;
    }
  },
,

];
let obj = { no: 9, name: "cta_field", kind: "message", T: null };
class T {
  constructor() {
    return closure_1_0(closure_1_1[5]).CTAButton;
  }
}
obj.T = T;
items[8] = obj;
items[9] = {
  no: 10,
  name: "gradient_field",
  kind: "message",
  T() {
    return require("gradient").Gradient;
  }
};
const prototype1 = new prototype("discord_protos.premium_marketing.v1.AdminEditorTestComponent", items, tmp, T, AdminEditorTestComponent$Type, prototype, items);
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/admin_editor_test_component.tsx");

export const AdminEditorTestComponent = prototype1;