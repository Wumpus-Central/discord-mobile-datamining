// discord_app/modules/premium/native/handlePremiumPurchase.android.tsx
import closure_4 from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import closure_5 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_6 from "../../../../_runtime/00019_noop.js";
import { setGPlayAnalytics } from "../../gplay/native/GPlayAnalyticsStore.tsx";
import closure_8 from "../../../stores/AuthenticationStore.tsx";
import closure_9 from "../../../stores/billing/SubscriptionStore.tsx";
import closure_10 from "../../../stores/native/IAPStore.android.tsx";
import ME from "../../../Constants.tsx";
import { PaymentGateways } from "../../../../discord_common/js/shared/Constants.tsx";

const require = arg1;
function validatePurchase() {
  const self = this;
  const apply = _validatePurchase.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _validatePurchase() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
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
              let lib = tmp5;
              let callback;
              lib = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              ({ productId: c0, premiumSubscription: c1, offerId: c2, currency: c3, price: c4, isGift: c5 } = callback);
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp8) {
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
              const HTTP = callback(530).HTTP;
              const obj2 = { url: null, body: null, rejectWithError: false };
              obj2[0] = constants.GOOGLE_PLAY_VALIDATE_PURCHASE;
              const obj3 = { product_id: null, offer_id: null, subscription_id: null, currency: null, price: null, is_gift: null };
              obj3[0] = callback;
              obj3[1] = dependencyMap;
              let id;
              if (lib != null) {
                id = lib.id;
              }
              obj3[2] = id;
              obj3[3] = c3;
              obj3[4] = c4;
              obj3[5] = c5;
              obj2[1] = obj3;
              c5 = 3;
              c6 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj2);
              return obj4;
            }
          } else if (2 === tmp8) {
            c4 = 0;
            c6 = c3;
            const tmp18 = new lib(10419)(c6);
            throw tmp18;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c4 = 0;
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp25) {
          c3 = tmp25;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp25;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_15 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_3 = ["succeededOnlyFields"];
({ AnalyticEvents: unpackModuleId, Endpoints: closure_12 } = ME);
let result = require("set").fileFinishedImporting("modules/premium/native/handlePremiumPurchase.android.tsx");

export const useHandlePremiumPurchase = function useHandlePremiumPurchase() {
  const items = [closure_9];
  const stateFromStores = _require(premiumDiscountOffer[17]).useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  _require = stateFromStores;
  let obj = _require(premiumDiscountOffer[17]);
  const premiumTrialOffer = _require(premiumDiscountOffer[18]).usePremiumTrialOffer();
  let obj2 = _require(premiumDiscountOffer[18]);
  premiumDiscountOffer = _require(premiumDiscountOffer[19]).usePremiumDiscountOffer();
  let obj3 = _require(premiumDiscountOffer[19]);
  const isEligibleForBogoOffer = _require(premiumDiscountOffer[20]).useIsEligibleForBogoOffer();
  closure_4 = tmp5;
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let paymentGatewayPlanId;
  if (stateFromStores != null) {
    paymentGatewayPlanId = stateFromStores.paymentGatewayPlanId;
  }
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.paymentGatewaySubscriptionId;
  }
  _require = undefined;
  _require = id((arg0) => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp8;
        throwTypeErrorResult = null;
        if (tmp9 === 3) {
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
            c7 = 2;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c3 = tmp4;
                c2 = tmp10;
                c0 = undefined;
                closure_1 = undefined;
                c2 = undefined;
                c3 = undefined;
                c4 = undefined;
                c5 = undefined;
                c6 = undefined;
                c7 = undefined;
                let flag2;
                c9 = undefined;
                c10 = undefined;
                c11 = undefined;
                let callback3;
                throwTypeErrorResult = c0;
                ({ productId: c0, skuId: closure_1, analyticsLoadId: c2, analyticsLocation: c3, analyticsLocations: c4, analyticsData: c5, isGift } = c0);
                if (isGift === undefined) {
                  isGift = false;
                }
                c6 = isGift;
                let flag = throwTypeErrorResult.isOneTimePurchase;
                if (flag === undefined) {
                  flag = false;
                }
                c7 = flag;
                flag2 = throwTypeErrorResult.allowPlanChange;
                if (flag2 === undefined) {
                  flag2 = true;
                }
                ({ applicationId: c9, giftInfoOptions: c10, onPurchaseComplete: c11, onPurchaseError: c12 } = throwTypeErrorResult);
                c13 = undefined;
                c14 = undefined;
                c15 = undefined;
                c16 = undefined;
                c17 = undefined;
                c18 = undefined;
                c19 = undefined;
                c20 = undefined;
                c21 = undefined;
                c6 = 1;
                c7 = 1;
                return { value: "ct", done: true };
              }
            } else {
              if (1 === tmp10) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c7 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  throwTypeErrorResult = c2;
                  throwTypeErrorResult = c3;
                  throwTypeErrorResult = closure_2_8;
                  const constants = closure_2_8.getId();
                  throwTypeErrorResult = closure_2_10;
                  throwTypeErrorResult = callback;
                  const lib = closure_2_10.getProduct(callback);
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = premiumDiscountOffer;
                  let obj2 = { isGift: null, analyticsLoadId: null, analyticsLocation: null, analyticsLocations: null };
                  throwTypeErrorResult = paymentGatewayPlanId;
                  obj2[0] = paymentGatewayPlanId;
                  throwTypeErrorResult = premiumDiscountOffer;
                  obj2[1] = premiumDiscountOffer;
                  throwTypeErrorResult = isEligibleForBogoOffer;
                  obj2[2] = isEligibleForBogoOffer;
                  throwTypeErrorResult = callback2;
                  obj2[3] = callback2;
                  const basePurchaseFlowAnalyticsFields = callback(premiumDiscountOffer[21]).getBasePurchaseFlowAnalyticsFields(obj2);
                  throwTypeErrorResult = id;
                  closure_1 = id;
                  if (id == null) {
                    closure_1 = {};
                  }
                  succeededOnlyFields = closure_1;
                  succeededOnlyFields = succeededOnlyFields.succeededOnlyFields;
                  closure_18 = callback2(succeededOnlyFields, isEligibleForBogoOffer);
                  obj3 = {};
                  const merged = Object.assign(basePurchaseFlowAnalyticsFields);
                  obj3.subscription_plan_gateway_plan_id = callback;
                  obj3.sku_id = premiumTrialOffer;
                  let price;
                  if (lib != null) {
                    price = lib.price;
                  }
                  obj3.price = price;
                  let price1;
                  if (lib != null) {
                    price1 = lib.price;
                  }
                  obj3.regular_price = price1;
                  let formatted;
                  if (lib != null) {
                    formatted = lib.currencyCode.toLowerCase();
                    const str = lib.currencyCode;
                  }
                  obj3.currency = formatted;
                  obj3.application_id = closure_2_9;
                  const merged1 = Object.assign(closure_18);
                  const obj4 = {};
                  const merged2 = Object.assign(obj3);
                  obj4.succeededOnlyFields = succeededOnlyFields;
                  prop(callback, obj4);
                  closure_20 = (function getOfferId(closure_0, closure_1_3, closure_1_1, closure_1_2, closure_14) {
                    let offerIds;
                    if (closure_14 != null) {
                      offerIds = closure_14.offerIds;
                    }
                    if (null != offerIds) {
                      if (null != closure_1_1) {
                        const tmp13 = _undefined(_undefined2[16]).TrialIdToProductOfferId[closure_1_1.trialId];
                        let tmp14;
                        if (tmp13 != null) {
                          tmp14 = tmp13[closure_0];
                        }
                        return tmp14;
                      } else if (null != closure_1_2) {
                        const tmp9 = _undefined(_undefined2[16]).DiscountIdToProductOfferId[closure_1_2.discountId];
                        let tmp10;
                        if (tmp9 != null) {
                          tmp10 = tmp9[closure_0];
                        }
                        return tmp10;
                      }
                    }
                    let BOGO_OFFER_ID = null;
                    if (closure_1_3) {
                      BOGO_OFFER_ID = null;
                      if (closure_0 === _undefined(_undefined2[16]).ProductIds.PREMIUM_TIER_2_MONTHLY) {
                        BOGO_OFFER_ID = tmp5(tmp6[16]).BOGO_OFFER_ID;
                      }
                      tmp5 = _undefined;
                      tmp6 = _undefined2;
                    }
                    return BOGO_OFFER_ID;
                  })(callback, closure_1_3, closure_1_1, closure_1_2, lib);
                  c5 = 1;
                  if (!paymentGatewayPlanId) {
                    if (!prop) {
                      throwTypeErrorResult = c3;
                      throwTypeErrorResult = closure_1_4;
                      if (closure_1_4) {
                        throwTypeErrorResult = closure_2_8;
                        throwTypeErrorResult = !closure_2_8;
                      }
                      if (throwTypeErrorResult) {
                        throwTypeErrorResult = c2;
                        if (closure_2_11 != null) {
                          throwTypeErrorResult = c3;
                          let obj5 = { paymentGateway: null };
                          throwTypeErrorResult = constants;
                          obj5[0] = constants.GOOGLE;
                          throwTypeErrorResult = throwTypeErrorResult(obj5);
                        }
                        c5 = 0;
                      } else {
                        throwTypeErrorResult = c3;
                        throwTypeErrorResult = c6;
                        throwTypeErrorResult = null != c6;
                        if (throwTypeErrorResult) {
                          throwTypeErrorResult = c3;
                          throwTypeErrorResult = c7;
                          throwTypeErrorResult = null != c7;
                        }
                        if (throwTypeErrorResult) {
                          throwTypeErrorResult = c3;
                          throwTypeErrorResult = c5;
                          throwTypeErrorResult = null != c5;
                        }
                        if (throwTypeErrorResult) {
                          throwTypeErrorResult = c2;
                          throwTypeErrorResult = c3;
                          throwTypeErrorResult = callback;
                          throwTypeErrorResult = premiumDiscountOffer;
                          let obj14 = callback(premiumDiscountOffer[25]);
                          throwTypeErrorResult = callback;
                          throwTypeErrorResult = c6;
                          throwTypeErrorResult = c7;
                          throwTypeErrorResult = c5;
                          throwTypeErrorResult = obj14;
                          throwTypeErrorResult = obj14.updatePendingDowngrade(callback, c6, c7, c5);
                        }
                        throwTypeErrorResult = c2;
                        throwTypeErrorResult = c3;
                        throwTypeErrorResult = lib;
                        const obj6 = { productId: null, premiumSubscription: null, offerId: null };
                        throwTypeErrorResult = callback;
                        obj6[0] = callback;
                        throwTypeErrorResult = callback;
                        obj6[1] = callback;
                        throwTypeErrorResult = closure_20;
                        obj6[2] = closure_20;
                        c6 = 6;
                        c7 = 1;
                        const obj7 = { value: null, done: false };
                        obj7[0] = lib(obj6);
                        return obj7;
                      }
                    }
                  }
                  throwTypeErrorResult = paymentGatewayPlanId;
                  if (paymentGatewayPlanId) {
                    throwTypeErrorResult = closure_2_10;
                    throwTypeErrorResult = null != closure_2_10;
                  }
                  if (throwTypeErrorResult) {
                    throwTypeErrorResult = c3;
                    throwTypeErrorResult = premiumTrialOffer;
                    throwTypeErrorResult = premiumDiscountOffer;
                    throwTypeErrorResult = null != premiumTrialOffer(premiumDiscountOffer[22]).giftInfoOptionsCache;
                    if (throwTypeErrorResult) {
                      throwTypeErrorResult = c2;
                      throwTypeErrorResult = c3;
                      throwTypeErrorResult = premiumTrialOffer;
                      throwTypeErrorResult = premiumDiscountOffer;
                      throwTypeErrorResult = callback;
                      throwTypeErrorResult = null != premiumTrialOffer(premiumDiscountOffer[22]).giftInfoOptionsCache[callback];
                    }
                    if (throwTypeErrorResult) {
                      throwTypeErrorResult = c2;
                      throwTypeErrorResult = c3;
                      throwTypeErrorResult = premiumTrialOffer;
                      throwTypeErrorResult = premiumDiscountOffer;
                      const giftInfoOptionsCache = premiumTrialOffer(premiumDiscountOffer[22]).giftInfoOptionsCache;
                      throwTypeErrorResult = callback;
                      delete tmp7[tmp6];
                    }
                    throwTypeErrorResult = c2;
                    throwTypeErrorResult = c3;
                    throwTypeErrorResult = premiumTrialOffer;
                    throwTypeErrorResult = premiumDiscountOffer;
                    throwTypeErrorResult = callback;
                    let obj8 = {};
                    throwTypeErrorResult = closure_2_10;
                    throwTypeErrorResult = obj8;
                    throwTypeErrorResult = Object.assign(closure_2_10);
                    premiumTrialOffer(premiumDiscountOffer[22]).giftInfoOptionsCache[callback] = obj8;
                  }
                  throwTypeErrorResult = c2;
                  closure_21 = null;
                  throwTypeErrorResult = lib;
                  if (null != lib) {
                    throwTypeErrorResult = c2;
                    throwTypeErrorResult = c3;
                    c5 = 2;
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = premiumDiscountOffer;
                    throwTypeErrorResult = lib;
                    throwTypeErrorResult = lib;
                    closure_21 = callback(premiumDiscountOffer[23]).convertToMinorCurrencyUnits(lib.price / 100, lib.currencyCode);
                    c5 = 1;
                    const obj20 = callback(premiumDiscountOffer[23]);
                  }
                  throwTypeErrorResult = c2;
                  throwTypeErrorResult = c3;
                  let obj9 = { productId: null, premiumSubscription: null, offerId: null, currency: null, price: null, isGift: null };
                  throwTypeErrorResult = callback;
                  obj9[0] = callback;
                  throwTypeErrorResult = callback;
                  obj9[1] = callback;
                  throwTypeErrorResult = undefined;
                  throwTypeErrorResult = lib;
                  if (lib != null) {
                    if (lib.currencyCode != null) {
                      throwTypeErrorResult = str2.toLowerCase();
                    }
                  }
                  throwTypeErrorResult = c2;
                  obj9[3] = throwTypeErrorResult;
                  throwTypeErrorResult = closure_21;
                  obj9[4] = closure_21;
                  throwTypeErrorResult = paymentGatewayPlanId;
                  obj9[5] = paymentGatewayPlanId;
                  c6 = 4;
                  c7 = 1;
                  const obj10 = { value: null, done: false };
                  obj10[0] = throwTypeErrorResult(obj9);
                  return obj10;
                }
              } else if (2 === tmp10) {
                c5 = 0;
                let message = c4;
                obj9 = premiumTrialOffer(premiumDiscountOffer[26]);
                let obj11 = {};
                const merged3 = Object.assign(c19);
                obj11.payment_gateway = constants.GOOGLE;
                obj11.error_message = message.message;
                obj9.track(closure_2_11.PAYMENT_FLOW_FAILED, obj11);
                if (callback3 != null) {
                  callback3();
                }
                obj11 = callback(premiumDiscountOffer[24]);
                let result = obj11.captureBillingException(closure_2_23);
                (function showPurchaseErrorModal(closure_2_23) {
                  let billingError = closure_2_23;
                  if (!(closure_2_23 instanceof _undefined(_undefined2[11]).BillingError)) {
                    billingError = new tmp(tmp2[11]).BillingError(closure_2_23);
                  }
                  let tmpResult = tmp(tmp2[12]);
                  if (tmpResult.isSpendingLimitError(billingError)) {
                    tmpResult = tmp(tmp2[12]);
                    const result = tmpResult.showSpendingLimitReachedAlert();
                  } else {
                    const intl = tmp(tmp2[13]).intl;
                    let tmp8 = billingError.code !== tmp(tmp2[14]).ErrorCodes.UNKNOWN;
                    if (tmp8) {
                      tmp8 = -1 !== billingError.code;
                    }
                    if (tmp8) {
                      tmp8 = null != billingError.message;
                    }
                    let message = intl.string(tmp(tmp2[13]).t.LFFx5G);
                    if (tmp8) {
                      message = billingError.message;
                    }
                    const stringResult = intl.string(tmp(tmp2[13]).t.LFFx5G);
                    const obj = { title: null, body: null, isDismissable: true };
                    const intl2 = tmp(tmp2[13]).intl;
                    obj[0] = intl2.string(tmp(tmp2[13]).t["U+H+kd"]);
                    obj[1] = message;
                    callback(tmp2[15]).show(obj);
                    const obj2 = callback(tmp2[15]);
                  }
                })(closure_2_23);
                if (closure_2_23 instanceof premiumTrialOffer(premiumDiscountOffer[10])) {
                  throw closure_2_23;
                }
              } else if (3 === tmp10) {
                c5 = 1;
                closure_22 = c4;
                obj8 = callback(premiumDiscountOffer[24]);
                const result1 = obj8.captureBillingException(closure_22);
              } else if (4 === tmp10) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c5 = 0;
                  c7 = 3;
                  const obj12 = { value: null, done: true };
                  obj12[0] = arg1;
                  return obj12;
                } else {
                  obj5 = callback(premiumDiscountOffer[25]);
                  c6 = 5;
                  c7 = 1;
                  const obj13 = { value: null, done: false };
                  obj13[0] = obj5.purchase(c0, c13);
                  return obj13;
                }
              } else if (5 === tmp10) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c5 = 0;
                  c7 = 3;
                  obj14 = { value: null, done: true };
                  obj14[0] = arg1;
                  return obj14;
                }
              } else if (6 === tmp10) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c5 = 0;
                  c7 = 3;
                  const obj15 = { value: null, done: true };
                  obj15[0] = arg1;
                  return obj15;
                } else {
                  obj1 = callback(premiumDiscountOffer[25]);
                  c6 = 7;
                  c7 = 1;
                  const obj16 = { value: null, done: false };
                  obj16[0] = obj1.subscribe(c0, c13, c6, c7, c20);
                  return obj16;
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              c7 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (throwTypeErrorResult) {
            c4 = throwTypeErrorResult;
            if (tmp5 === c5) {
              throwTypeErrorResult = tmp3;
              c7 = tmp3;
              throw throwTypeErrorResult;
            } else if (tmp2 === throwTypeErrorResult) {
              c6 = throwTypeErrorResult;
            } else {
              c6 = tmp3;
            }
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const items1 = [null != stateFromStores, paymentGatewayPlanId, prop, id, premiumTrialOffer, premiumDiscountOffer, stateFromStores, isEligibleForBogoOffer];
  return paymentGatewayPlanId.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
};