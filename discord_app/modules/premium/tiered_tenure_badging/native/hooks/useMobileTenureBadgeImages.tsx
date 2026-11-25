// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef9783 from "../../../../../../_runtime/metro/09783__.js";
import _modDef9784 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef9785 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef9786 from "../../../../../../_runtime/metro/09786__.js";
import _modDef9787 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef9788 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef9789 from "../../../../../../_runtime/metro/09789__.js";
import _modDef9790 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef9791 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef9792 from "../../../../../../_runtime/metro/09792__.js";
import _modDef9793 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef9794 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef9795 from "../../../../../../_runtime/metro/09795__.js";
import _modDef9796 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef9797 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef9798 from "../../../../../../_runtime/metro/09798__.js";
import _modDef9799 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef9800 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef9801 from "../../../../../../_runtime/metro/09801__.js";
import _modDef9802 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef9803 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef9804 from "../../../../../../_runtime/metro/09804__.js";
import _modDef9805 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef9806 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef9783, medium: _modDef9784, large: _modDef9785 };
const obj2 = { small: _modDef9783, medium: _modDef9784, large: _modDef9785 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef9786, medium: _modDef9787, large: _modDef9788 };
const obj3 = { small: _modDef9786, medium: _modDef9787, large: _modDef9788 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef9789, medium: _modDef9790, large: _modDef9791 };
const obj4 = { small: _modDef9789, medium: _modDef9790, large: _modDef9791 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef9792, medium: _modDef9793, large: _modDef9794 };
const obj5 = { small: _modDef9792, medium: _modDef9793, large: _modDef9794 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef9795, medium: _modDef9796, large: _modDef9797 };
const obj6 = { small: _modDef9795, medium: _modDef9796, large: _modDef9797 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef9798, medium: _modDef9799, large: _modDef9800 };
const obj7 = { small: _modDef9798, medium: _modDef9799, large: _modDef9800 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef9801, medium: _modDef9802, large: _modDef9803 };
const obj8 = { small: _modDef9801, medium: _modDef9802, large: _modDef9803 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef9804, medium: _modDef9805, large: _modDef9806 };
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
