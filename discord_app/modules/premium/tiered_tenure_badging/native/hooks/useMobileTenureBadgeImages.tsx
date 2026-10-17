// === Module 10848: useMobileTenureBadgeImages ===

// Module 10848 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import _modDef10849 from "module_10849" /* 10849 */;
import _modDef10850 from "module_10850" /* 10850 */;
import _modDef10851 from "module_10851" /* 10851 */;
import _modDef10852 from "module_10852" /* 10852 */;
import _modDef10853 from "module_10853" /* 10853 */;
import _modDef10854 from "module_10854" /* 10854 */;
import _modDef10855 from "module_10855" /* 10855 */;
import _modDef10856 from "module_10856" /* 10856 */;
import _modDef10857 from "module_10857" /* 10857 */;
import _modDef10858 from "module_10858" /* 10858 */;
import _modDef10859 from "module_10859" /* 10859 */;
import _modDef10860 from "module_10860" /* 10860 */;
import _modDef10861 from "module_10861" /* 10861 */;
import _modDef10862 from "module_10862" /* 10862 */;
import _modDef10863 from "module_10863" /* 10863 */;
import _modDef10864 from "module_10864" /* 10864 */;
import _modDef10865 from "module_10865" /* 10865 */;
import _modDef10866 from "module_10866" /* 10866 */;
import _modDef10867 from "module_10867" /* 10867 */;
import _modDef10868 from "module_10868" /* 10868 */;
import _modDef10869 from "module_10869" /* 10869 */;
import _modDef10870 from "module_10870" /* 10870 */;
import _modDef10871 from "module_10871" /* 10871 */;
import _modDef10872 from "module_10872" /* 10872 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10849, medium: _modDef10850, large: _modDef10851 };
const obj2 = { small: _modDef10849, medium: _modDef10850, large: _modDef10851 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10852, medium: _modDef10853, large: _modDef10854 };
const obj3 = { small: _modDef10852, medium: _modDef10853, large: _modDef10854 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10855, medium: _modDef10856, large: _modDef10857 };
const obj4 = { small: _modDef10855, medium: _modDef10856, large: _modDef10857 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10858, medium: _modDef10859, large: _modDef10860 };
const obj5 = { small: _modDef10858, medium: _modDef10859, large: _modDef10860 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10861, medium: _modDef10862, large: _modDef10863 };
const obj6 = { small: _modDef10861, medium: _modDef10862, large: _modDef10863 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10864, medium: _modDef10865, large: _modDef10866 };
const obj7 = { small: _modDef10864, medium: _modDef10865, large: _modDef10866 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10867, medium: _modDef10868, large: _modDef10869 };
const obj8 = { small: _modDef10867, medium: _modDef10868, large: _modDef10869 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10870, medium: _modDef10871, large: _modDef10872 };
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