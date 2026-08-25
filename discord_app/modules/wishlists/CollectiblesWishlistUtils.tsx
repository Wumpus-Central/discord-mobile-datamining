// === Module 9498: getProductNameAndTypeFromSku ===

// Module 9498 (getProductNameAndTypeFromSku)
import set from "set" /* 2 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1950 */;
import getItemRecordsFromPurchases from "getItemRecordsFromPurchases" /* 7160 */;

let result = set.fileFinishedImporting("modules/wishlists/CollectiblesWishlistUtils.tsx");

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
    const intl2 = tmp2(1236).intl;
    let obj = { product: null };
    obj[0] = name;
    let formatToPlainStringResult = intl2.formatToPlainString(tmp2(1236).t.lvBzLi, obj);
  } else if (tmp2(1950).CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl = tmp2(1236).intl;
    obj = { product: null };
    obj[0] = name;
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1236).t.eR7moP, obj);
  } else {
    formatToPlainStringResult = name;
    if (tmp2(1950).CollectiblesItemType.NAMEPLATE === type) {
      const intl3 = tmp2(1236).intl;
      obj = { product: null };
      obj[0] = name;
      formatToPlainStringResult = intl3.formatToPlainString(tmp2(1236).t.YFOwHj, obj);
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