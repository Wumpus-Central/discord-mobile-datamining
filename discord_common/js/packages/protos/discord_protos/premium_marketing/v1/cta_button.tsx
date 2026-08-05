// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/cta_button.tsx
import _slicedToArray from "_slicedToArray";
import { MessageType } from "module_1307";
import { 01307__ } from "../../../../../../../_runtime/metro/01307__.js";
import { defineProperty } from "../../../google/protobuf/wrappers.tsx";
import { create } from "../../common/v1/localized_string.tsx";

const require = arg1;
let obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", OPEN_MARKETING_PAGE: 1, [1]: "OPEN_MARKETING_PAGE", OPEN_TIER_2_PAYMENT_MODAL: 2, [2]: "OPEN_TIER_2_PAYMENT_MODAL", OPEN_TIER_1_PAYMENT_MODAL: 3, [3]: "OPEN_TIER_1_PAYMENT_MODAL", OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER: 4, [4]: "OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER", OPEN_PLAN_SELECTION_MODAL: 5, [5]: "OPEN_PLAN_SELECTION_MODAL", OPEN_PREMIUM_GROUP_PAYMENT_MODAL: 6, [6]: "OPEN_PREMIUM_GROUP_PAYMENT_MODAL", OPEN_SOCIAL_LAYER_STOREFRONT: 7, [7]: "OPEN_SOCIAL_LAYER_STOREFRONT" };
class CTAButton$Type extends MessageType {
  constructor() {
    items = [, , , , ];
    items[0] = { no: 1, name: "copy", kind: "scalar", T: 9 };
    items[1] = {
      no: 2,
      name: "button_action",
      kind: "enum",
      T() {
            const items = ["discord_protos.premium_marketing.v1.ButtonAction", closure_3, "BUTTON_ACTION_"];
            return items;
          }
    };
    items[2] = { no: 3, name: "deeplink_section", kind: "scalar", T: 9 };
    obj = { no: 4, name: "copy_localized", kind: "message", T: null };
    class T {
      constructor() {
        return require("create").LocalizedString;
      }
    }
    obj[3] = T;
    items[3] = obj;
    items[4] = {
      no: 5,
      name: "navigable_storefront_application_id",
      kind: "message",
      T() {
            return callback(1337).UInt64Value;
          }
    };
    tmp = new tmp("discord_protos.premium_marketing.v1.CTAButton", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
let prototype = CTAButton$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { copy: "", buttonAction: 0, deeplinkSection: "" };
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
        obj.copy = pos.string();
      } else if (2 === tmp5) {
        obj.buttonAction = pos.int32();
      } else if (3 === tmp5) {
        obj.deeplinkSection = pos.string();
      } else if (4 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let LocalizedString = create.LocalizedString;
        let tmp29 = LocalizedString;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.copyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.copyLocalized);
      } else if (5 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let UInt64Value = defineProperty.UInt64Value;
        let tmp24 = UInt64Value;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.navigableStorefrontApplicationId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.navigableStorefrontApplicationId);
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(copy, tag, writeUnknownFields) {
  if ("" !== copy.copy) {
    tag.tag(1, 01307__.WireType.LengthDelimited).string(copy.copy);
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
  }
  if (0 !== copy.buttonAction) {
    tag.tag(2, 01307__.WireType.Varint).int32(copy.buttonAction);
    const tagResult1 = tag.tag(2, 01307__.WireType.Varint);
  }
  if ("" !== copy.deeplinkSection) {
    tag.tag(3, 01307__.WireType.LengthDelimited).string(copy.deeplinkSection);
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
  }
  if (copy.copyLocalized) {
    const LocalizedString = create.LocalizedString;
    const tagResult3 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined = LocalizedString.internalBinaryWrite(copy.copyLocalized, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(copy.copyLocalized, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (copy.navigableStorefrontApplicationId) {
    const UInt64Value = defineProperty.UInt64Value;
    const tagResult4 = tag.tag(5, 01307__.WireType.LengthDelimited);
    const joined1 = UInt64Value.internalBinaryWrite(copy.navigableStorefrontApplicationId, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = UInt64Value.internalBinaryWrite(copy.navigableStorefrontApplicationId, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, copy, tag);
  }
  return tag;
};
let items = [
  { no: 1, name: "copy", kind: "scalar", T: 9 },
  {
    no: 2,
    name: "button_action",
    kind: "enum",
    T() {
      const items = ["discord_protos.premium_marketing.v1.ButtonAction", closure_3, "BUTTON_ACTION_"];
      return items;
    }
  },
  { no: 3, name: "deeplink_section", kind: "scalar", T: 9 },
,

];
obj = { no: 4, name: "copy_localized", kind: "message", T: null };
class T {
  constructor() {
    return require("create").LocalizedString;
  }
}
obj[3] = T;
items[3] = obj;
items[4] = {
  no: 5,
  name: "navigable_storefront_application_id",
  kind: "message",
  T() {
    return callback(1337).UInt64Value;
  }
};
prototype = new prototype("discord_protos.premium_marketing.v1.CTAButton", items, tmp, T, CTAButton$Type, prototype, items, arg1, dependencyMap);
// ThrowIfThisInitialized (0x7c)
let result = require("create").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/cta_button.tsx");

export const ButtonAction = obj;
export const CTAButton = prototype;