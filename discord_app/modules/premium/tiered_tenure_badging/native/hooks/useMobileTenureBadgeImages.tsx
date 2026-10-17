// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef10849 from "../../../../../../_runtime/metro/10849__.js";
import _modDef10850 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef10851 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef10852 from "../../../../../../_runtime/metro/10852__.js";
import _modDef10853 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef10854 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef10855 from "../../../../../../_runtime/metro/10855__.js";
import _modDef10856 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef10857 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef10858 from "../../../../../../_runtime/metro/10858__.js";
import _modDef10859 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef10860 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef10861 from "../../../../../../_runtime/metro/10861__.js";
import _modDef10862 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef10863 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef10864 from "../../../../../../_runtime/metro/10864__.js";
import _modDef10865 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef10866 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef10867 from "../../../../../../_runtime/metro/10867__.js";
import _modDef10868 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef10869 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef10870 from "../../../../../../_runtime/metro/10870__.js";
import _modDef10871 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef10872 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10849, medium: _modDef10850, large: _modDef10851 };
const obj2 = { small: _modDef10849, medium: _modDef10850, large: _modDef10851 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10852, medium: _modDef10853, large: _modDef10854 };
const obj3 = { small: _modDef10852, medium: _modDef10853, large: _modDef10854 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10855, medium: _modDef10856, large: _modDef10857 };
const obj4 = { small: _modDef10855, medium: _modDef10856, large: _modDef10857 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10858, medium: _modDef10859, large: _modDef10860 };
const obj5 = { small: _modDef10858, medium: _modDef10859, large: _modDef10860 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10861, medium: _modDef10862, large: _modDef10863 };
const obj6 = { small: _modDef10861, medium: _modDef10862, large: _modDef10863 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10864, medium: _modDef10865, large: _modDef10866 };
const obj7 = { small: _modDef10864, medium: _modDef10865, large: _modDef10866 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10867, medium: _modDef10868, large: _modDef10869 };
const obj8 = { small: _modDef10867, medium: _modDef10868, large: _modDef10869 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10870, medium: _modDef10871, large: _modDef10872 };
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
