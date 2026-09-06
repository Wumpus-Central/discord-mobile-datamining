// discord_app/modules/storefront/StorefrontUtils.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import PremiumUtilsDefault from "../../utils/PremiumUtils.tsx";
import SlayerStorefrontUtils from "../slayer_storefront/SlayerStorefrontUtils.tsx";
import StorefrontTypes from "StorefrontTypes.tsx";
import PriceUtils from "../../utils/PriceUtils.tsx";
import OrbCheckoutUtils from "../virtual_currency/checkout/OrbCheckoutUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import LocaleStore from "../user_settings/LocaleStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import SKUPricesStore from "SKUPricesStore.tsx";

require = fn;
function useSKUPrice(sku) {
  sku = sku.sku;
  let DEFAULT = sku.priceSetAssignmentPurchaseType;
  if (DEFAULT === undefined) {
    DEFAULT = constants.DEFAULT;
  }
  let userPrice;
  let pricesForPurchaseType;
  let stateFromStoresArray;
  closure_129_0 = sku;
  closure_129_1 = DEFAULT;
  closure_129_2 = false;
  const items = [stateFromStoresArray];
  const stateFromStores = sku(userPrice[10]).useStateFromStores(items, () => {
    let id;
    if (sku != null) {
      id = sku.id;
    }
    if (id == null) {
      id = null;
    }
    return SKUPricesStore.getPricesForSkuId(id);
  });
  closure_129_3 = stateFromStores;
  const items1 = [sku, stateFromStores, DEFAULT, false];
  const memo = pricesForPurchaseType.useMemo(() => {
    if (null == userPrice) {
      let SELF_PURCHASE = StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE;
      let tmp4 = require;
    } else if (constants.DEFAULT === tmp) {
      SELF_PURCHASE = StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE;
      tmp4 = require;
    } else if (tmp14.GIFT === tmp) {
      SELF_PURCHASE = StorefrontTypes.StorefrontPurchaseType.GIFT;
      tmp4 = require;
    } else {
      SELF_PURCHASE = StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE;
      tmp4 = require;
    }
    if (null != sku) {
      if (null != stateFromStores1) {
        let tmp12 = tmp11[SELF_PURCHASE];
        if (tmp12 == null) {
          tmp12 = tmp11[tmp4(undefined, 7233).StorefrontPurchaseType.SELF_PURCHASE];
        }
        let found;
        if (tmp12 != null) {
          userPrice = tmp12.userPrice;
          if (userPrice != null) {
            found = userPrice.find((currency) => {
              currency = currency.currency;
              const DISCORD_ORB = constants.DISCORD_ORB;
              return storeHasPrice ? currency === DISCORD_ORB : currency !== DISCORD_ORB;
            });
          }
        }
        let obj = { userPrice: found, pricesForPurchaseType: tmp12, purchaseType: SELF_PURCHASE, storeHasPrice: true };
        return obj;
      }
    }
    obj = { userPrice: "r", pricesForPurchaseType: "w", purchaseType: SELF_PURCHASE, storeHasPrice: null != stateFromStores1 };
    return obj;
  }, items1);
  userPrice = memo.userPrice;
  pricesForPurchaseType = memo.pricesForPurchaseType;
  const purchaseType = memo.purchaseType;
  const storeHasPrice = memo.storeHasPrice;
  let obj = sku(userPrice[10]);
  const items2 = [stateFromStoresArray];
  stateFromStoresArray = sku(userPrice[10]).useStateFromStoresArray(items2, () => {
    let id;
    if (sku != null) {
      id = sku.id;
    }
    let rewardsForSkuId = SKUPricesStore.getRewardsForSkuId(id);
    if (rewardsForSkuId == null) {
      rewardsForSkuId = [];
    }
    return rewardsForSkuId;
  });
  let obj2 = sku(userPrice[10]);
  const items3 = [storeHasPrice];
  const stateFromStores1 = sku(userPrice[10]).useStateFromStores(items3, () => storeHasPrice.getCurrentUser());
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
      const found = stateFromStoresArray.find((item) => {
        if (null == item[purchaseType]) {
          return false;
        } else {
          const type = tmp.type;
          if (sku(userPrice[7]).StorefrontPromotionRewardType.DISCOUNT === type) {
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
          if (pricesForPurchaseType.prices[constants2.BASE] != null) {
            const arr = tmp16[StorefrontTypes.StorefrontPriceVariant.NORMAL];
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
      obj = { normalPrice: tmp13, discountedPrice: tmp11, discountPercent: amount, userPrice: null };
      let tmp19 = userPrice;
      if (userPrice == null) {
        tmp19 = null;
      }
      obj.userPrice = tmp19;
      return obj;
    } else {
      if (obj.productLine === constants4.SOCIAL_LAYER_GAME_ITEM) {
        let price = SlayerStorefrontUtils.getPrice(obj, DEFAULT);
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
      obj = { normalPrice: price, discountedPrice: null, discountPercent: null, userPrice: price };
      return obj;
    }
  }, items4);
}
function formatSKUPrice(arg0, stateFromStores) {
  ({ normalPrice, discountedPrice, discountPercent, userPrice } = arg0);
  let formatPriceResult = null;
  if (null != normalPrice) {
    let obj = PriceUtils;
    formatPriceResult = obj.formatPrice(normalPrice.amount, normalPrice.currency);
  }
  obj = { normalPrice: formatPriceResult, discountedPrice: null, discountPercent: null, userPrice: null };
  let formatPriceResult1 = null;
  if (null != discountedPrice) {
    formatPriceResult1 = PriceUtils.formatPrice(discountedPrice.amount, discountedPrice.currency);
  }
  obj.discountedPrice = formatPriceResult1;
  let formatPercentResult = null;
  if (null != discountPercent) {
    formatPercentResult = PriceUtils.formatPercent(stateFromStores, -discountPercent / 100);
  }
  obj.discountPercent = formatPercentResult;
  let formatPriceResult2 = null;
  if (null != userPrice) {
    formatPriceResult2 = PriceUtils.formatPrice(userPrice.amount, userPrice.currency);
  }
  obj.userPrice = formatPriceResult2;
  return obj;
}
const Constants = fn(1074);
({ CurrencyCodes: closure_7, PriceSetAssignmentPurchaseTypes: closure_8, PriceTypes: closure_9, SKUFlags: c10, SKUProductLines: closure_11 } = Constants);
const PremiumTypes = fn(1373).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/StorefrontUtils.tsx");

export const transformStorefrontPricesServer = function transformStorefrontPricesServer(storefront_pricing) {
  let obj = { skuPriceMap: _modDef12.mapValues(storefront_pricing.sku_price_map, (pricingResultId) => ({ pricingResultId: pricingResultId.pricing_result_id, storefrontPromotionIds: pricingResultId.storefront_promotion_ids, rewardResultIds: pricingResultId.reward_result_ids })), pricingResultIdMap: null, rewardResultIdMap: null };
  obj.pricingResultIdMap = _modDef12.mapValues(storefront_pricing.pricing_result_id_map, (arg0) => _modDef12.mapValues(arg0, (user_price) => {
    const obj = { userPrice: null, prices: closure_1_1(dependencyMap[6]).mapValues(user_price.prices, (arg0) => closure_1_1(closure_1_2[6]).mapValues(arg0, (arr) => arr.map(() => { ... }))) };
    user_price = user_price.user_price;
    obj.userPrice = user_price.map((currency) => ({ currency: currency.currency, amount: currency.amount }));
    return obj;
  }));
  obj.rewardResultIdMap = _modDef12.mapValues(storefront_pricing.reward_result_id_map, (arg0) => _modDef12.mapValues(arg0, (type) => ({ type: type.type, amount: type.amount })));
  return obj;
};
export const transformPriceSetAssignmentToStorefrontPurchaseType = function transformPriceSetAssignmentToStorefrontPurchaseType(arg0) {
  if (null == arg0) {
    return StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE;
  } else if (constants.DEFAULT === arg0) {
    return StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE;
  } else if (tmp9.GIFT === arg0) {
    return StorefrontTypes.StorefrontPurchaseType.GIFT;
  } else {
    return StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE;
  }
};
export const isSlayerSkuAvailableOnThisPlatform = function isSlayerSkuAvailableOnThisPlatform(sku) {
  if (null != sku) {
    if (sku.productLine === constants4.SOCIAL_LAYER_GAME_ITEM) {
      let num;
      if (sku != null) {
        num = sku.flags;
      }
      if (num == null) {
        num = 0;
      }
      if (obj.isIOS()) {
        let tmpResult = tmp(1384);
        let hasFlagResult = tmpResult.hasFlag(num, constants3.AVAILABLE_ON_IOS);
      } else {
        tmpResult = tmp(1116);
        const isAndroidResult = tmpResult.isAndroid();
        hasFlagResult = !isAndroidResult;
        if (isAndroidResult) {
          hasFlagResult = tmp(1384).hasFlag(num, constants3.AVAILABLE_ON_ANDROID);
          const tmpResult1 = tmp(1384);
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
  _require = tmp2;
  const items = [LocaleStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => locale.locale);
  const items1 = [tmp2, stateFromStores];
  return noop.useMemo(() => formatSKUPrice(closure_0, stateFromStores), items1);
};
export const useFormatSKUPrice = function useFormatSKUPrice(arg0) {
  _require = arg0;
  const items = [LocaleStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => locale.locale);
  const items1 = [arg0, stateFromStores];
  return noop.useMemo(() => formatSKUPrice(closure_0, stateFromStores), items1);
};
export { formatSKUPrice };
export const useSKUOrbPrice = function useSKUOrbPrice(sku) {
  sku = sku.sku;
  let DEFAULT = sku.priceSetAssignmentPurchaseType;
  if (DEFAULT === undefined) {
    DEFAULT = constants.DEFAULT;
  }
  let storeHasPrice;
  let stateFromStores1;
  closure_129_0 = sku;
  closure_129_1 = DEFAULT;
  closure_129_2 = true;
  const items = [SKUPricesStore];
  const stateFromStores = sku(storeHasPrice[10]).useStateFromStores(items, () => {
    let id;
    if (sku != null) {
      id = sku.id;
    }
    if (id == null) {
      id = null;
    }
    return SKUPricesStore.getPricesForSkuId(id);
  });
  closure_129_3 = stateFromStores;
  const items1 = [sku, stateFromStores, DEFAULT, true];
  const memo = stateFromStores1.useMemo(() => {
    if (null == userPrice) {
      let SELF_PURCHASE = StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE;
      let tmp4 = require;
    } else if (constants.DEFAULT === tmp) {
      SELF_PURCHASE = StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE;
      tmp4 = require;
    } else if (tmp14.GIFT === tmp) {
      SELF_PURCHASE = StorefrontTypes.StorefrontPurchaseType.GIFT;
      tmp4 = require;
    } else {
      SELF_PURCHASE = StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE;
      tmp4 = require;
    }
    if (null != sku) {
      if (null != stateFromStores1) {
        let tmp12 = tmp11[SELF_PURCHASE];
        if (tmp12 == null) {
          tmp12 = tmp11[tmp4(undefined, 7233).StorefrontPurchaseType.SELF_PURCHASE];
        }
        let found;
        if (tmp12 != null) {
          userPrice = tmp12.userPrice;
          if (userPrice != null) {
            found = userPrice.find((currency) => {
              currency = currency.currency;
              const DISCORD_ORB = constants.DISCORD_ORB;
              return storeHasPrice ? currency === DISCORD_ORB : currency !== DISCORD_ORB;
            });
          }
        }
        let obj = { userPrice: found, pricesForPurchaseType: tmp12, purchaseType: SELF_PURCHASE, storeHasPrice: true };
        return obj;
      }
    }
    obj = { userPrice: "r", pricesForPurchaseType: "w", purchaseType: SELF_PURCHASE, storeHasPrice: null != stateFromStores1 };
    return obj;
  }, items1);
  let userPrice = memo.userPrice;
  storeHasPrice = memo.storeHasPrice;
  let obj = sku(storeHasPrice[10]);
  const items2 = [UserStore];
  stateFromStores1 = sku(storeHasPrice[10]).useStateFromStores(items2, () => currentUser.getCurrentUser());
  const items3 = [stateFromStores1];
  const memo1 = stateFromStores1.useMemo(() => PremiumUtilsDefault.isPremium(stateFromStores1, PremiumTypes.TIER_2), items3);
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
      let obj = OrbCheckoutUtils;
      const orbPriceFromPrices = obj.getOrbPriceFromPrices(tmp.prices, memo1);
      let tmp7 = null;
      if (null != orbPriceFromPrices) {
        obj = { amount: null, currency: null };
        ({ amount: obj2.amount, currency: obj2.currency } = orbPriceFromPrices);
        tmp7 = obj;
      }
      return tmp7;
    }
  }, items4);
};