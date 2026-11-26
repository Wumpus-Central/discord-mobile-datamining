// === Module 9824: useMobileTenureBadgeImages ===

// Module 9824 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1389 */;
import _modDef9825 from "module_9825" /* 9825 */;
import _modDef9826 from "module_9826" /* 9826 */;
import _modDef9827 from "module_9827" /* 9827 */;
import _modDef9828 from "module_9828" /* 9828 */;
import _modDef9829 from "module_9829" /* 9829 */;
import _modDef9830 from "module_9830" /* 9830 */;
import _modDef9831 from "module_9831" /* 9831 */;
import _modDef9832 from "module_9832" /* 9832 */;
import _modDef9833 from "module_9833" /* 9833 */;
import _modDef9834 from "module_9834" /* 9834 */;
import _modDef9835 from "module_9835" /* 9835 */;
import _modDef9836 from "module_9836" /* 9836 */;
import _modDef9837 from "module_9837" /* 9837 */;
import _modDef9838 from "module_9838" /* 9838 */;
import _modDef9839 from "module_9839" /* 9839 */;
import _modDef9840 from "module_9840" /* 9840 */;
import _modDef9841 from "module_9841" /* 9841 */;
import _modDef9842 from "module_9842" /* 9842 */;
import _modDef9843 from "module_9843" /* 9843 */;
import _modDef9844 from "module_9844" /* 9844 */;
import _modDef9845 from "module_9845" /* 9845 */;
import _modDef9846 from "module_9846" /* 9846 */;
import _modDef9847 from "module_9847" /* 9847 */;
import _modDef9848 from "module_9848" /* 9848 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef9825, medium: _modDef9826, large: _modDef9827 };
const obj2 = { small: _modDef9825, medium: _modDef9826, large: _modDef9827 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef9828, medium: _modDef9829, large: _modDef9830 };
const obj3 = { small: _modDef9828, medium: _modDef9829, large: _modDef9830 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef9831, medium: _modDef9832, large: _modDef9833 };
const obj4 = { small: _modDef9831, medium: _modDef9832, large: _modDef9833 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef9834, medium: _modDef9835, large: _modDef9836 };
const obj5 = { small: _modDef9834, medium: _modDef9835, large: _modDef9836 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef9837, medium: _modDef9838, large: _modDef9839 };
const obj6 = { small: _modDef9837, medium: _modDef9838, large: _modDef9839 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef9840, medium: _modDef9841, large: _modDef9842 };
const obj7 = { small: _modDef9840, medium: _modDef9841, large: _modDef9842 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef9843, medium: _modDef9844, large: _modDef9845 };
const obj8 = { small: _modDef9843, medium: _modDef9844, large: _modDef9845 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef9846, medium: _modDef9847, large: _modDef9848 };
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx");

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