// === Module 8222: getPlanIdForProduct ===

// Module 8222 (getPlanIdForProduct)
import timestampDefault from "timestamp" /* 3 */;
import failsDefault from "fails" /* 584 */;
import closure_7 from "_objectWithoutProperties" /* 109 */;
import importDefaultResult from "asyncGeneratorStep" /* 5 */;
import setGPlayAnalytics from "setGPlayAnalytics" /* 8223 */;
import closure_11 from "fetchFingerprint" /* 1218 */;
import closure_12 from "updateProduct" /* 6084 */;
import ME from "ME" /* 676 */;
import GPlayConnectionState from "GPlayConnectionState" /* 6085 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import { PaymentGateways } from "sum" /* 505 */;

let closure_0 = arg1;
let c1 = importDefault;
let getUserCountry = dependencyMap;
function getPlanIdForProduct(arg0, arg1) {
  if (arg1) {
    try {
      return callback(getUserCountry[11]).getPlanIdForGift(arg0);
    } catch (err) {
      return null;
    }
  } else {
    let basePlanId;
    const tmp4 = callback(getUserCountry[11]).AppStorePremiumProductIdsToPremiumBundledItems[arg0];
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
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp2;
        throwTypeErrorResult = globalThis;
        throwTypeErrorResult = null;
        if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          while (true) {
            let num = 2;
            logger = 2;
            let tmp4 = c21;
            if (0 === c21) {
              if (arg0 === 1) {
                let num11 = 3;
                logger = 3;
                throw arg1;
              } else if (arg0 === 2) {
                let num10 = 3;
                logger = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let constants = throwTypeErrorResult;
                let first = tmp4;
                let DEFAULT;
                let flag;
                throwTypeErrorResult = dependencyMap;
                if (DEFAULT === undefined) {
                  throwTypeErrorResult = closure_1_15;
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
                let name;
                let user;
                name = undefined;
                first = undefined;
                constants = undefined;
                let amount;
                let user2;
                c21 = 1;
                let num9 = 1;
                logger = 1;
                return { value: "PX_16", done: null };
              }
            } else if (1 === tmp4) {
              if (arg0 === 1) {
                let num8 = 3;
                logger = 3;
                throw arg1;
              } else if (arg0 === 2) {
                let num7 = 3;
                logger = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                throwTypeErrorResult = first;
                arr = [];
                let _Set = Set;
                throwTypeErrorResult = new.target;
                throwTypeErrorResult = new.target;
                throwTypeErrorResult = new Set();
                set = throwTypeErrorResult;
                closure_5 = {};
                throwTypeErrorResult = dependencyMap;
                set = dependencyMap;
                throwTypeErrorResult = dependencyMap;
                set = dependencyMap;
                arr = dependencyMap[Symbol.iterator]();
                throwTypeErrorResult = set;
                throwTypeErrorResult = arr;
                while (arr !== undefined) {
                  throwTypeErrorResult = first;
                  throwTypeErrorResult = constants;
                  user2 = 1;
                  closure_6 = throwTypeErrorResult;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = closure_6;
                  throwTypeErrorResult = flag;
                  closure_7 = callback(closure_6, flag);
                  throwTypeErrorResult = closure_7;
                  if (null != closure_7) {
                    throwTypeErrorResult = first;
                    throwTypeErrorResult = constants;
                    throwTypeErrorResult = amount;
                    throwTypeErrorResult = closure_7;
                    closure_8 = amount[closure_7];
                    throwTypeErrorResult = undefined;
                    if (closure_8 != null) {
                      throwTypeErrorResult = closure_8.skuId;
                    }
                    throwTypeErrorResult = null != throwTypeErrorResult;
                    if (throwTypeErrorResult) {
                      throwTypeErrorResult = first;
                      throwTypeErrorResult = constants;
                      throwTypeErrorResult = closure_8;
                      throwTypeErrorResult = constants;
                      throwTypeErrorResult = closure_8.skuId !== constants.NONE;
                    }
                    if (throwTypeErrorResult) {
                      throwTypeErrorResult = first;
                      throwTypeErrorResult = set;
                      throwTypeErrorResult = closure_8;
                      throwTypeErrorResult = set.add(closure_8.skuId);
                      throwTypeErrorResult = closure_5;
                      throwTypeErrorResult = closure_6;
                      throwTypeErrorResult = closure_7;
                      closure_5[closure_6] = closure_7;
                    }
                  }
                  user2 = 0;
                  continue;
                }
                throwTypeErrorResult = first;
                throwTypeErrorResult = constants;
                closure_9 = {};
                throwTypeErrorResult = dependencyMap;
                throwTypeErrorResult = flag;
                let obj7 = dependencyMap(flag[12]);
                throwTypeErrorResult = set;
                let items = [];
                throwTypeErrorResult = items;
                let num5 = 0;
                throwTypeErrorResult = HermesBuiltin.arraySpread(set, 0);
                c21 = 3;
                let num6 = 1;
                logger = 1;
                let obj2 = { value: null, done: false };
                obj2[0] = obj7.fetchSubscriptionPlansBySKUs(items);
                return obj2;
              }
            } else if (2 === tmp4) {
              throwTypeErrorResult = amount;
              throwTypeErrorResult = amount;
              user2 = 0;
              throwTypeErrorResult = arr;
              arr.return();
              throw amount;
            } else if (3 === tmp4) {
              if (arg0 === 1) {
                let num4 = 3;
                logger = 3;
                throw arg1;
              } else if (arg0 === 2) {
                let num3 = 3;
                logger = 3;
                let obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                throwTypeErrorResult = first;
                dependencyMap2 = arg1;
                throwTypeErrorResult = dependencyMap2;
                closure_6 = dependencyMap2;
                throwTypeErrorResult = dependencyMap2;
                closure_6 = dependencyMap2;
                closure_5 = dependencyMap2[Symbol.iterator]();
                let tmp14 = closure_6;
                let tmp15 = closure_5;
                while (closure_5 !== undefined) {
                  let tmp17 = first;
                  user2 = 2;
                  usd = tmp16;
                  let tmp18 = usd;
                  dependencyMap2 = usd;
                  let tmp19 = usd;
                  dependencyMap2 = usd;
                  closure_9 = usd[Symbol.iterator]();
                  let tmp20 = dependencyMap2;
                  let tmp21 = closure_9;
                  while (closure_9 !== undefined) {
                    let tmp23 = first;
                    user2 = 3;
                    US = tmp22;
                    let tmp24 = closure_9;
                    let tmp25 = US;
                    let tmp26 = US;
                    closure_9[US.id] = US;
                    user2 = 2;
                    continue;
                  }
                  user2 = 0;
                  continue;
                }
                let tmp27 = first;
                let tmp28 = dependencyMap;
                closure_8 = dependencyMap;
                let tmp29 = dependencyMap;
                closure_8 = dependencyMap;
                closure_7 = dependencyMap[Symbol.iterator]();
                let tmp30 = closure_8;
                let tmp31 = closure_7;
                while (closure_7 !== undefined) {
                  throwTypeErrorResult = first;
                  user2 = 4;
                  c13 = tmp32;
                  throwTypeErrorResult = closure_5;
                  throwTypeErrorResult = c13;
                  name = closure_5[c13];
                  throwTypeErrorResult = name;
                  if (null != name) {
                    let tmp38 = first;
                    let tmp39 = closure_9;
                    let tmp40 = name;
                    user = closure_9[name];
                    let tmp41 = user;
                    if (null != user) {
                      let tmp48 = first;
                      let tmp49 = user;
                      let prices = user.prices;
                      let country_prices;
                      if (prices != null) {
                        let tmp51 = first;
                        let tmp52 = DEFAULT;
                        let tmp53 = prices[DEFAULT];
                        if (tmp53 != null) {
                          country_prices = tmp53.country_prices;
                        }
                      }
                      let tmp54 = first;
                      name = country_prices;
                      first = undefined;
                      if (name != null) {
                        let prices2 = name.prices;
                        if (prices2 != null) {
                          first = prices2[0];
                        }
                      }
                      let tmp56 = first;
                      let tmp57 = first;
                      if (null != first) {
                        let tmp65 = first;
                        let tmp66 = first;
                        let str = first.currency;
                        let formatted;
                        if (str != null) {
                          formatted = str.toLowerCase();
                        }
                        usd = formatted;
                        if (formatted == null) {
                          usd = "usd";
                        }
                        let tmp68 = first;
                        let tmp69 = constants;
                        let tmp70 = usd;
                        constants = usd;
                        let tmp71 = first;
                        amount = first.amount;
                        let tmp72 = amount;
                        let tmp73 = name;
                        user2 = amount[name];
                        let obj4 = { identifier: null, price: null, currencySymbol: null, currencyCode: null, priceString: null, countryCode: null, downloadable: false, description: null, title: null, type: null, subscriptionOffers: null };
                        let tmp75 = c13;
                        obj4[0] = c13;
                        let tmp76 = amount;
                        obj4[1] = amount;
                        let tmp77 = first;
                        obj4[2] = first.currency;
                        let tmp78 = constants;
                        obj4[3] = constants;
                        let tmp79 = first;
                        let str2 = "";
                        let tmp74 = arr;
                        if (null != first.currency) {
                          let tmp80 = first;
                          let tmp81 = first;
                          let tmp82 = amount;
                          let result = amount / 100;
                          let _HermesInternal = HermesInternal;
                          str2 = "" + first.currency + " " + result.toFixed(2);
                        }
                        let tmp83 = first;
                        obj4[4] = str2;
                        let country_code;
                        if (name != null) {
                          country_code = name.country_code;
                        }
                        US = country_code;
                        if (country_code == null) {
                          let tmp85 = constants;
                          let tmp86 = dependencyMap;
                          let tmp87 = flag;
                          US = dependencyMap(flag[13]).CountryCodes.US;
                        }
                        let tmp88 = first;
                        let tmp89 = US;
                        obj4[5] = US;
                        name = undefined;
                        if (user2 != null) {
                          name = user2.name;
                        }
                        if (name == null) {
                          let tmp91 = first;
                          let tmp92 = user;
                          name = user.name;
                        }
                        let tmp93 = name;
                        c13 = name;
                        if (name == null) {
                          c13 = "";
                        }
                        let tmp94 = first;
                        let tmp95 = c13;
                        obj4[7] = c13;
                        let name1;
                        if (user2 != null) {
                          name1 = user2.name;
                        }
                        name = name1;
                        if (name1 == null) {
                          let tmp97 = first;
                          let tmp98 = user;
                          name = user.name;
                        }
                        let tmp99 = name;
                        user = name;
                        if (name == null) {
                          user = "";
                        }
                        throwTypeErrorResult = first;
                        throwTypeErrorResult = user;
                        obj4[8] = user;
                        throwTypeErrorResult = flag;
                        let str3 = "subs";
                        if (flag) {
                          str3 = "inapp";
                        }
                        obj4[9] = str3;
                        obj4[10] = [];
                        throwTypeErrorResult = arr.push(obj4);
                      } else {
                        let tmp58 = first;
                        let tmp59 = constants;
                        let tmp60 = logger;
                        let obj5 = { productId: null, planId: null, priceSetAssignmentType: null };
                        let tmp61 = c13;
                        obj5[0] = c13;
                        let tmp62 = name;
                        obj5[1] = name;
                        let tmp63 = DEFAULT;
                        obj5[2] = DEFAULT;
                        let warnResult = logger.warn("[fetchDesktopSubscriptionSkus] No price info found", obj5);
                      }
                    } else {
                      let tmp42 = first;
                      let tmp43 = constants;
                      let tmp44 = logger;
                      let obj6 = { productId: null, planId: null };
                      let tmp45 = c13;
                      obj6[0] = c13;
                      let tmp46 = name;
                      obj6[1] = name;
                      let warnResult1 = logger.warn("[fetchDesktopSubscriptionSkus] Plan not found", obj6);
                    }
                  } else {
                    let tmp33 = first;
                    let tmp34 = constants;
                    let tmp35 = logger;
                    obj = { productId: null };
                    let tmp36 = c13;
                    obj[0] = c13;
                    let warnResult2 = logger.warn("[fetchDesktopSubscriptionSkus] No plan ID found", obj);
                  }
                  user2 = 0;
                  continue;
                }
                throwTypeErrorResult = first;
                let num2 = 3;
                logger = 3;
                obj7 = { value: null, done: true };
                obj7[0] = arr;
                return obj7;
              }
            } else if (4 === tmp4) {
              let tmp11 = amount;
              let tmp12 = amount;
              user2 = 0;
              let tmp13 = closure_5;
              closure_5.return();
              throw amount;
            } else if (5 === tmp4) {
              let tmp8 = amount;
              let tmp9 = amount;
              user2 = 2;
              let tmp10 = closure_9;
              closure_9.return();
              throw amount;
            } else {
              let tmp5 = amount;
              let tmp6 = amount;
              user2 = 0;
              let tmp7 = closure_7;
              closure_7.return();
              throw amount;
            }
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
        return { value: "HermesInternal", done: null };
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
            obj1[0] = closure_1_35();
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp13) {
        c3 = tmp;
        throw tmp13;
      }
    }
  });
  closure_32 = tmp;
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
        obj1 = callback(4154);
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
        let obj4 = callback2(4857);
        obj4 = { title: null, body: null };
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
        const tmp14 = message;
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
  closure_33 = tmp;
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
          return { value: "HermesInternal", done: null };
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
              let dependencyMap;
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
                let obj8 = lib2(closure_1_2[20]);
                obj1 = { source: "verifyPurchase", sku_id: null };
                obj1[1] = tmp75.productId;
                obj8.track(closure_1_13.GIFT_INFO_OPTIONS_MISSING, obj1);
              }
              c6 = 1;
              const HTTP = lib(closure_1_2[23]).HTTP;
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
            obj3 = lib(4154);
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
  closure_34 = tmp;
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
closure_0 = importDefaultResult(() => {
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
        return { value: "HermesInternal", done: null };
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
            let dependencyMap = tmp3;
            let callback2 = tmp7;
            let SubscriptionProductIds;
            if (SubscriptionProductIds === undefined) {
              SubscriptionProductIds = callback(closure_1_2[11]).SubscriptionProductIds;
            }
            callback2 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: null };
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
                obj14 = SubscriptionProductIds(4152);
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
c1 = true;
getUserCountry = "loadSubscriptionSkus";
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
        return { value: "HermesInternal", done: null };
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
            c4 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: null };
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
          c5 = closure_3;
          const items1 = [, , , , , ];
          ({ SERVICE_DISCONNECTED: arr[0], SERVICE_TIMEOUT: arr[1], SERVICE_UNAVAILABLE: arr[2], BILLING_UNAVAILABLE: arr[3], FEATURE_NOT_SUPPORTED: arr[4], BILLING_CLIENT_NOT_READY: arr[5] } = closure_1_16);
          const _String = String;
          const mapped = items1.map(String);
          let code;
          if (c5 != null) {
            code = c5.code;
          }
          closure_1 = mapped.includes(code);
          let hasItem;
          if (c5 != null) {
            const message = c5.message;
            if (message != null) {
              hasItem = message.includes("max attempts exceeded");
            }
          }
          closure_2 = true === hasItem;
          let hasItem1;
          if (c5 != null) {
            const message2 = c5.message;
            if (message2 != null) {
              hasItem1 = message2.includes("returned null");
            }
          }
          closure_3 = true === hasItem1;
          let tmp21;
          if (null != closure_2) {
            const obj3 = { source: null };
            obj3[0] = tmp20;
            tmp21 = obj3;
          }
          c4 = tmp21;
          if (!closure_1) {
            if (!closure_2) {
              if (!closure_3) {
                let obj4 = callback(closure_1_2[19]);
                obj4 = { tags: null };
                obj4[0] = c4;
                const result = obj4.captureBillingException(c5, obj4);
              }
              if (closure_1_1) {
                throw c5;
              } else {
                c6 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          }
          const _Math = Math;
          if (Math.random() < 0.01) {
            let obj6 = callback(closure_1_2[19]);
            const obj5 = { tags: null };
            obj5[0] = c4;
            const result1 = obj6.captureBillingException(c5, obj5);
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj6 = { value: null, done: true };
          obj6[0] = arg1;
          return obj6;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp50) {
        closure_3 = tmp50;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp50;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
  iter.next();
  return iter;
});
closure_0 = importDefaultResult(() => {
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
        return { value: "HermesInternal", done: null };
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
            let dependencyMap = tmp3;
            let callback2 = tmp7;
            let IAPProductIds;
            if (IAPProductIds === undefined) {
              IAPProductIds = callback(closure_1_2[11]).IAPProductIds;
            }
            callback2 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: null };
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
                  obj2[0] = closure_1_21.getIAPSkus(IAPProductIds);
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
                obj14 = IAPProductIds(4152);
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
c1 = true;
getUserCountry = "loadInAppSkus";
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
        return { value: "HermesInternal", done: null };
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
            c4 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: null };
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
          c5 = closure_3;
          const items1 = [, , , , , ];
          ({ SERVICE_DISCONNECTED: arr[0], SERVICE_TIMEOUT: arr[1], SERVICE_UNAVAILABLE: arr[2], BILLING_UNAVAILABLE: arr[3], FEATURE_NOT_SUPPORTED: arr[4], BILLING_CLIENT_NOT_READY: arr[5] } = closure_1_16);
          const _String = String;
          const mapped = items1.map(String);
          let code;
          if (c5 != null) {
            code = c5.code;
          }
          closure_1 = mapped.includes(code);
          let hasItem;
          if (c5 != null) {
            const message = c5.message;
            if (message != null) {
              hasItem = message.includes("max attempts exceeded");
            }
          }
          closure_2 = true === hasItem;
          let hasItem1;
          if (c5 != null) {
            const message2 = c5.message;
            if (message2 != null) {
              hasItem1 = message2.includes("returned null");
            }
          }
          closure_3 = true === hasItem1;
          let tmp21;
          if (null != closure_2) {
            const obj3 = { source: null };
            obj3[0] = tmp20;
            tmp21 = obj3;
          }
          c4 = tmp21;
          if (!closure_1) {
            if (!closure_2) {
              if (!closure_3) {
                let obj4 = callback(closure_1_2[19]);
                obj4 = { tags: null };
                obj4[0] = c4;
                const result = obj4.captureBillingException(c5, obj4);
              }
              if (closure_1_1) {
                throw c5;
              } else {
                c6 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          }
          const _Math = Math;
          if (Math.random() < 0.01) {
            let obj6 = callback(closure_1_2[19]);
            const obj5 = { tags: null };
            obj5[0] = c4;
            const result1 = obj6.captureBillingException(c5, obj5);
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj6 = { value: null, done: true };
          obj6[0] = arg1;
          return obj6;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp50) {
        closure_3 = tmp50;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp50;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
  iter.next();
  return iter;
});
closure_0 = importDefaultResult(function*() {
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
      return { value: "HermesInternal", done: null };
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
          const items = [closure_1_26(), closure_1_27()];
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
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp8) {
      c0 = tmp;
      throw tmp8;
    }
  }
});
c1 = false;
getUserCountry = "loadSkus";
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
        return { value: "HermesInternal", done: null };
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
            c4 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: null };
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
          c5 = closure_3;
          const items1 = [, , , , , ];
          ({ SERVICE_DISCONNECTED: arr[0], SERVICE_TIMEOUT: arr[1], SERVICE_UNAVAILABLE: arr[2], BILLING_UNAVAILABLE: arr[3], FEATURE_NOT_SUPPORTED: arr[4], BILLING_CLIENT_NOT_READY: arr[5] } = closure_1_16);
          const _String = String;
          const mapped = items1.map(String);
          let code;
          if (c5 != null) {
            code = c5.code;
          }
          closure_1 = mapped.includes(code);
          let hasItem;
          if (c5 != null) {
            const message = c5.message;
            if (message != null) {
              hasItem = message.includes("max attempts exceeded");
            }
          }
          closure_2 = true === hasItem;
          let hasItem1;
          if (c5 != null) {
            const message2 = c5.message;
            if (message2 != null) {
              hasItem1 = message2.includes("returned null");
            }
          }
          closure_3 = true === hasItem1;
          let tmp21;
          if (null != closure_2) {
            const obj3 = { source: null };
            obj3[0] = tmp20;
            tmp21 = obj3;
          }
          c4 = tmp21;
          if (!closure_1) {
            if (!closure_2) {
              if (!closure_3) {
                let obj4 = callback(closure_1_2[19]);
                obj4 = { tags: null };
                obj4[0] = c4;
                const result = obj4.captureBillingException(c5, obj4);
              }
              if (closure_1_1) {
                throw c5;
              } else {
                c6 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          }
          const _Math = Math;
          if (Math.random() < 0.01) {
            let obj6 = callback(closure_1_2[19]);
            const obj5 = { tags: null };
            obj5[0] = c4;
            const result1 = obj6.captureBillingException(c5, obj5);
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj6 = { value: null, done: true };
          obj6[0] = arg1;
          return obj6;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp50) {
        closure_3 = tmp50;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp50;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
  iter.next();
  return iter;
});
let tmp7 = new timestampDefault("GPlayActionCreators");
let closure_29 = new failsDefault(5000, 300000, true);
let c30 = 0;
let c31 = null;
closure_0 = importDefaultResult((arg0, arg1) => {
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
        return { value: "HermesInternal", done: null };
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
            let message = tmp3;
            closure_3 = tmp5;
            let callback2;
            let succeededOnlyFields;
            closure_3 = undefined;
            callback2 = closure_1_10.getState().analyticsByProductId[callback];
            c6 = 1;
            v0 = 2;
            c8 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_21.purchase(callback, callback2);
            return obj1;
          }
        } else if (1 === tmp8) {
          c6 = 0;
          message = closure_5;
          obj1 = callback(closure_1_2[19]);
          const obj2 = { tags: null };
          const obj3 = { productId: null };
          obj3[0] = callback;
          obj2[0] = obj3;
          const result = obj1.captureBillingException(message, obj2);
          succeededOnlyFields = callback2;
          if (callback2 == null) {
            succeededOnlyFields = {};
          }
          succeededOnlyFields = succeededOnlyFields.succeededOnlyFields;
          closure_3 = v0(succeededOnlyFields, closure_1_3);
          let obj4 = callback2(closure_1_2[20]);
          obj4 = {};
          const merged = Object.assign(closure_3);
          obj4.location = "purchase";
          obj4.product_id = callback;
          obj4.error = message.message;
          obj4.track(closure_1_13.GPLAY_PURCHASE_FAILED, obj4);
          throw message;
        } else if (arg0 === 1) {
          c8 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          c6 = 0;
          c8 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp40) {
        closure_5 = tmp40;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp40;
        } else {
          v0 = tmp;
        }
      }
    }
  })();
});
closure_0 = importDefaultResult(function*() {
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
      return { value: "HermesInternal", done: null };
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
            obj1[0] = closure_1_21.getUserCountry();
            return obj1;
          } else {
            closure_1_22.info("[getUserCountry] Quest: Skipping Google Play country lookup");
            c5 = 3;
            return { value: null, done: true };
          }
          obj9 = closure_1_0(closure_1_2[15]);
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
              let obj2 = lib(table[19]);
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
c1 = true;
getUserCountry = "getUserCountry";
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
        return { value: "HermesInternal", done: null };
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
            c4 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: null };
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
          c5 = closure_3;
          const items1 = [, , , , , ];
          ({ SERVICE_DISCONNECTED: arr[0], SERVICE_TIMEOUT: arr[1], SERVICE_UNAVAILABLE: arr[2], BILLING_UNAVAILABLE: arr[3], FEATURE_NOT_SUPPORTED: arr[4], BILLING_CLIENT_NOT_READY: arr[5] } = closure_1_16);
          const _String = String;
          const mapped = items1.map(String);
          let code;
          if (c5 != null) {
            code = c5.code;
          }
          closure_1 = mapped.includes(code);
          let hasItem;
          if (c5 != null) {
            const message = c5.message;
            if (message != null) {
              hasItem = message.includes("max attempts exceeded");
            }
          }
          closure_2 = true === hasItem;
          let hasItem1;
          if (c5 != null) {
            const message2 = c5.message;
            if (message2 != null) {
              hasItem1 = message2.includes("returned null");
            }
          }
          closure_3 = true === hasItem1;
          let tmp21;
          if (null != closure_2) {
            const obj3 = { source: null };
            obj3[0] = tmp20;
            tmp21 = obj3;
          }
          c4 = tmp21;
          if (!closure_1) {
            if (!closure_2) {
              if (!closure_3) {
                let obj4 = callback(closure_1_2[19]);
                obj4 = { tags: null };
                obj4[0] = c4;
                const result = obj4.captureBillingException(c5, obj4);
              }
              if (closure_1_1) {
                throw c5;
              } else {
                c6 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          }
          const _Math = Math;
          if (Math.random() < 0.01) {
            let obj6 = callback(closure_1_2[19]);
            const obj5 = { tags: null };
            obj5[0] = c4;
            const result1 = obj6.captureBillingException(c5, obj5);
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj6 = { value: null, done: true };
          obj6[0] = arg1;
          return obj6;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp50) {
        closure_3 = tmp50;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp50;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
  iter.next();
  return iter;
});
let tmp11 = new failsDefault(5000, 300000, true);
let result = require("set").fileFinishedImporting("actions/native/GPlayActionCreators.tsx");

export const loadSubscriptionSkus = importDefaultResultResult;
export const loadInAppSkus = importDefaultResultResult1;
export const loadSkus = importDefaultResultResult2;
export const ensureSkusLoaded = function ensureSkusLoaded(closure_30) {
  const callback = closure_30;
  if (obj.isAndroid()) {
    if (closure_30.every((arg0) => null != product.getProduct(arg0))) {
      return Promise.resolve();
    } else if (null != closure_31) {
      return closure_31;
    } else {
      let _Date = Date;
      if (Date.now() < c30) {
        return Promise.resolve();
      } else {
        if (obj3.isOnline()) {
          if (tmpResult.isGooglePlayBillingSupported()) {
            if (!store.isReady()) {
              return Promise.resolve();
            }
          } else if (!authenticated.isAuthenticated()) {
            return Promise.resolve();
          }
          const tmp9 = importDefaultResult(function*() {
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
                return { value: "HermesInternal", done: null };
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
                    closure_0 = tmp3;
                    c3 = 1;
                    c4 = 2;
                    c5 = 1;
                    obj = { value: null, done: false };
                    obj[0] = closure_1_28();
                    return obj;
                  }
                } else if (1 === tmp7) {
                  c3 = 0;
                  c31 = null;
                  if (closure_1_0.every((arg0) => null != product.getProduct(arg0))) {
                    closure_1_29.succeed();
                    closure_30 = 0;
                  } else {
                    const _Date3 = Date;
                    const timestamp = Date.now();
                    closure_30 = timestamp + closure_1_29.fail();
                  }
                  throw closure_2;
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c31 = null;
                  if (closure_0.every((arg0) => null != product.getProduct(arg0))) {
                    closure_1_29.succeed();
                    closure_30 = 0;
                  } else {
                    const _Date2 = Date;
                    const timestamp1 = Date.now();
                    closure_30 = timestamp1 + closure_1_29.fail();
                  }
                  c5 = 3;
                } else {
                  c3 = 0;
                  c31 = null;
                  if (closure_0.every((arg0) => null != product.getProduct(arg0))) {
                    closure_1_29.succeed();
                    closure_30 = 0;
                  } else {
                    const _Date = Date;
                    const timestamp2 = Date.now();
                    closure_30 = timestamp2 + closure_1_29.fail();
                  }
                  c5 = 3;
                }
              } catch (tmp31) {
                closure_2 = tmp31;
                if (tmp4 === c3) {
                  c5 = tmp2;
                  throw tmp31;
                } else {
                  c4 = tmp;
                }
              }
            }
          })();
          closure_31 = tmp9;
          return tmp9;
        } else {
          return Promise.resolve();
        }
        obj3 = _true(tmp2[18]);
      }
    }
  } else {
    return Promise.resolve();
  }
  obj = callback(getUserCountry[17]);
  const tmp = callback;
};
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
export const verifyPurchase = function verifyPurchase() {
  const self = this;
  const apply = _verifyPurchase.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const sendPaymentCompleteAnalytics = function sendPaymentCompleteAnalytics(productId) {
  const tmp = state.getState().analyticsByProductId[productId.productId];
  if (null != tmp) {
    const succeededOnlyFields = tmp.succeededOnlyFields;
    const tmp4 = callback2(tmp, closure_4);
    let obj = _true(getUserCountry[20]);
    obj.track(constants.PAYMENT_FLOW_COMPLETED, tmp4);
    obj = {};
    const merged = Object.assign(tmp4);
    const merged1 = Object.assign(succeededOnlyFields);
    _true(getUserCountry[20]).track(constants.PAYMENT_FLOW_SUCCEEDED, obj);
    callback3(productId.productId);
    const obj2 = _true(getUserCountry[20]);
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
              let obj = callback(getUserCountry[19]);
            }
          }
        }
      }
      obj = { type: "GPLAY_UPDATE_PENDING_DOWNGRADE", pendingDowngrade: null };
      obj = { purchaseToken: null, subscriptionId: null, newSubscriptionSkuId: null };
      obj[0] = c7;
      obj[1] = c5;
      obj[2] = tmp.identifier;
      obj[1] = obj;
      _true(getUserCountry[14]).dispatch(obj);
      const obj2 = _true(getUserCountry[14]);
    }
  }
};
export const downgradeSubscription = function downgradeSubscription(pendingDowngrade) {
  ({ purchaseToken, subscriptionId, newSubscriptionSkuId } = pendingDowngrade);
  const HTTP = callback(getUserCountry[23]).HTTP;
  return HTTP.post({ url: constants2.DOWNGRADE_SUBSCRIPTION, body: { purchase_token: purchaseToken, subscription_id: subscriptionId, subscription_sku_id: newSubscriptionSkuId }, rejectWithError: false });
};
export const getUserCountry = importDefaultResultResult3;