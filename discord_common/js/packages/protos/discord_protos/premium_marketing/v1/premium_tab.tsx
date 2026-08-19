// === Module 7636: create ===

// Module 7636 (create)
import _mod1307 from "module_1307" /* 1307 */;
import create from "create" /* 7633 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import { MessageType } from "module_1307" /* 1307 */;

require = fn;
class PremiumTab$Type extends MessageType {
  constructor() {
    items = [, , , , , ];
    items[0] = { no: 1, name: "badge_label", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "acknowledged_badge_label", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "show_hover_gradient", kind: "scalar", T: 8 };
    items[3] = { no: 4, name: "deeplink_section", kind: "scalar", T: 9 };
    obj = { no: 5, name: "badge_label_localized", kind: "message", T: null };
    class T {
      constructor() {
        return require("create").LocalizedString;
      }
    }
    obj[3] = T;
    items[4] = obj;
    items[5] = {
      no: 6,
      name: "acknowledged_badge_label_localized",
      kind: "message",
      T() {
            return callback(7633).LocalizedString;
          }
    };
    tmp = new tmp("discord_protos.premium_marketing.v1.PremiumTab", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
let prototype = PremiumTab$Type.prototype;
prototype["create"] = function create(arr) {
  const _Object = Object;
  const obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1307.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1307.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1307;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp4 = callback(pos.tag(), 2);
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
        let LocalizedString2 = create.LocalizedString;
        obj.badgeLabelLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.badgeLabelLocalized);
      } else if (6 === tmp5) {
        let LocalizedString = create.LocalizedString;
        obj.acknowledgedBadgeLabelLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.acknowledgedBadgeLabelLocalized);
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(badgeLabel, tag, writeUnknownFields) {
  if ("" !== badgeLabel.badgeLabel) {
    tag.tag(1, _mod1307.WireType.LengthDelimited).string(badgeLabel.badgeLabel);
    const tagResult = tag.tag(1, _mod1307.WireType.LengthDelimited);
  }
  if ("" !== badgeLabel.acknowledgedBadgeLabel) {
    tag.tag(2, _mod1307.WireType.LengthDelimited).string(badgeLabel.acknowledgedBadgeLabel);
    const tagResult1 = tag.tag(2, _mod1307.WireType.LengthDelimited);
  }
  if (false !== badgeLabel.showHoverGradient) {
    tag.tag(3, _mod1307.WireType.Varint).bool(badgeLabel.showHoverGradient);
    const tagResult2 = tag.tag(3, _mod1307.WireType.Varint);
  }
  if ("" !== badgeLabel.deeplinkSection) {
    tag.tag(4, _mod1307.WireType.LengthDelimited).string(badgeLabel.deeplinkSection);
    const tagResult3 = tag.tag(4, _mod1307.WireType.LengthDelimited);
  }
  if (badgeLabel.badgeLabelLocalized) {
    const LocalizedString = create.LocalizedString;
    const tagResult4 = tag.tag(5, _mod1307.WireType.LengthDelimited);
    const joined = LocalizedString.internalBinaryWrite(badgeLabel.badgeLabelLocalized, tag.tag(5, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(badgeLabel.badgeLabelLocalized, tag.tag(5, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (badgeLabel.acknowledgedBadgeLabelLocalized) {
    const LocalizedString2 = create.LocalizedString;
    const tagResult5 = tag.tag(6, _mod1307.WireType.LengthDelimited);
    const joined1 = LocalizedString2.internalBinaryWrite(badgeLabel.acknowledgedBadgeLabelLocalized, tag.tag(6, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = LocalizedString2.internalBinaryWrite(badgeLabel.acknowledgedBadgeLabelLocalized, tag.tag(6, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1307.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, badgeLabel, tag);
  }
  return tag;
};
let items = [{ no: 1, name: "badge_label", kind: "scalar", T: 9 }, { no: 2, name: "acknowledged_badge_label", kind: "scalar", T: 9 }, { no: 3, name: "show_hover_gradient", kind: "scalar", T: 8 }, { no: 4, name: "deeplink_section", kind: "scalar", T: 9 }, , ];
let obj = { no: 5, name: "badge_label_localized", kind: "message", T: null };
class T {
  constructor() {
    return require("create").LocalizedString;
  }
}
obj[3] = T;
items[4] = obj;
items[5] = {
  no: 6,
  name: "acknowledged_badge_label_localized",
  kind: "message",
  T() {
    return callback(7633).LocalizedString;
  }
};
prototype = new prototype("discord_protos.premium_marketing.v1.PremiumTab", items, tmp, T, PremiumTab$Type, prototype, items);
// ThrowIfThisInitialized (0x7c)
let result = require("obj132").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_tab.tsx");

export const PremiumTab = prototype;