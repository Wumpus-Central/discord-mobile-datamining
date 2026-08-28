// === Module 8880: useMobileTenureBadgeImages ===

// Module 8880 (useMobileTenureBadgeImages)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1925 */;
import registerAssetDefault from "registerAsset" /* 8881 */;
import metadataDefault from "metadata" /* 8882 */;
import metadataDefault2 from "metadata" /* 8883 */;
import registerAssetDefault2 from "registerAsset" /* 8884 */;
import metadataDefault3 from "metadata" /* 8885 */;
import metadataDefault4 from "metadata" /* 8886 */;
import registerAssetDefault3 from "registerAsset" /* 8887 */;
import metadataDefault5 from "metadata" /* 8888 */;
import metadataDefault6 from "metadata" /* 8889 */;
import registerAssetDefault4 from "registerAsset" /* 8890 */;
import metadataDefault7 from "metadata" /* 8891 */;
import metadataDefault8 from "metadata" /* 8892 */;
import registerAssetDefault5 from "registerAsset" /* 8893 */;
import metadataDefault9 from "metadata" /* 8894 */;
import metadataDefault10 from "metadata" /* 8895 */;
import registerAssetDefault6 from "registerAsset" /* 8896 */;
import metadataDefault11 from "metadata" /* 8897 */;
import metadataDefault12 from "metadata" /* 8898 */;
import registerAssetDefault7 from "registerAsset" /* 8899 */;
import metadataDefault13 from "metadata" /* 8900 */;
import metadataDefault14 from "metadata" /* 8901 */;
import registerAssetDefault8 from "registerAsset" /* 8902 */;
import metadataDefault15 from "metadata" /* 8903 */;
import metadataDefault16 from "metadata" /* 8904 */;

const TieredTenureBadge = GuildFeatures.TieredTenureBadge;
let obj = {};
obj = { small: registerAssetDefault, medium: metadataDefault, large: metadataDefault2 };
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = obj;
obj = { small: registerAssetDefault2, medium: metadataDefault3, large: metadataDefault4 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = obj;
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: registerAssetDefault3, medium: metadataDefault5, large: metadataDefault6 };
const obj1 = { small: registerAssetDefault3, medium: metadataDefault5, large: metadataDefault6 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: registerAssetDefault4, medium: metadataDefault7, large: metadataDefault8 };
const obj2 = { small: registerAssetDefault4, medium: metadataDefault7, large: metadataDefault8 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: registerAssetDefault5, medium: metadataDefault9, large: metadataDefault10 };
const obj3 = { small: registerAssetDefault5, medium: metadataDefault9, large: metadataDefault10 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: registerAssetDefault6, medium: metadataDefault11, large: metadataDefault12 };
const obj4 = { small: registerAssetDefault6, medium: metadataDefault11, large: metadataDefault12 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: registerAssetDefault7, medium: metadataDefault13, large: metadataDefault14 };
const obj5 = { small: registerAssetDefault7, medium: metadataDefault13, large: metadataDefault14 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: registerAssetDefault8, medium: metadataDefault15, large: metadataDefault16 };
const obj6 = { small: registerAssetDefault8, medium: metadataDefault15, large: metadataDefault16 };
const result = set.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx");

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