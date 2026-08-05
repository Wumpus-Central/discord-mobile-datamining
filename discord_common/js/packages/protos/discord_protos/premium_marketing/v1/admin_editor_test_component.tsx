// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/admin_editor_test_component.tsx
import _slicedToArray from "_slicedToArray";
import { MessageType } from "module_1307";
import { 01307__ } from "../../../../../../../_runtime/metro/01307__.js";
import { create } from "../../common/v1/localized_string.tsx";

const require = arg1;
class AdminEditorTestComponent$Type extends MessageType {
  constructor() {
    items = [, , , , , ];
    items[0] = { no: 1, name: "deprecated_field", kind: "scalar", T: 9 };
    obj = { no: 2, name: "localized_text_field", kind: "message", T: null };
    class T {
      constructor() {
        return require("create").LocalizedString;
      }
    }
    obj[3] = T;
    items[1] = obj;
    items[2] = { no: 3, name: "plain_text_field", kind: "scalar", T: 9 };
    items[3] = {
      no: 4,
      name: "textarea_field",
      kind: "message",
      T() {
            return callback(7272).LocalizedString;
          }
    };
    items[4] = { no: 5, name: "checkbox_field", kind: "scalar", T: 8 };
    items[5] = { no: 6, name: "asset_field", kind: "scalar", T: 9 };
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
        obj.deprecatedField = pos.string();
      } else if (2 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let LocalizedString2 = create.LocalizedString;
        let tmp29 = LocalizedString2;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.localizedTextField = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.localizedTextField);
      } else if (3 === tmp5) {
        obj.plainTextField = pos.string();
      } else if (4 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let LocalizedString = create.LocalizedString;
        let tmp24 = LocalizedString;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.textareaField = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.textareaField);
      } else if (5 === tmp5) {
        obj.checkboxField = pos.bool();
      } else if (6 === tmp5) {
        obj.assetField = pos.string();
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(deprecatedField, tag, writeUnknownFields) {
  if ("" !== deprecatedField.deprecatedField) {
    tag.tag(1, 01307__.WireType.LengthDelimited).string(deprecatedField.deprecatedField);
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
  }
  if (deprecatedField.localizedTextField) {
    const LocalizedString = create.LocalizedString;
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined = LocalizedString.internalBinaryWrite(deprecatedField.localizedTextField, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(deprecatedField.localizedTextField, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== deprecatedField.plainTextField) {
    tag.tag(3, 01307__.WireType.LengthDelimited).string(deprecatedField.plainTextField);
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
  }
  if (deprecatedField.textareaField) {
    const LocalizedString2 = create.LocalizedString;
    const tagResult3 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined1 = LocalizedString2.internalBinaryWrite(deprecatedField.textareaField, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = LocalizedString2.internalBinaryWrite(deprecatedField.textareaField, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (false !== deprecatedField.checkboxField) {
    tag.tag(5, 01307__.WireType.Varint).bool(deprecatedField.checkboxField);
    const tagResult4 = tag.tag(5, 01307__.WireType.Varint);
  }
  if ("" !== deprecatedField.assetField) {
    tag.tag(6, 01307__.WireType.LengthDelimited).string(deprecatedField.assetField);
    const tagResult5 = tag.tag(6, 01307__.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, deprecatedField, tag);
  }
  return tag;
};
let items = [{ no: 1, name: "deprecated_field", kind: "scalar", T: 9 }, , , , , ];
let obj = { no: 2, name: "localized_text_field", kind: "message", T: null };
class T {
  constructor() {
    return require("create").LocalizedString;
  }
}
obj[3] = T;
items[1] = obj;
items[2] = { no: 3, name: "plain_text_field", kind: "scalar", T: 9 };
items[3] = {
  no: 4,
  name: "textarea_field",
  kind: "message",
  T() {
    return callback(7272).LocalizedString;
  }
};
items[4] = { no: 5, name: "checkbox_field", kind: "scalar", T: 8 };
items[5] = { no: 6, name: "asset_field", kind: "scalar", T: 9 };
prototype = new prototype("discord_protos.premium_marketing.v1.AdminEditorTestComponent", items, tmp, T, AdminEditorTestComponent$Type, prototype, items);
// ThrowIfThisInitialized (0x7c)
let result = require("create").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/admin_editor_test_component.tsx");

export const AdminEditorTestComponent = prototype;