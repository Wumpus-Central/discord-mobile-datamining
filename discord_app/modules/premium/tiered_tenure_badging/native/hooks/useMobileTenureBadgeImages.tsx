// === Module 11158: useMobileTenureBadgeImages ===

// Module 11158 (useMobileTenureBadgeImages)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1373 */;
import registerAssetDefault from "registerAsset" /* 11159 */;
import metadataDefault from "metadata" /* 11160 */;
import metadataDefault2 from "metadata" /* 11161 */;
import registerAssetDefault2 from "registerAsset" /* 11162 */;
import metadataDefault3 from "metadata" /* 11163 */;
import metadataDefault4 from "metadata" /* 11164 */;
import registerAssetDefault3 from "registerAsset" /* 11165 */;
import metadataDefault5 from "metadata" /* 11166 */;
import metadataDefault6 from "metadata" /* 11167 */;
import registerAssetDefault4 from "registerAsset" /* 11168 */;
import metadataDefault7 from "metadata" /* 11169 */;
import metadataDefault8 from "metadata" /* 11170 */;
import registerAssetDefault5 from "registerAsset" /* 11171 */;
import metadataDefault9 from "metadata" /* 11172 */;
import metadataDefault10 from "metadata" /* 11173 */;
import registerAssetDefault6 from "registerAsset" /* 11174 */;
import metadataDefault11 from "metadata" /* 11175 */;
import metadataDefault12 from "metadata" /* 11176 */;
import registerAssetDefault7 from "registerAsset" /* 11177 */;
import metadataDefault13 from "metadata" /* 11178 */;
import metadataDefault14 from "metadata" /* 11179 */;
import registerAssetDefault8 from "registerAsset" /* 11180 */;
import metadataDefault15 from "metadata" /* 11181 */;
import metadataDefault16 from "metadata" /* 11182 */;

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