// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef10549 from "../../../../../../_runtime/metro/10549__.js";
import _modDef10550 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef10551 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef10552 from "../../../../../../_runtime/metro/10552__.js";
import _modDef10553 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef10554 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef10555 from "../../../../../../_runtime/metro/10555__.js";
import _modDef10556 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef10557 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef10558 from "../../../../../../_runtime/metro/10558__.js";
import _modDef10559 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef10560 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef10561 from "../../../../../../_runtime/metro/10561__.js";
import _modDef10562 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef10563 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef10564 from "../../../../../../_runtime/metro/10564__.js";
import _modDef10565 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef10566 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef10567 from "../../../../../../_runtime/metro/10567__.js";
import _modDef10568 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef10569 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef10570 from "../../../../../../_runtime/metro/10570__.js";
import _modDef10571 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef10572 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10549, medium: _modDef10550, large: _modDef10551 };
const obj2 = { small: _modDef10549, medium: _modDef10550, large: _modDef10551 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10552, medium: _modDef10553, large: _modDef10554 };
const obj3 = { small: _modDef10552, medium: _modDef10553, large: _modDef10554 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10555, medium: _modDef10556, large: _modDef10557 };
const obj4 = { small: _modDef10555, medium: _modDef10556, large: _modDef10557 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10558, medium: _modDef10559, large: _modDef10560 };
const obj5 = { small: _modDef10558, medium: _modDef10559, large: _modDef10560 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10561, medium: _modDef10562, large: _modDef10563 };
const obj6 = { small: _modDef10561, medium: _modDef10562, large: _modDef10563 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10564, medium: _modDef10565, large: _modDef10566 };
const obj7 = { small: _modDef10564, medium: _modDef10565, large: _modDef10566 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10567, medium: _modDef10568, large: _modDef10569 };
const obj8 = { small: _modDef10567, medium: _modDef10568, large: _modDef10569 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10570, medium: _modDef10571, large: _modDef10572 };
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
