// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef10538 from "../../../../../../_runtime/metro/10538__.js";
import _modDef10539 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef10540 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef10541 from "../../../../../../_runtime/metro/10541__.js";
import _modDef10542 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef10543 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef10544 from "../../../../../../_runtime/metro/10544__.js";
import _modDef10545 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef10546 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef10547 from "../../../../../../_runtime/metro/10547__.js";
import _modDef10548 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef10549 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef10550 from "../../../../../../_runtime/metro/10550__.js";
import _modDef10551 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef10552 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef10553 from "../../../../../../_runtime/metro/10553__.js";
import _modDef10554 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef10555 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef10556 from "../../../../../../_runtime/metro/10556__.js";
import _modDef10557 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef10558 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef10559 from "../../../../../../_runtime/metro/10559__.js";
import _modDef10560 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef10561 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10538, medium: _modDef10539, large: _modDef10540 };
const obj2 = { small: _modDef10538, medium: _modDef10539, large: _modDef10540 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10541, medium: _modDef10542, large: _modDef10543 };
const obj3 = { small: _modDef10541, medium: _modDef10542, large: _modDef10543 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10544, medium: _modDef10545, large: _modDef10546 };
const obj4 = { small: _modDef10544, medium: _modDef10545, large: _modDef10546 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10547, medium: _modDef10548, large: _modDef10549 };
const obj5 = { small: _modDef10547, medium: _modDef10548, large: _modDef10549 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10550, medium: _modDef10551, large: _modDef10552 };
const obj6 = { small: _modDef10550, medium: _modDef10551, large: _modDef10552 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10553, medium: _modDef10554, large: _modDef10555 };
const obj7 = { small: _modDef10553, medium: _modDef10554, large: _modDef10555 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10556, medium: _modDef10557, large: _modDef10558 };
const obj8 = { small: _modDef10556, medium: _modDef10557, large: _modDef10558 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10559, medium: _modDef10560, large: _modDef10561 };
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
