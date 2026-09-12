// === Module 11292: useMobileTenureBadgeImages ===

// Module 11292 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1373 */;
import _modDef11293 from "module_11293" /* 11293 */;
import _modDef11294 from "module_11294" /* 11294 */;
import _modDef11295 from "module_11295" /* 11295 */;
import _modDef11296 from "module_11296" /* 11296 */;
import _modDef11297 from "module_11297" /* 11297 */;
import _modDef11298 from "module_11298" /* 11298 */;
import _modDef11299 from "module_11299" /* 11299 */;
import _modDef11300 from "module_11300" /* 11300 */;
import _modDef11301 from "module_11301" /* 11301 */;
import _modDef11302 from "module_11302" /* 11302 */;
import _modDef11303 from "module_11303" /* 11303 */;
import _modDef11304 from "module_11304" /* 11304 */;
import _modDef11305 from "module_11305" /* 11305 */;
import _modDef11306 from "module_11306" /* 11306 */;
import _modDef11307 from "module_11307" /* 11307 */;
import _modDef11308 from "module_11308" /* 11308 */;
import _modDef11309 from "module_11309" /* 11309 */;
import _modDef11310 from "module_11310" /* 11310 */;
import _modDef11311 from "module_11311" /* 11311 */;
import _modDef11312 from "module_11312" /* 11312 */;
import _modDef11313 from "module_11313" /* 11313 */;
import _modDef11314 from "module_11314" /* 11314 */;
import _modDef11315 from "module_11315" /* 11315 */;
import _modDef11316 from "module_11316" /* 11316 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
let obj = {};
obj = { small: _modDef11293, medium: _modDef11294, large: _modDef11295 };
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = obj;
obj = { small: _modDef11296, medium: _modDef11297, large: _modDef11298 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = obj;
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11299, medium: _modDef11300, large: _modDef11301 };
const obj1 = { small: _modDef11299, medium: _modDef11300, large: _modDef11301 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11302, medium: _modDef11303, large: _modDef11304 };
const obj2 = { small: _modDef11302, medium: _modDef11303, large: _modDef11304 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11305, medium: _modDef11306, large: _modDef11307 };
const obj3 = { small: _modDef11305, medium: _modDef11306, large: _modDef11307 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11308, medium: _modDef11309, large: _modDef11310 };
const obj4 = { small: _modDef11308, medium: _modDef11309, large: _modDef11310 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11311, medium: _modDef11312, large: _modDef11313 };
const obj5 = { small: _modDef11311, medium: _modDef11312, large: _modDef11313 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11314, medium: _modDef11315, large: _modDef11316 };
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