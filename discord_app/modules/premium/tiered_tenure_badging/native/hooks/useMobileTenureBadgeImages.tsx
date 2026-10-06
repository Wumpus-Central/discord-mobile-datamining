// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import AssetRegistryDefault from "../../../../../../_runtime/10863_AssetRegistry.js";
import _modDef10864 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef10865 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import AssetRegistryDefault2 from "../../../../../../_runtime/10866_AssetRegistry.js";
import _modDef10867 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef10868 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import AssetRegistryDefault3 from "../../../../../../_runtime/10869_AssetRegistry.js";
import _modDef10870 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef10871 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import AssetRegistryDefault4 from "../../../../../../_runtime/10872_AssetRegistry.js";
import _modDef10873 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef10874 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import AssetRegistryDefault5 from "../../../../../../_runtime/10875_AssetRegistry.js";
import _modDef10876 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef10877 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import AssetRegistryDefault6 from "../../../../../../_runtime/10878_AssetRegistry.js";
import _modDef10879 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef10880 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import AssetRegistryDefault7 from "../../../../../../_runtime/10881_AssetRegistry.js";
import _modDef10882 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef10883 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import AssetRegistryDefault8 from "../../../../../../_runtime/10884_AssetRegistry.js";
import _modDef10885 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef10886 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = {
  small: AssetRegistryDefault,
  medium: _modDef10864,
  large: _modDef10865,
};
({ small: AssetRegistryDefault, medium: _modDef10864, large: _modDef10865 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = {
  small: AssetRegistryDefault2,
  medium: _modDef10867,
  large: _modDef10868,
};
({ small: AssetRegistryDefault2, medium: _modDef10867, large: _modDef10868 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = {
  small: AssetRegistryDefault3,
  medium: _modDef10870,
  large: _modDef10871,
};
({ small: AssetRegistryDefault3, medium: _modDef10870, large: _modDef10871 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = {
  small: AssetRegistryDefault4,
  medium: _modDef10873,
  large: _modDef10874,
};
({ small: AssetRegistryDefault4, medium: _modDef10873, large: _modDef10874 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = {
  small: AssetRegistryDefault5,
  medium: _modDef10876,
  large: _modDef10877,
};
({ small: AssetRegistryDefault5, medium: _modDef10876, large: _modDef10877 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = {
  small: AssetRegistryDefault6,
  medium: _modDef10879,
  large: _modDef10880,
};
({ small: AssetRegistryDefault6, medium: _modDef10879, large: _modDef10880 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = {
  small: AssetRegistryDefault7,
  medium: _modDef10882,
  large: _modDef10883,
};
({ small: AssetRegistryDefault7, medium: _modDef10882, large: _modDef10883 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = {
  small: AssetRegistryDefault8,
  medium: _modDef10885,
  large: _modDef10886,
};
({ small: AssetRegistryDefault8, medium: _modDef10885, large: _modDef10886 });
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
