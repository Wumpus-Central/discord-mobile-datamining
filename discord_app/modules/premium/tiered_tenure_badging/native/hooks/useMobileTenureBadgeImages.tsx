// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11178 from "../../../../../../_runtime/metro/11178__.js";
import _modDef11179 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11180 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11181 from "../../../../../../_runtime/metro/11181__.js";
import _modDef11182 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11183 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11184 from "../../../../../../_runtime/metro/11184__.js";
import _modDef11185 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11186 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11187 from "../../../../../../_runtime/metro/11187__.js";
import _modDef11188 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11189 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11190 from "../../../../../../_runtime/metro/11190__.js";
import _modDef11191 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11192 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11193 from "../../../../../../_runtime/metro/11193__.js";
import _modDef11194 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11195 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11196 from "../../../../../../_runtime/metro/11196__.js";
import _modDef11197 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11198 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11199 from "../../../../../../_runtime/metro/11199__.js";
import _modDef11200 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11201 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11178, medium: _modDef11179, large: _modDef11180 };
const obj2 = { small: _modDef11178, medium: _modDef11179, large: _modDef11180 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11181, medium: _modDef11182, large: _modDef11183 };
const obj3 = { small: _modDef11181, medium: _modDef11182, large: _modDef11183 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11184, medium: _modDef11185, large: _modDef11186 };
const obj4 = { small: _modDef11184, medium: _modDef11185, large: _modDef11186 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11187, medium: _modDef11188, large: _modDef11189 };
const obj5 = { small: _modDef11187, medium: _modDef11188, large: _modDef11189 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11190, medium: _modDef11191, large: _modDef11192 };
const obj6 = { small: _modDef11190, medium: _modDef11191, large: _modDef11192 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11193, medium: _modDef11194, large: _modDef11195 };
const obj7 = { small: _modDef11193, medium: _modDef11194, large: _modDef11195 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11196, medium: _modDef11197, large: _modDef11198 };
const obj8 = { small: _modDef11196, medium: _modDef11197, large: _modDef11198 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11199, medium: _modDef11200, large: _modDef11201 };
const result = size.fileFinishedImporting(
  "modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx",
);

export function useMobileTenureBadgeImages(id) {
  let tmp = null;
  if (null != id) {
    tmp = obj[id];
  }
  return tmp;
}
export function getMobileTenureBadgeImages(arg0) {
  return obj[arg0];
}
