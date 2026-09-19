// === Module 9480: GPlayActionCreators ===

// Module 9480 (GPlayActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import BackoffDefault from "Backoff" /* 559 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import IAPStore from "IAPStore" /* 7477 */;

function getPlanIdForProduct(arg0, arg1) {
  if (arg1) {
    try {
      return closure_0(getUserCountry[11]).getPlanIdForGift(arg0);
    } catch (err) {
      return null;
    }
  } else {
    let basePlanId;
    const tmp4 = closure_0(getUserCountry[11]).AppStorePremiumProductIdsToPremiumBundledItems[arg0];
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
  const apply = closure_25.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_25 = async function _fetchDesktopSubscriptionSkus(arg0) {
  if (c22 === 2) {
    c22 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    while (true) {
      c22 = 2;
      let tmp4 = c21;
      if (0 === c21) {
        if (arg0 === 1) {
          c22 = 3;
          throw value;
        } else if (arg0 === 2) {
          c22 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          closure_18 = tmp;
          closure_17 = tmp4;
          closure_145_1 = undefined;
          closure_145_2 = undefined;
          closure_145_0 = closure_0;
          let DEFAULT = closure_1;
          if (closure_1 === undefined) {
            DEFAULT = constants.DEFAULT;
          }
          closure_145_1 = DEFAULT;
          let flag = closure_2;
          if (closure_2 === undefined) {
            flag = false;
          }
          closure_145_2 = flag;
          closure_145_3 = undefined;
          closure_145_4 = undefined;
          closure_145_5 = undefined;
          closure_145_6 = undefined;
          closure_145_7 = undefined;
          closure_145_8 = undefined;
          closure_145_9 = undefined;
          closure_145_10 = undefined;
          closure_145_11 = undefined;
          closure_145_12 = undefined;
          closure_145_13 = undefined;
          closure_145_14 = undefined;
          closure_145_15 = undefined;
          closure_145_16 = undefined;
          closure_145_17 = undefined;
          closure_145_18 = undefined;
          let amount;
          closure_145_20 = undefined;
          c21 = 1;
          c22 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c22 = 3;
          throw value;
        } else if (arg0 === 2) {
          c22 = 3;
          let obj4 = { value, done: true };
          return obj4;
        } else {
          closure_145_3 = [];
          let _Set = Set;
          let tmp145 = new.target;
          let tmp146 = new.target;
          let set = new Set();
          closure_145_4 = set;
          closure_145_5 = {};
          closure_4 = closure_145_0;
          closure_3 = closure_145_0[Symbol.iterator]();
          while (closure_3 !== undefined) {
            c20 = 1;
            closure_145_6 = tmp110;
            closure_145_7 = closure_146_23(closure_145_6, closure_145_2);
            if (null != closure_145_7) {
              closure_145_8 = closure_146_19[closure_145_7];
              let skuId;
              if (closure_145_8 != null) {
                skuId = closure_145_8.skuId;
              }
              let tmp112 = null != skuId;
              if (tmp112) {
                tmp112 = closure_145_8.skuId !== closure_146_18.NONE;
              }
              if (tmp112) {
                let addResult = closure_145_4.add(closure_145_8.skuId);
                closure_145_5[closure_145_6] = closure_145_7;
              }
            }
            c20 = 0;
            continue;
          }
          closure_145_9 = {};
          let obj8 = closure_146_0(closure_146_2[12]);
          let items = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(closure_145_4, 0);
          c21 = 3;
          c22 = 1;
          let obj5 = { value: obj8.fetchSubscriptionPlansBySKUs(items), done: false };
          return obj5;
        }
      } else if (2 === tmp4) {
        c20 = 0;
        closure_3.return();
        throw closure_1_19;
      } else if (3 === tmp4) {
        if (arg0 === 1) {
          c22 = 3;
          throw value;
        } else if (arg0 === 2) {
          c22 = 3;
          let obj6 = { value, done: true };
          return obj6;
        } else {
          closure_145_10 = value;
          closure_6 = closure_145_10;
          subscriptionId = closure_145_10[Symbol.iterator]();
          while (subscriptionId !== undefined) {
            c20 = 2;
            closure_145_11 = tmp16;
            closure_10 = closure_145_11;
            closure_9 = closure_145_11[Symbol.iterator]();
            while (closure_9 !== undefined) {
              closure_145_12 = tmp22;
              closure_145_9[closure_145_12.id] = closure_145_12;
              c20 = 2;
              continue;
            }
            c20 = 0;
            continue;
          }
          closure_8 = closure_145_0;
          purchaseToken = closure_145_0[Symbol.iterator]();
          while (purchaseToken !== undefined) {
            c20 = 4;
            closure_145_13 = tmp32;
            closure_145_14 = closure_145_5[closure_145_13];
            if (null != closure_145_14) {
              closure_145_15 = closure_145_9[closure_145_14];
              if (null != closure_145_15) {
                let prices = closure_145_15.prices;
                let country_prices;
                if (prices != null) {
                  let tmp53 = prices[closure_145_1];
                  if (tmp53 != null) {
                    country_prices = tmp53.country_prices;
                  }
                }
                closure_145_16 = country_prices;
                let first;
                if (closure_145_16 != null) {
                  let prices2 = closure_145_16.prices;
                  if (prices2 != null) {
                    first = prices2[0];
                  }
                }
                closure_145_17 = first;
                if (null != closure_145_17) {
                  let str = closure_145_17.currency;
                  let formatted;
                  if (str != null) {
                    formatted = str.toLowerCase();
                  }
                  let usd = formatted;
                  if (formatted == null) {
                    usd = "usd";
                  }
                  closure_145_18 = usd;
                  amount = closure_145_17.amount;
                  closure_145_20 = closure_146_19[closure_145_14];
                  let obj7 = { identifier: null, price: null, currencySymbol: null, currencyCode: null, priceString: null, countryCode: null, downloadable: false, description: null, title: null, type: null, subscriptionOffers: null };
                  obj7.identifier = closure_145_13;
                  obj7.price = amount;
                  obj7.currencySymbol = closure_145_17.currency;
                  obj7.currencyCode = closure_145_18;
                  let str2 = "";
                  if (null != closure_145_17.currency) {
                    let result = amount / 100;
                    let _HermesInternal = HermesInternal;
                    str2 = "" + closure_145_17.currency + " " + result.toFixed(2);
                  }
                  obj7.priceString = str2;
                  let country_code;
                  if (closure_145_16 != null) {
                    country_code = closure_145_16.country_code;
                  }
                  let US = country_code;
                  if (country_code == null) {
                    US = closure_146_0(closure_146_2[13]).CountryCodes.US;
                  }
                  obj7.countryCode = US;
                  let name;
                  if (closure_145_20 != null) {
                    name = closure_145_20.name;
                  }
                  if (name == null) {
                    name = closure_145_15.name;
                  }
                  let description = name;
                  if (name == null) {
                    description = "";
                  }
                  obj7.description = description;
                  let name1;
                  if (closure_145_20 != null) {
                    name1 = closure_145_20.name;
                  }
                  name = name1;
                  if (name1 == null) {
                    name = closure_145_15.name;
                  }
                  let title = name;
                  if (name == null) {
                    title = "";
                  }
                  obj7.title = title;
                  let str3 = "subs";
                  if (closure_145_2) {
                    str3 = "inapp";
                  }
                  obj7.type = str3;
                  obj7.subscriptionOffers = [];
                  let arr = closure_145_3.push(obj7);
                } else {
                  let obj9 = { productId: null, planId: null, priceSetAssignmentType: null };
                  obj9.productId = closure_145_13;
                  obj9.planId = closure_145_14;
                  obj9.priceSetAssignmentType = closure_145_1;
                  let warnResult = closure_146_22.warn("[fetchDesktopSubscriptionSkus] No price info found", obj9);
                }
              } else {
                let obj10 = { productId: null, planId: null };
                obj10.productId = closure_145_13;
                obj10.planId = closure_145_14;
                let warnResult1 = closure_146_22.warn("[fetchDesktopSubscriptionSkus] Plan not found", obj10);
              }
            } else {
              let obj = { productId: null };
              obj.productId = closure_145_13;
              let warnResult2 = closure_146_22.warn("[fetchDesktopSubscriptionSkus] No plan ID found", obj);
            }
            c20 = 0;
            continue;
          }
          c22 = 3;
          let obj11 = { value: closure_145_3, done: true };
          return obj11;
        }
      } else if (4 === tmp4) {
        c20 = 0;
        subscriptionId.return();
        throw closure_1_19;
      } else if (5 === tmp4) {
        c20 = 2;
        closure_9.return();
        throw closure_1_19;
      } else {
        c20 = 0;
        purchaseToken.return();
        throw closure_1_19;
      }
    }
  }
};
let closure_32 = async function _loadUserCountry() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp5;
          closure_0 = tmp2;
          closure_128_0 = undefined;
          c2 = 1;
          c3 = 1;
          const obj4 = { value: importDefaultResultResult3(), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        closure_128_0 = value;
        const obj6 = { type: "GPLAY_SET_USER_COUNTRY", countryCode: closure_128_0 };
        closure_129_1(closure_129_2[14]).dispatch(obj6);
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp13) {
      c3 = tmp;
      throw tmp13;
    }
  }
};
let closure_33 = async function _subscribe(arg0) {
  closure_7 = tmp3;
  closure_134_0 = closure_0;
  closure_134_1 = closure_2;
  closure_134_2 = closure_4;
  await BillingManager.subscribe(closure_0, closure_1, closure_2, closure_3, closure_4);
  if (1 === tmp7) {
    c9 = 0;
    closure_134_3 = closure_8;
    const obj8 = { productId: closure_134_0, oldProductId: null };
    let oldProductId = closure_134_1;
    if (closure_134_1 == null) {
      oldProductId = "";
    }
    const obj9 = { tags: null };
    obj8.oldProductId = oldProductId;
    obj9.tags = obj8;
    const result = closure_135_0(closure_135_2[19]).captureBillingException(closure_134_3, obj9);
    closure_135_0(closure_135_2[19]);
    const obj10 = { title: null, body: null };
    const intl = closure_135_0(closure_135_2[22]).intl;
    obj10.title = intl.string(closure_135_0(closure_135_2[22]).t["U+H+kd"]);
    const intl2 = closure_135_0(closure_135_2[22]).intl;
    obj10.body = intl2.string(closure_135_0(closure_135_2[22]).t.LFFx5G);
    closure_135_1(closure_135_2[21]).show(obj10);
    closure_135_1(closure_135_2[21]);
    closure_135_1(closure_135_2[20]).track(closure_135_13.GPLAY_PURCHASE_FAILED, { location: "subscribe", product_id: closure_134_0, offer_id: closure_134_2, error: closure_134_3.message });
    c11 = 3;
    closure_135_1(closure_135_2[20]);
  } else if (arg0 === 1) {
    c11 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c9 = 0;
  }
  return value;
};
let closure_34 = async function _verifyPurchase(arg0) {
  closure_0 = arg0;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp5;
            closure_131_0 = closure_0;
            closure_131_1 = undefined;
            closure_131_2 = undefined;
            closure_131_3 = undefined;
            closure_131_4 = undefined;
            closure_131_5 = undefined;
            const tmp77 = state.getState().analyticsByProductId[closure_0.productId];
            closure_131_1 = tmp77;
            id = id.getId();
            const SubscriptionProductIds = closure_2_0(7480).SubscriptionProductIds;
            const hasItem = SubscriptionProductIds.includes(closure_0.productId);
            let tmp54 = !hasItem;
            closure_131_2 = tmp54;
            const productId = closure_0.productId;
            if (hasItem) {
              let tmp52 = null;
              let tmp53 = productId;
            } else {
              tmp52 = productId;
              tmp53 = null;
            }
            if (!hasItem) {
              tmp54 = null != gift_info_options;
            }
            if (tmp54) {
              tmp54 = null == gift_info_options.gift_style;
            }
            if (tmp54) {
              const obj5 = { source: "verifyPurchase", sku_id: closure_0.productId };
              _true(1241).track(constants.GIFT_INFO_OPTIONS_MISSING, obj5);
              const obj9 = _true(1241);
            }
            c6 = 1;
            const HTTP = closure_2_0(1271).HTTP;
            const request = { url: constants2.VERIFY_PURCHASE, body: null, rejectWithError: false };
            const obj6 = { purchase_token: closure_0.purchaseToken, user_id: id, package_name: closure_0.packageName, subscription_sku_id: tmp53, one_time_purchase_sku_id: tmp52, gift_info_options, one_time_purchase_options: { consume_on_validate: true }, load_id: null };
            load_id = undefined;
            if (tmp77 != null) {
              load_id = tmp77.load_id;
            }
            if (load_id == null) {
              load_id = null;
            }
            obj6.load_id = load_id;
            request.body = obj6;
            c7 = 2;
            c8 = 1;
            const obj8 = { value: HTTP.post(request), done: false };
            return obj8;
          }
        } else if (1 === tmp8) {
          c6 = 0;
          closure_131_6 = closure_5;
          const obj10 = { tags: null };
          const obj11 = { productId: closure_131_0.productId };
          obj10.tags = obj11;
          const result = closure_132_0(closure_132_2[19]).captureBillingException(closure_131_6, obj10);
          if (null != closure_131_1) {
            const succeededOnlyFields2 = closure_131_1.succeededOnlyFields;
            closure_131_5 = closure_132_7(closure_131_1, closure_132_6);
            const obj12 = {};
            const merged = Object.assign(closure_131_5);
            obj12.payment_gateway = closure_132_20.GOOGLE;
            closure_132_1(closure_132_2[20]).track(closure_132_13.PAYMENT_FLOW_FAILED, obj12);
            const obj7 = closure_132_1(closure_132_2[20]);
          }
          throw closure_131_6;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          closure_131_3 = value;
          if (null != closure_131_1) {
            if (!closure_131_2) {
              const succeededOnlyFields = closure_131_1.succeededOnlyFields;
              closure_131_4 = closure_132_7(closure_131_1, closure_132_5);
              closure_132_1(closure_132_2[20]).track(closure_132_13.PAYMENT_FLOW_COMPLETED, closure_131_4);
              closure_132_9(closure_131_0.productId);
              const obj = closure_132_1(closure_132_2[20]);
            }
          }
          c6 = 0;
          c8 = 3;
          const obj14 = { value: closure_131_3.body, done: true };
          return obj14;
        }
      } catch (tmp64) {
        closure_5 = tmp64;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp64;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
};
let closure_3 = ["succeededOnlyFields"];
let closure_4 = ["succeededOnlyFields"];
let subscriptionId = ["succeededOnlyFields"];
let closure_6 = ["succeededOnlyFields"];
const GPlayAnalyticsStore = fn(9481);
({ deleteGPlayAnalytics: closure_9, useGPlayAnalyticsStore: c10 } = GPlayAnalyticsStore);
let Constants = fn(1074);
({ AnalyticEvents: map1, Endpoints: closure_14, PriceSetAssignmentPurchaseTypes: closure_15 } = Constants);
Constants = fn(7478);
({ GPlayBillingResult: closure_16, GPlaySkusType: closure_17 } = Constants);
const PremiumConstants = fn(1374);
({ PremiumSubscriptionSKUs: closure_18, SubscriptionPlanInfo: closure_19 } = PremiumConstants);
const PaymentGateways = fn(1085).PaymentGateways;
const BillingManager = fn(17).NativeModules.BillingManager;
let closure_22 = new LoggerDefault("GPlayActionCreators");
asyncGeneratorStep(async () => {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          let SubscriptionProductIds = closure_0;
          if (closure_0 === undefined) {
            SubscriptionProductIds = closure_0(getUserCountry[11]).SubscriptionProductIds;
          }
          closure_129_0 = SubscriptionProductIds;
          closure_129_1 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          if (null != closure_129_0) {
            if (0 !== closure_129_0.length) {
              closure_130_1(closure_130_2[14]).dispatch({ type: "GPLAY_FETCH_SUBSCRIPTION_SKUS_START" });
              c4 = 1;
              const obj13 = closure_130_1(closure_130_2[14]);
              if (obj14.isGooglePlayBillingSupported()) {
                c5 = 4;
                c6 = 1;
                const obj7 = { value: closure_130_21.getSubscriptionSkus(closure_129_0), done: false };
                return obj7;
              } else {
                c5 = 3;
                c6 = 1;
                const obj8 = { value: closure_130_24(closure_129_0), done: false };
                return obj8;
              }
              obj14 = closure_130_0(closure_130_2[15]);
            }
          }
          c6 = 3;
          const obj9 = { value: [], done: true };
          return obj9;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_2 = closure_3;
        closure_130_1(closure_130_2[14]).dispatch({ type: "GPLAY_FETCH_SUBSCRIPTION_SKUS_FAILED" });
        throw closure_129_2;
      } else {
        if (3 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj10 = { value, done: true };
            return obj10;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
        closure_129_1 = value;
        const obj11 = { type: "GPLAY_SUBSCRIPTION_SKUS_LOADED", skus: null, skusType: null };
        const items = [];
        HermesBuiltin.arraySpread(closure_129_1, 0);
        obj11.skus = items;
        obj11.skusType = closure_130_17.SUBSCRIPTION;
        closure_130_1(closure_130_2[14]).dispatch(obj11);
        c4 = 0;
        c6 = 3;
        const obj12 = { value: closure_129_1, done: true };
        return obj12;
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
});
let getUserCountry = "loadSubscriptionSkus";
const importDefaultResultResult = asyncGeneratorStep(async () => {
  closure_0 = [...arguments];
  c5 = 0;
  c6 = 0;
  c4 = 0;
  const iter = (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp7;
            closure_129_0 = closure_0;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            closure_129_3 = undefined;
            closure_129_4 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c4 = 1;
            const items = [];
            HermesBuiltin.arraySpread(closure_129_0, 0);
            c5 = 3;
            c6 = 1;
            const obj6 = { value: HermesBuiltin.apply(items, undefined), done: false };
            return obj6;
          }
        } else if (2 === tmp7) {
          c4 = 0;
          closure_129_5 = closure_3;
          const items1 = [, , , , , ];
          ({ SERVICE_DISCONNECTED: arr[0], SERVICE_TIMEOUT: arr[1], SERVICE_UNAVAILABLE: arr[2], BILLING_UNAVAILABLE: arr[3], FEATURE_NOT_SUPPORTED: arr[4], BILLING_CLIENT_NOT_READY: arr[5] } = closure_1_16);
          const _String = String;
          const mapped = items1.map(String);
          let code;
          if (closure_129_5 != null) {
            code = closure_129_5.code;
          }
          closure_129_1 = mapped.includes(code);
          let hasItem;
          if (closure_129_5 != null) {
            const message = closure_129_5.message;
            if (message != null) {
              hasItem = message.includes("max attempts exceeded");
            }
          }
          closure_129_2 = true === hasItem;
          let hasItem1;
          if (closure_129_5 != null) {
            const message2 = closure_129_5.message;
            if (message2 != null) {
              hasItem1 = message2.includes("returned null");
            }
          }
          closure_129_3 = true === hasItem1;
          let tmp21;
          if (null != closure_130_2) {
            const obj8 = { source: tmp20 };
            tmp21 = obj8;
          }
          closure_129_4 = tmp21;
          if (!closure_129_1) {
            if (!closure_129_2) {
              if (!closure_129_3) {
                const obj9 = { tags: closure_129_4 };
                const result = closure_0(tmp3[19]).captureBillingException(closure_129_5, obj9);
                const obj5 = closure_0(tmp3[19]);
              }
              if (closure_130_1) {
                throw closure_129_5;
              } else {
                c6 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          }
          const _Math = Math;
          if (Math.random() < 0.01) {
            const obj10 = { tags: closure_129_4 };
            const result1 = closure_0(tmp3[19]).captureBillingException(closure_129_5, obj10);
            const obj7 = closure_0(tmp3[19]);
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
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
asyncGeneratorStep(async () => {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          let IAPProductIds = closure_0;
          if (closure_0 === undefined) {
            IAPProductIds = closure_0(getUserCountry[11]).IAPProductIds;
          }
          closure_129_0 = IAPProductIds;
          closure_129_1 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          if (null != closure_129_0) {
            if (0 !== closure_129_0.length) {
              closure_130_1(closure_130_2[14]).dispatch({ type: "GPLAY_FETCH_IN_APP_SKUS_START" });
              c4 = 1;
              const obj13 = closure_130_1(closure_130_2[14]);
              if (obj14.isGooglePlayBillingSupported()) {
                c5 = 4;
                c6 = 1;
                const obj7 = { value: closure_130_21.getIAPSkus(closure_129_0), done: false };
                return obj7;
              } else {
                c5 = 3;
                c6 = 1;
                const obj8 = {
                  value: (function fetchDesktopInAppSkus(arg0) {
                                  const items = [];
                                  const iter = arg0[Symbol.iterator]();
                                  const nextResult = iter.next();
                                  if (iter === undefined) {
                                    if (0 === items.length) {
                                      let resolved = Promise.resolve([]);
                                    } else {
                                      resolved = closure_1_24(items, constants.GIFT, true);
                                    }
                                    return resolved;
                                  } else {
                                    try {
                                      const planIdForGift = closure_1_0(dependencyMap[11]).getPlanIdForGift(tmp2);
                                      items.push(tmp2);
                                      const obj = closure_1_0(dependencyMap[11]);
                                    } catch (err) {
                                    }
                                  }
                                })(closure_129_0),
                  done: false
                };
                return obj8;
              }
              obj14 = closure_130_0(closure_130_2[15]);
            }
          }
          c6 = 3;
          const obj9 = { value: [], done: true };
          return obj9;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_2 = closure_3;
        closure_130_1(closure_130_2[14]).dispatch({ type: "GPLAY_FETCH_IN_APP_SKUS_FAILED" });
        throw closure_129_2;
      } else {
        if (3 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj10 = { value, done: true };
            return obj10;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          let obj = { value, done: true };
          return obj;
        }
        closure_129_1 = value;
        const obj11 = { type: "GPLAY_IN_APP_SKUS_LOADED", skus: null, skusType: null };
        let items = [];
        HermesBuiltin.arraySpread(closure_129_1, 0);
        obj11.skus = items;
        obj11.skusType = closure_130_17.IN_APP;
        closure_130_1(closure_130_2[14]).dispatch(obj11);
        c4 = 0;
        c6 = 3;
        const obj12 = { value: closure_129_1, done: true };
        return obj12;
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
});
getUserCountry = "loadInAppSkus";
const importDefaultResultResult1 = asyncGeneratorStep(async () => {
  closure_0 = [...arguments];
  c5 = 0;
  c6 = 0;
  c4 = 0;
  const iter = (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp7;
            closure_129_0 = closure_0;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            closure_129_3 = undefined;
            closure_129_4 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c4 = 1;
            const items = [];
            HermesBuiltin.arraySpread(closure_129_0, 0);
            c5 = 3;
            c6 = 1;
            const obj6 = { value: HermesBuiltin.apply(items, undefined), done: false };
            return obj6;
          }
        } else if (2 === tmp7) {
          c4 = 0;
          closure_129_5 = closure_3;
          const items1 = [, , , , , ];
          ({ SERVICE_DISCONNECTED: arr[0], SERVICE_TIMEOUT: arr[1], SERVICE_UNAVAILABLE: arr[2], BILLING_UNAVAILABLE: arr[3], FEATURE_NOT_SUPPORTED: arr[4], BILLING_CLIENT_NOT_READY: arr[5] } = closure_1_16);
          const _String = String;
          const mapped = items1.map(String);
          let code;
          if (closure_129_5 != null) {
            code = closure_129_5.code;
          }
          closure_129_1 = mapped.includes(code);
          let hasItem;
          if (closure_129_5 != null) {
            const message = closure_129_5.message;
            if (message != null) {
              hasItem = message.includes("max attempts exceeded");
            }
          }
          closure_129_2 = true === hasItem;
          let hasItem1;
          if (closure_129_5 != null) {
            const message2 = closure_129_5.message;
            if (message2 != null) {
              hasItem1 = message2.includes("returned null");
            }
          }
          closure_129_3 = true === hasItem1;
          let tmp21;
          if (null != closure_130_2) {
            const obj8 = { source: tmp20 };
            tmp21 = obj8;
          }
          closure_129_4 = tmp21;
          if (!closure_129_1) {
            if (!closure_129_2) {
              if (!closure_129_3) {
                const obj9 = { tags: closure_129_4 };
                const result = closure_0(tmp3[19]).captureBillingException(closure_129_5, obj9);
                const obj5 = closure_0(tmp3[19]);
              }
              if (closure_130_1) {
                throw closure_129_5;
              } else {
                c6 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          }
          const _Math = Math;
          if (Math.random() < 0.01) {
            const obj10 = { tags: closure_129_4 };
            const result1 = closure_0(tmp3[19]).captureBillingException(closure_129_5, obj10);
            const obj7 = closure_0(tmp3[19]);
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
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
asyncGeneratorStep(async () => {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const items = [importDefaultResultResult(), importDefaultResultResult1()];
          c1 = 1;
          c0 = 1;
          const obj4 = { value: Promise.all(items), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        const obj = { value, done: true };
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
getUserCountry = "loadSkus";
const importDefaultResultResult2 = asyncGeneratorStep(async () => {
  closure_0 = [...arguments];
  c5 = 0;
  c6 = 0;
  c4 = 0;
  const iter = (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp7;
            closure_129_0 = closure_0;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            closure_129_3 = undefined;
            closure_129_4 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c4 = 1;
            const items = [];
            HermesBuiltin.arraySpread(closure_129_0, 0);
            c5 = 3;
            c6 = 1;
            const obj6 = { value: HermesBuiltin.apply(items, undefined), done: false };
            return obj6;
          }
        } else if (2 === tmp7) {
          c4 = 0;
          closure_129_5 = closure_3;
          const items1 = [, , , , , ];
          ({ SERVICE_DISCONNECTED: arr[0], SERVICE_TIMEOUT: arr[1], SERVICE_UNAVAILABLE: arr[2], BILLING_UNAVAILABLE: arr[3], FEATURE_NOT_SUPPORTED: arr[4], BILLING_CLIENT_NOT_READY: arr[5] } = closure_1_16);
          const _String = String;
          const mapped = items1.map(String);
          let code;
          if (closure_129_5 != null) {
            code = closure_129_5.code;
          }
          closure_129_1 = mapped.includes(code);
          let hasItem;
          if (closure_129_5 != null) {
            const message = closure_129_5.message;
            if (message != null) {
              hasItem = message.includes("max attempts exceeded");
            }
          }
          closure_129_2 = true === hasItem;
          let hasItem1;
          if (closure_129_5 != null) {
            const message2 = closure_129_5.message;
            if (message2 != null) {
              hasItem1 = message2.includes("returned null");
            }
          }
          closure_129_3 = true === hasItem1;
          let tmp21;
          if (null != closure_130_2) {
            const obj8 = { source: tmp20 };
            tmp21 = obj8;
          }
          closure_129_4 = tmp21;
          if (!closure_129_1) {
            if (!closure_129_2) {
              if (!closure_129_3) {
                const obj9 = { tags: closure_129_4 };
                const result = closure_0(tmp3[19]).captureBillingException(closure_129_5, obj9);
                const obj5 = closure_0(tmp3[19]);
              }
              if (closure_130_1) {
                throw closure_129_5;
              } else {
                c6 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          }
          const _Math = Math;
          if (Math.random() < 0.01) {
            const obj10 = { tags: closure_129_4 };
            const result1 = closure_0(tmp3[19]).captureBillingException(closure_129_5, obj10);
            const obj7 = closure_0(tmp3[19]);
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
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
let tmp7 = new LoggerDefault("GPlayActionCreators");
let closure_29 = new BackoffDefault(5000, 300000, true);
let c30 = 0;
let c31 = null;
asyncGeneratorStep(async (arg0, arg1) => {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c8 = 2;
      if (0 === v2) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp5;
          closure_131_0 = closure_0;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          closure_131_1 = state.getState().analyticsByProductId[closure_0];
          c6 = 1;
          v2 = 2;
          c8 = 1;
          const obj6 = { value: BillingManager.purchase(closure_0, _true), done: false };
          return obj6;
        }
      } else if (1 === tmp8) {
        c6 = 0;
        closure_131_4 = closure_5;
        const obj7 = { tags: null };
        const obj8 = { productId: closure_131_0 };
        obj7.tags = obj8;
        const result = closure_0(4429).captureBillingException(closure_131_4, obj7);
        dependencyMap = closure_131_1;
        if (closure_131_1 == null) {
          dependencyMap = {};
        }
        closure_131_2 = dependencyMap;
        const succeededOnlyFields = closure_131_2.succeededOnlyFields;
        closure_131_3 = v2(closure_131_2, closure_3);
        const obj2 = closure_0(4429);
        const obj9 = {};
        const merged = Object.assign(closure_131_3);
        obj9.location = "purchase";
        obj9.product_id = closure_131_0;
        obj9.error = closure_131_4.message;
        _true(1241).track(constants.GPLAY_PURCHASE_FAILED, obj9);
        throw closure_131_4;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj = { value, done: true };
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
        v2 = tmp;
      }
    }
  }
});
let closure_0 = asyncGeneratorStep(async () => {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          if (obj9.isGooglePlayBillingSupported()) {
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: BillingManager.getUserCountry(), done: false };
            return obj5;
          } else {
            logger.info("[getUserCountry] Quest: Skipping Google Play country lookup");
            c5 = 3;
            return { value: null, done: true };
          }
          obj9 = closure_0(getUserCountry[15]);
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_0 = closure_2;
        let code;
        if (closure_128_0 != null) {
          code = closure_128_0.code;
        }
        const _String = String;
        if (code !== String(closure_129_16.BILLING_CLIENT_NOT_READY)) {
          let hasItem;
          if (closure_128_0 != null) {
            const message = closure_128_0.message;
            if (message != null) {
              hasItem = message.includes("max attempts exceeded");
            }
          }
          if (true !== hasItem) {
            let hasItem1;
            if (closure_128_0 != null) {
              const message2 = closure_128_0.message;
              if (message2 != null) {
                hasItem1 = message2.includes("returned null");
              }
            }
            if (true !== hasItem1) {
              const obj6 = { tags: { source: "getUserCountry" } };
              const result = closure_129_0(closure_129_2[19]).captureBillingException(closure_128_0, obj6);
              const obj3 = closure_129_0(closure_129_2[19]);
            }
            c5 = 3;
          }
        }
        let message1;
        if (closure_128_0 != null) {
          message1 = closure_128_0.message;
        }
        const obj7 = { error: message1 };
        closure_129_22.warn("[getUserCountry] Failed to get user country from Google Play Billing", obj7);
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        c3 = 0;
        c5 = 3;
        const obj = { value, done: true };
        return obj;
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
});
let c1 = true;
getUserCountry = "getUserCountry";
const importDefaultResultResult3 = asyncGeneratorStep(async () => {
  closure_0 = [...arguments];
  c5 = 0;
  c6 = 0;
  c4 = 0;
  const iter = (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp7;
            closure_129_0 = closure_0;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            closure_129_3 = undefined;
            closure_129_4 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c4 = 1;
            const items = [];
            HermesBuiltin.arraySpread(closure_129_0, 0);
            c5 = 3;
            c6 = 1;
            const obj6 = { value: HermesBuiltin.apply(items, undefined), done: false };
            return obj6;
          }
        } else if (2 === tmp7) {
          c4 = 0;
          closure_129_5 = closure_3;
          const items1 = [, , , , , ];
          ({ SERVICE_DISCONNECTED: arr[0], SERVICE_TIMEOUT: arr[1], SERVICE_UNAVAILABLE: arr[2], BILLING_UNAVAILABLE: arr[3], FEATURE_NOT_SUPPORTED: arr[4], BILLING_CLIENT_NOT_READY: arr[5] } = closure_1_16);
          const _String = String;
          const mapped = items1.map(String);
          let code;
          if (closure_129_5 != null) {
            code = closure_129_5.code;
          }
          closure_129_1 = mapped.includes(code);
          let hasItem;
          if (closure_129_5 != null) {
            const message = closure_129_5.message;
            if (message != null) {
              hasItem = message.includes("max attempts exceeded");
            }
          }
          closure_129_2 = true === hasItem;
          let hasItem1;
          if (closure_129_5 != null) {
            const message2 = closure_129_5.message;
            if (message2 != null) {
              hasItem1 = message2.includes("returned null");
            }
          }
          closure_129_3 = true === hasItem1;
          let tmp21;
          if (null != closure_130_2) {
            const obj8 = { source: tmp20 };
            tmp21 = obj8;
          }
          closure_129_4 = tmp21;
          if (!closure_129_1) {
            if (!closure_129_2) {
              if (!closure_129_3) {
                const obj9 = { tags: closure_129_4 };
                const result = closure_0(tmp3[19]).captureBillingException(closure_129_5, obj9);
                const obj5 = closure_0(tmp3[19]);
              }
              if (closure_130_1) {
                throw closure_129_5;
              } else {
                c6 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          }
          const _Math = Math;
          if (Math.random() < 0.01) {
            const obj10 = { tags: closure_129_4 };
            const result1 = closure_0(tmp3[19]).captureBillingException(closure_129_5, obj10);
            const obj7 = closure_0(tmp3[19]);
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
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
const size = fn(2);
let result = size.fileFinishedImporting("actions/native/GPlayActionCreators.tsx");

export const loadSubscriptionSkus = importDefaultResultResult;
export const loadInAppSkus = importDefaultResultResult1;
export const loadSkus = importDefaultResultResult2;
export const ensureSkusLoaded = function ensureSkusLoaded(items) {
  closure_0 = items;
  if (obj.isAndroid()) {
    if (items.every((item) => null != product.getProduct(item))) {
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
            if (!IAPStore.isReady()) {
              return Promise.resolve();
            }
          } else if (!AuthenticationStore.isAuthenticated()) {
            return Promise.resolve();
          }
          const tmp9 = (async () => {
            if (c5 === 2) {
              c5 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp6 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c5 = 2;
                if (0 === c4) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_1 = tmp3;
                    closure_0 = tmp3;
                    c3 = 1;
                    c4 = 2;
                    c5 = 1;
                    const obj = { value: importDefaultResultResult2(), done: false };
                    return obj;
                  }
                } else if (1 === tmp7) {
                  c3 = 0;
                  c31 = null;
                  if (closure_129_0.every((item) => null != product.getProduct(item))) {
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
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c31 = null;
                  if (closure_129_0.every((item) => null != product.getProduct(item))) {
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
                  if (closure_129_0.every((item) => null != product.getProduct(item))) {
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
        obj3 = _true(getUserCountry[18]);
      }
    }
  } else {
    return Promise.resolve();
  }
  obj = closure_0(getUserCountry[17]);
};
export const loadUserCountry = function loadUserCountry() {
  const self = this;
  const apply = closure_32.apply;
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
  const apply = closure_33.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const verifyPurchase = function verifyPurchase() {
  const self = this;
  const apply = closure_34.apply;
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
    const tmp4 = _objectWithoutProperties(tmp, closure_4);
    _true(getUserCountry[20]).track(constants.PAYMENT_FLOW_COMPLETED, tmp4);
    const obj = _true(getUserCountry[20]);
    const obj3 = {};
    const merged = Object.assign(tmp4);
    const merged1 = Object.assign(succeededOnlyFields);
    _true(getUserCountry[20]).track(constants.PAYMENT_FLOW_SUCCEEDED, obj3);
    React7(productId.productId);
    const obj2 = _true(getUserCountry[20]);
  }
};
export const updatePendingDowngrade = function updatePendingDowngrade(arg0, c6, c7, c5) {
  const items = [IAPStore.getProduct(arg0), IAPStore.getProduct(c6)];
  [tmp, tmp2] = items;
  if (null != tmp2) {
    if (null != tmp) {
      if (null != tmp2) {
        if (null != tmp) {
          if (null != tmp2.billingPeriod) {
            if (null != tmp.billingPeriod) {
              closure_0(getUserCountry[19]);
            }
          }
        }
      }
      const obj3 = { type: "GPLAY_UPDATE_PENDING_DOWNGRADE", pendingDowngrade: null };
      const obj4 = { purchaseToken, subscriptionId, newSubscriptionSkuId: tmp.identifier };
      obj3.pendingDowngrade = obj4;
      _true(getUserCountry[14]).dispatch(obj3);
      const obj2 = _true(getUserCountry[14]);
    }
  }
};
export const downgradeSubscription = function downgradeSubscription(pendingDowngrade) {
  ({ purchaseToken, subscriptionId, newSubscriptionSkuId } = pendingDowngrade);
  const HTTP = closure_0(getUserCountry[23]).HTTP;
  const request = { url: constants2.DOWNGRADE_SUBSCRIPTION, body: { purchase_token: purchaseToken, subscription_id: subscriptionId, subscription_sku_id: newSubscriptionSkuId }, rejectWithError: false };
  return HTTP.post(request);
};
export const getUserCountry = importDefaultResultResult3;