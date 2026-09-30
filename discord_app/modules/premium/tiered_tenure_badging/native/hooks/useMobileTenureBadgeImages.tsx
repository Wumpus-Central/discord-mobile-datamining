// === Module 10823: useMobileTenureBadgeImages ===

// Module 10823 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import _modDef10824 from "module_10824" /* 10824 */;
import _modDef10825 from "module_10825" /* 10825 */;
import _modDef10826 from "module_10826" /* 10826 */;
import _modDef10827 from "module_10827" /* 10827 */;
import _modDef10828 from "module_10828" /* 10828 */;
import _modDef10829 from "module_10829" /* 10829 */;
import _modDef10830 from "module_10830" /* 10830 */;
import _modDef10831 from "module_10831" /* 10831 */;
import _modDef10832 from "module_10832" /* 10832 */;
import _modDef10833 from "module_10833" /* 10833 */;
import _modDef10834 from "module_10834" /* 10834 */;
import _modDef10835 from "module_10835" /* 10835 */;
import _modDef10836 from "module_10836" /* 10836 */;
import _modDef10837 from "module_10837" /* 10837 */;
import _modDef10838 from "module_10838" /* 10838 */;
import _modDef10839 from "module_10839" /* 10839 */;
import _modDef10840 from "module_10840" /* 10840 */;
import _modDef10841 from "module_10841" /* 10841 */;
import _modDef10842 from "module_10842" /* 10842 */;
import _modDef10843 from "module_10843" /* 10843 */;
import _modDef10844 from "module_10844" /* 10844 */;
import _modDef10845 from "module_10845" /* 10845 */;
import _modDef10846 from "module_10846" /* 10846 */;
import _modDef10847 from "module_10847" /* 10847 */;
import size from "module_2" /* 2 */;

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
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx");

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