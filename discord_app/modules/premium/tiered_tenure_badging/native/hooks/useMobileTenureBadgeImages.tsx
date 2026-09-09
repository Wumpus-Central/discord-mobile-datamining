// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11191 from "../../../../../../_runtime/metro/11191__.js";
import _modDef11192 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11193 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11194 from "../../../../../../_runtime/metro/11194__.js";
import _modDef11195 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11196 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11197 from "../../../../../../_runtime/metro/11197__.js";
import _modDef11198 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11199 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11200 from "../../../../../../_runtime/metro/11200__.js";
import _modDef11201 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11202 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11203 from "../../../../../../_runtime/metro/11203__.js";
import _modDef11204 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11205 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11206 from "../../../../../../_runtime/metro/11206__.js";
import _modDef11207 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11208 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11209 from "../../../../../../_runtime/metro/11209__.js";
import _modDef11210 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11211 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11212 from "../../../../../../_runtime/metro/11212__.js";
import _modDef11213 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11214 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
let obj = {};
obj = { small: _modDef11191, medium: _modDef11192, large: _modDef11193 };
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = obj;
obj = { small: _modDef11194, medium: _modDef11195, large: _modDef11196 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = obj;
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11197, medium: _modDef11198, large: _modDef11199 };
const obj1 = { small: _modDef11197, medium: _modDef11198, large: _modDef11199 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11200, medium: _modDef11201, large: _modDef11202 };
const obj2 = { small: _modDef11200, medium: _modDef11201, large: _modDef11202 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11203, medium: _modDef11204, large: _modDef11205 };
const obj3 = { small: _modDef11203, medium: _modDef11204, large: _modDef11205 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11206, medium: _modDef11207, large: _modDef11208 };
const obj4 = { small: _modDef11206, medium: _modDef11207, large: _modDef11208 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11209, medium: _modDef11210, large: _modDef11211 };
const obj5 = { small: _modDef11209, medium: _modDef11210, large: _modDef11211 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11212, medium: _modDef11213, large: _modDef11214 };
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
