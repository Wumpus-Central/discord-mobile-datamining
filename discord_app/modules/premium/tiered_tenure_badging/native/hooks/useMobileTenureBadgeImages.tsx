// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef10865 from "../../../../../../_runtime/metro/10865__.js";
import _modDef10866 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef10867 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef10868 from "../../../../../../_runtime/metro/10868__.js";
import _modDef10869 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef10870 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef10871 from "../../../../../../_runtime/metro/10871__.js";
import _modDef10872 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef10873 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef10874 from "../../../../../../_runtime/metro/10874__.js";
import _modDef10875 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef10876 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef10877 from "../../../../../../_runtime/metro/10877__.js";
import _modDef10878 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef10879 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef10880 from "../../../../../../_runtime/metro/10880__.js";
import _modDef10881 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef10882 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef10883 from "../../../../../../_runtime/metro/10883__.js";
import _modDef10884 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef10885 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef10886 from "../../../../../../_runtime/metro/10886__.js";
import _modDef10887 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef10888 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10865, medium: _modDef10866, large: _modDef10867 };
const obj2 = { small: _modDef10865, medium: _modDef10866, large: _modDef10867 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10868, medium: _modDef10869, large: _modDef10870 };
const obj3 = { small: _modDef10868, medium: _modDef10869, large: _modDef10870 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10871, medium: _modDef10872, large: _modDef10873 };
const obj4 = { small: _modDef10871, medium: _modDef10872, large: _modDef10873 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10874, medium: _modDef10875, large: _modDef10876 };
const obj5 = { small: _modDef10874, medium: _modDef10875, large: _modDef10876 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10877, medium: _modDef10878, large: _modDef10879 };
const obj6 = { small: _modDef10877, medium: _modDef10878, large: _modDef10879 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10880, medium: _modDef10881, large: _modDef10882 };
const obj7 = { small: _modDef10880, medium: _modDef10881, large: _modDef10882 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10883, medium: _modDef10884, large: _modDef10885 };
const obj8 = { small: _modDef10883, medium: _modDef10884, large: _modDef10885 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10886, medium: _modDef10887, large: _modDef10888 };
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
