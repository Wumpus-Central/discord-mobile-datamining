// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef10539 from "../../../../../../_runtime/metro/10539__.js";
import _modDef10540 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef10541 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef10542 from "../../../../../../_runtime/metro/10542__.js";
import _modDef10543 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef10544 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef10545 from "../../../../../../_runtime/metro/10545__.js";
import _modDef10546 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef10547 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef10548 from "../../../../../../_runtime/metro/10548__.js";
import _modDef10549 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef10550 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef10551 from "../../../../../../_runtime/metro/10551__.js";
import _modDef10552 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef10553 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef10554 from "../../../../../../_runtime/metro/10554__.js";
import _modDef10555 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef10556 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef10557 from "../../../../../../_runtime/metro/10557__.js";
import _modDef10558 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef10559 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef10560 from "../../../../../../_runtime/metro/10560__.js";
import _modDef10561 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef10562 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10539, medium: _modDef10540, large: _modDef10541 };
const obj2 = { small: _modDef10539, medium: _modDef10540, large: _modDef10541 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10542, medium: _modDef10543, large: _modDef10544 };
const obj3 = { small: _modDef10542, medium: _modDef10543, large: _modDef10544 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10545, medium: _modDef10546, large: _modDef10547 };
const obj4 = { small: _modDef10545, medium: _modDef10546, large: _modDef10547 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10548, medium: _modDef10549, large: _modDef10550 };
const obj5 = { small: _modDef10548, medium: _modDef10549, large: _modDef10550 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10551, medium: _modDef10552, large: _modDef10553 };
const obj6 = { small: _modDef10551, medium: _modDef10552, large: _modDef10553 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10554, medium: _modDef10555, large: _modDef10556 };
const obj7 = { small: _modDef10554, medium: _modDef10555, large: _modDef10556 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10557, medium: _modDef10558, large: _modDef10559 };
const obj8 = { small: _modDef10557, medium: _modDef10558, large: _modDef10559 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10560, medium: _modDef10561, large: _modDef10562 };
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
