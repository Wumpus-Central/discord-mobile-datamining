// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_tab.tsx
import _mod1198 from "../../../../../../../_runtime/metro/01198__.js";
import localized_string from "../../common/v1/localized_string.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import size from "../../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2;

const T2 = function T() {
  return require("localized_string").LocalizedString;
};
const MessageType = _mod1198.MessageType;
class PremiumTab$Type extends MessageType {
  constructor() {
    const items = [
      { no: 1, name: "badge_label", kind: "scalar", T: 9 },
      { no: 2, name: "acknowledged_badge_label", kind: "scalar", T: 9 },
      { no: 3, name: "show_hover_gradient", kind: "scalar", T: 8 },
      { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
      ,
    ];
    const obj = { no: 5, name: "badge_label_localized", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[2]).LocalizedString;
      }
    }
    items[4] = obj;
    items[5] = { no: 6, name: "acknowledged_badge_label_localized", kind: "message", T: T2 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.PremiumTab", items, T);
    return tmp2;
  }
  create(arr) {
    const obj = { badgeLabel: "", acknowledgedBadgeLabel: "", showHoverGradient: false, deeplinkSection: "" };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
          obj.badgeLabelLocalized = LocalizedString2.internalBinaryRead(
            pos,
            pos.uint32(),
            readUnknownField,
            obj.badgeLabelLocalized,
          );
        } else if (6 === tmp5) {
          let LocalizedString = localized_string.LocalizedString;
          obj.acknowledgedBadgeLabelLocalized = LocalizedString.internalBinaryRead(
            pos,
            pos.uint32(),
            readUnknownField,
            obj.acknowledgedBadgeLabelLocalized,
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
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(badgeLabel, tag, writeUnknownFields) {
    if ("" !== badgeLabel.badgeLabel) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(badgeLabel.badgeLabel);
    }
    if ("" !== badgeLabel.acknowledgedBadgeLabel) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.string(badgeLabel.acknowledgedBadgeLabel);
    }
    if (false !== badgeLabel.showHoverGradient) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
      tagResult2.bool(badgeLabel.showHoverGradient);
    }
    if ("" !== badgeLabel.deeplinkSection) {
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      tagResult3.string(badgeLabel.deeplinkSection);
    }
    if (badgeLabel.badgeLabelLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite = LocalizedString.internalBinaryWrite;
      const badgeLabelLocalized = badgeLabel.badgeLabelLocalized;
      const tagResult4 = tag.tag(5, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(badgeLabelLocalized, tagResult4.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (badgeLabel.acknowledgedBadgeLabelLocalized) {
      const LocalizedString2 = localized_string.LocalizedString;
      internalBinaryWrite2 = LocalizedString2.internalBinaryWrite;
      const acknowledgedBadgeLabelLocalized = badgeLabel.acknowledgedBadgeLabelLocalized;
      const tagResult5 = tag.tag(6, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(
        acknowledgedBadgeLabelLocalized,
        tagResult5.fork(),
        writeUnknownFields,
      );
      const joined1 = internalBinaryWrite2Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, badgeLabel, tag);
    }
    return tag;
  }
}
const prototype = PremiumTab$Type.prototype;
let items = [
  { no: 1, name: "badge_label", kind: "scalar", T: 9 },
  { no: 2, name: "acknowledged_badge_label", kind: "scalar", T: 9 },
  { no: 3, name: "show_hover_gradient", kind: "scalar", T: 8 },
  { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
  ,
];
let obj = { no: 5, name: "badge_label_localized", kind: "message", T };
class T {
  constructor() {
    return require("localized_string").LocalizedString;
  }
}
items[4] = obj;
items[5] = { no: 6, name: "acknowledged_badge_label_localized", kind: "message", T: T2 };
const prototype1 = new prototype(
  "discord_protos.premium_marketing.v1.PremiumTab",
  items,
  tmp,
  T,
  PremiumTab$Type,
  prototype,
  items,
);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_tab.tsx",
);

export const PremiumTab = prototype1;
