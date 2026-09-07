// === Module 11163: useMobileTenureBadgeImages ===

// Module 11163 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1373 */;
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
import _modDef11183 from "module_11183" /* 11183 */;
import _modDef11184 from "module_11184" /* 11184 */;
import _modDef11185 from "module_11185" /* 11185 */;
import _modDef11186 from "module_11186" /* 11186 */;
import _modDef11187 from "module_11187" /* 11187 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
let obj = {};
obj = { small: _modDef11164, medium: _modDef11165, large: _modDef11166 };
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = obj;
obj = { small: _modDef11167, medium: _modDef11168, large: _modDef11169 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = obj;
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11170, medium: _modDef11171, large: _modDef11172 };
const obj1 = { small: _modDef11170, medium: _modDef11171, large: _modDef11172 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11173, medium: _modDef11174, large: _modDef11175 };
const obj2 = { small: _modDef11173, medium: _modDef11174, large: _modDef11175 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11176, medium: _modDef11177, large: _modDef11178 };
const obj3 = { small: _modDef11176, medium: _modDef11177, large: _modDef11178 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11179, medium: _modDef11180, large: _modDef11181 };
const obj4 = { small: _modDef11179, medium: _modDef11180, large: _modDef11181 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11182, medium: _modDef11183, large: _modDef11184 };
const obj5 = { small: _modDef11182, medium: _modDef11183, large: _modDef11184 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11185, medium: _modDef11186, large: _modDef11187 };
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