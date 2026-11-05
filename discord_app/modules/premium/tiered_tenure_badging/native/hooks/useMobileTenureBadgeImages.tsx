// === Module 11616: useMobileTenureBadgeImages ===

// Module 11616 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import _modDef11617 from "module_11617" /* 11617 */;
import _modDef11618 from "module_11618" /* 11618 */;
import _modDef11619 from "module_11619" /* 11619 */;
import _modDef11620 from "module_11620" /* 11620 */;
import _modDef11621 from "module_11621" /* 11621 */;
import _modDef11622 from "module_11622" /* 11622 */;
import _modDef11623 from "module_11623" /* 11623 */;
import _modDef11624 from "module_11624" /* 11624 */;
import _modDef11625 from "module_11625" /* 11625 */;
import _modDef11626 from "module_11626" /* 11626 */;
import _modDef11627 from "module_11627" /* 11627 */;
import _modDef11628 from "module_11628" /* 11628 */;
import _modDef11629 from "module_11629" /* 11629 */;
import _modDef11630 from "module_11630" /* 11630 */;
import _modDef11631 from "module_11631" /* 11631 */;
import _modDef11632 from "module_11632" /* 11632 */;
import _modDef11633 from "module_11633" /* 11633 */;
import _modDef11634 from "module_11634" /* 11634 */;
import _modDef11635 from "module_11635" /* 11635 */;
import _modDef11636 from "module_11636" /* 11636 */;
import _modDef11637 from "module_11637" /* 11637 */;
import _modDef11638 from "module_11638" /* 11638 */;
import _modDef11639 from "module_11639" /* 11639 */;
import _modDef11640 from "module_11640" /* 11640 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11617, medium: _modDef11618, large: _modDef11619 };
const obj2 = { small: _modDef11617, medium: _modDef11618, large: _modDef11619 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11620, medium: _modDef11621, large: _modDef11622 };
const obj3 = { small: _modDef11620, medium: _modDef11621, large: _modDef11622 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11623, medium: _modDef11624, large: _modDef11625 };
const obj4 = { small: _modDef11623, medium: _modDef11624, large: _modDef11625 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11626, medium: _modDef11627, large: _modDef11628 };
const obj5 = { small: _modDef11626, medium: _modDef11627, large: _modDef11628 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11629, medium: _modDef11630, large: _modDef11631 };
const obj6 = { small: _modDef11629, medium: _modDef11630, large: _modDef11631 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11632, medium: _modDef11633, large: _modDef11634 };
const obj7 = { small: _modDef11632, medium: _modDef11633, large: _modDef11634 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11635, medium: _modDef11636, large: _modDef11637 };
const obj8 = { small: _modDef11635, medium: _modDef11636, large: _modDef11637 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11638, medium: _modDef11639, large: _modDef11640 };
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