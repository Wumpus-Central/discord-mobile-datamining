// === Module 11505: useMobileTenureBadgeImages ===

// Module 11505 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import _modDef11506 from "module_11506" /* 11506 */;
import _modDef11507 from "module_11507" /* 11507 */;
import _modDef11508 from "module_11508" /* 11508 */;
import _modDef11509 from "module_11509" /* 11509 */;
import _modDef11510 from "module_11510" /* 11510 */;
import _modDef11511 from "module_11511" /* 11511 */;
import _modDef11512 from "module_11512" /* 11512 */;
import _modDef11513 from "module_11513" /* 11513 */;
import _modDef11514 from "module_11514" /* 11514 */;
import _modDef11515 from "module_11515" /* 11515 */;
import _modDef11516 from "module_11516" /* 11516 */;
import _modDef11517 from "module_11517" /* 11517 */;
import _modDef11518 from "module_11518" /* 11518 */;
import _modDef11519 from "module_11519" /* 11519 */;
import _modDef11520 from "module_11520" /* 11520 */;
import _modDef11521 from "module_11521" /* 11521 */;
import _modDef11522 from "module_11522" /* 11522 */;
import _modDef11523 from "module_11523" /* 11523 */;
import _modDef11524 from "module_11524" /* 11524 */;
import _modDef11525 from "module_11525" /* 11525 */;
import _modDef11526 from "module_11526" /* 11526 */;
import _modDef11527 from "module_11527" /* 11527 */;
import _modDef11528 from "module_11528" /* 11528 */;
import _modDef11529 from "module_11529" /* 11529 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11506, medium: _modDef11507, large: _modDef11508 };
const obj2 = { small: _modDef11506, medium: _modDef11507, large: _modDef11508 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11509, medium: _modDef11510, large: _modDef11511 };
const obj3 = { small: _modDef11509, medium: _modDef11510, large: _modDef11511 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11512, medium: _modDef11513, large: _modDef11514 };
const obj4 = { small: _modDef11512, medium: _modDef11513, large: _modDef11514 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11515, medium: _modDef11516, large: _modDef11517 };
const obj5 = { small: _modDef11515, medium: _modDef11516, large: _modDef11517 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11518, medium: _modDef11519, large: _modDef11520 };
const obj6 = { small: _modDef11518, medium: _modDef11519, large: _modDef11520 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11521, medium: _modDef11522, large: _modDef11523 };
const obj7 = { small: _modDef11521, medium: _modDef11522, large: _modDef11523 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11524, medium: _modDef11525, large: _modDef11526 };
const obj8 = { small: _modDef11524, medium: _modDef11525, large: _modDef11526 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11527, medium: _modDef11528, large: _modDef11529 };
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