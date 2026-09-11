// === Module 11253: useMobileTenureBadgeImages ===

// Module 11253 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1373 */;
import _modDef11254 from "module_11254" /* 11254 */;
import _modDef11255 from "module_11255" /* 11255 */;
import _modDef11256 from "module_11256" /* 11256 */;
import _modDef11257 from "module_11257" /* 11257 */;
import _modDef11258 from "module_11258" /* 11258 */;
import _modDef11259 from "module_11259" /* 11259 */;
import _modDef11260 from "module_11260" /* 11260 */;
import _modDef11261 from "module_11261" /* 11261 */;
import _modDef11262 from "module_11262" /* 11262 */;
import _modDef11263 from "module_11263" /* 11263 */;
import _modDef11264 from "module_11264" /* 11264 */;
import _modDef11265 from "module_11265" /* 11265 */;
import _modDef11266 from "module_11266" /* 11266 */;
import _modDef11267 from "module_11267" /* 11267 */;
import _modDef11268 from "module_11268" /* 11268 */;
import _modDef11269 from "module_11269" /* 11269 */;
import _modDef11270 from "module_11270" /* 11270 */;
import _modDef11271 from "module_11271" /* 11271 */;
import _modDef11272 from "module_11272" /* 11272 */;
import _modDef11273 from "module_11273" /* 11273 */;
import _modDef11274 from "module_11274" /* 11274 */;
import _modDef11275 from "module_11275" /* 11275 */;
import _modDef11276 from "module_11276" /* 11276 */;
import _modDef11277 from "module_11277" /* 11277 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
let obj = {};
obj = { small: _modDef11254, medium: _modDef11255, large: _modDef11256 };
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = obj;
obj = { small: _modDef11257, medium: _modDef11258, large: _modDef11259 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = obj;
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11260, medium: _modDef11261, large: _modDef11262 };
const obj1 = { small: _modDef11260, medium: _modDef11261, large: _modDef11262 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11263, medium: _modDef11264, large: _modDef11265 };
const obj2 = { small: _modDef11263, medium: _modDef11264, large: _modDef11265 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11266, medium: _modDef11267, large: _modDef11268 };
const obj3 = { small: _modDef11266, medium: _modDef11267, large: _modDef11268 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11269, medium: _modDef11270, large: _modDef11271 };
const obj4 = { small: _modDef11269, medium: _modDef11270, large: _modDef11271 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11272, medium: _modDef11273, large: _modDef11274 };
const obj5 = { small: _modDef11272, medium: _modDef11273, large: _modDef11274 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11275, medium: _modDef11276, large: _modDef11277 };
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