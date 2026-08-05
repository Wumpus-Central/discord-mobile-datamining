import { 01307__ } from "../../../../../../../_runtime/metro/01307__.js";
import { create } from "../../common/v1/localized_string.tsx";
import { create } from "gradient.tsx";
import { create } from "theme_aware_asset.tsx";
// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_plan_selection_card_banner.tsx
import _slicedToArray from "_slicedToArray";
import { MessageType } from "module_1307";

const require = arg1;
let obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", NORMAL: 1, [1]: "NORMAL", LARGE_TILTED: 2, [2]: "LARGE_TILTED" };
class GiftPlanSelectionCardBanner$Type extends MessageType {
  constructor() {
    items = [, , , , , , , , , , , , , , , ];
    items[0] = { no: 1, name: "header", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "desktop_body", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "mobile_body", kind: "scalar", T: 9 };
    items[3] = {
      no: 4,
      name: "avatar_asset",
      kind: "message",
      T() {
            return callback(7282).ThemeAwareAsset;
          }
    };
    items[4] = { no: 5, name: "banner_asset_url", kind: "scalar", T: 9 };
    items[5] = { no: 6, name: "background_asset_url", kind: "scalar", T: 9 };
    items[6] = { no: 7, name: "card_asset_url", kind: "scalar", T: 9 };
    items[7] = {
      no: 8,
      name: "gradient",
      kind: "message",
      T() {
            return callback(7280).Gradient;
          }
    };
    items[8] = {
      no: 9,
      name: "banner_asset",
      kind: "message",
      T() {
            return callback(7282).ThemeAwareAsset;
          }
    };
    items[9] = {
      no: 10,
      name: "background_asset",
      kind: "message",
      T() {
            return callback(7282).ThemeAwareAsset;
          }
    };
    items[10] = {
      no: 11,
      name: "card_asset",
      kind: "message",
      T() {
            return callback(7282).ThemeAwareAsset;
          }
    };
    items[11] = {
      no: 12,
      name: "mobile_banner_asset",
      kind: "message",
      T() {
            return callback(7282).ThemeAwareAsset;
          }
    };
    items[12] = {
      no: 13,
      name: "header_localized",
      kind: "message",
      T() {
            return callback(7272).LocalizedString;
          }
    };
    items[13] = {
      no: 14,
      name: "desktop_body_localized",
      kind: "message",
      T() {
            return callback(7272).LocalizedString;
          }
    };
    obj = { no: 15, name: "mobile_body_localized", kind: "message", T: null };
    class T {
      constructor() {
        return require("create").LocalizedString;
      }
    }
    obj[3] = T;
    items[14] = obj;
    items[15] = {
      no: 16,
      name: "asset_variant",
      kind: "enum",
      T() {
            const items = ["discord_protos.premium_marketing.v1.GiftPlanSelectionCardBanner.AssetVariant", closure_3, "ASSET_VARIANT_"];
            return items;
          }
    };
    tmp = new tmp("discord_protos.premium_marketing.v1.GiftPlanSelectionCardBanner", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype = GiftPlanSelectionCardBanner$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { header: "", desktopBody: "", mobileBody: "", bannerAssetUrl: "", backgroundAssetUrl: "", cardAssetUrl: "", assetVariant: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  if (pos.pos < pos.pos + arg1) {
    [r10019, r10020] = callback(pos.tag(), 2);
    const tmp3 = callback(pos.tag(), 2);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(header, tag, writeUnknownFields) {
  if ("" !== header.header) {
    tag.tag(1, 01307__.WireType.LengthDelimited).string(header.header);
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
  }
  if ("" !== header.desktopBody) {
    tag.tag(2, 01307__.WireType.LengthDelimited).string(header.desktopBody);
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
  }
  if ("" !== header.mobileBody) {
    tag.tag(3, 01307__.WireType.LengthDelimited).string(header.mobileBody);
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
  }
  if (header.avatarAsset) {
    const ThemeAwareAsset = create /* create */.ThemeAwareAsset;
    const tagResult3 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined = ThemeAwareAsset.internalBinaryWrite(header.avatarAsset, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(header.avatarAsset, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== header.bannerAssetUrl) {
    tag.tag(5, 01307__.WireType.LengthDelimited).string(header.bannerAssetUrl);
    const tagResult4 = tag.tag(5, 01307__.WireType.LengthDelimited);
  }
  if ("" !== header.backgroundAssetUrl) {
    tag.tag(6, 01307__.WireType.LengthDelimited).string(header.backgroundAssetUrl);
    const tagResult5 = tag.tag(6, 01307__.WireType.LengthDelimited);
  }
  if ("" !== header.cardAssetUrl) {
    tag.tag(7, 01307__.WireType.LengthDelimited).string(header.cardAssetUrl);
    const tagResult6 = tag.tag(7, 01307__.WireType.LengthDelimited);
  }
  if (header.gradient) {
    const Gradient = create /* create */.Gradient;
    const tagResult7 = tag.tag(8, 01307__.WireType.LengthDelimited);
    const joined1 = Gradient.internalBinaryWrite(header.gradient, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = Gradient.internalBinaryWrite(header.gradient, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (header.bannerAsset) {
    const ThemeAwareAsset2 = create /* create */.ThemeAwareAsset;
    const tagResult8 = tag.tag(9, 01307__.WireType.LengthDelimited);
    const joined2 = ThemeAwareAsset2.internalBinaryWrite(header.bannerAsset, tag.tag(9, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = ThemeAwareAsset2.internalBinaryWrite(header.bannerAsset, tag.tag(9, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (header.backgroundAsset) {
    const ThemeAwareAsset3 = create /* create */.ThemeAwareAsset;
    const tagResult9 = tag.tag(10, 01307__.WireType.LengthDelimited);
    const joined3 = ThemeAwareAsset3.internalBinaryWrite(header.backgroundAsset, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = ThemeAwareAsset3.internalBinaryWrite(header.backgroundAsset, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (header.cardAsset) {
    const ThemeAwareAsset4 = create /* create */.ThemeAwareAsset;
    const tagResult10 = tag.tag(11, 01307__.WireType.LengthDelimited);
    const joined4 = ThemeAwareAsset4.internalBinaryWrite(header.cardAsset, tag.tag(11, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = ThemeAwareAsset4.internalBinaryWrite(header.cardAsset, tag.tag(11, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (header.mobileBannerAsset) {
    const ThemeAwareAsset5 = create /* create */.ThemeAwareAsset;
    const tagResult11 = tag.tag(12, 01307__.WireType.LengthDelimited);
    const joined5 = ThemeAwareAsset5.internalBinaryWrite(header.mobileBannerAsset, tag.tag(12, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult5 = ThemeAwareAsset5.internalBinaryWrite(header.mobileBannerAsset, tag.tag(12, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (header.headerLocalized) {
    const LocalizedString = create /* create */.LocalizedString;
    const tagResult12 = tag.tag(13, 01307__.WireType.LengthDelimited);
    const joined6 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(13, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult6 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(13, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (header.desktopBodyLocalized) {
    const LocalizedString2 = create /* create */.LocalizedString;
    const tagResult13 = tag.tag(14, 01307__.WireType.LengthDelimited);
    const joined7 = LocalizedString2.internalBinaryWrite(header.desktopBodyLocalized, tag.tag(14, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult7 = LocalizedString2.internalBinaryWrite(header.desktopBodyLocalized, tag.tag(14, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (header.mobileBodyLocalized) {
    const LocalizedString3 = create /* create */.LocalizedString;
    const tagResult14 = tag.tag(15, 01307__.WireType.LengthDelimited);
    const joined8 = LocalizedString3.internalBinaryWrite(header.mobileBodyLocalized, tag.tag(15, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult8 = LocalizedString3.internalBinaryWrite(header.mobileBodyLocalized, tag.tag(15, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (0 !== header.assetVariant) {
    tag.tag(16, 01307__.WireType.Varint).int32(header.assetVariant);
    const tagResult15 = tag.tag(16, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, header, tag);
  }
  return tag;
};
const giftPlanSelectionCardBannerType = new GiftPlanSelectionCardBanner$Type();
let result = require("create").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_plan_selection_card_banner.tsx");

export const GiftPlanSelectionCardBanner_AssetVariant = obj;
export const GiftPlanSelectionCardBanner = giftPlanSelectionCardBannerType;