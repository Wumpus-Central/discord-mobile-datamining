// === Module 9782: useMobileTenureBadgeImages ===

// Module 9782 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1388 */;
import _modDef9783 from "module_9783" /* 9783 */;
import _modDef9784 from "module_9784" /* 9784 */;
import _modDef9785 from "module_9785" /* 9785 */;
import _modDef9786 from "module_9786" /* 9786 */;
import _modDef9787 from "module_9787" /* 9787 */;
import _modDef9788 from "module_9788" /* 9788 */;
import _modDef9789 from "module_9789" /* 9789 */;
import _modDef9790 from "module_9790" /* 9790 */;
import _modDef9791 from "module_9791" /* 9791 */;
import _modDef9792 from "module_9792" /* 9792 */;
import _modDef9793 from "module_9793" /* 9793 */;
import _modDef9794 from "module_9794" /* 9794 */;
import _modDef9795 from "module_9795" /* 9795 */;
import _modDef9796 from "module_9796" /* 9796 */;
import _modDef9797 from "module_9797" /* 9797 */;
import _modDef9798 from "module_9798" /* 9798 */;
import _modDef9799 from "module_9799" /* 9799 */;
import _modDef9800 from "module_9800" /* 9800 */;
import _modDef9801 from "module_9801" /* 9801 */;
import _modDef9802 from "module_9802" /* 9802 */;
import _modDef9803 from "module_9803" /* 9803 */;
import _modDef9804 from "module_9804" /* 9804 */;
import _modDef9805 from "module_9805" /* 9805 */;
import _modDef9806 from "module_9806" /* 9806 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef9783, medium: _modDef9784, large: _modDef9785 };
const obj2 = { small: _modDef9783, medium: _modDef9784, large: _modDef9785 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef9786, medium: _modDef9787, large: _modDef9788 };
const obj3 = { small: _modDef9786, medium: _modDef9787, large: _modDef9788 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef9789, medium: _modDef9790, large: _modDef9791 };
const obj4 = { small: _modDef9789, medium: _modDef9790, large: _modDef9791 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef9792, medium: _modDef9793, large: _modDef9794 };
const obj5 = { small: _modDef9792, medium: _modDef9793, large: _modDef9794 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef9795, medium: _modDef9796, large: _modDef9797 };
const obj6 = { small: _modDef9795, medium: _modDef9796, large: _modDef9797 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef9798, medium: _modDef9799, large: _modDef9800 };
const obj7 = { small: _modDef9798, medium: _modDef9799, large: _modDef9800 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef9801, medium: _modDef9802, large: _modDef9803 };
const obj8 = { small: _modDef9801, medium: _modDef9802, large: _modDef9803 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef9804, medium: _modDef9805, large: _modDef9806 };
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