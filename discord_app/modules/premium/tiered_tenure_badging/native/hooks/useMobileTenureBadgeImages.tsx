// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef13874 from "../../../../../../_runtime/metro/13874__.js";
import _modDef13875 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef13876 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef13877 from "../../../../../../_runtime/metro/13877__.js";
import _modDef13878 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef13879 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef13880 from "../../../../../../_runtime/metro/13880__.js";
import _modDef13881 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef13882 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef13883 from "../../../../../../_runtime/metro/13883__.js";
import _modDef13884 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef13885 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef13886 from "../../../../../../_runtime/metro/13886__.js";
import _modDef13887 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef13888 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef13889 from "../../../../../../_runtime/metro/13889__.js";
import _modDef13890 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef13891 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef13892 from "../../../../../../_runtime/metro/13892__.js";
import _modDef13893 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef13894 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef13895 from "../../../../../../_runtime/metro/13895__.js";
import _modDef13896 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef13897 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef13874, medium: _modDef13875, large: _modDef13876 };
const obj2 = { small: _modDef13874, medium: _modDef13875, large: _modDef13876 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef13877, medium: _modDef13878, large: _modDef13879 };
const obj3 = { small: _modDef13877, medium: _modDef13878, large: _modDef13879 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef13880, medium: _modDef13881, large: _modDef13882 };
const obj4 = { small: _modDef13880, medium: _modDef13881, large: _modDef13882 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef13883, medium: _modDef13884, large: _modDef13885 };
const obj5 = { small: _modDef13883, medium: _modDef13884, large: _modDef13885 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef13886, medium: _modDef13887, large: _modDef13888 };
const obj6 = { small: _modDef13886, medium: _modDef13887, large: _modDef13888 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef13889, medium: _modDef13890, large: _modDef13891 };
const obj7 = { small: _modDef13889, medium: _modDef13890, large: _modDef13891 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef13892, medium: _modDef13893, large: _modDef13894 };
const obj8 = { small: _modDef13892, medium: _modDef13893, large: _modDef13894 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef13895, medium: _modDef13896, large: _modDef13897 };
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
