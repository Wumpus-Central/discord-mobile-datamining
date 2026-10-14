// === Module 10548: useMobileTenureBadgeImages ===

// Module 10548 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1392 */;
import _modDef10549 from "module_10549" /* 10549 */;
import _modDef10550 from "module_10550" /* 10550 */;
import _modDef10551 from "module_10551" /* 10551 */;
import _modDef10552 from "module_10552" /* 10552 */;
import _modDef10553 from "module_10553" /* 10553 */;
import _modDef10554 from "module_10554" /* 10554 */;
import _modDef10555 from "module_10555" /* 10555 */;
import _modDef10556 from "module_10556" /* 10556 */;
import _modDef10557 from "module_10557" /* 10557 */;
import _modDef10558 from "module_10558" /* 10558 */;
import _modDef10559 from "module_10559" /* 10559 */;
import _modDef10560 from "module_10560" /* 10560 */;
import _modDef10561 from "module_10561" /* 10561 */;
import _modDef10562 from "module_10562" /* 10562 */;
import _modDef10563 from "module_10563" /* 10563 */;
import _modDef10564 from "module_10564" /* 10564 */;
import _modDef10565 from "module_10565" /* 10565 */;
import _modDef10566 from "module_10566" /* 10566 */;
import _modDef10567 from "module_10567" /* 10567 */;
import _modDef10568 from "module_10568" /* 10568 */;
import _modDef10569 from "module_10569" /* 10569 */;
import _modDef10570 from "module_10570" /* 10570 */;
import _modDef10571 from "module_10571" /* 10571 */;
import _modDef10572 from "module_10572" /* 10572 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10549, medium: _modDef10550, large: _modDef10551 };
const obj2 = { small: _modDef10549, medium: _modDef10550, large: _modDef10551 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10552, medium: _modDef10553, large: _modDef10554 };
const obj3 = { small: _modDef10552, medium: _modDef10553, large: _modDef10554 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10555, medium: _modDef10556, large: _modDef10557 };
const obj4 = { small: _modDef10555, medium: _modDef10556, large: _modDef10557 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10558, medium: _modDef10559, large: _modDef10560 };
const obj5 = { small: _modDef10558, medium: _modDef10559, large: _modDef10560 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10561, medium: _modDef10562, large: _modDef10563 };
const obj6 = { small: _modDef10561, medium: _modDef10562, large: _modDef10563 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10564, medium: _modDef10565, large: _modDef10566 };
const obj7 = { small: _modDef10564, medium: _modDef10565, large: _modDef10566 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10567, medium: _modDef10568, large: _modDef10569 };
const obj8 = { small: _modDef10567, medium: _modDef10568, large: _modDef10569 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10570, medium: _modDef10571, large: _modDef10572 };
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