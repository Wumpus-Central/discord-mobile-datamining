// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11617 from "../../../../../../_runtime/metro/11617__.js";
import _modDef11618 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11619 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11620 from "../../../../../../_runtime/metro/11620__.js";
import _modDef11621 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11622 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11623 from "../../../../../../_runtime/metro/11623__.js";
import _modDef11624 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11625 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11626 from "../../../../../../_runtime/metro/11626__.js";
import _modDef11627 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11628 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11629 from "../../../../../../_runtime/metro/11629__.js";
import _modDef11630 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11631 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11632 from "../../../../../../_runtime/metro/11632__.js";
import _modDef11633 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11634 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11635 from "../../../../../../_runtime/metro/11635__.js";
import _modDef11636 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11637 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11638 from "../../../../../../_runtime/metro/11638__.js";
import _modDef11639 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11640 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11617, medium: _modDef11618, large: _modDef11619 };
const obj2 = { small: _modDef11617, medium: _modDef11618, large: _modDef11619 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11620, medium: _modDef11621, large: _modDef11622 };
const obj3 = { small: _modDef11620, medium: _modDef11621, large: _modDef11622 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11623, medium: _modDef11624, large: _modDef11625 };
const obj4 = { small: _modDef11623, medium: _modDef11624, large: _modDef11625 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11626, medium: _modDef11627, large: _modDef11628 };
const obj5 = { small: _modDef11626, medium: _modDef11627, large: _modDef11628 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11629, medium: _modDef11630, large: _modDef11631 };
const obj6 = { small: _modDef11629, medium: _modDef11630, large: _modDef11631 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11632, medium: _modDef11633, large: _modDef11634 };
const obj7 = { small: _modDef11632, medium: _modDef11633, large: _modDef11634 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11635, medium: _modDef11636, large: _modDef11637 };
const obj8 = { small: _modDef11635, medium: _modDef11636, large: _modDef11637 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11638, medium: _modDef11639, large: _modDef11640 };
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
