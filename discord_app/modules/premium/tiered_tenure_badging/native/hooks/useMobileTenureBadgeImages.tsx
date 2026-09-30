// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import _modDef10824 from "../../../../../../_runtime/metro/10824__.js";
import _modDef10825 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_medium.png.js";
import _modDef10826 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_bronze_badge_large.png.js";
import _modDef10827 from "../../../../../../_runtime/metro/10827__.js";
import _modDef10828 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_medium.png.js";
import _modDef10829 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_silver_badge_large.png.js";
import _modDef10830 from "../../../../../../_runtime/metro/10830__.js";
import _modDef10831 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_medium.png.js";
import _modDef10832 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_gold_badge_large.png.js";
import _modDef10833 from "../../../../../../_runtime/metro/10833__.js";
import _modDef10834 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_medium.png.js";
import _modDef10835 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_platinum_badge_large.png.js";
import _modDef10836 from "../../../../../../_runtime/metro/10836__.js";
import _modDef10837 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_medium.png.js";
import _modDef10838 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_diamond_badge_large.png.js";
import _modDef10839 from "../../../../../../_runtime/metro/10839__.js";
import _modDef10840 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_medium.png.js";
import _modDef10841 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_emerald_badge_large.png.js";
import _modDef10842 from "../../../../../../_runtime/metro/10842__.js";
import _modDef10843 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_medium.png.js";
import _modDef10844 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_ruby_badge_large.png.js";
import _modDef10845 from "../../../../../../_runtime/metro/10845__.js";
import _modDef10846 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_medium.png.js";
import _modDef10847 from "../../../../../../discord_assets/assets/premium/tiered_tenure_badging/mobile_opal_badge_large.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10824, medium: _modDef10825, large: _modDef10826 };
const obj2 = { small: _modDef10824, medium: _modDef10825, large: _modDef10826 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10827, medium: _modDef10828, large: _modDef10829 };
const obj3 = { small: _modDef10827, medium: _modDef10828, large: _modDef10829 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10830, medium: _modDef10831, large: _modDef10832 };
const obj4 = { small: _modDef10830, medium: _modDef10831, large: _modDef10832 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10833, medium: _modDef10834, large: _modDef10835 };
const obj5 = { small: _modDef10833, medium: _modDef10834, large: _modDef10835 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10836, medium: _modDef10837, large: _modDef10838 };
const obj6 = { small: _modDef10836, medium: _modDef10837, large: _modDef10838 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10839, medium: _modDef10840, large: _modDef10841 };
const obj7 = { small: _modDef10839, medium: _modDef10840, large: _modDef10841 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10842, medium: _modDef10843, large: _modDef10844 };
const obj8 = { small: _modDef10842, medium: _modDef10843, large: _modDef10844 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10845, medium: _modDef10846, large: _modDef10847 };
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
