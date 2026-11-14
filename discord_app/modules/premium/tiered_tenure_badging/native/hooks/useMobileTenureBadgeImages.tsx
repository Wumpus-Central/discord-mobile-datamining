// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef10086 from "../../../../../../_runtime/metro/10086__.js";
import _modDef10087 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef10088 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef10089 from "../../../../../../_runtime/metro/10089__.js";
import _modDef10090 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef10091 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef10092 from "../../../../../../_runtime/metro/10092__.js";
import _modDef10093 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef10094 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef10095 from "../../../../../../_runtime/metro/10095__.js";
import _modDef10096 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef10097 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef10098 from "../../../../../../_runtime/metro/10098__.js";
import _modDef10099 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef10100 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef10101 from "../../../../../../_runtime/metro/10101__.js";
import _modDef10102 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef10103 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef10104 from "../../../../../../_runtime/metro/10104__.js";
import _modDef10105 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef10106 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef10107 from "../../../../../../_runtime/metro/10107__.js";
import _modDef10108 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef10109 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10086, medium: _modDef10087, large: _modDef10088 };
const obj2 = { small: _modDef10086, medium: _modDef10087, large: _modDef10088 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10089, medium: _modDef10090, large: _modDef10091 };
const obj3 = { small: _modDef10089, medium: _modDef10090, large: _modDef10091 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10092, medium: _modDef10093, large: _modDef10094 };
const obj4 = { small: _modDef10092, medium: _modDef10093, large: _modDef10094 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10095, medium: _modDef10096, large: _modDef10097 };
const obj5 = { small: _modDef10095, medium: _modDef10096, large: _modDef10097 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10098, medium: _modDef10099, large: _modDef10100 };
const obj6 = { small: _modDef10098, medium: _modDef10099, large: _modDef10100 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10101, medium: _modDef10102, large: _modDef10103 };
const obj7 = { small: _modDef10101, medium: _modDef10102, large: _modDef10103 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10104, medium: _modDef10105, large: _modDef10106 };
const obj8 = { small: _modDef10104, medium: _modDef10105, large: _modDef10106 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10107, medium: _modDef10108, large: _modDef10109 };
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
