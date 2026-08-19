// === Module 9178: getProductNameAndTypeFromSku ===

// Module 9178 (getProductNameAndTypeFromSku)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1949 */;
import getItemRecordsFromPurchases from "getItemRecordsFromPurchases" /* 5313 */;

let result = obj132.fileFinishedImporting("modules/wishlists/CollectiblesWishlistUtils.tsx");

export const getProductNameAndTypeFromSku = function getProductNameAndTypeFromSku(sku) {
  ({ name, tenantMetadata } = sku);
  let type;
  if (tenantMetadata != null) {
    const collectibles = tenantMetadata.collectibles;
    if (collectibles != null) {
      type = collectibles.type;
    }
  }
  if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl2 = getSystemLocale.intl;
    let obj = { product: null };
    obj[0] = name;
    let formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale.t.lvBzLi, obj);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl = getSystemLocale.intl;
    obj = { product: null };
    obj[0] = name;
    formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t.eR7moP, obj);
  } else {
    formatToPlainStringResult = name;
    if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
      const intl3 = getSystemLocale.intl;
      obj = { product: null };
      obj[0] = name;
      formatToPlainStringResult = intl3.formatToPlainString(getSystemLocale.t.YFOwHj, obj);
    }
  }
  return formatToPlainStringResult;
};
export const isWishlistableCollectiblesProduct = function isWishlistableCollectiblesProduct(selectedProduct) {
  const result = getItemRecordsFromPurchases.isPremiumCollectiblesProduct(selectedProduct);
  let tmp4 = !result;
  if (!result) {
    tmp4 = selectedProduct.type !== CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
  }
  return tmp4;
};