// === Module 11158: useMobileTenureBadgeImages ===

// Module 11158 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1373 */;
import _modDef11159 from "module_11159" /* 11159 */;
import _modDef11160 from "module_11160" /* 11160 */;
import _modDef11161 from "module_11161" /* 11161 */;
import _modDef11162 from "module_11162" /* 11162 */;
import _modDef11163 from "module_11163" /* 11163 */;
import _modDef11164 from "module_11164" /* 11164 */;
import _modDef11165 from "module_11165" /* 11165 */;
import _modDef11166 from "module_11166" /* 11166 */;
import _modDef11167 from "module_11167" /* 11167 */;
import _modDef11168 from "module_11168" /* 11168 */;
import _modDef11169 from "module_11169" /* 11169 */;
import _modDef11170 from "module_11170" /* 11170 */;
import _modDef11171 from "module_11171" /* 11171 */;
import _modDef11172 from "module_11172" /* 11172 */;
import _modDef11173 from "module_11173" /* 11173 */;
import _modDef11174 from "module_11174" /* 11174 */;
import _modDef11175 from "module_11175" /* 11175 */;
import _modDef11176 from "module_11176" /* 11176 */;
import _modDef11177 from "module_11177" /* 11177 */;
import _modDef11178 from "module_11178" /* 11178 */;
import _modDef11179 from "module_11179" /* 11179 */;
import _modDef11180 from "module_11180" /* 11180 */;
import _modDef11181 from "module_11181" /* 11181 */;
import _modDef11182 from "module_11182" /* 11182 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
let obj = {};
obj = { small: _modDef11159, medium: _modDef11160, large: _modDef11161 };
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = obj;
obj = { small: _modDef11162, medium: _modDef11163, large: _modDef11164 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = obj;
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11165, medium: _modDef11166, large: _modDef11167 };
const obj1 = { small: _modDef11165, medium: _modDef11166, large: _modDef11167 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11168, medium: _modDef11169, large: _modDef11170 };
const obj2 = { small: _modDef11168, medium: _modDef11169, large: _modDef11170 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11171, medium: _modDef11172, large: _modDef11173 };
const obj3 = { small: _modDef11171, medium: _modDef11172, large: _modDef11173 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11174, medium: _modDef11175, large: _modDef11176 };
const obj4 = { small: _modDef11174, medium: _modDef11175, large: _modDef11176 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11177, medium: _modDef11178, large: _modDef11179 };
const obj5 = { small: _modDef11177, medium: _modDef11178, large: _modDef11179 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11180, medium: _modDef11181, large: _modDef11182 };
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