// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11383 from "../../../../../../_runtime/metro/11383__.js";
import _modDef11384 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11385 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11386 from "../../../../../../_runtime/metro/11386__.js";
import _modDef11387 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11388 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11389 from "../../../../../../_runtime/metro/11389__.js";
import _modDef11390 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11391 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11392 from "../../../../../../_runtime/metro/11392__.js";
import _modDef11393 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11394 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11395 from "../../../../../../_runtime/metro/11395__.js";
import _modDef11396 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11397 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11398 from "../../../../../../_runtime/metro/11398__.js";
import _modDef11399 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11400 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11401 from "../../../../../../_runtime/metro/11401__.js";
import _modDef11402 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11403 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11404 from "../../../../../../_runtime/metro/11404__.js";
import _modDef11405 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11406 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11383, medium: _modDef11384, large: _modDef11385 };
const obj2 = { small: _modDef11383, medium: _modDef11384, large: _modDef11385 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11386, medium: _modDef11387, large: _modDef11388 };
const obj3 = { small: _modDef11386, medium: _modDef11387, large: _modDef11388 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11389, medium: _modDef11390, large: _modDef11391 };
const obj4 = { small: _modDef11389, medium: _modDef11390, large: _modDef11391 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11392, medium: _modDef11393, large: _modDef11394 };
const obj5 = { small: _modDef11392, medium: _modDef11393, large: _modDef11394 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11395, medium: _modDef11396, large: _modDef11397 };
const obj6 = { small: _modDef11395, medium: _modDef11396, large: _modDef11397 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11398, medium: _modDef11399, large: _modDef11400 };
const obj7 = { small: _modDef11398, medium: _modDef11399, large: _modDef11400 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11401, medium: _modDef11402, large: _modDef11403 };
const obj8 = { small: _modDef11401, medium: _modDef11402, large: _modDef11403 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11404, medium: _modDef11405, large: _modDef11406 };
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
