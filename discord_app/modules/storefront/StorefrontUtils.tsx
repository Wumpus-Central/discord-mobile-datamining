// discord_app/modules/storefront/StorefrontUtils.tsx
import applyDefault from "../../../_runtime/00012_apply.js";
import formatSingleCurrencyPrice from "../../utils/PriceUtils.tsx";
import StorefrontPromotionRewardType from "StorefrontTypes.tsx";
import closure_3 from "../../../_runtime/00019_noop.js";
import closure_4 from "../user_settings/LocaleStore.tsx";
import closure_5 from "../../stores/UserStore.tsx";
import closure_6 from "SKUPricesStore.tsx";
import ME from "../../Constants.tsx";
import { PremiumTypes } from "../premium/PremiumConstants.tsx";

require = arg1;
function useSKUPrice(sku) {
  sku = sku.sku;
  let DEFAULT = sku.priceSetAssignmentPurchaseType;
  if (DEFAULT === undefined) {
    DEFAULT = constants.DEFAULT;
  }
  let userPrice;
  let pricesForPurchaseType;
  let purchaseType;
  let storeHasPrice;
  let stateFromStoresArray;
  let stateFromStores1;
  userPrice = false;
  pricesForPurchaseType = undefined;
  const items = [stateFromStoresArray];
  const stateFromStores = sku(userPrice[10]).useStateFromStores(items, () => {
    let id;
    if (sku != null) {
      id = sku.id;
    }
    if (id == null) {
      id = null;
    }
    return closure_1_6.getPricesForSkuId(id);
  });
  pricesForPurchaseType = stateFromStores;
  const items1 = [sku, stateFromStores, DEFAULT, false];
  const memo = pricesForPurchaseType.useMemo(() => {
    if (null == userPrice) {
      let SELF_PURCHASE = sku(storeHasPrice[7]).StorefrontPurchaseType.SELF_PURCHASE;
      let tmp3 = storeHasPrice;
      let tmp4 = sku;
    } else if (closure_1_8.DEFAULT === tmp) {
      SELF_PURCHASE = sku(storeHasPrice[7]).StorefrontPurchaseType.SELF_PURCHASE;
      tmp3 = storeHasPrice;
      tmp4 = sku;
    } else if (tmp14.GIFT === tmp) {
      SELF_PURCHASE = sku(storeHasPrice[7]).StorefrontPurchaseType.GIFT;
      tmp3 = storeHasPrice;
      tmp4 = sku;
    } else {
      tmp3 = storeHasPrice;
      SELF_PURCHASE = sku(storeHasPrice[7]).StorefrontPurchaseType.SELF_PURCHASE;
      tmp4 = sku;
    }
    if (null != sku) {
      if (null != stateFromStores1) {
        let tmp12 = tmp11[SELF_PURCHASE];
        if (tmp12 == null) {
          tmp12 = tmp11[tmp4(undefined, tmp3[7]).StorefrontPurchaseType.SELF_PURCHASE];
        }
        let found;
        if (tmp12 != null) {
          userPrice = tmp12.userPrice;
          if (userPrice != null) {
            found = userPrice.find((currency) => {
              currency = currency.currency;
              const DISCORD_ORB = closure_1_7.DISCORD_ORB;
              return closure_2 ? currency === DISCORD_ORB : currency !== DISCORD_ORB;
            });
          }
        }
        let obj = { userPrice: null, pricesForPurchaseType: null, purchaseType: null, storeHasPrice: true };
        obj[0] = found;
        obj[1] = tmp12;
        obj[2] = SELF_PURCHASE;
        return obj;
      }
    }
    obj = { userPrice: "r", pricesForPurchaseType: "isArray", purchaseType: "exhalar", storeHasPrice: "inhalar" };
    obj[2] = SELF_PURCHASE;
    obj[3] = null != stateFromStores1;
    return obj;
  }, items1);
  userPrice = memo.userPrice;
  pricesForPurchaseType = memo.pricesForPurchaseType;
  purchaseType = memo.purchaseType;
  storeHasPrice = memo.storeHasPrice;
  let obj = sku(userPrice[10]);
  const items2 = [stateFromStoresArray];
  stateFromStoresArray = sku(userPrice[10]).useStateFromStoresArray(items2, () => {
    let id;
    if (sku != null) {
      id = sku.id;
    }
    let rewardsForSkuId = stateFromStoresArray.getRewardsForSkuId(id);
    if (rewardsForSkuId == null) {
      rewardsForSkuId = [];
    }
    return rewardsForSkuId;
  });
  let obj2 = sku(userPrice[10]);
  const items3 = [storeHasPrice];
  stateFromStores1 = sku(userPrice[10]).useStateFromStores(items3, () => storeHasPrice.getCurrentUser());
  const items4 = [sku, DEFAULT, , , , , , ];
  let premiumType;
  if (stateFromStores1 != null) {
    premiumType = stateFromStores1.premiumType;
  }
  items4[2] = premiumType;
  items4[3] = storeHasPrice;
  items4[4] = userPrice;
  items4[5] = pricesForPurchaseType;
  items4[6] = purchaseType;
  items4[7] = stateFromStoresArray;
  return pricesForPurchaseType.useMemo(() => {
    let obj = sku;
    if (null == sku) {
      return { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
    } else if (storeHasPrice) {
      const found = stateFromStoresArray.find((arg0) => {
        if (null == arg0[closure_4]) {
          return false;
        } else {
          const type = tmp.type;
          if (closure_1_0(closure_1_2[7]).StorefrontPromotionRewardType.DISCOUNT === type) {
            return true;
          } else {
            if (tmp2(tmp3[7]).StorefrontPromotionRewardType.FIXED_PRICE !== type) {
              if (tmp2(tmp3[7]).StorefrontPromotionRewardType.ACTION !== type) {
                const type2 = tmp.type;
                return false;
              }
            }
            return false;
          }
        }
      });
      let tmp9 = null;
      if (null != found) {
        tmp9 = found[purchaseType];
      }
      let tmp11 = null;
      if (null != tmp9) {
        tmp11 = null;
        if (null != userPrice) {
          tmp11 = userPrice;
        }
      }
      let amount = null;
      if (null != tmp9) {
        amount = null;
        if (tmp9.amount > 0) {
          amount = tmp9.amount;
        }
      }
      if (null != tmp9) {
        let found1;
        if (pricesForPurchaseType != null) {
          if (pricesForPurchaseType.prices[closure_1_9.BASE] != null) {
            const arr = tmp16[sku(undefined, userPrice[7]).StorefrontPriceVariant.NORMAL];
            if (arr != null) {
              found1 = arr.find((currency) => currency.currency !== constants.DISCORD_ORB);
            }
          }
        }
        let tmp13 = found1;
      } else {
        tmp13 = userPrice;
      }
      if (tmp13 == null) {
        tmp13 = null;
      }
      obj = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
      obj[0] = tmp13;
      obj[1] = tmp11;
      obj[2] = amount;
      let tmp19 = userPrice;
      if (userPrice == null) {
        tmp19 = null;
      }
      obj[3] = tmp19;
      return obj;
    } else {
      if (obj.productLine === closure_1_11.SOCIAL_LAYER_GAME_ITEM) {
        let price = sku(userPrice[11]).getPrice(obj, DEFAULT);
        const obj2 = sku(userPrice[11]);
      } else {
        let premiumType;
        if (stateFromStores1 != null) {
          premiumType = stateFromStores1.premiumType;
        }
        price = obj.getPrice(premiumType);
      }
      if (price == null) {
        price = null;
      }
      obj = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
      obj[0] = price;
      obj[3] = price;
      return obj;
    }
  }, items4);
}
function formatSKUPrice(arg0, arg1) {
  ({ normalPrice, discountedPrice, discountPercent, userPrice } = arg0);
  let formatPriceResult = null;
  if (null != normalPrice) {
    let obj = formatSingleCurrencyPrice;
    formatPriceResult = obj.formatPrice(normalPrice.amount, normalPrice.currency);
  }
  obj = { normalPrice: formatPriceResult, discountedPrice: null, discountPercent: null, userPrice: null };
  let formatPriceResult1 = null;
  if (null != discountedPrice) {
    formatPriceResult1 = formatSingleCurrencyPrice.formatPrice(discountedPrice.amount, discountedPrice.currency);
    const obj3 = formatSingleCurrencyPrice;
  }
  obj[1] = formatPriceResult1;
  let formatPercentResult = null;
  if (null != discountPercent) {
    formatPercentResult = formatSingleCurrencyPrice.formatPercent(arg1, -discountPercent / 100);
    const obj4 = formatSingleCurrencyPrice;
  }
  obj[2] = formatPercentResult;
  let formatPriceResult2 = null;
  if (null != userPrice) {
    formatPriceResult2 = formatSingleCurrencyPrice.formatPrice(userPrice.amount, userPrice.currency);
    const obj5 = formatSingleCurrencyPrice;
  }
  obj[3] = formatPriceResult2;
  return obj;
}
({ CurrencyCodes: error, PriceSetAssignmentPurchaseTypes: closure_8, PriceTypes: c9, SKUFlags: c10, SKUProductLines: unpackModuleId } = ME);
const result = require("set").fileFinishedImporting("modules/storefront/StorefrontUtils.tsx");

export const transformStorefrontPricesServer = function transformStorefrontPricesServer(storefront_pricing) {
  let obj = { skuPriceMap: applyDefault.mapValues(storefront_pricing.sku_price_map, (pricingResultId) => ({ pricingResultId: pricingResultId.pricing_result_id, storefrontPromotionIds: pricingResultId.storefront_promotion_ids, rewardResultIds: pricingResultId.reward_result_ids })), pricingResultIdMap: null, rewardResultIdMap: null };
  const obj2 = applyDefault;
  obj[1] = applyDefault.mapValues(storefront_pricing.pricing_result_id_map, (arg0) => callback(12).mapValues(arg0, (user_price) => {
    const obj = { userPrice: user_price.map((currency) => ({ currency: currency.currency, amount: currency.amount })), prices: callback(table[6]).mapValues(user_price.prices, (arg0) => callback(table[6]).mapValues(arg0, (arr) => arr.map(() => { ... }))) };
    user_price = user_price.user_price;
    return obj;
  }));
  const obj3 = applyDefault;
  obj[2] = applyDefault.mapValues(storefront_pricing.reward_result_id_map, (arg0) => callback(12).mapValues(arg0, (type) => ({ type: type.type, amount: type.amount })));
  return obj;
};
export const transformPriceSetAssignmentToStorefrontPurchaseType = function transformPriceSetAssignmentToStorefrontPurchaseType(arg0) {
  if (null == arg0) {
    return StorefrontPromotionRewardType.StorefrontPurchaseType.SELF_PURCHASE;
  } else if (constants.DEFAULT === arg0) {
    return StorefrontPromotionRewardType.StorefrontPurchaseType.SELF_PURCHASE;
  } else if (tmp9.GIFT === arg0) {
    return StorefrontPromotionRewardType.StorefrontPurchaseType.GIFT;
  } else {
    return StorefrontPromotionRewardType.StorefrontPurchaseType.SELF_PURCHASE;
  }
};
export const isSlayerSkuAvailableOnThisPlatform = function isSlayerSkuAvailableOnThisPlatform(sku) {
  if (null != sku) {
    if (sku.productLine === constants3.SOCIAL_LAYER_GAME_ITEM) {
      let num;
      if (sku != null) {
        num = sku.flags;
      }
      if (num == null) {
        num = 0;
      }
      if (obj.isIOS()) {
        let tmpResult = tmp(1403);
        let hasFlagResult = tmpResult.hasFlag(num, constants2.AVAILABLE_ON_IOS);
      } else {
        tmpResult = tmp(501);
        const isAndroidResult = tmpResult.isAndroid();
        hasFlagResult = !isAndroidResult;
        if (isAndroidResult) {
          hasFlagResult = tmp(1403).hasFlag(num, constants2.AVAILABLE_ON_ANDROID);
          const tmpResult1 = tmp(1403);
        }
      }
      return hasFlagResult;
    }
  }
  return false;
};
export { useSKUPrice };
export const useFormattedSKUPrice = function useFormattedSKUPrice(sku) {
  let DEFAULT = sku.priceSetAssignmentPurchaseType;
  if (DEFAULT === undefined) {
    DEFAULT = constants.DEFAULT;
  }
  const tmp2 = useSKUPrice({ sku: sku.sku, priceSetAssignmentPurchaseType: DEFAULT });
  const _require = tmp2;
  let stateFromStores;
  const items = [closure_4];
  stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => locale.locale);
  const items1 = [tmp2, stateFromStores];
  return React.useMemo(() => closure_1_14(closure_0, stateFromStores), items1);
};
export const useFormatSKUPrice = function useFormatSKUPrice(arg0) {
  const _require = arg0;
  const items = [closure_4];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => locale.locale);
  const items1 = [arg0, stateFromStores];
  return React.useMemo(() => closure_1_14(closure_0, stateFromStores), items1);
};
export { formatSKUPrice };
export const useSKUOrbPrice = function useSKUOrbPrice(sku) {
  sku = sku.sku;
  let DEFAULT = sku.priceSetAssignmentPurchaseType;
  if (DEFAULT === undefined) {
    DEFAULT = constants.DEFAULT;
  }
  let userPrice;
  let storeHasPrice;
  let stateFromStores1;
  let memo1;
  userPrice = DEFAULT;
  storeHasPrice = true;
  stateFromStores1 = undefined;
  const items = [closure_6];
  const stateFromStores = sku(storeHasPrice[10]).useStateFromStores(items, () => {
    let id;
    if (sku != null) {
      id = sku.id;
    }
    if (id == null) {
      id = null;
    }
    return closure_1_6.getPricesForSkuId(id);
  });
  stateFromStores1 = stateFromStores;
  const items1 = [sku, stateFromStores, DEFAULT, true];
  const memo = stateFromStores1.useMemo(() => {
    if (null == userPrice) {
      let SELF_PURCHASE = sku(storeHasPrice[7]).StorefrontPurchaseType.SELF_PURCHASE;
      let tmp3 = storeHasPrice;
      let tmp4 = sku;
    } else if (closure_1_8.DEFAULT === tmp) {
      SELF_PURCHASE = sku(storeHasPrice[7]).StorefrontPurchaseType.SELF_PURCHASE;
      tmp3 = storeHasPrice;
      tmp4 = sku;
    } else if (tmp14.GIFT === tmp) {
      SELF_PURCHASE = sku(storeHasPrice[7]).StorefrontPurchaseType.GIFT;
      tmp3 = storeHasPrice;
      tmp4 = sku;
    } else {
      tmp3 = storeHasPrice;
      SELF_PURCHASE = sku(storeHasPrice[7]).StorefrontPurchaseType.SELF_PURCHASE;
      tmp4 = sku;
    }
    if (null != sku) {
      if (null != stateFromStores1) {
        let tmp12 = tmp11[SELF_PURCHASE];
        if (tmp12 == null) {
          tmp12 = tmp11[tmp4(undefined, tmp3[7]).StorefrontPurchaseType.SELF_PURCHASE];
        }
        let found;
        if (tmp12 != null) {
          userPrice = tmp12.userPrice;
          if (userPrice != null) {
            found = userPrice.find((currency) => {
              currency = currency.currency;
              const DISCORD_ORB = closure_1_7.DISCORD_ORB;
              return closure_2 ? currency === DISCORD_ORB : currency !== DISCORD_ORB;
            });
          }
        }
        let obj = { userPrice: null, pricesForPurchaseType: null, purchaseType: null, storeHasPrice: true };
        obj[0] = found;
        obj[1] = tmp12;
        obj[2] = SELF_PURCHASE;
        return obj;
      }
    }
    obj = { userPrice: "r", pricesForPurchaseType: "isArray", purchaseType: "exhalar", storeHasPrice: "inhalar" };
    obj[2] = SELF_PURCHASE;
    obj[3] = null != stateFromStores1;
    return obj;
  }, items1);
  userPrice = memo.userPrice;
  storeHasPrice = memo.storeHasPrice;
  let obj = sku(storeHasPrice[10]);
  const items2 = [closure_5];
  stateFromStores1 = sku(storeHasPrice[10]).useStateFromStores(items2, () => currentUser.getCurrentUser());
  const items3 = [stateFromStores1];
  memo1 = stateFromStores1.useMemo(() => userPrice(storeHasPrice[13]).isPremium(stateFromStores1, closure_1_12.TIER_2), items3);
  const items4 = [sku, memo1, storeHasPrice, userPrice];
  return stateFromStores1.useMemo(() => {
    if (null == sku) {
      return null;
    } else if (storeHasPrice) {
      let tmp8 = userPrice;
      if (userPrice == null) {
        tmp8 = null;
      }
      return tmp8;
    } else {
      let obj = sku(storeHasPrice[14]);
      const orbPriceFromPrices = obj.getOrbPriceFromPrices(tmp.prices, memo1);
      let tmp7 = null;
      if (null != orbPriceFromPrices) {
        obj = { amount: null, currency: null };
        ({ amount: obj2[0], currency: obj2[1] } = orbPriceFromPrices);
        tmp7 = obj;
      }
      return tmp7;
    }
  }, items4);
};