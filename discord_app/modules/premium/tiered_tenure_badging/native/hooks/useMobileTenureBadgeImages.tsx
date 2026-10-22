// === Module 11048: useMobileTenureBadgeImages ===

// Module 11048 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import _modDef11049 from "module_11049" /* 11049 */;
import _modDef11050 from "module_11050" /* 11050 */;
import _modDef11051 from "module_11051" /* 11051 */;
import _modDef11052 from "module_11052" /* 11052 */;
import _modDef11053 from "module_11053" /* 11053 */;
import _modDef11054 from "module_11054" /* 11054 */;
import _modDef11055 from "module_11055" /* 11055 */;
import _modDef11056 from "module_11056" /* 11056 */;
import _modDef11057 from "module_11057" /* 11057 */;
import _modDef11058 from "module_11058" /* 11058 */;
import _modDef11059 from "module_11059" /* 11059 */;
import _modDef11060 from "module_11060" /* 11060 */;
import _modDef11061 from "module_11061" /* 11061 */;
import _modDef11062 from "module_11062" /* 11062 */;
import _modDef11063 from "module_11063" /* 11063 */;
import _modDef11064 from "module_11064" /* 11064 */;
import _modDef11065 from "module_11065" /* 11065 */;
import _modDef11066 from "module_11066" /* 11066 */;
import _modDef11067 from "module_11067" /* 11067 */;
import _modDef11068 from "module_11068" /* 11068 */;
import _modDef11069 from "module_11069" /* 11069 */;
import _modDef11070 from "module_11070" /* 11070 */;
import _modDef11071 from "module_11071" /* 11071 */;
import _modDef11072 from "module_11072" /* 11072 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11049, medium: _modDef11050, large: _modDef11051 };
const obj2 = { small: _modDef11049, medium: _modDef11050, large: _modDef11051 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11052, medium: _modDef11053, large: _modDef11054 };
const obj3 = { small: _modDef11052, medium: _modDef11053, large: _modDef11054 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11055, medium: _modDef11056, large: _modDef11057 };
const obj4 = { small: _modDef11055, medium: _modDef11056, large: _modDef11057 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11058, medium: _modDef11059, large: _modDef11060 };
const obj5 = { small: _modDef11058, medium: _modDef11059, large: _modDef11060 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11061, medium: _modDef11062, large: _modDef11063 };
const obj6 = { small: _modDef11061, medium: _modDef11062, large: _modDef11063 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11064, medium: _modDef11065, large: _modDef11066 };
const obj7 = { small: _modDef11064, medium: _modDef11065, large: _modDef11066 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11067, medium: _modDef11068, large: _modDef11069 };
const obj8 = { small: _modDef11067, medium: _modDef11068, large: _modDef11069 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11070, medium: _modDef11071, large: _modDef11072 };
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