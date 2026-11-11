// === Module 10019: useMobileTenureBadgeImages ===

// Module 10019 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import _modDef10020 from "module_10020" /* 10020 */;
import _modDef10021 from "module_10021" /* 10021 */;
import _modDef10022 from "module_10022" /* 10022 */;
import _modDef10023 from "module_10023" /* 10023 */;
import _modDef10024 from "module_10024" /* 10024 */;
import _modDef10025 from "module_10025" /* 10025 */;
import _modDef10026 from "module_10026" /* 10026 */;
import _modDef10027 from "module_10027" /* 10027 */;
import _modDef10028 from "module_10028" /* 10028 */;
import _modDef10029 from "module_10029" /* 10029 */;
import _modDef10030 from "module_10030" /* 10030 */;
import _modDef10031 from "module_10031" /* 10031 */;
import _modDef10032 from "module_10032" /* 10032 */;
import _modDef10033 from "module_10033" /* 10033 */;
import _modDef10034 from "module_10034" /* 10034 */;
import _modDef10035 from "module_10035" /* 10035 */;
import _modDef10036 from "module_10036" /* 10036 */;
import _modDef10037 from "module_10037" /* 10037 */;
import _modDef10038 from "module_10038" /* 10038 */;
import _modDef10039 from "module_10039" /* 10039 */;
import _modDef10040 from "module_10040" /* 10040 */;
import _modDef10041 from "module_10041" /* 10041 */;
import _modDef10042 from "module_10042" /* 10042 */;
import _modDef10043 from "module_10043" /* 10043 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10020, medium: _modDef10021, large: _modDef10022 };
const obj2 = { small: _modDef10020, medium: _modDef10021, large: _modDef10022 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10023, medium: _modDef10024, large: _modDef10025 };
const obj3 = { small: _modDef10023, medium: _modDef10024, large: _modDef10025 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10026, medium: _modDef10027, large: _modDef10028 };
const obj4 = { small: _modDef10026, medium: _modDef10027, large: _modDef10028 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10029, medium: _modDef10030, large: _modDef10031 };
const obj5 = { small: _modDef10029, medium: _modDef10030, large: _modDef10031 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10032, medium: _modDef10033, large: _modDef10034 };
const obj6 = { small: _modDef10032, medium: _modDef10033, large: _modDef10034 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10035, medium: _modDef10036, large: _modDef10037 };
const obj7 = { small: _modDef10035, medium: _modDef10036, large: _modDef10037 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10038, medium: _modDef10039, large: _modDef10040 };
const obj8 = { small: _modDef10038, medium: _modDef10039, large: _modDef10040 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10041, medium: _modDef10042, large: _modDef10043 };
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