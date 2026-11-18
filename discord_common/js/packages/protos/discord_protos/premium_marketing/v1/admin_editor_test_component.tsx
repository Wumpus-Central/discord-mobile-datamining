// === Module 9078: admin_editor_test_component ===

// Module 9078 (admin_editor_test_component)
import _mod1197 from "module_1197" /* 1197 */;
import localized_string from "localized_string" /* 9056 */;
import help_article from "help_article" /* 9057 */;
import cta_button from "cta_button" /* 9058 */;
import gradient from "gradient" /* 9064 */;
import theme_aware_asset from "theme_aware_asset" /* 9066 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const AdminEditorTestSelectOption = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", FIRST: 1, [1]: "FIRST", SECOND: 2, [2]: "SECOND" };
const MessageType = fn(1197).MessageType;
class AdminEditorTestComponent$Type extends MessageType {
  constructor() {
    items = [, , , , , , , , , , , , ];
    items[0] = { no: 1, name: "deprecated_field", kind: "scalar", T: 9 };
    items[1] = {
      no: 2,
      name: "localized_text_field",
      kind: "message",
      T() {
            return localized_string.LocalizedString;
          }
    };
    items[2] = { no: 3, name: "plain_text_field", kind: "scalar", T: 9 };
    items[3] = {
      no: 4,
      name: "textarea_field",
      kind: "message",
      T() {
            return localized_string.LocalizedString;
          }
    };
    items[4] = { no: 5, name: "checkbox_field", kind: "scalar", T: 8 };
    items[5] = { no: 6, name: "asset_field", kind: "scalar", T: 9 };
    items[6] = {
      no: 7,
      name: "themed_asset_field",
      kind: "message",
      T() {
            return theme_aware_asset.ThemeAwareAsset;
          }
    };
    items[7] = {
      no: 8,
      name: "help_article_field",
      kind: "message",
      T() {
            return help_article.HelpArticle;
          }
    };
    items[8] = {
      no: 9,
      name: "cta_field",
      kind: "message",
      T() {
            return cta_button.CTAButton;
          }
    };
    items[9] = {
      no: 10,
      name: "gradient_field",
      kind: "message",
      T() {
            return gradient.Gradient;
          }
    };
    items[10] = {
      no: 11,
      name: "select_field",
      kind: "enum",
      T() {
            items = ["discord_protos.premium_marketing.v1.AdminEditorTestSelectOption", AdminEditorTestSelectOption, "ADMIN_EDITOR_TEST_SELECT_OPTION_"];
            return items;
          }
    };
    obj = { no: 12, name: "multi_select_field", kind: "enum", repeat: 1, T: null };
    class T {
      constructor() {
        items = ["discord_protos.premium_marketing.v1.AdminEditorTestSelectOption"];
        items[1] = closure_1_3;
        items[2] = "ADMIN_EDITOR_TEST_SELECT_OPTION_";
        return items;
      }
    }
    obj.T = T;
    items[11] = obj;
    items[12] = {
      no: 13,
      name: "list_field",
      kind: "message",
      repeat: 1,
      T() {
            return closure_1_4;
          }
    };
    tmp1 = new tmp("discord_protos.premium_marketing.v1.AdminEditorTestComponent", items, T);
    return tmp1;
  }
}
const prototype = AdminEditorTestComponent$Type.prototype;
prototype["create"] = function create(partialSettings) {
  const obj = { deprecatedField: "", plainTextField: "", checkboxField: false, assetField: "", selectField: 0, multiSelectField: [], listField: [] };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1197.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1197.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1197;
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
  let length2;
  if ("" !== deprecatedField.deprecatedField) {
    tag.tag(1, _mod1197.WireType.LengthDelimited).string(deprecatedField.deprecatedField);
    const tagResult = tag.tag(1, _mod1197.WireType.LengthDelimited);
  }
  if (deprecatedField.localizedTextField) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult1 = tag.tag(2, _mod1197.WireType.LengthDelimited);
    const joined = LocalizedString.internalBinaryWrite(deprecatedField.localizedTextField, tag.tag(2, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(deprecatedField.localizedTextField, tag.tag(2, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== deprecatedField.plainTextField) {
    tag.tag(3, _mod1197.WireType.LengthDelimited).string(deprecatedField.plainTextField);
    const tagResult2 = tag.tag(3, _mod1197.WireType.LengthDelimited);
  }
  if (deprecatedField.textareaField) {
    const LocalizedString2 = localized_string.LocalizedString;
    const tagResult3 = tag.tag(4, _mod1197.WireType.LengthDelimited);
    const joined1 = LocalizedString2.internalBinaryWrite(deprecatedField.textareaField, tag.tag(4, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = LocalizedString2.internalBinaryWrite(deprecatedField.textareaField, tag.tag(4, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (false !== deprecatedField.checkboxField) {
    tag.tag(5, _mod1197.WireType.Varint).bool(deprecatedField.checkboxField);
    const tagResult4 = tag.tag(5, _mod1197.WireType.Varint);
  }
  if ("" !== deprecatedField.assetField) {
    tag.tag(6, _mod1197.WireType.LengthDelimited).string(deprecatedField.assetField);
    const tagResult5 = tag.tag(6, _mod1197.WireType.LengthDelimited);
  }
  if (deprecatedField.themedAssetField) {
    const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
    const tagResult6 = tag.tag(7, _mod1197.WireType.LengthDelimited);
    const joined2 = ThemeAwareAsset.internalBinaryWrite(deprecatedField.themedAssetField, tag.tag(7, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = ThemeAwareAsset.internalBinaryWrite(deprecatedField.themedAssetField, tag.tag(7, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (deprecatedField.helpArticleField) {
    const HelpArticle = help_article.HelpArticle;
    const tagResult7 = tag.tag(8, _mod1197.WireType.LengthDelimited);
    const joined3 = HelpArticle.internalBinaryWrite(deprecatedField.helpArticleField, tag.tag(8, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = HelpArticle.internalBinaryWrite(deprecatedField.helpArticleField, tag.tag(8, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (deprecatedField.ctaField) {
    const CTAButton = cta_button.CTAButton;
    const tagResult8 = tag.tag(9, _mod1197.WireType.LengthDelimited);
    const joined4 = CTAButton.internalBinaryWrite(deprecatedField.ctaField, tag.tag(9, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = CTAButton.internalBinaryWrite(deprecatedField.ctaField, tag.tag(9, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (deprecatedField.gradientField) {
    const Gradient = gradient.Gradient;
    const tagResult9 = tag.tag(10, _mod1197.WireType.LengthDelimited);
    const joined5 = Gradient.internalBinaryWrite(deprecatedField.gradientField, tag.tag(10, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult5 = Gradient.internalBinaryWrite(deprecatedField.gradientField, tag.tag(10, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (0 !== deprecatedField.selectField) {
    tag.tag(11, _mod1197.WireType.Varint).int32(deprecatedField.selectField);
    const tagResult10 = tag.tag(11, _mod1197.WireType.Varint);
  }
  if (deprecatedField.multiSelectField.length) {
    tag.tag(12, _mod1197.WireType.LengthDelimited).fork();
    let num14 = 0;
    if (0 < deprecatedField.multiSelectField.length) {
      do {
        let int32Result1 = tag.int32(deprecatedField.multiSelectField[num14]);
        num14 = num14 + 1;
        length = deprecatedField.multiSelectField.length;
      } while (num14 < length);
    }
    const joined6 = tag.join();
    const tagResult11 = tag.tag(12, _mod1197.WireType.LengthDelimited);
  }
  let num15 = 0;
  if (0 < deprecatedField.listField.length) {
    do {
      let tagResult12 = tag.tag(13, _mod1197.WireType.LengthDelimited);
      let internalBinaryWriteResult6 = closure_4.internalBinaryWrite(deprecatedField.listField[num15], tagResult12.fork(), writeUnknownFields);
      let joined7 = internalBinaryWriteResult6.join();
      num15 = num15 + 1;
      length2 = deprecatedField.listField.length;
    } while (num15 < length2);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1197.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, deprecatedField, tag);
  }
  return tag;
};
const adminEditorTestComponentType = new AdminEditorTestComponent$Type();
const MessageType2 = fn(1197).MessageType;
class AdminEditorTestListItem$Type extends MessageType2 {
  constructor() {
    obj = {
      no: 1,
      name: "text_localized",
      kind: "message",
      T() {
            return localized_string.LocalizedString;
          }
    };
    items = [, , ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "asset",
      kind: "message",
      T() {
            return theme_aware_asset.ThemeAwareAsset;
          }
    };
    items[2] = { no: 3, name: "text", kind: "scalar", T: 9 };
    tmp1 = new tmp("discord_protos.premium_marketing.v1.AdminEditorTestListItem", items, new.target);
    return tmp1;
  }
}
const prototype2 = AdminEditorTestListItem$Type.prototype;
prototype2["create"] = function create(partialSettings) {
  const obj = { text: "" };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1197.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1197.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1197;
  }
  return obj;
};
prototype2["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
        let LocalizedString = localized_string.LocalizedString;
        obj.textLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.textLocalized);
      } else if (2 === tmp5) {
        let ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
        obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
      } else if (3 === tmp5) {
        obj.text = pos.string();
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
              onRead = _mod1197.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype2["internalBinaryWrite"] = function internalBinaryWrite(textLocalized, tag, writeUnknownFields) {
  if (textLocalized.textLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult = tag.tag(1, _mod1197.WireType.LengthDelimited);
    const joined = LocalizedString.internalBinaryWrite(textLocalized.textLocalized, tag.tag(1, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(textLocalized.textLocalized, tag.tag(1, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (textLocalized.asset) {
    const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
    const tagResult1 = tag.tag(2, _mod1197.WireType.LengthDelimited);
    const joined1 = ThemeAwareAsset.internalBinaryWrite(textLocalized.asset, tag.tag(2, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = ThemeAwareAsset.internalBinaryWrite(textLocalized.asset, tag.tag(2, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== textLocalized.text) {
    tag.tag(3, _mod1197.WireType.LengthDelimited).string(textLocalized.text);
    const tagResult2 = tag.tag(3, _mod1197.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1197.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, textLocalized, tag);
  }
  return tag;
};
let items = [
  {
    no: 1,
    name: "text_localized",
    kind: "message",
    T() {
      return localized_string.LocalizedString;
    }
  },
  {
    no: 2,
    name: "asset",
    kind: "message",
    T() {
      return theme_aware_asset.ThemeAwareAsset;
    }
  },
  { no: 3, name: "text", kind: "scalar", T: 9 }
];
const tmp5 = new "internalBinaryRead"("discord_protos.premium_marketing.v1.AdminEditorTestListItem", items, tmp2, "create", AdminEditorTestListItem$Type, "internalBinaryRead", items, new.target, tmp, fn, dependencyMap);
let closure_4 = tmp5;
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/admin_editor_test_component.tsx");

export { AdminEditorTestSelectOption };
export const AdminEditorTestComponent = adminEditorTestComponentType;
export const AdminEditorTestListItem = tmp5;