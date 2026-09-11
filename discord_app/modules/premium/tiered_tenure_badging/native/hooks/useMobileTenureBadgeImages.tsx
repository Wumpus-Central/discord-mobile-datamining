// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11254 from "../../../../../../_runtime/metro/11254__.js";
import _modDef11255 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11256 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11257 from "../../../../../../_runtime/metro/11257__.js";
import _modDef11258 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11259 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11260 from "../../../../../../_runtime/metro/11260__.js";
import _modDef11261 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11262 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11263 from "../../../../../../_runtime/metro/11263__.js";
import _modDef11264 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11265 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11266 from "../../../../../../_runtime/metro/11266__.js";
import _modDef11267 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11268 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11269 from "../../../../../../_runtime/metro/11269__.js";
import _modDef11270 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11271 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11272 from "../../../../../../_runtime/metro/11272__.js";
import _modDef11273 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11274 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11275 from "../../../../../../_runtime/metro/11275__.js";
import _modDef11276 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11277 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
let obj = {};
obj = { small: _modDef11254, medium: _modDef11255, large: _modDef11256 };
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = obj;
obj = { small: _modDef11257, medium: _modDef11258, large: _modDef11259 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = obj;
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11260, medium: _modDef11261, large: _modDef11262 };
const obj1 = { small: _modDef11260, medium: _modDef11261, large: _modDef11262 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11263, medium: _modDef11264, large: _modDef11265 };
const obj2 = { small: _modDef11263, medium: _modDef11264, large: _modDef11265 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11266, medium: _modDef11267, large: _modDef11268 };
const obj3 = { small: _modDef11266, medium: _modDef11267, large: _modDef11268 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11269, medium: _modDef11270, large: _modDef11271 };
const obj4 = { small: _modDef11269, medium: _modDef11270, large: _modDef11271 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11272, medium: _modDef11273, large: _modDef11274 };
const obj5 = { small: _modDef11272, medium: _modDef11273, large: _modDef11274 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11275, medium: _modDef11276, large: _modDef11277 };
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
