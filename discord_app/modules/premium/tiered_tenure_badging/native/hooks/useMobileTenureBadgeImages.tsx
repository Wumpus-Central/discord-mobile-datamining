// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef13892 from "../../../../../../_runtime/metro/13892__.js";
import _modDef13893 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef13894 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef13895 from "../../../../../../_runtime/metro/13895__.js";
import _modDef13896 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef13897 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef13898 from "../../../../../../_runtime/metro/13898__.js";
import _modDef13899 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef13900 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef13901 from "../../../../../../_runtime/metro/13901__.js";
import _modDef13902 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef13903 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef13904 from "../../../../../../_runtime/metro/13904__.js";
import _modDef13905 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef13906 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef13907 from "../../../../../../_runtime/metro/13907__.js";
import _modDef13908 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef13909 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef13910 from "../../../../../../_runtime/metro/13910__.js";
import _modDef13911 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef13912 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef13913 from "../../../../../../_runtime/metro/13913__.js";
import _modDef13914 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef13915 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef13892, medium: _modDef13893, large: _modDef13894 };
const obj2 = { small: _modDef13892, medium: _modDef13893, large: _modDef13894 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef13895, medium: _modDef13896, large: _modDef13897 };
const obj3 = { small: _modDef13895, medium: _modDef13896, large: _modDef13897 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef13898, medium: _modDef13899, large: _modDef13900 };
const obj4 = { small: _modDef13898, medium: _modDef13899, large: _modDef13900 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef13901, medium: _modDef13902, large: _modDef13903 };
const obj5 = { small: _modDef13901, medium: _modDef13902, large: _modDef13903 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef13904, medium: _modDef13905, large: _modDef13906 };
const obj6 = { small: _modDef13904, medium: _modDef13905, large: _modDef13906 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef13907, medium: _modDef13908, large: _modDef13909 };
const obj7 = { small: _modDef13907, medium: _modDef13908, large: _modDef13909 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef13910, medium: _modDef13911, large: _modDef13912 };
const obj8 = { small: _modDef13910, medium: _modDef13911, large: _modDef13912 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef13913, medium: _modDef13914, large: _modDef13915 };
const result = size.fileFinishedImporting(
  "modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx",
);

export function useMobileTenureBadgeImages(id) {
  let tmp = null;
  if (null != id) {
    tmp = obj[id];
  }
  return tmp;
}
export function getMobileTenureBadgeImages(arg0) {
  return obj[arg0];
}
