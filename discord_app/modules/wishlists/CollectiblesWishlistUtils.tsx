// discord_app/modules/wishlists/CollectiblesWishlistUtils.tsx
import util from "../../intl/index.native.tsx";
import CollectiblesItemType from "../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import CollectiblesUtils from "../collectibles/CollectiblesUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
    let obj = { product: name };
    let formatToPlainStringResult = intl2.formatToPlainString(util.t.lvBzLi, obj);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl = util.intl;
    obj = { product: name };
    formatToPlainStringResult = intl.formatToPlainString(util.t.eR7moP, obj);
  } else {
    formatToPlainStringResult = name;
    if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
      const intl3 = util.intl;
      obj = { product: name };
      formatToPlainStringResult = intl3.formatToPlainString(util.t.YFOwHj, obj);
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
