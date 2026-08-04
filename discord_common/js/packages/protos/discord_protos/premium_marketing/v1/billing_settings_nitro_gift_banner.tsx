import _slicedToArray from "_slicedToArray";
import { MessageType } from "module_1307";

const require = arg1;
class BillingSettingsNitroGiftBanner$Type extends MessageType {
  constructor() {
    items = [, , , , , , , , , , , ];
    items[0] = { no: 1, name: "asset_url", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "header", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "body", kind: "scalar", T: 9 };
    items[3] = { no: 4, name: "background_asset_url", kind: "scalar", T: 9 };
    items[4] = {
      no: 5,
      name: "gradient",
      kind: "message",
      T() {
            return callback(7280).Gradient;
          }
    };
    items[5] = { no: 6, name: "text_color", kind: "scalar", T: 9 };
    items[6] = { no: 7, name: "additional_terms", kind: "scalar", T: 9 };
    items[7] = {
      no: 8,
      name: "asset",
      kind: "message",
      T() {
            return callback(7282).ThemeAwareAsset;
          }
    };
    items[8] = {
      no: 9,
      name: "background_asset",
      kind: "message",
      T() {
            return callback(7282).ThemeAwareAsset;
          }
    };
    items[9] = {
      no: 10,
      name: "header_localized",
      kind: "message",
      T() {
            return callback(7272).LocalizedString;
          }
    };
    obj = { no: 11, name: "body_localized", kind: "message", T: null };
    class T {
      constructor() {
        return require("create").LocalizedString;
      }
    }
    obj[3] = T;
    items[10] = obj;
    items[11] = {
      no: 12,
      name: "additional_terms_localized",
      kind: "message",
      T() {
            return callback(7272).LocalizedString;
          }
    };
    tmp = new tmp("discord_protos.premium_marketing.v1.BillingSettingsNitroGiftBanner", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
let prototype = BillingSettingsNitroGiftBanner$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { assetUrl: "", header: "", body: "", backgroundAssetUrl: "", textColor: "", additionalTerms: "" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, require(1307).MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = require(1307).reflectionMergePartial(this, obj, arr);
    const tmpResult = require(1307);
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    const LocalizedString = require(7272) /* create */.LocalizedString;
    obj.additionalTermsLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), arg2, obj.additionalTermsLocalized);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(assetUrl, tag, writeUnknownFields) {
  if ("" !== assetUrl.assetUrl) {
    tag.tag(1, require(1307).WireType.LengthDelimited).string(assetUrl.assetUrl);
    const tagResult = tag.tag(1, require(1307).WireType.LengthDelimited);
  }
  if ("" !== assetUrl.header) {
    tag.tag(2, require(1307).WireType.LengthDelimited).string(assetUrl.header);
    const tagResult1 = tag.tag(2, require(1307).WireType.LengthDelimited);
  }
  if ("" !== assetUrl.body) {
    tag.tag(3, require(1307).WireType.LengthDelimited).string(assetUrl.body);
    const tagResult2 = tag.tag(3, require(1307).WireType.LengthDelimited);
  }
  if ("" !== assetUrl.backgroundAssetUrl) {
    tag.tag(4, require(1307).WireType.LengthDelimited).string(assetUrl.backgroundAssetUrl);
    const tagResult3 = tag.tag(4, require(1307).WireType.LengthDelimited);
  }
  if (assetUrl.gradient) {
    const Gradient = require(7280) /* create */.Gradient;
    const tagResult4 = tag.tag(5, require(1307).WireType.LengthDelimited);
    const joined = Gradient.internalBinaryWrite(assetUrl.gradient, tag.tag(5, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Gradient.internalBinaryWrite(assetUrl.gradient, tag.tag(5, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== assetUrl.textColor) {
    tag.tag(6, require(1307).WireType.LengthDelimited).string(assetUrl.textColor);
    const tagResult5 = tag.tag(6, require(1307).WireType.LengthDelimited);
  }
  if ("" !== assetUrl.additionalTerms) {
    tag.tag(7, require(1307).WireType.LengthDelimited).string(assetUrl.additionalTerms);
    const tagResult6 = tag.tag(7, require(1307).WireType.LengthDelimited);
  }
  if (assetUrl.asset) {
    const ThemeAwareAsset = require(7282) /* create */.ThemeAwareAsset;
    const tagResult7 = tag.tag(8, require(1307).WireType.LengthDelimited);
    const joined1 = ThemeAwareAsset.internalBinaryWrite(assetUrl.asset, tag.tag(8, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = ThemeAwareAsset.internalBinaryWrite(assetUrl.asset, tag.tag(8, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (assetUrl.backgroundAsset) {
    const ThemeAwareAsset2 = require(7282) /* create */.ThemeAwareAsset;
    const tagResult8 = tag.tag(9, require(1307).WireType.LengthDelimited);
    const joined2 = ThemeAwareAsset2.internalBinaryWrite(assetUrl.backgroundAsset, tag.tag(9, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = ThemeAwareAsset2.internalBinaryWrite(assetUrl.backgroundAsset, tag.tag(9, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (assetUrl.headerLocalized) {
    const LocalizedString = require(7272) /* create */.LocalizedString;
    const tagResult9 = tag.tag(10, require(1307).WireType.LengthDelimited);
    const joined3 = LocalizedString.internalBinaryWrite(assetUrl.headerLocalized, tag.tag(10, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = LocalizedString.internalBinaryWrite(assetUrl.headerLocalized, tag.tag(10, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (assetUrl.bodyLocalized) {
    const LocalizedString2 = require(7272) /* create */.LocalizedString;
    const tagResult10 = tag.tag(11, require(1307).WireType.LengthDelimited);
    const joined4 = LocalizedString2.internalBinaryWrite(assetUrl.bodyLocalized, tag.tag(11, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = LocalizedString2.internalBinaryWrite(assetUrl.bodyLocalized, tag.tag(11, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (assetUrl.additionalTermsLocalized) {
    const LocalizedString3 = require(7272) /* create */.LocalizedString;
    const tagResult11 = tag.tag(12, require(1307).WireType.LengthDelimited);
    const joined5 = LocalizedString3.internalBinaryWrite(assetUrl.additionalTermsLocalized, tag.tag(12, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult5 = LocalizedString3.internalBinaryWrite(assetUrl.additionalTermsLocalized, tag.tag(12, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = require(1307).UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, assetUrl, tag);
  }
  return tag;
};
let items = [
  { no: 1, name: "asset_url", kind: "scalar", T: 9 },
  { no: 2, name: "header", kind: "scalar", T: 9 },
  { no: 3, name: "body", kind: "scalar", T: 9 },
  { no: 4, name: "background_asset_url", kind: "scalar", T: 9 },
  {
    no: 5,
    name: "gradient",
    kind: "message",
    T() {
      return callback(7280).Gradient;
    }
  },
  { no: 6, name: "text_color", kind: "scalar", T: 9 },
  { no: 7, name: "additional_terms", kind: "scalar", T: 9 },
  {
    no: 8,
    name: "asset",
    kind: "message",
    T() {
      return callback(7282).ThemeAwareAsset;
    }
  },
  {
    no: 9,
    name: "background_asset",
    kind: "message",
    T() {
      return callback(7282).ThemeAwareAsset;
    }
  },
  {
    no: 10,
    name: "header_localized",
    kind: "message",
    T() {
      return callback(7272).LocalizedString;
    }
  },
,

];
let obj = { no: 11, name: "body_localized", kind: "message", T: null };
class T {
  constructor() {
    return require("create").LocalizedString;
  }
}
obj[3] = T;
items[10] = obj;
items[11] = {
  no: 12,
  name: "additional_terms_localized",
  kind: "message",
  T() {
    return callback(7272).LocalizedString;
  }
};
prototype = new prototype("discord_protos.premium_marketing.v1.BillingSettingsNitroGiftBanner", items, tmp, T, BillingSettingsNitroGiftBanner$Type, prototype, items);
// ThrowIfThisInitialized (0x7c)
let result = require("create").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/billing_settings_nitro_gift_banner.tsx");

export const BillingSettingsNitroGiftBanner = prototype;