// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import set from "../../../../../../_runtime/00002_set.js";
import GuildFeatures from "../../../PremiumConstants.tsx";
import registerAssetDefault from "../../../../../../_runtime/08881_registerAsset.js";
import metadataDefault from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import metadataDefault2 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import registerAssetDefault2 from "../../../../../../_runtime/08884_registerAsset.js";
import metadataDefault3 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import metadataDefault4 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import registerAssetDefault3 from "../../../../../../_runtime/08887_registerAsset.js";
import metadataDefault5 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import metadataDefault6 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import registerAssetDefault4 from "../../../../../../_runtime/08890_registerAsset.js";
import metadataDefault7 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import metadataDefault8 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import registerAssetDefault5 from "../../../../../../_runtime/08893_registerAsset.js";
import metadataDefault9 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import metadataDefault10 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import registerAssetDefault6 from "../../../../../../_runtime/08896_registerAsset.js";
import metadataDefault11 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import metadataDefault12 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import registerAssetDefault7 from "../../../../../../_runtime/08899_registerAsset.js";
import metadataDefault13 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import metadataDefault14 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import registerAssetDefault8 from "../../../../../../_runtime/08902_registerAsset.js";
import metadataDefault15 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import metadataDefault16 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";

const TieredTenureBadge = GuildFeatures.TieredTenureBadge;
let obj = {};
obj = { small: registerAssetDefault, medium: metadataDefault, large: metadataDefault2 };
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = obj;
obj = { small: registerAssetDefault2, medium: metadataDefault3, large: metadataDefault4 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = obj;
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: registerAssetDefault3, medium: metadataDefault5, large: metadataDefault6 };
const obj1 = { small: registerAssetDefault3, medium: metadataDefault5, large: metadataDefault6 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: registerAssetDefault4, medium: metadataDefault7, large: metadataDefault8 };
const obj2 = { small: registerAssetDefault4, medium: metadataDefault7, large: metadataDefault8 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: registerAssetDefault5, medium: metadataDefault9, large: metadataDefault10 };
const obj3 = { small: registerAssetDefault5, medium: metadataDefault9, large: metadataDefault10 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: registerAssetDefault6, medium: metadataDefault11, large: metadataDefault12 };
const obj4 = { small: registerAssetDefault6, medium: metadataDefault11, large: metadataDefault12 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: registerAssetDefault7, medium: metadataDefault13, large: metadataDefault14 };
const obj5 = { small: registerAssetDefault7, medium: metadataDefault13, large: metadataDefault14 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: registerAssetDefault8, medium: metadataDefault15, large: metadataDefault16 };
const obj6 = { small: registerAssetDefault8, medium: metadataDefault15, large: metadataDefault16 };
const result = set.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx");

export const useMobileTenureBadgeImages = function useMobileTenureBadgeImages(id) {
  let tmp = null;
  if (null != id) {
    tmp = obj[id];
  }
  return tmp;
};
export const getMobileTenureBadgeImages = function getMobileTenureBadgeImages(arg0) {
  return obj[arg0];
};