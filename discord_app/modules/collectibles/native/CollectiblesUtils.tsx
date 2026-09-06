// discord_app/modules/collectibles/native/CollectiblesUtils.tsx
import Constants from "../../../Constants.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import BillingPlatformUtils from "../../device/BillingPlatformUtils.tsx";
import IAPStoreDefault from "../../../stores/native/IAPStore.android.tsx";
import CollectiblesProductUtils from "../utils/CollectiblesProductUtils.tsx";
import types from "../../virtual_currency/types.tsx";
import _modDef8849 from "../../../../discord_assets/assets/orbs/orb_profile_badge_icon.png.js";
import size from "../../../../_runtime/metro/00002__.js";

const CollectiblesUtils = tmp(7554);
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
                  const product = closure_1_1(tmp[3]).getProduct(tmp4);
                  const obj2 = closure_1_1(tmp[3]);
                  const googleSkuIds2 = variants.googleSkuIds;
                  let tmp7;
                  if (googleSkuIds2 != null) {
                    tmp7 = googleSkuIds2[closure_1_3.MOBILE_PREMIUM_TIER_2];
                  }
                  everyResult = null != product && null != closure_1_1(tmp[3]).getProduct(tmp7);
                  const tmp2Result = closure_1_1(tmp[3]);
                }
                return everyResult;
              });
            } else {
              const googleSkuIds = variants.googleSkuIds;
              let tmp4;
              if (googleSkuIds != null) {
                tmp4 = googleSkuIds[closure_1_3.MOBILE];
              }
              const product = closure_1_1(tmp[3]).getProduct(tmp4);
              const obj2 = closure_1_1(tmp[3]);
              const googleSkuIds2 = variants.googleSkuIds;
              let tmp7;
              if (googleSkuIds2 != null) {
                tmp7 = googleSkuIds2[closure_1_3.MOBILE_PREMIUM_TIER_2];
              }
              everyResult = null != product && null != closure_1_1(tmp[3]).getProduct(tmp7);
              const tmp2Result = closure_1_1(tmp[3]);
            }
            return everyResult;
          });
        } else {
          const googleSkuIds = variants.googleSkuIds;
          let tmp4;
          if (googleSkuIds != null) {
            tmp4 = googleSkuIds[closure_1_3.MOBILE];
          }
          const product = closure_1_1(tmp[3]).getProduct(tmp4);
          const obj2 = closure_1_1(tmp[3]);
          const googleSkuIds2 = variants.googleSkuIds;
          let tmp7;
          if (googleSkuIds2 != null) {
            tmp7 = googleSkuIds2[closure_1_3.MOBILE_PREMIUM_TIER_2];
          }
          everyResult = null != product && null != closure_1_1(tmp[3]).getProduct(tmp7);
          const tmp2Result = closure_1_1(tmp[3]);
        }
        return everyResult;
      });
    } else {
      let googleSkuIds = variants.googleSkuIds;
      let tmp4;
      if (googleSkuIds != null) {
        tmp4 = googleSkuIds[closure_1_3.MOBILE];
      }
      let product = require("IAPStore").getProduct(tmp4);
      let obj2 = require("IAPStore");
      let googleSkuIds2 = variants.googleSkuIds;
      let tmp7;
      if (googleSkuIds2 != null) {
        tmp7 = googleSkuIds2[closure_1_3.MOBILE_PREMIUM_TIER_2];
      }
      everyResult = null != product && null != require("IAPStore").getProduct(tmp7);
      let tmp2Result = require("IAPStore");
    }
    return everyResult;
  }).length > 0;
}
let closure_3 = Constants.PriceSetAssignmentPurchaseTypes;
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesUtils.tsx");

export const getFormattedPriceForCollectiblesProduct = function getFormattedPriceForCollectiblesProduct(googleSkuIds, arg1, arg2) {
  if (arg2) {
    if (arg1) {
      let MOBILE = tmp.MOBILE_PREMIUM_TIER_2;
    } else {
      MOBILE = tmp.MOBILE;
    }
  } else {
    if (arg1) {
      let DEFAULT = tmp.PREMIUM_TIER_2;
      let tmp2 = tmp;
    } else {
      DEFAULT = tmp.DEFAULT;
      tmp2 = tmp;
    }
    let obj = BillingPlatformUtils;
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
          obj = { amount: null, currency: null, priceString: null, tax: 0, taxInclusive: false };
          ({ price: obj4.amount, currencyCode: obj4.currency, priceString: obj4.priceString } = product);
          tmp14 = obj;
        }
        let result = tmp14;
      } else {
        result = null;
      }
    } else {
      let tmp7Result = tmp7(7554);
      result = tmp7Result.extractPriceByPurchaseTypes(googleSkuIds, DEFAULT);
    }
    if (null == result) {
      return null;
    } else if (null != result.priceString) {
      let priceString = result.priceString;
    } else {
      tmp7Result = tmp7(7234);
      priceString = tmp7Result.formatPrice(result.amount, result.currency);
    }
  }
};
export const extractPriceByPurchaseTypes = function extractPriceByPurchaseTypes(googleSkuIds, arg1) {
  let obj = BillingPlatformUtils;
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
    const product = IAPStoreDefault.getProduct(tmp5);
    let tmp7;
    if (null != product) {
      obj = { amount: null, currency: null, priceString: null, tax: 0, taxInclusive: false };
      ({ price: obj4.amount, currencyCode: obj4.currency, priceString: obj4.priceString } = product);
      tmp7 = obj;
    }
    return tmp7;
  } else {
    return CollectiblesUtils.extractPriceByPurchaseTypes(googleSkuIds, arg1);
  }
};
export const getCollectibleGoogleSkuId = function getCollectibleGoogleSkuId(product, stateFromStores) {
  if (null == stateFromStores) {
    return null;
  } else {
    const obj = PremiumUtilsDefault;
    const googleSkuIds = product.googleSkuIds;
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
                      tmp4 = googleSkuIds[closure_1_3.MOBILE];
                    }
                    const product = closure_1_1(tmp[3]).getProduct(tmp4);
                    const obj2 = closure_1_1(tmp[3]);
                    const googleSkuIds2 = variants.googleSkuIds;
                    let tmp7;
                    if (googleSkuIds2 != null) {
                      tmp7 = googleSkuIds2[closure_1_3.MOBILE_PREMIUM_TIER_2];
                    }
                    everyResult = null != product && null != closure_1_1(tmp[3]).getProduct(tmp7);
                    const tmp2Result = closure_1_1(tmp[3]);
                  }
                  return everyResult;
                });
              } else {
                const googleSkuIds = variants.googleSkuIds;
                let tmp4;
                if (googleSkuIds != null) {
                  tmp4 = googleSkuIds[closure_1_3.MOBILE];
                }
                const product = closure_1_1(tmp[3]).getProduct(tmp4);
                const obj2 = closure_1_1(tmp[3]);
                const googleSkuIds2 = variants.googleSkuIds;
                let tmp7;
                if (googleSkuIds2 != null) {
                  tmp7 = googleSkuIds2[closure_1_3.MOBILE_PREMIUM_TIER_2];
                }
                everyResult = null != product && null != closure_1_1(tmp[3]).getProduct(tmp7);
                const tmp2Result = closure_1_1(tmp[3]);
              }
              return everyResult;
            });
          } else {
            const googleSkuIds = variants.googleSkuIds;
            let tmp4;
            if (googleSkuIds != null) {
              tmp4 = googleSkuIds[closure_1_3.MOBILE];
            }
            const product = closure_1_1(tmp[3]).getProduct(tmp4);
            const obj2 = closure_1_1(tmp[3]);
            const googleSkuIds2 = variants.googleSkuIds;
            let tmp7;
            if (googleSkuIds2 != null) {
              tmp7 = googleSkuIds2[closure_1_3.MOBILE_PREMIUM_TIER_2];
            }
            everyResult = null != product && null != closure_1_1(tmp[3]).getProduct(tmp7);
            const tmp2Result = closure_1_1(tmp[3]);
          }
          return everyResult;
        });
      } else {
        const googleSkuIds = variants.googleSkuIds;
        let tmp4;
        if (googleSkuIds != null) {
          tmp4 = googleSkuIds[closure_1_3.MOBILE];
        }
        const product = closure_1_1(tmp[3]).getProduct(tmp4);
        const obj2 = closure_1_1(tmp[3]);
        const googleSkuIds2 = variants.googleSkuIds;
        let tmp7;
        if (googleSkuIds2 != null) {
          tmp7 = googleSkuIds2[closure_1_3.MOBILE_PREMIUM_TIER_2];
        }
        everyResult = null != product && null != closure_1_1(tmp[3]).getProduct(tmp7);
        const tmp2Result = closure_1_1(tmp[3]);
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
  return { id: types.OrbBadges.ORB_PROFILE_BADGE, icon: types.OrbBadges.ORB_PROFILE_BADGE, iconSrc: _modDef8849, description: "", isPreviewMode: true };
};