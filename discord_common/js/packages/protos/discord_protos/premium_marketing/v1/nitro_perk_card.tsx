// === Module 9664: nitro_perk_card ===

// Module 9664 (nitro_perk_card)
import _mod1197 from "module_1197" /* 1197 */;
import localized_string from "localized_string" /* 9631 */;
import cta_button from "cta_button" /* 9633 */;
import theme_aware_asset from "theme_aware_asset" /* 9641 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const NitroPerkCardPlacement = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", MARKETING_PAGE: 1, [1]: "MARKETING_PAGE", NITRO_HOME: 2, [2]: "NITRO_HOME" };
const MessageType = fn(1197).MessageType;
class NitroPerkCard$Type extends MessageType {
  constructor() {
    obj = {
      no: 1,
      name: "header_localized",
      kind: "message",
      T() {
            return require("localized_string").LocalizedString;
          }
    };
    items = [, , , , , , , , ];
    items[0] = obj;
    items[1] = { no: 2, name: "header", kind: "scalar", T: 9 };
    items[2] = {
      no: 3,
      name: "description_localized",
      kind: "message",
      T() {
            return require("localized_string").LocalizedString;
          }
    };
    items[3] = { no: 4, name: "description", kind: "scalar", T: 9 };
    items[4] = {
      no: 5,
      name: "button",
      kind: "message",
      T() {
            return require("cta_button").CTAButton;
          }
    };
    items[5] = {
      no: 6,
      name: "background",
      kind: "message",
      T() {
            return require("theme_aware_asset").ThemeAwareAsset;
          }
    };
    items[6] = {
      no: 7,
      name: "foreground",
      kind: "message",
      T() {
            return require("theme_aware_asset").ThemeAwareAsset;
          }
    };
    obj1 = { no: 8, name: "third_party_logo", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[4]).ThemeAwareAsset;
      }
    }
    obj1.T = T;
    items[7] = obj1;
    items[8] = {
      no: 9,
      name: "placements",
      kind: "enum",
      repeat: 1,
      T() {
            const items = ["discord_protos.premium_marketing.v1.NitroPerkCardPlacement", NitroPerkCardPlacement, "NITRO_PERK_CARD_PLACEMENT_"];
            return items;
          }
    };
    tmp1 = new tmp("discord_protos.premium_marketing.v1.NitroPerkCard", items, T);
    return tmp1;
  }
}
const prototype = NitroPerkCard$Type.prototype;
prototype["create"] = function create(partialSettings) {
  const obj = { header: "", description: "", placements: [] };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1197.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1197.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1197;
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
        let LocalizedString2 = localized_string.LocalizedString;
        obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
      } else if (2 === tmp5) {
        obj.header = pos.string();
      } else if (3 === tmp5) {
        let LocalizedString = localized_string.LocalizedString;
        obj.descriptionLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.descriptionLocalized);
      } else if (4 === tmp5) {
        obj.description = pos.string();
      } else if (5 === tmp5) {
        let CTAButton = cta_button.CTAButton;
        obj.button = CTAButton.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.button);
      } else if (6 === tmp5) {
        let ThemeAwareAsset3 = theme_aware_asset.ThemeAwareAsset;
        obj.background = ThemeAwareAsset3.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.background);
      } else if (7 === tmp5) {
        let ThemeAwareAsset2 = theme_aware_asset.ThemeAwareAsset;
        obj.foreground = ThemeAwareAsset2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.foreground);
      } else if (8 === tmp5) {
        let ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
        obj.thirdPartyLogo = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.thirdPartyLogo);
      } else if (9 === tmp5) {
        if (tmp6 === _mod1197.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let placements = obj.placements;
              let arr = placements.push(pos.int32());
              pos = pos.pos;
            } while (pos < sum1);
          }
        } else {
          let placements1 = obj.placements;
          let arr2 = placements1.push(pos.int32());
        }
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
              onRead = _mod1197.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(headerLocalized, tag, writeUnknownFields) {
  let length;
  if (headerLocalized.headerLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult = tag.tag(1, _mod1197.WireType.LengthDelimited);
    const joined = LocalizedString.internalBinaryWrite(headerLocalized.headerLocalized, tag.tag(1, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(headerLocalized.headerLocalized, tag.tag(1, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== headerLocalized.header) {
    tag.tag(2, _mod1197.WireType.LengthDelimited).string(headerLocalized.header);
    const tagResult1 = tag.tag(2, _mod1197.WireType.LengthDelimited);
  }
  if (headerLocalized.descriptionLocalized) {
    const LocalizedString2 = localized_string.LocalizedString;
    const tagResult2 = tag.tag(3, _mod1197.WireType.LengthDelimited);
    const joined1 = LocalizedString2.internalBinaryWrite(headerLocalized.descriptionLocalized, tag.tag(3, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = LocalizedString2.internalBinaryWrite(headerLocalized.descriptionLocalized, tag.tag(3, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== headerLocalized.description) {
    tag.tag(4, _mod1197.WireType.LengthDelimited).string(headerLocalized.description);
    const tagResult3 = tag.tag(4, _mod1197.WireType.LengthDelimited);
  }
  if (headerLocalized.button) {
    const CTAButton = cta_button.CTAButton;
    const tagResult4 = tag.tag(5, _mod1197.WireType.LengthDelimited);
    const joined2 = CTAButton.internalBinaryWrite(headerLocalized.button, tag.tag(5, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = CTAButton.internalBinaryWrite(headerLocalized.button, tag.tag(5, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (headerLocalized.background) {
    const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
    const tagResult5 = tag.tag(6, _mod1197.WireType.LengthDelimited);
    const joined3 = ThemeAwareAsset.internalBinaryWrite(headerLocalized.background, tag.tag(6, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = ThemeAwareAsset.internalBinaryWrite(headerLocalized.background, tag.tag(6, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (headerLocalized.foreground) {
    const ThemeAwareAsset2 = theme_aware_asset.ThemeAwareAsset;
    const tagResult6 = tag.tag(7, _mod1197.WireType.LengthDelimited);
    const joined4 = ThemeAwareAsset2.internalBinaryWrite(headerLocalized.foreground, tag.tag(7, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = ThemeAwareAsset2.internalBinaryWrite(headerLocalized.foreground, tag.tag(7, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (headerLocalized.thirdPartyLogo) {
    const ThemeAwareAsset3 = theme_aware_asset.ThemeAwareAsset;
    const tagResult7 = tag.tag(8, _mod1197.WireType.LengthDelimited);
    const joined5 = ThemeAwareAsset3.internalBinaryWrite(headerLocalized.thirdPartyLogo, tag.tag(8, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult5 = ThemeAwareAsset3.internalBinaryWrite(headerLocalized.thirdPartyLogo, tag.tag(8, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (headerLocalized.placements.length) {
    tag.tag(9, _mod1197.WireType.LengthDelimited).fork();
    let num10 = 0;
    if (0 < headerLocalized.placements.length) {
      do {
        let int32Result = tag.int32(headerLocalized.placements[num10]);
        num10 = num10 + 1;
        length = headerLocalized.placements.length;
      } while (num10 < length);
    }
    const joined6 = tag.join();
    const tagResult8 = tag.tag(9, _mod1197.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1197.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, headerLocalized, tag);
  }
  return tag;
};
let items = [
  {
    no: 1,
    name: "header_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    }
  },
  { no: 2, name: "header", kind: "scalar", T: 9 },
  {
    no: 3,
    name: "description_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    }
  },
  { no: 4, name: "description", kind: "scalar", T: 9 },
  {
    no: 5,
    name: "button",
    kind: "message",
    T() {
      return require("cta_button").CTAButton;
    }
  },
  {
    no: 6,
    name: "background",
    kind: "message",
    T() {
      return require("theme_aware_asset").ThemeAwareAsset;
    }
  },
  {
    no: 7,
    name: "foreground",
    kind: "message",
    T() {
      return require("theme_aware_asset").ThemeAwareAsset;
    }
  },
,

];
const obj3 = { no: 8, name: "third_party_logo", kind: "message", T: null };
class T {
  constructor() {
    return closure_1_0(closure_1_1[4]).ThemeAwareAsset;
  }
}
obj3.T = T;
items[7] = obj3;
items[8] = {
  no: 9,
  name: "placements",
  kind: "enum",
  repeat: 1,
  T() {
    const items = ["discord_protos.premium_marketing.v1.NitroPerkCardPlacement", NitroPerkCardPlacement, "NITRO_PERK_CARD_PLACEMENT_"];
    return items;
  }
};
const prototype1 = new prototype("discord_protos.premium_marketing.v1.NitroPerkCard", items, tmp, T, NitroPerkCard$Type, prototype, items, fn, dependencyMap);
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/nitro_perk_card.tsx");

export { NitroPerkCardPlacement };
export const NitroPerkCard = prototype1;