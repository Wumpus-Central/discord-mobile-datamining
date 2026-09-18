// === Module 11411: useMobileTenureBadgeImages ===

// Module 11411 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import _modDef11412 from "module_11412" /* 11412 */;
import _modDef11413 from "module_11413" /* 11413 */;
import _modDef11414 from "module_11414" /* 11414 */;
import _modDef11415 from "module_11415" /* 11415 */;
import _modDef11416 from "module_11416" /* 11416 */;
import _modDef11417 from "module_11417" /* 11417 */;
import _modDef11418 from "module_11418" /* 11418 */;
import _modDef11419 from "module_11419" /* 11419 */;
import _modDef11420 from "module_11420" /* 11420 */;
import _modDef11421 from "module_11421" /* 11421 */;
import _modDef11422 from "module_11422" /* 11422 */;
import _modDef11423 from "module_11423" /* 11423 */;
import _modDef11424 from "module_11424" /* 11424 */;
import _modDef11425 from "module_11425" /* 11425 */;
import _modDef11426 from "module_11426" /* 11426 */;
import _modDef11427 from "module_11427" /* 11427 */;
import _modDef11428 from "module_11428" /* 11428 */;
import _modDef11429 from "module_11429" /* 11429 */;
import _modDef11430 from "module_11430" /* 11430 */;
import _modDef11431 from "module_11431" /* 11431 */;
import _modDef11432 from "module_11432" /* 11432 */;
import _modDef11433 from "module_11433" /* 11433 */;
import _modDef11434 from "module_11434" /* 11434 */;
import _modDef11435 from "module_11435" /* 11435 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11412, medium: _modDef11413, large: _modDef11414 };
const obj2 = { small: _modDef11412, medium: _modDef11413, large: _modDef11414 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11415, medium: _modDef11416, large: _modDef11417 };
const obj3 = { small: _modDef11415, medium: _modDef11416, large: _modDef11417 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11418, medium: _modDef11419, large: _modDef11420 };
const obj4 = { small: _modDef11418, medium: _modDef11419, large: _modDef11420 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11421, medium: _modDef11422, large: _modDef11423 };
const obj5 = { small: _modDef11421, medium: _modDef11422, large: _modDef11423 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11424, medium: _modDef11425, large: _modDef11426 };
const obj6 = { small: _modDef11424, medium: _modDef11425, large: _modDef11426 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11427, medium: _modDef11428, large: _modDef11429 };
const obj7 = { small: _modDef11427, medium: _modDef11428, large: _modDef11429 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11430, medium: _modDef11431, large: _modDef11432 };
const obj8 = { small: _modDef11430, medium: _modDef11431, large: _modDef11432 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11433, medium: _modDef11434, large: _modDef11435 };
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