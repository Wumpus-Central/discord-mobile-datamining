// === Module 9507: useMobileTenureBadgeImages ===

// Module 9507 (useMobileTenureBadgeImages)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import registerAssetDefault from "registerAsset" /* 9508 */;
import metadataDefault from "metadata" /* 9509 */;
import metadataDefault2 from "metadata" /* 9510 */;
import registerAssetDefault2 from "registerAsset" /* 9511 */;
import metadataDefault3 from "metadata" /* 9512 */;
import metadataDefault4 from "metadata" /* 9513 */;
import registerAssetDefault3 from "registerAsset" /* 9514 */;
import metadataDefault5 from "metadata" /* 9515 */;
import metadataDefault6 from "metadata" /* 9516 */;
import registerAssetDefault4 from "registerAsset" /* 9517 */;
import metadataDefault7 from "metadata" /* 9518 */;
import metadataDefault8 from "metadata" /* 9519 */;
import registerAssetDefault5 from "registerAsset" /* 9520 */;
import metadataDefault9 from "metadata" /* 9521 */;
import metadataDefault10 from "metadata" /* 9522 */;
import registerAssetDefault6 from "registerAsset" /* 9523 */;
import metadataDefault11 from "metadata" /* 9524 */;
import metadataDefault12 from "metadata" /* 9525 */;
import registerAssetDefault7 from "registerAsset" /* 9526 */;
import metadataDefault13 from "metadata" /* 9527 */;
import metadataDefault14 from "metadata" /* 9528 */;
import registerAssetDefault8 from "registerAsset" /* 9529 */;
import metadataDefault15 from "metadata" /* 9530 */;
import metadataDefault16 from "metadata" /* 9531 */;

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