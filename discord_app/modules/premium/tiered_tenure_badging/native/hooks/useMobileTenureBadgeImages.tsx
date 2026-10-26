// === Module 11085: useMobileTenureBadgeImages ===

// Module 11085 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1394 */;
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
import _modDef11106 from "module_11106" /* 11106 */;
import _modDef11107 from "module_11107" /* 11107 */;
import _modDef11108 from "module_11108" /* 11108 */;
import _modDef11109 from "module_11109" /* 11109 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11086, medium: _modDef11087, large: _modDef11088 };
const obj2 = { small: _modDef11086, medium: _modDef11087, large: _modDef11088 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11089, medium: _modDef11090, large: _modDef11091 };
const obj3 = { small: _modDef11089, medium: _modDef11090, large: _modDef11091 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11092, medium: _modDef11093, large: _modDef11094 };
const obj4 = { small: _modDef11092, medium: _modDef11093, large: _modDef11094 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11095, medium: _modDef11096, large: _modDef11097 };
const obj5 = { small: _modDef11095, medium: _modDef11096, large: _modDef11097 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11098, medium: _modDef11099, large: _modDef11100 };
const obj6 = { small: _modDef11098, medium: _modDef11099, large: _modDef11100 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11101, medium: _modDef11102, large: _modDef11103 };
const obj7 = { small: _modDef11101, medium: _modDef11102, large: _modDef11103 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11104, medium: _modDef11105, large: _modDef11106 };
const obj8 = { small: _modDef11104, medium: _modDef11105, large: _modDef11106 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11107, medium: _modDef11108, large: _modDef11109 };
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