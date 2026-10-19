// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef10877 from "../../../../../../_runtime/metro/10877__.js";
import _modDef10878 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef10879 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef10880 from "../../../../../../_runtime/metro/10880__.js";
import _modDef10881 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef10882 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef10883 from "../../../../../../_runtime/metro/10883__.js";
import _modDef10884 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef10885 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef10886 from "../../../../../../_runtime/metro/10886__.js";
import _modDef10887 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef10888 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef10889 from "../../../../../../_runtime/metro/10889__.js";
import _modDef10890 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef10891 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef10892 from "../../../../../../_runtime/metro/10892__.js";
import _modDef10893 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef10894 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef10895 from "../../../../../../_runtime/metro/10895__.js";
import _modDef10896 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef10897 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef10898 from "../../../../../../_runtime/metro/10898__.js";
import _modDef10899 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef10900 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10877, medium: _modDef10878, large: _modDef10879 };
const obj2 = { small: _modDef10877, medium: _modDef10878, large: _modDef10879 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10880, medium: _modDef10881, large: _modDef10882 };
const obj3 = { small: _modDef10880, medium: _modDef10881, large: _modDef10882 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10883, medium: _modDef10884, large: _modDef10885 };
const obj4 = { small: _modDef10883, medium: _modDef10884, large: _modDef10885 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10886, medium: _modDef10887, large: _modDef10888 };
const obj5 = { small: _modDef10886, medium: _modDef10887, large: _modDef10888 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10889, medium: _modDef10890, large: _modDef10891 };
const obj6 = { small: _modDef10889, medium: _modDef10890, large: _modDef10891 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10892, medium: _modDef10893, large: _modDef10894 };
const obj7 = { small: _modDef10892, medium: _modDef10893, large: _modDef10894 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10895, medium: _modDef10896, large: _modDef10897 };
const obj8 = { small: _modDef10895, medium: _modDef10896, large: _modDef10897 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10898, medium: _modDef10899, large: _modDef10900 };
const result = size.fileFinishedImporting(
  "modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx",
);

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
