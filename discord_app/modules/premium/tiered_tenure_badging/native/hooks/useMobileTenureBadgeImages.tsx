// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import AssetRegistryDefault from "../../../../../../_runtime/10850_AssetRegistry.js";
import _modDef10851 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef10852 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import AssetRegistryDefault2 from "../../../../../../_runtime/10853_AssetRegistry.js";
import _modDef10854 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef10855 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import AssetRegistryDefault3 from "../../../../../../_runtime/10856_AssetRegistry.js";
import _modDef10857 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef10858 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import AssetRegistryDefault4 from "../../../../../../_runtime/10859_AssetRegistry.js";
import _modDef10860 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef10861 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import AssetRegistryDefault5 from "../../../../../../_runtime/10862_AssetRegistry.js";
import _modDef10863 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef10864 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import AssetRegistryDefault6 from "../../../../../../_runtime/10865_AssetRegistry.js";
import _modDef10866 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef10867 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import AssetRegistryDefault7 from "../../../../../../_runtime/10868_AssetRegistry.js";
import _modDef10869 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef10870 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import AssetRegistryDefault8 from "../../../../../../_runtime/10871_AssetRegistry.js";
import _modDef10872 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef10873 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = {
  small: AssetRegistryDefault,
  medium: _modDef10851,
  large: _modDef10852,
};
({ small: AssetRegistryDefault, medium: _modDef10851, large: _modDef10852 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = {
  small: AssetRegistryDefault2,
  medium: _modDef10854,
  large: _modDef10855,
};
({ small: AssetRegistryDefault2, medium: _modDef10854, large: _modDef10855 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = {
  small: AssetRegistryDefault3,
  medium: _modDef10857,
  large: _modDef10858,
};
({ small: AssetRegistryDefault3, medium: _modDef10857, large: _modDef10858 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = {
  small: AssetRegistryDefault4,
  medium: _modDef10860,
  large: _modDef10861,
};
({ small: AssetRegistryDefault4, medium: _modDef10860, large: _modDef10861 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = {
  small: AssetRegistryDefault5,
  medium: _modDef10863,
  large: _modDef10864,
};
({ small: AssetRegistryDefault5, medium: _modDef10863, large: _modDef10864 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = {
  small: AssetRegistryDefault6,
  medium: _modDef10866,
  large: _modDef10867,
};
({ small: AssetRegistryDefault6, medium: _modDef10866, large: _modDef10867 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = {
  small: AssetRegistryDefault7,
  medium: _modDef10869,
  large: _modDef10870,
};
({ small: AssetRegistryDefault7, medium: _modDef10869, large: _modDef10870 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = {
  small: AssetRegistryDefault8,
  medium: _modDef10872,
  large: _modDef10873,
};
({ small: AssetRegistryDefault8, medium: _modDef10872, large: _modDef10873 });
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
