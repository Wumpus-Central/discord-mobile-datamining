// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import registerAssetDefault from "registerAsset" /* 9471 */;
import metadataDefault from "metadata" /* 9472 */;
import metadataDefault2 from "metadata" /* 9473 */;
import registerAssetDefault2 from "registerAsset" /* 9474 */;
import metadataDefault3 from "metadata" /* 9475 */;
import metadataDefault4 from "metadata" /* 9476 */;
import registerAssetDefault3 from "registerAsset" /* 9477 */;
import metadataDefault5 from "metadata" /* 9478 */;
import metadataDefault6 from "metadata" /* 9479 */;
import registerAssetDefault4 from "registerAsset" /* 9480 */;
import metadataDefault7 from "metadata" /* 9481 */;
import metadataDefault8 from "metadata" /* 9482 */;
import registerAssetDefault5 from "registerAsset" /* 9483 */;
import metadataDefault9 from "metadata" /* 9484 */;
import metadataDefault10 from "metadata" /* 9485 */;
import registerAssetDefault6 from "registerAsset" /* 9486 */;
import metadataDefault11 from "metadata" /* 9487 */;
import metadataDefault12 from "metadata" /* 9488 */;
import registerAssetDefault7 from "registerAsset" /* 9489 */;
import metadataDefault13 from "metadata" /* 9490 */;
import metadataDefault14 from "metadata" /* 9491 */;
import registerAssetDefault8 from "registerAsset" /* 9492 */;
import metadataDefault15 from "metadata" /* 9493 */;
import metadataDefault16 from "metadata" /* 9494 */;

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