// === Module 11123: useMobileTenureBadgeImages ===

// Module 11123 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1391 */;
import _modDef11124 from "module_11124" /* 11124 */;
import _modDef11125 from "module_11125" /* 11125 */;
import _modDef11126 from "module_11126" /* 11126 */;
import _modDef11127 from "module_11127" /* 11127 */;
import _modDef11128 from "module_11128" /* 11128 */;
import _modDef11129 from "module_11129" /* 11129 */;
import _modDef11130 from "module_11130" /* 11130 */;
import _modDef11131 from "module_11131" /* 11131 */;
import _modDef11132 from "module_11132" /* 11132 */;
import _modDef11133 from "module_11133" /* 11133 */;
import _modDef11134 from "module_11134" /* 11134 */;
import _modDef11135 from "module_11135" /* 11135 */;
import _modDef11136 from "module_11136" /* 11136 */;
import _modDef11137 from "module_11137" /* 11137 */;
import _modDef11138 from "module_11138" /* 11138 */;
import _modDef11139 from "module_11139" /* 11139 */;
import _modDef11140 from "module_11140" /* 11140 */;
import _modDef11141 from "module_11141" /* 11141 */;
import _modDef11142 from "module_11142" /* 11142 */;
import _modDef11143 from "module_11143" /* 11143 */;
import _modDef11144 from "module_11144" /* 11144 */;
import _modDef11145 from "module_11145" /* 11145 */;
import _modDef11146 from "module_11146" /* 11146 */;
import _modDef11147 from "module_11147" /* 11147 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11124, medium: _modDef11125, large: _modDef11126 };
const obj2 = { small: _modDef11124, medium: _modDef11125, large: _modDef11126 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11127, medium: _modDef11128, large: _modDef11129 };
const obj3 = { small: _modDef11127, medium: _modDef11128, large: _modDef11129 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11130, medium: _modDef11131, large: _modDef11132 };
const obj4 = { small: _modDef11130, medium: _modDef11131, large: _modDef11132 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11133, medium: _modDef11134, large: _modDef11135 };
const obj5 = { small: _modDef11133, medium: _modDef11134, large: _modDef11135 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11136, medium: _modDef11137, large: _modDef11138 };
const obj6 = { small: _modDef11136, medium: _modDef11137, large: _modDef11138 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11139, medium: _modDef11140, large: _modDef11141 };
const obj7 = { small: _modDef11139, medium: _modDef11140, large: _modDef11141 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11142, medium: _modDef11143, large: _modDef11144 };
const obj8 = { small: _modDef11142, medium: _modDef11143, large: _modDef11144 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11145, medium: _modDef11146, large: _modDef11147 };
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