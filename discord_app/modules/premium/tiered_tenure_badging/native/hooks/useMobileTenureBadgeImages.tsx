// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef10772 from "../../../../../../_runtime/metro/10772__.js";
import _modDef10773 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef10774 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef10775 from "../../../../../../_runtime/metro/10775__.js";
import _modDef10776 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef10777 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef10778 from "../../../../../../_runtime/metro/10778__.js";
import _modDef10779 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef10780 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef10781 from "../../../../../../_runtime/metro/10781__.js";
import _modDef10782 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef10783 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef10784 from "../../../../../../_runtime/metro/10784__.js";
import _modDef10785 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef10786 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef10787 from "../../../../../../_runtime/metro/10787__.js";
import _modDef10788 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef10789 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef10790 from "../../../../../../_runtime/metro/10790__.js";
import _modDef10791 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef10792 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef10793 from "../../../../../../_runtime/metro/10793__.js";
import _modDef10794 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef10795 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10772, medium: _modDef10773, large: _modDef10774 };
const obj2 = { small: _modDef10772, medium: _modDef10773, large: _modDef10774 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10775, medium: _modDef10776, large: _modDef10777 };
const obj3 = { small: _modDef10775, medium: _modDef10776, large: _modDef10777 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10778, medium: _modDef10779, large: _modDef10780 };
const obj4 = { small: _modDef10778, medium: _modDef10779, large: _modDef10780 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10781, medium: _modDef10782, large: _modDef10783 };
const obj5 = { small: _modDef10781, medium: _modDef10782, large: _modDef10783 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10784, medium: _modDef10785, large: _modDef10786 };
const obj6 = { small: _modDef10784, medium: _modDef10785, large: _modDef10786 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10787, medium: _modDef10788, large: _modDef10789 };
const obj7 = { small: _modDef10787, medium: _modDef10788, large: _modDef10789 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10790, medium: _modDef10791, large: _modDef10792 };
const obj8 = { small: _modDef10790, medium: _modDef10791, large: _modDef10792 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10793, medium: _modDef10794, large: _modDef10795 };
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
