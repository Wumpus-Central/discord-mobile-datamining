// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11298 from "../../../../../../_runtime/metro/11298__.js";
import _modDef11299 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11300 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11301 from "../../../../../../_runtime/metro/11301__.js";
import _modDef11302 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11303 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11304 from "../../../../../../_runtime/metro/11304__.js";
import _modDef11305 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11306 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11307 from "../../../../../../_runtime/metro/11307__.js";
import _modDef11308 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11309 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11310 from "../../../../../../_runtime/metro/11310__.js";
import _modDef11311 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11312 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11313 from "../../../../../../_runtime/metro/11313__.js";
import _modDef11314 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11315 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11316 from "../../../../../../_runtime/metro/11316__.js";
import _modDef11317 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11318 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11319 from "../../../../../../_runtime/metro/11319__.js";
import _modDef11320 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11321 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11298, medium: _modDef11299, large: _modDef11300 };
const obj2 = { small: _modDef11298, medium: _modDef11299, large: _modDef11300 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11301, medium: _modDef11302, large: _modDef11303 };
const obj3 = { small: _modDef11301, medium: _modDef11302, large: _modDef11303 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11304, medium: _modDef11305, large: _modDef11306 };
const obj4 = { small: _modDef11304, medium: _modDef11305, large: _modDef11306 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11307, medium: _modDef11308, large: _modDef11309 };
const obj5 = { small: _modDef11307, medium: _modDef11308, large: _modDef11309 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11310, medium: _modDef11311, large: _modDef11312 };
const obj6 = { small: _modDef11310, medium: _modDef11311, large: _modDef11312 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11313, medium: _modDef11314, large: _modDef11315 };
const obj7 = { small: _modDef11313, medium: _modDef11314, large: _modDef11315 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11316, medium: _modDef11317, large: _modDef11318 };
const obj8 = { small: _modDef11316, medium: _modDef11317, large: _modDef11318 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11319, medium: _modDef11320, large: _modDef11321 };
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
