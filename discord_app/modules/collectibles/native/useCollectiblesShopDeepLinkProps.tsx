// discord_app/modules/collectibles/native/useCollectiblesShopDeepLinkProps.tsx
import react from "../../../../_runtime/00019_react.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";
import CollectiblesShopStore from "../CollectiblesShopStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let skuId1, tmp6;

const useMemo = react.useMemo;
let closure_5 = {};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let categories;
      let initialBaseProductSkuId;
      let initialCategorySkuId;
      let products;
      let tmp4;
      let tmp5;
      const obj = initialCategorySkuId(initialBaseProductSkuId[4]);
      const cResult = obj.c(14);
      ({ categories, products } = arg0);
      const tmp = initialCategorySkuId;
      const tmp2 = initialBaseProductSkuId;
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
                  initialVariantIndex = Math.max(
                    0,
                    variants.findIndex((skuId) => skuId.skuId === initialProductSkuId),
                  );
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
      const tmpResult = tmp(tmp2[6]);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, I);
      initialCategorySkuId = stateFromStoresObject.initialCategorySkuId;
      initialBaseProductSkuId = stateFromStoresObject.initialBaseProductSkuId;
      let initialVariantIndex = stateFromStoresObject.initialVariantIndex;
      if (null != initialBaseProductSkuId) {
        let tmp9;
        if (null != initialCategorySkuId) {
          if (cResult[2] === initialBaseProductSkuId) {
            let tmp10;
            if (cResult[3] === products) {
              tmp10 = cResult[4];
            }
            if (cResult[5] === categories) {
              let tmp12;
              if (cResult[6] === initialCategorySkuId) {
                tmp12 = cResult[7];
              }
              if (cResult[8] === initialBaseProductSkuId) {
                if (cResult[9] === initialCategorySkuId) {
                  if (cResult[10] === initialVariantIndex) {
                    if (cResult[11] === tmp10) {
                      let tmp14;
                      if (cResult[12] === tmp12) {
                        tmp14 = cResult[13];
                      }
                      tmp9 = tmp14;
                    }
                  }
                }
              }
              let obj2 = {
                initialProductSkuId: initialBaseProductSkuId,
                initialVariantIndex,
                initialCategorySkuId: null,
                productIndex: tmp10,
                categoryIndex: tmp12,
              };
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
                        initialVariantIndex = Math.max(
                          0,
                          variants.findIndex((skuId) => skuId.skuId === initialProductSkuId),
                        );
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
              cResult[8] = initialBaseProductSkuId;
              cResult[9] = initialCategorySkuId;
              cResult[10] = initialVariantIndex;
              cResult[11] = tmp10;
              cResult[12] = tmp12;
              cResult[13] = obj2;
              tmp14 = obj2;
            }
            let bound;
            if (null != categories) {
              const _Math2 = Math;
              bound = Math.max(
                0,
                categories.findIndex((skuId) => skuId.skuId === initialCategorySkuId),
              );
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
                      initialVariantIndex = Math.max(
                        0,
                        variants.findIndex((skuId) => skuId.skuId === initialProductSkuId),
                      );
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
            tmp12 = bound;
          }
          let bound1;
          if (null != products) {
            let _Math = Math;
            bound1 = Math.max(
              0,
              products.findIndex((skuId) => skuId.skuId === initialBaseProductSkuId),
            );
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
                    initialVariantIndex = Math.max(
                      0,
                      variants.findIndex((skuId) => skuId.skuId === initialProductSkuId),
                    );
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
          tmp10 = bound1;
        }
        return tmp9;
      }
      tmp9 = closure_5;
    }
  : (categories) => {
      categories = categories.categories;
      const products = categories.products;
      let initialBaseProductSkuId;
      let initialVariantIndex;
      const obj = categories(products[6]);
      const items = [initialBaseProductSkuId, initialVariantIndex];
      const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
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
              const obj2 = categories(products[5]);
              isVariantProduct = obj2.getIsVariantProduct(productByStoreListingId);
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
        let bound;
        let bound1;
        if (null != initialBaseProductSkuId) {
          let obj2;
          if (null != initialCategorySkuId) {
            obj2 = {
              initialProductSkuId: tmp,
              initialVariantIndex,
              initialCategorySkuId: tmp6,
              productIndex: bound,
              categoryIndex: bound1,
            };
            bound = undefined;
            if (null != products) {
              const _Math = Math;
              bound = Math.max(
                0,
                products.findIndex((skuId) => skuId.skuId === initialBaseProductSkuId),
              );
            }
            bound1 = undefined;
            if (null != categories) {
              const _Math2 = Math;
              bound1 = Math.max(
                0,
                categories.findIndex((skuId) => skuId.skuId === initialCategorySkuId),
              );
            }
          }
          return obj2;
        }
        obj2 = closure_5;
      }, items1);
    };
const result = size.fileFinishedImporting("modules/collectibles/native/useCollectiblesShopDeepLinkProps.tsx");

export const useCollectiblesShopDeepLinkProps = tmp2;
