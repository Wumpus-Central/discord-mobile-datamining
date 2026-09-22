// === Module 9054: CollectiblesWishlistUtils ===

// Module 9054 (CollectiblesWishlistUtils)
import util from "util" /* 1115 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1973 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7799 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/wishlists/CollectiblesWishlistUtils.tsx");

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
    const intl2 = util.intl;
    const obj2 = { product: name };
    let formatToPlainStringResult = intl2.formatToPlainString(util.t.lvBzLi, obj2);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl = util.intl;
    const obj = { product: name };
    formatToPlainStringResult = intl.formatToPlainString(util.t.eR7moP, obj);
  } else {
    formatToPlainStringResult = name;
    if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
      const intl3 = util.intl;
      const obj3 = { product: name };
      formatToPlainStringResult = intl3.formatToPlainString(util.t.YFOwHj, obj3);
    }
  }
  return formatToPlainStringResult;
};
export const isWishlistableCollectiblesProduct = function isWishlistableCollectiblesProduct(selectedProduct) {
  const result = CollectiblesUtils.isPremiumCollectiblesProduct(selectedProduct);
  let tmp4 = !result;
  if (!result) {
    tmp4 = selectedProduct.type !== CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
  }
  return tmp4;
};