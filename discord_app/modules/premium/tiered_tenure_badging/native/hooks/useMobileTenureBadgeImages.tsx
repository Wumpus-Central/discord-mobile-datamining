// === Module 11177: useMobileTenureBadgeImages ===

// Module 11177 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1391 */;
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
import _modDef11188 from "module_11188" /* 11188 */;
import _modDef11189 from "module_11189" /* 11189 */;
import _modDef11190 from "module_11190" /* 11190 */;
import _modDef11191 from "module_11191" /* 11191 */;
import _modDef11192 from "module_11192" /* 11192 */;
import _modDef11193 from "module_11193" /* 11193 */;
import _modDef11194 from "module_11194" /* 11194 */;
import _modDef11195 from "module_11195" /* 11195 */;
import _modDef11196 from "module_11196" /* 11196 */;
import _modDef11197 from "module_11197" /* 11197 */;
import _modDef11198 from "module_11198" /* 11198 */;
import _modDef11199 from "module_11199" /* 11199 */;
import _modDef11200 from "module_11200" /* 11200 */;
import _modDef11201 from "module_11201" /* 11201 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11178, medium: _modDef11179, large: _modDef11180 };
const obj2 = { small: _modDef11178, medium: _modDef11179, large: _modDef11180 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11181, medium: _modDef11182, large: _modDef11183 };
const obj3 = { small: _modDef11181, medium: _modDef11182, large: _modDef11183 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11184, medium: _modDef11185, large: _modDef11186 };
const obj4 = { small: _modDef11184, medium: _modDef11185, large: _modDef11186 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11187, medium: _modDef11188, large: _modDef11189 };
const obj5 = { small: _modDef11187, medium: _modDef11188, large: _modDef11189 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11190, medium: _modDef11191, large: _modDef11192 };
const obj6 = { small: _modDef11190, medium: _modDef11191, large: _modDef11192 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11193, medium: _modDef11194, large: _modDef11195 };
const obj7 = { small: _modDef11193, medium: _modDef11194, large: _modDef11195 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11196, medium: _modDef11197, large: _modDef11198 };
const obj8 = { small: _modDef11196, medium: _modDef11197, large: _modDef11198 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11199, medium: _modDef11200, large: _modDef11201 };
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