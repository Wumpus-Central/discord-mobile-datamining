// === Module 14627: useCollectiblesShopDeepLinkProps ===

// Module 14627 (useCollectiblesShopDeepLinkProps)
import { useMemo } from "noop";
import updateCategoriesAndProducts from "updateCategoriesAndProducts";
import items from "items";

let closure_5 = {};
const result = require("items").fileFinishedImporting("modules/collectibles/native/useCollectiblesShopDeepLinkProps.tsx");

export const useCollectiblesShopDeepLinkProps = function useCollectiblesShopDeepLinkProps(categories) {
  categories = categories.categories;
  const products = categories.products;
  let initialCategorySkuId;
  let initialBaseProductSkuId;
  let initialVariantIndex;
  const items = [initialBaseProductSkuId, initialVariantIndex];
  const stateFromStoresObject = categories(products[3]).useStateFromStoresObject(items, () => {
    const initialProductSkuId = initialVariantIndex.initialProductSkuId;
    const product = initialBaseProductSkuId.getProduct(initialProductSkuId);
    initialVariantIndex = 0;
    initialBaseProductSkuId = initialProductSkuId;
    if (null != product) {
      initialVariantIndex = 0;
      initialBaseProductSkuId = initialProductSkuId;
      if (null != product.variantGroupStoreListingId) {
        const productByStoreListingId = obj.getProductByStoreListingId(product.variantGroupStoreListingId);
        let isVariantProduct = null != productByStoreListingId;
        if (isVariantProduct) {
          isVariantProduct = initialProductSkuId(products[4]).getIsVariantProduct(productByStoreListingId);
          const obj2 = initialProductSkuId(products[4]);
        }
        initialVariantIndex = 0;
        initialBaseProductSkuId = initialProductSkuId;
        if (isVariantProduct) {
          initialBaseProductSkuId = productByStoreListingId.skuId;
          const _Math = Math;
          const variants = productByStoreListingId.variants;
          initialVariantIndex = Math.max(0, variants.findIndex((skuId) => skuId.skuId === initialProductSkuId));
        }
      }
    }
    const categoryForProduct = obj.getCategoryForProduct(initialProductSkuId);
    let initialCategorySkuId;
    if (categoryForProduct != null) {
      initialCategorySkuId = categoryForProduct.skuId;
    }
    return { initialCategorySkuId, initialBaseProductSkuId, initialVariantIndex };
  });
  initialCategorySkuId = stateFromStoresObject.initialCategorySkuId;
  initialBaseProductSkuId = stateFromStoresObject.initialBaseProductSkuId;
  initialVariantIndex = stateFromStoresObject.initialVariantIndex;
  const items1 = [initialBaseProductSkuId, initialVariantIndex, initialCategorySkuId, products, categories];
  return initialCategorySkuId(() => {
    if (null != initialBaseProductSkuId) {
      if (null != initialCategorySkuId) {
        let obj = { initialProductSkuId: null, initialVariantIndex: null, initialCategorySkuId: null, productIndex: null, categoryIndex: null };
        obj[0] = tmp;
        obj[1] = initialVariantIndex;
        obj[2] = tmp6;
        let bound;
        if (null != products) {
          const _Math = Math;
          bound = Math.max(0, obj3.findIndex((skuId) => skuId.skuId === updateCategoriesAndProducts));
        }
        obj[3] = bound;
        obj = categories;
        let bound1;
        if (null != categories) {
          const _Math2 = Math;
          bound1 = Math.max(0, obj.findIndex((skuId) => skuId.skuId === closure_2));
        }
        obj[4] = bound1;
        obj3 = products;
      }
      return obj;
    }
    obj = outer1_5;
  }, items1);
};