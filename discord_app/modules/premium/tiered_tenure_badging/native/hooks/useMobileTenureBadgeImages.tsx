// === Module 11319: useMobileTenureBadgeImages ===

// Module 11319 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import _modDef11320 from "module_11320" /* 11320 */;
import _modDef11321 from "module_11321" /* 11321 */;
import _modDef11322 from "module_11322" /* 11322 */;
import _modDef11323 from "module_11323" /* 11323 */;
import _modDef11324 from "module_11324" /* 11324 */;
import _modDef11325 from "module_11325" /* 11325 */;
import _modDef11326 from "module_11326" /* 11326 */;
import _modDef11327 from "module_11327" /* 11327 */;
import _modDef11328 from "module_11328" /* 11328 */;
import _modDef11329 from "module_11329" /* 11329 */;
import _modDef11330 from "module_11330" /* 11330 */;
import _modDef11331 from "module_11331" /* 11331 */;
import _modDef11332 from "module_11332" /* 11332 */;
import _modDef11333 from "module_11333" /* 11333 */;
import _modDef11334 from "module_11334" /* 11334 */;
import _modDef11335 from "module_11335" /* 11335 */;
import _modDef11336 from "module_11336" /* 11336 */;
import _modDef11337 from "module_11337" /* 11337 */;
import _modDef11338 from "module_11338" /* 11338 */;
import _modDef11339 from "module_11339" /* 11339 */;
import _modDef11340 from "module_11340" /* 11340 */;
import _modDef11341 from "module_11341" /* 11341 */;
import _modDef11342 from "module_11342" /* 11342 */;
import _modDef11343 from "module_11343" /* 11343 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11320, medium: _modDef11321, large: _modDef11322 };
const obj2 = { small: _modDef11320, medium: _modDef11321, large: _modDef11322 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11323, medium: _modDef11324, large: _modDef11325 };
const obj3 = { small: _modDef11323, medium: _modDef11324, large: _modDef11325 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11326, medium: _modDef11327, large: _modDef11328 };
const obj4 = { small: _modDef11326, medium: _modDef11327, large: _modDef11328 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11329, medium: _modDef11330, large: _modDef11331 };
const obj5 = { small: _modDef11329, medium: _modDef11330, large: _modDef11331 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11332, medium: _modDef11333, large: _modDef11334 };
const obj6 = { small: _modDef11332, medium: _modDef11333, large: _modDef11334 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11335, medium: _modDef11336, large: _modDef11337 };
const obj7 = { small: _modDef11335, medium: _modDef11336, large: _modDef11337 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11338, medium: _modDef11339, large: _modDef11340 };
const obj8 = { small: _modDef11338, medium: _modDef11339, large: _modDef11340 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11341, medium: _modDef11342, large: _modDef11343 };
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