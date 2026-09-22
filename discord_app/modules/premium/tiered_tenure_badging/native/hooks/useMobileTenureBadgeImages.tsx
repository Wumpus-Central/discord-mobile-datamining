// === Module 11429: useMobileTenureBadgeImages ===

// Module 11429 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1374 */;
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
import _modDef11450 from "module_11450" /* 11450 */;
import _modDef11451 from "module_11451" /* 11451 */;
import _modDef11452 from "module_11452" /* 11452 */;
import _modDef11453 from "module_11453" /* 11453 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11430, medium: _modDef11431, large: _modDef11432 };
const obj2 = { small: _modDef11430, medium: _modDef11431, large: _modDef11432 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11433, medium: _modDef11434, large: _modDef11435 };
const obj3 = { small: _modDef11433, medium: _modDef11434, large: _modDef11435 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11436, medium: _modDef11437, large: _modDef11438 };
const obj4 = { small: _modDef11436, medium: _modDef11437, large: _modDef11438 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11439, medium: _modDef11440, large: _modDef11441 };
const obj5 = { small: _modDef11439, medium: _modDef11440, large: _modDef11441 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11442, medium: _modDef11443, large: _modDef11444 };
const obj6 = { small: _modDef11442, medium: _modDef11443, large: _modDef11444 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11445, medium: _modDef11446, large: _modDef11447 };
const obj7 = { small: _modDef11445, medium: _modDef11446, large: _modDef11447 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11448, medium: _modDef11449, large: _modDef11450 };
const obj8 = { small: _modDef11448, medium: _modDef11449, large: _modDef11450 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11451, medium: _modDef11452, large: _modDef11453 };
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