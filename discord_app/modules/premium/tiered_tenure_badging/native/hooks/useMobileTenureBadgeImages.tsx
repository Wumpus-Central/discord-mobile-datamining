// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef10514 from "../../../../../../_runtime/metro/10514__.js";
import _modDef10515 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef10516 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef10517 from "../../../../../../_runtime/metro/10517__.js";
import _modDef10518 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef10519 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef10520 from "../../../../../../_runtime/metro/10520__.js";
import _modDef10521 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef10522 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef10523 from "../../../../../../_runtime/metro/10523__.js";
import _modDef10524 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef10525 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef10526 from "../../../../../../_runtime/metro/10526__.js";
import _modDef10527 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef10528 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef10529 from "../../../../../../_runtime/metro/10529__.js";
import _modDef10530 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef10531 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef10532 from "../../../../../../_runtime/metro/10532__.js";
import _modDef10533 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef10534 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef10535 from "../../../../../../_runtime/metro/10535__.js";
import _modDef10536 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef10537 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10514, medium: _modDef10515, large: _modDef10516 };
const obj2 = { small: _modDef10514, medium: _modDef10515, large: _modDef10516 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10517, medium: _modDef10518, large: _modDef10519 };
const obj3 = { small: _modDef10517, medium: _modDef10518, large: _modDef10519 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10520, medium: _modDef10521, large: _modDef10522 };
const obj4 = { small: _modDef10520, medium: _modDef10521, large: _modDef10522 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10523, medium: _modDef10524, large: _modDef10525 };
const obj5 = { small: _modDef10523, medium: _modDef10524, large: _modDef10525 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10526, medium: _modDef10527, large: _modDef10528 };
const obj6 = { small: _modDef10526, medium: _modDef10527, large: _modDef10528 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10529, medium: _modDef10530, large: _modDef10531 };
const obj7 = { small: _modDef10529, medium: _modDef10530, large: _modDef10531 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10532, medium: _modDef10533, large: _modDef10534 };
const obj8 = { small: _modDef10532, medium: _modDef10533, large: _modDef10534 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10535, medium: _modDef10536, large: _modDef10537 };
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
