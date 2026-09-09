// === Module 11190: useMobileTenureBadgeImages ===

// Module 11190 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1373 */;
import _modDef11191 from "module_11191" /* 11191 */;
import _modDef11192 from "module_11192" /* 11192 */;
import _modDef11193 from "module_11193" /* 11193 */;
import _modDef11194 from "module_11194" /* 11194 */;
import _modDef11195 from "module_11195" /* 11195 */;
import _modDef11196 from "module_11196" /* 11196 */;
import _modDef11197 from "module_11197" /* 11197 */;
import _modDef11198 from "module_11198" /* 11198 */;
import _modDef11199 from "module_11199" /* 11199 */;
import _modDef11200 from "module_11200" /* 11200 */;
import _modDef11201 from "module_11201" /* 11201 */;
import _modDef11202 from "module_11202" /* 11202 */;
import _modDef11203 from "module_11203" /* 11203 */;
import _modDef11204 from "module_11204" /* 11204 */;
import _modDef11205 from "module_11205" /* 11205 */;
import _modDef11206 from "module_11206" /* 11206 */;
import _modDef11207 from "module_11207" /* 11207 */;
import _modDef11208 from "module_11208" /* 11208 */;
import _modDef11209 from "module_11209" /* 11209 */;
import _modDef11210 from "module_11210" /* 11210 */;
import _modDef11211 from "module_11211" /* 11211 */;
import _modDef11212 from "module_11212" /* 11212 */;
import _modDef11213 from "module_11213" /* 11213 */;
import _modDef11214 from "module_11214" /* 11214 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
let obj = {};
obj = { small: _modDef11191, medium: _modDef11192, large: _modDef11193 };
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = obj;
obj = { small: _modDef11194, medium: _modDef11195, large: _modDef11196 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = obj;
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11197, medium: _modDef11198, large: _modDef11199 };
const obj1 = { small: _modDef11197, medium: _modDef11198, large: _modDef11199 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11200, medium: _modDef11201, large: _modDef11202 };
const obj2 = { small: _modDef11200, medium: _modDef11201, large: _modDef11202 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11203, medium: _modDef11204, large: _modDef11205 };
const obj3 = { small: _modDef11203, medium: _modDef11204, large: _modDef11205 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11206, medium: _modDef11207, large: _modDef11208 };
const obj4 = { small: _modDef11206, medium: _modDef11207, large: _modDef11208 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11209, medium: _modDef11210, large: _modDef11211 };
const obj5 = { small: _modDef11209, medium: _modDef11210, large: _modDef11211 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11212, medium: _modDef11213, large: _modDef11214 };
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