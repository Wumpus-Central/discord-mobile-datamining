// === Module 9050: shop_nagbar ===

// Module 9050 (shop_nagbar)
import _mod1196 from "module_1196" /* 1196 */;
import wrappers from "wrappers" /* 1226 */;
import localized_string from "localized_string" /* 9028 */;
import help_article from "help_article" /* 9029 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const MessageType = fn(1196).MessageType;
class ShopNagbar$Type extends MessageType {
  constructor() {
    items = [, , , , , , , , , ];
    items[0] = { no: 1, name: "body", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "cta_label", kind: "scalar", T: 9 };
    items[2] = {
      no: 3,
      name: "cta_action",
      kind: "enum",
      T() {
            items = ["discord_protos.premium_marketing.v1.ButtonAction", require("cta_button").ButtonAction, "BUTTON_ACTION_"];
            return items;
          }
    };
    items[3] = { no: 4, name: "deeplink_section", kind: "scalar", T: 9 };
    items[4] = {
      no: 5,
      name: "help_article",
      kind: "message",
      T() {
            return require("help_article").HelpArticle;
          }
    };
    items[5] = {
      no: 6,
      name: "body_localized",
      kind: "message",
      T() {
            return require("localized_string").LocalizedString;
          }
    };
    items[6] = {
      no: 7,
      name: "cta_label_localized",
      kind: "message",
      T() {
            return require("localized_string").LocalizedString;
          }
    };
    items[7] = {
      no: 8,
      name: "navigable_storefront_application_id",
      kind: "message",
      T() {
            return require("wrappers").UInt64Value;
          }
    };
    obj = { no: 9, name: "shop_collection_id", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[5]).UInt64Value;
      }
    }
    obj.T = T;
    items[8] = obj;
    items[9] = {
      no: 10,
      name: "gift_modal_destination",
      kind: "enum",
      T() {
            items = ["discord_protos.premium_marketing.v1.GiftModalDestination", require("cta_button").GiftModalDestination, "GIFT_MODAL_DESTINATION_"];
            return items;
          }
    };
    tmp1 = new tmp("discord_protos.premium_marketing.v1.ShopNagbar", items, T);
    return tmp1;
  }
}
const prototype = ShopNagbar$Type.prototype;
prototype["create"] = function create(partialSettings) {
  const obj = { body: "", ctaLabel: "", ctaAction: 0, deeplinkSection: "", giftModalDestination: 0 };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1196.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1196.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1196;
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(body, tag, writeUnknownFields) {
  if ("" !== body.body) {
    tag.tag(1, _mod1196.WireType.LengthDelimited).string(body.body);
    const tagResult = tag.tag(1, _mod1196.WireType.LengthDelimited);
  }
  if ("" !== body.ctaLabel) {
    tag.tag(2, _mod1196.WireType.LengthDelimited).string(body.ctaLabel);
    const tagResult1 = tag.tag(2, _mod1196.WireType.LengthDelimited);
  }
  if (0 !== body.ctaAction) {
    tag.tag(3, _mod1196.WireType.Varint).int32(body.ctaAction);
    const tagResult2 = tag.tag(3, _mod1196.WireType.Varint);
  }
  if ("" !== body.deeplinkSection) {
    tag.tag(4, _mod1196.WireType.LengthDelimited).string(body.deeplinkSection);
    const tagResult3 = tag.tag(4, _mod1196.WireType.LengthDelimited);
  }
  if (body.helpArticle) {
    const HelpArticle = help_article.HelpArticle;
    const tagResult4 = tag.tag(5, _mod1196.WireType.LengthDelimited);
    const joined = HelpArticle.internalBinaryWrite(body.helpArticle, tag.tag(5, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = HelpArticle.internalBinaryWrite(body.helpArticle, tag.tag(5, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (body.bodyLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult5 = tag.tag(6, _mod1196.WireType.LengthDelimited);
    const joined1 = LocalizedString.internalBinaryWrite(body.bodyLocalized, tag.tag(6, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(body.bodyLocalized, tag.tag(6, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (body.ctaLabelLocalized) {
    const LocalizedString2 = localized_string.LocalizedString;
    const tagResult6 = tag.tag(7, _mod1196.WireType.LengthDelimited);
    const joined2 = LocalizedString2.internalBinaryWrite(body.ctaLabelLocalized, tag.tag(7, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = LocalizedString2.internalBinaryWrite(body.ctaLabelLocalized, tag.tag(7, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (body.navigableStorefrontApplicationId) {
    const UInt64Value = wrappers.UInt64Value;
    const tagResult7 = tag.tag(8, _mod1196.WireType.LengthDelimited);
    const joined3 = UInt64Value.internalBinaryWrite(body.navigableStorefrontApplicationId, tag.tag(8, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = UInt64Value.internalBinaryWrite(body.navigableStorefrontApplicationId, tag.tag(8, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (body.shopCollectionId) {
    const UInt64Value2 = wrappers.UInt64Value;
    const tagResult8 = tag.tag(9, _mod1196.WireType.LengthDelimited);
    const joined4 = UInt64Value2.internalBinaryWrite(body.shopCollectionId, tag.tag(9, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = UInt64Value2.internalBinaryWrite(body.shopCollectionId, tag.tag(9, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (0 !== body.giftModalDestination) {
    tag.tag(10, _mod1196.WireType.Varint).int32(body.giftModalDestination);
    const tagResult9 = tag.tag(10, _mod1196.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1196.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, body, tag);
  }
  return tag;
};
let items = [
  { no: 1, name: "body", kind: "scalar", T: 9 },
  { no: 2, name: "cta_label", kind: "scalar", T: 9 },
  {
    no: 3,
    name: "cta_action",
    kind: "enum",
    T() {
      items = ["discord_protos.premium_marketing.v1.ButtonAction", require("cta_button").ButtonAction, "BUTTON_ACTION_"];
      return items;
    }
  },
  { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
  {
    no: 5,
    name: "help_article",
    kind: "message",
    T() {
      return require("help_article").HelpArticle;
    }
  },
  {
    no: 6,
    name: "body_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    }
  },
  {
    no: 7,
    name: "cta_label_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    }
  },
  {
    no: 8,
    name: "navigable_storefront_application_id",
    kind: "message",
    T() {
      return require("wrappers").UInt64Value;
    }
  },
,

];
let obj = { no: 9, name: "shop_collection_id", kind: "message", T: null };
class T {
  constructor() {
    return closure_1_0(closure_1_1[5]).UInt64Value;
  }
}
obj.T = T;
items[8] = obj;
items[9] = {
  no: 10,
  name: "gift_modal_destination",
  kind: "enum",
  T() {
    items = ["discord_protos.premium_marketing.v1.GiftModalDestination", require("cta_button").GiftModalDestination, "GIFT_MODAL_DESTINATION_"];
    return items;
  }
};
const prototype1 = new prototype("discord_protos.premium_marketing.v1.ShopNagbar", items, tmp, T, ShopNagbar$Type, prototype, items);
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/shop_nagbar.tsx");

export const ShopNagbar = prototype1;