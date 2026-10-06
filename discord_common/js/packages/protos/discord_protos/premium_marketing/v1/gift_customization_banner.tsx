// === Module 10426: gift_customization_banner ===

// Module 10426 (gift_customization_banner)
import _mod1198 from "module_1198" /* 1198 */;
import localized_string from "localized_string" /* 10414 */;
import gradient2 from "gradient" /* 10422 */;
import theme_aware_asset from "theme_aware_asset" /* 10424 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3, internalBinaryWrite4, internalBinaryWrite5, internalBinaryWrite6;

const T2 = function T() {
  return require("gradient").Gradient;
};
const T3 = function T() {
  return require("theme_aware_asset").ThemeAwareAsset;
};
const T4 = function T() {
  return require("theme_aware_asset").ThemeAwareAsset;
};
const T5 = function T() {
  return require("theme_aware_asset").ThemeAwareAsset;
};
const T6 = function T() {
  const items = ["discord_protos.premium_marketing.v1.GiftCustomizationBanner.AssetVariant", GiftCustomizationBanner_AssetVariant, "ASSET_VARIANT_"];
  return items;
};
const T7 = function T() {
  return require("localized_string").LocalizedString;
};
const GiftCustomizationBanner_AssetVariant = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", NORMAL: 1, [1]: "NORMAL", LARGE_TILTED: 2, [2]: "LARGE_TILTED" };
const MessageType = _mod1198.MessageType;
class GiftCustomizationBanner$Type extends MessageType {
  constructor() {
    let items = [{ no: 1, name: "asset_url", kind: "scalar", T: 9 }, { no: 2, name: "desktop_body", kind: "scalar", T: 9 }, { no: 3, name: "mobile_body", kind: "scalar", T: 9 }, { no: 4, name: "gradient", kind: "message", T: T2 }, { no: 5, name: "background_asset_url", kind: "scalar", T: 9 }, { no: 6, name: "asset", kind: "message", T: T3 }, { no: 7, name: "background_asset", kind: "message", T: T4 }, { no: 8, name: "mobile_background_asset", kind: "message", T: T5 }, { no: 9, name: "asset_variant", kind: "enum", T: T6 }, , ];
    const obj = { no: 10, name: "desktop_body_localized", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[4]).LocalizedString;
      }
    }
    items[9] = obj;
    items[10] = { no: 11, name: "mobile_body_localized", kind: "message", T: T7 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.GiftCustomizationBanner", items, T);
    return tmp2;
  }
  create(arr) {
    const obj = { assetUrl: "", desktopBody: "", mobileBody: "", backgroundAssetUrl: "", assetVariant: 0 };
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
  internalBinaryWrite(assetUrl, tag, writeUnknownFields) {
    if ("" !== assetUrl.assetUrl) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(assetUrl.assetUrl);
    }
    if ("" !== assetUrl.desktopBody) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.string(assetUrl.desktopBody);
    }
    if ("" !== assetUrl.mobileBody) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      tagResult2.string(assetUrl.mobileBody);
    }
    if (assetUrl.gradient) {
      const Gradient = gradient2.Gradient;
      internalBinaryWrite = Gradient.internalBinaryWrite;
      const gradient = assetUrl.gradient;
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(gradient, tagResult3.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if ("" !== assetUrl.backgroundAssetUrl) {
      const tagResult4 = tag.tag(5, _mod1198.WireType.LengthDelimited);
      tagResult4.string(assetUrl.backgroundAssetUrl);
    }
    if (assetUrl.asset) {
      const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite2 = ThemeAwareAsset.internalBinaryWrite;
      const asset = assetUrl.asset;
      const tagResult5 = tag.tag(6, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(asset, tagResult5.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (assetUrl.backgroundAsset) {
      const ThemeAwareAsset2 = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite3 = ThemeAwareAsset2.internalBinaryWrite;
      const backgroundAsset = assetUrl.backgroundAsset;
      const tagResult6 = tag.tag(7, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(backgroundAsset, tagResult6.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if (assetUrl.mobileBackgroundAsset) {
      const ThemeAwareAsset3 = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite4 = ThemeAwareAsset3.internalBinaryWrite;
      const mobileBackgroundAsset = assetUrl.mobileBackgroundAsset;
      const tagResult7 = tag.tag(8, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(mobileBackgroundAsset, tagResult7.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    if (0 !== assetUrl.assetVariant) {
      const tagResult8 = tag.tag(9, _mod1198.WireType.Varint);
      tagResult8.int32(assetUrl.assetVariant);
    }
    if (assetUrl.desktopBodyLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite5 = LocalizedString.internalBinaryWrite;
      const desktopBodyLocalized = assetUrl.desktopBodyLocalized;
      const tagResult9 = tag.tag(10, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(desktopBodyLocalized, tagResult9.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite5Result.join();
    }
    if (assetUrl.mobileBodyLocalized) {
      const LocalizedString2 = localized_string.LocalizedString;
      internalBinaryWrite6 = LocalizedString2.internalBinaryWrite;
      const mobileBodyLocalized = assetUrl.mobileBodyLocalized;
      const tagResult10 = tag.tag(11, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite6Result = internalBinaryWrite6(mobileBodyLocalized, tagResult10.fork(), writeUnknownFields);
      const joined5 = internalBinaryWrite6Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, assetUrl, tag);
    }
    return tag;
  }
}
const prototype = GiftCustomizationBanner$Type.prototype;
let items = [{ no: 1, name: "asset_url", kind: "scalar", T: 9 }, { no: 2, name: "desktop_body", kind: "scalar", T: 9 }, { no: 3, name: "mobile_body", kind: "scalar", T: 9 }, { no: 4, name: "gradient", kind: "message", T: T2 }, { no: 5, name: "background_asset_url", kind: "scalar", T: 9 }, { no: 6, name: "asset", kind: "message", T: T3 }, { no: 7, name: "background_asset", kind: "message", T: T4 }, { no: 8, name: "mobile_background_asset", kind: "message", T: T5 }, { no: 9, name: "asset_variant", kind: "enum", T: T6 }, , ];
let obj2 = { no: 10, name: "desktop_body_localized", kind: "message", T };
class T {
  constructor() {
    return require("localized_string").LocalizedString;
  }
}
items[9] = obj2;
items[10] = { no: 11, name: "mobile_body_localized", kind: "message", T: T7 };
const prototype1 = new prototype("discord_protos.premium_marketing.v1.GiftCustomizationBanner", items, tmp, T, GiftCustomizationBanner$Type, prototype, items, require, dependencyMap);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_customization_banner.tsx");

export { GiftCustomizationBanner_AssetVariant };
export const GiftCustomizationBanner = prototype1;