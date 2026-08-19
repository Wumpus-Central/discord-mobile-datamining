// === Module 9249: hasAtLeastOneGPlaySynced ===

// Module 9249 (hasAtLeastOneGPlaySynced)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4039 */;
import isPremiumGiftingSupported from "isPremiumGiftingSupported" /* 4052 */;
import getProductOrbPrice from "getProductOrbPrice" /* 5312 */;
import getItemRecordsFromPurchases from "getItemRecordsFromPurchases" /* 5313 */;
import formatSingleCurrencyPrice from "formatSingleCurrencyPrice" /* 5316 */;
import updateProductDefault from "updateProduct" /* 5319 */;
import BalanceWidgetMode from "BalanceWidgetMode" /* 9250 */;
import metadataDefault from "metadata" /* 9251 */;

function hasAtLeastOneGPlaySynced(nextResult) {
  const products = nextResult.products;
  return products.filter((item, index) => {
    if (obj.getIsVariantProduct(item)) {
      let variants = item.variants;
      let everyResult = variants.every((item, index) => {
        if (obj.getIsVariantProduct(item)) {
          const variants = item.variants;
          let everyResult = variants.every((item, index) => {
            if (obj.getIsVariantProduct(item)) {
              const variants = item.variants;
              let everyResult = variants.every((item, index) => {
                if (obj.getIsVariantProduct(item)) {
                  const variants = item.variants;
                  let everyResult = variants.every(() => { ... });
                } else {
                  const googleSkuIds = item.googleSkuIds;
                  let tmp4;
                  if (googleSkuIds != null) {
                    tmp4 = googleSkuIds[closure_3.MOBILE];
                  }
                  const product = callback2(table[3]).getProduct(tmp4);
                  const obj2 = callback2(table[3]);
                  const googleSkuIds2 = item.googleSkuIds;
                  let tmp7;
                  if (googleSkuIds2 != null) {
                    tmp7 = googleSkuIds2[closure_3.MOBILE_PREMIUM_TIER_2];
                  }
                  everyResult = null != product && null != callback2(table[3]).getProduct(tmp7);
                  const tmp2Result = callback2(table[3]);
                }
                return everyResult;
              });
            } else {
              const googleSkuIds = item.googleSkuIds;
              let tmp4;
              if (googleSkuIds != null) {
                tmp4 = googleSkuIds[closure_3.MOBILE];
              }
              const product = callback2(table[3]).getProduct(tmp4);
              const obj2 = callback2(table[3]);
              const googleSkuIds2 = item.googleSkuIds;
              let tmp7;
              if (googleSkuIds2 != null) {
                tmp7 = googleSkuIds2[closure_3.MOBILE_PREMIUM_TIER_2];
              }
              everyResult = null != product && null != callback2(table[3]).getProduct(tmp7);
              const tmp2Result = callback2(table[3]);
            }
            return everyResult;
          });
        } else {
          const googleSkuIds = item.googleSkuIds;
          let tmp4;
          if (googleSkuIds != null) {
            tmp4 = googleSkuIds[closure_3.MOBILE];
          }
          const product = callback2(table[3]).getProduct(tmp4);
          const obj2 = callback2(table[3]);
          const googleSkuIds2 = item.googleSkuIds;
          let tmp7;
          if (googleSkuIds2 != null) {
            tmp7 = googleSkuIds2[closure_3.MOBILE_PREMIUM_TIER_2];
          }
          everyResult = null != product && null != callback2(table[3]).getProduct(tmp7);
          const tmp2Result = callback2(table[3]);
        }
        return everyResult;
      });
    } else {
      let googleSkuIds = item.googleSkuIds;
      let tmp4;
      if (googleSkuIds != null) {
        tmp4 = googleSkuIds[closure_3.MOBILE];
      }
      let product = callback2(table[3]).getProduct(tmp4);
      let obj2 = callback2(table[3]);
      let googleSkuIds2 = item.googleSkuIds;
      let tmp7;
      if (googleSkuIds2 != null) {
        tmp7 = googleSkuIds2[closure_3.MOBILE_PREMIUM_TIER_2];
      }
      everyResult = null != product && null != callback2(table[3]).getProduct(tmp7);
      let tmp2Result = callback2(table[3]);
    }
    return everyResult;
  }).length > 0;
}
let closure_3 = ME.PriceSetAssignmentPurchaseTypes;
let result = obj132.fileFinishedImporting("modules/collectibles/native/CollectiblesUtils.tsx");

export const getFormattedPriceForCollectiblesProduct = function getFormattedPriceForCollectiblesProduct(googleSkuIds) {
  if (arg2) {
    if (arg1) {
      let MOBILE = closure_3.MOBILE_PREMIUM_TIER_2;
    } else {
      MOBILE = closure_3.MOBILE;
    }
  } else {
    if (arg1) {
      let DEFAULT = closure_3.PREMIUM_TIER_2;
      let tmp2 = closure_3;
    } else {
      DEFAULT = closure_3.DEFAULT;
      tmp2 = closure_3;
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
      } else {
        result = null;
      }
    } else {
      let tmp7Result = getItemRecordsFromPurchases;
      result = tmp7Result.extractPriceByPurchaseTypes(googleSkuIds, DEFAULT);
    }
    if (null == result) {
      return null;
    } else if (null != result.priceString) {
      let priceString = result.priceString;
    } else {
      tmp7Result = formatSingleCurrencyPrice;
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
};
export const getCollectibleGoogleSkuId = function getCollectibleGoogleSkuId(closure_0, stateFromStores) {
  if (null == stateFromStores) {
    return null;
  } else {
    const obj = getPremiumPlanItemDefault;
    const googleSkuIds = _require.googleSkuIds;
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
    return variants.every((item, index) => {
      if (obj.getIsVariantProduct(item)) {
        const variants = item.variants;
        let everyResult = variants.every((item, index) => {
          if (obj.getIsVariantProduct(item)) {
            const variants = item.variants;
            let everyResult = variants.every((item, index) => {
              if (obj.getIsVariantProduct(item)) {
                const variants = item.variants;
                let everyResult = variants.every((item, index) => {
                  if (obj.getIsVariantProduct(item)) {
                    const variants = item.variants;
                    let everyResult = variants.every(() => { ... });
                  } else {
                    const googleSkuIds = item.googleSkuIds;
                    let tmp4;
                    if (googleSkuIds != null) {
                      tmp4 = googleSkuIds[closure_3.MOBILE];
                    }
                    const product = callback2(table[3]).getProduct(tmp4);
                    const obj2 = callback2(table[3]);
                    const googleSkuIds2 = item.googleSkuIds;
                    let tmp7;
                    if (googleSkuIds2 != null) {
                      tmp7 = googleSkuIds2[closure_3.MOBILE_PREMIUM_TIER_2];
                    }
                    everyResult = null != product && null != callback2(table[3]).getProduct(tmp7);
                    const tmp2Result = callback2(table[3]);
                  }
                  return everyResult;
                });
              } else {
                const googleSkuIds = item.googleSkuIds;
                let tmp4;
                if (googleSkuIds != null) {
                  tmp4 = googleSkuIds[closure_3.MOBILE];
                }
                const product = callback2(table[3]).getProduct(tmp4);
                const obj2 = callback2(table[3]);
                const googleSkuIds2 = item.googleSkuIds;
                let tmp7;
                if (googleSkuIds2 != null) {
                  tmp7 = googleSkuIds2[closure_3.MOBILE_PREMIUM_TIER_2];
                }
                everyResult = null != product && null != callback2(table[3]).getProduct(tmp7);
                const tmp2Result = callback2(table[3]);
              }
              return everyResult;
            });
          } else {
            const googleSkuIds = item.googleSkuIds;
            let tmp4;
            if (googleSkuIds != null) {
              tmp4 = googleSkuIds[closure_3.MOBILE];
            }
            const product = callback2(table[3]).getProduct(tmp4);
            const obj2 = callback2(table[3]);
            const googleSkuIds2 = item.googleSkuIds;
            let tmp7;
            if (googleSkuIds2 != null) {
              tmp7 = googleSkuIds2[closure_3.MOBILE_PREMIUM_TIER_2];
            }
            everyResult = null != product && null != callback2(table[3]).getProduct(tmp7);
            const tmp2Result = callback2(table[3]);
          }
          return everyResult;
        });
      } else {
        const googleSkuIds = item.googleSkuIds;
        let tmp4;
        if (googleSkuIds != null) {
          tmp4 = googleSkuIds[closure_3.MOBILE];
        }
        const product = callback2(table[3]).getProduct(tmp4);
        const obj2 = callback2(table[3]);
        const googleSkuIds2 = item.googleSkuIds;
        let tmp7;
        if (googleSkuIds2 != null) {
          tmp7 = googleSkuIds2[closure_3.MOBILE_PREMIUM_TIER_2];
        }
        everyResult = null != product && null != callback2(table[3]).getProduct(tmp7);
        const tmp2Result = callback2(table[3]);
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
      let tmp6 = nextResult;
      if (hasAtLeastOneGPlaySynced(nextResult)) {
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  }
};
export const filterHiddenCategories = function filterHiddenCategories(result) {
  return result.filter((item, index) => {
    let tmp = null == item.unpublishedAt;
    if (!tmp) {
      const _Date = Date;
      const date = new Date();
      tmp = item.unpublishedAt > date;
    }
    if (tmp) {
      tmp = item.products.length > 0;
    }
    return tmp;
  });
};
export const createOrbProfileBadge = function createOrbProfileBadge() {
  return { id: BalanceWidgetMode.OrbBadges.ORB_PROFILE_BADGE, icon: BalanceWidgetMode.OrbBadges.ORB_PROFILE_BADGE, iconSrc: metadataDefault, description: "", isPreviewMode: true };
};