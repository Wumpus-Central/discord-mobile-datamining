// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/shop_tab_tooltip.tsx
import _mod1210 from "../../../../../../../_runtime/metro/01210__.js";
import localized_string from "../../common/v1/localized_string.tsx";
import theme_aware_asset from "theme_aware_asset.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";

require = fn;
const MessageType = fn(1210).MessageType;
class ShopTabTooltip$Type extends MessageType {
  constructor() {
    items = [, , , , , , , , , ,];
    items[0] = { no: 1, name: "header", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "body", kind: "scalar", T: 9 };
    items[2] = {
      no: 3,
      name: "asset",
      kind: "message",
      T() {
        return require("theme_aware_asset").ThemeAwareAsset;
      },
    };
    items[3] = {
      no: 4,
      name: "header_localized",
      kind: "message",
      T() {
        return require("localized_string").LocalizedString;
      },
    };
    items[4] = {
      no: 5,
      name: "body_localized",
      kind: "message",
      T() {
        return require("localized_string").LocalizedString;
      },
    };
    items[5] = { no: 6, name: "badge_text", kind: "scalar", T: 9 };
    obj = { no: 7, name: "badge_text_localized", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).LocalizedString;
      }
    }
    obj.T = T;
    items[6] = obj;
    items[7] = { no: 8, name: "badge_icon", kind: "scalar", T: 9 };
    items[8] = { no: 9, name: "badge_countdown_ends_at", kind: "scalar", T: 9 };
    items[9] = { no: 10, name: "show_hover_gradient", kind: "scalar", T: 8 };
    items[10] = {
      no: 11,
      name: "hover_background",
      kind: "message",
      T() {
        return require("theme_aware_asset").ThemeAwareAsset;
      },
    };
    tmp1 = new tmp("discord_protos.premium_marketing.v1.ShopTabTooltip", items, T);
    return tmp1;
  }
}
const prototype = ShopTabTooltip$Type.prototype;
prototype["create"] = function create(arr) {
  const obj = {
    header: "",
    body: "",
    badgeText: "",
    badgeIcon: "",
    badgeCountdownEndsAt: "",
    showHoverGradient: false,
  };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1210.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1210.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1210;
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(header, tag, writeUnknownFields) {
  if ("" !== header.header) {
    tag.tag(1, _mod1210.WireType.LengthDelimited).string(header.header);
    const tagResult = tag.tag(1, _mod1210.WireType.LengthDelimited);
  }
  if ("" !== header.body) {
    tag.tag(2, _mod1210.WireType.LengthDelimited).string(header.body);
    const tagResult1 = tag.tag(2, _mod1210.WireType.LengthDelimited);
  }
  if (header.asset) {
    const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
    const tagResult2 = tag.tag(3, _mod1210.WireType.LengthDelimited);
    const joined = ThemeAwareAsset.internalBinaryWrite(
      header.asset,
      tag.tag(3, _mod1210.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(
      header.asset,
      tag.tag(3, _mod1210.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (header.headerLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult3 = tag.tag(4, _mod1210.WireType.LengthDelimited);
    const joined1 = LocalizedString.internalBinaryWrite(
      header.headerLocalized,
      tag.tag(4, _mod1210.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(
      header.headerLocalized,
      tag.tag(4, _mod1210.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (header.bodyLocalized) {
    const LocalizedString2 = localized_string.LocalizedString;
    const tagResult4 = tag.tag(5, _mod1210.WireType.LengthDelimited);
    const joined2 = LocalizedString2.internalBinaryWrite(
      header.bodyLocalized,
      tag.tag(5, _mod1210.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult2 = LocalizedString2.internalBinaryWrite(
      header.bodyLocalized,
      tag.tag(5, _mod1210.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("" !== header.badgeText) {
    tag.tag(6, _mod1210.WireType.LengthDelimited).string(header.badgeText);
    const tagResult5 = tag.tag(6, _mod1210.WireType.LengthDelimited);
  }
  if (header.badgeTextLocalized) {
    const LocalizedString3 = localized_string.LocalizedString;
    const tagResult6 = tag.tag(7, _mod1210.WireType.LengthDelimited);
    const joined3 = LocalizedString3.internalBinaryWrite(
      header.badgeTextLocalized,
      tag.tag(7, _mod1210.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult3 = LocalizedString3.internalBinaryWrite(
      header.badgeTextLocalized,
      tag.tag(7, _mod1210.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("" !== header.badgeIcon) {
    tag.tag(8, _mod1210.WireType.LengthDelimited).string(header.badgeIcon);
    const tagResult7 = tag.tag(8, _mod1210.WireType.LengthDelimited);
  }
  if ("" !== header.badgeCountdownEndsAt) {
    tag.tag(9, _mod1210.WireType.LengthDelimited).string(header.badgeCountdownEndsAt);
    const tagResult8 = tag.tag(9, _mod1210.WireType.LengthDelimited);
  }
  if (false !== header.showHoverGradient) {
    tag.tag(10, _mod1210.WireType.Varint).bool(header.showHoverGradient);
    const tagResult9 = tag.tag(10, _mod1210.WireType.Varint);
  }
  if (header.hoverBackground) {
    const ThemeAwareAsset2 = theme_aware_asset.ThemeAwareAsset;
    const tagResult10 = tag.tag(11, _mod1210.WireType.LengthDelimited);
    const joined4 = ThemeAwareAsset2.internalBinaryWrite(
      header.hoverBackground,
      tag.tag(11, _mod1210.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult4 = ThemeAwareAsset2.internalBinaryWrite(
      header.hoverBackground,
      tag.tag(11, _mod1210.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1210.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, header, tag);
  }
  return tag;
};
let items = [
  { no: 1, name: "header", kind: "scalar", T: 9 },
  { no: 2, name: "body", kind: "scalar", T: 9 },
  {
    no: 3,
    name: "asset",
    kind: "message",
    T() {
      return require("theme_aware_asset").ThemeAwareAsset;
    },
  },
  {
    no: 4,
    name: "header_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    },
  },
  {
    no: 5,
    name: "body_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    },
  },
  { no: 6, name: "badge_text", kind: "scalar", T: 9 },
  ,
  ,
  ,
  ,
];
let obj = { no: 7, name: "badge_text_localized", kind: "message", T: null };
class T {
  constructor() {
    return closure_1_0(closure_1_1[3]).LocalizedString;
  }
}
obj.T = T;
items[6] = obj;
items[7] = { no: 8, name: "badge_icon", kind: "scalar", T: 9 };
items[8] = { no: 9, name: "badge_countdown_ends_at", kind: "scalar", T: 9 };
items[9] = { no: 10, name: "show_hover_gradient", kind: "scalar", T: 8 };
items[10] = {
  no: 11,
  name: "hover_background",
  kind: "message",
  T() {
    return require("theme_aware_asset").ThemeAwareAsset;
  },
};
const prototype1 = new prototype(
  "discord_protos.premium_marketing.v1.ShopTabTooltip",
  items,
  tmp,
  T,
  ShopTabTooltip$Type,
  prototype,
  items,
);
const size = fn(2);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/shop_tab_tooltip.tsx",
);

export const ShopTabTooltip = prototype1;
