// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11412 from "../../../../../../_runtime/metro/11412__.js";
import _modDef11413 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11414 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11415 from "../../../../../../_runtime/metro/11415__.js";
import _modDef11416 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11417 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11418 from "../../../../../../_runtime/metro/11418__.js";
import _modDef11419 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11420 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11421 from "../../../../../../_runtime/metro/11421__.js";
import _modDef11422 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11423 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11424 from "../../../../../../_runtime/metro/11424__.js";
import _modDef11425 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11426 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11427 from "../../../../../../_runtime/metro/11427__.js";
import _modDef11428 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11429 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11430 from "../../../../../../_runtime/metro/11430__.js";
import _modDef11431 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11432 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11433 from "../../../../../../_runtime/metro/11433__.js";
import _modDef11434 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11435 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11412, medium: _modDef11413, large: _modDef11414 };
const obj2 = { small: _modDef11412, medium: _modDef11413, large: _modDef11414 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11415, medium: _modDef11416, large: _modDef11417 };
const obj3 = { small: _modDef11415, medium: _modDef11416, large: _modDef11417 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11418, medium: _modDef11419, large: _modDef11420 };
const obj4 = { small: _modDef11418, medium: _modDef11419, large: _modDef11420 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11421, medium: _modDef11422, large: _modDef11423 };
const obj5 = { small: _modDef11421, medium: _modDef11422, large: _modDef11423 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11424, medium: _modDef11425, large: _modDef11426 };
const obj6 = { small: _modDef11424, medium: _modDef11425, large: _modDef11426 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11427, medium: _modDef11428, large: _modDef11429 };
const obj7 = { small: _modDef11427, medium: _modDef11428, large: _modDef11429 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11430, medium: _modDef11431, large: _modDef11432 };
const obj8 = { small: _modDef11430, medium: _modDef11431, large: _modDef11432 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11433, medium: _modDef11434, large: _modDef11435 };
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
