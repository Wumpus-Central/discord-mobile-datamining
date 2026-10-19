// === Module 10864: useMobileTenureBadgeImages ===

// Module 10864 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import _modDef10865 from "module_10865" /* 10865 */;
import _modDef10866 from "module_10866" /* 10866 */;
import _modDef10867 from "module_10867" /* 10867 */;
import _modDef10868 from "module_10868" /* 10868 */;
import _modDef10869 from "module_10869" /* 10869 */;
import _modDef10870 from "module_10870" /* 10870 */;
import _modDef10871 from "module_10871" /* 10871 */;
import _modDef10872 from "module_10872" /* 10872 */;
import _modDef10873 from "module_10873" /* 10873 */;
import _modDef10874 from "module_10874" /* 10874 */;
import _modDef10875 from "module_10875" /* 10875 */;
import _modDef10876 from "module_10876" /* 10876 */;
import _modDef10877 from "module_10877" /* 10877 */;
import _modDef10878 from "module_10878" /* 10878 */;
import _modDef10879 from "module_10879" /* 10879 */;
import _modDef10880 from "module_10880" /* 10880 */;
import _modDef10881 from "module_10881" /* 10881 */;
import _modDef10882 from "module_10882" /* 10882 */;
import _modDef10883 from "module_10883" /* 10883 */;
import _modDef10884 from "module_10884" /* 10884 */;
import _modDef10885 from "module_10885" /* 10885 */;
import _modDef10886 from "module_10886" /* 10886 */;
import _modDef10887 from "module_10887" /* 10887 */;
import _modDef10888 from "module_10888" /* 10888 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef10865, medium: _modDef10866, large: _modDef10867 };
const obj2 = { small: _modDef10865, medium: _modDef10866, large: _modDef10867 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef10868, medium: _modDef10869, large: _modDef10870 };
const obj3 = { small: _modDef10868, medium: _modDef10869, large: _modDef10870 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef10871, medium: _modDef10872, large: _modDef10873 };
const obj4 = { small: _modDef10871, medium: _modDef10872, large: _modDef10873 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef10874, medium: _modDef10875, large: _modDef10876 };
const obj5 = { small: _modDef10874, medium: _modDef10875, large: _modDef10876 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef10877, medium: _modDef10878, large: _modDef10879 };
const obj6 = { small: _modDef10877, medium: _modDef10878, large: _modDef10879 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef10880, medium: _modDef10881, large: _modDef10882 };
const obj7 = { small: _modDef10880, medium: _modDef10881, large: _modDef10882 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef10883, medium: _modDef10884, large: _modDef10885 };
const obj8 = { small: _modDef10883, medium: _modDef10884, large: _modDef10885 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef10886, medium: _modDef10887, large: _modDef10888 };
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