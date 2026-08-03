// === Module 7272: create ===

// Module 7272 (create)
import _slicedToArray from "_slicedToArray";
import { MessageType } from "module_1307";

const require = arg1;
let obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", NORMAL: 1, [1]: "NORMAL", LARGE_TILTED: 2, [2]: "LARGE_TILTED" };
class GiftCustomizationBanner$Type extends MessageType {
  constructor() {
    items = [, , , , , , , , , , ];
    items[0] = { no: 1, name: "asset_url", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "desktop_body", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "mobile_body", kind: "scalar", T: 9 };
    items[3] = {
      no: 4,
      name: "gradient",
      kind: "message",
      T() {
            return callback(7268).Gradient;
          }
    };
    items[4] = { no: 5, name: "background_asset_url", kind: "scalar", T: 9 };
    items[5] = {
      no: 6,
      name: "asset",
      kind: "message",
      T() {
            return callback(7270).ThemeAwareAsset;
          }
    };
    items[6] = {
      no: 7,
      name: "background_asset",
      kind: "message",
      T() {
            return callback(7270).ThemeAwareAsset;
          }
    };
    items[7] = {
      no: 8,
      name: "mobile_background_asset",
      kind: "message",
      T() {
            return callback(7270).ThemeAwareAsset;
          }
    };
    items[8] = {
      no: 9,
      name: "asset_variant",
      kind: "enum",
      T() {
            const items = ["discord_protos.premium_marketing.v1.GiftCustomizationBanner.AssetVariant", closure_3, "ASSET_VARIANT_"];
            return items;
          }
    };
    obj = { no: 10, name: "desktop_body_localized", kind: "message", T: null };
    class T {
      constructor() {
        return require("create").LocalizedString;
      }
    }
    obj[3] = T;
    items[9] = obj;
    items[10] = {
      no: 11,
      name: "mobile_body_localized",
      kind: "message",
      T() {
            return callback(7260).LocalizedString;
          }
    };
    tmp = new tmp("discord_protos.premium_marketing.v1.GiftCustomizationBanner", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
let prototype = GiftCustomizationBanner$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { assetUrl: "", desktopBody: "", mobileBody: "", backgroundAssetUrl: "", assetVariant: 0 };
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
    const LocalizedString = require(7260) /* create */.LocalizedString;
    obj.mobileBodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), arg2, obj.mobileBodyLocalized);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(assetUrl, tag, writeUnknownFields) {
  if ("" !== assetUrl.assetUrl) {
    tag.tag(1, require(1307).WireType.LengthDelimited).string(assetUrl.assetUrl);
    const tagResult = tag.tag(1, require(1307).WireType.LengthDelimited);
  }
  if ("" !== assetUrl.desktopBody) {
    tag.tag(2, require(1307).WireType.LengthDelimited).string(assetUrl.desktopBody);
    const tagResult1 = tag.tag(2, require(1307).WireType.LengthDelimited);
  }
  if ("" !== assetUrl.mobileBody) {
    tag.tag(3, require(1307).WireType.LengthDelimited).string(assetUrl.mobileBody);
    const tagResult2 = tag.tag(3, require(1307).WireType.LengthDelimited);
  }
  if (assetUrl.gradient) {
    const Gradient = require(7268) /* create */.Gradient;
    const tagResult3 = tag.tag(4, require(1307).WireType.LengthDelimited);
    const joined = Gradient.internalBinaryWrite(assetUrl.gradient, tag.tag(4, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Gradient.internalBinaryWrite(assetUrl.gradient, tag.tag(4, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== assetUrl.backgroundAssetUrl) {
    tag.tag(5, require(1307).WireType.LengthDelimited).string(assetUrl.backgroundAssetUrl);
    const tagResult4 = tag.tag(5, require(1307).WireType.LengthDelimited);
  }
  if (assetUrl.asset) {
    const ThemeAwareAsset = require(7270) /* create */.ThemeAwareAsset;
    const tagResult5 = tag.tag(6, require(1307).WireType.LengthDelimited);
    const joined1 = ThemeAwareAsset.internalBinaryWrite(assetUrl.asset, tag.tag(6, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = ThemeAwareAsset.internalBinaryWrite(assetUrl.asset, tag.tag(6, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (assetUrl.backgroundAsset) {
    const ThemeAwareAsset2 = require(7270) /* create */.ThemeAwareAsset;
    const tagResult6 = tag.tag(7, require(1307).WireType.LengthDelimited);
    const joined2 = ThemeAwareAsset2.internalBinaryWrite(assetUrl.backgroundAsset, tag.tag(7, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = ThemeAwareAsset2.internalBinaryWrite(assetUrl.backgroundAsset, tag.tag(7, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (assetUrl.mobileBackgroundAsset) {
    const ThemeAwareAsset3 = require(7270) /* create */.ThemeAwareAsset;
    const tagResult7 = tag.tag(8, require(1307).WireType.LengthDelimited);
    const joined3 = ThemeAwareAsset3.internalBinaryWrite(assetUrl.mobileBackgroundAsset, tag.tag(8, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = ThemeAwareAsset3.internalBinaryWrite(assetUrl.mobileBackgroundAsset, tag.tag(8, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (0 !== assetUrl.assetVariant) {
    tag.tag(9, require(1307).WireType.Varint).int32(assetUrl.assetVariant);
    const tagResult8 = tag.tag(9, require(1307).WireType.Varint);
  }
  if (assetUrl.desktopBodyLocalized) {
    const LocalizedString = require(7260) /* create */.LocalizedString;
    const tagResult9 = tag.tag(10, require(1307).WireType.LengthDelimited);
    const joined4 = LocalizedString.internalBinaryWrite(assetUrl.desktopBodyLocalized, tag.tag(10, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = LocalizedString.internalBinaryWrite(assetUrl.desktopBodyLocalized, tag.tag(10, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (assetUrl.mobileBodyLocalized) {
    const LocalizedString2 = require(7260) /* create */.LocalizedString;
    const tagResult10 = tag.tag(11, require(1307).WireType.LengthDelimited);
    const joined5 = LocalizedString2.internalBinaryWrite(assetUrl.mobileBodyLocalized, tag.tag(11, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult5 = LocalizedString2.internalBinaryWrite(assetUrl.mobileBodyLocalized, tag.tag(11, require(1307).WireType.LengthDelimited).fork(), writeUnknownFields);
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
  { no: 2, name: "desktop_body", kind: "scalar", T: 9 },
  { no: 3, name: "mobile_body", kind: "scalar", T: 9 },
  {
    no: 4,
    name: "gradient",
    kind: "message",
    T() {
      return callback(7268).Gradient;
    }
  },
  { no: 5, name: "background_asset_url", kind: "scalar", T: 9 },
  {
    no: 6,
    name: "asset",
    kind: "message",
    T() {
      return callback(7270).ThemeAwareAsset;
    }
  },
  {
    no: 7,
    name: "background_asset",
    kind: "message",
    T() {
      return callback(7270).ThemeAwareAsset;
    }
  },
  {
    no: 8,
    name: "mobile_background_asset",
    kind: "message",
    T() {
      return callback(7270).ThemeAwareAsset;
    }
  },
  {
    no: 9,
    name: "asset_variant",
    kind: "enum",
    T() {
      const items = ["discord_protos.premium_marketing.v1.GiftCustomizationBanner.AssetVariant", closure_3, "ASSET_VARIANT_"];
      return items;
    }
  },
,

];
obj = { no: 10, name: "desktop_body_localized", kind: "message", T: null };
class T {
  constructor() {
    return require("create").LocalizedString;
  }
}
obj[3] = T;
items[9] = obj;
items[10] = {
  no: 11,
  name: "mobile_body_localized",
  kind: "message",
  T() {
    return callback(7260).LocalizedString;
  }
};
prototype = new prototype("discord_protos.premium_marketing.v1.GiftCustomizationBanner", items, tmp, T, GiftCustomizationBanner$Type, prototype, items, arg1, dependencyMap);
// ThrowIfThisInitialized (0x7c)
let result = require("create").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_customization_banner.tsx");

export const GiftCustomizationBanner_AssetVariant = obj;
export const GiftCustomizationBanner = prototype;