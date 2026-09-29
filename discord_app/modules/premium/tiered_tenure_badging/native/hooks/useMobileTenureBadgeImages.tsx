// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef10790 from "../../../../../../_runtime/metro/10790__.js";
import _modDef10791 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef10792 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef10793 from "../../../../../../_runtime/metro/10793__.js";
import _modDef10794 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef10795 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef10796 from "../../../../../../_runtime/metro/10796__.js";
import _modDef10797 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef10798 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef10799 from "../../../../../../_runtime/metro/10799__.js";
import _modDef10800 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef10801 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef10802 from "../../../../../../_runtime/metro/10802__.js";
import _modDef10803 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef10804 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef10805 from "../../../../../../_runtime/metro/10805__.js";
import _modDef10806 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef10807 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef10808 from "../../../../../../_runtime/metro/10808__.js";
import _modDef10809 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef10810 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef10811 from "../../../../../../_runtime/metro/10811__.js";
import _modDef10812 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef10813 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10790, medium: _modDef10791, large: _modDef10792 };
const obj2 = { small: _modDef10790, medium: _modDef10791, large: _modDef10792 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10793, medium: _modDef10794, large: _modDef10795 };
const obj3 = { small: _modDef10793, medium: _modDef10794, large: _modDef10795 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10796, medium: _modDef10797, large: _modDef10798 };
const obj4 = { small: _modDef10796, medium: _modDef10797, large: _modDef10798 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10799, medium: _modDef10800, large: _modDef10801 };
const obj5 = { small: _modDef10799, medium: _modDef10800, large: _modDef10801 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10802, medium: _modDef10803, large: _modDef10804 };
const obj6 = { small: _modDef10802, medium: _modDef10803, large: _modDef10804 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10805, medium: _modDef10806, large: _modDef10807 };
const obj7 = { small: _modDef10805, medium: _modDef10806, large: _modDef10807 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10808, medium: _modDef10809, large: _modDef10810 };
const obj8 = { small: _modDef10808, medium: _modDef10809, large: _modDef10810 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10811, medium: _modDef10812, large: _modDef10813 };
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
