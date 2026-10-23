// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11081 from "../../../../../../_runtime/metro/11081__.js";
import _modDef11082 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11083 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11084 from "../../../../../../_runtime/metro/11084__.js";
import _modDef11085 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11086 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11087 from "../../../../../../_runtime/metro/11087__.js";
import _modDef11088 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11089 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11090 from "../../../../../../_runtime/metro/11090__.js";
import _modDef11091 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11092 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11093 from "../../../../../../_runtime/metro/11093__.js";
import _modDef11094 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11095 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11096 from "../../../../../../_runtime/metro/11096__.js";
import _modDef11097 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11098 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11099 from "../../../../../../_runtime/metro/11099__.js";
import _modDef11100 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11101 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11102 from "../../../../../../_runtime/metro/11102__.js";
import _modDef11103 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11104 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11081, medium: _modDef11082, large: _modDef11083 };
const obj2 = { small: _modDef11081, medium: _modDef11082, large: _modDef11083 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11084, medium: _modDef11085, large: _modDef11086 };
const obj3 = { small: _modDef11084, medium: _modDef11085, large: _modDef11086 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11087, medium: _modDef11088, large: _modDef11089 };
const obj4 = { small: _modDef11087, medium: _modDef11088, large: _modDef11089 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11090, medium: _modDef11091, large: _modDef11092 };
const obj5 = { small: _modDef11090, medium: _modDef11091, large: _modDef11092 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11093, medium: _modDef11094, large: _modDef11095 };
const obj6 = { small: _modDef11093, medium: _modDef11094, large: _modDef11095 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11096, medium: _modDef11097, large: _modDef11098 };
const obj7 = { small: _modDef11096, medium: _modDef11097, large: _modDef11098 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11099, medium: _modDef11100, large: _modDef11101 };
const obj8 = { small: _modDef11099, medium: _modDef11100, large: _modDef11101 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11102, medium: _modDef11103, large: _modDef11104 };
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
