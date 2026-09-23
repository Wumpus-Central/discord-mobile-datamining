// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11506 from "../../../../../../_runtime/metro/11506__.js";
import _modDef11507 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11508 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11509 from "../../../../../../_runtime/metro/11509__.js";
import _modDef11510 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11511 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11512 from "../../../../../../_runtime/metro/11512__.js";
import _modDef11513 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11514 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11515 from "../../../../../../_runtime/metro/11515__.js";
import _modDef11516 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11517 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11518 from "../../../../../../_runtime/metro/11518__.js";
import _modDef11519 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11520 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11521 from "../../../../../../_runtime/metro/11521__.js";
import _modDef11522 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11523 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11524 from "../../../../../../_runtime/metro/11524__.js";
import _modDef11525 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11526 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11527 from "../../../../../../_runtime/metro/11527__.js";
import _modDef11528 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11529 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11506, medium: _modDef11507, large: _modDef11508 };
const obj2 = { small: _modDef11506, medium: _modDef11507, large: _modDef11508 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11509, medium: _modDef11510, large: _modDef11511 };
const obj3 = { small: _modDef11509, medium: _modDef11510, large: _modDef11511 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11512, medium: _modDef11513, large: _modDef11514 };
const obj4 = { small: _modDef11512, medium: _modDef11513, large: _modDef11514 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11515, medium: _modDef11516, large: _modDef11517 };
const obj5 = { small: _modDef11515, medium: _modDef11516, large: _modDef11517 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11518, medium: _modDef11519, large: _modDef11520 };
const obj6 = { small: _modDef11518, medium: _modDef11519, large: _modDef11520 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11521, medium: _modDef11522, large: _modDef11523 };
const obj7 = { small: _modDef11521, medium: _modDef11522, large: _modDef11523 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11524, medium: _modDef11525, large: _modDef11526 };
const obj8 = { small: _modDef11524, medium: _modDef11525, large: _modDef11526 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11527, medium: _modDef11528, large: _modDef11529 };
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
