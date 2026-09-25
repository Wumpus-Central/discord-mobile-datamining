// === Module 10609: useMobileTenureBadgeImages ===

// Module 10609 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import _modDef10610 from "module_10610" /* 10610 */;
import _modDef10611 from "module_10611" /* 10611 */;
import _modDef10612 from "module_10612" /* 10612 */;
import _modDef10613 from "module_10613" /* 10613 */;
import _modDef10614 from "module_10614" /* 10614 */;
import _modDef10615 from "module_10615" /* 10615 */;
import _modDef10616 from "module_10616" /* 10616 */;
import _modDef10617 from "module_10617" /* 10617 */;
import _modDef10618 from "module_10618" /* 10618 */;
import _modDef10619 from "module_10619" /* 10619 */;
import _modDef10620 from "module_10620" /* 10620 */;
import _modDef10621 from "module_10621" /* 10621 */;
import _modDef10622 from "module_10622" /* 10622 */;
import _modDef10623 from "module_10623" /* 10623 */;
import _modDef10624 from "module_10624" /* 10624 */;
import _modDef10625 from "module_10625" /* 10625 */;
import _modDef10626 from "module_10626" /* 10626 */;
import _modDef10627 from "module_10627" /* 10627 */;
import _modDef10628 from "module_10628" /* 10628 */;
import _modDef10629 from "module_10629" /* 10629 */;
import _modDef10630 from "module_10630" /* 10630 */;
import _modDef10631 from "module_10631" /* 10631 */;
import _modDef10632 from "module_10632" /* 10632 */;
import _modDef10633 from "module_10633" /* 10633 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10610, medium: _modDef10611, large: _modDef10612 };
const obj2 = { small: _modDef10610, medium: _modDef10611, large: _modDef10612 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10613, medium: _modDef10614, large: _modDef10615 };
const obj3 = { small: _modDef10613, medium: _modDef10614, large: _modDef10615 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10616, medium: _modDef10617, large: _modDef10618 };
const obj4 = { small: _modDef10616, medium: _modDef10617, large: _modDef10618 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10619, medium: _modDef10620, large: _modDef10621 };
const obj5 = { small: _modDef10619, medium: _modDef10620, large: _modDef10621 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10622, medium: _modDef10623, large: _modDef10624 };
const obj6 = { small: _modDef10622, medium: _modDef10623, large: _modDef10624 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10625, medium: _modDef10626, large: _modDef10627 };
const obj7 = { small: _modDef10625, medium: _modDef10626, large: _modDef10627 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10628, medium: _modDef10629, large: _modDef10630 };
const obj8 = { small: _modDef10628, medium: _modDef10629, large: _modDef10630 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10631, medium: _modDef10632, large: _modDef10633 };
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