// === Module 11557: useMobileTenureBadgeImages ===

// Module 11557 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import _modDef11558 from "module_11558" /* 11558 */;
import _modDef11559 from "module_11559" /* 11559 */;
import _modDef11560 from "module_11560" /* 11560 */;
import _modDef11561 from "module_11561" /* 11561 */;
import _modDef11562 from "module_11562" /* 11562 */;
import _modDef11563 from "module_11563" /* 11563 */;
import _modDef11564 from "module_11564" /* 11564 */;
import _modDef11565 from "module_11565" /* 11565 */;
import _modDef11566 from "module_11566" /* 11566 */;
import _modDef11567 from "module_11567" /* 11567 */;
import _modDef11568 from "module_11568" /* 11568 */;
import _modDef11569 from "module_11569" /* 11569 */;
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
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11558, medium: _modDef11559, large: _modDef11560 };
const obj2 = { small: _modDef11558, medium: _modDef11559, large: _modDef11560 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11561, medium: _modDef11562, large: _modDef11563 };
const obj3 = { small: _modDef11561, medium: _modDef11562, large: _modDef11563 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11564, medium: _modDef11565, large: _modDef11566 };
const obj4 = { small: _modDef11564, medium: _modDef11565, large: _modDef11566 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11567, medium: _modDef11568, large: _modDef11569 };
const obj5 = { small: _modDef11567, medium: _modDef11568, large: _modDef11569 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11570, medium: _modDef11571, large: _modDef11572 };
const obj6 = { small: _modDef11570, medium: _modDef11571, large: _modDef11572 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11573, medium: _modDef11574, large: _modDef11575 };
const obj7 = { small: _modDef11573, medium: _modDef11574, large: _modDef11575 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11576, medium: _modDef11577, large: _modDef11578 };
const obj8 = { small: _modDef11576, medium: _modDef11577, large: _modDef11578 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11579, medium: _modDef11580, large: _modDef11581 };
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