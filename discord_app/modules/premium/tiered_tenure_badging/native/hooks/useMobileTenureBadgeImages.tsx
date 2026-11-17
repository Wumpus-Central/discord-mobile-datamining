// === Module 15263: useMobileTenureBadgeImages ===

// Module 15263 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1390 */;
import _modDef15264 from "module_15264" /* 15264 */;
import _modDef15265 from "module_15265" /* 15265 */;
import _modDef15266 from "module_15266" /* 15266 */;
import _modDef15267 from "module_15267" /* 15267 */;
import _modDef15268 from "module_15268" /* 15268 */;
import _modDef15269 from "module_15269" /* 15269 */;
import _modDef15270 from "module_15270" /* 15270 */;
import _modDef15271 from "module_15271" /* 15271 */;
import _modDef15272 from "module_15272" /* 15272 */;
import _modDef15273 from "module_15273" /* 15273 */;
import _modDef15274 from "module_15274" /* 15274 */;
import _modDef15275 from "module_15275" /* 15275 */;
import _modDef15276 from "module_15276" /* 15276 */;
import _modDef15277 from "module_15277" /* 15277 */;
import _modDef15278 from "module_15278" /* 15278 */;
import _modDef15279 from "module_15279" /* 15279 */;
import _modDef15280 from "module_15280" /* 15280 */;
import _modDef15281 from "module_15281" /* 15281 */;
import _modDef15282 from "module_15282" /* 15282 */;
import _modDef15283 from "module_15283" /* 15283 */;
import _modDef15284 from "module_15284" /* 15284 */;
import _modDef15285 from "module_15285" /* 15285 */;
import _modDef15286 from "module_15286" /* 15286 */;
import _modDef15287 from "module_15287" /* 15287 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef15264, medium: _modDef15265, large: _modDef15266 };
const obj2 = { small: _modDef15264, medium: _modDef15265, large: _modDef15266 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef15267, medium: _modDef15268, large: _modDef15269 };
const obj3 = { small: _modDef15267, medium: _modDef15268, large: _modDef15269 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef15270, medium: _modDef15271, large: _modDef15272 };
const obj4 = { small: _modDef15270, medium: _modDef15271, large: _modDef15272 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef15273, medium: _modDef15274, large: _modDef15275 };
const obj5 = { small: _modDef15273, medium: _modDef15274, large: _modDef15275 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef15276, medium: _modDef15277, large: _modDef15278 };
const obj6 = { small: _modDef15276, medium: _modDef15277, large: _modDef15278 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef15279, medium: _modDef15280, large: _modDef15281 };
const obj7 = { small: _modDef15279, medium: _modDef15280, large: _modDef15281 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef15282, medium: _modDef15283, large: _modDef15284 };
const obj8 = { small: _modDef15282, medium: _modDef15283, large: _modDef15284 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef15285, medium: _modDef15286, large: _modDef15287 };
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx");

export function useMobileTenureBadgeImages(id) {
  let tmp = null;
  if (null != id) {
    tmp = obj[id];
  }
  return tmp;
}
export function getMobileTenureBadgeImages(arg0) {
  return obj[arg0];
}