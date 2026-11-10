// === Module 11569: useMobileTenureBadgeImages ===

// Module 11569 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import _modDef11570 from "module_11570" /* 11570 */;
import _modDef11571 from "module_11571" /* 11571 */;
import _modDef11572 from "module_11572" /* 11572 */;
import _modDef11573 from "module_11573" /* 11573 */;
import _modDef11574 from "module_11574" /* 11574 */;
import _modDef11575 from "module_11575" /* 11575 */;
import _modDef11576 from "module_11576" /* 11576 */;
import _modDef11577 from "module_11577" /* 11577 */;
import _modDef11578 from "module_11578" /* 11578 */;
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
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11570, medium: _modDef11571, large: _modDef11572 };
const obj2 = { small: _modDef11570, medium: _modDef11571, large: _modDef11572 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11573, medium: _modDef11574, large: _modDef11575 };
const obj3 = { small: _modDef11573, medium: _modDef11574, large: _modDef11575 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11576, medium: _modDef11577, large: _modDef11578 };
const obj4 = { small: _modDef11576, medium: _modDef11577, large: _modDef11578 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11579, medium: _modDef11580, large: _modDef11581 };
const obj5 = { small: _modDef11579, medium: _modDef11580, large: _modDef11581 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11582, medium: _modDef11583, large: _modDef11584 };
const obj6 = { small: _modDef11582, medium: _modDef11583, large: _modDef11584 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11585, medium: _modDef11586, large: _modDef11587 };
const obj7 = { small: _modDef11585, medium: _modDef11586, large: _modDef11587 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11588, medium: _modDef11589, large: _modDef11590 };
const obj8 = { small: _modDef11588, medium: _modDef11589, large: _modDef11590 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11591, medium: _modDef11592, large: _modDef11593 };
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