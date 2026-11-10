// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11570 from "../../../../../../_runtime/metro/11570__.js";
import _modDef11571 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11572 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11573 from "../../../../../../_runtime/metro/11573__.js";
import _modDef11574 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11575 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11576 from "../../../../../../_runtime/metro/11576__.js";
import _modDef11577 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11578 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11579 from "../../../../../../_runtime/metro/11579__.js";
import _modDef11580 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11581 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11582 from "../../../../../../_runtime/metro/11582__.js";
import _modDef11583 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11584 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11585 from "../../../../../../_runtime/metro/11585__.js";
import _modDef11586 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11587 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11588 from "../../../../../../_runtime/metro/11588__.js";
import _modDef11589 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11590 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11591 from "../../../../../../_runtime/metro/11591__.js";
import _modDef11592 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11593 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11570, medium: _modDef11571, large: _modDef11572 };
const obj2 = { small: _modDef11570, medium: _modDef11571, large: _modDef11572 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11573, medium: _modDef11574, large: _modDef11575 };
const obj3 = { small: _modDef11573, medium: _modDef11574, large: _modDef11575 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11576, medium: _modDef11577, large: _modDef11578 };
const obj4 = { small: _modDef11576, medium: _modDef11577, large: _modDef11578 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11579, medium: _modDef11580, large: _modDef11581 };
const obj5 = { small: _modDef11579, medium: _modDef11580, large: _modDef11581 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11582, medium: _modDef11583, large: _modDef11584 };
const obj6 = { small: _modDef11582, medium: _modDef11583, large: _modDef11584 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11585, medium: _modDef11586, large: _modDef11587 };
const obj7 = { small: _modDef11585, medium: _modDef11586, large: _modDef11587 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11588, medium: _modDef11589, large: _modDef11590 };
const obj8 = { small: _modDef11588, medium: _modDef11589, large: _modDef11590 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11591, medium: _modDef11592, large: _modDef11593 };
const result = size.fileFinishedImporting(
  "modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx",
);

export function useMobileTenureBadgeImages(id) {
  let tmp = null;
  if (null != id) {
    tmp = obj[id];
  }
  return tmp;
}
export function getMobileTenureBadgeImages(arg0) {
  return obj[arg0];
}
