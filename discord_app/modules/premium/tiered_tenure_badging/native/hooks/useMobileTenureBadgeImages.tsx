// === Module 11608: useMobileTenureBadgeImages ===

// Module 11608 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import _modDef11609 from "module_11609" /* 11609 */;
import _modDef11610 from "module_11610" /* 11610 */;
import _modDef11611 from "module_11611" /* 11611 */;
import _modDef11612 from "module_11612" /* 11612 */;
import _modDef11613 from "module_11613" /* 11613 */;
import _modDef11614 from "module_11614" /* 11614 */;
import _modDef11615 from "module_11615" /* 11615 */;
import _modDef11616 from "module_11616" /* 11616 */;
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
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11609, medium: _modDef11610, large: _modDef11611 };
const obj2 = { small: _modDef11609, medium: _modDef11610, large: _modDef11611 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11612, medium: _modDef11613, large: _modDef11614 };
const obj3 = { small: _modDef11612, medium: _modDef11613, large: _modDef11614 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11615, medium: _modDef11616, large: _modDef11617 };
const obj4 = { small: _modDef11615, medium: _modDef11616, large: _modDef11617 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11618, medium: _modDef11619, large: _modDef11620 };
const obj5 = { small: _modDef11618, medium: _modDef11619, large: _modDef11620 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11621, medium: _modDef11622, large: _modDef11623 };
const obj6 = { small: _modDef11621, medium: _modDef11622, large: _modDef11623 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11624, medium: _modDef11625, large: _modDef11626 };
const obj7 = { small: _modDef11624, medium: _modDef11625, large: _modDef11626 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11627, medium: _modDef11628, large: _modDef11629 };
const obj8 = { small: _modDef11627, medium: _modDef11628, large: _modDef11629 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11630, medium: _modDef11631, large: _modDef11632 };
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