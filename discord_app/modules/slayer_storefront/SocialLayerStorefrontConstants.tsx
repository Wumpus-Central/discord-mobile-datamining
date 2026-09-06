// === Module 7229: SocialLayerStorefrontConstants ===

// Module 7229 (SocialLayerStorefrontConstants)
import UserStoreConstants from "UserStoreConstants" /* 1383 */;
import size from "module_2" /* 2 */;

const Environments = UserStoreConstants.Environments;
let str = "1193841000108531764";
if (window.GLOBAL_ENV.RELEASE_CHANNEL === Environments.STAGING) {
  str = "1438570979889512448";
}
let tmp2 = "1400977487940292751";
if (window.GLOBAL_ENV.RELEASE_CHANNEL === Environments.STAGING) {
  tmp2 = null;
}
const re0 = /^\/(?:channels\/\d+\/)?game-shop(?:\/|$)/;
const result = size.fileFinishedImporting("modules/slayer_storefront/SocialLayerStorefrontConstants.tsx");

export const STOREFRONT_MARKETING_GUILD_ID = str;
export const STOREFRONT_MARKETING_GUILD_ID_TEST = tmp2;
export const SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL_TYPE = "Social Layer Claim Purchased Item Modal";
export const SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL_TYPE = "Social Layer Gift Code Claim Modal";
export const SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_TYPE = "Social Layer Storefront Product Details Modal";
export const MARVEL_RIVALS_APPLICATION_ID = "1346069614634864772";
export const SOCIAL_LAYER_DAYS_TO_CLAIM_ITEM = 14;
export const getChannelsGameShopPrefix = function getChannelsGameShopPrefix(arg0) {
  return "/channels/" + arg0 + "/game-shop";
};
export const isGameShopPath = function isGameShopPath(pathname) {
  return re0.test(pathname);
};