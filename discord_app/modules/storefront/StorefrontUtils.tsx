// === Module 6746: StorefrontUtils ===

// Module 6746 (StorefrontUtils)
import _modDef12 from "module_12" /* 12 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4534 */;
import StorefrontTypes from "StorefrontTypes" /* 6748 */;
import SlayerStorefrontPriceUtils from "SlayerStorefrontPriceUtils" /* 6749 */;
import PriceUtils from "PriceUtils" /* 6750 */;
import OrbCheckoutUtils from "OrbCheckoutUtils" /* 6753 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import UserStore from "UserStore" /* 1377 */;
import SKUPricesStore from "SKUPricesStore" /* 6747 */;

require = fn;
function formatSKUPrice(arg0, stateFromStores) {
  ({ normalPrice, discountedPrice, discountPercent, userPrice } = arg0);
  let formatPriceResult = null;
  if (null != normalPrice) {
    formatPriceResult = PriceUtils.formatPrice(normalPrice.amount, normalPrice.currency);
  }
  const obj2 = { normalPrice: formatPriceResult, discountedPrice: null, discountPercent: null, userPrice: null };
  let formatPriceResult1 = null;
  if (null != discountedPrice) {
    formatPriceResult1 = PriceUtils.formatPrice(discountedPrice.amount, discountedPrice.currency);
  }
  obj2.discountedPrice = formatPriceResult1;
  let formatPercentResult = null;
  if (null != discountPercent) {
    formatPercentResult = PriceUtils.formatPercent(stateFromStores, -discountPercent / 100);
  }
  obj2.discountPercent = formatPercentResult;
  let formatPriceResult2 = null;
  if (null != userPrice) {
    formatPriceResult2 = PriceUtils.formatPrice(userPrice.amount, userPrice.currency);
  }
  obj2.userPrice = formatPriceResult2;
  return obj2;
}
const Constants = fn(1085);
({ CurrencyCodes: closure_7, PriceSetAssignmentPurchaseTypes: closure_8, PriceTypes: closure_9, SKUFlags: c10, SKUProductLines: closure_11 } = Constants);
const PremiumTypes = fn(1379).PremiumTypes;
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((sku) => {
  const cResult = sku(576).c(15);
  sku = sku.sku;
  ({ priceSetAssignmentPurchaseType, isOrbPrice } = sku);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SKUPricesStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  let id;
  if (sku != null) {
    id = sku.id;
  }
  if (cResult[1] !== id) {
    let id1;
    if (sku != null) {
      id1 = sku.id;
    }
    const fn = function s() {
      let id;
      if (sku != null) {
        id = sku.id;
      }
      if (id == null) {
        id = null;
      }
      return SKUPricesStore.getPricesForSkuId(id);
    };
    cResult[1] = id1;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = sku(576);
  const stateFromStores = sku(504).useStateFromStores(first, tmp7);
  if (cResult[3] !== priceSetAssignmentPurchaseType) {
    if (null == priceSetAssignmentPurchaseType) {
      let GIFT = tmp(6748).StorefrontPurchaseType.SELF_PURCHASE;
    } else {
      if (constants2.DEFAULT === priceSetAssignmentPurchaseType) {
        GIFT = tmp(6748).StorefrontPurchaseType.SELF_PURCHASE;
      } else if (tmp11.GIFT !== priceSetAssignmentPurchaseType) {
        GIFT = tmp(6748).StorefrontPurchaseType.SELF_PURCHASE;
      }
      GIFT = tmp(6748).StorefrontPurchaseType.GIFT;
    }
    cResult[3] = priceSetAssignmentPurchaseType;
    cResult[4] = GIFT;
  } else {
    if (null != sku) {
      if (null != stateFromStores) {
        let tmp15 = stateFromStores[tmp10];
        if (tmp15 == null) {
          tmp15 = stateFromStores[tmp(undefined, 6748).StorefrontPurchaseType.SELF_PURCHASE];
        }
        if (cResult[8] === isOrbPrice) {
          let userPrice;
          if (tmp15 != null) {
            userPrice = tmp15.userPrice;
          }
          if (cResult[9] === userPrice) {
            let tmp17 = cResult[10];
          }
          if (cResult[11] === tmp15) {
            if (cResult[12] === tmp10) {
            }
          }
          const obj2 = { userPrice: tmp17, pricesForPurchaseType: tmp15, purchaseType: tmp10, storeHasPrice: true };
          cResult[11] = tmp15;
          cResult[12] = tmp10;
          cResult[13] = tmp17;
          cResult[14] = obj2;
        }
        let found;
        if (tmp15 != null) {
          const userPrice1 = tmp15.userPrice;
          if (userPrice1 != null) {
            found = userPrice1.find((currency) => {
              currency = currency.currency;
              const DISCORD_ORB = constants.DISCORD_ORB;
              return isOrbPrice ? currency === DISCORD_ORB : currency !== DISCORD_ORB;
            });
          }
        }
        cResult[8] = isOrbPrice;
        let userPrice2;
        if (tmp15 != null) {
          userPrice2 = tmp15.userPrice;
        }
        cResult[9] = userPrice2;
        cResult[10] = found;
        tmp17 = found;
      }
    }
    if (cResult[5] === cResult[4]) {
      if (cResult[6] === tmp13) {
        let tmp14 = cResult[7];
      }
      return tmp14;
    }
    const obj3 = { userPrice: "r", pricesForPurchaseType: "emoji", purchaseType: cResult[4], storeHasPrice: null != stateFromStores };
    cResult[5] = cResult[4];
    cResult[6] = null != stateFromStores;
    cResult[7] = obj3;
    tmp14 = obj3;
  }
  const tmpResult = sku(504);
}) : ((sku) => {
  sku = sku.sku;
  const priceSetAssignmentPurchaseType = sku.priceSetAssignmentPurchaseType;
  const isOrbPrice = sku.isOrbPrice;
  const items = [SKUPricesStore];
  const stateFromStores = sku(isOrbPrice[12]).useStateFromStores(items, () => {
    let id;
    if (sku != null) {
      id = sku.id;
    }
    if (id == null) {
      id = null;
    }
    return SKUPricesStore.getPricesForSkuId(id);
  });
  const items1 = [sku, stateFromStores, priceSetAssignmentPurchaseType, isOrbPrice];
  return stateFromStores.useMemo(() => {
    if (null == priceSetAssignmentPurchaseType) {
      let SELF_PURCHASE = StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE;
      let tmp4 = require;
    } else if (constants2.DEFAULT === priceSetAssignmentPurchaseType) {
      SELF_PURCHASE = StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE;
      tmp4 = require;
    } else if (tmp14.GIFT === priceSetAssignmentPurchaseType) {
      SELF_PURCHASE = StorefrontTypes.StorefrontPurchaseType.GIFT;
      tmp4 = require;
    } else {
      SELF_PURCHASE = StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE;
      tmp4 = require;
    }
    if (null != sku) {
      if (null != stateFromStores) {
        let tmp12 = stateFromStores[SELF_PURCHASE];
        if (tmp12 == null) {
          tmp12 = stateFromStores[tmp4(undefined, 6748).StorefrontPurchaseType.SELF_PURCHASE];
        }
        let found;
        if (tmp12 != null) {
          const userPrice = tmp12.userPrice;
          if (userPrice != null) {
            found = userPrice.find((currency) => {
              currency = currency.currency;
              const DISCORD_ORB = constants.DISCORD_ORB;
              return isOrbPrice ? currency === DISCORD_ORB : currency !== DISCORD_ORB;
            });
          }
        }
        const obj = { userPrice: found, pricesForPurchaseType: tmp12, purchaseType: SELF_PURCHASE, storeHasPrice: true };
        return obj;
      }
    }
    const obj2 = { userPrice: "r", pricesForPurchaseType: "emoji", purchaseType: SELF_PURCHASE, storeHasPrice: null != stateFromStores };
    return obj2;
  }, items1);
});
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((sku) => {
  const cResult = sku(576).c(29);
  sku = sku.sku;
  let DEFAULT = sku.priceSetAssignmentPurchaseType;
  if (undefined === DEFAULT) {
    DEFAULT = constants2.DEFAULT;
  }
  if (cResult[0] === DEFAULT) {
    if (cResult[1] === sku) {
      let tmp5 = cResult[2];
    }
    const tmp7 = closure_13(tmp5);
    ({ userPrice, pricesForPurchaseType, purchaseType } = tmp7);
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [SKUPricesStore];
      cResult[3] = items;
      let tmp9 = items;
    } else {
      tmp9 = cResult[3];
    }
    let id;
    if (sku != null) {
      id = sku.id;
    }
    if (cResult[4] !== id) {
      let id1;
      if (sku != null) {
        id1 = sku.id;
      }
      const fn = function v() {
        let id;
        if (sku != null) {
          id = sku.id;
        }
        let rewardsForSkuId = SKUPricesStore.getRewardsForSkuId(id);
        if (rewardsForSkuId == null) {
          rewardsForSkuId = [];
        }
        return rewardsForSkuId;
      };
      cResult[4] = id1;
      cResult[5] = fn;
      let tmp13 = fn;
    } else {
      tmp13 = cResult[5];
    }
    const stateFromStoresArray = tmp(504).useStateFromStoresArray(tmp9, tmp13);
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [UserStore];
      class O {
        constructor() {
          return closure_1_5.getCurrentUser();
        }
      }
      cResult[6] = items1;
      cResult[7] = O;
      let tmp16 = O;
      let tmp15 = items1;
    } else {
      tmp15 = cResult[6];
      tmp16 = cResult[7];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmp(504).useStateFromStores(tmp15, tmp16);
    if (null != sku) {
      if (tmp7.storeHasPrice) {
        if (cResult[15] === purchaseType) {
          if (cResult[16] === stateFromStoresArray) {
            let tmp29 = null;
            if (null != cResult[17]) {
              tmp29 = tmp25[purchaseType];
            }
            class O {
              constructor() {
                return closure_1_5.getCurrentUser();
              }
            }
            let amount = null;
            if (null != tmp29) {
              amount = null;
              if (tmp29.amount > 0) {
                amount = tmp29.amount;
              }
            }
            if (cResult[20] === tmp29) {
              if (pricesForPurchaseType != null) {
                const prices = pricesForPurchaseType.prices;
              }
              class O {
                constructor() {
                  return closure_1_5.getCurrentUser();
                }
              }
            }
            let tmp34 = userPrice;
            if (null != tmp29) {
              if (pricesForPurchaseType != null) {
                class O {
                  constructor() {
                    return closure_1_5.getCurrentUser();
                  }
                }
              }
              tmp34 = tmp35;
            }
            cResult[20] = tmp29;
            let prices1;
            if (pricesForPurchaseType != null) {
              prices1 = pricesForPurchaseType.prices;
            }
            cResult[21] = prices1;
            cResult[22] = userPrice;
            cResult[23] = tmp34;
          }
        }
        if (cResult[18] !== purchaseType) {
          const fn2 = function b(arg0) {
            if (null == arg0[purchaseType]) {
              return false;
            } else {
              const type = tmp.type;
              if (StorefrontTypes.StorefrontPromotionRewardType.DISCOUNT === type) {
                return true;
              } else {
                if (StorefrontTypes.StorefrontPromotionRewardType.FIXED_PRICE !== type) {
                  if (StorefrontTypes.StorefrontPromotionRewardType.ACTION !== type) {
                    const BENEFIT = StorefrontTypes.StorefrontPromotionRewardType.BENEFIT;
                  }
                }
                return false;
              }
            }
          };
          cResult[18] = purchaseType;
          class O {
            constructor() {
              return closure_1_5.getCurrentUser();
            }
          }
          cResult[19] = fn2;
          let tmp26 = fn2;
        } else {
          tmp26 = cResult[19];
        }
        const found = stateFromStoresArray.find(tmp26);
        class O {
          constructor() {
            return closure_1_5.getCurrentUser();
          }
        }
        cResult[15] = purchaseType;
        cResult[16] = stateFromStoresArray;
        cResult[17] = found;
      } else {
        if (stateFromStores != null) {
          const premiumType = stateFromStores.premiumType;
        }
        class O {
          constructor() {
            return closure_1_5.getCurrentUser();
          }
        }
        if (sku.productLine === constants5.SOCIAL_LAYER_GAME_ITEM) {
          const price = tmp(6749).getPrice(sku, DEFAULT);
          const tmpResult4 = tmp(6749);
        } else {
          const getPrice = sku.getPrice;
          if (stateFromStores != null) {
            const premiumType2 = stateFromStores.premiumType;
          }
          class O {
            constructor() {
              return closure_1_5.getCurrentUser();
            }
          }
        }
        let premiumType1;
        if (stateFromStores != null) {
          premiumType1 = stateFromStores.premiumType;
        }
        cResult[9] = premiumType1;
        cResult[10] = DEFAULT;
        cResult[11] = sku;
        cResult[12] = price;
      }
    } else {
      const _Symbol3 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        cResult[8] = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
        class O {
          constructor() {
            return closure_1_5.getCurrentUser();
          }
        }
        const obj2 = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
      } else {
        const tmp19 = cResult[8];
      }
    }
    return tmp19;
  }
  const obj3 = { sku, priceSetAssignmentPurchaseType: DEFAULT, isOrbPrice: false };
  cResult[0] = DEFAULT;
  cResult[1] = sku;
  cResult[2] = obj3;
  tmp5 = obj3;
  const obj = sku(576);
}) : ((sku) => {
  sku = sku.sku;
  let DEFAULT = sku.priceSetAssignmentPurchaseType;
  if (DEFAULT === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  let stateFromStoresArray;
  const tmp2 = closure_13({ sku, priceSetAssignmentPurchaseType: DEFAULT, isOrbPrice: false });
  const userPrice = tmp2.userPrice;
  const pricesForPurchaseType = tmp2.pricesForPurchaseType;
  const purchaseType = tmp2.purchaseType;
  const storeHasPrice = tmp2.storeHasPrice;
  const items = [stateFromStoresArray];
  stateFromStoresArray = sku(userPrice[12]).useStateFromStoresArray(items, () => {
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
  const obj = sku(userPrice[12]);
  const items1 = [storeHasPrice];
  const stateFromStores = sku(userPrice[12]).useStateFromStores(items1, () => storeHasPrice.getCurrentUser());
  const items2 = [sku, DEFAULT, , , , , , ];
  let premiumType;
  if (stateFromStores != null) {
    premiumType = stateFromStores.premiumType;
  }
  items2[2] = premiumType;
  items2[3] = storeHasPrice;
  items2[4] = userPrice;
  items2[5] = pricesForPurchaseType;
  items2[6] = purchaseType;
  items2[7] = stateFromStoresArray;
  return pricesForPurchaseType.useMemo(() => {
    if (null == sku) {
      return { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
    } else if (storeHasPrice) {
      const found = stateFromStoresArray.find((item) => {
        if (null == item[purchaseType]) {
          return false;
        } else {
          const type2 = tmp.type;
          if (sku(userPrice[7]).StorefrontPromotionRewardType.DISCOUNT === type2) {
            return true;
          } else {
            if (sku(userPrice[7]).StorefrontPromotionRewardType.FIXED_PRICE !== type2) {
              if (sku(userPrice[7]).StorefrontPromotionRewardType.ACTION !== type2) {
                if (sku(userPrice[7]).StorefrontPromotionRewardType.BENEFIT !== type2) {
                  const type = tmp.type;
                  return false;
                }
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
          if (pricesForPurchaseType.prices[constants3.BASE] != null) {
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
      const obj3 = { normalPrice: tmp13, discountedPrice: tmp11, discountPercent: amount, userPrice: null };
      let tmp19 = userPrice;
      if (userPrice == null) {
        tmp19 = null;
      }
      obj3.userPrice = tmp19;
      return obj3;
    } else {
      if (sku.productLine === constants5.SOCIAL_LAYER_GAME_ITEM) {
        let price = SlayerStorefrontPriceUtils.getPrice(sku, DEFAULT);
      } else {
        let premiumType;
        if (stateFromStores != null) {
          premiumType = stateFromStores.premiumType;
        }
        price = sku.getPrice(premiumType);
      }
      if (price == null) {
        price = null;
      }
      const obj4 = { normalPrice: price, discountedPrice: null, discountPercent: null, userPrice: price };
      return obj4;
    }
  }, items2);
});
let closure_14 = tmp3;
fn(558);
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    const fn = function u() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === arg0) {
      let tmp8 = cResult[4];
    }
    return tmp8;
  }
  const tmp9 = formatSKUPrice(arg0, stateFromStores);
  cResult[2] = stateFromStores;
  cResult[3] = arg0;
  cResult[4] = tmp9;
  tmp8 = tmp9;
  const tmpResult = initialize;
}) : ((arg0) => {
  _require = arg0;
  const items = [LocaleStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => locale.locale);
  const items1 = [arg0, stateFromStores];
  return noop.useMemo(() => formatSKUPrice(closure_0, stateFromStores), items1);
});
let closure_15 = tmp5;
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  ({ sku, priceSetAssignmentPurchaseType } = arg0);
  if (undefined === priceSetAssignmentPurchaseType) {
    priceSetAssignmentPurchaseType = constants2.DEFAULT;
  }
  if (cResult[0] === priceSetAssignmentPurchaseType) {
    if (cResult[1] === sku) {
      let tmp3 = cResult[2];
    }
    return closure_15(closure_14(tmp3));
  }
  const obj2 = { sku, priceSetAssignmentPurchaseType };
  cResult[0] = priceSetAssignmentPurchaseType;
  cResult[1] = sku;
  cResult[2] = obj2;
  tmp3 = obj2;
}) : ((sku) => {
  let priceSetAssignmentPurchaseType = sku.priceSetAssignmentPurchaseType;
  if (priceSetAssignmentPurchaseType === undefined) {
    priceSetAssignmentPurchaseType = constants2.DEFAULT;
  }
  return closure_15(closure_14({ sku: sku.sku, priceSetAssignmentPurchaseType }));
});
function transformPriceSetAssignmentToStorefrontPurchaseType(arg0) {
  if (null == arg0) {
    return StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE;
  } else if (constants2.DEFAULT === arg0) {
    return StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE;
  } else if (tmp9.GIFT === arg0) {
    return StorefrontTypes.StorefrontPurchaseType.GIFT;
  } else {
    return StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/StorefrontUtils.tsx");

export const transformStorefrontPricesServer = function transformStorefrontPricesServer(storefront_pricing) {
  let obj = { skuPriceMap: _modDef12.mapValues(storefront_pricing.sku_price_map, (pricingResultId) => ({ pricingResultId: pricingResultId.pricing_result_id, storefrontPromotionIds: pricingResultId.storefront_promotion_ids, rewardResultIds: pricingResultId.reward_result_ids, offerResultIds: pricingResultId.offer_result_ids })), pricingResultIdMap: null, rewardResultIdMap: null, offerResultIdMap: null };
  obj.pricingResultIdMap = _modDef12.mapValues(storefront_pricing.pricing_result_id_map, (arg0) => _modDef12.mapValues(arg0, (user_price) => {
    const obj = { userPrice: null, prices: null };
    user_price = user_price.user_price;
    obj.userPrice = user_price.map((currency) => ({ currency: currency.currency, amount: currency.amount }));
    obj.prices = closure_1_1(dependencyMap[6]).mapValues(user_price.prices, (arg0) => closure_1_1(closure_1_2[6]).mapValues(arg0, (arr) => arr.map(() => { ... })));
    return obj;
  }));
  obj.rewardResultIdMap = _modDef12.mapValues(storefront_pricing.reward_result_id_map, (arg0) => _modDef12.mapValues(arg0, (type) => ({ type: type.type, amount: type.amount })));
  obj.offerResultIdMap = _modDef12.mapValues(storefront_pricing.offer_result_id_map, (promotionId) => ({ promotionId: promotionId.promotion_id, type: promotionId.type, rewardStatus: promotionId.reward_status, purchaseTypes: promotionId.purchase_types, rewardResultId: promotionId.reward_result_id }));
  return obj;
};
export { transformPriceSetAssignmentToStorefrontPurchaseType };
export const isSlayerSkuAvailableOnThisPlatform = function isSlayerSkuAvailableOnThisPlatform(sku) {
  if (null != sku) {
    if (sku.productLine === constants5.SOCIAL_LAYER_GAME_ITEM) {
      let num;
      if (sku != null) {
        num = sku.flags;
      }
      if (num == null) {
        num = 0;
      }
      if (obj.isIOS()) {
        let hasFlagResult = FlagUtils.hasFlag(num, constants4.AVAILABLE_ON_IOS);
        const tmpResult = FlagUtils;
      } else {
        const isAndroidResult = utils_PlatformUtils.isAndroid();
        hasFlagResult = !isAndroidResult;
        if (isAndroidResult) {
          hasFlagResult = FlagUtils.hasFlag(num, constants4.AVAILABLE_ON_ANDROID);
          const tmpResult4 = FlagUtils;
        }
        const tmpResult3 = utils_PlatformUtils;
      }
      return hasFlagResult;
    }
  }
  return false;
};
export const useSKUPrice = tmp3;
export const useFormattedSKUPrice = tmp4;
export const useFormatSKUPrice = tmp5;
export { formatSKUPrice };
export const useSKUOrbPrice = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  ({ sku, priceSetAssignmentPurchaseType } = arg0);
  if (undefined === priceSetAssignmentPurchaseType) {
    priceSetAssignmentPurchaseType = constants2.DEFAULT;
  }
  if (cResult[0] === priceSetAssignmentPurchaseType) {
    if (cResult[1] === sku) {
      let tmp5 = cResult[2];
    }
    const tmp7 = closure_13(tmp5);
    let userPrice = tmp7.userPrice;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [UserStore];
      class S {
        constructor() {
          return closure_1_5.getCurrentUser();
        }
      }
      cResult[3] = items;
      cResult[4] = S;
      let tmp11 = S;
      let tmp10 = items;
    } else {
      tmp10 = cResult[3];
      tmp11 = cResult[4];
    }
    const stateFromStores = initialize.useStateFromStores(tmp10, tmp11);
    if (cResult[5] !== stateFromStores) {
      PremiumUtilsDefault;
      class S {
        constructor() {
          return closure_1_5.getCurrentUser();
        }
      }
      cResult[5] = stateFromStores;
      cResult[6] = tmp18;
      let tmp14 = tmp18;
    } else {
      tmp14 = cResult[6];
    }
    let tmp20 = null;
    if (null != sku) {
      if (tmp7.storeHasPrice) {
        if (userPrice == null) {
          userPrice = null;
        }
        tmp20 = userPrice;
      } else {
        if (cResult[7] === tmp14) {
          if (cResult[8] === sku.prices) {
            let tmp21 = cResult[9];
          }
          if (cResult[10] !== tmp21) {
            if (null != tmp21) {
              ({ amount: obj5.amount, currency: obj5.currency } = tmp21);
              class S {
                constructor() {
                  return closure_1_5.getCurrentUser();
                }
              }
            }
            class S {
              constructor() {
                return closure_1_5.getCurrentUser();
              }
            }
            cResult[11] = null;
            let tmp23 = tmp24;
          } else {
            tmp23 = cResult[11];
          }
          tmp20 = tmp23;
        }
        const orbPriceFromPrices = OrbCheckoutUtils.getOrbPriceFromPrices(sku.prices, tmp14);
        class S {
          constructor() {
            return closure_1_5.getCurrentUser();
          }
        }
        cResult[7] = tmp14;
        cResult[8] = sku.prices;
        cResult[9] = orbPriceFromPrices;
        tmp21 = orbPriceFromPrices;
        const tmpResult2 = OrbCheckoutUtils;
      }
    }
    return tmp20;
  }
  const obj3 = { sku, priceSetAssignmentPurchaseType, isOrbPrice: true };
  cResult[0] = priceSetAssignmentPurchaseType;
  cResult[1] = sku;
  cResult[2] = obj3;
  tmp5 = obj3;
}) : ((sku) => {
  sku = sku.sku;
  let DEFAULT = sku.priceSetAssignmentPurchaseType;
  if (DEFAULT === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  const tmp2 = closure_13({ sku, priceSetAssignmentPurchaseType: DEFAULT, isOrbPrice: true });
  const userPrice = tmp2.userPrice;
  const storeHasPrice = tmp2.storeHasPrice;
  const items = [UserStore];
  const stateFromStores = sku(storeHasPrice[12]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => PremiumUtilsDefault.isPremium(stateFromStores, PremiumTypes.TIER_2), items1);
  const items2 = [sku, memo, storeHasPrice, userPrice];
  return stateFromStores.useMemo(() => {
    if (null == sku) {
      return null;
    } else if (storeHasPrice) {
      let tmp8 = userPrice;
      if (userPrice == null) {
        tmp8 = null;
      }
      return tmp8;
    } else {
      const orbPriceFromPrices = OrbCheckoutUtils.getOrbPriceFromPrices(tmp.prices, memo);
      let tmp7 = null;
      if (null != orbPriceFromPrices) {
        ({ amount: obj2.amount, currency: obj2.currency } = orbPriceFromPrices);
        tmp7 = { amount: null, currency: null };
        const obj3 = { amount: null, currency: null };
      }
      return tmp7;
    }
  }, items2);
});
export const getPromoCodeFromClaimResponse = function getPromoCodeFromClaimResponse(arg0) {
  const iter = arg0.redemptions[Symbol.iterator]();
  while (iter !== undefined) {
    let rewards = iter.next().rewards;
    for (const item10014 of rewards) {
      if (null != item10014.promo_code) {
        obj.return();
        iter.return();
        return tmp3.promo_code;
      }
    }
    continue;
  }
  return null;
};