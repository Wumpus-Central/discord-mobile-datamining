// === Module 9204: nitro_perk_card ===

// Module 9204 (nitro_perk_card)
import _mod1196 from "module_1196" /* 1196 */;
import localized_string from "localized_string" /* 9170 */;
import cta_button from "cta_button" /* 9172 */;
import theme_aware_asset from "theme_aware_asset" /* 9174 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const NitroPerkCardPlacement = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", MARKETING_PAGE: 1, [1]: "MARKETING_PAGE", NITRO_HOME: 2, [2]: "NITRO_HOME" };
const MessageType = fn(1196).MessageType;
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
    items = [, , , , , , , , , ];
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
            items = ["discord_protos.premium_marketing.v1.NitroPerkCardPlacement", NitroPerkCardPlacement, "NITRO_PERK_CARD_PLACEMENT_"];
            return items;
          }
    };
    items[9] = { no: 10, name: "position", kind: "scalar", T: 13 };
    tmp1 = new tmp("discord_protos.premium_marketing.v1.NitroPerkCard", items, T);
    return tmp1;
  }
}
const prototype = NitroPerkCard$Type.prototype;
prototype["create"] = function create(partialSettings) {
  const obj = { header: "", description: "", placements: [], position: 0 };
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(headerLocalized, tag, writeUnknownFields) {
  if (headerLocalized.headerLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult = tag.tag(1, _mod1196.WireType.LengthDelimited);
    const joined = LocalizedString.internalBinaryWrite(headerLocalized.headerLocalized, tag.tag(1, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(headerLocalized.headerLocalized, tag.tag(1, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== headerLocalized.header) {
    tag.tag(2, _mod1196.WireType.LengthDelimited).string(headerLocalized.header);
    const tagResult1 = tag.tag(2, _mod1196.WireType.LengthDelimited);
  }
  if (headerLocalized.descriptionLocalized) {
    const LocalizedString2 = localized_string.LocalizedString;
    const tagResult2 = tag.tag(3, _mod1196.WireType.LengthDelimited);
    const joined1 = LocalizedString2.internalBinaryWrite(headerLocalized.descriptionLocalized, tag.tag(3, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = LocalizedString2.internalBinaryWrite(headerLocalized.descriptionLocalized, tag.tag(3, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== headerLocalized.description) {
    tag.tag(4, _mod1196.WireType.LengthDelimited).string(headerLocalized.description);
    const tagResult3 = tag.tag(4, _mod1196.WireType.LengthDelimited);
  }
  if (headerLocalized.button) {
    const CTAButton = cta_button.CTAButton;
    const tagResult4 = tag.tag(5, _mod1196.WireType.LengthDelimited);
    const joined2 = CTAButton.internalBinaryWrite(headerLocalized.button, tag.tag(5, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = CTAButton.internalBinaryWrite(headerLocalized.button, tag.tag(5, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (headerLocalized.background) {
    const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
    const tagResult5 = tag.tag(6, _mod1196.WireType.LengthDelimited);
    const joined3 = ThemeAwareAsset.internalBinaryWrite(headerLocalized.background, tag.tag(6, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = ThemeAwareAsset.internalBinaryWrite(headerLocalized.background, tag.tag(6, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (headerLocalized.foreground) {
    const ThemeAwareAsset2 = theme_aware_asset.ThemeAwareAsset;
    const tagResult6 = tag.tag(7, _mod1196.WireType.LengthDelimited);
    const joined4 = ThemeAwareAsset2.internalBinaryWrite(headerLocalized.foreground, tag.tag(7, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = ThemeAwareAsset2.internalBinaryWrite(headerLocalized.foreground, tag.tag(7, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (headerLocalized.thirdPartyLogo) {
    const ThemeAwareAsset3 = theme_aware_asset.ThemeAwareAsset;
    const tagResult7 = tag.tag(8, _mod1196.WireType.LengthDelimited);
    const joined5 = ThemeAwareAsset3.internalBinaryWrite(headerLocalized.thirdPartyLogo, tag.tag(8, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult5 = ThemeAwareAsset3.internalBinaryWrite(headerLocalized.thirdPartyLogo, tag.tag(8, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (headerLocalized.placements.length) {
    tag.tag(9, _mod1196.WireType.LengthDelimited).fork();
    let num10 = 0;
    if (0 < headerLocalized.placements.length) {
      do {
        let int32Result = tag.int32(headerLocalized.placements[num10]);
        num10 = num10 + 1;
        length = headerLocalized.placements.length;
      } while (num10 < length);
    }
    const joined6 = tag.join();
    const tagResult8 = tag.tag(9, _mod1196.WireType.LengthDelimited);
  }
  if (0 !== headerLocalized.position) {
    tag.tag(10, _mod1196.WireType.Varint).uint32(headerLocalized.position);
    const tagResult9 = tag.tag(10, _mod1196.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1196.UnknownFieldHandler.onWrite;
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
    items = ["discord_protos.premium_marketing.v1.NitroPerkCardPlacement", NitroPerkCardPlacement, "NITRO_PERK_CARD_PLACEMENT_"];
    return items;
  }
};
items[9] = { no: 10, name: "position", kind: "scalar", T: 13 };
const prototype1 = new prototype("discord_protos.premium_marketing.v1.NitroPerkCard", items, tmp, T, NitroPerkCard$Type, prototype, items, fn, dependencyMap);
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/nitro_perk_card.tsx");

export { NitroPerkCardPlacement };
export const NitroPerkCard = prototype1;