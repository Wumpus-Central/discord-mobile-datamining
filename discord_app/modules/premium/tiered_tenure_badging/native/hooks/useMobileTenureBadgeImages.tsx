// === Module 10876: useMobileTenureBadgeImages ===

// Module 10876 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import _modDef10877 from "module_10877" /* 10877 */;
import _modDef10878 from "module_10878" /* 10878 */;
import _modDef10879 from "module_10879" /* 10879 */;
import _modDef10880 from "module_10880" /* 10880 */;
import _modDef10881 from "module_10881" /* 10881 */;
import _modDef10882 from "module_10882" /* 10882 */;
import _modDef10883 from "module_10883" /* 10883 */;
import _modDef10884 from "module_10884" /* 10884 */;
import _modDef10885 from "module_10885" /* 10885 */;
import _modDef10886 from "module_10886" /* 10886 */;
import _modDef10887 from "module_10887" /* 10887 */;
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
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10877, medium: _modDef10878, large: _modDef10879 };
const obj2 = { small: _modDef10877, medium: _modDef10878, large: _modDef10879 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10880, medium: _modDef10881, large: _modDef10882 };
const obj3 = { small: _modDef10880, medium: _modDef10881, large: _modDef10882 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10883, medium: _modDef10884, large: _modDef10885 };
const obj4 = { small: _modDef10883, medium: _modDef10884, large: _modDef10885 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10886, medium: _modDef10887, large: _modDef10888 };
const obj5 = { small: _modDef10886, medium: _modDef10887, large: _modDef10888 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10889, medium: _modDef10890, large: _modDef10891 };
const obj6 = { small: _modDef10889, medium: _modDef10890, large: _modDef10891 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10892, medium: _modDef10893, large: _modDef10894 };
const obj7 = { small: _modDef10892, medium: _modDef10893, large: _modDef10894 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10895, medium: _modDef10896, large: _modDef10897 };
const obj8 = { small: _modDef10895, medium: _modDef10896, large: _modDef10897 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10898, medium: _modDef10899, large: _modDef10900 };
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