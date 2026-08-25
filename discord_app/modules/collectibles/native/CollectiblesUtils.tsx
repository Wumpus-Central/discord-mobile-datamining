// === Module 9565: hasAtLeastOneGPlaySynced ===

// Module 9565 (hasAtLeastOneGPlaySynced)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4043 */;
import isPremiumGiftingSupported from "isPremiumGiftingSupported" /* 4056 */;
import updateProductDefault from "updateProduct" /* 5965 */;
import getProductOrbPrice from "getProductOrbPrice" /* 7159 */;
import getItemRecordsFromPurchases from "getItemRecordsFromPurchases" /* 7160 */;
import BalanceWidgetMode from "BalanceWidgetMode" /* 9566 */;
import metadataDefault from "metadata" /* 9567 */;

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
                    tmp4 = googleSkuIds[closure_3.MOBILE];
                  }
                  const product = callback2(tmp[3]).getProduct(tmp4);
                  const obj2 = callback2(tmp[3]);
                  const tmp2 = callback2;
                  const googleSkuIds2 = variants.googleSkuIds;
                  let tmp7;
                  if (googleSkuIds2 != null) {
                    tmp7 = googleSkuIds2[closure_3.MOBILE_PREMIUM_TIER_2];
                  }
                  everyResult = null != product && null != callback2(tmp[3]).getProduct(tmp7);
                  const tmp2Result = callback2(tmp[3]);
                }
                return everyResult;
              });
            } else {
              const googleSkuIds = variants.googleSkuIds;
              let tmp4;
              if (googleSkuIds != null) {
                tmp4 = googleSkuIds[closure_3.MOBILE];
              }
              const product = callback2(tmp[3]).getProduct(tmp4);
              const obj2 = callback2(tmp[3]);
              const tmp2 = callback2;
              const googleSkuIds2 = variants.googleSkuIds;
              let tmp7;
              if (googleSkuIds2 != null) {
                tmp7 = googleSkuIds2[closure_3.MOBILE_PREMIUM_TIER_2];
              }
              everyResult = null != product && null != callback2(tmp[3]).getProduct(tmp7);
              const tmp2Result = callback2(tmp[3]);
            }
            return everyResult;
          });
        } else {
          const googleSkuIds = variants.googleSkuIds;
          let tmp4;
          if (googleSkuIds != null) {
            tmp4 = googleSkuIds[closure_3.MOBILE];
          }
          const product = callback2(tmp[3]).getProduct(tmp4);
          const obj2 = callback2(tmp[3]);
          const tmp2 = callback2;
          const googleSkuIds2 = variants.googleSkuIds;
          let tmp7;
          if (googleSkuIds2 != null) {
            tmp7 = googleSkuIds2[closure_3.MOBILE_PREMIUM_TIER_2];
          }
          everyResult = null != product && null != callback2(tmp[3]).getProduct(tmp7);
          const tmp2Result = callback2(tmp[3]);
        }
        return everyResult;
      });
    } else {
      let googleSkuIds = variants.googleSkuIds;
      let tmp4;
      if (googleSkuIds != null) {
        tmp4 = googleSkuIds[closure_3.MOBILE];
      }
      let product = callback2(tmp[3]).getProduct(tmp4);
      let obj2 = callback2(tmp[3]);
      let tmp2 = callback2;
      let googleSkuIds2 = variants.googleSkuIds;
      let tmp7;
      if (googleSkuIds2 != null) {
        tmp7 = googleSkuIds2[closure_3.MOBILE_PREMIUM_TIER_2];
      }
      everyResult = null != product && null != callback2(tmp[3]).getProduct(tmp7);
      let tmp2Result = callback2(tmp[3]);
    }
    return everyResult;
  }).length > 0;
}
let closure_3 = ME.PriceSetAssignmentPurchaseTypes;
let result = set.fileFinishedImporting("modules/collectibles/native/CollectiblesUtils.tsx");

export const getFormattedPriceForCollectiblesProduct = function getFormattedPriceForCollectiblesProduct(googleSkuIds) {
  if (arg2) {
    if (arg1) {
      let MOBILE = tmp.MOBILE_PREMIUM_TIER_2;
      let tmp3 = tmp;
    } else {
      MOBILE = tmp.MOBILE;
      tmp3 = tmp;
    }
  } else {
    if (arg1) {
      let DEFAULT = tmp.PREMIUM_TIER_2;
      let tmp2 = tmp;
    } else {
      DEFAULT = tmp.DEFAULT;
      tmp2 = tmp;
    }
    let obj = isPremiumGiftingSupported;
    if (obj.isGooglePlayBillingSupported()) {
      if (DEFAULT === tmp2.MOBILE) {
        googleSkuIds = googleSkuIds.googleSkuIds;
        let tmp12;
        if (googleSkuIds != null) {
          tmp12 = googleSkuIds[DEFAULT];
        }
        const product = updateProductDefault.getProduct(tmp12);
        let tmp14;
        if (null != product) {
          obj = { amount: null, currency: null, priceString: null, tax: 0, taxInclusive: false };
          ({ price: obj4[0], currencyCode: obj4[1], priceString: obj4[2] } = product);
          tmp14 = obj;
        }
        let result = tmp14;
        const obj3 = updateProductDefault;
      } else {
        result = null;
      }
    } else {
      let tmp7Result = tmp7(7160);
      result = tmp7Result.extractPriceByPurchaseTypes(googleSkuIds, DEFAULT);
    }
    if (null == result) {
      return null;
    } else if (null != result.priceString) {
      let priceString = result.priceString;
    } else {
      tmp7Result = tmp7(5962);
      priceString = tmp7Result.formatPrice(result.amount, result.currency);
    }
  }
};
export const extractPriceByPurchaseTypes = function extractPriceByPurchaseTypes(googleSkuIds) {
  let obj = isPremiumGiftingSupported;
  if (obj.isGooglePlayBillingSupported()) {
    if (arg1 !== closure_3.MOBILE) {
      if (arg1 !== closure_3.MOBILE_PREMIUM_TIER_2) {
        return null;
      }
    }
    googleSkuIds = googleSkuIds.googleSkuIds;
    let tmp5;
    if (googleSkuIds != null) {
      tmp5 = googleSkuIds[arg1];
    }
    const product = updateProductDefault.getProduct(tmp5);
    let tmp7;
    if (null != product) {
      obj = { amount: null, currency: null, priceString: null, tax: 0, taxInclusive: false };
      ({ price: obj4[0], currencyCode: obj4[1], priceString: obj4[2] } = product);
      tmp7 = obj;
    }
    return tmp7;
  } else {
    return getItemRecordsFromPurchases.extractPriceByPurchaseTypes(googleSkuIds, arg1);
  }
  const tmp = require;
};
export const getCollectibleGoogleSkuId = function getCollectibleGoogleSkuId(closure_0, stateFromStores) {
  if (null == stateFromStores) {
    return null;
  } else {
    const obj = getPremiumPlanItemDefault;
    const googleSkuIds = closure_0.googleSkuIds;
    let tmp5;
    if (googleSkuIds != null) {
      tmp5 = googleSkuIds[obj.canUseShopDiscounts(obj, stateFromStores) ? tmp3.MOBILE_PREMIUM_TIER_2 : tmp3.MOBILE];
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
                      tmp4 = googleSkuIds[closure_3.MOBILE];
                    }
                    const product = callback2(tmp[3]).getProduct(tmp4);
                    const obj2 = callback2(tmp[3]);
                    const tmp2 = callback2;
                    const googleSkuIds2 = variants.googleSkuIds;
                    let tmp7;
                    if (googleSkuIds2 != null) {
                      tmp7 = googleSkuIds2[closure_3.MOBILE_PREMIUM_TIER_2];
                    }
                    everyResult = null != product && null != callback2(tmp[3]).getProduct(tmp7);
                    const tmp2Result = callback2(tmp[3]);
                  }
                  return everyResult;
                });
              } else {
                const googleSkuIds = variants.googleSkuIds;
                let tmp4;
                if (googleSkuIds != null) {
                  tmp4 = googleSkuIds[closure_3.MOBILE];
                }
                const product = callback2(tmp[3]).getProduct(tmp4);
                const obj2 = callback2(tmp[3]);
                const tmp2 = callback2;
                const googleSkuIds2 = variants.googleSkuIds;
                let tmp7;
                if (googleSkuIds2 != null) {
                  tmp7 = googleSkuIds2[closure_3.MOBILE_PREMIUM_TIER_2];
                }
                everyResult = null != product && null != callback2(tmp[3]).getProduct(tmp7);
                const tmp2Result = callback2(tmp[3]);
              }
              return everyResult;
            });
          } else {
            const googleSkuIds = variants.googleSkuIds;
            let tmp4;
            if (googleSkuIds != null) {
              tmp4 = googleSkuIds[closure_3.MOBILE];
            }
            const product = callback2(tmp[3]).getProduct(tmp4);
            const obj2 = callback2(tmp[3]);
            const tmp2 = callback2;
            const googleSkuIds2 = variants.googleSkuIds;
            let tmp7;
            if (googleSkuIds2 != null) {
              tmp7 = googleSkuIds2[closure_3.MOBILE_PREMIUM_TIER_2];
            }
            everyResult = null != product && null != callback2(tmp[3]).getProduct(tmp7);
            const tmp2Result = callback2(tmp[3]);
          }
          return everyResult;
        });
      } else {
        const googleSkuIds = variants.googleSkuIds;
        let tmp4;
        if (googleSkuIds != null) {
          tmp4 = googleSkuIds[closure_3.MOBILE];
        }
        const product = callback2(tmp[3]).getProduct(tmp4);
        const obj2 = callback2(tmp[3]);
        const tmp2 = callback2;
        const googleSkuIds2 = variants.googleSkuIds;
        let tmp7;
        if (googleSkuIds2 != null) {
          tmp7 = googleSkuIds2[closure_3.MOBILE_PREMIUM_TIER_2];
        }
        everyResult = null != product && null != callback2(tmp[3]).getProduct(tmp7);
        const tmp2Result = callback2(tmp[3]);
      }
      return everyResult;
    });
  } else {
    const googleSkuIds = variants.googleSkuIds;
    let tmp4;
    if (googleSkuIds != null) {
      tmp4 = googleSkuIds[closure_3.MOBILE];
    }
    const product = updateProductDefault.getProduct(tmp4);
    const obj2 = updateProductDefault;
    const tmp2 = importDefault;
    const googleSkuIds2 = variants.googleSkuIds;
    let tmp7;
    if (googleSkuIds2 != null) {
      tmp7 = googleSkuIds2[closure_3.MOBILE_PREMIUM_TIER_2];
    }
    const tmp2Result = updateProductDefault;
    return null != product && null != updateProductDefault.getProduct(tmp7);
  }
  obj = getProductOrbPrice;
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
      let tmp7 = hasAtLeastOneGPlaySynced;
      let tmp6 = nextResult;
      if (hasAtLeastOneGPlaySynced(nextResult)) {
        let tmp8 = nextResult;
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  }
};
export const filterHiddenCategories = function filterHiddenCategories(result) {
  return result.filter((unpublishedAt) => {
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
  return { id: BalanceWidgetMode.OrbBadges.ORB_PROFILE_BADGE, icon: BalanceWidgetMode.OrbBadges.ORB_PROFILE_BADGE, iconSrc: metadataDefault, description: "", isPreviewMode: true };
};