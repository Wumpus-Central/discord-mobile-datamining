// === Module 11425: useMobileTenureBadgeImages ===

// Module 11425 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1374 */;
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
import _modDef11436 from "module_11436" /* 11436 */;
import _modDef11437 from "module_11437" /* 11437 */;
import _modDef11438 from "module_11438" /* 11438 */;
import _modDef11439 from "module_11439" /* 11439 */;
import _modDef11440 from "module_11440" /* 11440 */;
import _modDef11441 from "module_11441" /* 11441 */;
import _modDef11442 from "module_11442" /* 11442 */;
import _modDef11443 from "module_11443" /* 11443 */;
import _modDef11444 from "module_11444" /* 11444 */;
import _modDef11445 from "module_11445" /* 11445 */;
import _modDef11446 from "module_11446" /* 11446 */;
import _modDef11447 from "module_11447" /* 11447 */;
import _modDef11448 from "module_11448" /* 11448 */;
import _modDef11449 from "module_11449" /* 11449 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11426, medium: _modDef11427, large: _modDef11428 };
const obj2 = { small: _modDef11426, medium: _modDef11427, large: _modDef11428 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11429, medium: _modDef11430, large: _modDef11431 };
const obj3 = { small: _modDef11429, medium: _modDef11430, large: _modDef11431 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11432, medium: _modDef11433, large: _modDef11434 };
const obj4 = { small: _modDef11432, medium: _modDef11433, large: _modDef11434 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11435, medium: _modDef11436, large: _modDef11437 };
const obj5 = { small: _modDef11435, medium: _modDef11436, large: _modDef11437 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11438, medium: _modDef11439, large: _modDef11440 };
const obj6 = { small: _modDef11438, medium: _modDef11439, large: _modDef11440 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11441, medium: _modDef11442, large: _modDef11443 };
const obj7 = { small: _modDef11441, medium: _modDef11442, large: _modDef11443 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11444, medium: _modDef11445, large: _modDef11446 };
const obj8 = { small: _modDef11444, medium: _modDef11445, large: _modDef11446 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11447, medium: _modDef11448, large: _modDef11449 };
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