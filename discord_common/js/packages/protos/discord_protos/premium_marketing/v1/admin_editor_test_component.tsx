// === Module 8484: create ===

// Module 8484 (create)
import _mod1306 from "module_1306" /* 1306 */;
import create from "create" /* 8462 */;
import create2 from "create" /* 8463 */;
import create3 from "create" /* 8464 */;
import create4 from "create" /* 8472 */;
import closure_2 from "_slicedToArray" /* 32 */;
import { MessageType } from "module_1306" /* 1306 */;

require = arg1;
class AdminEditorTestComponent$Type extends MessageType {
  constructor() {
    items = [, , , , , , , , ];
    items[0] = { no: 1, name: "deprecated_field", kind: "scalar", T: 9 };
    items[1] = {
      no: 2,
      name: "localized_text_field",
      kind: "message",
      T() {
            return callback(8462).LocalizedString;
          }
    };
    items[2] = { no: 3, name: "plain_text_field", kind: "scalar", T: 9 };
    items[3] = {
      no: 4,
      name: "textarea_field",
      kind: "message",
      T() {
            return callback(8462).LocalizedString;
          }
    };
    items[4] = { no: 5, name: "checkbox_field", kind: "scalar", T: 8 };
    items[5] = { no: 6, name: "asset_field", kind: "scalar", T: 9 };
    items[6] = {
      no: 7,
      name: "themed_asset_field",
      kind: "message",
      T() {
            return callback(8472).ThemeAwareAsset;
          }
    };
    obj = { no: 8, name: "help_article_field", kind: "message", T: null };
    class T {
      constructor() {
        return require("create").HelpArticle;
      }
    }
    obj[3] = T;
    items[7] = obj;
    items[8] = {
      no: 9,
      name: "cta_field",
      kind: "message",
      T() {
            return callback(8464).CTAButton;
          }
    };
    tmp = new tmp("discord_protos.premium_marketing.v1.AdminEditorTestComponent", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
let prototype = AdminEditorTestComponent$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { deprecatedField: "", plainTextField: "", checkboxField: false, assetField: "" };
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
        obj.deprecatedField = pos.string();
      } else if (2 === tmp5) {
        let tmp42 = require;
        let tmp43 = dependencyMap;
        let LocalizedString2 = create.LocalizedString;
        let tmp44 = LocalizedString2;
        let tmp45 = pos;
        let tmp46 = readUnknownField;
        obj.localizedTextField = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.localizedTextField);
      } else if (3 === tmp5) {
        obj.plainTextField = pos.string();
      } else if (4 === tmp5) {
        let tmp37 = require;
        let tmp38 = dependencyMap;
        let LocalizedString = create.LocalizedString;
        let tmp39 = LocalizedString;
        let tmp40 = pos;
        let tmp41 = readUnknownField;
        obj.textareaField = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.textareaField);
      } else if (5 === tmp5) {
        obj.checkboxField = pos.bool();
      } else if (6 === tmp5) {
        obj.assetField = pos.string();
      } else if (7 === tmp5) {
        let tmp32 = require;
        let tmp33 = dependencyMap;
        let ThemeAwareAsset = create4.ThemeAwareAsset;
        let tmp34 = ThemeAwareAsset;
        let tmp35 = pos;
        let tmp36 = readUnknownField;
        obj.themedAssetField = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.themedAssetField);
      } else if (8 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let HelpArticle = create2.HelpArticle;
        let tmp29 = HelpArticle;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.helpArticleField = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.helpArticleField);
      } else if (9 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let CTAButton = create3.CTAButton;
        let tmp24 = CTAButton;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(deprecatedField, tag, writeUnknownFields) {
  if ("" !== deprecatedField.deprecatedField) {
    tag.tag(1, _mod1306.WireType.LengthDelimited).string(deprecatedField.deprecatedField);
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
  }
  if (deprecatedField.localizedTextField) {
    const LocalizedString = create.LocalizedString;
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    const joined = LocalizedString.internalBinaryWrite(deprecatedField.localizedTextField, tag.tag(2, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(deprecatedField.localizedTextField, tag.tag(2, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== deprecatedField.plainTextField) {
    tag.tag(3, _mod1306.WireType.LengthDelimited).string(deprecatedField.plainTextField);
    const tagResult2 = tag.tag(3, _mod1306.WireType.LengthDelimited);
  }
  if (deprecatedField.textareaField) {
    const LocalizedString2 = create.LocalizedString;
    const tagResult3 = tag.tag(4, _mod1306.WireType.LengthDelimited);
    const joined1 = LocalizedString2.internalBinaryWrite(deprecatedField.textareaField, tag.tag(4, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = LocalizedString2.internalBinaryWrite(deprecatedField.textareaField, tag.tag(4, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (false !== deprecatedField.checkboxField) {
    tag.tag(5, _mod1306.WireType.Varint).bool(deprecatedField.checkboxField);
    const tagResult4 = tag.tag(5, _mod1306.WireType.Varint);
  }
  if ("" !== deprecatedField.assetField) {
    tag.tag(6, _mod1306.WireType.LengthDelimited).string(deprecatedField.assetField);
    const tagResult5 = tag.tag(6, _mod1306.WireType.LengthDelimited);
  }
  if (deprecatedField.themedAssetField) {
    const ThemeAwareAsset = create4.ThemeAwareAsset;
    const tagResult6 = tag.tag(7, _mod1306.WireType.LengthDelimited);
    const joined2 = ThemeAwareAsset.internalBinaryWrite(deprecatedField.themedAssetField, tag.tag(7, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = ThemeAwareAsset.internalBinaryWrite(deprecatedField.themedAssetField, tag.tag(7, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (deprecatedField.helpArticleField) {
    const HelpArticle = create2.HelpArticle;
    const tagResult7 = tag.tag(8, _mod1306.WireType.LengthDelimited);
    const joined3 = HelpArticle.internalBinaryWrite(deprecatedField.helpArticleField, tag.tag(8, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = HelpArticle.internalBinaryWrite(deprecatedField.helpArticleField, tag.tag(8, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (deprecatedField.ctaField) {
    const CTAButton = create3.CTAButton;
    const tagResult8 = tag.tag(9, _mod1306.WireType.LengthDelimited);
    const joined4 = CTAButton.internalBinaryWrite(deprecatedField.ctaField, tag.tag(9, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = CTAButton.internalBinaryWrite(deprecatedField.ctaField, tag.tag(9, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
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
      return callback(8462).LocalizedString;
    }
  },
  { no: 3, name: "plain_text_field", kind: "scalar", T: 9 },
  {
    no: 4,
    name: "textarea_field",
    kind: "message",
    T() {
      return callback(8462).LocalizedString;
    }
  },
  { no: 5, name: "checkbox_field", kind: "scalar", T: 8 },
  { no: 6, name: "asset_field", kind: "scalar", T: 9 },
  {
    no: 7,
    name: "themed_asset_field",
    kind: "message",
    T() {
      return callback(8472).ThemeAwareAsset;
    }
  },
,

];
let obj = { no: 8, name: "help_article_field", kind: "message", T: null };
class T {
  constructor() {
    return require("create").HelpArticle;
  }
}
obj[3] = T;
items[7] = obj;
items[8] = {
  no: 9,
  name: "cta_field",
  kind: "message",
  T() {
    return callback(8464).CTAButton;
  }
};
prototype = new prototype("discord_protos.premium_marketing.v1.AdminEditorTestComponent", items, tmp, T, AdminEditorTestComponent$Type, prototype, items);
// ThrowIfThisInitialized (0x7c)
let result = require("set").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/admin_editor_test_component.tsx");

export const AdminEditorTestComponent = prototype;