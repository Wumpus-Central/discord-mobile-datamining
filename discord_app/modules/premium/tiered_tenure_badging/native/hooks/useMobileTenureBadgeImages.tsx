// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11058 from "../../../../../../_runtime/metro/11058__.js";
import _modDef11059 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11060 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11061 from "../../../../../../_runtime/metro/11061__.js";
import _modDef11062 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11063 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11064 from "../../../../../../_runtime/metro/11064__.js";
import _modDef11065 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11066 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11067 from "../../../../../../_runtime/metro/11067__.js";
import _modDef11068 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11069 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11070 from "../../../../../../_runtime/metro/11070__.js";
import _modDef11071 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11072 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11073 from "../../../../../../_runtime/metro/11073__.js";
import _modDef11074 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11075 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11076 from "../../../../../../_runtime/metro/11076__.js";
import _modDef11077 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11078 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11079 from "../../../../../../_runtime/metro/11079__.js";
import _modDef11080 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11081 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11058, medium: _modDef11059, large: _modDef11060 };
const obj2 = { small: _modDef11058, medium: _modDef11059, large: _modDef11060 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11061, medium: _modDef11062, large: _modDef11063 };
const obj3 = { small: _modDef11061, medium: _modDef11062, large: _modDef11063 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11064, medium: _modDef11065, large: _modDef11066 };
const obj4 = { small: _modDef11064, medium: _modDef11065, large: _modDef11066 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11067, medium: _modDef11068, large: _modDef11069 };
const obj5 = { small: _modDef11067, medium: _modDef11068, large: _modDef11069 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11070, medium: _modDef11071, large: _modDef11072 };
const obj6 = { small: _modDef11070, medium: _modDef11071, large: _modDef11072 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11073, medium: _modDef11074, large: _modDef11075 };
const obj7 = { small: _modDef11073, medium: _modDef11074, large: _modDef11075 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11076, medium: _modDef11077, large: _modDef11078 };
const obj8 = { small: _modDef11076, medium: _modDef11077, large: _modDef11078 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11079, medium: _modDef11080, large: _modDef11081 };
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
