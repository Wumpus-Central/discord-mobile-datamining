// === Module 10412: gift_plan_selection_card_banner ===

// Module 10412 (gift_plan_selection_card_banner)
import _mod1198 from "module_1198" /* 1198 */;
import localized_string from "localized_string" /* 10401 */;
import gradient2 from "gradient" /* 10409 */;
import theme_aware_asset from "theme_aware_asset" /* 10411 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3, internalBinaryWrite4, internalBinaryWrite5, internalBinaryWrite6, internalBinaryWrite7, internalBinaryWrite8;

const GiftPlanSelectionCardBanner_AssetVariant = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", NORMAL: 1, [1]: "NORMAL", LARGE_TILTED: 2, [2]: "LARGE_TILTED" };
const MessageType = _mod1198.MessageType;
class GiftPlanSelectionCardBanner$Type extends MessageType {
  constructor() {
    let items = [
      { no: 1, name: "header", kind: "scalar", T: 9 },
      { no: 2, name: "desktop_body", kind: "scalar", T: 9 },
      { no: 3, name: "mobile_body", kind: "scalar", T: 9 },
      {
        no: 4,
        name: "avatar_asset",
        kind: "message",
        T() {
          return require("theme_aware_asset").ThemeAwareAsset;
        }
      },
      { no: 5, name: "banner_asset_url", kind: "scalar", T: 9 },
      { no: 6, name: "background_asset_url", kind: "scalar", T: 9 },
      { no: 7, name: "card_asset_url", kind: "scalar", T: 9 },
      {
        no: 8,
        name: "gradient",
        kind: "message",
        T() {
          return require("gradient").Gradient;
        }
      },
      {
        no: 9,
        name: "banner_asset",
        kind: "message",
        T() {
          return require("theme_aware_asset").ThemeAwareAsset;
        }
      },
      {
        no: 10,
        name: "background_asset",
        kind: "message",
        T() {
          return require("theme_aware_asset").ThemeAwareAsset;
        }
      },
      {
        no: 11,
        name: "card_asset",
        kind: "message",
        T() {
          return require("theme_aware_asset").ThemeAwareAsset;
        }
      },
      {
        no: 12,
        name: "mobile_banner_asset",
        kind: "message",
        T() {
          return require("theme_aware_asset").ThemeAwareAsset;
        }
      },
      {
        no: 13,
        name: "header_localized",
        kind: "message",
        T() {
          return require("localized_string").LocalizedString;
        }
      },
      {
        no: 14,
        name: "desktop_body_localized",
        kind: "message",
        T() {
          return require("localized_string").LocalizedString;
        }
      },
    ,

    ];
    const obj = { no: 15, name: "mobile_body_localized", kind: "message", T };
    class T {
      constructor() {
        return require("localized_string").LocalizedString;
      }
    }
    items[14] = obj;
    items[15] = {
      no: 16,
      name: "asset_variant",
      kind: "enum",
      T() {
        const items = ["discord_protos.premium_marketing.v1.GiftPlanSelectionCardBanner.AssetVariant", GiftPlanSelectionCardBanner_AssetVariant, "ASSET_VARIANT_"];
        return items;
      }
    };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.GiftPlanSelectionCardBanner", items, T);
    return tmp2;
  }
  create(arr) {
    const obj = { header: "", desktopBody: "", mobileBody: "", bannerAssetUrl: "", backgroundAssetUrl: "", cardAssetUrl: "", assetVariant: 0 };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, arg2, arg3) {
    const self = this;
    let obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    if (pos.pos < pos.pos + arg1) {
      [r10019, r10020] = pos.tag();
      _slicedToArray(pos.tag(), 2);
    }
    return obj;
  }
  internalBinaryWrite(header, tag, writeUnknownFields) {
    if ("" !== header.header) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(header.header);
    }
    if ("" !== header.desktopBody) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.string(header.desktopBody);
    }
    if ("" !== header.mobileBody) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      tagResult2.string(header.mobileBody);
    }
    if (header.avatarAsset) {
      const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite = ThemeAwareAsset.internalBinaryWrite;
      const avatarAsset = header.avatarAsset;
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(avatarAsset, tagResult3.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if ("" !== header.bannerAssetUrl) {
      const tagResult4 = tag.tag(5, _mod1198.WireType.LengthDelimited);
      tagResult4.string(header.bannerAssetUrl);
    }
    if ("" !== header.backgroundAssetUrl) {
      const tagResult5 = tag.tag(6, _mod1198.WireType.LengthDelimited);
      tagResult5.string(header.backgroundAssetUrl);
    }
    if ("" !== header.cardAssetUrl) {
      const tagResult6 = tag.tag(7, _mod1198.WireType.LengthDelimited);
      tagResult6.string(header.cardAssetUrl);
    }
    if (header.gradient) {
      const Gradient = gradient2.Gradient;
      internalBinaryWrite2 = Gradient.internalBinaryWrite;
      const gradient = header.gradient;
      const tagResult7 = tag.tag(8, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(gradient, tagResult7.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (header.bannerAsset) {
      const ThemeAwareAsset2 = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite3 = ThemeAwareAsset2.internalBinaryWrite;
      const bannerAsset = header.bannerAsset;
      const tagResult8 = tag.tag(9, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(bannerAsset, tagResult8.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if (header.backgroundAsset) {
      const ThemeAwareAsset3 = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite4 = ThemeAwareAsset3.internalBinaryWrite;
      const backgroundAsset = header.backgroundAsset;
      const tagResult9 = tag.tag(10, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(backgroundAsset, tagResult9.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    if (header.cardAsset) {
      const ThemeAwareAsset4 = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite5 = ThemeAwareAsset4.internalBinaryWrite;
      const cardAsset = header.cardAsset;
      const tagResult10 = tag.tag(11, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(cardAsset, tagResult10.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite5Result.join();
    }
    if (header.mobileBannerAsset) {
      const ThemeAwareAsset5 = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite6 = ThemeAwareAsset5.internalBinaryWrite;
      const mobileBannerAsset = header.mobileBannerAsset;
      const tagResult11 = tag.tag(12, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite6Result = internalBinaryWrite6(mobileBannerAsset, tagResult11.fork(), writeUnknownFields);
      const joined5 = internalBinaryWrite6Result.join();
    }
    if (header.headerLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite7 = LocalizedString.internalBinaryWrite;
      const headerLocalized = header.headerLocalized;
      const tagResult12 = tag.tag(13, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite7Result = internalBinaryWrite7(headerLocalized, tagResult12.fork(), writeUnknownFields);
      const joined6 = internalBinaryWrite7Result.join();
    }
    if (header.desktopBodyLocalized) {
      const LocalizedString2 = localized_string.LocalizedString;
      internalBinaryWrite8 = LocalizedString2.internalBinaryWrite;
      const desktopBodyLocalized = header.desktopBodyLocalized;
      const tagResult13 = tag.tag(14, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite8Result = internalBinaryWrite8(desktopBodyLocalized, tagResult13.fork(), writeUnknownFields);
      const joined7 = internalBinaryWrite8Result.join();
    }
    if (header.mobileBodyLocalized) {
      const LocalizedString3 = localized_string.LocalizedString;
      const internalBinaryWrite9 = LocalizedString3.internalBinaryWrite;
      const mobileBodyLocalized = header.mobileBodyLocalized;
      const tagResult14 = tag.tag(15, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite9Result = internalBinaryWrite9(mobileBodyLocalized, tagResult14.fork(), writeUnknownFields);
      const joined8 = internalBinaryWrite9Result.join();
    }
    if (0 !== header.assetVariant) {
      const tagResult15 = tag.tag(16, _mod1198.WireType.Varint);
      tagResult15.int32(header.assetVariant);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, header, tag);
    }
    return tag;
  }
}
const prototype = GiftPlanSelectionCardBanner$Type.prototype;
const giftPlanSelectionCardBannerType = new GiftPlanSelectionCardBanner$Type();
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_plan_selection_card_banner.tsx");

export { GiftPlanSelectionCardBanner_AssetVariant };
export const GiftPlanSelectionCardBanner = giftPlanSelectionCardBannerType;