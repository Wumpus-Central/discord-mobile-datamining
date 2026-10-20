// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef10888 from "../../../../../../_runtime/metro/10888__.js";
import _modDef10889 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef10890 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef10891 from "../../../../../../_runtime/metro/10891__.js";
import _modDef10892 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef10893 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef10894 from "../../../../../../_runtime/metro/10894__.js";
import _modDef10895 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef10896 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef10897 from "../../../../../../_runtime/metro/10897__.js";
import _modDef10898 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef10899 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef10900 from "../../../../../../_runtime/metro/10900__.js";
import _modDef10901 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef10902 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef10903 from "../../../../../../_runtime/metro/10903__.js";
import _modDef10904 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef10905 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef10906 from "../../../../../../_runtime/metro/10906__.js";
import _modDef10907 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef10908 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef10909 from "../../../../../../_runtime/metro/10909__.js";
import _modDef10910 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef10911 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10888, medium: _modDef10889, large: _modDef10890 };
const obj2 = { small: _modDef10888, medium: _modDef10889, large: _modDef10890 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10891, medium: _modDef10892, large: _modDef10893 };
const obj3 = { small: _modDef10891, medium: _modDef10892, large: _modDef10893 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10894, medium: _modDef10895, large: _modDef10896 };
const obj4 = { small: _modDef10894, medium: _modDef10895, large: _modDef10896 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10897, medium: _modDef10898, large: _modDef10899 };
const obj5 = { small: _modDef10897, medium: _modDef10898, large: _modDef10899 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10900, medium: _modDef10901, large: _modDef10902 };
const obj6 = { small: _modDef10900, medium: _modDef10901, large: _modDef10902 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10903, medium: _modDef10904, large: _modDef10905 };
const obj7 = { small: _modDef10903, medium: _modDef10904, large: _modDef10905 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10906, medium: _modDef10907, large: _modDef10908 };
const obj8 = { small: _modDef10906, medium: _modDef10907, large: _modDef10908 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10909, medium: _modDef10910, large: _modDef10911 };
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
