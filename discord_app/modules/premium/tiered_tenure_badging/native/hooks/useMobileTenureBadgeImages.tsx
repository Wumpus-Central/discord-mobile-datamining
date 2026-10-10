// === Module 10537: useMobileTenureBadgeImages ===

// Module 10537 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1392 */;
import _modDef10538 from "module_10538" /* 10538 */;
import _modDef10539 from "module_10539" /* 10539 */;
import _modDef10540 from "module_10540" /* 10540 */;
import _modDef10541 from "module_10541" /* 10541 */;
import _modDef10542 from "module_10542" /* 10542 */;
import _modDef10543 from "module_10543" /* 10543 */;
import _modDef10544 from "module_10544" /* 10544 */;
import _modDef10545 from "module_10545" /* 10545 */;
import _modDef10546 from "module_10546" /* 10546 */;
import _modDef10547 from "module_10547" /* 10547 */;
import _modDef10548 from "module_10548" /* 10548 */;
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
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10538, medium: _modDef10539, large: _modDef10540 };
const obj2 = { small: _modDef10538, medium: _modDef10539, large: _modDef10540 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10541, medium: _modDef10542, large: _modDef10543 };
const obj3 = { small: _modDef10541, medium: _modDef10542, large: _modDef10543 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10544, medium: _modDef10545, large: _modDef10546 };
const obj4 = { small: _modDef10544, medium: _modDef10545, large: _modDef10546 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10547, medium: _modDef10548, large: _modDef10549 };
const obj5 = { small: _modDef10547, medium: _modDef10548, large: _modDef10549 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10550, medium: _modDef10551, large: _modDef10552 };
const obj6 = { small: _modDef10550, medium: _modDef10551, large: _modDef10552 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10553, medium: _modDef10554, large: _modDef10555 };
const obj7 = { small: _modDef10553, medium: _modDef10554, large: _modDef10555 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10556, medium: _modDef10557, large: _modDef10558 };
const obj8 = { small: _modDef10556, medium: _modDef10557, large: _modDef10558 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10559, medium: _modDef10560, large: _modDef10561 };
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