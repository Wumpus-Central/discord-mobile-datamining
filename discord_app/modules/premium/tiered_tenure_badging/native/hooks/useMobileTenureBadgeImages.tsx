// === Module 11311: useMobileTenureBadgeImages ===

// Module 11311 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1374 */;
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
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11312, medium: _modDef11313, large: _modDef11314 };
const obj2 = { small: _modDef11312, medium: _modDef11313, large: _modDef11314 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11315, medium: _modDef11316, large: _modDef11317 };
const obj3 = { small: _modDef11315, medium: _modDef11316, large: _modDef11317 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11318, medium: _modDef11319, large: _modDef11320 };
const obj4 = { small: _modDef11318, medium: _modDef11319, large: _modDef11320 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11321, medium: _modDef11322, large: _modDef11323 };
const obj5 = { small: _modDef11321, medium: _modDef11322, large: _modDef11323 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11324, medium: _modDef11325, large: _modDef11326 };
const obj6 = { small: _modDef11324, medium: _modDef11325, large: _modDef11326 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11327, medium: _modDef11328, large: _modDef11329 };
const obj7 = { small: _modDef11327, medium: _modDef11328, large: _modDef11329 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11330, medium: _modDef11331, large: _modDef11332 };
const obj8 = { small: _modDef11330, medium: _modDef11331, large: _modDef11332 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11333, medium: _modDef11334, large: _modDef11335 };
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