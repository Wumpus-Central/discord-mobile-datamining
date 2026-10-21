// === Module 11031: useMobileTenureBadgeImages ===

// Module 11031 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import _modDef11032 from "module_11032" /* 11032 */;
import _modDef11033 from "module_11033" /* 11033 */;
import _modDef11034 from "module_11034" /* 11034 */;
import _modDef11035 from "module_11035" /* 11035 */;
import _modDef11036 from "module_11036" /* 11036 */;
import _modDef11037 from "module_11037" /* 11037 */;
import _modDef11038 from "module_11038" /* 11038 */;
import _modDef11039 from "module_11039" /* 11039 */;
import _modDef11040 from "module_11040" /* 11040 */;
import _modDef11041 from "module_11041" /* 11041 */;
import _modDef11042 from "module_11042" /* 11042 */;
import _modDef11043 from "module_11043" /* 11043 */;
import _modDef11044 from "module_11044" /* 11044 */;
import _modDef11045 from "module_11045" /* 11045 */;
import _modDef11046 from "module_11046" /* 11046 */;
import _modDef11047 from "module_11047" /* 11047 */;
import _modDef11048 from "module_11048" /* 11048 */;
import _modDef11049 from "module_11049" /* 11049 */;
import _modDef11050 from "module_11050" /* 11050 */;
import _modDef11051 from "module_11051" /* 11051 */;
import _modDef11052 from "module_11052" /* 11052 */;
import _modDef11053 from "module_11053" /* 11053 */;
import _modDef11054 from "module_11054" /* 11054 */;
import _modDef11055 from "module_11055" /* 11055 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11032, medium: _modDef11033, large: _modDef11034 };
const obj2 = { small: _modDef11032, medium: _modDef11033, large: _modDef11034 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11035, medium: _modDef11036, large: _modDef11037 };
const obj3 = { small: _modDef11035, medium: _modDef11036, large: _modDef11037 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11038, medium: _modDef11039, large: _modDef11040 };
const obj4 = { small: _modDef11038, medium: _modDef11039, large: _modDef11040 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11041, medium: _modDef11042, large: _modDef11043 };
const obj5 = { small: _modDef11041, medium: _modDef11042, large: _modDef11043 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11044, medium: _modDef11045, large: _modDef11046 };
const obj6 = { small: _modDef11044, medium: _modDef11045, large: _modDef11046 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11047, medium: _modDef11048, large: _modDef11049 };
const obj7 = { small: _modDef11047, medium: _modDef11048, large: _modDef11049 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11050, medium: _modDef11051, large: _modDef11052 };
const obj8 = { small: _modDef11050, medium: _modDef11051, large: _modDef11052 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11053, medium: _modDef11054, large: _modDef11055 };
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