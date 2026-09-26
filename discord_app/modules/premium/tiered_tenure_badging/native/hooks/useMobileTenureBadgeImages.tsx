// === Module 10620: useMobileTenureBadgeImages ===

// Module 10620 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1374 */;
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
import _modDef10634 from "module_10634" /* 10634 */;
import _modDef10635 from "module_10635" /* 10635 */;
import _modDef10636 from "module_10636" /* 10636 */;
import _modDef10637 from "module_10637" /* 10637 */;
import _modDef10638 from "module_10638" /* 10638 */;
import _modDef10639 from "module_10639" /* 10639 */;
import _modDef10640 from "module_10640" /* 10640 */;
import _modDef10641 from "module_10641" /* 10641 */;
import _modDef10642 from "module_10642" /* 10642 */;
import _modDef10643 from "module_10643" /* 10643 */;
import _modDef10644 from "module_10644" /* 10644 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10621, medium: _modDef10622, large: _modDef10623 };
const obj2 = { small: _modDef10621, medium: _modDef10622, large: _modDef10623 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10624, medium: _modDef10625, large: _modDef10626 };
const obj3 = { small: _modDef10624, medium: _modDef10625, large: _modDef10626 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10627, medium: _modDef10628, large: _modDef10629 };
const obj4 = { small: _modDef10627, medium: _modDef10628, large: _modDef10629 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10630, medium: _modDef10631, large: _modDef10632 };
const obj5 = { small: _modDef10630, medium: _modDef10631, large: _modDef10632 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10633, medium: _modDef10634, large: _modDef10635 };
const obj6 = { small: _modDef10633, medium: _modDef10634, large: _modDef10635 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10636, medium: _modDef10637, large: _modDef10638 };
const obj7 = { small: _modDef10636, medium: _modDef10637, large: _modDef10638 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10639, medium: _modDef10640, large: _modDef10641 };
const obj8 = { small: _modDef10639, medium: _modDef10640, large: _modDef10641 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10642, medium: _modDef10643, large: _modDef10644 };
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