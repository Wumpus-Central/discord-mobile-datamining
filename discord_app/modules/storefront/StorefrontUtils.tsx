// discord_app/modules/storefront/StorefrontUtils.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../_runtime/00576_react.js";
import utils_PlatformUtils from "../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import PremiumConstants from "../premium/PremiumConstants.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import PremiumUtilsDefault from "../../utils/PremiumUtils.tsx";
import StorefrontTypes from "StorefrontTypes.tsx";
import SlayerStorefrontPriceUtils from "../slayer_storefront/SlayerStorefrontPriceUtils.tsx";
import PriceUtils from "../../utils/PriceUtils.tsx";
import OrbCheckoutUtils from "../virtual_currency/checkout/OrbCheckoutUtils.tsx";
import react from "../../../_runtime/00019_react.js";
import LocaleStore from "../user_settings/LocaleStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import SKUPricesStore from "SKUPricesStore.tsx";
import Constants from "../../Constants.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, user_price;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
function formatSKUPrice(arg0, stateFromStores) {
  let discountPercent;
  let discountedPrice;
  let formatPercentResult;
  let formatPriceResult1;
  let formatPriceResult2;
  let normalPrice;
  let userPrice;
  ({ normalPrice, discountedPrice, discountPercent, userPrice } = arg0);
  let formatPriceResult = null;
  if (null != normalPrice) {
    const obj = PriceUtils;
    formatPriceResult = obj.formatPrice(normalPrice.amount, normalPrice.currency);
  }
  const obj2 = {
    normalPrice: formatPriceResult,
    discountedPrice: formatPriceResult1,
    discountPercent: formatPercentResult,
    userPrice: formatPriceResult2,
  };
  formatPriceResult1 = null;
  if (null != discountedPrice) {
    const obj3 = PriceUtils;
    formatPriceResult1 = obj3.formatPrice(discountedPrice.amount, discountedPrice.currency);
  }
  formatPercentResult = null;
  if (null != discountPercent) {
    const obj4 = PriceUtils;
    formatPercentResult = obj4.formatPercent(stateFromStores, -discountPercent / 100);
  }
  formatPriceResult2 = null;
  if (null != userPrice) {
    const obj5 = PriceUtils;
    formatPriceResult2 = obj5.formatPrice(userPrice.amount, userPrice.currency);
  }
  return obj2;
}
({
  CurrencyCodes: metroImportDefault,
  PriceSetAssignmentPurchaseTypes: metroImportAll,
  PriceTypes: c9,
  SKUFlags: c10,
  SKUProductLines: unpackModuleId,
} = Constants);
const PremiumTypes = PremiumConstants.PremiumTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (sku) => {
      let first;
      let isOrbPrice;
      let priceSetAssignmentPurchaseType;
      let tmp11;
      let tmp14;
      let tmp8;
      const obj = sku(576);
      const cResult = obj.c(15);
      sku = sku.sku;
      ({ priceSetAssignmentPurchaseType, isOrbPrice } = sku);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SKUPricesStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      let id;
      const tmp6 = cResult[1];
      if (sku != null) {
        id = sku.id;
      }
      if (tmp6 !== id) {
        let id1;
        if (sku != null) {
          id1 = sku.id;
        }
        const fn = function s() {
          let id;
          const getPricesForSkuId = SKUPricesStore.getPricesForSkuId;
          if (sku != null) {
            id = sku.id;
          }
          if (id == null) {
            id = null;
          }
          return getPricesForSkuId(id);
        };
        cResult[1] = id1;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult = sku(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
      if (cResult[3] !== priceSetAssignmentPurchaseType) {
        let SELF_PURCHASE;
        if (null == priceSetAssignmentPurchaseType) {
          SELF_PURCHASE = tmp(6748).StorefrontPurchaseType.SELF_PURCHASE;
        } else if (constants2.DEFAULT === priceSetAssignmentPurchaseType) {
          SELF_PURCHASE = tmp(6748).StorefrontPurchaseType.SELF_PURCHASE;
        } else if (tmp12.GIFT === priceSetAssignmentPurchaseType) {
          SELF_PURCHASE = tmp(6748).StorefrontPurchaseType.GIFT;
        } else {
          SELF_PURCHASE = tmp(6748).StorefrontPurchaseType.SELF_PURCHASE;
        }
        cResult[3] = priceSetAssignmentPurchaseType;
        cResult[4] = SELF_PURCHASE;
        tmp11 = SELF_PURCHASE;
      } else {
        tmp11 = cResult[4];
      }
      if (null != sku) {
        if (null != stateFromStores) {
          let tmp15 = stateFromStores[tmp11];
          if (tmp15 == null) {
            tmp15 = stateFromStores[tmp(undefined, 6748).StorefrontPurchaseType.SELF_PURCHASE];
          }
          if (cResult[8] === isOrbPrice) {
            let tmp18;
            let userPrice;
            const tmp16 = cResult[9];
            if (tmp15 != null) {
              userPrice = tmp15.userPrice;
            }
            if (tmp16 === userPrice) {
              tmp18 = cResult[10];
            }
            if (cResult[11] === tmp15) {
              if (cResult[12] === tmp11) {
                let tmp21;
                if (cResult[13] === tmp18) {
                  tmp21 = cResult[14];
                }
                tmp14 = tmp21;
              }
            }
            const obj2 = { userPrice: tmp18, pricesForPurchaseType: tmp15, purchaseType: tmp11, storeHasPrice: true };
            cResult[11] = tmp15;
            cResult[12] = tmp11;
            cResult[13] = tmp18;
            cResult[14] = obj2;
            tmp21 = obj2;
          }
          let found;
          if (tmp15 != null) {
            const userPrice1 = tmp15.userPrice;
            if (userPrice1 != null) {
              found = userPrice1.find((currency) => {
                currency = currency.currency;
                const DISCORD_ORB = metroImportDefault.DISCORD_ORB;
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
          tmp18 = found;
        }
        return tmp14;
      }
      if (cResult[5] === tmp11) {
        if ((cResult[6] === null) != stateFromStores) {
          tmp14 = cResult[7];
        }
      }
      const obj3 = {
        userPrice: "r",
        pricesForPurchaseType: "emoji",
        purchaseType: tmp11,
        storeHasPrice: null != stateFromStores,
      };
      cResult[5] = tmp11;
      cResult[6] = null != stateFromStores;
      cResult[7] = obj3;
      tmp14 = obj3;
    }
  : (sku) => {
      sku = sku.sku;
      const priceSetAssignmentPurchaseType = sku.priceSetAssignmentPurchaseType;
      const isOrbPrice = sku.isOrbPrice;
      const obj = sku(isOrbPrice[12]);
      const items = [SKUPricesStore];
      const stateFromStores = obj.useStateFromStores(items, () => {
        let id;
        const getPricesForSkuId = SKUPricesStore.getPricesForSkuId;
        if (sku != null) {
          id = sku.id;
        }
        if (id == null) {
          id = null;
        }
        return getPricesForSkuId(id);
      });
      const items1 = [sku, stateFromStores, priceSetAssignmentPurchaseType, isOrbPrice];
      return stateFromStores.useMemo(() => {
        let SELF_PURCHASE;
        let tmp4;
        if (null == priceSetAssignmentPurchaseType) {
          SELF_PURCHASE = StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE;
          tmp4 = require;
        } else if (metroImportAll.DEFAULT === priceSetAssignmentPurchaseType) {
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
            return { userPrice: found, pricesForPurchaseType: tmp12, purchaseType: SELF_PURCHASE, storeHasPrice: true };
          }
        }
        return {
          userPrice: "r",
          pricesForPurchaseType: "emoji",
          purchaseType: SELF_PURCHASE,
          storeHasPrice: null != stateFromStores,
        };
      }, items1);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (sku) => {
      let currentUser;
      let pricesForPurchaseType;
      let purchaseType;
      let userPrice;
      const tmp = sku;
      const obj = sku(576);
      const cResult = obj.c(29);
      sku = sku.sku;
      let DEFAULT = sku.priceSetAssignmentPurchaseType;
      if (undefined === DEFAULT) {
        DEFAULT = constants2.DEFAULT;
      }
      if (cResult[0] === DEFAULT) {
        let tmp5;
        let tmp9;
        let tmp14;
        let tmp17;
        let tmp16;
        let tmp20;
        if (cResult[1] === sku) {
          tmp5 = cResult[2];
        }
        const tmp7 = closure_13(tmp5);
        ({ userPrice, pricesForPurchaseType, purchaseType } = tmp7);
        const _Symbol = Symbol;
        const storeHasPrice = tmp7.storeHasPrice;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [SKUPricesStore];
          cResult[3] = items;
          tmp9 = items;
        } else {
          tmp9 = cResult[3];
        }
        let id;
        const tmp11 = cResult[4];
        if (sku != null) {
          id = sku.id;
        }
        if (tmp11 !== id) {
          let id1;
          if (sku != null) {
            id1 = sku.id;
          }
          const fn = function v() {
            let id;
            const getRewardsForSkuId = SKUPricesStore.getRewardsForSkuId;
            if (sku != null) {
              id = sku.id;
            }
            let rewardsForSkuId = getRewardsForSkuId(id);
            if (rewardsForSkuId == null) {
              rewardsForSkuId = [];
            }
            return rewardsForSkuId;
          };
          cResult[4] = id1;
          cResult[5] = fn;
          tmp14 = fn;
        } else {
          tmp14 = cResult[5];
        }
        const tmpResult = tmp(504);
        const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp9, tmp14);
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [UserStore];
          class O {
            constructor() {
              return currentUser.getCurrentUser();
            }
          }
          cResult[6] = items1;
          cResult[7] = O;
          tmp17 = O;
          tmp16 = items1;
        } else {
          tmp16 = cResult[6];
          tmp17 = cResult[7];
        }
        const tmpResult3 = tmp(504);
        const stateFromStores = tmpResult3.useStateFromStores(tmp16, tmp17);
        if (null != sku) {
          if (storeHasPrice) {
            let tmp27;
            if (cResult[15] === purchaseType) {
              let tmp26;
              if (cResult[16] === stateFromStoresArray) {
                tmp26 = cResult[17];
              }
              let tmp29 = null;
              if (null != tmp26) {
                tmp29 = tmp26[purchaseType];
              }
              class O {
                constructor() {
                  return currentUser.getCurrentUser();
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
                    return currentUser.getCurrentUser();
                  }
                }
              }
              let tmp34 = userPrice;
              if (null != tmp29) {
                if (pricesForPurchaseType != null) {
                  class O {
                    constructor() {
                      return currentUser.getCurrentUser();
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
                  return currentUser.getCurrentUser();
                }
              }
              cResult[19] = fn2;
              tmp27 = fn2;
            } else {
              tmp27 = cResult[19];
            }
            const found = stateFromStoresArray.find(tmp27);
            class O {
              constructor() {
                return currentUser.getCurrentUser();
              }
            }
            cResult[15] = purchaseType;
            cResult[16] = stateFromStoresArray;
            cResult[17] = found;
            tmp26 = found;
          } else {
            let price;
            if (stateFromStores != null) {
              const premiumType = stateFromStores.premiumType;
            }
            class O {
              constructor() {
                return currentUser.getCurrentUser();
              }
            }
            if (sku.productLine === constants5.SOCIAL_LAYER_GAME_ITEM) {
              const tmpResult4 = tmp(6749);
              price = tmpResult4.getPrice(sku, DEFAULT);
            } else {
              const getPrice = sku.getPrice;
              if (stateFromStores != null) {
                const premiumType2 = stateFromStores.premiumType;
              }
              class O {
                constructor() {
                  return currentUser.getCurrentUser();
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
            const obj2 = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
            cResult[8] = obj2;
            class O {
              constructor() {
                return currentUser.getCurrentUser();
              }
            }
          } else {
            tmp20 = cResult[8];
          }
        }
        return tmp20;
      }
      const obj3 = { sku, priceSetAssignmentPurchaseType: DEFAULT, isOrbPrice: false };
      cResult[0] = DEFAULT;
      cResult[1] = sku;
      cResult[2] = obj3;
      tmp5 = obj3;
    }
  : (sku) => {
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
      let obj = sku(userPrice[12]);
      const items = [stateFromStoresArray];
      stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
        let id;
        const getRewardsForSkuId = SKUPricesStore.getRewardsForSkuId;
        if (sku != null) {
          id = sku.id;
        }
        let rewardsForSkuId = getRewardsForSkuId(id);
        if (rewardsForSkuId == null) {
          rewardsForSkuId = [];
        }
        return rewardsForSkuId;
      });
      let obj2 = sku(userPrice[12]);
      const items1 = [storeHasPrice];
      const stateFromStores = obj2.useStateFromStores(items1, () => storeHasPrice.getCurrentUser());
      const items2 = [sku, DEFAULT, , , , , ,];
      let premiumType;
      const useMemo = pricesForPurchaseType.useMemo;
      if (stateFromStores != null) {
        premiumType = stateFromStores.premiumType;
      }
      items2[2] = premiumType;
      items2[3] = storeHasPrice;
      items2[4] = userPrice;
      items2[5] = pricesForPurchaseType;
      items2[6] = purchaseType;
      items2[7] = stateFromStoresArray;
      return useMemo(() => {
        let tmp20;
        if (null == sku) {
          return { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
        } else if (storeHasPrice) {
          let tmp14;
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
          let tmp10 = null;
          if (null != found) {
            tmp10 = found[purchaseType];
          }
          let tmp12 = null;
          if (null != tmp10) {
            tmp12 = null;
            if (null != userPrice) {
              tmp12 = userPrice;
            }
          }
          let amount = null;
          if (null != tmp10) {
            amount = null;
            if (tmp10.amount > 0) {
              amount = tmp10.amount;
            }
          }
          if (null != tmp10) {
            let found1;
            if (pricesForPurchaseType != null) {
              if (pricesForPurchaseType.prices[constants.BASE] != null) {
                const arr = pricesForPurchaseType.prices[constants.BASE][StorefrontTypes.StorefrontPriceVariant.NORMAL];
                if (arr != null) {
                  found1 = arr.find((currency) => currency.currency !== constants.DISCORD_ORB);
                }
              }
            }
            tmp14 = found1;
          } else {
            tmp14 = userPrice;
          }
          if (tmp14 == null) {
            tmp14 = null;
          }
          const obj2 = { normalPrice: tmp14, discountedPrice: tmp12, discountPercent: amount, userPrice: tmp20 };
          tmp20 = userPrice;
          if (userPrice == null) {
            tmp20 = null;
          }
          return obj2;
        } else {
          let price;
          if (sku.productLine === unpackModuleId.SOCIAL_LAYER_GAME_ITEM) {
            const obj = SlayerStorefrontPriceUtils;
            price = obj.getPrice(sku, DEFAULT);
          } else {
            let premiumType;
            const getPrice = sku.getPrice;
            if (stateFromStores != null) {
              premiumType = stateFromStores.premiumType;
            }
            price = getPrice(premiumType);
          }
          if (price == null) {
            price = null;
          }
          return { normalPrice: price, discountedPrice: null, discountPercent: null, userPrice: price };
        }
      }, items2);
    };
let closure_14 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let priceSetAssignmentPurchaseType;
      let sku;
      const obj = react2;
      const cResult = obj.c(3);
      ({ sku, priceSetAssignmentPurchaseType } = arg0);
      if (undefined === priceSetAssignmentPurchaseType) {
        priceSetAssignmentPurchaseType = metroImportAll.DEFAULT;
      }
      if (cResult[0] === priceSetAssignmentPurchaseType) {
        let tmp3;
        if (cResult[1] === sku) {
          tmp3 = cResult[2];
        }
        return closure_15(closure_14(tmp3));
      }
      const obj2 = { sku, priceSetAssignmentPurchaseType };
      cResult[0] = priceSetAssignmentPurchaseType;
      cResult[1] = sku;
      cResult[2] = obj2;
      tmp3 = obj2;
    }
  : (priceSetAssignmentPurchaseType) => {
      priceSetAssignmentPurchaseType = priceSetAssignmentPurchaseType.priceSetAssignmentPurchaseType;
      const sku = priceSetAssignmentPurchaseType.sku;
      if (priceSetAssignmentPurchaseType === undefined) {
        priceSetAssignmentPurchaseType = metroImportAll.DEFAULT;
      }
      return closure_15(closure_14({ sku, priceSetAssignmentPurchaseType }));
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let locale;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(5);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === stateFromStores) {
        let tmp8;
        if (cResult[3] === arg0) {
          tmp8 = cResult[4];
        }
        return tmp8;
      }
      const tmp9 = formatSKUPrice(arg0, stateFromStores);
      cResult[2] = stateFromStores;
      cResult[3] = arg0;
      cResult[4] = tmp9;
      tmp8 = tmp9;
    }
  : (arg0) => {
      let closure_0;
      let locale;
      _require = arg0;
      const items = [LocaleStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
      const items1 = [arg0, stateFromStores];
      return react.useMemo(() => formatSKUPrice(closure_0, stateFromStores), items1);
    };
let closure_15 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let currentUser;
      let priceSetAssignmentPurchaseType;
      let sku;
      const obj = react2;
      const cResult = obj.c(12);
      ({ sku, priceSetAssignmentPurchaseType } = arg0);
      if (undefined === priceSetAssignmentPurchaseType) {
        priceSetAssignmentPurchaseType = metroImportAll.DEFAULT;
      }
      if (cResult[0] === priceSetAssignmentPurchaseType) {
        let tmp5;
        let tmp11;
        let tmp10;
        let tmp14;
        if (cResult[1] === sku) {
          tmp5 = cResult[2];
        }
        const tmp7 = closure_13(tmp5);
        let userPrice = tmp7.userPrice;
        const _Symbol = Symbol;
        const storeHasPrice = tmp7.storeHasPrice;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserStore];
          class S {
            constructor() {
              return closure_1_5.getCurrentUser();
            }
          }
          cResult[3] = items;
          cResult[4] = S;
          tmp11 = S;
          tmp10 = items;
        } else {
          tmp10 = cResult[3];
          tmp11 = cResult[4];
        }
        const tmpResult = get_initialized;
        const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp11);
        if (cResult[5] !== stateFromStores) {
          PremiumUtilsDefault;
          class S {
            constructor() {
              return closure_1_5.getCurrentUser();
            }
          }
          cResult[5] = stateFromStores;
          cResult[6] = tmp18;
          tmp14 = tmp18;
        } else {
          tmp14 = cResult[6];
        }
        let tmp20 = null;
        if (null != sku) {
          if (storeHasPrice) {
            if (userPrice == null) {
              userPrice = null;
            }
            tmp20 = userPrice;
          } else {
            if (cResult[7] === tmp14) {
              let tmp21;
              let tmp23;
              if (cResult[8] === sku.prices) {
                tmp21 = cResult[9];
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
                tmp23 = tmp24;
              } else {
                tmp23 = cResult[11];
              }
              tmp20 = tmp23;
            }
            const tmpResult2 = OrbCheckoutUtils;
            const orbPriceFromPrices = tmpResult2.getOrbPriceFromPrices(sku.prices, tmp14);
            class S {
              constructor() {
                return closure_1_5.getCurrentUser();
              }
            }
            cResult[7] = tmp14;
            cResult[8] = sku.prices;
            cResult[9] = orbPriceFromPrices;
            tmp21 = orbPriceFromPrices;
          }
        }
        return tmp20;
      }
      const obj3 = { sku, priceSetAssignmentPurchaseType, isOrbPrice: true };
      cResult[0] = priceSetAssignmentPurchaseType;
      cResult[1] = sku;
      cResult[2] = obj3;
      tmp5 = obj3;
    }
  : (sku) => {
      let currentUser;
      sku = sku.sku;
      let DEFAULT = sku.priceSetAssignmentPurchaseType;
      if (DEFAULT === undefined) {
        DEFAULT = constants2.DEFAULT;
      }
      const tmp2 = closure_13({ sku, priceSetAssignmentPurchaseType: DEFAULT, isOrbPrice: true });
      const userPrice = tmp2.userPrice;
      const storeHasPrice = tmp2.storeHasPrice;
      let obj = sku(storeHasPrice[12]);
      const items = [UserStore];
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      const items1 = [stateFromStores];
      const memo = stateFromStores.useMemo(() => {
        const obj = PremiumUtilsDefault;
        return obj.isPremium(stateFromStores, PremiumTypes.TIER_2);
      }, items1);
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
          const obj = OrbCheckoutUtils;
          const orbPriceFromPrices = obj.getOrbPriceFromPrices(tmp.prices, memo);
          let tmp7 = null;
          if (null != orbPriceFromPrices) {
            const obj3 = { amount: null, currency: null };
            ({ amount: obj2.amount, currency: obj2.currency } = orbPriceFromPrices);
            tmp7 = obj3;
          }
          return tmp7;
        }
      }, items2);
    };
function transformPriceSetAssignmentToStorefrontPurchaseType(arg0) {
  if (null == arg0) {
    return StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE;
  } else if (metroImportAll.DEFAULT === arg0) {
    return StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE;
  } else if (tmp9.GIFT === arg0) {
    return StorefrontTypes.StorefrontPurchaseType.GIFT;
  } else {
    return StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE;
  }
}
const result = size.fileFinishedImporting("modules/storefront/StorefrontUtils.tsx");

export const transformStorefrontPricesServer = function transformStorefrontPricesServer(storefront_pricing) {
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let pricing_result_id_map;
  let reward_result_id_map;
  let obj = {
    skuPriceMap: obj2.mapValues(storefront_pricing.sku_price_map, (pricingResultId) => ({
      pricingResultId: pricingResultId.pricing_result_id,
      storefrontPromotionIds: pricingResultId.storefront_promotion_ids,
      rewardResultIds: pricingResultId.reward_result_ids,
      offerResultIds: pricingResultId.offer_result_ids,
    })),
    pricingResultIdMap: obj3.mapValues(pricing_result_id_map, (arg0) => {
      let obj = _modDef12;
      return obj.mapValues(arg0, (user_price) => {
        let obj2;
        const f93158 = (currency) => ({ currency: currency.currency, amount: currency.amount });
        let obj = {
          userPrice: user_price.map(f93158),
          prices: obj2.mapValues(user_price.prices, (arg0) => {
            const obj = closure_1_1(closure_1_2[6]);
            return obj.mapValues(arg0, (arr) => arr.map(f93158));
          }),
        };
        user_price = user_price.user_price;
        obj2 = closure_1_1(closure_1_2[6]);
        return obj;
      });
    }),
    rewardResultIdMap: obj4.mapValues(reward_result_id_map, (arg0) => {
      const obj = _modDef12;
      return obj.mapValues(arg0, (type) => ({ type: type.type, amount: type.amount }));
    }),
    offerResultIdMap: obj5.mapValues(storefront_pricing.offer_result_id_map, (promotionId) => ({
      promotionId: promotionId.promotion_id,
      type: promotionId.type,
      rewardStatus: promotionId.reward_status,
      purchaseTypes: promotionId.purchase_types,
      rewardResultId: promotionId.reward_result_id,
    })),
  };
  obj2 = _modDef12;
  pricing_result_id_map = storefront_pricing.pricing_result_id_map;
  reward_result_id_map = storefront_pricing.reward_result_id_map;
  obj3 = _modDef12;
  obj4 = _modDef12;
  obj5 = _modDef12;
  return obj;
};
export { transformPriceSetAssignmentToStorefrontPurchaseType };
export const isSlayerSkuAvailableOnThisPlatform = function isSlayerSkuAvailableOnThisPlatform(sku) {
  if (null != sku) {
    if (sku.productLine === unpackModuleId.SOCIAL_LAYER_GAME_ITEM) {
      let hasFlagResult;
      let num;
      if (sku != null) {
        num = sku.flags;
      }
      if (num == null) {
        num = 0;
      }
      const obj = utils_PlatformUtils;
      if (obj.isIOS()) {
        const tmpResult = FlagUtils;
        hasFlagResult = tmpResult.hasFlag(num, constants4.AVAILABLE_ON_IOS);
      } else {
        const tmpResult3 = utils_PlatformUtils;
        const isAndroidResult = tmpResult3.isAndroid();
        hasFlagResult = !isAndroidResult;
        if (isAndroidResult) {
          const tmpResult4 = FlagUtils;
          hasFlagResult = tmpResult4.hasFlag(num, constants4.AVAILABLE_ON_ANDROID);
        }
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
export const useSKUOrbPrice = tmp6;
export const getPromoCodeFromClaimResponse = function getPromoCodeFromClaimResponse(arg0) {
  const iter = arg0.redemptions[Symbol.iterator]();
  while (iter !== undefined) {
    let rewards = iter.next().rewards;
    for (const item10014 of rewards) {
      if (null != item10014.promo_code) {
        let promo_code = tmp3.promo_code;
        obj.return();
        iter.return();
        return promo_code;
      }
    }
    continue;
  }
  return null;
};
