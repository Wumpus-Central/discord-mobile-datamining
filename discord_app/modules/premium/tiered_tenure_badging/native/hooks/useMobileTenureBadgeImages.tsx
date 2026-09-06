// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11159 from "../../../../../../_runtime/metro/11159__.js";
import _modDef11160 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11161 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11162 from "../../../../../../_runtime/metro/11162__.js";
import _modDef11163 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11164 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11165 from "../../../../../../_runtime/metro/11165__.js";
import _modDef11166 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11167 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11168 from "../../../../../../_runtime/metro/11168__.js";
import _modDef11169 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11170 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11171 from "../../../../../../_runtime/metro/11171__.js";
import _modDef11172 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11173 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11174 from "../../../../../../_runtime/metro/11174__.js";
import _modDef11175 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11176 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11177 from "../../../../../../_runtime/metro/11177__.js";
import _modDef11178 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11179 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11180 from "../../../../../../_runtime/metro/11180__.js";
import _modDef11181 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11182 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
let obj = {};
obj = { small: _modDef11159, medium: _modDef11160, large: _modDef11161 };
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = obj;
obj = { small: _modDef11162, medium: _modDef11163, large: _modDef11164 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = obj;
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11165, medium: _modDef11166, large: _modDef11167 };
const obj1 = { small: _modDef11165, medium: _modDef11166, large: _modDef11167 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11168, medium: _modDef11169, large: _modDef11170 };
const obj2 = { small: _modDef11168, medium: _modDef11169, large: _modDef11170 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11171, medium: _modDef11172, large: _modDef11173 };
const obj3 = { small: _modDef11171, medium: _modDef11172, large: _modDef11173 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11174, medium: _modDef11175, large: _modDef11176 };
const obj4 = { small: _modDef11174, medium: _modDef11175, large: _modDef11176 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11177, medium: _modDef11178, large: _modDef11179 };
const obj5 = { small: _modDef11177, medium: _modDef11178, large: _modDef11179 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11180, medium: _modDef11181, large: _modDef11182 };
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
