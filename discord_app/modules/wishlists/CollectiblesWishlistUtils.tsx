// discord_app/modules/wishlists/CollectiblesWishlistUtils.tsx
import { CollectiblesItemType } from "../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import { getItemRecordsFromPurchases } from "../collectibles/CollectiblesUtils.tsx";
let result = require("getItemRecordsFromPurchases").fileFinishedImporting("modules/wishlists/CollectiblesWishlistUtils.tsx");

export const getProductNameAndTypeFromSku = function getProductNameAndTypeFromSku(sku) {
  let name;
  let tenantMetadata;
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
  } else if (tmp2(1901).CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl = tmp2(1236).intl;
    obj = { product: null };
    obj[0] = name;
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1236).t.eR7moP, obj);
  } else {
    formatToPlainStringResult = name;
    if (tmp2(1901).CollectiblesItemType.NAMEPLATE === type) {
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
    let tmp5 = selectedProduct.type !== tmp(1901).CollectiblesItemType.EXTERNAL_SKU;
    if (tmp5) {
      let tmp6 = selectedProduct.type === tmp(1901).CollectiblesItemType.PROFILE_FRAME;
      if (tmp6) {
        tmp6 = !tmp(9240).getIsProfileFrameGiftingEnabled("isWishlistableCollectiblesProduct");
        const tmpResult = tmp(9240);
      }
      tmp5 = !tmp6;
    }
    tmp4 = tmp5;
  }
  return tmp4;
};