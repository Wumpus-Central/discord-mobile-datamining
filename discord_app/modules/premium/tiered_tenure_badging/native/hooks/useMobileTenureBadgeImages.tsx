// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11293 from "../../../../../../_runtime/metro/11293__.js";
import _modDef11294 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11295 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11296 from "../../../../../../_runtime/metro/11296__.js";
import _modDef11297 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11298 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11299 from "../../../../../../_runtime/metro/11299__.js";
import _modDef11300 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11301 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11302 from "../../../../../../_runtime/metro/11302__.js";
import _modDef11303 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11304 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11305 from "../../../../../../_runtime/metro/11305__.js";
import _modDef11306 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11307 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11308 from "../../../../../../_runtime/metro/11308__.js";
import _modDef11309 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11310 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11311 from "../../../../../../_runtime/metro/11311__.js";
import _modDef11312 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11313 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11314 from "../../../../../../_runtime/metro/11314__.js";
import _modDef11315 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11316 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
let obj = {};
obj = { small: _modDef11293, medium: _modDef11294, large: _modDef11295 };
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = obj;
obj = { small: _modDef11296, medium: _modDef11297, large: _modDef11298 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = obj;
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11299, medium: _modDef11300, large: _modDef11301 };
const obj1 = { small: _modDef11299, medium: _modDef11300, large: _modDef11301 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11302, medium: _modDef11303, large: _modDef11304 };
const obj2 = { small: _modDef11302, medium: _modDef11303, large: _modDef11304 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11305, medium: _modDef11306, large: _modDef11307 };
const obj3 = { small: _modDef11305, medium: _modDef11306, large: _modDef11307 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11308, medium: _modDef11309, large: _modDef11310 };
const obj4 = { small: _modDef11308, medium: _modDef11309, large: _modDef11310 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11311, medium: _modDef11312, large: _modDef11313 };
const obj5 = { small: _modDef11311, medium: _modDef11312, large: _modDef11313 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11314, medium: _modDef11315, large: _modDef11316 };
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
