// === Module 10503: useMobileTenureBadgeImages ===

// Module 10503 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1392 */;
import _modDef10504 from "module_10504" /* 10504 */;
import _modDef10505 from "module_10505" /* 10505 */;
import _modDef10506 from "module_10506" /* 10506 */;
import _modDef10507 from "module_10507" /* 10507 */;
import _modDef10508 from "module_10508" /* 10508 */;
import _modDef10509 from "module_10509" /* 10509 */;
import _modDef10510 from "module_10510" /* 10510 */;
import _modDef10511 from "module_10511" /* 10511 */;
import _modDef10512 from "module_10512" /* 10512 */;
import _modDef10513 from "module_10513" /* 10513 */;
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
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10504, medium: _modDef10505, large: _modDef10506 };
const obj2 = { small: _modDef10504, medium: _modDef10505, large: _modDef10506 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10507, medium: _modDef10508, large: _modDef10509 };
const obj3 = { small: _modDef10507, medium: _modDef10508, large: _modDef10509 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10510, medium: _modDef10511, large: _modDef10512 };
const obj4 = { small: _modDef10510, medium: _modDef10511, large: _modDef10512 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10513, medium: _modDef10514, large: _modDef10515 };
const obj5 = { small: _modDef10513, medium: _modDef10514, large: _modDef10515 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10516, medium: _modDef10517, large: _modDef10518 };
const obj6 = { small: _modDef10516, medium: _modDef10517, large: _modDef10518 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10519, medium: _modDef10520, large: _modDef10521 };
const obj7 = { small: _modDef10519, medium: _modDef10520, large: _modDef10521 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10522, medium: _modDef10523, large: _modDef10524 };
const obj8 = { small: _modDef10522, medium: _modDef10523, large: _modDef10524 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10525, medium: _modDef10526, large: _modDef10527 };
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