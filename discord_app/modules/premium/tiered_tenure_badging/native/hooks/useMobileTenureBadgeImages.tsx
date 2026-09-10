// === Module 11230: useMobileTenureBadgeImages ===

// Module 11230 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1373 */;
import _modDef11231 from "module_11231" /* 11231 */;
import _modDef11232 from "module_11232" /* 11232 */;
import _modDef11233 from "module_11233" /* 11233 */;
import _modDef11234 from "module_11234" /* 11234 */;
import _modDef11235 from "module_11235" /* 11235 */;
import _modDef11236 from "module_11236" /* 11236 */;
import _modDef11237 from "module_11237" /* 11237 */;
import _modDef11238 from "module_11238" /* 11238 */;
import _modDef11239 from "module_11239" /* 11239 */;
import _modDef11240 from "module_11240" /* 11240 */;
import _modDef11241 from "module_11241" /* 11241 */;
import _modDef11242 from "module_11242" /* 11242 */;
import _modDef11243 from "module_11243" /* 11243 */;
import _modDef11244 from "module_11244" /* 11244 */;
import _modDef11245 from "module_11245" /* 11245 */;
import _modDef11246 from "module_11246" /* 11246 */;
import _modDef11247 from "module_11247" /* 11247 */;
import _modDef11248 from "module_11248" /* 11248 */;
import _modDef11249 from "module_11249" /* 11249 */;
import _modDef11250 from "module_11250" /* 11250 */;
import _modDef11251 from "module_11251" /* 11251 */;
import _modDef11252 from "module_11252" /* 11252 */;
import _modDef11253 from "module_11253" /* 11253 */;
import _modDef11254 from "module_11254" /* 11254 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
let obj = {};
obj = { small: _modDef11231, medium: _modDef11232, large: _modDef11233 };
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = obj;
obj = { small: _modDef11234, medium: _modDef11235, large: _modDef11236 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = obj;
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11237, medium: _modDef11238, large: _modDef11239 };
const obj1 = { small: _modDef11237, medium: _modDef11238, large: _modDef11239 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11240, medium: _modDef11241, large: _modDef11242 };
const obj2 = { small: _modDef11240, medium: _modDef11241, large: _modDef11242 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11243, medium: _modDef11244, large: _modDef11245 };
const obj3 = { small: _modDef11243, medium: _modDef11244, large: _modDef11245 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11246, medium: _modDef11247, large: _modDef11248 };
const obj4 = { small: _modDef11246, medium: _modDef11247, large: _modDef11248 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11249, medium: _modDef11250, large: _modDef11251 };
const obj5 = { small: _modDef11249, medium: _modDef11250, large: _modDef11251 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11252, medium: _modDef11253, large: _modDef11254 };
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