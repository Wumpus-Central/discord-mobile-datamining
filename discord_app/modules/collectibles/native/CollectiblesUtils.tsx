// === Module 8976: collectibles/CollectiblesUtils ===

// Module 8976 (collectibles/CollectiblesUtils)
import Constants from "Constants" /* 1074 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4297 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4310 */;
import PriceUtils from "PriceUtils" /* 7341 */;
import IAPStoreDefault from "IAPStore" /* 7344 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7660 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7661 */;
import types from "types" /* 8316 */;
import _modDef8977 from "module_8977" /* 8977 */;
import size from "module_2" /* 2 */;

function hasAtLeastOneGPlaySynced(nextResult) {
  const products = nextResult.products;
  return products.filter((variants) => {
    if (obj.getIsVariantProduct(variants)) {
      variants = variants.variants;
      let everyResult = variants.every((variants) => {
        if (obj.getIsVariantProduct(variants)) {
          variants = variants.variants;
          let everyResult = variants.every((variants) => {
            if (obj.getIsVariantProduct(variants)) {
              variants = variants.variants;
              let everyResult = variants.every((variants) => {
                if (obj.getIsVariantProduct(variants)) {
                  variants = variants.variants;
                  let everyResult = variants.every(() => { ... });
                } else {
                  const googleSkuIds = variants.googleSkuIds;
                  let tmp4;
                  if (googleSkuIds != null) {
                    tmp4 = googleSkuIds[closure_1_3.MOBILE];
                  }
                  const product = closure_1_1(dependencyMap[3]).getProduct(tmp4);
                  const obj2 = closure_1_1(dependencyMap[3]);
                  const googleSkuIds2 = variants.googleSkuIds;
                  let tmp7;
                  if (googleSkuIds2 != null) {
                    tmp7 = googleSkuIds2[closure_1_3.MOBILE_PREMIUM_TIER_2];
                  }
                  everyResult = null != product && null != closure_1_1(dependencyMap[3]).getProduct(tmp7);
                  const tmp2Result = closure_1_1(dependencyMap[3]);
                }
                return everyResult;
              });
            } else {
              const googleSkuIds = variants.googleSkuIds;
              let tmp4;
              if (googleSkuIds != null) {
                tmp4 = googleSkuIds[closure_1_3.MOBILE];
              }
              const product = closure_1_1(dependencyMap[3]).getProduct(tmp4);
              const obj2 = closure_1_1(dependencyMap[3]);
              const googleSkuIds2 = variants.googleSkuIds;
              let tmp7;
              if (googleSkuIds2 != null) {
                tmp7 = googleSkuIds2[closure_1_3.MOBILE_PREMIUM_TIER_2];
              }
              everyResult = null != product && null != closure_1_1(dependencyMap[3]).getProduct(tmp7);
              const tmp2Result = closure_1_1(dependencyMap[3]);
            }
            return everyResult;
          });
        } else {
          const googleSkuIds = variants.googleSkuIds;
          let tmp4;
          if (googleSkuIds != null) {
            tmp4 = googleSkuIds[closure_1_3.MOBILE];
          }
          const product = closure_1_1(dependencyMap[3]).getProduct(tmp4);
          const obj2 = closure_1_1(dependencyMap[3]);
          const googleSkuIds2 = variants.googleSkuIds;
          let tmp7;
          if (googleSkuIds2 != null) {
            tmp7 = googleSkuIds2[closure_1_3.MOBILE_PREMIUM_TIER_2];
          }
          everyResult = null != product && null != closure_1_1(dependencyMap[3]).getProduct(tmp7);
          const tmp2Result = closure_1_1(dependencyMap[3]);
        }
        return everyResult;
      });
    } else {
      let googleSkuIds = variants.googleSkuIds;
      let tmp4;
      if (googleSkuIds != null) {
        tmp4 = googleSkuIds[closure_1_3.MOBILE];
      }
      let product = IAPStoreDefault.getProduct(tmp4);
      let googleSkuIds2 = variants.googleSkuIds;
      let tmp7;
      if (googleSkuIds2 != null) {
        tmp7 = googleSkuIds2[closure_1_3.MOBILE_PREMIUM_TIER_2];
      }
      everyResult = null != product && null != IAPStoreDefault.getProduct(tmp7);
      let tmp2Result = IAPStoreDefault;
    }
    return everyResult;
  }).length > 0;
}
let closure_3 = Constants.PriceSetAssignmentPurchaseTypes;
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesUtils.tsx");

export const getFormattedPriceForCollectiblesProduct = function getFormattedPriceForCollectiblesProduct(googleSkuIds, hasShopDiscount, arg2) {
  if (arg2) {
    if (hasShopDiscount) {
      let MOBILE = closure_3.MOBILE_PREMIUM_TIER_2;
    } else {
      MOBILE = closure_3.MOBILE;
    }
  } else {
    if (hasShopDiscount) {
      let DEFAULT = closure_3.PREMIUM_TIER_2;
      let tmp2 = closure_3;
    } else {
      DEFAULT = closure_3.DEFAULT;
      tmp2 = closure_3;
    }
    if (obj.isGooglePlayBillingSupported()) {
      if (DEFAULT === tmp2.MOBILE) {
        googleSkuIds = googleSkuIds.googleSkuIds;
        let tmp12;
        if (googleSkuIds != null) {
          tmp12 = googleSkuIds[DEFAULT];
        }
        const product = IAPStoreDefault.getProduct(tmp12);
        let tmp14;
        if (null != product) {
          ({ price: obj4.amount, currencyCode: obj4.currency, priceString: obj4.priceString } = product);
          tmp14 = { amount: null, currency: null, priceString: null, tax: 0, taxInclusive: false };
          const obj2 = { amount: null, currency: null, priceString: null, tax: 0, taxInclusive: false };
        }
        let result = tmp14;
      } else {
        result = null;
      }
    } else {
      result = CollectiblesUtils.extractPriceByPurchaseTypes(googleSkuIds, DEFAULT);
      const tmp7Result = CollectiblesUtils;
    }
    if (null == result) {
      return null;
    } else if (null != result.priceString) {
      let priceString = result.priceString;
    } else {
      priceString = PriceUtils.formatPrice(result.amount, result.currency);
      const tmp7Result2 = PriceUtils;
    }
    obj = BillingPlatformUtils;
  }
};
export const extractPriceByPurchaseTypes = function extractPriceByPurchaseTypes(googleSkuIds, DEFAULT) {
  if (obj.isGooglePlayBillingSupported()) {
    if (DEFAULT !== closure_3.MOBILE) {
      if (DEFAULT !== closure_3.MOBILE_PREMIUM_TIER_2) {
        return null;
      }
    }
    googleSkuIds = googleSkuIds.googleSkuIds;
    let tmp5;
    if (googleSkuIds != null) {
      tmp5 = googleSkuIds[DEFAULT];
    }
    const product = IAPStoreDefault.getProduct(tmp5);
    let tmp7;
    if (null != product) {
      ({ price: obj4.amount, currencyCode: obj4.currency, priceString: obj4.priceString } = product);
      tmp7 = { amount: null, currency: null, priceString: null, tax: 0, taxInclusive: false };
      const obj2 = { amount: null, currency: null, priceString: null, tax: 0, taxInclusive: false };
    }
    return tmp7;
  } else {
    return CollectiblesUtils.extractPriceByPurchaseTypes(googleSkuIds, DEFAULT);
  }
  obj = BillingPlatformUtils;
};
export const getCollectibleGoogleSkuId = function getCollectibleGoogleSkuId(product, stateFromStores) {
  if (null == stateFromStores) {
    return null;
  } else {
    const obj = PremiumUtilsDefault;
    const googleSkuIds = product.googleSkuIds;
    let tmp5;
    if (googleSkuIds != null) {
      tmp5 = googleSkuIds[obj.canUseShopDiscounts(obj, stateFromStores) ? closure_3.MOBILE_PREMIUM_TIER_2 : closure_3.MOBILE];
    }
    if (tmp5 == null) {
      tmp5 = null;
    }
    return tmp5;
  }
};
export const isGPlaySynced = function isGPlaySynced(variants) {
  if (obj.getIsVariantProduct(variants)) {
    variants = variants.variants;
    return variants.every((variants) => {
      if (obj.getIsVariantProduct(variants)) {
        variants = variants.variants;
        let everyResult = variants.every((variants) => {
          if (obj.getIsVariantProduct(variants)) {
            variants = variants.variants;
            let everyResult = variants.every((variants) => {
              if (obj.getIsVariantProduct(variants)) {
                variants = variants.variants;
                let everyResult = variants.every((variants) => {
                  if (obj.getIsVariantProduct(variants)) {
                    variants = variants.variants;
                    let everyResult = variants.every(() => { ... });
                  } else {
                    const googleSkuIds = variants.googleSkuIds;
                    let tmp4;
                    if (googleSkuIds != null) {
                      tmp4 = googleSkuIds[closure_1_3.MOBILE];
                    }
                    const product = closure_1_1(dependencyMap[3]).getProduct(tmp4);
                    const obj2 = closure_1_1(dependencyMap[3]);
                    const googleSkuIds2 = variants.googleSkuIds;
                    let tmp7;
                    if (googleSkuIds2 != null) {
                      tmp7 = googleSkuIds2[closure_1_3.MOBILE_PREMIUM_TIER_2];
                    }
                    everyResult = null != product && null != closure_1_1(dependencyMap[3]).getProduct(tmp7);
                    const tmp2Result = closure_1_1(dependencyMap[3]);
                  }
                  return everyResult;
                });
              } else {
                const googleSkuIds = variants.googleSkuIds;
                let tmp4;
                if (googleSkuIds != null) {
                  tmp4 = googleSkuIds[closure_1_3.MOBILE];
                }
                const product = closure_1_1(dependencyMap[3]).getProduct(tmp4);
                const obj2 = closure_1_1(dependencyMap[3]);
                const googleSkuIds2 = variants.googleSkuIds;
                let tmp7;
                if (googleSkuIds2 != null) {
                  tmp7 = googleSkuIds2[closure_1_3.MOBILE_PREMIUM_TIER_2];
                }
                everyResult = null != product && null != closure_1_1(dependencyMap[3]).getProduct(tmp7);
                const tmp2Result = closure_1_1(dependencyMap[3]);
              }
              return everyResult;
            });
          } else {
            const googleSkuIds = variants.googleSkuIds;
            let tmp4;
            if (googleSkuIds != null) {
              tmp4 = googleSkuIds[closure_1_3.MOBILE];
            }
            const product = closure_1_1(dependencyMap[3]).getProduct(tmp4);
            const obj2 = closure_1_1(dependencyMap[3]);
            const googleSkuIds2 = variants.googleSkuIds;
            let tmp7;
            if (googleSkuIds2 != null) {
              tmp7 = googleSkuIds2[closure_1_3.MOBILE_PREMIUM_TIER_2];
            }
            everyResult = null != product && null != closure_1_1(dependencyMap[3]).getProduct(tmp7);
            const tmp2Result = closure_1_1(dependencyMap[3]);
          }
          return everyResult;
        });
      } else {
        const googleSkuIds = variants.googleSkuIds;
        let tmp4;
        if (googleSkuIds != null) {
          tmp4 = googleSkuIds[closure_1_3.MOBILE];
        }
        const product = closure_1_1(dependencyMap[3]).getProduct(tmp4);
        const obj2 = closure_1_1(dependencyMap[3]);
        const googleSkuIds2 = variants.googleSkuIds;
        let tmp7;
        if (googleSkuIds2 != null) {
          tmp7 = googleSkuIds2[closure_1_3.MOBILE_PREMIUM_TIER_2];
        }
        everyResult = null != product && null != closure_1_1(dependencyMap[3]).getProduct(tmp7);
        const tmp2Result = closure_1_1(dependencyMap[3]);
      }
      return everyResult;
    });
  } else {
    const googleSkuIds = variants.googleSkuIds;
    let tmp4;
    if (googleSkuIds != null) {
      tmp4 = googleSkuIds[closure_3.MOBILE];
    }
    const product = IAPStoreDefault.getProduct(tmp4);
    const googleSkuIds2 = variants.googleSkuIds;
    let tmp7;
    if (googleSkuIds2 != null) {
      tmp7 = googleSkuIds2[closure_3.MOBILE_PREMIUM_TIER_2];
    }
    const tmp2Result = IAPStoreDefault;
    return null != product && null != IAPStoreDefault.getProduct(tmp7);
  }
  obj = CollectiblesProductUtils;
};
export const filterGPlaySyncedCategories = function filterGPlaySyncedCategories(items) {
  if (null == items) {
    return [];
  } else {
    items = [];
    const values = items.values();
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp6 = nextResult;
      if (hasAtLeastOneGPlaySynced(nextResult)) {
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  }
};
export const filterHiddenCategories = function filterHiddenCategories(arr) {
  return arr.filter((unpublishedAt) => {
    let tmp = null == unpublishedAt.unpublishedAt;
    if (!tmp) {
      const _Date = Date;
      const date = new Date();
      tmp = unpublishedAt.unpublishedAt > date;
    }
    if (tmp) {
      tmp = unpublishedAt.products.length > 0;
    }
    return tmp;
  });
};
export const createOrbProfileBadge = function createOrbProfileBadge() {
  return { id: types.OrbBadges.ORB_PROFILE_BADGE, icon: types.OrbBadges.ORB_PROFILE_BADGE, iconSrc: _modDef8977, description: "", isPreviewMode: true };
};