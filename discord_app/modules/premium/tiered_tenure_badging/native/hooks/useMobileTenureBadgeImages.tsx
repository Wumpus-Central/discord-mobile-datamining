// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef9684 from "../../../../../../_runtime/metro/09684__.js";
import _modDef9685 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef9686 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef9687 from "../../../../../../_runtime/metro/09687__.js";
import _modDef9688 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef9689 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef9690 from "../../../../../../_runtime/metro/09690__.js";
import _modDef9691 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef9692 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef9693 from "../../../../../../_runtime/metro/09693__.js";
import _modDef9694 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef9695 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef9696 from "../../../../../../_runtime/metro/09696__.js";
import _modDef9697 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef9698 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef9699 from "../../../../../../_runtime/metro/09699__.js";
import _modDef9700 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef9701 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef9702 from "../../../../../../_runtime/metro/09702__.js";
import _modDef9703 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef9704 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef9705 from "../../../../../../_runtime/metro/09705__.js";
import _modDef9706 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef9707 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef9684, medium: _modDef9685, large: _modDef9686 };
const obj2 = { small: _modDef9684, medium: _modDef9685, large: _modDef9686 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef9687, medium: _modDef9688, large: _modDef9689 };
const obj3 = { small: _modDef9687, medium: _modDef9688, large: _modDef9689 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef9690, medium: _modDef9691, large: _modDef9692 };
const obj4 = { small: _modDef9690, medium: _modDef9691, large: _modDef9692 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef9693, medium: _modDef9694, large: _modDef9695 };
const obj5 = { small: _modDef9693, medium: _modDef9694, large: _modDef9695 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef9696, medium: _modDef9697, large: _modDef9698 };
const obj6 = { small: _modDef9696, medium: _modDef9697, large: _modDef9698 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef9699, medium: _modDef9700, large: _modDef9701 };
const obj7 = { small: _modDef9699, medium: _modDef9700, large: _modDef9701 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef9702, medium: _modDef9703, large: _modDef9704 };
const obj8 = { small: _modDef9702, medium: _modDef9703, large: _modDef9704 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef9705, medium: _modDef9706, large: _modDef9707 };
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
