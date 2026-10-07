// === Module 15744: useCollectiblesShopDeepLinkProps ===

// Module 15744 (useCollectiblesShopDeepLinkProps)
import _mod19 from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7066 */;
import CollectiblesShopStore from "CollectiblesShopStore" /* 7082 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useMemo = _mod19.useMemo;
let closure_5 = {};
const result = size.fileFinishedImporting("modules/collectibles/native/useCollectiblesShopDeepLinkProps.tsx");

export const useCollectiblesShopDeepLinkProps = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = initialCategorySkuId(initialBaseProductSkuId[4]).c(14);
  ({ categories, products } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesCategoryStore, CollectiblesShopStore];
    class I {
      constructor() {
        initialProductSkuId = closure_1_4.initialProductSkuId;
        obj = closure_1_3;
        product = closure_1_3.getProduct(initialProductSkuId);
        initialVariantIndex = 0;
        initialBaseProductSkuId = initialProductSkuId;
        if (null != product) {
          initialVariantIndex = 0;
          initialBaseProductSkuId = initialProductSkuId;
          if (null != product.variantGroupStoreListingId) {
            productByStoreListingId = obj.getProductByStoreListingId(product.variantGroupStoreListingId);
            isVariantProduct = null != productByStoreListingId;
            if (isVariantProduct) {
              tmp4 = initialCategorySkuId;
              tmp5 = initialBaseProductSkuId;
              obj2 = initialCategorySkuId(initialBaseProductSkuId[5]);
              isVariantProduct = obj2.getIsVariantProduct(productByStoreListingId);
            }
            initialVariantIndex = 0;
            initialBaseProductSkuId = initialProductSkuId;
            if (isVariantProduct) {
              initialBaseProductSkuId = productByStoreListingId.skuId;
              tmp6 = globalThis;
              _Math = Math;
              variants = productByStoreListingId.variants;
              initialVariantIndex = Math.max(0, variants.findIndex((skuId) => skuId.skuId === initialProductSkuId));
            }
          }
        }
        categoryForProduct = obj.getCategoryForProduct(initialProductSkuId);
        skuId1 = undefined;
        if (categoryForProduct != null) {
          skuId1 = categoryForProduct.skuId;
        }
        return { initialCategorySkuId: skuId1, initialBaseProductSkuId, initialVariantIndex };
      }
    }
    cResult[0] = items;
    cResult[1] = I;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = initialCategorySkuId(initialBaseProductSkuId[4]);
  const stateFromStoresObject = initialCategorySkuId(initialBaseProductSkuId[6]).useStateFromStoresObject(tmp4, I);
  initialCategorySkuId = stateFromStoresObject.initialCategorySkuId;
  initialBaseProductSkuId = stateFromStoresObject.initialBaseProductSkuId;
  let initialVariantIndex = stateFromStoresObject.initialVariantIndex;
  if (null != initialBaseProductSkuId) {
    if (null != initialCategorySkuId) {
      if (cResult[2] === initialBaseProductSkuId) {
        if (cResult[3] === products) {
          let tmp9 = cResult[4];
        }
        if (cResult[5] === categories) {
          if (cResult[6] === initialCategorySkuId) {
            let tmp11 = cResult[7];
          }
          if (cResult[8] === initialBaseProductSkuId) {
            if (cResult[9] === initialCategorySkuId) {
              if (cResult[10] === initialVariantIndex) {
                if (cResult[11] === tmp9) {
                }
              }
            }
          }
          let obj2 = { initialProductSkuId: initialBaseProductSkuId, initialVariantIndex, initialCategorySkuId: null, productIndex: null, categoryIndex: null };
          class I {
            constructor() {
              initialProductSkuId = closure_1_4.initialProductSkuId;
              obj = closure_1_3;
              product = closure_1_3.getProduct(initialProductSkuId);
              initialVariantIndex = 0;
              initialBaseProductSkuId = initialProductSkuId;
              if (null != product) {
                initialVariantIndex = 0;
                initialBaseProductSkuId = initialProductSkuId;
                if (null != product.variantGroupStoreListingId) {
                  productByStoreListingId = obj.getProductByStoreListingId(product.variantGroupStoreListingId);
                  isVariantProduct = null != productByStoreListingId;
                  if (isVariantProduct) {
                    tmp4 = initialCategorySkuId;
                    tmp5 = initialBaseProductSkuId;
                    obj2 = initialCategorySkuId(initialBaseProductSkuId[5]);
                    isVariantProduct = obj2.getIsVariantProduct(productByStoreListingId);
                  }
                  initialVariantIndex = 0;
                  initialBaseProductSkuId = initialProductSkuId;
                  if (isVariantProduct) {
                    initialBaseProductSkuId = productByStoreListingId.skuId;
                    tmp6 = globalThis;
                    _Math = Math;
                    variants = productByStoreListingId.variants;
                    initialVariantIndex = Math.max(0, variants.findIndex((skuId) => skuId.skuId === initialProductSkuId));
                  }
                }
              }
              categoryForProduct = obj.getCategoryForProduct(initialProductSkuId);
              skuId1 = undefined;
              if (categoryForProduct != null) {
                skuId1 = categoryForProduct.skuId;
              }
              return { initialCategorySkuId: skuId1, initialBaseProductSkuId, initialVariantIndex };
            }
          }
          obj2.productIndex = tmp9;
          obj2.categoryIndex = tmp11;
          cResult[8] = initialBaseProductSkuId;
          cResult[9] = initialCategorySkuId;
          cResult[10] = initialVariantIndex;
          cResult[11] = tmp9;
          cResult[12] = tmp11;
          cResult[13] = obj2;
        }
        let bound;
        if (null != categories) {
          const _Math2 = Math;
          bound = Math.max(0, categories.findIndex((skuId) => skuId.skuId === initialCategorySkuId));
        }
        class I {
          constructor() {
            initialProductSkuId = closure_1_4.initialProductSkuId;
            obj = closure_1_3;
            product = closure_1_3.getProduct(initialProductSkuId);
            initialVariantIndex = 0;
            initialBaseProductSkuId = initialProductSkuId;
            if (null != product) {
              initialVariantIndex = 0;
              initialBaseProductSkuId = initialProductSkuId;
              if (null != product.variantGroupStoreListingId) {
                productByStoreListingId = obj.getProductByStoreListingId(product.variantGroupStoreListingId);
                isVariantProduct = null != productByStoreListingId;
                if (isVariantProduct) {
                  tmp4 = initialCategorySkuId;
                  tmp5 = initialBaseProductSkuId;
                  obj2 = initialCategorySkuId(initialBaseProductSkuId[5]);
                  isVariantProduct = obj2.getIsVariantProduct(productByStoreListingId);
                }
                initialVariantIndex = 0;
                initialBaseProductSkuId = initialProductSkuId;
                if (isVariantProduct) {
                  initialBaseProductSkuId = productByStoreListingId.skuId;
                  tmp6 = globalThis;
                  _Math = Math;
                  variants = productByStoreListingId.variants;
                  initialVariantIndex = Math.max(0, variants.findIndex((skuId) => skuId.skuId === initialProductSkuId));
                }
              }
            }
            categoryForProduct = obj.getCategoryForProduct(initialProductSkuId);
            skuId1 = undefined;
            if (categoryForProduct != null) {
              skuId1 = categoryForProduct.skuId;
            }
            return { initialCategorySkuId: skuId1, initialBaseProductSkuId, initialVariantIndex };
          }
        }
        cResult[6] = initialCategorySkuId;
        cResult[7] = bound;
        tmp11 = bound;
      }
      let bound1;
      if (null != products) {
        let _Math = Math;
        bound1 = Math.max(0, products.findIndex((skuId) => skuId.skuId === initialBaseProductSkuId));
      }
      cResult[2] = initialBaseProductSkuId;
      class I {
        constructor() {
          initialProductSkuId = closure_1_4.initialProductSkuId;
          obj = closure_1_3;
          product = closure_1_3.getProduct(initialProductSkuId);
          initialVariantIndex = 0;
          initialBaseProductSkuId = initialProductSkuId;
          if (null != product) {
            initialVariantIndex = 0;
            initialBaseProductSkuId = initialProductSkuId;
            if (null != product.variantGroupStoreListingId) {
              productByStoreListingId = obj.getProductByStoreListingId(product.variantGroupStoreListingId);
              isVariantProduct = null != productByStoreListingId;
              if (isVariantProduct) {
                tmp4 = initialCategorySkuId;
                tmp5 = initialBaseProductSkuId;
                obj2 = initialCategorySkuId(initialBaseProductSkuId[5]);
                isVariantProduct = obj2.getIsVariantProduct(productByStoreListingId);
              }
              initialVariantIndex = 0;
              initialBaseProductSkuId = initialProductSkuId;
              if (isVariantProduct) {
                initialBaseProductSkuId = productByStoreListingId.skuId;
                tmp6 = globalThis;
                _Math = Math;
                variants = productByStoreListingId.variants;
                initialVariantIndex = Math.max(0, variants.findIndex((skuId) => skuId.skuId === initialProductSkuId));
              }
            }
          }
          categoryForProduct = obj.getCategoryForProduct(initialProductSkuId);
          skuId1 = undefined;
          if (categoryForProduct != null) {
            skuId1 = categoryForProduct.skuId;
          }
          return { initialCategorySkuId: skuId1, initialBaseProductSkuId, initialVariantIndex };
        }
      }
      cResult[3] = products;
      cResult[4] = bound1;
      tmp9 = bound1;
    }
  }
  return closure_5;
}) : ((categories) => {
  categories = categories.categories;
  const products = categories.products;
  let initialBaseProductSkuId;
  let initialVariantIndex;
  const items = [initialBaseProductSkuId, initialVariantIndex];
  const stateFromStoresObject = categories(products[6]).useStateFromStoresObject(items, () => {
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
          isVariantProduct = categories(products[5]).getIsVariantProduct(productByStoreListingId);
          const obj2 = categories(products[5]);
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
        let obj2 = { initialProductSkuId: tmp, initialVariantIndex, initialCategorySkuId: tmp6, productIndex: null, categoryIndex: null };
        let bound;
        if (null != products) {
          const _Math = Math;
          bound = Math.max(0, products.findIndex((skuId) => skuId.skuId === initialBaseProductSkuId));
        }
        obj2.productIndex = bound;
        let bound1;
        if (null != categories) {
          const _Math2 = Math;
          bound1 = Math.max(0, categories.findIndex((skuId) => skuId.skuId === initialCategorySkuId));
        }
        obj2.categoryIndex = bound1;
      }
      return obj2;
    }
    obj2 = closure_5;
  }, items1);
});