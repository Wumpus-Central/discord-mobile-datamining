// === Module 11382: useMobileTenureBadgeImages ===

// Module 11382 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1386 */;
import _modDef11383 from "module_11383" /* 11383 */;
import _modDef11384 from "module_11384" /* 11384 */;
import _modDef11385 from "module_11385" /* 11385 */;
import _modDef11386 from "module_11386" /* 11386 */;
import _modDef11387 from "module_11387" /* 11387 */;
import _modDef11388 from "module_11388" /* 11388 */;
import _modDef11389 from "module_11389" /* 11389 */;
import _modDef11390 from "module_11390" /* 11390 */;
import _modDef11391 from "module_11391" /* 11391 */;
import _modDef11392 from "module_11392" /* 11392 */;
import _modDef11393 from "module_11393" /* 11393 */;
import _modDef11394 from "module_11394" /* 11394 */;
import _modDef11395 from "module_11395" /* 11395 */;
import _modDef11396 from "module_11396" /* 11396 */;
import _modDef11397 from "module_11397" /* 11397 */;
import _modDef11398 from "module_11398" /* 11398 */;
import _modDef11399 from "module_11399" /* 11399 */;
import _modDef11400 from "module_11400" /* 11400 */;
import _modDef11401 from "module_11401" /* 11401 */;
import _modDef11402 from "module_11402" /* 11402 */;
import _modDef11403 from "module_11403" /* 11403 */;
import _modDef11404 from "module_11404" /* 11404 */;
import _modDef11405 from "module_11405" /* 11405 */;
import _modDef11406 from "module_11406" /* 11406 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11383, medium: _modDef11384, large: _modDef11385 };
const obj2 = { small: _modDef11383, medium: _modDef11384, large: _modDef11385 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11386, medium: _modDef11387, large: _modDef11388 };
const obj3 = { small: _modDef11386, medium: _modDef11387, large: _modDef11388 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11389, medium: _modDef11390, large: _modDef11391 };
const obj4 = { small: _modDef11389, medium: _modDef11390, large: _modDef11391 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11392, medium: _modDef11393, large: _modDef11394 };
const obj5 = { small: _modDef11392, medium: _modDef11393, large: _modDef11394 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11395, medium: _modDef11396, large: _modDef11397 };
const obj6 = { small: _modDef11395, medium: _modDef11396, large: _modDef11397 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11398, medium: _modDef11399, large: _modDef11400 };
const obj7 = { small: _modDef11398, medium: _modDef11399, large: _modDef11400 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11401, medium: _modDef11402, large: _modDef11403 };
const obj8 = { small: _modDef11401, medium: _modDef11402, large: _modDef11403 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11404, medium: _modDef11405, large: _modDef11406 };
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