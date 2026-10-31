// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11419 from "../../../../../../_runtime/metro/11419__.js";
import _modDef11420 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11421 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11422 from "../../../../../../_runtime/metro/11422__.js";
import _modDef11423 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11424 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11425 from "../../../../../../_runtime/metro/11425__.js";
import _modDef11426 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11427 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11428 from "../../../../../../_runtime/metro/11428__.js";
import _modDef11429 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11430 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11431 from "../../../../../../_runtime/metro/11431__.js";
import _modDef11432 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11433 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11434 from "../../../../../../_runtime/metro/11434__.js";
import _modDef11435 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11436 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11437 from "../../../../../../_runtime/metro/11437__.js";
import _modDef11438 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11439 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11440 from "../../../../../../_runtime/metro/11440__.js";
import _modDef11441 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11442 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11419, medium: _modDef11420, large: _modDef11421 };
const obj2 = { small: _modDef11419, medium: _modDef11420, large: _modDef11421 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11422, medium: _modDef11423, large: _modDef11424 };
const obj3 = { small: _modDef11422, medium: _modDef11423, large: _modDef11424 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11425, medium: _modDef11426, large: _modDef11427 };
const obj4 = { small: _modDef11425, medium: _modDef11426, large: _modDef11427 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11428, medium: _modDef11429, large: _modDef11430 };
const obj5 = { small: _modDef11428, medium: _modDef11429, large: _modDef11430 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11431, medium: _modDef11432, large: _modDef11433 };
const obj6 = { small: _modDef11431, medium: _modDef11432, large: _modDef11433 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11434, medium: _modDef11435, large: _modDef11436 };
const obj7 = { small: _modDef11434, medium: _modDef11435, large: _modDef11436 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11437, medium: _modDef11438, large: _modDef11439 };
const obj8 = { small: _modDef11437, medium: _modDef11438, large: _modDef11439 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11440, medium: _modDef11441, large: _modDef11442 };
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
