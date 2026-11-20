// === Module 13842: useMobileTenureBadgeImages ===

// Module 13842 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1388 */;
import _modDef13843 from "module_13843" /* 13843 */;
import _modDef13844 from "module_13844" /* 13844 */;
import _modDef13845 from "module_13845" /* 13845 */;
import _modDef13846 from "module_13846" /* 13846 */;
import _modDef13847 from "module_13847" /* 13847 */;
import _modDef13848 from "module_13848" /* 13848 */;
import _modDef13849 from "module_13849" /* 13849 */;
import _modDef13850 from "module_13850" /* 13850 */;
import _modDef13851 from "module_13851" /* 13851 */;
import _modDef13852 from "module_13852" /* 13852 */;
import _modDef13853 from "module_13853" /* 13853 */;
import _modDef13854 from "module_13854" /* 13854 */;
import _modDef13855 from "module_13855" /* 13855 */;
import _modDef13856 from "module_13856" /* 13856 */;
import _modDef13857 from "module_13857" /* 13857 */;
import _modDef13858 from "module_13858" /* 13858 */;
import _modDef13859 from "module_13859" /* 13859 */;
import _modDef13860 from "module_13860" /* 13860 */;
import _modDef13861 from "module_13861" /* 13861 */;
import _modDef13862 from "module_13862" /* 13862 */;
import _modDef13863 from "module_13863" /* 13863 */;
import _modDef13864 from "module_13864" /* 13864 */;
import _modDef13865 from "module_13865" /* 13865 */;
import _modDef13866 from "module_13866" /* 13866 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef13843, medium: _modDef13844, large: _modDef13845 };
const obj2 = { small: _modDef13843, medium: _modDef13844, large: _modDef13845 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef13846, medium: _modDef13847, large: _modDef13848 };
const obj3 = { small: _modDef13846, medium: _modDef13847, large: _modDef13848 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef13849, medium: _modDef13850, large: _modDef13851 };
const obj4 = { small: _modDef13849, medium: _modDef13850, large: _modDef13851 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef13852, medium: _modDef13853, large: _modDef13854 };
const obj5 = { small: _modDef13852, medium: _modDef13853, large: _modDef13854 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef13855, medium: _modDef13856, large: _modDef13857 };
const obj6 = { small: _modDef13855, medium: _modDef13856, large: _modDef13857 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef13858, medium: _modDef13859, large: _modDef13860 };
const obj7 = { small: _modDef13858, medium: _modDef13859, large: _modDef13860 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef13861, medium: _modDef13862, large: _modDef13863 };
const obj8 = { small: _modDef13861, medium: _modDef13862, large: _modDef13863 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef13864, medium: _modDef13865, large: _modDef13866 };
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