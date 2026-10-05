// === Module 8506: collectibles/CollectiblesUtils ===

// Module 8506 (collectibles/CollectiblesUtils)
import Constants from "Constants" /* 1085 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4528 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4541 */;
import PriceUtils from "PriceUtils" /* 6736 */;
import IAPStoreDefault from "IAPStore" /* 6739 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7064 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7065 */;
import types from "types" /* 7867 */;
import _modDef8507 from "module_8507" /* 8507 */;
import size from "module_2" /* 2 */;

const f97445 = (variants) => {
  let everyResult;
  const obj = closure_1_0(closure_1_2[6]);
  if (obj.getIsVariantProduct(variants)) {
    variants = variants.variants;
    everyResult = variants.every(f97445);
  } else {
    const googleSkuIds = variants.googleSkuIds;
    let tmp5;
    const getProduct = closure_1_1(closure_1_2[3]).getProduct;
    closure_1_1(closure_1_2[3]);
    if (googleSkuIds != null) {
      tmp5 = googleSkuIds[closure_1_3.MOBILE];
    }
    const product = getProduct(tmp5);
    const googleSkuIds2 = variants.googleSkuIds;
    let tmp9;
    const getProduct2 = closure_1_1(closure_1_2[3]).getProduct;
    closure_1_1(closure_1_2[3]);
    if (googleSkuIds2 != null) {
      tmp9 = googleSkuIds2[closure_1_3.MOBILE_PREMIUM_TIER_2];
    }
    everyResult = null != product && null != getProduct2(tmp9);
  }
  return everyResult;
};
function hasAtLeastOneGPlaySynced(nextResult) {
  const products = nextResult.products;
  return products.filter((variants) => {
    let everyResult;
    let obj = CollectiblesProductUtils;
    if (obj.getIsVariantProduct(variants)) {
      variants = variants.variants;
      everyResult = variants.every(f97445);
    } else {
      const tmp3 = IAPStoreDefault;
      let googleSkuIds = variants.googleSkuIds;
      let tmp5;
      let getProduct = tmp3.getProduct;
      if (googleSkuIds != null) {
        tmp5 = googleSkuIds[closure_1_3.MOBILE];
      }
      let product = getProduct(tmp5);
      const tmp2Result = IAPStoreDefault;
      let googleSkuIds2 = variants.googleSkuIds;
      let tmp9;
      let getProduct2 = tmp2Result.getProduct;
      if (googleSkuIds2 != null) {
        tmp9 = googleSkuIds2[closure_1_3.MOBILE_PREMIUM_TIER_2];
      }
      everyResult = null != product && null != getProduct2(tmp9);
    }
    return everyResult;
  }).length > 0;
}
let closure_3 = Constants.PriceSetAssignmentPurchaseTypes;
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesUtils.tsx");

export const getFormattedPriceForCollectiblesProduct = function getFormattedPriceForCollectiblesProduct(googleSkuIds, hasShopDiscount, arg2) {
  let DEFAULT;
  let result;
  let tmp3;
  const tmp2 = arg2;
  if (tmp2) {
    let MOBILE;
    let tmp4;
    if (hasShopDiscount) {
      MOBILE = closure_3.MOBILE_PREMIUM_TIER_2;
      tmp4 = closure_3;
    } else {
      MOBILE = closure_3.MOBILE;
      tmp4 = closure_3;
    }
    tmp3 = tmp4;
    DEFAULT = MOBILE;
  } else if (hasShopDiscount) {
    DEFAULT = closure_3.PREMIUM_TIER_2;
    tmp3 = closure_3;
  } else {
    DEFAULT = closure_3.DEFAULT;
    tmp3 = closure_3;
  }
  const obj = BillingPlatformUtils;
  if (obj.isGooglePlayBillingSupported()) {
    if (DEFAULT === tmp3.MOBILE) {
      googleSkuIds = googleSkuIds.googleSkuIds;
      let tmp11;
      const getProduct = IAPStoreDefault.getProduct;
      IAPStoreDefault;
      if (googleSkuIds != null) {
        tmp11 = googleSkuIds[DEFAULT];
      }
      const product = getProduct(tmp11);
      let tmp13;
      if (null != product) {
        const obj2 = { amount: null, currency: null, priceString: null, tax: 0, taxInclusive: false };
        ({ price: obj3.amount, currencyCode: obj3.currency, priceString: obj3.priceString } = product);
        tmp13 = obj2;
      }
      result = tmp13;
    } else {
      result = null;
    }
  } else {
    const tmp5Result = CollectiblesUtils;
    result = tmp5Result.extractPriceByPurchaseTypes(googleSkuIds, DEFAULT);
  }
  let tmp14 = null;
  if (null != result) {
    let priceString;
    if (null != result.priceString) {
      priceString = result.priceString;
    } else {
      const tmp5Result2 = PriceUtils;
      priceString = tmp5Result2.formatPrice(result.amount, result.currency);
    }
    tmp14 = priceString;
  }
  return tmp14;
};
export const extractPriceByPurchaseTypes = function extractPriceByPurchaseTypes(googleSkuIds, defaultPriceSetAssignmentPurchaseType) {
  const obj = BillingPlatformUtils;
  if (obj.isGooglePlayBillingSupported()) {
    if (defaultPriceSetAssignmentPurchaseType !== closure_3.MOBILE) {
      if (defaultPriceSetAssignmentPurchaseType !== closure_3.MOBILE_PREMIUM_TIER_2) {
        return null;
      }
    }
    googleSkuIds = googleSkuIds.googleSkuIds;
    let tmp6;
    const getProduct = IAPStoreDefault.getProduct;
    IAPStoreDefault;
    if (googleSkuIds != null) {
      tmp6 = googleSkuIds[defaultPriceSetAssignmentPurchaseType];
    }
    const product = getProduct(tmp6);
    let tmp8;
    if (null != product) {
      const obj2 = { amount: null, currency: null, priceString: null, tax: 0, taxInclusive: false };
      ({ price: obj3.amount, currencyCode: obj3.currency, priceString: obj3.priceString } = product);
      tmp8 = obj2;
    }
    return tmp8;
  } else {
    const tmpResult = CollectiblesUtils;
    return tmpResult.extractPriceByPurchaseTypes(googleSkuIds, defaultPriceSetAssignmentPurchaseType);
  }
};
export const getCollectibleGoogleSkuId = function getCollectibleGoogleSkuId(cResult, stateFromStores) {
  if (null == stateFromStores) {
    return null;
  } else {
    const obj = PremiumUtilsDefault;
    const googleSkuIds = cResult.googleSkuIds;
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
  const obj = CollectiblesProductUtils;
  if (obj.getIsVariantProduct(variants)) {
    variants = variants.variants;
    return variants.every(f97445);
  } else {
    const googleSkuIds = variants.googleSkuIds;
    let tmp5;
    const getProduct = IAPStoreDefault.getProduct;
    IAPStoreDefault;
    if (googleSkuIds != null) {
      tmp5 = googleSkuIds[closure_3.MOBILE];
    }
    const product = getProduct(tmp5);
    const googleSkuIds2 = variants.googleSkuIds;
    let tmp9;
    const getProduct2 = IAPStoreDefault.getProduct;
    IAPStoreDefault;
    if (googleSkuIds2 != null) {
      tmp9 = googleSkuIds2[closure_3.MOBILE_PREMIUM_TIER_2];
    }
    const tmp11 = null != product && null != getProduct2(tmp9);
    return tmp11;
  }
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
  return arr.filter(function(unpublishedAt) {
    let tmp = null == unpublishedAt.unpublishedAt;
    if (!tmp) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      unpublishedAt = unpublishedAt.unpublishedAt;
      tmp = unpublishedAt > new Date();
      const date = new Date();
    }
    if (tmp) {
      tmp = unpublishedAt.products.length > 0;
    }
    return tmp;
  });
};
export const createOrbProfileBadge = function createOrbProfileBadge() {
  const obj = { id: types.OrbBadges.ORB_PROFILE_BADGE, icon: types.OrbBadges.ORB_PROFILE_BADGE, iconSrc: _modDef8507, description: "", isPreviewMode: true };
  return obj;
};