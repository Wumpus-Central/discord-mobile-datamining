// === Module 10436: admin_editor_test_component ===

// Module 10436 (admin_editor_test_component)
import _mod1198 from "module_1198" /* 1198 */;
import localized_string from "localized_string" /* 10414 */;
import help_article from "help_article" /* 10415 */;
import cta_button from "cta_button" /* 10416 */;
import gradient from "gradient" /* 10422 */;
import theme_aware_asset from "theme_aware_asset" /* 10424 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3, internalBinaryWrite4, internalBinaryWrite5, internalBinaryWrite6;

const T2 = function T() {
  return require("localized_string").LocalizedString;
};
const T3 = function T() {
  return require("localized_string").LocalizedString;
};
const T4 = function T() {
  return require("theme_aware_asset").ThemeAwareAsset;
};
const T5 = function T() {
  return require("help_article").HelpArticle;
};
const T6 = function T() {
  return require("cta_button").CTAButton;
};
const T7 = function T() {
  const items = ["discord_protos.premium_marketing.v1.AdminEditorTestSelectOption", AdminEditorTestSelectOption, "ADMIN_EDITOR_TEST_SELECT_OPTION_"];
  return items;
};
const AdminEditorTestSelectOption = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", FIRST: 1, [1]: "FIRST", SECOND: 2, [2]: "SECOND" };
const MessageType = _mod1198.MessageType;
class AdminEditorTestComponent$Type extends MessageType {
  constructor() {
    let items = [{ no: 1, name: "deprecated_field", kind: "scalar", T: 9 }, { no: 2, name: "localized_text_field", kind: "message", T: T2 }, { no: 3, name: "plain_text_field", kind: "scalar", T: 9 }, { no: 4, name: "textarea_field", kind: "message", T: T3 }, { no: 5, name: "checkbox_field", kind: "scalar", T: 8 }, { no: 6, name: "asset_field", kind: "scalar", T: 9 }, { no: 7, name: "themed_asset_field", kind: "message", T: T4 }, { no: 8, name: "help_article_field", kind: "message", T: T5 }, { no: 9, name: "cta_field", kind: "message", T: T6 }, , ];
    const obj = { no: 10, name: "gradient_field", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[6]).Gradient;
      }
    }
    items[9] = obj;
    items[10] = { no: 11, name: "select_field", kind: "enum", T: T7 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.AdminEditorTestComponent", items, T);
    return tmp2;
  }
  create(arr) {
    const obj = { deprecatedField: "", plainTextField: "", checkboxField: false, assetField: "", selectField: 0 };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, arg2, arg3) {
    const self = this;
    let obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    if (pos.pos < pos.pos + arg1) {
      [r10019, r10020] = pos.tag();
      _slicedToArray(pos.tag(), 2);
    }
    return obj;
  }
  internalBinaryWrite(deprecatedField, tag, writeUnknownFields) {
    if ("" !== deprecatedField.deprecatedField) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(deprecatedField.deprecatedField);
    }
    if (deprecatedField.localizedTextField) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite = LocalizedString.internalBinaryWrite;
      const localizedTextField = deprecatedField.localizedTextField;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(localizedTextField, tagResult1.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if ("" !== deprecatedField.plainTextField) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      tagResult2.string(deprecatedField.plainTextField);
    }
    if (deprecatedField.textareaField) {
      const LocalizedString2 = localized_string.LocalizedString;
      internalBinaryWrite2 = LocalizedString2.internalBinaryWrite;
      const textareaField = deprecatedField.textareaField;
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(textareaField, tagResult3.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (false !== deprecatedField.checkboxField) {
      const tagResult4 = tag.tag(5, _mod1198.WireType.Varint);
      tagResult4.bool(deprecatedField.checkboxField);
    }
    if ("" !== deprecatedField.assetField) {
      const tagResult5 = tag.tag(6, _mod1198.WireType.LengthDelimited);
      tagResult5.string(deprecatedField.assetField);
    }
    if (deprecatedField.themedAssetField) {
      const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite3 = ThemeAwareAsset.internalBinaryWrite;
      const themedAssetField = deprecatedField.themedAssetField;
      const tagResult6 = tag.tag(7, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(themedAssetField, tagResult6.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if (deprecatedField.helpArticleField) {
      const HelpArticle = help_article.HelpArticle;
      internalBinaryWrite4 = HelpArticle.internalBinaryWrite;
      const helpArticleField = deprecatedField.helpArticleField;
      const tagResult7 = tag.tag(8, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(helpArticleField, tagResult7.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    if (deprecatedField.ctaField) {
      const CTAButton = cta_button.CTAButton;
      internalBinaryWrite5 = CTAButton.internalBinaryWrite;
      const ctaField = deprecatedField.ctaField;
      const tagResult8 = tag.tag(9, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(ctaField, tagResult8.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite5Result.join();
    }
    if (deprecatedField.gradientField) {
      const Gradient = gradient.Gradient;
      internalBinaryWrite6 = Gradient.internalBinaryWrite;
      const gradientField = deprecatedField.gradientField;
      const tagResult9 = tag.tag(10, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite6Result = internalBinaryWrite6(gradientField, tagResult9.fork(), writeUnknownFields);
      const joined5 = internalBinaryWrite6Result.join();
    }
    if (0 !== deprecatedField.selectField) {
      const tagResult10 = tag.tag(11, _mod1198.WireType.Varint);
      tagResult10.int32(deprecatedField.selectField);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, deprecatedField, tag);
    }
    return tag;
  }
}
const prototype = AdminEditorTestComponent$Type.prototype;
let items = [{ no: 1, name: "deprecated_field", kind: "scalar", T: 9 }, { no: 2, name: "localized_text_field", kind: "message", T: T2 }, { no: 3, name: "plain_text_field", kind: "scalar", T: 9 }, { no: 4, name: "textarea_field", kind: "message", T: T3 }, { no: 5, name: "checkbox_field", kind: "scalar", T: 8 }, { no: 6, name: "asset_field", kind: "scalar", T: 9 }, { no: 7, name: "themed_asset_field", kind: "message", T: T4 }, { no: 8, name: "help_article_field", kind: "message", T: T5 }, { no: 9, name: "cta_field", kind: "message", T: T6 }, , ];
let obj2 = { no: 10, name: "gradient_field", kind: "message", T };
class T {
  constructor() {
    return require("gradient").Gradient;
  }
}
items[9] = obj2;
items[10] = { no: 11, name: "select_field", kind: "enum", T: T7 };
const prototype1 = new prototype("discord_protos.premium_marketing.v1.AdminEditorTestComponent", items, tmp, T, AdminEditorTestComponent$Type, prototype, items, require, dependencyMap);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/admin_editor_test_component.tsx");

export { AdminEditorTestSelectOption };
export const AdminEditorTestComponent = prototype1;