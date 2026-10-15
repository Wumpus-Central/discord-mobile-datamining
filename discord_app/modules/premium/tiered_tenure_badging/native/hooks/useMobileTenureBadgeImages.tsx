// === Module 10771: useMobileTenureBadgeImages ===

// Module 10771 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1392 */;
import _modDef10772 from "module_10772" /* 10772 */;
import _modDef10773 from "module_10773" /* 10773 */;
import _modDef10774 from "module_10774" /* 10774 */;
import _modDef10775 from "module_10775" /* 10775 */;
import _modDef10776 from "module_10776" /* 10776 */;
import _modDef10777 from "module_10777" /* 10777 */;
import _modDef10778 from "module_10778" /* 10778 */;
import _modDef10779 from "module_10779" /* 10779 */;
import _modDef10780 from "module_10780" /* 10780 */;
import _modDef10781 from "module_10781" /* 10781 */;
import _modDef10782 from "module_10782" /* 10782 */;
import _modDef10783 from "module_10783" /* 10783 */;
import _modDef10784 from "module_10784" /* 10784 */;
import _modDef10785 from "module_10785" /* 10785 */;
import _modDef10786 from "module_10786" /* 10786 */;
import _modDef10787 from "module_10787" /* 10787 */;
import _modDef10788 from "module_10788" /* 10788 */;
import _modDef10789 from "module_10789" /* 10789 */;
import _modDef10790 from "module_10790" /* 10790 */;
import _modDef10791 from "module_10791" /* 10791 */;
import _modDef10792 from "module_10792" /* 10792 */;
import _modDef10793 from "module_10793" /* 10793 */;
import _modDef10794 from "module_10794" /* 10794 */;
import _modDef10795 from "module_10795" /* 10795 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10772, medium: _modDef10773, large: _modDef10774 };
const obj2 = { small: _modDef10772, medium: _modDef10773, large: _modDef10774 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10775, medium: _modDef10776, large: _modDef10777 };
const obj3 = { small: _modDef10775, medium: _modDef10776, large: _modDef10777 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10778, medium: _modDef10779, large: _modDef10780 };
const obj4 = { small: _modDef10778, medium: _modDef10779, large: _modDef10780 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10781, medium: _modDef10782, large: _modDef10783 };
const obj5 = { small: _modDef10781, medium: _modDef10782, large: _modDef10783 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10784, medium: _modDef10785, large: _modDef10786 };
const obj6 = { small: _modDef10784, medium: _modDef10785, large: _modDef10786 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10787, medium: _modDef10788, large: _modDef10789 };
const obj7 = { small: _modDef10787, medium: _modDef10788, large: _modDef10789 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10790, medium: _modDef10791, large: _modDef10792 };
const obj8 = { small: _modDef10790, medium: _modDef10791, large: _modDef10792 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10793, medium: _modDef10794, large: _modDef10795 };
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