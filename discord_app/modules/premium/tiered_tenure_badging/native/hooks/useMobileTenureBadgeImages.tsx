// === Module 13873: useMobileTenureBadgeImages ===

// Module 13873 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1390 */;
import _modDef13874 from "module_13874" /* 13874 */;
import _modDef13875 from "module_13875" /* 13875 */;
import _modDef13876 from "module_13876" /* 13876 */;
import _modDef13877 from "module_13877" /* 13877 */;
import _modDef13878 from "module_13878" /* 13878 */;
import _modDef13879 from "module_13879" /* 13879 */;
import _modDef13880 from "module_13880" /* 13880 */;
import _modDef13881 from "module_13881" /* 13881 */;
import _modDef13882 from "module_13882" /* 13882 */;
import _modDef13883 from "module_13883" /* 13883 */;
import _modDef13884 from "module_13884" /* 13884 */;
import _modDef13885 from "module_13885" /* 13885 */;
import _modDef13886 from "module_13886" /* 13886 */;
import _modDef13887 from "module_13887" /* 13887 */;
import _modDef13888 from "module_13888" /* 13888 */;
import _modDef13889 from "module_13889" /* 13889 */;
import _modDef13890 from "module_13890" /* 13890 */;
import _modDef13891 from "module_13891" /* 13891 */;
import _modDef13892 from "module_13892" /* 13892 */;
import _modDef13893 from "module_13893" /* 13893 */;
import _modDef13894 from "module_13894" /* 13894 */;
import _modDef13895 from "module_13895" /* 13895 */;
import _modDef13896 from "module_13896" /* 13896 */;
import _modDef13897 from "module_13897" /* 13897 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef13874, medium: _modDef13875, large: _modDef13876 };
const obj2 = { small: _modDef13874, medium: _modDef13875, large: _modDef13876 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef13877, medium: _modDef13878, large: _modDef13879 };
const obj3 = { small: _modDef13877, medium: _modDef13878, large: _modDef13879 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef13880, medium: _modDef13881, large: _modDef13882 };
const obj4 = { small: _modDef13880, medium: _modDef13881, large: _modDef13882 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef13883, medium: _modDef13884, large: _modDef13885 };
const obj5 = { small: _modDef13883, medium: _modDef13884, large: _modDef13885 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef13886, medium: _modDef13887, large: _modDef13888 };
const obj6 = { small: _modDef13886, medium: _modDef13887, large: _modDef13888 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef13889, medium: _modDef13890, large: _modDef13891 };
const obj7 = { small: _modDef13889, medium: _modDef13890, large: _modDef13891 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef13892, medium: _modDef13893, large: _modDef13894 };
const obj8 = { small: _modDef13892, medium: _modDef13893, large: _modDef13894 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef13895, medium: _modDef13896, large: _modDef13897 };
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