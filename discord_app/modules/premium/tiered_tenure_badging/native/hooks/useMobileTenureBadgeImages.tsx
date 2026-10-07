// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef10863 from "../../../../../../_runtime/metro/10863__.js";
import _modDef10864 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef10865 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef10866 from "../../../../../../_runtime/metro/10866__.js";
import _modDef10867 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef10868 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef10869 from "../../../../../../_runtime/metro/10869__.js";
import _modDef10870 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef10871 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef10872 from "../../../../../../_runtime/metro/10872__.js";
import _modDef10873 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef10874 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef10875 from "../../../../../../_runtime/metro/10875__.js";
import _modDef10876 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef10877 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef10878 from "../../../../../../_runtime/metro/10878__.js";
import _modDef10879 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef10880 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef10881 from "../../../../../../_runtime/metro/10881__.js";
import _modDef10882 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef10883 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef10884 from "../../../../../../_runtime/metro/10884__.js";
import _modDef10885 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef10886 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10863, medium: _modDef10864, large: _modDef10865 };
const obj2 = { small: _modDef10863, medium: _modDef10864, large: _modDef10865 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10866, medium: _modDef10867, large: _modDef10868 };
const obj3 = { small: _modDef10866, medium: _modDef10867, large: _modDef10868 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10869, medium: _modDef10870, large: _modDef10871 };
const obj4 = { small: _modDef10869, medium: _modDef10870, large: _modDef10871 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10872, medium: _modDef10873, large: _modDef10874 };
const obj5 = { small: _modDef10872, medium: _modDef10873, large: _modDef10874 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10875, medium: _modDef10876, large: _modDef10877 };
const obj6 = { small: _modDef10875, medium: _modDef10876, large: _modDef10877 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10878, medium: _modDef10879, large: _modDef10880 };
const obj7 = { small: _modDef10878, medium: _modDef10879, large: _modDef10880 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10881, medium: _modDef10882, large: _modDef10883 };
const obj8 = { small: _modDef10881, medium: _modDef10882, large: _modDef10883 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10884, medium: _modDef10885, large: _modDef10886 };
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
