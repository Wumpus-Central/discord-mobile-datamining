// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11082 from "../../../../../../_runtime/metro/11082__.js";
import _modDef11083 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11084 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11085 from "../../../../../../_runtime/metro/11085__.js";
import _modDef11086 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11087 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11088 from "../../../../../../_runtime/metro/11088__.js";
import _modDef11089 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11090 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11091 from "../../../../../../_runtime/metro/11091__.js";
import _modDef11092 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11093 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11094 from "../../../../../../_runtime/metro/11094__.js";
import _modDef11095 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11096 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11097 from "../../../../../../_runtime/metro/11097__.js";
import _modDef11098 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11099 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11100 from "../../../../../../_runtime/metro/11100__.js";
import _modDef11101 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11102 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11103 from "../../../../../../_runtime/metro/11103__.js";
import _modDef11104 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11105 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11082, medium: _modDef11083, large: _modDef11084 };
const obj2 = { small: _modDef11082, medium: _modDef11083, large: _modDef11084 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11085, medium: _modDef11086, large: _modDef11087 };
const obj3 = { small: _modDef11085, medium: _modDef11086, large: _modDef11087 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11088, medium: _modDef11089, large: _modDef11090 };
const obj4 = { small: _modDef11088, medium: _modDef11089, large: _modDef11090 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11091, medium: _modDef11092, large: _modDef11093 };
const obj5 = { small: _modDef11091, medium: _modDef11092, large: _modDef11093 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11094, medium: _modDef11095, large: _modDef11096 };
const obj6 = { small: _modDef11094, medium: _modDef11095, large: _modDef11096 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11097, medium: _modDef11098, large: _modDef11099 };
const obj7 = { small: _modDef11097, medium: _modDef11098, large: _modDef11099 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11100, medium: _modDef11101, large: _modDef11102 };
const obj8 = { small: _modDef11100, medium: _modDef11101, large: _modDef11102 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11103, medium: _modDef11104, large: _modDef11105 };
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
