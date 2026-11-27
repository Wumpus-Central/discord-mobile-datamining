// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef9826 from "../../../../../../_runtime/metro/09826__.js";
import _modDef9827 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef9828 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef9829 from "../../../../../../_runtime/metro/09829__.js";
import _modDef9830 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef9831 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef9832 from "../../../../../../_runtime/metro/09832__.js";
import _modDef9833 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef9834 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef9835 from "../../../../../../_runtime/metro/09835__.js";
import _modDef9836 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef9837 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef9838 from "../../../../../../_runtime/metro/09838__.js";
import _modDef9839 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef9840 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef9841 from "../../../../../../_runtime/metro/09841__.js";
import _modDef9842 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef9843 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef9844 from "../../../../../../_runtime/metro/09844__.js";
import _modDef9845 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef9846 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef9847 from "../../../../../../_runtime/metro/09847__.js";
import _modDef9848 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef9849 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef9826, medium: _modDef9827, large: _modDef9828 };
const obj2 = { small: _modDef9826, medium: _modDef9827, large: _modDef9828 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef9829, medium: _modDef9830, large: _modDef9831 };
const obj3 = { small: _modDef9829, medium: _modDef9830, large: _modDef9831 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef9832, medium: _modDef9833, large: _modDef9834 };
const obj4 = { small: _modDef9832, medium: _modDef9833, large: _modDef9834 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef9835, medium: _modDef9836, large: _modDef9837 };
const obj5 = { small: _modDef9835, medium: _modDef9836, large: _modDef9837 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef9838, medium: _modDef9839, large: _modDef9840 };
const obj6 = { small: _modDef9838, medium: _modDef9839, large: _modDef9840 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef9841, medium: _modDef9842, large: _modDef9843 };
const obj7 = { small: _modDef9841, medium: _modDef9842, large: _modDef9843 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef9844, medium: _modDef9845, large: _modDef9846 };
const obj8 = { small: _modDef9844, medium: _modDef9845, large: _modDef9846 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef9847, medium: _modDef9848, large: _modDef9849 };
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
