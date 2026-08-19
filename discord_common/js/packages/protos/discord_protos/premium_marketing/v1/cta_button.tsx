// === Module 7635: create ===

// Module 7635 (create)
import _mod1307 from "module_1307" /* 1307 */;
import defineProperty from "defineProperty" /* 1337 */;
import create from "create" /* 7633 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import { MessageType } from "module_1307" /* 1307 */;

require = fn;
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
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1307.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1307.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1307;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        obj.copy = pos.string();
      } else if (2 === tmp5) {
        obj.buttonAction = pos.int32();
      } else if (3 === tmp5) {
        obj.deeplinkSection = pos.string();
      } else if (4 === tmp5) {
        let LocalizedString = create.LocalizedString;
        obj.copyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.copyLocalized);
      } else if (5 === tmp5) {
        let UInt64Value = defineProperty.UInt64Value;
        obj.navigableStorefrontApplicationId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.navigableStorefrontApplicationId);
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              onRead = _mod1307.UnknownFieldHandler.onRead;
            }
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
    tag.tag(1, _mod1307.WireType.LengthDelimited).string(copy.copy);
    const tagResult = tag.tag(1, _mod1307.WireType.LengthDelimited);
  }
  if (0 !== copy.buttonAction) {
    tag.tag(2, _mod1307.WireType.Varint).int32(copy.buttonAction);
    const tagResult1 = tag.tag(2, _mod1307.WireType.Varint);
  }
  if ("" !== copy.deeplinkSection) {
    tag.tag(3, _mod1307.WireType.LengthDelimited).string(copy.deeplinkSection);
    const tagResult2 = tag.tag(3, _mod1307.WireType.LengthDelimited);
  }
  if (copy.copyLocalized) {
    const LocalizedString = create.LocalizedString;
    const tagResult3 = tag.tag(4, _mod1307.WireType.LengthDelimited);
    const joined = LocalizedString.internalBinaryWrite(copy.copyLocalized, tag.tag(4, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(copy.copyLocalized, tag.tag(4, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (copy.navigableStorefrontApplicationId) {
    const UInt64Value = defineProperty.UInt64Value;
    const tagResult4 = tag.tag(5, _mod1307.WireType.LengthDelimited);
    const joined1 = UInt64Value.internalBinaryWrite(copy.navigableStorefrontApplicationId, tag.tag(5, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = UInt64Value.internalBinaryWrite(copy.navigableStorefrontApplicationId, tag.tag(5, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1307.UnknownFieldHandler.onWrite;
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
prototype = new prototype("discord_protos.premium_marketing.v1.CTAButton", items, tmp, T, CTAButton$Type, prototype, items, fn, dependencyMap);
// ThrowIfThisInitialized (0x7c)
let result = require("obj132").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/cta_button.tsx");

export const ButtonAction = obj;
export const CTAButton = prototype;