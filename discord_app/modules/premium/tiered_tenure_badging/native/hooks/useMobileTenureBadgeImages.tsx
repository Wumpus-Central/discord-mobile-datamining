// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef10621 from "../../../../../../_runtime/metro/10621__.js";
import _modDef10622 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef10623 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef10624 from "../../../../../../_runtime/metro/10624__.js";
import _modDef10625 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef10626 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef10627 from "../../../../../../_runtime/metro/10627__.js";
import _modDef10628 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef10629 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef10630 from "../../../../../../_runtime/metro/10630__.js";
import _modDef10631 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef10632 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef10633 from "../../../../../../_runtime/metro/10633__.js";
import _modDef10634 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef10635 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef10636 from "../../../../../../_runtime/metro/10636__.js";
import _modDef10637 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef10638 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef10639 from "../../../../../../_runtime/metro/10639__.js";
import _modDef10640 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef10641 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef10642 from "../../../../../../_runtime/metro/10642__.js";
import _modDef10643 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef10644 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10621, medium: _modDef10622, large: _modDef10623 };
const obj2 = { small: _modDef10621, medium: _modDef10622, large: _modDef10623 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10624, medium: _modDef10625, large: _modDef10626 };
const obj3 = { small: _modDef10624, medium: _modDef10625, large: _modDef10626 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10627, medium: _modDef10628, large: _modDef10629 };
const obj4 = { small: _modDef10627, medium: _modDef10628, large: _modDef10629 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10630, medium: _modDef10631, large: _modDef10632 };
const obj5 = { small: _modDef10630, medium: _modDef10631, large: _modDef10632 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10633, medium: _modDef10634, large: _modDef10635 };
const obj6 = { small: _modDef10633, medium: _modDef10634, large: _modDef10635 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10636, medium: _modDef10637, large: _modDef10638 };
const obj7 = { small: _modDef10636, medium: _modDef10637, large: _modDef10638 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10639, medium: _modDef10640, large: _modDef10641 };
const obj8 = { small: _modDef10639, medium: _modDef10640, large: _modDef10641 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10642, medium: _modDef10643, large: _modDef10644 };
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
