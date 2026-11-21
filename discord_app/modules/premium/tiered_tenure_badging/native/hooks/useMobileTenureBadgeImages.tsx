// === Module 13964: useMobileTenureBadgeImages ===

// Module 13964 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1388 */;
import _modDef13965 from "module_13965" /* 13965 */;
import _modDef13966 from "module_13966" /* 13966 */;
import _modDef13967 from "module_13967" /* 13967 */;
import _modDef13968 from "module_13968" /* 13968 */;
import _modDef13969 from "module_13969" /* 13969 */;
import _modDef13970 from "module_13970" /* 13970 */;
import _modDef13971 from "module_13971" /* 13971 */;
import _modDef13972 from "module_13972" /* 13972 */;
import _modDef13973 from "module_13973" /* 13973 */;
import _modDef13974 from "module_13974" /* 13974 */;
import _modDef13975 from "module_13975" /* 13975 */;
import _modDef13976 from "module_13976" /* 13976 */;
import _modDef13977 from "module_13977" /* 13977 */;
import _modDef13978 from "module_13978" /* 13978 */;
import _modDef13979 from "module_13979" /* 13979 */;
import _modDef13980 from "module_13980" /* 13980 */;
import _modDef13981 from "module_13981" /* 13981 */;
import _modDef13982 from "module_13982" /* 13982 */;
import _modDef13983 from "module_13983" /* 13983 */;
import _modDef13984 from "module_13984" /* 13984 */;
import _modDef13985 from "module_13985" /* 13985 */;
import _modDef13986 from "module_13986" /* 13986 */;
import _modDef13987 from "module_13987" /* 13987 */;
import _modDef13988 from "module_13988" /* 13988 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef13965, medium: _modDef13966, large: _modDef13967 };
const obj2 = { small: _modDef13965, medium: _modDef13966, large: _modDef13967 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef13968, medium: _modDef13969, large: _modDef13970 };
const obj3 = { small: _modDef13968, medium: _modDef13969, large: _modDef13970 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef13971, medium: _modDef13972, large: _modDef13973 };
const obj4 = { small: _modDef13971, medium: _modDef13972, large: _modDef13973 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef13974, medium: _modDef13975, large: _modDef13976 };
const obj5 = { small: _modDef13974, medium: _modDef13975, large: _modDef13976 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef13977, medium: _modDef13978, large: _modDef13979 };
const obj6 = { small: _modDef13977, medium: _modDef13978, large: _modDef13979 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef13980, medium: _modDef13981, large: _modDef13982 };
const obj7 = { small: _modDef13980, medium: _modDef13981, large: _modDef13982 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef13983, medium: _modDef13984, large: _modDef13985 };
const obj8 = { small: _modDef13983, medium: _modDef13984, large: _modDef13985 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef13986, medium: _modDef13987, large: _modDef13988 };
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