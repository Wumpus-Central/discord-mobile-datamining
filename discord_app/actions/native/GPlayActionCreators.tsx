// === Module 7662: getPlanIdForProduct ===

// Module 7662 (getPlanIdForProduct)
import timestampDefault from "timestamp" /* 3 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import importDefaultResult from "asyncGeneratorStep" /* 5 */;
import setGPlayAnalytics from "setGPlayAnalytics" /* 7618 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import updateProduct from "updateProduct" /* 5319 */;
import ME from "ME" /* 676 */;
import GPlayConnectionState from "GPlayConnectionState" /* 5320 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import { PaymentGateways } from "sum" /* 505 */;

function getPlanIdForProduct(arg0, arg1) {
  if (arg1) {
    try {
      return callback(5322).getPlanIdForGift(arg0);
    } catch (err) {
      return null;
    }
  } else {
    let basePlanId;
    const tmp4 = callback(5322).AppStorePremiumProductIdsToPremiumBundledItems[arg0];
    if (tmp4 != null) {
      basePlanId = tmp4.basePlanId;
    }
    if (basePlanId == null) {
      basePlanId = null;
    }
    return basePlanId;
  }
}
function fetchDesktopSubscriptionSkus() {
  const self = this;
  const apply = _fetchDesktopSubscriptionSkus.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchDesktopSubscriptionSkus() {
  const self = this;
  const tmp = importDefaultResult((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c21 = 0;
    c22 = 0;
    c20 = 0;
    const iter = (function*(arg0) {
      if (logger === 2) {
        logger = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        while (true) {
          logger = 2;
          let tmp4 = c21;
          if (0 === c21) {
            if (arg0 === 1) {
              logger = 3;
              throw arg1;
            } else if (arg0 === 2) {
              logger = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let constants = tmp;
              let first = tmp4;
              let DEFAULT;
              let flag;
              if (DEFAULT === undefined) {
                DEFAULT = closure_1_15.DEFAULT;
              }
              if (flag === undefined) {
                flag = false;
              }
              let arr;
              let set;
              closure_5 = undefined;
              closure_6 = undefined;
              closure_7 = undefined;
              closure_8 = undefined;
              closure_9 = undefined;
              let dependencyMap2;
              let usd;
              let US;
              c13 = undefined;
              let user;
              let name;
              first = undefined;
              constants = undefined;
              let amount;
              let user2;
              c21 = 1;
              logger = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              logger = 3;
              throw arg1;
            } else if (arg0 === 2) {
              logger = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let _Set = Set;
              set = new Set();
              closure_5 = {};
              set = dependencyMap;
              arr = dependencyMap[Symbol.iterator]();
              while (arr !== undefined) {
                user2 = 1;
                closure_6 = tmp110;
                closure_7 = callback(closure_6, flag);
                if (null != closure_7) {
                  closure_8 = amount[closure_7];
                  let skuId;
                  if (closure_8 != null) {
                    skuId = closure_8.skuId;
                  }
                  let tmp112 = null != skuId;
                  if (tmp112) {
                    tmp112 = closure_8.skuId !== constants.NONE;
                  }
                  if (tmp112) {
                    let addResult = set.add(closure_8.skuId);
                    closure_5[closure_6] = closure_7;
                  }
                }
                user2 = 0;
                continue;
              }
              closure_9 = {};
              let obj7 = dependencyMap(flag[12]);
              let items = [];
              let arraySpreadResult = HermesBuiltin.arraySpread(set, 0);
              c21 = 3;
              logger = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = obj7.fetchSubscriptionPlansBySKUs(items);
              return obj2;
            }
          } else if (2 === tmp4) {
            user2 = 0;
            arr.return();
            throw amount;
          } else if (3 === tmp4) {
            if (arg0 === 1) {
              logger = 3;
              throw arg1;
            } else if (arg0 === 2) {
              logger = 3;
              let obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              dependencyMap2 = arg1;
              closure_6 = dependencyMap2;
              closure_5 = dependencyMap2[Symbol.iterator]();
              while (closure_5 !== undefined) {
                user2 = 2;
                usd = tmp16;
                dependencyMap2 = usd;
                closure_9 = usd[Symbol.iterator]();
                while (closure_9 !== undefined) {
                  US = tmp22;
                  closure_9[US.id] = US;
                  user2 = 2;
                  continue;
                }
                user2 = 0;
                continue;
              }
              closure_8 = dependencyMap;
              closure_7 = dependencyMap[Symbol.iterator]();
              while (closure_7 !== undefined) {
                user2 = 4;
                c13 = tmp32;
                name = closure_5[c13];
                if (null != name) {
                  user = closure_9[name];
                  if (null != user) {
                    let prices = user.prices;
                    let country_prices;
                    if (prices != null) {
                      let tmp53 = prices[DEFAULT];
                      if (tmp53 != null) {
                        country_prices = tmp53.country_prices;
                      }
                    }
                    name = country_prices;
                    first = undefined;
                    if (name != null) {
                      let prices2 = name.prices;
                      if (prices2 != null) {
                        first = prices2[0];
                      }
                    }
                    if (null != first) {
                      let str = first.currency;
                      let formatted;
                      if (str != null) {
                        formatted = str.toLowerCase();
                      }
                      usd = formatted;
                      if (formatted == null) {
                        usd = "usd";
                      }
                      constants = usd;
                      amount = first.amount;
                      user2 = amount[name];
                      let obj4 = { identifier: null, price: null, currencySymbol: null, currencyCode: null, priceString: null, countryCode: null, downloadable: false, description: null, title: null, type: null, subscriptionOffers: null };
                      obj4[0] = c13;
                      obj4[1] = amount;
                      obj4[2] = first.currency;
                      obj4[3] = constants;
                      let str2 = "";
                      if (null != first.currency) {
                        let result = amount / 100;
                        let _HermesInternal = HermesInternal;
                        str2 = "" + first.currency + " " + result.toFixed(2);
                      }
                      obj4[4] = str2;
                      let country_code;
                      if (name != null) {
                        country_code = name.country_code;
                      }
                      US = country_code;
                      if (country_code == null) {
                        US = dependencyMap(flag[13]).CountryCodes.US;
                      }
                      obj4[5] = US;
                      name = undefined;
                      if (user2 != null) {
                        name = user2.name;
                      }
                      if (name == null) {
                        name = user.name;
                      }
                      c13 = name;
                      if (name == null) {
                        c13 = "";
                      }
                      obj4[7] = c13;
                      let name1;
                      if (user2 != null) {
                        name1 = user2.name;
                      }
                      name = name1;
                      if (name1 == null) {
                        name = user.name;
                      }
                      user = name;
                      if (name == null) {
                        user = "";
                      }
                      obj4[8] = user;
                      let str3 = "subs";
                      if (flag) {
                        str3 = "inapp";
                      }
                      obj4[9] = str3;
                      obj4[10] = [];
                      arr = arr.push(obj4);
                    } else {
                      let obj5 = { productId: null, planId: null, priceSetAssignmentType: null };
                      obj5[0] = c13;
                      obj5[1] = name;
                      obj5[2] = DEFAULT;
                      let warnResult = logger.warn("[fetchDesktopSubscriptionSkus] No price info found", obj5);
                    }
                  } else {
                    let obj6 = { productId: null, planId: null };
                    obj6[0] = c13;
                    obj6[1] = name;
                    let warnResult1 = logger.warn("[fetchDesktopSubscriptionSkus] Plan not found", obj6);
                  }
                } else {
                  obj = { productId: null };
                  obj[0] = c13;
                  let warnResult2 = logger.warn("[fetchDesktopSubscriptionSkus] No plan ID found", obj);
                }
                user2 = 0;
                continue;
              }
              logger = 3;
              obj7 = { value: null, done: true };
              obj7[0] = arr;
              return obj7;
            }
          } else if (4 === tmp4) {
            user2 = 0;
            closure_5.return();
            throw amount;
          } else if (5 === tmp4) {
            user2 = 2;
            closure_9.return();
            throw amount;
          } else {
            user2 = 0;
            closure_7.return();
            throw amount;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_25 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _loadUserCountry() {
  const self = this;
  const tmp = importDefaultResult(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp5;
            closure_0 = tmp2;
            closure_0 = undefined;
            table = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_31();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          closure_0 = arg1;
          obj = callback(table[14]);
          const obj3 = { type: "GPLAY_SET_USER_COUNTRY", countryCode: null };
          obj3[1] = closure_0;
          obj.dispatch(obj3);
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp13) {
        c3 = tmp;
        throw tmp13;
      }
    }
  });
  closure_28 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _subscribe() {
  const self = this;
  const tmp = importDefaultResult((arg0, arg1, arg2, arg3, arg4) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    closure_4 = arg4;
    c10 = 0;
    c11 = 0;
    c9 = 0;
    return (function*(arg0, arg1, arg2, arg3, arg4) {
      closure_7 = tmp3;
      const callback2 = dependencyMap;
      dependencyMap = closure_4;
      c9 = 1;
      yield closure_1_21.subscribe(callback, callback2, dependencyMap, message, closure_4);
      if (1 === tmp7) {
        c9 = 0;
        message = closure_8;
        obj1 = callback(4054);
        const obj2 = { productId: null, oldProductId: null };
        obj2[0] = callback;
        c5 = callback2;
        if (callback2 == null) {
          c5 = "";
        }
        const obj3 = { tags: null };
        obj2[1] = c5;
        obj3[0] = obj2;
        const result = obj1.captureBillingException(message, obj3);
        callback2(4827);
        const obj4 = { title: null, body: null };
        const intl = callback(1236).intl;
        obj4[0] = intl.string(callback(1236).t["U+H+kd"]);
        const intl2 = callback(1236).intl;
        obj4[1] = intl2.string(callback(1236).t.LFFx5G);
        obj4.show(obj4);
        const obj5 = { location: "subscribe", product_id: null, offer_id: null, error: null };
        obj5[1] = callback;
        obj5[2] = dependencyMap;
        obj5[3] = message.message;
        callback2(698).track(constants.GPLAY_PURCHASE_FAILED, obj5);
        c11 = 3;
        const obj7 = callback2(698);
      } else if (arg0 === 1) {
        c11 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        c9 = 0;
      }
      c9 = 0;
      return arg1;
    })();
  });
  closure_29 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _verifyPurchase() {
  const self = this;
  const tmp = importDefaultResult((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, arg1) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c8 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              let body = tmp5;
              let lib2;
              dependencyMap = undefined;
              body = undefined;
              closure_4 = undefined;
              closure_5 = undefined;
              const tmp78 = closure_1_10.getState().analyticsByProductId[lib.productId];
              lib2 = tmp78;
              const id = closure_1_11.getId();
              const SubscriptionProductIds = lib(closure_1_2[11]).SubscriptionProductIds;
              const hasItem = SubscriptionProductIds.includes(lib.productId);
              let tmp54 = !hasItem;
              dependencyMap = tmp54;
              const productId = lib.productId;
              if (hasItem) {
                let tmp52 = null;
                let tmp53 = productId;
              } else {
                tmp52 = productId;
                tmp53 = null;
              }
              if (!hasItem) {
                tmp54 = null != tmp76;
              }
              if (tmp54) {
                tmp54 = null == tmp76.gift_style;
              }
              if (tmp54) {
                let obj8 = lib2(closure_1_2[19]);
                obj1 = { source: "verifyPurchase", sku_id: null };
                obj1[1] = lib.productId;
                obj8.track(closure_1_13.GIFT_INFO_OPTIONS_MISSING, obj1);
              }
              c6 = 1;
              const HTTP = lib(closure_1_2[20]).HTTP;
              const obj2 = { url: null, body: null, rejectWithError: false };
              obj2[0] = closure_1_14.VERIFY_PURCHASE;
              let obj3 = { purchase_token: null, user_id: null, package_name: null, subscription_sku_id: null, one_time_purchase_sku_id: null, gift_info_options: null, one_time_purchase_options: null, load_id: null };
              obj3[0] = lib.purchaseToken;
              obj3[1] = id;
              obj3[2] = lib.packageName;
              obj3[3] = tmp53;
              obj3[4] = tmp52;
              obj3[5] = lib2;
              obj3[6] = { consume_on_validate: true };
              let load_id;
              if (tmp78 != null) {
                load_id = tmp78.load_id;
              }
              dependencyMap = load_id;
              if (load_id == null) {
                dependencyMap = null;
              }
              obj3[7] = dependencyMap;
              obj2[1] = obj3;
              v0 = 2;
              c8 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj2);
              return obj4;
            }
          } else if (1 === tmp8) {
            c6 = 0;
            c6 = closure_5;
            obj3 = lib(4054);
            const obj5 = { tags: null };
            let obj6 = { productId: null };
            obj6[0] = lib.productId;
            obj5[0] = obj6;
            const result = obj3.captureBillingException(c6, obj5);
            if (null != lib2) {
              const succeededOnlyFields2 = lib2.succeededOnlyFields;
              closure_5 = v0(lib2, c6);
              obj6 = lib2(698);
              const obj7 = {};
              const merged = Object.assign(closure_5);
              obj7.payment_gateway = constants2.GOOGLE;
              obj6.track(constants.PAYMENT_FLOW_FAILED, obj7);
            }
            throw c6;
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            obj8 = { value: null, done: true };
            obj8[0] = arg1;
            return obj8;
          } else {
            body = arg1;
            if (null != lib2) {
              if (!dependencyMap) {
                const succeededOnlyFields = lib2.succeededOnlyFields;
                closure_4 = v0(lib2, closure_5);
                obj = lib2(698);
                obj.track(constants.PAYMENT_FLOW_COMPLETED, closure_4);
                callback(lib.productId);
              }
            }
            c6 = 0;
            c8 = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = body.body;
            return obj9;
          }
        } catch (tmp64) {
          closure_5 = tmp64;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp64;
          } else {
            v0 = tmp;
          }
        }
      }
    })();
  });
  closure_30 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_3 = ["succeededOnlyFields"];
let closure_4 = ["succeededOnlyFields"];
let closure_5 = ["succeededOnlyFields"];
let closure_6 = ["succeededOnlyFields"];
({ deleteGPlayAnalytics: c9, useGPlayAnalyticsStore: c10 } = setGPlayAnalytics);
({ AnalyticEvents: map1, Endpoints: closure_14, PriceSetAssignmentPurchaseTypes: closure_15 } = ME);
({ GPlayBillingResult: closure_16, GPlaySkusType: closure_17 } = GPlayConnectionState);
({ PremiumSubscriptionSKUs: closure_18, SubscriptionPlanInfo: closure_19 } = GuildFeatures);
const BillingManager = require("get ActivityIndicator").NativeModules.BillingManager;
let closure_22 = new timestampDefault("GPlayActionCreators");
importDefaultResult(() => {
  closure_0 = arg0;
  c5 = 0;
  c6 = 0;
  c4 = 0;
  const iter = (function*() {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            dependencyMap = tmp3;
            let callback2 = tmp7;
            let SubscriptionProductIds;
            if (SubscriptionProductIds === undefined) {
              SubscriptionProductIds = callback(closure_1_2[11]).SubscriptionProductIds;
            }
            callback2 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "ct", done: true };
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            if (null != SubscriptionProductIds) {
              if (0 !== SubscriptionProductIds.length) {
                callback2(709).dispatch({ type: "GPLAY_FETCH_SUBSCRIPTION_SKUS_START" });
                c4 = 1;
                const obj13 = callback2(709);
                if (obj14.isGooglePlayBillingSupported()) {
                  c5 = 4;
                  c6 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = subscriptionSkus.getSubscriptionSkus(SubscriptionProductIds);
                  return obj2;
                } else {
                  c5 = 3;
                  c6 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = callback3(SubscriptionProductIds);
                  return obj3;
                }
                obj14 = SubscriptionProductIds(4052);
              }
            }
            c6 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = [];
            return obj4;
          }
        } else if (2 === tmp7) {
          c4 = 0;
          dependencyMap = closure_3;
          let obj5 = callback2(709);
          obj5.dispatch({ type: "GPLAY_FETCH_SUBSCRIPTION_SKUS_FAILED" });
          throw dependencyMap;
        } else {
          if (3 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          callback2 = arg1;
          obj1 = callback2(709);
          const obj6 = { type: "GPLAY_SUBSCRIPTION_SKUS_LOADED", skus: null, skusType: null };
          const items = [];
          HermesBuiltin.arraySpread(callback2, 0);
          obj6[1] = items;
          obj6[2] = constants.SUBSCRIPTION;
          obj1.dispatch(obj6);
          c4 = 0;
          c6 = 3;
          const obj7 = { value: null, done: true };
          obj7[0] = callback2;
          return obj7;
        }
      } catch (tmp31) {
        closure_3 = tmp31;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp31;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
  iter.next();
  return iter;
});
const importDefaultResultResult = importDefaultResult(() => {
  closure_0 = [...arguments];
  c5 = 0;
  c6 = 0;
  c4 = 0;
  const iter = (function*() {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_1 = undefined;
            closure_2 = undefined;
            closure_3 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "ct", done: true };
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            c4 = 1;
            const items = [];
            HermesBuiltin.arraySpread(callback, 0);
            c5 = 3;
            c6 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HermesBuiltin.apply(items, undefined);
            return obj2;
          }
        } else if (2 === tmp7) {
          c4 = 0;
          c4 = closure_3;
          const items1 = [, , , , , ];
          ({ SERVICE_DISCONNECTED: arr[0], SERVICE_TIMEOUT: arr[1], SERVICE_UNAVAILABLE: arr[2], BILLING_UNAVAILABLE: arr[3], FEATURE_NOT_SUPPORTED: arr[4], BILLING_CLIENT_NOT_READY: arr[5] } = closure_1_16);
          const _String = String;
          const mapped = items1.map(String);
          let code;
          if (c4 != null) {
            code = c4.code;
          }
          closure_1 = mapped.includes(code);
          let hasItem;
          if (c4 != null) {
            const message = c4.message;
            if (message != null) {
              hasItem = message.includes("max attempts exceeded");
            }
          }
          closure_2 = true === hasItem;
          let hasItem1;
          if (c4 != null) {
            const message2 = c4.message;
            if (message2 != null) {
              hasItem1 = message2.includes("returned null");
            }
          }
          closure_3 = true === hasItem1;
          if (!closure_1) {
            if (!closure_2) {
              if (!closure_3) {
                let obj3 = callback(dependencyMap[16]);
                const result = obj3.captureBillingException(c4);
              }
              if (closure_1) {
                throw c4;
              } else {
                c6 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            }
          }
          const _Math = Math;
          if (Math.random() < 0.01) {
            const result1 = callback(dependencyMap[16]).captureBillingException(c4);
            const obj5 = callback(dependencyMap[16]);
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp46) {
        closure_3 = tmp46;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp46;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
  iter.next();
  return iter;
});
importDefaultResult(() => {
  closure_0 = arg0;
  c5 = 0;
  c6 = 0;
  c4 = 0;
  let iter = (function*() {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            dependencyMap = tmp3;
            let callback2 = tmp7;
            let IAPProductIds;
            if (IAPProductIds === undefined) {
              IAPProductIds = callback(closure_1_2[11]).IAPProductIds;
            }
            callback2 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "ct", done: true };
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            if (null != IAPProductIds) {
              if (0 !== IAPProductIds.length) {
                callback2(709).dispatch({ type: "GPLAY_FETCH_IN_APP_SKUS_START" });
                c4 = 1;
                const obj13 = callback2(709);
                if (obj14.isGooglePlayBillingSupported()) {
                  c5 = 4;
                  c6 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = BillingManager.getIAPSkus(IAPProductIds);
                  return obj2;
                } else {
                  c5 = 3;
                  c6 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = (function fetchDesktopInAppSkus(IAPProductIds) {
                    const items = [];
                    const iter = IAPProductIds[Symbol.iterator]();
                    const nextResult = iter.next();
                    if (iter === undefined) {
                      if (0 === items.length) {
                        let resolved = Promise.resolve([]);
                      } else {
                        resolved = callback(items, constants.GIFT, true);
                      }
                      return resolved;
                    } else {
                      try {
                        const planIdForGift = IAPProductIds(table[11]).getPlanIdForGift(tmp2);
                        items.push(tmp2);
                        const obj = IAPProductIds(table[11]);
                      } catch (err) {
                      }
                    }
                  })(IAPProductIds);
                  return obj3;
                }
                obj14 = IAPProductIds(4052);
              }
            }
            c6 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = [];
            return obj4;
          }
        } else if (2 === tmp7) {
          c4 = 0;
          dependencyMap = closure_3;
          let obj5 = callback2(709);
          obj5.dispatch({ type: "GPLAY_FETCH_IN_APP_SKUS_FAILED" });
          throw dependencyMap;
        } else {
          if (3 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          callback2 = arg1;
          obj1 = callback2(709);
          const obj6 = { type: "GPLAY_IN_APP_SKUS_LOADED", skus: null, skusType: null };
          let items = [];
          HermesBuiltin.arraySpread(callback2, 0);
          obj6[1] = items;
          obj6[2] = constants.IN_APP;
          obj1.dispatch(obj6);
          c4 = 0;
          c6 = 3;
          const obj7 = { value: null, done: true };
          obj7[0] = callback2;
          return obj7;
        }
      } catch (tmp31) {
        closure_3 = tmp31;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp31;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
  iter.next();
  return iter;
});
const importDefaultResultResult1 = importDefaultResult(() => {
  closure_0 = [...arguments];
  c5 = 0;
  c6 = 0;
  c4 = 0;
  const iter = (function*() {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_1 = undefined;
            closure_2 = undefined;
            closure_3 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "ct", done: true };
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            c4 = 1;
            const items = [];
            HermesBuiltin.arraySpread(callback, 0);
            c5 = 3;
            c6 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HermesBuiltin.apply(items, undefined);
            return obj2;
          }
        } else if (2 === tmp7) {
          c4 = 0;
          c4 = closure_3;
          const items1 = [, , , , , ];
          ({ SERVICE_DISCONNECTED: arr[0], SERVICE_TIMEOUT: arr[1], SERVICE_UNAVAILABLE: arr[2], BILLING_UNAVAILABLE: arr[3], FEATURE_NOT_SUPPORTED: arr[4], BILLING_CLIENT_NOT_READY: arr[5] } = closure_1_16);
          const _String = String;
          const mapped = items1.map(String);
          let code;
          if (c4 != null) {
            code = c4.code;
          }
          closure_1 = mapped.includes(code);
          let hasItem;
          if (c4 != null) {
            const message = c4.message;
            if (message != null) {
              hasItem = message.includes("max attempts exceeded");
            }
          }
          closure_2 = true === hasItem;
          let hasItem1;
          if (c4 != null) {
            const message2 = c4.message;
            if (message2 != null) {
              hasItem1 = message2.includes("returned null");
            }
          }
          closure_3 = true === hasItem1;
          if (!closure_1) {
            if (!closure_2) {
              if (!closure_3) {
                let obj3 = callback(dependencyMap[16]);
                const result = obj3.captureBillingException(c4);
              }
              if (closure_1) {
                throw c4;
              } else {
                c6 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            }
          }
          const _Math = Math;
          if (Math.random() < 0.01) {
            const result1 = callback(dependencyMap[16]).captureBillingException(c4);
            const obj5 = callback(dependencyMap[16]);
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp46) {
        closure_3 = tmp46;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp46;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
  iter.next();
  return iter;
});
importDefaultResult(function*() {
  if (c0 === 2) {
    c0 = 3;
    HermesBuiltin.throwTypeError();
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw arg1;
    } else if (arg0 === 2) {
      let obj = { value: null, done: true };
      obj[0] = arg1;
      return obj;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          const items = [closure_1_26(), importDefaultResultResult1()];
          c1 = 1;
          c0 = 1;
          obj1 = { value: null, done: false };
          obj1[0] = Promise.all(items);
          return obj1;
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw arg1;
      } else if (arg0 === 2) {
        c0 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        c0 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } catch (tmp8) {
      c0 = tmp;
      throw tmp8;
    }
  }
});
let tmp7 = new timestampDefault("GPlayActionCreators");
importDefaultResult((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (function*(arg0, arg1) {
    closure_4 = tmp3;
    c3 = tmp5;
    const callback2 = closure_1_10.getState().analyticsByProductId[callback];
    c6 = 1;
    yield BillingManager.purchase(callback, callback2);
    if (1 === tmp8) {
      c6 = 0;
      closure_4 = closure_5;
      obj1 = callback(succeededOnlyFields[16]);
      const obj2 = { tags: null };
      const obj3 = { productId: null };
      obj3[0] = callback;
      obj2[0] = obj3;
      const result = obj1.captureBillingException(closure_4, obj2);
      callback2(succeededOnlyFields[17]);
      const obj4 = { title: null, body: null };
      const intl = callback(succeededOnlyFields[18]).intl;
      obj4[0] = intl.string(callback(succeededOnlyFields[18]).t["U+H+kd"]);
      const intl2 = callback(succeededOnlyFields[18]).intl;
      obj4[1] = intl2.string(callback(succeededOnlyFields[18]).t.LFFx5G);
      obj4.show(obj4);
      succeededOnlyFields = callback2;
      if (callback2 == null) {
        succeededOnlyFields = {};
      }
      succeededOnlyFields = succeededOnlyFields.succeededOnlyFields;
      closure_3 = v0(succeededOnlyFields, closure_3);
      const obj5 = {};
      const merged = Object.assign(closure_3);
      obj5.location = "purchase";
      obj5.product_id = callback;
      obj5.error = closure_1_4.message;
      callback2(succeededOnlyFields[19]).track(closure_1_13.GPLAY_PURCHASE_FAILED, obj5);
      c8 = 3;
      const obj7 = callback2(succeededOnlyFields[19]);
    } else if (arg0 === 1) {
      c8 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      c6 = 0;
    }
    c6 = 0;
    return arg1;
  })();
});
let closure_0 = importDefaultResult(function*() {
  if (c5 === 2) {
    c5 = 3;
    HermesBuiltin.throwTypeError();
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw arg1;
    } else if (arg0 === 2) {
      let obj = { value: null, done: true };
      obj[0] = arg1;
      return obj;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_1 = tmp3;
          let lib = tmp7;
          if (obj9.isGooglePlayBillingSupported()) {
            c3 = 1;
            c4 = 2;
            c5 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = BillingManager.getUserCountry();
            return obj1;
          } else {
            closure_1_22.info("[getUserCountry] Quest: Skipping Google Play country lookup");
            c5 = 3;
            return { value: null, done: true };
          }
          obj9 = closure_1_0(dependencyMap[15]);
        }
      } else if (1 === tmp7) {
        c3 = 0;
        lib = table;
        let code;
        if (lib != null) {
          code = lib.code;
        }
        const _String = String;
        if (code !== String(constants.BILLING_CLIENT_NOT_READY)) {
          let hasItem;
          if (lib != null) {
            let message = lib.message;
            if (message != null) {
              hasItem = message.includes("max attempts exceeded");
            }
          }
          if (true !== hasItem) {
            let hasItem1;
            if (lib != null) {
              const message2 = lib.message;
              if (message2 != null) {
                hasItem1 = message2.includes("returned null");
              }
            }
            if (true !== hasItem1) {
              let obj2 = lib(table[16]);
              obj2 = { tags: null };
              obj2[0] = { source: "getUserCountry" };
              const result = obj2.captureBillingException(lib, obj2);
            }
            c5 = 3;
          }
        }
        message = undefined;
        if (lib != null) {
          message = lib.message;
        }
        const obj3 = { error: null };
        obj3[0] = message;
        logger.warn("[getUserCountry] Failed to get user country from Google Play Billing", obj3);
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj4 = { value: null, done: true };
        obj4[0] = arg1;
        return obj4;
      } else {
        c3 = 0;
        c5 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      }
    } catch (tmp31) {
      table = tmp31;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp31;
      } else {
        c4 = tmp;
      }
    }
  }
});
let c1 = true;
const importDefaultResultResult3 = importDefaultResult(() => {
  closure_0 = [...arguments];
  c5 = 0;
  c6 = 0;
  c4 = 0;
  const iter = (function*() {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_1 = undefined;
            closure_2 = undefined;
            closure_3 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "ct", done: true };
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            c4 = 1;
            const items = [];
            HermesBuiltin.arraySpread(callback, 0);
            c5 = 3;
            c6 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HermesBuiltin.apply(items, undefined);
            return obj2;
          }
        } else if (2 === tmp7) {
          c4 = 0;
          c4 = closure_3;
          const items1 = [, , , , , ];
          ({ SERVICE_DISCONNECTED: arr[0], SERVICE_TIMEOUT: arr[1], SERVICE_UNAVAILABLE: arr[2], BILLING_UNAVAILABLE: arr[3], FEATURE_NOT_SUPPORTED: arr[4], BILLING_CLIENT_NOT_READY: arr[5] } = closure_1_16);
          const _String = String;
          const mapped = items1.map(String);
          let code;
          if (c4 != null) {
            code = c4.code;
          }
          closure_1 = mapped.includes(code);
          let hasItem;
          if (c4 != null) {
            const message = c4.message;
            if (message != null) {
              hasItem = message.includes("max attempts exceeded");
            }
          }
          closure_2 = true === hasItem;
          let hasItem1;
          if (c4 != null) {
            const message2 = c4.message;
            if (message2 != null) {
              hasItem1 = message2.includes("returned null");
            }
          }
          closure_3 = true === hasItem1;
          if (!closure_1) {
            if (!closure_2) {
              if (!closure_3) {
                let obj3 = callback(dependencyMap[16]);
                const result = obj3.captureBillingException(c4);
              }
              if (closure_1) {
                throw c4;
              } else {
                c6 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            }
          }
          const _Math = Math;
          if (Math.random() < 0.01) {
            const result1 = callback(dependencyMap[16]).captureBillingException(c4);
            const obj5 = callback(dependencyMap[16]);
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp46) {
        closure_3 = tmp46;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp46;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
  iter.next();
  return iter;
});
const importDefaultResultResult2 = importDefaultResult(() => {
  closure_0 = [...arguments];
  c5 = 0;
  c6 = 0;
  c4 = 0;
  const iter = (function*() {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_1 = undefined;
            closure_2 = undefined;
            closure_3 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "ct", done: true };
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            c4 = 1;
            const items = [];
            HermesBuiltin.arraySpread(callback, 0);
            c5 = 3;
            c6 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HermesBuiltin.apply(items, undefined);
            return obj2;
          }
        } else if (2 === tmp7) {
          c4 = 0;
          c4 = closure_3;
          const items1 = [, , , , , ];
          ({ SERVICE_DISCONNECTED: arr[0], SERVICE_TIMEOUT: arr[1], SERVICE_UNAVAILABLE: arr[2], BILLING_UNAVAILABLE: arr[3], FEATURE_NOT_SUPPORTED: arr[4], BILLING_CLIENT_NOT_READY: arr[5] } = closure_1_16);
          const _String = String;
          const mapped = items1.map(String);
          let code;
          if (c4 != null) {
            code = c4.code;
          }
          closure_1 = mapped.includes(code);
          let hasItem;
          if (c4 != null) {
            const message = c4.message;
            if (message != null) {
              hasItem = message.includes("max attempts exceeded");
            }
          }
          closure_2 = true === hasItem;
          let hasItem1;
          if (c4 != null) {
            const message2 = c4.message;
            if (message2 != null) {
              hasItem1 = message2.includes("returned null");
            }
          }
          closure_3 = true === hasItem1;
          if (!closure_1) {
            if (!closure_2) {
              if (!closure_3) {
                let obj3 = callback(dependencyMap[16]);
                const result = obj3.captureBillingException(c4);
              }
              if (closure_1) {
                throw c4;
              } else {
                c6 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            }
          }
          const _Math = Math;
          if (Math.random() < 0.01) {
            const result1 = callback(dependencyMap[16]).captureBillingException(c4);
            const obj5 = callback(dependencyMap[16]);
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp46) {
        closure_3 = tmp46;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp46;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
  iter.next();
  return iter;
});
let result = require("obj132").fileFinishedImporting("actions/native/GPlayActionCreators.tsx");

export const loadSubscriptionSkus = importDefaultResultResult;
export const loadInAppSkus = importDefaultResultResult1;
export const loadSkus = importDefaultResultResult2;
export const loadUserCountry = function loadUserCountry() {
  const self = this;
  const apply = _loadUserCountry.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const purchase = function() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const subscribe = function subscribe() {
  const self = this;
  const apply = _subscribe.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const verifyPurchase = function verifyPurchase(purchase, closure_2) {
  const self = this;
  const apply = _verifyPurchase.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const sendPaymentCompleteAnalytics = function sendPaymentCompleteAnalytics(purchase) {
  const tmp = state.getState().analyticsByProductId[purchase.productId];
  if (null != tmp) {
    const succeededOnlyFields = tmp.succeededOnlyFields;
    const tmp4 = callback2(tmp, closure_4);
    let obj = _true(698);
    obj.track(constants.PAYMENT_FLOW_COMPLETED, tmp4);
    obj = {};
    const merged = Object.assign(tmp4);
    const merged1 = Object.assign(succeededOnlyFields);
    _true(698).track(constants.PAYMENT_FLOW_SUCCEEDED, obj);
    callback3(purchase.productId);
    const obj2 = _true(698);
  }
};
export const updatePendingDowngrade = function updatePendingDowngrade(closure_0, c6, c7, c5) {
  const items = [store.getProduct(closure_0), store.getProduct(c6)];
  [tmp, tmp2] = items;
  if (null != tmp2) {
    if (null != tmp) {
      if (null != tmp2) {
        if (null != tmp) {
          if (null != tmp2.billingPeriod) {
            if (null != tmp.billingPeriod) {
              let obj = callback(4054);
            }
          }
        }
      }
      obj = { purchaseToken: null, subscriptionId: null, newSubscriptionSkuId: null };
      obj[0] = c7;
      obj[1] = c5;
      obj[2] = tmp.identifier;
      obj[1] = obj;
      _true(709).dispatch(obj);
      const obj2 = _true(709);
    }
  }
};
export const downgradeSubscription = function downgradeSubscription(pendingDowngrade) {
  ({ purchaseToken, subscriptionId, newSubscriptionSkuId } = pendingDowngrade);
  const HTTP = callback(530).HTTP;
  return HTTP.post({ url: constants2.DOWNGRADE_SUBSCRIPTION, body: { purchase_token: purchaseToken, subscription_id: subscriptionId, subscription_sku_id: newSubscriptionSkuId }, rejectWithError: false });
};
export const getUserCountry = importDefaultResultResult3;