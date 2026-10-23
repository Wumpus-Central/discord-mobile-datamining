// === Module 11057: useMobileTenureBadgeImages ===

// Module 11057 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1394 */;
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
import _modDef11073 from "module_11073" /* 11073 */;
import _modDef11074 from "module_11074" /* 11074 */;
import _modDef11075 from "module_11075" /* 11075 */;
import _modDef11076 from "module_11076" /* 11076 */;
import _modDef11077 from "module_11077" /* 11077 */;
import _modDef11078 from "module_11078" /* 11078 */;
import _modDef11079 from "module_11079" /* 11079 */;
import _modDef11080 from "module_11080" /* 11080 */;
import _modDef11081 from "module_11081" /* 11081 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11058, medium: _modDef11059, large: _modDef11060 };
const obj2 = { small: _modDef11058, medium: _modDef11059, large: _modDef11060 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11061, medium: _modDef11062, large: _modDef11063 };
const obj3 = { small: _modDef11061, medium: _modDef11062, large: _modDef11063 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11064, medium: _modDef11065, large: _modDef11066 };
const obj4 = { small: _modDef11064, medium: _modDef11065, large: _modDef11066 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11067, medium: _modDef11068, large: _modDef11069 };
const obj5 = { small: _modDef11067, medium: _modDef11068, large: _modDef11069 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11070, medium: _modDef11071, large: _modDef11072 };
const obj6 = { small: _modDef11070, medium: _modDef11071, large: _modDef11072 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11073, medium: _modDef11074, large: _modDef11075 };
const obj7 = { small: _modDef11073, medium: _modDef11074, large: _modDef11075 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11076, medium: _modDef11077, large: _modDef11078 };
const obj8 = { small: _modDef11076, medium: _modDef11077, large: _modDef11078 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11079, medium: _modDef11080, large: _modDef11081 };
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