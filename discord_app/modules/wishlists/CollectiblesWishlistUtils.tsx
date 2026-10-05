// discord_app/modules/wishlists/CollectiblesWishlistUtils.tsx
import intl4 from "../../intl/index.native.tsx";
import CollectiblesItemType from "../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import CollectiblesUtils from "../collectibles/CollectiblesUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/wishlists/CollectiblesWishlistUtils.tsx");

export const getProductNameAndTypeFromSku = function getProductNameAndTypeFromSku(sku) {
  let formatToPlainStringResult;
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
    const intl2 = intl4.intl;
    const obj2 = { product: name };
    formatToPlainStringResult = intl2.formatToPlainString(intl4.t.lvBzLi, obj2);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl = intl4.intl;
    const obj = { product: name };
    formatToPlainStringResult = intl.formatToPlainString(intl4.t.eR7moP, obj);
  } else {
    formatToPlainStringResult = name;
    if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
      const intl3 = intl4.intl;
      const obj3 = { product: name };
      formatToPlainStringResult = intl3.formatToPlainString(intl4.t.YFOwHj, obj3);
    }
  }
  return formatToPlainStringResult;
};
export const isWishlistableCollectiblesProduct = function isWishlistableCollectiblesProduct(selectedProduct) {
  const obj = CollectiblesUtils;
  const result = obj.isPremiumCollectiblesProduct(selectedProduct);
  const tmp4 = !result && selectedProduct.type !== CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
  return tmp4;
};
