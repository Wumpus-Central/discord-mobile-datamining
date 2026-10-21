// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11032 from "../../../../../../_runtime/metro/11032__.js";
import _modDef11033 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11034 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11035 from "../../../../../../_runtime/metro/11035__.js";
import _modDef11036 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11037 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11038 from "../../../../../../_runtime/metro/11038__.js";
import _modDef11039 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11040 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11041 from "../../../../../../_runtime/metro/11041__.js";
import _modDef11042 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11043 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11044 from "../../../../../../_runtime/metro/11044__.js";
import _modDef11045 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11046 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11047 from "../../../../../../_runtime/metro/11047__.js";
import _modDef11048 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11049 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11050 from "../../../../../../_runtime/metro/11050__.js";
import _modDef11051 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11052 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11053 from "../../../../../../_runtime/metro/11053__.js";
import _modDef11054 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11055 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11032, medium: _modDef11033, large: _modDef11034 };
const obj2 = { small: _modDef11032, medium: _modDef11033, large: _modDef11034 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11035, medium: _modDef11036, large: _modDef11037 };
const obj3 = { small: _modDef11035, medium: _modDef11036, large: _modDef11037 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11038, medium: _modDef11039, large: _modDef11040 };
const obj4 = { small: _modDef11038, medium: _modDef11039, large: _modDef11040 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11041, medium: _modDef11042, large: _modDef11043 };
const obj5 = { small: _modDef11041, medium: _modDef11042, large: _modDef11043 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11044, medium: _modDef11045, large: _modDef11046 };
const obj6 = { small: _modDef11044, medium: _modDef11045, large: _modDef11046 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11047, medium: _modDef11048, large: _modDef11049 };
const obj7 = { small: _modDef11047, medium: _modDef11048, large: _modDef11049 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11050, medium: _modDef11051, large: _modDef11052 };
const obj8 = { small: _modDef11050, medium: _modDef11051, large: _modDef11052 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11053, medium: _modDef11054, large: _modDef11055 };
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
