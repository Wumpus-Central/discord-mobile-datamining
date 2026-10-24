// === Module 11081: useMobileTenureBadgeImages ===

// Module 11081 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import _modDef11082 from "module_11082" /* 11082 */;
import _modDef11083 from "module_11083" /* 11083 */;
import _modDef11084 from "module_11084" /* 11084 */;
import _modDef11085 from "module_11085" /* 11085 */;
import _modDef11086 from "module_11086" /* 11086 */;
import _modDef11087 from "module_11087" /* 11087 */;
import _modDef11088 from "module_11088" /* 11088 */;
import _modDef11089 from "module_11089" /* 11089 */;
import _modDef11090 from "module_11090" /* 11090 */;
import _modDef11091 from "module_11091" /* 11091 */;
import _modDef11092 from "module_11092" /* 11092 */;
import _modDef11093 from "module_11093" /* 11093 */;
import _modDef11094 from "module_11094" /* 11094 */;
import _modDef11095 from "module_11095" /* 11095 */;
import _modDef11096 from "module_11096" /* 11096 */;
import _modDef11097 from "module_11097" /* 11097 */;
import _modDef11098 from "module_11098" /* 11098 */;
import _modDef11099 from "module_11099" /* 11099 */;
import _modDef11100 from "module_11100" /* 11100 */;
import _modDef11101 from "module_11101" /* 11101 */;
import _modDef11102 from "module_11102" /* 11102 */;
import _modDef11103 from "module_11103" /* 11103 */;
import _modDef11104 from "module_11104" /* 11104 */;
import _modDef11105 from "module_11105" /* 11105 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11082, medium: _modDef11083, large: _modDef11084 };
const obj2 = { small: _modDef11082, medium: _modDef11083, large: _modDef11084 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11085, medium: _modDef11086, large: _modDef11087 };
const obj3 = { small: _modDef11085, medium: _modDef11086, large: _modDef11087 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11088, medium: _modDef11089, large: _modDef11090 };
const obj4 = { small: _modDef11088, medium: _modDef11089, large: _modDef11090 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11091, medium: _modDef11092, large: _modDef11093 };
const obj5 = { small: _modDef11091, medium: _modDef11092, large: _modDef11093 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11094, medium: _modDef11095, large: _modDef11096 };
const obj6 = { small: _modDef11094, medium: _modDef11095, large: _modDef11096 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11097, medium: _modDef11098, large: _modDef11099 };
const obj7 = { small: _modDef11097, medium: _modDef11098, large: _modDef11099 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11100, medium: _modDef11101, large: _modDef11102 };
const obj8 = { small: _modDef11100, medium: _modDef11101, large: _modDef11102 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11103, medium: _modDef11104, large: _modDef11105 };
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