// === Module 10789: useMobileTenureBadgeImages ===

// Module 10789 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import _modDef10790 from "module_10790" /* 10790 */;
import _modDef10791 from "module_10791" /* 10791 */;
import _modDef10792 from "module_10792" /* 10792 */;
import _modDef10793 from "module_10793" /* 10793 */;
import _modDef10794 from "module_10794" /* 10794 */;
import _modDef10795 from "module_10795" /* 10795 */;
import _modDef10796 from "module_10796" /* 10796 */;
import _modDef10797 from "module_10797" /* 10797 */;
import _modDef10798 from "module_10798" /* 10798 */;
import _modDef10799 from "module_10799" /* 10799 */;
import _modDef10800 from "module_10800" /* 10800 */;
import _modDef10801 from "module_10801" /* 10801 */;
import _modDef10802 from "module_10802" /* 10802 */;
import _modDef10803 from "module_10803" /* 10803 */;
import _modDef10804 from "module_10804" /* 10804 */;
import _modDef10805 from "module_10805" /* 10805 */;
import _modDef10806 from "module_10806" /* 10806 */;
import _modDef10807 from "module_10807" /* 10807 */;
import _modDef10808 from "module_10808" /* 10808 */;
import _modDef10809 from "module_10809" /* 10809 */;
import _modDef10810 from "module_10810" /* 10810 */;
import _modDef10811 from "module_10811" /* 10811 */;
import _modDef10812 from "module_10812" /* 10812 */;
import _modDef10813 from "module_10813" /* 10813 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10790, medium: _modDef10791, large: _modDef10792 };
const obj2 = { small: _modDef10790, medium: _modDef10791, large: _modDef10792 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10793, medium: _modDef10794, large: _modDef10795 };
const obj3 = { small: _modDef10793, medium: _modDef10794, large: _modDef10795 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10796, medium: _modDef10797, large: _modDef10798 };
const obj4 = { small: _modDef10796, medium: _modDef10797, large: _modDef10798 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10799, medium: _modDef10800, large: _modDef10801 };
const obj5 = { small: _modDef10799, medium: _modDef10800, large: _modDef10801 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10802, medium: _modDef10803, large: _modDef10804 };
const obj6 = { small: _modDef10802, medium: _modDef10803, large: _modDef10804 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10805, medium: _modDef10806, large: _modDef10807 };
const obj7 = { small: _modDef10805, medium: _modDef10806, large: _modDef10807 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10808, medium: _modDef10809, large: _modDef10810 };
const obj8 = { small: _modDef10808, medium: _modDef10809, large: _modDef10810 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10811, medium: _modDef10812, large: _modDef10813 };
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