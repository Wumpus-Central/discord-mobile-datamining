// === Module 13891: useMobileTenureBadgeImages ===

// Module 13891 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1390 */;
import _modDef13892 from "module_13892" /* 13892 */;
import _modDef13893 from "module_13893" /* 13893 */;
import _modDef13894 from "module_13894" /* 13894 */;
import _modDef13895 from "module_13895" /* 13895 */;
import _modDef13896 from "module_13896" /* 13896 */;
import _modDef13897 from "module_13897" /* 13897 */;
import _modDef13898 from "module_13898" /* 13898 */;
import _modDef13899 from "module_13899" /* 13899 */;
import _modDef13900 from "module_13900" /* 13900 */;
import _modDef13901 from "module_13901" /* 13901 */;
import _modDef13902 from "module_13902" /* 13902 */;
import _modDef13903 from "module_13903" /* 13903 */;
import _modDef13904 from "module_13904" /* 13904 */;
import _modDef13905 from "module_13905" /* 13905 */;
import _modDef13906 from "module_13906" /* 13906 */;
import _modDef13907 from "module_13907" /* 13907 */;
import _modDef13908 from "module_13908" /* 13908 */;
import _modDef13909 from "module_13909" /* 13909 */;
import _modDef13910 from "module_13910" /* 13910 */;
import _modDef13911 from "module_13911" /* 13911 */;
import _modDef13912 from "module_13912" /* 13912 */;
import _modDef13913 from "module_13913" /* 13913 */;
import _modDef13914 from "module_13914" /* 13914 */;
import _modDef13915 from "module_13915" /* 13915 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef13892, medium: _modDef13893, large: _modDef13894 };
const obj2 = { small: _modDef13892, medium: _modDef13893, large: _modDef13894 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef13895, medium: _modDef13896, large: _modDef13897 };
const obj3 = { small: _modDef13895, medium: _modDef13896, large: _modDef13897 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef13898, medium: _modDef13899, large: _modDef13900 };
const obj4 = { small: _modDef13898, medium: _modDef13899, large: _modDef13900 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef13901, medium: _modDef13902, large: _modDef13903 };
const obj5 = { small: _modDef13901, medium: _modDef13902, large: _modDef13903 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef13904, medium: _modDef13905, large: _modDef13906 };
const obj6 = { small: _modDef13904, medium: _modDef13905, large: _modDef13906 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef13907, medium: _modDef13908, large: _modDef13909 };
const obj7 = { small: _modDef13907, medium: _modDef13908, large: _modDef13909 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef13910, medium: _modDef13911, large: _modDef13912 };
const obj8 = { small: _modDef13910, medium: _modDef13911, large: _modDef13912 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef13913, medium: _modDef13914, large: _modDef13915 };
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