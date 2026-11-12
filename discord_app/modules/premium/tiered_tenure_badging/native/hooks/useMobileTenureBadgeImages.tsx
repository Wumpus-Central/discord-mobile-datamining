// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef10019 from "../../../../../../_runtime/metro/10019__.js";
import _modDef10020 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef10021 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef10022 from "../../../../../../_runtime/metro/10022__.js";
import _modDef10023 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef10024 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef10025 from "../../../../../../_runtime/metro/10025__.js";
import _modDef10026 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef10027 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef10028 from "../../../../../../_runtime/metro/10028__.js";
import _modDef10029 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef10030 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef10031 from "../../../../../../_runtime/metro/10031__.js";
import _modDef10032 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef10033 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef10034 from "../../../../../../_runtime/metro/10034__.js";
import _modDef10035 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef10036 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef10037 from "../../../../../../_runtime/metro/10037__.js";
import _modDef10038 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef10039 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef10040 from "../../../../../../_runtime/metro/10040__.js";
import _modDef10041 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef10042 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10019, medium: _modDef10020, large: _modDef10021 };
const obj2 = { small: _modDef10019, medium: _modDef10020, large: _modDef10021 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10022, medium: _modDef10023, large: _modDef10024 };
const obj3 = { small: _modDef10022, medium: _modDef10023, large: _modDef10024 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10025, medium: _modDef10026, large: _modDef10027 };
const obj4 = { small: _modDef10025, medium: _modDef10026, large: _modDef10027 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10028, medium: _modDef10029, large: _modDef10030 };
const obj5 = { small: _modDef10028, medium: _modDef10029, large: _modDef10030 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10031, medium: _modDef10032, large: _modDef10033 };
const obj6 = { small: _modDef10031, medium: _modDef10032, large: _modDef10033 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10034, medium: _modDef10035, large: _modDef10036 };
const obj7 = { small: _modDef10034, medium: _modDef10035, large: _modDef10036 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10037, medium: _modDef10038, large: _modDef10039 };
const obj8 = { small: _modDef10037, medium: _modDef10038, large: _modDef10039 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10040, medium: _modDef10041, large: _modDef10042 };
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
