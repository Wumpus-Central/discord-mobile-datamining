// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11294 from "../../../../../../_runtime/metro/11294__.js";
import _modDef11295 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11296 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11297 from "../../../../../../_runtime/metro/11297__.js";
import _modDef11298 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11299 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11300 from "../../../../../../_runtime/metro/11300__.js";
import _modDef11301 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11302 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11303 from "../../../../../../_runtime/metro/11303__.js";
import _modDef11304 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11305 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11306 from "../../../../../../_runtime/metro/11306__.js";
import _modDef11307 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11308 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11309 from "../../../../../../_runtime/metro/11309__.js";
import _modDef11310 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11311 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11312 from "../../../../../../_runtime/metro/11312__.js";
import _modDef11313 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11314 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11315 from "../../../../../../_runtime/metro/11315__.js";
import _modDef11316 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11317 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11294, medium: _modDef11295, large: _modDef11296 };
const obj2 = { small: _modDef11294, medium: _modDef11295, large: _modDef11296 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11297, medium: _modDef11298, large: _modDef11299 };
const obj3 = { small: _modDef11297, medium: _modDef11298, large: _modDef11299 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11300, medium: _modDef11301, large: _modDef11302 };
const obj4 = { small: _modDef11300, medium: _modDef11301, large: _modDef11302 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11303, medium: _modDef11304, large: _modDef11305 };
const obj5 = { small: _modDef11303, medium: _modDef11304, large: _modDef11305 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11306, medium: _modDef11307, large: _modDef11308 };
const obj6 = { small: _modDef11306, medium: _modDef11307, large: _modDef11308 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11309, medium: _modDef11310, large: _modDef11311 };
const obj7 = { small: _modDef11309, medium: _modDef11310, large: _modDef11311 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11312, medium: _modDef11313, large: _modDef11314 };
const obj8 = { small: _modDef11312, medium: _modDef11313, large: _modDef11314 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11315, medium: _modDef11316, large: _modDef11317 };
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
