// === Module 11080: useMobileTenureBadgeImages ===

// Module 11080 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import _modDef11081 from "module_11081" /* 11081 */;
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
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11081, medium: _modDef11082, large: _modDef11083 };
const obj2 = { small: _modDef11081, medium: _modDef11082, large: _modDef11083 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11084, medium: _modDef11085, large: _modDef11086 };
const obj3 = { small: _modDef11084, medium: _modDef11085, large: _modDef11086 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11087, medium: _modDef11088, large: _modDef11089 };
const obj4 = { small: _modDef11087, medium: _modDef11088, large: _modDef11089 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11090, medium: _modDef11091, large: _modDef11092 };
const obj5 = { small: _modDef11090, medium: _modDef11091, large: _modDef11092 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11093, medium: _modDef11094, large: _modDef11095 };
const obj6 = { small: _modDef11093, medium: _modDef11094, large: _modDef11095 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11096, medium: _modDef11097, large: _modDef11098 };
const obj7 = { small: _modDef11096, medium: _modDef11097, large: _modDef11098 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11099, medium: _modDef11100, large: _modDef11101 };
const obj8 = { small: _modDef11099, medium: _modDef11100, large: _modDef11101 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11102, medium: _modDef11103, large: _modDef11104 };
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