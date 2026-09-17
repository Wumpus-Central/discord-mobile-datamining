// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11320 from "../../../../../../_runtime/metro/11320__.js";
import _modDef11321 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11322 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11323 from "../../../../../../_runtime/metro/11323__.js";
import _modDef11324 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11325 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11326 from "../../../../../../_runtime/metro/11326__.js";
import _modDef11327 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11328 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11329 from "../../../../../../_runtime/metro/11329__.js";
import _modDef11330 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11331 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11332 from "../../../../../../_runtime/metro/11332__.js";
import _modDef11333 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11334 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11335 from "../../../../../../_runtime/metro/11335__.js";
import _modDef11336 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11337 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11338 from "../../../../../../_runtime/metro/11338__.js";
import _modDef11339 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11340 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11341 from "../../../../../../_runtime/metro/11341__.js";
import _modDef11342 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11343 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11320, medium: _modDef11321, large: _modDef11322 };
const obj2 = { small: _modDef11320, medium: _modDef11321, large: _modDef11322 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11323, medium: _modDef11324, large: _modDef11325 };
const obj3 = { small: _modDef11323, medium: _modDef11324, large: _modDef11325 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11326, medium: _modDef11327, large: _modDef11328 };
const obj4 = { small: _modDef11326, medium: _modDef11327, large: _modDef11328 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11329, medium: _modDef11330, large: _modDef11331 };
const obj5 = { small: _modDef11329, medium: _modDef11330, large: _modDef11331 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11332, medium: _modDef11333, large: _modDef11334 };
const obj6 = { small: _modDef11332, medium: _modDef11333, large: _modDef11334 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11335, medium: _modDef11336, large: _modDef11337 };
const obj7 = { small: _modDef11335, medium: _modDef11336, large: _modDef11337 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11338, medium: _modDef11339, large: _modDef11340 };
const obj8 = { small: _modDef11338, medium: _modDef11339, large: _modDef11340 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11341, medium: _modDef11342, large: _modDef11343 };
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
