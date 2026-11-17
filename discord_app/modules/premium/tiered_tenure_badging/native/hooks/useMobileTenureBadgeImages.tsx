// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef15264 from "../../../../../../_runtime/metro/15264__.js";
import _modDef15265 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef15266 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef15267 from "../../../../../../_runtime/metro/15267__.js";
import _modDef15268 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef15269 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef15270 from "../../../../../../_runtime/metro/15270__.js";
import _modDef15271 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef15272 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef15273 from "../../../../../../_runtime/metro/15273__.js";
import _modDef15274 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef15275 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef15276 from "../../../../../../_runtime/metro/15276__.js";
import _modDef15277 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef15278 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef15279 from "../../../../../../_runtime/metro/15279__.js";
import _modDef15280 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef15281 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef15282 from "../../../../../../_runtime/metro/15282__.js";
import _modDef15283 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef15284 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef15285 from "../../../../../../_runtime/metro/15285__.js";
import _modDef15286 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef15287 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef15264, medium: _modDef15265, large: _modDef15266 };
const obj2 = { small: _modDef15264, medium: _modDef15265, large: _modDef15266 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef15267, medium: _modDef15268, large: _modDef15269 };
const obj3 = { small: _modDef15267, medium: _modDef15268, large: _modDef15269 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef15270, medium: _modDef15271, large: _modDef15272 };
const obj4 = { small: _modDef15270, medium: _modDef15271, large: _modDef15272 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef15273, medium: _modDef15274, large: _modDef15275 };
const obj5 = { small: _modDef15273, medium: _modDef15274, large: _modDef15275 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef15276, medium: _modDef15277, large: _modDef15278 };
const obj6 = { small: _modDef15276, medium: _modDef15277, large: _modDef15278 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef15279, medium: _modDef15280, large: _modDef15281 };
const obj7 = { small: _modDef15279, medium: _modDef15280, large: _modDef15281 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef15282, medium: _modDef15283, large: _modDef15284 };
const obj8 = { small: _modDef15282, medium: _modDef15283, large: _modDef15284 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef15285, medium: _modDef15286, large: _modDef15287 };
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
