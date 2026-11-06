// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef11579 from "../../../../../../_runtime/metro/11579__.js";
import _modDef11580 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef11581 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef11582 from "../../../../../../_runtime/metro/11582__.js";
import _modDef11583 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef11584 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef11585 from "../../../../../../_runtime/metro/11585__.js";
import _modDef11586 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef11587 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef11588 from "../../../../../../_runtime/metro/11588__.js";
import _modDef11589 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef11590 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef11591 from "../../../../../../_runtime/metro/11591__.js";
import _modDef11592 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef11593 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef11594 from "../../../../../../_runtime/metro/11594__.js";
import _modDef11595 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef11596 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef11597 from "../../../../../../_runtime/metro/11597__.js";
import _modDef11598 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef11599 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef11600 from "../../../../../../_runtime/metro/11600__.js";
import _modDef11601 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef11602 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11579, medium: _modDef11580, large: _modDef11581 };
const obj2 = { small: _modDef11579, medium: _modDef11580, large: _modDef11581 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11582, medium: _modDef11583, large: _modDef11584 };
const obj3 = { small: _modDef11582, medium: _modDef11583, large: _modDef11584 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11585, medium: _modDef11586, large: _modDef11587 };
const obj4 = { small: _modDef11585, medium: _modDef11586, large: _modDef11587 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11588, medium: _modDef11589, large: _modDef11590 };
const obj5 = { small: _modDef11588, medium: _modDef11589, large: _modDef11590 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11591, medium: _modDef11592, large: _modDef11593 };
const obj6 = { small: _modDef11591, medium: _modDef11592, large: _modDef11593 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11594, medium: _modDef11595, large: _modDef11596 };
const obj7 = { small: _modDef11594, medium: _modDef11595, large: _modDef11596 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11597, medium: _modDef11598, large: _modDef11599 };
const obj8 = { small: _modDef11597, medium: _modDef11598, large: _modDef11599 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11600, medium: _modDef11601, large: _modDef11602 };
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
