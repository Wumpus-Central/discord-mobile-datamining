// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11231 from "../../../../../../_runtime/metro/11231__.js";
import _modDef11232 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11233 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11234 from "../../../../../../_runtime/metro/11234__.js";
import _modDef11235 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11236 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11237 from "../../../../../../_runtime/metro/11237__.js";
import _modDef11238 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11239 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11240 from "../../../../../../_runtime/metro/11240__.js";
import _modDef11241 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11242 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11243 from "../../../../../../_runtime/metro/11243__.js";
import _modDef11244 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11245 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11246 from "../../../../../../_runtime/metro/11246__.js";
import _modDef11247 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11248 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11249 from "../../../../../../_runtime/metro/11249__.js";
import _modDef11250 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11251 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11252 from "../../../../../../_runtime/metro/11252__.js";
import _modDef11253 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11254 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
let obj = {};
obj = { small: _modDef11231, medium: _modDef11232, large: _modDef11233 };
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = obj;
obj = { small: _modDef11234, medium: _modDef11235, large: _modDef11236 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = obj;
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11237, medium: _modDef11238, large: _modDef11239 };
const obj1 = { small: _modDef11237, medium: _modDef11238, large: _modDef11239 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11240, medium: _modDef11241, large: _modDef11242 };
const obj2 = { small: _modDef11240, medium: _modDef11241, large: _modDef11242 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11243, medium: _modDef11244, large: _modDef11245 };
const obj3 = { small: _modDef11243, medium: _modDef11244, large: _modDef11245 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11246, medium: _modDef11247, large: _modDef11248 };
const obj4 = { small: _modDef11246, medium: _modDef11247, large: _modDef11248 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11249, medium: _modDef11250, large: _modDef11251 };
const obj5 = { small: _modDef11249, medium: _modDef11250, large: _modDef11251 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11252, medium: _modDef11253, large: _modDef11254 };
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
