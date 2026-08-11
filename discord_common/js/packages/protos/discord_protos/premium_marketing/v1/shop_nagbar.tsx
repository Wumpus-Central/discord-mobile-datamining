// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/shop_nagbar.tsx
import _slicedToArray from "_slicedToArray";
import { MessageType } from "module_1307";
import { 01307__ } from "../../../../../../../_runtime/metro/01307__.js";
import { defineProperty } from "../../../google/protobuf/wrappers.tsx";
import { create } from "../../common/v1/localized_string.tsx";
import { create } from "help_article.tsx";

const require = arg1;
class ShopNagbar$Type extends MessageType {
  constructor() {
    items = [, , , , , , , ];
    items[0] = { no: 1, name: "body", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "cta_label", kind: "scalar", T: 9 };
    items[2] = {
      no: 3,
      name: "cta_action",
      kind: "enum",
      T() {
            const items = ["discord_protos.premium_marketing.v1.ButtonAction", callback(7353).ButtonAction, "BUTTON_ACTION_"];
            return items;
          }
    };
    items[3] = { no: 4, name: "deeplink_section", kind: "scalar", T: 9 };
    items[4] = {
      no: 5,
      name: "help_article",
      kind: "message",
      T() {
            return callback(7352).HelpArticle;
          }
    };
    items[5] = {
      no: 6,
      name: "body_localized",
      kind: "message",
      T() {
            return callback(7351).LocalizedString;
          }
    };
    obj = { no: 7, name: "cta_label_localized", kind: "message", T: null };
    class T {
      constructor() {
        return require("create").LocalizedString;
      }
    }
    obj[3] = T;
    items[6] = obj;
    items[7] = {
      no: 8,
      name: "navigable_storefront_application_id",
      kind: "message",
      T() {
            return callback(1337).UInt64Value;
          }
    };
    tmp = new tmp("discord_protos.premium_marketing.v1.ShopNagbar", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
let prototype = ShopNagbar$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { body: "", ctaLabel: "", ctaAction: 0, deeplinkSection: "" };
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
        obj.body = pos.string();
      } else if (2 === tmp5) {
        obj.ctaLabel = pos.string();
      } else if (3 === tmp5) {
        obj.ctaAction = pos.int32();
      } else if (4 === tmp5) {
        obj.deeplinkSection = pos.string();
      } else if (5 === tmp5) {
        let tmp37 = require;
        let tmp38 = dependencyMap;
        let HelpArticle = create.HelpArticle;
        let tmp39 = HelpArticle;
        let tmp40 = pos;
        let tmp41 = readUnknownField;
        obj.helpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.helpArticle);
      } else if (6 === tmp5) {
        let tmp32 = require;
        let tmp33 = dependencyMap;
        let LocalizedString2 = create.LocalizedString;
        let tmp34 = LocalizedString2;
        let tmp35 = pos;
        let tmp36 = readUnknownField;
        obj.bodyLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
      } else if (7 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let LocalizedString = create.LocalizedString;
        let tmp29 = LocalizedString;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.ctaLabelLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.ctaLabelLocalized);
      } else if (8 === tmp5) {
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(body, tag, writeUnknownFields) {
  if ("" !== body.body) {
    tag.tag(1, 01307__.WireType.LengthDelimited).string(body.body);
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
  }
  if ("" !== body.ctaLabel) {
    tag.tag(2, 01307__.WireType.LengthDelimited).string(body.ctaLabel);
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
  }
  if (0 !== body.ctaAction) {
    tag.tag(3, 01307__.WireType.Varint).int32(body.ctaAction);
    const tagResult2 = tag.tag(3, 01307__.WireType.Varint);
  }
  if ("" !== body.deeplinkSection) {
    tag.tag(4, 01307__.WireType.LengthDelimited).string(body.deeplinkSection);
    const tagResult3 = tag.tag(4, 01307__.WireType.LengthDelimited);
  }
  if (body.helpArticle) {
    const HelpArticle = create.HelpArticle;
    const tagResult4 = tag.tag(5, 01307__.WireType.LengthDelimited);
    const joined = HelpArticle.internalBinaryWrite(body.helpArticle, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = HelpArticle.internalBinaryWrite(body.helpArticle, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (body.bodyLocalized) {
    const LocalizedString = create.LocalizedString;
    const tagResult5 = tag.tag(6, 01307__.WireType.LengthDelimited);
    const joined1 = LocalizedString.internalBinaryWrite(body.bodyLocalized, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(body.bodyLocalized, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (body.ctaLabelLocalized) {
    const LocalizedString2 = create.LocalizedString;
    const tagResult6 = tag.tag(7, 01307__.WireType.LengthDelimited);
    const joined2 = LocalizedString2.internalBinaryWrite(body.ctaLabelLocalized, tag.tag(7, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = LocalizedString2.internalBinaryWrite(body.ctaLabelLocalized, tag.tag(7, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (body.navigableStorefrontApplicationId) {
    const UInt64Value = defineProperty.UInt64Value;
    const tagResult7 = tag.tag(8, 01307__.WireType.LengthDelimited);
    const joined3 = UInt64Value.internalBinaryWrite(body.navigableStorefrontApplicationId, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = UInt64Value.internalBinaryWrite(body.navigableStorefrontApplicationId, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
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
      const items = ["discord_protos.premium_marketing.v1.ButtonAction", callback(7353).ButtonAction, "BUTTON_ACTION_"];
      return items;
    }
  },
  { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
  {
    no: 5,
    name: "help_article",
    kind: "message",
    T() {
      return callback(7352).HelpArticle;
    }
  },
  {
    no: 6,
    name: "body_localized",
    kind: "message",
    T() {
      return callback(7351).LocalizedString;
    }
  },
,

];
let obj = { no: 7, name: "cta_label_localized", kind: "message", T: null };
class T {
  constructor() {
    return require("create").LocalizedString;
  }
}
obj[3] = T;
items[6] = obj;
items[7] = {
  no: 8,
  name: "navigable_storefront_application_id",
  kind: "message",
  T() {
    return callback(1337).UInt64Value;
  }
};
prototype = new prototype("discord_protos.premium_marketing.v1.ShopNagbar", items, tmp, T, ShopNagbar$Type, prototype, items);
// ThrowIfThisInitialized (0x7c)
let result = require("create").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/shop_nagbar.tsx");

export const ShopNagbar = prototype;