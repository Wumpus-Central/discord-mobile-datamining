// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11609 from "../../../../../../_runtime/metro/11609__.js";
import _modDef11610 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11611 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11612 from "../../../../../../_runtime/metro/11612__.js";
import _modDef11613 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11614 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11615 from "../../../../../../_runtime/metro/11615__.js";
import _modDef11616 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11617 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11618 from "../../../../../../_runtime/metro/11618__.js";
import _modDef11619 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11620 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11621 from "../../../../../../_runtime/metro/11621__.js";
import _modDef11622 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11623 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11624 from "../../../../../../_runtime/metro/11624__.js";
import _modDef11625 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11626 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11627 from "../../../../../../_runtime/metro/11627__.js";
import _modDef11628 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11629 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11630 from "../../../../../../_runtime/metro/11630__.js";
import _modDef11631 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11632 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11609, medium: _modDef11610, large: _modDef11611 };
const obj2 = { small: _modDef11609, medium: _modDef11610, large: _modDef11611 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11612, medium: _modDef11613, large: _modDef11614 };
const obj3 = { small: _modDef11612, medium: _modDef11613, large: _modDef11614 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11615, medium: _modDef11616, large: _modDef11617 };
const obj4 = { small: _modDef11615, medium: _modDef11616, large: _modDef11617 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11618, medium: _modDef11619, large: _modDef11620 };
const obj5 = { small: _modDef11618, medium: _modDef11619, large: _modDef11620 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11621, medium: _modDef11622, large: _modDef11623 };
const obj6 = { small: _modDef11621, medium: _modDef11622, large: _modDef11623 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11624, medium: _modDef11625, large: _modDef11626 };
const obj7 = { small: _modDef11624, medium: _modDef11625, large: _modDef11626 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11627, medium: _modDef11628, large: _modDef11629 };
const obj8 = { small: _modDef11627, medium: _modDef11628, large: _modDef11629 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11630, medium: _modDef11631, large: _modDef11632 };
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
