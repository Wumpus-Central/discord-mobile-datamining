// === Module 11578: useMobileTenureBadgeImages ===

// Module 11578 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import _modDef11579 from "module_11579" /* 11579 */;
import _modDef11580 from "module_11580" /* 11580 */;
import _modDef11581 from "module_11581" /* 11581 */;
import _modDef11582 from "module_11582" /* 11582 */;
import _modDef11583 from "module_11583" /* 11583 */;
import _modDef11584 from "module_11584" /* 11584 */;
import _modDef11585 from "module_11585" /* 11585 */;
import _modDef11586 from "module_11586" /* 11586 */;
import _modDef11587 from "module_11587" /* 11587 */;
import _modDef11588 from "module_11588" /* 11588 */;
import _modDef11589 from "module_11589" /* 11589 */;
import _modDef11590 from "module_11590" /* 11590 */;
import _modDef11591 from "module_11591" /* 11591 */;
import _modDef11592 from "module_11592" /* 11592 */;
import _modDef11593 from "module_11593" /* 11593 */;
import _modDef11594 from "module_11594" /* 11594 */;
import _modDef11595 from "module_11595" /* 11595 */;
import _modDef11596 from "module_11596" /* 11596 */;
import _modDef11597 from "module_11597" /* 11597 */;
import _modDef11598 from "module_11598" /* 11598 */;
import _modDef11599 from "module_11599" /* 11599 */;
import _modDef11600 from "module_11600" /* 11600 */;
import _modDef11601 from "module_11601" /* 11601 */;
import _modDef11602 from "module_11602" /* 11602 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11579, medium: _modDef11580, large: _modDef11581 };
const obj2 = { small: _modDef11579, medium: _modDef11580, large: _modDef11581 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11582, medium: _modDef11583, large: _modDef11584 };
const obj3 = { small: _modDef11582, medium: _modDef11583, large: _modDef11584 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11585, medium: _modDef11586, large: _modDef11587 };
const obj4 = { small: _modDef11585, medium: _modDef11586, large: _modDef11587 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11588, medium: _modDef11589, large: _modDef11590 };
const obj5 = { small: _modDef11588, medium: _modDef11589, large: _modDef11590 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11591, medium: _modDef11592, large: _modDef11593 };
const obj6 = { small: _modDef11591, medium: _modDef11592, large: _modDef11593 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11594, medium: _modDef11595, large: _modDef11596 };
const obj7 = { small: _modDef11594, medium: _modDef11595, large: _modDef11596 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11597, medium: _modDef11598, large: _modDef11599 };
const obj8 = { small: _modDef11597, medium: _modDef11598, large: _modDef11599 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11600, medium: _modDef11601, large: _modDef11602 };
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