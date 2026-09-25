// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef10610 from "../../../../../../_runtime/metro/10610__.js";
import _modDef10611 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef10612 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef10613 from "../../../../../../_runtime/metro/10613__.js";
import _modDef10614 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef10615 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef10616 from "../../../../../../_runtime/metro/10616__.js";
import _modDef10617 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef10618 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef10619 from "../../../../../../_runtime/metro/10619__.js";
import _modDef10620 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef10621 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef10622 from "../../../../../../_runtime/metro/10622__.js";
import _modDef10623 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef10624 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef10625 from "../../../../../../_runtime/metro/10625__.js";
import _modDef10626 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef10627 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef10628 from "../../../../../../_runtime/metro/10628__.js";
import _modDef10629 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef10630 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef10631 from "../../../../../../_runtime/metro/10631__.js";
import _modDef10632 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef10633 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10610, medium: _modDef10611, large: _modDef10612 };
const obj2 = { small: _modDef10610, medium: _modDef10611, large: _modDef10612 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10613, medium: _modDef10614, large: _modDef10615 };
const obj3 = { small: _modDef10613, medium: _modDef10614, large: _modDef10615 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10616, medium: _modDef10617, large: _modDef10618 };
const obj4 = { small: _modDef10616, medium: _modDef10617, large: _modDef10618 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10619, medium: _modDef10620, large: _modDef10621 };
const obj5 = { small: _modDef10619, medium: _modDef10620, large: _modDef10621 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10622, medium: _modDef10623, large: _modDef10624 };
const obj6 = { small: _modDef10622, medium: _modDef10623, large: _modDef10624 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10625, medium: _modDef10626, large: _modDef10627 };
const obj7 = { small: _modDef10625, medium: _modDef10626, large: _modDef10627 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10628, medium: _modDef10629, large: _modDef10630 };
const obj8 = { small: _modDef10628, medium: _modDef10629, large: _modDef10630 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10631, medium: _modDef10632, large: _modDef10633 };
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
