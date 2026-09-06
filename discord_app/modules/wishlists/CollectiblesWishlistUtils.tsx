// === Module 8769: CollectiblesWishlistUtils ===

// Module 8769 (CollectiblesWishlistUtils)
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7554 */;
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
    const intl2 = tmp2(1114).intl;
    let obj = { product: name };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp2(1114).t.lvBzLi, obj);
  } else if (tmp2(1889).CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl = tmp2(1114).intl;
    obj = { product: name };
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1114).t.eR7moP, obj);
  } else {
    formatToPlainStringResult = name;
    if (tmp2(1889).CollectiblesItemType.NAMEPLATE === type) {
      const intl3 = tmp2(1114).intl;
      obj = { product: name };
      formatToPlainStringResult = intl3.formatToPlainString(tmp2(1114).t.YFOwHj, obj);
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