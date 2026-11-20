// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef13843 from "../../../../../../_runtime/metro/13843__.js";
import _modDef13844 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef13845 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef13846 from "../../../../../../_runtime/metro/13846__.js";
import _modDef13847 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef13848 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef13849 from "../../../../../../_runtime/metro/13849__.js";
import _modDef13850 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef13851 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef13852 from "../../../../../../_runtime/metro/13852__.js";
import _modDef13853 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef13854 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef13855 from "../../../../../../_runtime/metro/13855__.js";
import _modDef13856 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef13857 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef13858 from "../../../../../../_runtime/metro/13858__.js";
import _modDef13859 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef13860 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef13861 from "../../../../../../_runtime/metro/13861__.js";
import _modDef13862 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef13863 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef13864 from "../../../../../../_runtime/metro/13864__.js";
import _modDef13865 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef13866 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef13843, medium: _modDef13844, large: _modDef13845 };
const obj2 = { small: _modDef13843, medium: _modDef13844, large: _modDef13845 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef13846, medium: _modDef13847, large: _modDef13848 };
const obj3 = { small: _modDef13846, medium: _modDef13847, large: _modDef13848 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef13849, medium: _modDef13850, large: _modDef13851 };
const obj4 = { small: _modDef13849, medium: _modDef13850, large: _modDef13851 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef13852, medium: _modDef13853, large: _modDef13854 };
const obj5 = { small: _modDef13852, medium: _modDef13853, large: _modDef13854 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef13855, medium: _modDef13856, large: _modDef13857 };
const obj6 = { small: _modDef13855, medium: _modDef13856, large: _modDef13857 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef13858, medium: _modDef13859, large: _modDef13860 };
const obj7 = { small: _modDef13858, medium: _modDef13859, large: _modDef13860 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef13861, medium: _modDef13862, large: _modDef13863 };
const obj8 = { small: _modDef13861, medium: _modDef13862, large: _modDef13863 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef13864, medium: _modDef13865, large: _modDef13866 };
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
