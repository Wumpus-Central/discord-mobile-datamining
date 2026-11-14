// === Module 10085: useMobileTenureBadgeImages ===

// Module 10085 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1390 */;
import _modDef10086 from "module_10086" /* 10086 */;
import _modDef10087 from "module_10087" /* 10087 */;
import _modDef10088 from "module_10088" /* 10088 */;
import _modDef10089 from "module_10089" /* 10089 */;
import _modDef10090 from "module_10090" /* 10090 */;
import _modDef10091 from "module_10091" /* 10091 */;
import _modDef10092 from "module_10092" /* 10092 */;
import _modDef10093 from "module_10093" /* 10093 */;
import _modDef10094 from "module_10094" /* 10094 */;
import _modDef10095 from "module_10095" /* 10095 */;
import _modDef10096 from "module_10096" /* 10096 */;
import _modDef10097 from "module_10097" /* 10097 */;
import _modDef10098 from "module_10098" /* 10098 */;
import _modDef10099 from "module_10099" /* 10099 */;
import _modDef10100 from "module_10100" /* 10100 */;
import _modDef10101 from "module_10101" /* 10101 */;
import _modDef10102 from "module_10102" /* 10102 */;
import _modDef10103 from "module_10103" /* 10103 */;
import _modDef10104 from "module_10104" /* 10104 */;
import _modDef10105 from "module_10105" /* 10105 */;
import _modDef10106 from "module_10106" /* 10106 */;
import _modDef10107 from "module_10107" /* 10107 */;
import _modDef10108 from "module_10108" /* 10108 */;
import _modDef10109 from "module_10109" /* 10109 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10086, medium: _modDef10087, large: _modDef10088 };
const obj2 = { small: _modDef10086, medium: _modDef10087, large: _modDef10088 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10089, medium: _modDef10090, large: _modDef10091 };
const obj3 = { small: _modDef10089, medium: _modDef10090, large: _modDef10091 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10092, medium: _modDef10093, large: _modDef10094 };
const obj4 = { small: _modDef10092, medium: _modDef10093, large: _modDef10094 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10095, medium: _modDef10096, large: _modDef10097 };
const obj5 = { small: _modDef10095, medium: _modDef10096, large: _modDef10097 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10098, medium: _modDef10099, large: _modDef10100 };
const obj6 = { small: _modDef10098, medium: _modDef10099, large: _modDef10100 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10101, medium: _modDef10102, large: _modDef10103 };
const obj7 = { small: _modDef10101, medium: _modDef10102, large: _modDef10103 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10104, medium: _modDef10105, large: _modDef10106 };
const obj8 = { small: _modDef10104, medium: _modDef10105, large: _modDef10106 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10107, medium: _modDef10108, large: _modDef10109 };
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