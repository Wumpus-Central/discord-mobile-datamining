// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/shop_coachmark.tsx
import _mod1212 from "../../../../../../../_runtime/metro/01212__.js";
import localized_string from "../../common/v1/localized_string.tsx";
import theme_aware_asset from "theme_aware_asset.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";

require = fn;
const ShopCoachmarkDisplayType = {
  UNSPECIFIED: 0,
  [0]: "UNSPECIFIED",
  SM_TILE: 1,
  [1]: "SM_TILE",
  MD_TILE: 2,
  [2]: "MD_TILE",
  LG_TILE: 3,
  [3]: "LG_TILE",
  VIDEO_TILE: 4,
  [4]: "VIDEO_TILE",
};
const MessageType = fn(1212).MessageType;
class ShopCoachmark$Type extends MessageType {
  constructor() {
    obj = {
      no: 1,
      name: "asset",
      kind: "message",
      T() {
        return require("theme_aware_asset").ThemeAwareAsset;
      },
    };
    items = [, , , , , , , , , , , , ,];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "header_localized",
      kind: "message",
      T() {
        return require("localized_string").LocalizedString;
      },
    };
    items[2] = {
      no: 3,
      name: "body_localized",
      kind: "message",
      T() {
        return require("localized_string").LocalizedString;
      },
    };
    items[3] = {
      no: 4,
      name: "button_label_localized",
      kind: "message",
      T() {
        return require("localized_string").LocalizedString;
      },
    };
    items[4] = {
      no: 5,
      name: "display_type",
      kind: "enum",
      T() {
        const items = [
          "discord_protos.premium_marketing.v1.ShopCoachmarkDisplayType",
          ShopCoachmarkDisplayType,
          "SHOP_COACHMARK_DISPLAY_TYPE_",
        ];
        return items;
      },
    };
    obj1 = { no: 6, name: "badge_text_localized", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).LocalizedString;
      }
    }
    obj1.T = T;
    items[5] = obj1;
    items[6] = { no: 7, name: "badge_icon", kind: "scalar", T: 9 };
    items[7] = { no: 8, name: "badge_countdown_ends_at", kind: "scalar", T: 9 };
    items[8] = { no: 9, name: "show_hover_gradient", kind: "scalar", T: 8 };
    items[9] = {
      no: 10,
      name: "hover_background",
      kind: "message",
      T() {
        return require("theme_aware_asset").ThemeAwareAsset;
      },
    };
    items[10] = { no: 11, name: "header", kind: "scalar", T: 9 };
    items[11] = { no: 12, name: "body", kind: "scalar", T: 9 };
    items[12] = { no: 13, name: "button_label", kind: "scalar", T: 9 };
    items[13] = { no: 14, name: "badge_text", kind: "scalar", T: 9 };
    tmp1 = new tmp("discord_protos.premium_marketing.v1.ShopCoachmark", items, T);
    return tmp1;
  }
}
const prototype = ShopCoachmark$Type.prototype;
prototype["create"] = function create(partialSettings) {
  const obj = {
    displayType: 0,
    badgeIcon: "",
    badgeCountdownEndsAt: "",
    showHoverGradient: false,
    header: "",
    body: "",
    buttonLabel: "",
    badgeText: "",
  };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1212.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1212.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1212;
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(asset, tag, writeUnknownFields) {
  if (asset.asset) {
    const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
    const tagResult = tag.tag(1, _mod1212.WireType.LengthDelimited);
    const joined = ThemeAwareAsset.internalBinaryWrite(
      asset.asset,
      tag.tag(1, _mod1212.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(
      asset.asset,
      tag.tag(1, _mod1212.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (asset.headerLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult1 = tag.tag(2, _mod1212.WireType.LengthDelimited);
    const joined1 = LocalizedString.internalBinaryWrite(
      asset.headerLocalized,
      tag.tag(2, _mod1212.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(
      asset.headerLocalized,
      tag.tag(2, _mod1212.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (asset.bodyLocalized) {
    const LocalizedString2 = localized_string.LocalizedString;
    const tagResult2 = tag.tag(3, _mod1212.WireType.LengthDelimited);
    const joined2 = LocalizedString2.internalBinaryWrite(
      asset.bodyLocalized,
      tag.tag(3, _mod1212.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult2 = LocalizedString2.internalBinaryWrite(
      asset.bodyLocalized,
      tag.tag(3, _mod1212.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (asset.buttonLabelLocalized) {
    const LocalizedString3 = localized_string.LocalizedString;
    const tagResult3 = tag.tag(4, _mod1212.WireType.LengthDelimited);
    const joined3 = LocalizedString3.internalBinaryWrite(
      asset.buttonLabelLocalized,
      tag.tag(4, _mod1212.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult3 = LocalizedString3.internalBinaryWrite(
      asset.buttonLabelLocalized,
      tag.tag(4, _mod1212.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (0 !== asset.displayType) {
    tag.tag(5, _mod1212.WireType.Varint).int32(asset.displayType);
    const tagResult4 = tag.tag(5, _mod1212.WireType.Varint);
  }
  if (asset.badgeTextLocalized) {
    const LocalizedString4 = localized_string.LocalizedString;
    const tagResult5 = tag.tag(6, _mod1212.WireType.LengthDelimited);
    const joined4 = LocalizedString4.internalBinaryWrite(
      asset.badgeTextLocalized,
      tag.tag(6, _mod1212.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult4 = LocalizedString4.internalBinaryWrite(
      asset.badgeTextLocalized,
      tag.tag(6, _mod1212.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("" !== asset.badgeIcon) {
    tag.tag(7, _mod1212.WireType.LengthDelimited).string(asset.badgeIcon);
    const tagResult6 = tag.tag(7, _mod1212.WireType.LengthDelimited);
  }
  if ("" !== asset.badgeCountdownEndsAt) {
    tag.tag(8, _mod1212.WireType.LengthDelimited).string(asset.badgeCountdownEndsAt);
    const tagResult7 = tag.tag(8, _mod1212.WireType.LengthDelimited);
  }
  if (false !== asset.showHoverGradient) {
    tag.tag(9, _mod1212.WireType.Varint).bool(asset.showHoverGradient);
    const tagResult8 = tag.tag(9, _mod1212.WireType.Varint);
  }
  if (asset.hoverBackground) {
    const ThemeAwareAsset2 = theme_aware_asset.ThemeAwareAsset;
    const tagResult9 = tag.tag(10, _mod1212.WireType.LengthDelimited);
    const joined5 = ThemeAwareAsset2.internalBinaryWrite(
      asset.hoverBackground,
      tag.tag(10, _mod1212.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult5 = ThemeAwareAsset2.internalBinaryWrite(
      asset.hoverBackground,
      tag.tag(10, _mod1212.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("" !== asset.header) {
    tag.tag(11, _mod1212.WireType.LengthDelimited).string(asset.header);
    const tagResult10 = tag.tag(11, _mod1212.WireType.LengthDelimited);
  }
  if ("" !== asset.body) {
    tag.tag(12, _mod1212.WireType.LengthDelimited).string(asset.body);
    const tagResult11 = tag.tag(12, _mod1212.WireType.LengthDelimited);
  }
  if ("" !== asset.buttonLabel) {
    tag.tag(13, _mod1212.WireType.LengthDelimited).string(asset.buttonLabel);
    const tagResult12 = tag.tag(13, _mod1212.WireType.LengthDelimited);
  }
  if ("" !== asset.badgeText) {
    tag.tag(14, _mod1212.WireType.LengthDelimited).string(asset.badgeText);
    const tagResult13 = tag.tag(14, _mod1212.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1212.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, asset, tag);
  }
  return tag;
};
let items = [
  {
    no: 1,
    name: "asset",
    kind: "message",
    T() {
      return require("theme_aware_asset").ThemeAwareAsset;
    },
  },
  {
    no: 2,
    name: "header_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    },
  },
  {
    no: 3,
    name: "body_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    },
  },
  {
    no: 4,
    name: "button_label_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    },
  },
  {
    no: 5,
    name: "display_type",
    kind: "enum",
    T() {
      const items = [
        "discord_protos.premium_marketing.v1.ShopCoachmarkDisplayType",
        ShopCoachmarkDisplayType,
        "SHOP_COACHMARK_DISPLAY_TYPE_",
      ];
      return items;
    },
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
];
const obj3 = { no: 6, name: "badge_text_localized", kind: "message", T: null };
class T {
  constructor() {
    return closure_1_0(closure_1_1[3]).LocalizedString;
  }
}
obj3.T = T;
items[5] = obj3;
items[6] = { no: 7, name: "badge_icon", kind: "scalar", T: 9 };
items[7] = { no: 8, name: "badge_countdown_ends_at", kind: "scalar", T: 9 };
items[8] = { no: 9, name: "show_hover_gradient", kind: "scalar", T: 8 };
items[9] = {
  no: 10,
  name: "hover_background",
  kind: "message",
  T() {
    return require("theme_aware_asset").ThemeAwareAsset;
  },
};
items[10] = { no: 11, name: "header", kind: "scalar", T: 9 };
items[11] = { no: 12, name: "body", kind: "scalar", T: 9 };
items[12] = { no: 13, name: "button_label", kind: "scalar", T: 9 };
items[13] = { no: 14, name: "badge_text", kind: "scalar", T: 9 };
const prototype1 = new prototype(
  "discord_protos.premium_marketing.v1.ShopCoachmark",
  items,
  tmp,
  T,
  ShopCoachmark$Type,
  prototype,
  items,
  fn,
  dependencyMap,
);
const size = fn(2);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/shop_coachmark.tsx",
);

export { ShopCoachmarkDisplayType };
export const ShopCoachmark = prototype1;
