// === Module 10427: billing_settings_nitro_gift_banner ===

// Module 10427 (billing_settings_nitro_gift_banner)
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
  return require("localized_string").LocalizedString;
};
const T6 = function T() {
  return require("localized_string").LocalizedString;
};
const MessageType = _mod1198.MessageType;
class BillingSettingsNitroGiftBanner$Type extends MessageType {
  constructor() {
    const items = [{ no: 1, name: "asset_url", kind: "scalar", T: 9 }, { no: 2, name: "header", kind: "scalar", T: 9 }, { no: 3, name: "body", kind: "scalar", T: 9 }, { no: 4, name: "background_asset_url", kind: "scalar", T: 9 }, { no: 5, name: "gradient", kind: "message", T: T2 }, { no: 6, name: "text_color", kind: "scalar", T: 9 }, { no: 7, name: "additional_terms", kind: "scalar", T: 9 }, { no: 8, name: "asset", kind: "message", T: T3 }, { no: 9, name: "background_asset", kind: "message", T: T4 }, { no: 10, name: "header_localized", kind: "message", T: T5 }, , ];
    const obj = { no: 11, name: "body_localized", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[4]).LocalizedString;
      }
    }
    items[10] = obj;
    items[11] = { no: 12, name: "additional_terms_localized", kind: "message", T: T6 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.BillingSettingsNitroGiftBanner", items, T);
    return tmp2;
  }
  create(arr) {
    const obj = { assetUrl: "", header: "", body: "", backgroundAssetUrl: "", textColor: "", additionalTerms: "" };
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
    if ("" !== assetUrl.header) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.string(assetUrl.header);
    }
    if ("" !== assetUrl.body) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      tagResult2.string(assetUrl.body);
    }
    if ("" !== assetUrl.backgroundAssetUrl) {
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      tagResult3.string(assetUrl.backgroundAssetUrl);
    }
    if (assetUrl.gradient) {
      const Gradient = gradient2.Gradient;
      internalBinaryWrite = Gradient.internalBinaryWrite;
      const gradient = assetUrl.gradient;
      const tagResult4 = tag.tag(5, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(gradient, tagResult4.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if ("" !== assetUrl.textColor) {
      const tagResult5 = tag.tag(6, _mod1198.WireType.LengthDelimited);
      tagResult5.string(assetUrl.textColor);
    }
    if ("" !== assetUrl.additionalTerms) {
      const tagResult6 = tag.tag(7, _mod1198.WireType.LengthDelimited);
      tagResult6.string(assetUrl.additionalTerms);
    }
    if (assetUrl.asset) {
      const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite2 = ThemeAwareAsset.internalBinaryWrite;
      const asset = assetUrl.asset;
      const tagResult7 = tag.tag(8, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(asset, tagResult7.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (assetUrl.backgroundAsset) {
      const ThemeAwareAsset2 = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite3 = ThemeAwareAsset2.internalBinaryWrite;
      const backgroundAsset = assetUrl.backgroundAsset;
      const tagResult8 = tag.tag(9, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(backgroundAsset, tagResult8.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if (assetUrl.headerLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite4 = LocalizedString.internalBinaryWrite;
      const headerLocalized = assetUrl.headerLocalized;
      const tagResult9 = tag.tag(10, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(headerLocalized, tagResult9.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    if (assetUrl.bodyLocalized) {
      const LocalizedString2 = localized_string.LocalizedString;
      internalBinaryWrite5 = LocalizedString2.internalBinaryWrite;
      const bodyLocalized = assetUrl.bodyLocalized;
      const tagResult10 = tag.tag(11, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(bodyLocalized, tagResult10.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite5Result.join();
    }
    if (assetUrl.additionalTermsLocalized) {
      const LocalizedString3 = localized_string.LocalizedString;
      internalBinaryWrite6 = LocalizedString3.internalBinaryWrite;
      const additionalTermsLocalized = assetUrl.additionalTermsLocalized;
      const tagResult11 = tag.tag(12, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite6Result = internalBinaryWrite6(additionalTermsLocalized, tagResult11.fork(), writeUnknownFields);
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
const prototype = BillingSettingsNitroGiftBanner$Type.prototype;
let items = [{ no: 1, name: "asset_url", kind: "scalar", T: 9 }, { no: 2, name: "header", kind: "scalar", T: 9 }, { no: 3, name: "body", kind: "scalar", T: 9 }, { no: 4, name: "background_asset_url", kind: "scalar", T: 9 }, { no: 5, name: "gradient", kind: "message", T: T2 }, { no: 6, name: "text_color", kind: "scalar", T: 9 }, { no: 7, name: "additional_terms", kind: "scalar", T: 9 }, { no: 8, name: "asset", kind: "message", T: T3 }, { no: 9, name: "background_asset", kind: "message", T: T4 }, { no: 10, name: "header_localized", kind: "message", T: T5 }, , ];
let obj = { no: 11, name: "body_localized", kind: "message", T };
class T {
  constructor() {
    return require("localized_string").LocalizedString;
  }
}
items[10] = obj;
items[11] = { no: 12, name: "additional_terms_localized", kind: "message", T: T6 };
const prototype1 = new prototype("discord_protos.premium_marketing.v1.BillingSettingsNitroGiftBanner", items, tmp, T, BillingSettingsNitroGiftBanner$Type, prototype, items);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/billing_settings_nitro_gift_banner.tsx");

export const BillingSettingsNitroGiftBanner = prototype1;