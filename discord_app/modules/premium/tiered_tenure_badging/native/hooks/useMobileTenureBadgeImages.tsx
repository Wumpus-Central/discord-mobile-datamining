// === Module 10849: useMobileTenureBadgeImages ===

// Module 10849 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1379 */;
import AssetRegistryDefault from "AssetRegistry" /* 10850 */;
import _modDef10851 from "module_10851" /* 10851 */;
import _modDef10852 from "module_10852" /* 10852 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10853 */;
import _modDef10854 from "module_10854" /* 10854 */;
import _modDef10855 from "module_10855" /* 10855 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10856 */;
import _modDef10857 from "module_10857" /* 10857 */;
import _modDef10858 from "module_10858" /* 10858 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10859 */;
import _modDef10860 from "module_10860" /* 10860 */;
import _modDef10861 from "module_10861" /* 10861 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10862 */;
import _modDef10863 from "module_10863" /* 10863 */;
import _modDef10864 from "module_10864" /* 10864 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 10865 */;
import _modDef10866 from "module_10866" /* 10866 */;
import _modDef10867 from "module_10867" /* 10867 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 10868 */;
import _modDef10869 from "module_10869" /* 10869 */;
import _modDef10870 from "module_10870" /* 10870 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 10871 */;
import _modDef10872 from "module_10872" /* 10872 */;
import _modDef10873 from "module_10873" /* 10873 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef10851, large: _modDef10852 };
({ small: AssetRegistryDefault, medium: _modDef10851, large: _modDef10852 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef10854, large: _modDef10855 };
({ small: AssetRegistryDefault2, medium: _modDef10854, large: _modDef10855 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef10857, large: _modDef10858 };
({ small: AssetRegistryDefault3, medium: _modDef10857, large: _modDef10858 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef10860, large: _modDef10861 };
({ small: AssetRegistryDefault4, medium: _modDef10860, large: _modDef10861 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef10863, large: _modDef10864 };
({ small: AssetRegistryDefault5, medium: _modDef10863, large: _modDef10864 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef10866, large: _modDef10867 };
({ small: AssetRegistryDefault6, medium: _modDef10866, large: _modDef10867 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef10869, large: _modDef10870 };
({ small: AssetRegistryDefault7, medium: _modDef10869, large: _modDef10870 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef10872, large: _modDef10873 };
({ small: AssetRegistryDefault8, medium: _modDef10872, large: _modDef10873 });
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