// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef9825 from "../../../../../../_runtime/metro/09825__.js";
import _modDef9826 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef9827 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef9828 from "../../../../../../_runtime/metro/09828__.js";
import _modDef9829 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef9830 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef9831 from "../../../../../../_runtime/metro/09831__.js";
import _modDef9832 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef9833 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef9834 from "../../../../../../_runtime/metro/09834__.js";
import _modDef9835 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef9836 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef9837 from "../../../../../../_runtime/metro/09837__.js";
import _modDef9838 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef9839 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef9840 from "../../../../../../_runtime/metro/09840__.js";
import _modDef9841 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef9842 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef9843 from "../../../../../../_runtime/metro/09843__.js";
import _modDef9844 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef9845 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef9846 from "../../../../../../_runtime/metro/09846__.js";
import _modDef9847 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef9848 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef9825, medium: _modDef9826, large: _modDef9827 };
const obj2 = { small: _modDef9825, medium: _modDef9826, large: _modDef9827 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef9828, medium: _modDef9829, large: _modDef9830 };
const obj3 = { small: _modDef9828, medium: _modDef9829, large: _modDef9830 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef9831, medium: _modDef9832, large: _modDef9833 };
const obj4 = { small: _modDef9831, medium: _modDef9832, large: _modDef9833 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef9834, medium: _modDef9835, large: _modDef9836 };
const obj5 = { small: _modDef9834, medium: _modDef9835, large: _modDef9836 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef9837, medium: _modDef9838, large: _modDef9839 };
const obj6 = { small: _modDef9837, medium: _modDef9838, large: _modDef9839 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef9840, medium: _modDef9841, large: _modDef9842 };
const obj7 = { small: _modDef9840, medium: _modDef9841, large: _modDef9842 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef9843, medium: _modDef9844, large: _modDef9845 };
const obj8 = { small: _modDef9843, medium: _modDef9844, large: _modDef9845 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef9846, medium: _modDef9847, large: _modDef9848 };
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
