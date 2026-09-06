// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/shop_nagbar.tsx
import _mod1188 from "../../../../../../../_runtime/metro/01188__.js";
import wrappers from "../../../google/protobuf/wrappers.tsx";
import localized_string from "../../common/v1/localized_string.tsx";
import help_article from "help_article.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";

require = fn;
const MessageType = fn(1188).MessageType;
class ShopNagbar$Type extends MessageType {
  constructor() {
    items = [, , , , , , ,];
    items[0] = { no: 1, name: "body", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "cta_label", kind: "scalar", T: 9 };
    items[2] = {
      no: 3,
      name: "cta_action",
      kind: "enum",
      T() {
        const items = [
          "discord_protos.premium_marketing.v1.ButtonAction",
          require("cta_button").ButtonAction,
          "BUTTON_ACTION_",
        ];
        return items;
      },
    };
    items[3] = { no: 4, name: "deeplink_section", kind: "scalar", T: 9 };
    items[4] = {
      no: 5,
      name: "help_article",
      kind: "message",
      T() {
        return require("help_article").HelpArticle;
      },
    };
    items[5] = {
      no: 6,
      name: "body_localized",
      kind: "message",
      T() {
        return require("localized_string").LocalizedString;
      },
    };
    obj = { no: 7, name: "cta_label_localized", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[4]).LocalizedString;
      }
    }
    obj.T = T;
    items[6] = obj;
    items[7] = {
      no: 8,
      name: "navigable_storefront_application_id",
      kind: "message",
      T() {
        return require("wrappers").UInt64Value;
      },
    };
    tmp = new tmp("discord_protos.premium_marketing.v1.ShopNagbar", items, T);
    return tmp;
  }
}
let prototype = ShopNagbar$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { body: "", ctaLabel: "", ctaAction: 0, deeplinkSection: "" };
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
        obj.body = pos.string();
      } else if (2 === tmp5) {
        obj.ctaLabel = pos.string();
      } else if (3 === tmp5) {
        obj.ctaAction = pos.int32();
      } else if (4 === tmp5) {
        obj.deeplinkSection = pos.string();
      } else if (5 === tmp5) {
        let HelpArticle = help_article.HelpArticle;
        obj.helpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.helpArticle);
      } else if (6 === tmp5) {
        let LocalizedString2 = localized_string.LocalizedString;
        obj.bodyLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
      } else if (7 === tmp5) {
        let LocalizedString = localized_string.LocalizedString;
        obj.ctaLabelLocalized = LocalizedString.internalBinaryRead(
          pos,
          pos.uint32(),
          readUnknownField,
          obj.ctaLabelLocalized,
        );
      } else if (8 === tmp5) {
        let UInt64Value = wrappers.UInt64Value;
        obj.navigableStorefrontApplicationId = UInt64Value.internalBinaryRead(
          pos,
          pos.uint32(),
          readUnknownField,
          obj.navigableStorefrontApplicationId,
        );
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(body, tag, writeUnknownFields) {
  if ("" !== body.body) {
    tag.tag(1, _mod1188.WireType.LengthDelimited).string(body.body);
    const tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
  }
  if ("" !== body.ctaLabel) {
    tag.tag(2, _mod1188.WireType.LengthDelimited).string(body.ctaLabel);
    const tagResult1 = tag.tag(2, _mod1188.WireType.LengthDelimited);
  }
  if (0 !== body.ctaAction) {
    tag.tag(3, _mod1188.WireType.Varint).int32(body.ctaAction);
    const tagResult2 = tag.tag(3, _mod1188.WireType.Varint);
  }
  if ("" !== body.deeplinkSection) {
    tag.tag(4, _mod1188.WireType.LengthDelimited).string(body.deeplinkSection);
    const tagResult3 = tag.tag(4, _mod1188.WireType.LengthDelimited);
  }
  if (body.helpArticle) {
    const HelpArticle = help_article.HelpArticle;
    const tagResult4 = tag.tag(5, _mod1188.WireType.LengthDelimited);
    const joined = HelpArticle.internalBinaryWrite(
      body.helpArticle,
      tag.tag(5, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = HelpArticle.internalBinaryWrite(
      body.helpArticle,
      tag.tag(5, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (body.bodyLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult5 = tag.tag(6, _mod1188.WireType.LengthDelimited);
    const joined1 = LocalizedString.internalBinaryWrite(
      body.bodyLocalized,
      tag.tag(6, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(
      body.bodyLocalized,
      tag.tag(6, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (body.ctaLabelLocalized) {
    const LocalizedString2 = localized_string.LocalizedString;
    const tagResult6 = tag.tag(7, _mod1188.WireType.LengthDelimited);
    const joined2 = LocalizedString2.internalBinaryWrite(
      body.ctaLabelLocalized,
      tag.tag(7, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult2 = LocalizedString2.internalBinaryWrite(
      body.ctaLabelLocalized,
      tag.tag(7, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (body.navigableStorefrontApplicationId) {
    const UInt64Value = wrappers.UInt64Value;
    const tagResult7 = tag.tag(8, _mod1188.WireType.LengthDelimited);
    const joined3 = UInt64Value.internalBinaryWrite(
      body.navigableStorefrontApplicationId,
      tag.tag(8, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult3 = UInt64Value.internalBinaryWrite(
      body.navigableStorefrontApplicationId,
      tag.tag(8, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
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
      const items = [
        "discord_protos.premium_marketing.v1.ButtonAction",
        require("cta_button").ButtonAction,
        "BUTTON_ACTION_",
      ];
      return items;
    },
  },
  { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
  {
    no: 5,
    name: "help_article",
    kind: "message",
    T() {
      return require("help_article").HelpArticle;
    },
  },
  {
    no: 6,
    name: "body_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    },
  },
  ,
];
let obj = { no: 7, name: "cta_label_localized", kind: "message", T: null };
class T {
  constructor() {
    return closure_1_0(closure_1_1[4]).LocalizedString;
  }
}
obj.T = T;
items[6] = obj;
items[7] = {
  no: 8,
  name: "navigable_storefront_application_id",
  kind: "message",
  T() {
    return require("wrappers").UInt64Value;
  },
};
prototype = new prototype(
  "discord_protos.premium_marketing.v1.ShopNagbar",
  items,
  tmp,
  T,
  ShopNagbar$Type,
  prototype,
  items,
);
const size = fn(2);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/shop_nagbar.tsx",
);

export const ShopNagbar = prototype;
