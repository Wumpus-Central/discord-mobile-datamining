// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef10504 from "../../../../../../_runtime/metro/10504__.js";
import _modDef10505 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef10506 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef10507 from "../../../../../../_runtime/metro/10507__.js";
import _modDef10508 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef10509 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef10510 from "../../../../../../_runtime/metro/10510__.js";
import _modDef10511 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef10512 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef10513 from "../../../../../../_runtime/metro/10513__.js";
import _modDef10514 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef10515 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef10516 from "../../../../../../_runtime/metro/10516__.js";
import _modDef10517 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef10518 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef10519 from "../../../../../../_runtime/metro/10519__.js";
import _modDef10520 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef10521 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef10522 from "../../../../../../_runtime/metro/10522__.js";
import _modDef10523 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef10524 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef10525 from "../../../../../../_runtime/metro/10525__.js";
import _modDef10526 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef10527 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10504, medium: _modDef10505, large: _modDef10506 };
const obj2 = { small: _modDef10504, medium: _modDef10505, large: _modDef10506 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10507, medium: _modDef10508, large: _modDef10509 };
const obj3 = { small: _modDef10507, medium: _modDef10508, large: _modDef10509 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10510, medium: _modDef10511, large: _modDef10512 };
const obj4 = { small: _modDef10510, medium: _modDef10511, large: _modDef10512 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10513, medium: _modDef10514, large: _modDef10515 };
const obj5 = { small: _modDef10513, medium: _modDef10514, large: _modDef10515 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10516, medium: _modDef10517, large: _modDef10518 };
const obj6 = { small: _modDef10516, medium: _modDef10517, large: _modDef10518 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10519, medium: _modDef10520, large: _modDef10521 };
const obj7 = { small: _modDef10519, medium: _modDef10520, large: _modDef10521 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10522, medium: _modDef10523, large: _modDef10524 };
const obj8 = { small: _modDef10522, medium: _modDef10523, large: _modDef10524 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10525, medium: _modDef10526, large: _modDef10527 };
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
