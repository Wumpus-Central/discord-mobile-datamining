// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11312 from "../../../../../../_runtime/metro/11312__.js";
import _modDef11313 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11314 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11315 from "../../../../../../_runtime/metro/11315__.js";
import _modDef11316 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11317 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11318 from "../../../../../../_runtime/metro/11318__.js";
import _modDef11319 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11320 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11321 from "../../../../../../_runtime/metro/11321__.js";
import _modDef11322 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11323 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11324 from "../../../../../../_runtime/metro/11324__.js";
import _modDef11325 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11326 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11327 from "../../../../../../_runtime/metro/11327__.js";
import _modDef11328 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11329 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11330 from "../../../../../../_runtime/metro/11330__.js";
import _modDef11331 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11332 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11333 from "../../../../../../_runtime/metro/11333__.js";
import _modDef11334 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11335 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11312, medium: _modDef11313, large: _modDef11314 };
const obj2 = { small: _modDef11312, medium: _modDef11313, large: _modDef11314 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11315, medium: _modDef11316, large: _modDef11317 };
const obj3 = { small: _modDef11315, medium: _modDef11316, large: _modDef11317 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11318, medium: _modDef11319, large: _modDef11320 };
const obj4 = { small: _modDef11318, medium: _modDef11319, large: _modDef11320 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11321, medium: _modDef11322, large: _modDef11323 };
const obj5 = { small: _modDef11321, medium: _modDef11322, large: _modDef11323 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11324, medium: _modDef11325, large: _modDef11326 };
const obj6 = { small: _modDef11324, medium: _modDef11325, large: _modDef11326 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11327, medium: _modDef11328, large: _modDef11329 };
const obj7 = { small: _modDef11327, medium: _modDef11328, large: _modDef11329 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11330, medium: _modDef11331, large: _modDef11332 };
const obj8 = { small: _modDef11330, medium: _modDef11331, large: _modDef11332 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11333, medium: _modDef11334, large: _modDef11335 };
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
