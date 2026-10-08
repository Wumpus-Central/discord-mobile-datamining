// === Module 10513: useMobileTenureBadgeImages ===

// Module 10513 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1391 */;
import _modDef10514 from "module_10514" /* 10514 */;
import _modDef10515 from "module_10515" /* 10515 */;
import _modDef10516 from "module_10516" /* 10516 */;
import _modDef10517 from "module_10517" /* 10517 */;
import _modDef10518 from "module_10518" /* 10518 */;
import _modDef10519 from "module_10519" /* 10519 */;
import _modDef10520 from "module_10520" /* 10520 */;
import _modDef10521 from "module_10521" /* 10521 */;
import _modDef10522 from "module_10522" /* 10522 */;
import _modDef10523 from "module_10523" /* 10523 */;
import _modDef10524 from "module_10524" /* 10524 */;
import _modDef10525 from "module_10525" /* 10525 */;
import _modDef10526 from "module_10526" /* 10526 */;
import _modDef10527 from "module_10527" /* 10527 */;
import _modDef10528 from "module_10528" /* 10528 */;
import _modDef10529 from "module_10529" /* 10529 */;
import _modDef10530 from "module_10530" /* 10530 */;
import _modDef10531 from "module_10531" /* 10531 */;
import _modDef10532 from "module_10532" /* 10532 */;
import _modDef10533 from "module_10533" /* 10533 */;
import _modDef10534 from "module_10534" /* 10534 */;
import _modDef10535 from "module_10535" /* 10535 */;
import _modDef10536 from "module_10536" /* 10536 */;
import _modDef10537 from "module_10537" /* 10537 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10514, medium: _modDef10515, large: _modDef10516 };
const obj2 = { small: _modDef10514, medium: _modDef10515, large: _modDef10516 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10517, medium: _modDef10518, large: _modDef10519 };
const obj3 = { small: _modDef10517, medium: _modDef10518, large: _modDef10519 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10520, medium: _modDef10521, large: _modDef10522 };
const obj4 = { small: _modDef10520, medium: _modDef10521, large: _modDef10522 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10523, medium: _modDef10524, large: _modDef10525 };
const obj5 = { small: _modDef10523, medium: _modDef10524, large: _modDef10525 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10526, medium: _modDef10527, large: _modDef10528 };
const obj6 = { small: _modDef10526, medium: _modDef10527, large: _modDef10528 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10529, medium: _modDef10530, large: _modDef10531 };
const obj7 = { small: _modDef10529, medium: _modDef10530, large: _modDef10531 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10532, medium: _modDef10533, large: _modDef10534 };
const obj8 = { small: _modDef10532, medium: _modDef10533, large: _modDef10534 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10535, medium: _modDef10536, large: _modDef10537 };
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