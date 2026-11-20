// === Module 9033: premium_tab ===

// Module 9033 (premium_tab)
import _mod1196 from "module_1196" /* 1196 */;
import localized_string from "localized_string" /* 9030 */;
import theme_aware_asset from "theme_aware_asset" /* 9034 */;
import tab_gradient_colors from "tab_gradient_colors" /* 9035 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const MessageType = fn(1196).MessageType;
class PremiumTab$Type extends MessageType {
  constructor() {
    items = [, , , , , , , ];
    items[0] = { no: 1, name: "badge_label", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "acknowledged_badge_label", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "show_hover_gradient", kind: "scalar", T: 8 };
    items[3] = { no: 4, name: "deeplink_section", kind: "scalar", T: 9 };
    items[4] = {
      no: 5,
      name: "badge_label_localized",
      kind: "message",
      T() {
            return require("localized_string").LocalizedString;
          }
    };
    items[5] = {
      no: 6,
      name: "acknowledged_badge_label_localized",
      kind: "message",
      T() {
            return require("localized_string").LocalizedString;
          }
    };
    obj = { no: 7, name: "background_image", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).ThemeAwareAsset;
      }
    }
    obj.T = T;
    items[6] = obj;
    items[7] = {
      no: 8,
      name: "hover_gradient_colors",
      kind: "message",
      T() {
            return require("tab_gradient_colors").TabGradientColors;
          }
    };
    tmp1 = new tmp("discord_protos.premium_marketing.v1.PremiumTab", items, T);
    return tmp1;
  }
}
const prototype = PremiumTab$Type.prototype;
prototype["create"] = function create(partialSettings) {
  const obj = { badgeLabel: "", acknowledgedBadgeLabel: "", showHoverGradient: false, deeplinkSection: "" };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1196.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1196.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1196;
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
        obj.badgeLabel = pos.string();
      } else if (2 === tmp5) {
        obj.acknowledgedBadgeLabel = pos.string();
      } else if (3 === tmp5) {
        obj.showHoverGradient = pos.bool();
      } else if (4 === tmp5) {
        obj.deeplinkSection = pos.string();
      } else if (5 === tmp5) {
        let LocalizedString2 = localized_string.LocalizedString;
        obj.badgeLabelLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.badgeLabelLocalized);
      } else if (6 === tmp5) {
        let LocalizedString = localized_string.LocalizedString;
        obj.acknowledgedBadgeLabelLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.acknowledgedBadgeLabelLocalized);
      } else if (7 === tmp5) {
        let ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
        obj.backgroundImage = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.backgroundImage);
      } else if (8 === tmp5) {
        let TabGradientColors = tab_gradient_colors.TabGradientColors;
        obj.hoverGradientColors = TabGradientColors.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.hoverGradientColors);
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
              onRead = _mod1196.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(badgeLabel, tag, writeUnknownFields) {
  if ("" !== badgeLabel.badgeLabel) {
    tag.tag(1, _mod1196.WireType.LengthDelimited).string(badgeLabel.badgeLabel);
    const tagResult = tag.tag(1, _mod1196.WireType.LengthDelimited);
  }
  if ("" !== badgeLabel.acknowledgedBadgeLabel) {
    tag.tag(2, _mod1196.WireType.LengthDelimited).string(badgeLabel.acknowledgedBadgeLabel);
    const tagResult1 = tag.tag(2, _mod1196.WireType.LengthDelimited);
  }
  if (false !== badgeLabel.showHoverGradient) {
    tag.tag(3, _mod1196.WireType.Varint).bool(badgeLabel.showHoverGradient);
    const tagResult2 = tag.tag(3, _mod1196.WireType.Varint);
  }
  if ("" !== badgeLabel.deeplinkSection) {
    tag.tag(4, _mod1196.WireType.LengthDelimited).string(badgeLabel.deeplinkSection);
    const tagResult3 = tag.tag(4, _mod1196.WireType.LengthDelimited);
  }
  if (badgeLabel.badgeLabelLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult4 = tag.tag(5, _mod1196.WireType.LengthDelimited);
    const joined = LocalizedString.internalBinaryWrite(badgeLabel.badgeLabelLocalized, tag.tag(5, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(badgeLabel.badgeLabelLocalized, tag.tag(5, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (badgeLabel.acknowledgedBadgeLabelLocalized) {
    const LocalizedString2 = localized_string.LocalizedString;
    const tagResult5 = tag.tag(6, _mod1196.WireType.LengthDelimited);
    const joined1 = LocalizedString2.internalBinaryWrite(badgeLabel.acknowledgedBadgeLabelLocalized, tag.tag(6, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = LocalizedString2.internalBinaryWrite(badgeLabel.acknowledgedBadgeLabelLocalized, tag.tag(6, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (badgeLabel.backgroundImage) {
    const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
    const tagResult6 = tag.tag(7, _mod1196.WireType.LengthDelimited);
    const joined2 = ThemeAwareAsset.internalBinaryWrite(badgeLabel.backgroundImage, tag.tag(7, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = ThemeAwareAsset.internalBinaryWrite(badgeLabel.backgroundImage, tag.tag(7, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (badgeLabel.hoverGradientColors) {
    const TabGradientColors = tab_gradient_colors.TabGradientColors;
    const tagResult7 = tag.tag(8, _mod1196.WireType.LengthDelimited);
    const joined3 = TabGradientColors.internalBinaryWrite(badgeLabel.hoverGradientColors, tag.tag(8, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = TabGradientColors.internalBinaryWrite(badgeLabel.hoverGradientColors, tag.tag(8, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1196.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, badgeLabel, tag);
  }
  return tag;
};
let items = [
  { no: 1, name: "badge_label", kind: "scalar", T: 9 },
  { no: 2, name: "acknowledged_badge_label", kind: "scalar", T: 9 },
  { no: 3, name: "show_hover_gradient", kind: "scalar", T: 8 },
  { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
  {
    no: 5,
    name: "badge_label_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    }
  },
  {
    no: 6,
    name: "acknowledged_badge_label_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    }
  },
,

];
let obj = { no: 7, name: "background_image", kind: "message", T: null };
class T {
  constructor() {
    return closure_1_0(closure_1_1[3]).ThemeAwareAsset;
  }
}
obj.T = T;
items[6] = obj;
items[7] = {
  no: 8,
  name: "hover_gradient_colors",
  kind: "message",
  T() {
    return require("tab_gradient_colors").TabGradientColors;
  }
};
const prototype1 = new prototype("discord_protos.premium_marketing.v1.PremiumTab", items, tmp, T, PremiumTab$Type, prototype, items);
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_tab.tsx");

export const PremiumTab = prototype1;