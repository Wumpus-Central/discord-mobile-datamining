// === Module 11297: useMobileTenureBadgeImages ===

// Module 11297 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1374 */;
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
import _modDef11317 from "module_11317" /* 11317 */;
import _modDef11318 from "module_11318" /* 11318 */;
import _modDef11319 from "module_11319" /* 11319 */;
import _modDef11320 from "module_11320" /* 11320 */;
import _modDef11321 from "module_11321" /* 11321 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11298, medium: _modDef11299, large: _modDef11300 };
const obj2 = { small: _modDef11298, medium: _modDef11299, large: _modDef11300 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11301, medium: _modDef11302, large: _modDef11303 };
const obj3 = { small: _modDef11301, medium: _modDef11302, large: _modDef11303 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11304, medium: _modDef11305, large: _modDef11306 };
const obj4 = { small: _modDef11304, medium: _modDef11305, large: _modDef11306 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11307, medium: _modDef11308, large: _modDef11309 };
const obj5 = { small: _modDef11307, medium: _modDef11308, large: _modDef11309 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11310, medium: _modDef11311, large: _modDef11312 };
const obj6 = { small: _modDef11310, medium: _modDef11311, large: _modDef11312 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11313, medium: _modDef11314, large: _modDef11315 };
const obj7 = { small: _modDef11313, medium: _modDef11314, large: _modDef11315 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11316, medium: _modDef11317, large: _modDef11318 };
const obj8 = { small: _modDef11316, medium: _modDef11317, large: _modDef11318 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11319, medium: _modDef11320, large: _modDef11321 };
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