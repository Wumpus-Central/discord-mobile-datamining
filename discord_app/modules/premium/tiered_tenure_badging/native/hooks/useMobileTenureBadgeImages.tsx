// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef10020 from "../../../../../../_runtime/metro/10020__.js";
import _modDef10021 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef10022 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef10023 from "../../../../../../_runtime/metro/10023__.js";
import _modDef10024 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef10025 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef10026 from "../../../../../../_runtime/metro/10026__.js";
import _modDef10027 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef10028 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef10029 from "../../../../../../_runtime/metro/10029__.js";
import _modDef10030 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef10031 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef10032 from "../../../../../../_runtime/metro/10032__.js";
import _modDef10033 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef10034 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef10035 from "../../../../../../_runtime/metro/10035__.js";
import _modDef10036 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef10037 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef10038 from "../../../../../../_runtime/metro/10038__.js";
import _modDef10039 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef10040 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef10041 from "../../../../../../_runtime/metro/10041__.js";
import _modDef10042 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef10043 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10020, medium: _modDef10021, large: _modDef10022 };
const obj2 = { small: _modDef10020, medium: _modDef10021, large: _modDef10022 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10023, medium: _modDef10024, large: _modDef10025 };
const obj3 = { small: _modDef10023, medium: _modDef10024, large: _modDef10025 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10026, medium: _modDef10027, large: _modDef10028 };
const obj4 = { small: _modDef10026, medium: _modDef10027, large: _modDef10028 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10029, medium: _modDef10030, large: _modDef10031 };
const obj5 = { small: _modDef10029, medium: _modDef10030, large: _modDef10031 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10032, medium: _modDef10033, large: _modDef10034 };
const obj6 = { small: _modDef10032, medium: _modDef10033, large: _modDef10034 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10035, medium: _modDef10036, large: _modDef10037 };
const obj7 = { small: _modDef10035, medium: _modDef10036, large: _modDef10037 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10038, medium: _modDef10039, large: _modDef10040 };
const obj8 = { small: _modDef10038, medium: _modDef10039, large: _modDef10040 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10041, medium: _modDef10042, large: _modDef10043 };
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
