// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef10850 from "../../../../../../_runtime/metro/10850__.js";
import _modDef10851 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef10852 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef10853 from "../../../../../../_runtime/metro/10853__.js";
import _modDef10854 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef10855 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef10856 from "../../../../../../_runtime/metro/10856__.js";
import _modDef10857 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef10858 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef10859 from "../../../../../../_runtime/metro/10859__.js";
import _modDef10860 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef10861 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef10862 from "../../../../../../_runtime/metro/10862__.js";
import _modDef10863 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef10864 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef10865 from "../../../../../../_runtime/metro/10865__.js";
import _modDef10866 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef10867 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef10868 from "../../../../../../_runtime/metro/10868__.js";
import _modDef10869 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef10870 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef10871 from "../../../../../../_runtime/metro/10871__.js";
import _modDef10872 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef10873 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10850, medium: _modDef10851, large: _modDef10852 };
const obj2 = { small: _modDef10850, medium: _modDef10851, large: _modDef10852 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10853, medium: _modDef10854, large: _modDef10855 };
const obj3 = { small: _modDef10853, medium: _modDef10854, large: _modDef10855 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10856, medium: _modDef10857, large: _modDef10858 };
const obj4 = { small: _modDef10856, medium: _modDef10857, large: _modDef10858 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10859, medium: _modDef10860, large: _modDef10861 };
const obj5 = { small: _modDef10859, medium: _modDef10860, large: _modDef10861 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10862, medium: _modDef10863, large: _modDef10864 };
const obj6 = { small: _modDef10862, medium: _modDef10863, large: _modDef10864 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10865, medium: _modDef10866, large: _modDef10867 };
const obj7 = { small: _modDef10865, medium: _modDef10866, large: _modDef10867 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10868, medium: _modDef10869, large: _modDef10870 };
const obj8 = { small: _modDef10868, medium: _modDef10869, large: _modDef10870 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10871, medium: _modDef10872, large: _modDef10873 };
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
