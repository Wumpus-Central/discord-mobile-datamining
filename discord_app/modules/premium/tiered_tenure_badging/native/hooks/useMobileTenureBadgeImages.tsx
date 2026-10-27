// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11089 from "../../../../../../_runtime/metro/11089__.js";
import _modDef11090 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11091 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11092 from "../../../../../../_runtime/metro/11092__.js";
import _modDef11093 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11094 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11095 from "../../../../../../_runtime/metro/11095__.js";
import _modDef11096 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11097 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11098 from "../../../../../../_runtime/metro/11098__.js";
import _modDef11099 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11100 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11101 from "../../../../../../_runtime/metro/11101__.js";
import _modDef11102 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11103 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11104 from "../../../../../../_runtime/metro/11104__.js";
import _modDef11105 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11106 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11107 from "../../../../../../_runtime/metro/11107__.js";
import _modDef11108 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11109 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11110 from "../../../../../../_runtime/metro/11110__.js";
import _modDef11111 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11112 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11089, medium: _modDef11090, large: _modDef11091 };
const obj2 = { small: _modDef11089, medium: _modDef11090, large: _modDef11091 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11092, medium: _modDef11093, large: _modDef11094 };
const obj3 = { small: _modDef11092, medium: _modDef11093, large: _modDef11094 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11095, medium: _modDef11096, large: _modDef11097 };
const obj4 = { small: _modDef11095, medium: _modDef11096, large: _modDef11097 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11098, medium: _modDef11099, large: _modDef11100 };
const obj5 = { small: _modDef11098, medium: _modDef11099, large: _modDef11100 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11101, medium: _modDef11102, large: _modDef11103 };
const obj6 = { small: _modDef11101, medium: _modDef11102, large: _modDef11103 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11104, medium: _modDef11105, large: _modDef11106 };
const obj7 = { small: _modDef11104, medium: _modDef11105, large: _modDef11106 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11107, medium: _modDef11108, large: _modDef11109 };
const obj8 = { small: _modDef11107, medium: _modDef11108, large: _modDef11109 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11110, medium: _modDef11111, large: _modDef11112 };
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
