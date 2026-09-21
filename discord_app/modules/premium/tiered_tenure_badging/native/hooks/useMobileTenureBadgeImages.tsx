// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11426 from "../../../../../../_runtime/metro/11426__.js";
import _modDef11427 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11428 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11429 from "../../../../../../_runtime/metro/11429__.js";
import _modDef11430 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11431 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11432 from "../../../../../../_runtime/metro/11432__.js";
import _modDef11433 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11434 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11435 from "../../../../../../_runtime/metro/11435__.js";
import _modDef11436 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11437 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11438 from "../../../../../../_runtime/metro/11438__.js";
import _modDef11439 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11440 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11441 from "../../../../../../_runtime/metro/11441__.js";
import _modDef11442 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11443 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11444 from "../../../../../../_runtime/metro/11444__.js";
import _modDef11445 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11446 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11447 from "../../../../../../_runtime/metro/11447__.js";
import _modDef11448 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11449 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11426, medium: _modDef11427, large: _modDef11428 };
const obj2 = { small: _modDef11426, medium: _modDef11427, large: _modDef11428 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11429, medium: _modDef11430, large: _modDef11431 };
const obj3 = { small: _modDef11429, medium: _modDef11430, large: _modDef11431 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11432, medium: _modDef11433, large: _modDef11434 };
const obj4 = { small: _modDef11432, medium: _modDef11433, large: _modDef11434 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11435, medium: _modDef11436, large: _modDef11437 };
const obj5 = { small: _modDef11435, medium: _modDef11436, large: _modDef11437 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11438, medium: _modDef11439, large: _modDef11440 };
const obj6 = { small: _modDef11438, medium: _modDef11439, large: _modDef11440 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11441, medium: _modDef11442, large: _modDef11443 };
const obj7 = { small: _modDef11441, medium: _modDef11442, large: _modDef11443 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11444, medium: _modDef11445, large: _modDef11446 };
const obj8 = { small: _modDef11444, medium: _modDef11445, large: _modDef11446 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11447, medium: _modDef11448, large: _modDef11449 };
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
