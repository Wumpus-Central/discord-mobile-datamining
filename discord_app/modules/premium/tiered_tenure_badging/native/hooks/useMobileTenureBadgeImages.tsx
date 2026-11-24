// === Module 9683: useMobileTenureBadgeImages ===

// Module 9683 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1388 */;
import _modDef9684 from "module_9684" /* 9684 */;
import _modDef9685 from "module_9685" /* 9685 */;
import _modDef9686 from "module_9686" /* 9686 */;
import _modDef9687 from "module_9687" /* 9687 */;
import _modDef9688 from "module_9688" /* 9688 */;
import _modDef9689 from "module_9689" /* 9689 */;
import _modDef9690 from "module_9690" /* 9690 */;
import _modDef9691 from "module_9691" /* 9691 */;
import _modDef9692 from "module_9692" /* 9692 */;
import _modDef9693 from "module_9693" /* 9693 */;
import _modDef9694 from "module_9694" /* 9694 */;
import _modDef9695 from "module_9695" /* 9695 */;
import _modDef9696 from "module_9696" /* 9696 */;
import _modDef9697 from "module_9697" /* 9697 */;
import _modDef9698 from "module_9698" /* 9698 */;
import _modDef9699 from "module_9699" /* 9699 */;
import _modDef9700 from "module_9700" /* 9700 */;
import _modDef9701 from "module_9701" /* 9701 */;
import _modDef9702 from "module_9702" /* 9702 */;
import _modDef9703 from "module_9703" /* 9703 */;
import _modDef9704 from "module_9704" /* 9704 */;
import _modDef9705 from "module_9705" /* 9705 */;
import _modDef9706 from "module_9706" /* 9706 */;
import _modDef9707 from "module_9707" /* 9707 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef9684, medium: _modDef9685, large: _modDef9686 };
const obj2 = { small: _modDef9684, medium: _modDef9685, large: _modDef9686 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef9687, medium: _modDef9688, large: _modDef9689 };
const obj3 = { small: _modDef9687, medium: _modDef9688, large: _modDef9689 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef9690, medium: _modDef9691, large: _modDef9692 };
const obj4 = { small: _modDef9690, medium: _modDef9691, large: _modDef9692 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef9693, medium: _modDef9694, large: _modDef9695 };
const obj5 = { small: _modDef9693, medium: _modDef9694, large: _modDef9695 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef9696, medium: _modDef9697, large: _modDef9698 };
const obj6 = { small: _modDef9696, medium: _modDef9697, large: _modDef9698 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef9699, medium: _modDef9700, large: _modDef9701 };
const obj7 = { small: _modDef9699, medium: _modDef9700, large: _modDef9701 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef9702, medium: _modDef9703, large: _modDef9704 };
const obj8 = { small: _modDef9702, medium: _modDef9703, large: _modDef9704 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef9705, medium: _modDef9706, large: _modDef9707 };
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