// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11124 from "../../../../../../_runtime/metro/11124__.js";
import _modDef11125 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11126 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11127 from "../../../../../../_runtime/metro/11127__.js";
import _modDef11128 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11129 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11130 from "../../../../../../_runtime/metro/11130__.js";
import _modDef11131 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11132 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11133 from "../../../../../../_runtime/metro/11133__.js";
import _modDef11134 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11135 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11136 from "../../../../../../_runtime/metro/11136__.js";
import _modDef11137 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11138 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11139 from "../../../../../../_runtime/metro/11139__.js";
import _modDef11140 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11141 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11142 from "../../../../../../_runtime/metro/11142__.js";
import _modDef11143 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11144 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11145 from "../../../../../../_runtime/metro/11145__.js";
import _modDef11146 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11147 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11124, medium: _modDef11125, large: _modDef11126 };
const obj2 = { small: _modDef11124, medium: _modDef11125, large: _modDef11126 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11127, medium: _modDef11128, large: _modDef11129 };
const obj3 = { small: _modDef11127, medium: _modDef11128, large: _modDef11129 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11130, medium: _modDef11131, large: _modDef11132 };
const obj4 = { small: _modDef11130, medium: _modDef11131, large: _modDef11132 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11133, medium: _modDef11134, large: _modDef11135 };
const obj5 = { small: _modDef11133, medium: _modDef11134, large: _modDef11135 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11136, medium: _modDef11137, large: _modDef11138 };
const obj6 = { small: _modDef11136, medium: _modDef11137, large: _modDef11138 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11139, medium: _modDef11140, large: _modDef11141 };
const obj7 = { small: _modDef11139, medium: _modDef11140, large: _modDef11141 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11142, medium: _modDef11143, large: _modDef11144 };
const obj8 = { small: _modDef11142, medium: _modDef11143, large: _modDef11144 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11145, medium: _modDef11146, large: _modDef11147 };
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
