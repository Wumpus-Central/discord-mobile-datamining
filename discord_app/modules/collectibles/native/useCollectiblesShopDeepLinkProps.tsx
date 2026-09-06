// discord_app/modules/collectibles/native/useCollectiblesShopDeepLinkProps.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";
import CollectiblesShopStore from "../CollectiblesShopStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const useMemo = _mod19.useMemo;
let closure_5 = {};
const result = size.fileFinishedImporting("modules/collectibles/native/useCollectiblesShopDeepLinkProps.tsx");

export const useCollectiblesShopDeepLinkProps = function useCollectiblesShopDeepLinkProps(categories) {
  categories = categories.categories;
  const products = categories.products;
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
          isVariantProduct = categories(products[4]).getIsVariantProduct(productByStoreListingId);
          const obj2 = categories(products[4]);
        }
        initialVariantIndex = 0;
        initialBaseProductSkuId = initialProductSkuId;
        if (isVariantProduct) {
          initialBaseProductSkuId = productByStoreListingId.skuId;
          const _Math = Math;
          const variants = productByStoreListingId.variants;
          initialVariantIndex = Math.max(
            0,
            variants.findIndex((skuId) => skuId.skuId === initialProductSkuId),
          );
        }
      }
    }
    const categoryForProduct = obj.getCategoryForProduct(initialProductSkuId);
    initialCategorySkuId = undefined;
    if (categoryForProduct != null) {
      initialCategorySkuId = categoryForProduct.skuId;
    }
    return { initialCategorySkuId, initialBaseProductSkuId, initialVariantIndex };
  });
  let initialCategorySkuId = stateFromStoresObject.initialCategorySkuId;
  initialBaseProductSkuId = stateFromStoresObject.initialBaseProductSkuId;
  initialVariantIndex = stateFromStoresObject.initialVariantIndex;
  const items1 = [initialBaseProductSkuId, initialVariantIndex, initialCategorySkuId, products, categories];
  return initialCategorySkuId(() => {
    if (null != initialBaseProductSkuId) {
      if (null != initialCategorySkuId) {
        let obj = {
          initialProductSkuId: tmp,
          initialVariantIndex,
          initialCategorySkuId: tmp6,
          productIndex: null,
          categoryIndex: null,
        };
        let bound;
        if (null != products) {
          const _Math = Math;
          bound = Math.max(
            0,
            obj3.findIndex((skuId) => skuId.skuId === initialBaseProductSkuId),
          );
        }
        obj.productIndex = bound;
        obj = categories;
        let bound1;
        if (null != categories) {
          const _Math2 = Math;
          bound1 = Math.max(
            0,
            obj.findIndex((skuId) => skuId.skuId === initialCategorySkuId),
          );
        }
        obj.categoryIndex = bound1;
        obj3 = products;
      }
      return obj;
    }
    obj = closure_5;
  }, items1);
};
