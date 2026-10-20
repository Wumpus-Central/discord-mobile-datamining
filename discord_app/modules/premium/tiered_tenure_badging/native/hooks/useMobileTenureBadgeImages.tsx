// === Module 10887: useMobileTenureBadgeImages ===

// Module 10887 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import _modDef10888 from "module_10888" /* 10888 */;
import _modDef10889 from "module_10889" /* 10889 */;
import _modDef10890 from "module_10890" /* 10890 */;
import _modDef10891 from "module_10891" /* 10891 */;
import _modDef10892 from "module_10892" /* 10892 */;
import _modDef10893 from "module_10893" /* 10893 */;
import _modDef10894 from "module_10894" /* 10894 */;
import _modDef10895 from "module_10895" /* 10895 */;
import _modDef10896 from "module_10896" /* 10896 */;
import _modDef10897 from "module_10897" /* 10897 */;
import _modDef10898 from "module_10898" /* 10898 */;
import _modDef10899 from "module_10899" /* 10899 */;
import _modDef10900 from "module_10900" /* 10900 */;
import _modDef10901 from "module_10901" /* 10901 */;
import _modDef10902 from "module_10902" /* 10902 */;
import _modDef10903 from "module_10903" /* 10903 */;
import _modDef10904 from "module_10904" /* 10904 */;
import _modDef10905 from "module_10905" /* 10905 */;
import _modDef10906 from "module_10906" /* 10906 */;
import _modDef10907 from "module_10907" /* 10907 */;
import _modDef10908 from "module_10908" /* 10908 */;
import _modDef10909 from "module_10909" /* 10909 */;
import _modDef10910 from "module_10910" /* 10910 */;
import _modDef10911 from "module_10911" /* 10911 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10888, medium: _modDef10889, large: _modDef10890 };
const obj2 = { small: _modDef10888, medium: _modDef10889, large: _modDef10890 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10891, medium: _modDef10892, large: _modDef10893 };
const obj3 = { small: _modDef10891, medium: _modDef10892, large: _modDef10893 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10894, medium: _modDef10895, large: _modDef10896 };
const obj4 = { small: _modDef10894, medium: _modDef10895, large: _modDef10896 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10897, medium: _modDef10898, large: _modDef10899 };
const obj5 = { small: _modDef10897, medium: _modDef10898, large: _modDef10899 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10900, medium: _modDef10901, large: _modDef10902 };
const obj6 = { small: _modDef10900, medium: _modDef10901, large: _modDef10902 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10903, medium: _modDef10904, large: _modDef10905 };
const obj7 = { small: _modDef10903, medium: _modDef10904, large: _modDef10905 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10906, medium: _modDef10907, large: _modDef10908 };
const obj8 = { small: _modDef10906, medium: _modDef10907, large: _modDef10908 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10909, medium: _modDef10910, large: _modDef10911 };
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