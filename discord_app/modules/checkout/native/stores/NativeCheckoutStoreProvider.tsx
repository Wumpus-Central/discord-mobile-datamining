// === Module 10551: NativeCheckoutStoreProvider ===

// Module 10551 (NativeCheckoutStoreProvider)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 1096 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import v12 from "v1" /* 1266 */;
import PaymentConstants from "PaymentConstants" /* 4875 */;
import PaymentFlowStartedTriggerPoint from "PaymentFlowStartedTriggerPoint" /* 10552 */;
import OrderUtils from "OrderUtils" /* 10554 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import NativeCheckoutStore from "NativeCheckoutStore" /* 6943 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c5, dispatchResult, loadId, obj1, redux, trackResult;

let c9;
let metroImportAll;
let metroImportDefault;
const View = react_native.View;
({ createNativeStore: metroImportDefault, NativeCheckoutStoreContext: metroImportAll, NativeCheckoutStoreContextOrNull: c9 } = NativeCheckoutStore);
const AnalyticEvents = Constants.AnalyticEvents;
let ItemPurchaseType = PaymentConstants.ItemPurchaseType;
const PaymentGateways = Constants2.PaymentGateways;
const jsx = Fragment.jsx;
let closure_14 = createStyles.createStyles({ loadingSpinnerContainer: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" } });
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((orderRequired) => {
  let analyticsInitialStep;
  let checkoutAnalyticsFields;
  let children;
  let closure_9;
  let defaultPlans;
  let headless;
  let isGift;
  let paymentGateway;
  let skuIds;
  let tmp12;
  const tmp = isGift;
  let obj = orderRequired(isGift[11]);
  const cResult = obj.c(38);
  orderRequired = orderRequired.orderRequired;
  ({ skuIds, paymentGateway } = orderRequired);
  isGift = orderRequired.isGift;
  const onOrderCreated = orderRequired.onOrderCreated;
  const activeSubscription = orderRequired.activeSubscription;
  ({ children, defaultPlans } = orderRequired);
  const onOrderRetryCancellation = orderRequired.onOrderRetryCancellation;
  const initialSubscriptionFacet = orderRequired.initialSubscriptionFacet;
  const initialExternalGatewayFacet = orderRequired.initialExternalGatewayFacet;
  ({ headless, checkoutAnalyticsFields, analyticsInitialStep } = orderRequired);
  closure_14();
  const tmp4 = activeSubscription(defaultPlans.useState(null), 2);
  [r10033, closure_9] = tmp4;
  let closure_10 = activeSubscription(defaultPlans.useState(orderRequired), 2)[1];
  const tmp5 = activeSubscription(defaultPlans.useState(orderRequired), 2);
  const ref = defaultPlans.useRef(false);
  let first = null;
  const tmp7 = paymentGateway(tmp[12]);
  if (skuIds.length > 0) {
    first = skuIds[0];
  }
  const tmp7Result = tmp7(first);
  const sku_id = tmp7Result;
  if (null == tmp7Result) {
    if (null == defaultPlans) {
      if (orderRequired) {
        let tmp14 = globalThis;
        const _Error = Error;
        throw Error("SkuIDs needs to a specified!");
      }
    }
  }
  const tmp6Result = paymentGateway(tmp[13]);
  const mobileStoreFront = tmp6Result.useMobileStoreFront();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    class W {
      constructor() {
        obj = paymentGateway(isGift[14]);
        dispatchResult = obj.dispatch({ type: "IAP_CHECKOUT_START" });
        return () => {
          const obj = paymentGateway(isGift[14]);
          obj.dispatch({ type: "IAP_CHECKOUT_END" });
        };
      }
    }
    let items = [];
    cResult[0] = W;
    cResult[1] = items;
    tmp12 = items;
  } else {
    class W {
      constructor() {
        obj = paymentGateway(isGift[14]);
        dispatchResult = obj.dispatch({ type: "IAP_CHECKOUT_START" });
        return () => {
          const obj = paymentGateway(isGift[14]);
          obj.dispatch({ type: "IAP_CHECKOUT_END" });
        };
      }
    }
    tmp12 = cResult[1];
  }
  const effect = defaultPlans.useEffect(W, tmp12);
  if (cResult[2] === initialExternalGatewayFacet) {
    class W {
      constructor() {
        obj = paymentGateway(isGift[14]);
        dispatchResult = obj.dispatch({ type: "IAP_CHECKOUT_START" });
        return () => {
          const obj = paymentGateway(isGift[14]);
          obj.dispatch({ type: "IAP_CHECKOUT_END" });
        };
      }
    }
  }
  let closure_0 = onOrderCreated(function*(arg0) {
    let orderLineItems;
    let subscriptionFacet;
    let v1;
    closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            isGift = tmp2;
            paymentGateway = tmp;
            let country;
            closure_0 = undefined;
            ({ orderLineItems, subscriptionFacet } = closure_0);
            const obj4 = { orderLineItems, paymentGateway, isGift, subscriptionFacet, externalGatewayFacet, countryCode: country };
            const createOrder = closure_0(isGift[15]).createOrder;
            const tmp29 = closure_0(isGift[15]);
            if (country != null) {
              country = country.country;
            }
            v1 = 1;
            c4 = 1;
            const obj5 = { value: createOrder(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_0 = value;
          closure_1_9(closure_0);
          if (null != v1) {
            v1(closure_0);
          }
          closure_1_10(false);
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp22) {
        c4 = 3;
        throw tmp22;
      }
    }
  });
  cResult[2] = initialExternalGatewayFacet;
  cResult[3] = isGift;
  cResult[4] = onOrderCreated;
  cResult[5] = paymentGateway;
  if (mobileStoreFront != null) {
    class W {
      constructor() {
        obj = paymentGateway(isGift[14]);
        dispatchResult = obj.dispatch({ type: "IAP_CHECKOUT_START" });
        return () => {
          const obj = paymentGateway(isGift[14]);
          obj.dispatch({ type: "IAP_CHECKOUT_END" });
        };
      }
    }
  }
  const fn = function() {
    return closure_0(...arguments);
  };
  cResult[6] = undefined;
  cResult[7] = fn;
}) : ((orderRequired) => {
  let analyticsInitialStep;
  let c9;
  let checkoutAnalyticsFields;
  let obj4;
  let paymentGateway;
  let skuIds;
  let tmp18;
  let tmp3;
  orderRequired = orderRequired.orderRequired;
  ({ skuIds, paymentGateway } = orderRequired);
  let isGift = orderRequired.isGift;
  const onOrderCreated = orderRequired.onOrderCreated;
  const activeSubscription = orderRequired.activeSubscription;
  const defaultPlans = orderRequired.defaultPlans;
  const onOrderRetryCancellation = orderRequired.onOrderRetryCancellation;
  const initialSubscriptionFacet = orderRequired.initialSubscriptionFacet;
  const initialExternalGatewayFacet = orderRequired.initialExternalGatewayFacet;
  let flag = orderRequired.headless;
  const children = orderRequired.children;
  if (flag === undefined) {
    flag = false;
  }
  c9 = undefined;
  let sku_id;
  let mobileStoreFront;
  let callback;
  let callback2;
  ({ checkoutAnalyticsFields, analyticsInitialStep } = orderRequired);
  let obj = defaultPlans;
  const tmp = callback();
  const tmp2 = activeSubscription(defaultPlans.useState(null), 2);
  [tmp3, c9] = tmp2;
  const tmp4 = activeSubscription(defaultPlans.useState(orderRequired), 2);
  let closure_10 = tmp4[1];
  const first = tmp4[0];
  const ref = defaultPlans.useRef(false);
  let first1 = null;
  const tmp6 = paymentGateway;
  const tmp8 = paymentGateway(isGift[12]);
  if (skuIds.length > 0) {
    first1 = skuIds[0];
  }
  const tmp8Result = tmp8(first1);
  sku_id = tmp8Result;
  if (null == tmp8Result) {
    if (null == defaultPlans) {
      if (orderRequired) {
        const _Error = Error;
        throw Error("SkuIDs needs to a specified!");
      }
    }
  }
  const tmp6Result = tmp6(isGift[13]);
  mobileStoreFront = tmp6Result.useMobileStoreFront();
  const effect = obj.useEffect(() => {
    let obj = paymentGateway(isGift[14]);
    obj.dispatch({ type: "IAP_CHECKOUT_START" });
    return () => {
      const obj = paymentGateway(isGift[14]);
      obj.dispatch({ type: "IAP_CHECKOUT_END" });
    };
  }, []);
  const useCallback = obj.useCallback;
  onOrderCreated(function*(orderLineItems) {
    let c0;
    let c1;
    let c4;
    let closure_1;
    let country;
    const obj5 = { orderLineItems, paymentGateway: tmp, isGift, subscriptionFacet: tmp, externalGatewayFacet, countryCode: country };
    const createOrder = orderLineItems(isGift[15]).createOrder;
    const tmp30 = orderLineItems(isGift[15]);
    if (country != null) {
      country = country.country;
    }
    yield createOrder(obj5);
    isGift = value;
    closure_1_9(isGift);
    if (null != v2) {
      v2(isGift);
    }
    closure_1_10(false);
    yield "IconComponent";
    isGift = tmp4;
    ({ orderLineItems: c0, subscriptionFacet: c1 } = orderLineItems);
    return "Reflect";
  });
  let items = [paymentGateway, onOrderCreated, isGift, mobileStoreFront, initialExternalGatewayFacet];
  callback = useCallback(function() {
    return closure_0(...arguments);
  }, items);
  const useCallback2 = obj.useCallback;
  let closure_0 = onOrderCreated(function*(arg0) {
    closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
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
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: callback(closure_0), done: false };
            return obj5;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            const obj2 = closure_0(isGift[16]);
            const result = obj2.showCheckoutOrderErrorModal(() => closure_2_14(closure_1_0), () => {
              closure_1_10(false);
              closure_1_6();
            });
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp12) {
        if (0 === c3) {
          c5 = 3;
          throw tmp12;
        } else {
          c4 = 1;
        }
      }
    }
  });
  let items1 = [callback, onOrderRetryCancellation];
  callback2 = useCallback2(function() {
    return closure_0(...arguments);
  }, items1);
  const items2 = [tmp8Result, orderRequired, callback2, defaultPlans, mobileStoreFront, paymentGateway, activeSubscription, initialSubscriptionFacet];
  const effect1 = obj.useEffect(() => {
    let obj3;
    if (!ref.current) {
      if (null != mobileStoreFront) {
        if (orderRequired) {
          if (null != sku_id) {
            let tmp10;
            const items = [];
            if (null != defaultPlans) {
              if (null != mobileStoreFront) {
                const push = items.push;
                const items1 = [];
                HermesBuiltin.arraySpread(items1, defaultPlans.map((skuId) => ({ sku_id: skuId.skuId, subscription_plan_id: skuId.subscriptionPlanId, quantity: skuId.quantity, purchase_type: constants.SUBSCRIPTION })), 0);
                HermesBuiltin.apply(push, items1, items);
                const obj2 = { subscription_preview: obj3 };
                obj3 = { currency: null, country_code: null };
                ({ currency: obj4.currency, country: obj4.country_code } = mobileStoreFront);
                if (null != activeSubscription) {
                  obj2.subscription_id = activeSubscription.id;
                }
                tmp10 = obj2;
                const tmp14 = null != initialSubscriptionFacet && null != initialSubscriptionFacet.subscription_preview.subscription_trial_id;
                if (tmp14) {
                  obj2.subscription_preview.subscription_trial_id = initialSubscriptionFacet.subscription_preview.subscription_trial_id;
                  tmp10 = obj2;
                }
              }
            } else if (null != sku_id) {
              const obj = { sku_id, quantity: 1, purchase_type: ItemPurchaseType.ONE_TIME };
              items.push(obj);
            }
            tmp2.current = true;
            const obj7 = { orderLineItems: items, subscriptionFacet: tmp10 };
            callback2(obj7);
          }
        }
      }
    }
  }, items2);
  if (first) {
    let tmp19 = null;
    if (!flag) {
      let obj2 = { style: tmp.loadingSpinnerContainer, children: mobileStoreFront(orderRequired(isGift[17]).ActivityIndicator, { animating: true, size: "large" }) };
      tmp19 = mobileStoreFront(onOrderRetryCancellation, obj2);
    }
    tmp18 = tmp19;
  } else {
    let obj3 = { checkoutInitParameters: obj4, order: tmp3, paymentGateway, onOrderRetryCancellation, orderRequired, initialSubscriptionFacet, checkoutAnalyticsFields, analyticsInitialStep, children };
    obj4 = { skuIds, isGift, activeSubscription, referralTrialOfferId: null };
    tmp18 = mobileStoreFront(callback2, obj3);
  }
  return tmp18;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((checkoutInitParameters) => {
  let analyticsFields;
  let contextMetadata;
  let paymentGateway;
  let ref;
  let tmp5;
  let obj = checkoutInitParameters(paymentGateway[11]);
  const cResult = obj.c(33);
  checkoutInitParameters = checkoutInitParameters.checkoutInitParameters;
  const order = checkoutInitParameters.order;
  paymentGateway = checkoutInitParameters.paymentGateway;
  const orderRequired = checkoutInitParameters.orderRequired;
  const onOrderRetryCancellation = checkoutInitParameters.onOrderRetryCancellation;
  const initialSubscriptionFacet = checkoutInitParameters.initialSubscriptionFacet;
  const checkoutAnalyticsFields = checkoutInitParameters.checkoutAnalyticsFields;
  const analyticsInitialStep = checkoutInitParameters.analyticsInitialStep;
  const children = checkoutInitParameters.children;
  let id;
  const first = cResult[0];
  if (order != null) {
    id = order.id;
  }
  if (first !== id) {
    let id1;
    if (order != null) {
      id1 = order.id;
    }
    const fn = function u() {
      let id;
      if (order != null) {
        id = order.id;
      }
      if (id == null) {
        const obj = v12;
        id = obj.v4();
      }
      const obj2 = SentryUtilsDefault;
      const obj3 = { message: "Checkout session ID: " + id };
      obj2.addBreadcrumb(obj3);
      const obj4 = { loadId: id, startTime: Date.now() };
      return obj4;
    };
    cResult[0] = id1;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const tmp8 = order(tmp[12])(tmp5);
  loadId = tmp8;
  if (cResult[2] === checkoutAnalyticsFields) {
    if (cResult[3] === tmp8.loadId) {
      let tmp9;
      if (cResult[4] === paymentGateway) {
        tmp9 = cResult[5];
      }
      const tmp10 = order(paymentGateway[12])(tmp9);
      redux = tmp10;
      if (cResult[6] === tmp10) {
        if (cResult[7] === checkoutInitParameters) {
          if (cResult[8] === tmp8) {
            if (cResult[9] === initialSubscriptionFacet) {
              if (cResult[10] === onOrderRetryCancellation) {
                if (cResult[11] === order) {
                  if (cResult[12] === orderRequired) {
                    let tmp11;
                    if (cResult[13] === paymentGateway) {
                      tmp11 = cResult[14];
                    }
                    let obj2 = initialSubscriptionFacet;
                    const first1 = onOrderRetryCancellation(initialSubscriptionFacet.useState(tmp11), 1)[0];
                    if (cResult[15] === tmp10) {
                      if (cResult[16] === analyticsInitialStep) {
                        if (cResult[17] === checkoutAnalyticsFields) {
                          let tmp15;
                          if (cResult[18] === first1) {
                            tmp15 = cResult[19];
                          }
                          order(paymentGateway[22])(tmp15);
                          ItemPurchaseType = obj2.useRef(null != order);
                          if (cResult[20] === order) {
                            let tmp17;
                            let tmp18;
                            let tmp21;
                            if (cResult[21] === first1) {
                              tmp17 = cResult[22];
                              tmp18 = cResult[23];
                            }
                            const effect = obj2.useEffect(tmp17, tmp18);
                            if (cResult[24] !== first1) {
                              class D {
                                constructor() {
                                  return () => {
                                    let obj5;
                                    state = state.getState();
                                    const orderRecord = state.orderRecord;
                                    if (null != orderRecord) {
                                      const obj2 = { checkoutSucceeded: tmp2, order: obj5 };
                                      obj5 = { id: null, status: null };
                                      ({ id: obj3.id, status: obj3.status } = orderRecord);
                                      const obj = checkoutInitParameters(paymentGateway[23]);
                                      obj.discardDraftOrder(obj2);
                                    }
                                  };
                                }
                              }
                              const items = [first1];
                              class T {
                                constructor() {
                                  const current = ref.current || null == order;
                                  if (!current) {
                                    const state = first1.getState();
                                    state.setOrder(order);
                                    ref.current = true;
                                  }
                                }
                              }
                              cResult[25] = D;
                              class R {
                                constructor() {
                                  if (null != checkoutAnalyticsFields) {
                                    tmp = closure_0;
                                    tmp2 = closure_2;
                                    obj = closure_0(closure_2[20]);
                                    tmp3 = closure_9;
                                    result = obj.trackPaymentFlowStartedAnalyticsAndCTP(closure_9);
                                    tmp5 = closure_1;
                                    tmp6 = closure_1(closure_2[21]);
                                    tmp7 = AnalyticEvents;
                                    obj1 = {};
                                    tmp8 = obj1;
                                    tmp9 = closure_9;
                                    track = tmp6.track;
                                    PAYMENT_FLOW_LOADED = AnalyticEvents.PAYMENT_FLOW_LOADED;
                                    merged = Object.assign(closure_9);
                                    tmp11 = analyticsInitialStep;
                                    obj1.initial_step = analyticsInitialStep;
                                    trackResult = track(PAYMENT_FLOW_LOADED, obj1);
                                    return () => {
                                      let checkoutSucceeded;
                                      let purchaseInFlight;
                                      state = state.getState();
                                      ({ checkoutSucceeded, purchaseInFlight } = state);
                                      if (!checkoutSucceeded) {
                                        checkoutSucceeded = state.checkoutFailed;
                                      }
                                      if (!checkoutSucceeded) {
                                        checkoutSucceeded = purchaseInFlight;
                                      }
                                      if (!checkoutSucceeded) {
                                        const obj = order(paymentGateway[21]);
                                        obj.track(first1.PAYMENT_FLOW_CANCELED, analyticsFields);
                                      }
                                    };
                                  } else {
                                    return;
                                  }
                                }
                              }
                              cResult[26] = items;
                              tmp21 = items;
                            } else {
                              class D {
                                constructor() {
                                  return () => {
                                    let obj5;
                                    state = state.getState();
                                    const orderRecord = state.orderRecord;
                                    if (null != orderRecord) {
                                      const obj2 = { checkoutSucceeded: tmp2, order: obj5 };
                                      obj5 = { id: null, status: null };
                                      ({ id: obj3.id, status: obj3.status } = orderRecord);
                                      const obj = checkoutInitParameters(paymentGateway[23]);
                                      obj.discardDraftOrder(obj2);
                                    }
                                  };
                                }
                              }
                              tmp21 = cResult[26];
                            }
                            const effect1 = obj2.useEffect(D, tmp21);
                            class T {
                              constructor() {
                                const current = ref.current || null == order;
                                if (!current) {
                                  const state = first1.getState();
                                  state.setOrder(order);
                                  ref.current = true;
                                }
                              }
                            }
                            class R {
                              constructor() {
                                if (null != checkoutAnalyticsFields) {
                                  tmp = closure_0;
                                  tmp2 = closure_2;
                                  obj = closure_0(closure_2[20]);
                                  tmp3 = closure_9;
                                  result = obj.trackPaymentFlowStartedAnalyticsAndCTP(closure_9);
                                  tmp5 = closure_1;
                                  tmp6 = closure_1(closure_2[21]);
                                  tmp7 = AnalyticEvents;
                                  obj1 = {};
                                  tmp8 = obj1;
                                  tmp9 = closure_9;
                                  track = tmp6.track;
                                  PAYMENT_FLOW_LOADED = AnalyticEvents.PAYMENT_FLOW_LOADED;
                                  merged = Object.assign(closure_9);
                                  tmp11 = analyticsInitialStep;
                                  obj1.initial_step = analyticsInitialStep;
                                  trackResult = track(PAYMENT_FLOW_LOADED, obj1);
                                  return () => {
                                    let checkoutSucceeded;
                                    let purchaseInFlight;
                                    state = state.getState();
                                    ({ checkoutSucceeded, purchaseInFlight } = state);
                                    if (!checkoutSucceeded) {
                                      checkoutSucceeded = state.checkoutFailed;
                                    }
                                    if (!checkoutSucceeded) {
                                      checkoutSucceeded = purchaseInFlight;
                                    }
                                    if (!checkoutSucceeded) {
                                      const obj = order(paymentGateway[21]);
                                      obj.track(first1.PAYMENT_FLOW_CANCELED, analyticsFields);
                                    }
                                  };
                                } else {
                                  return;
                                }
                              }
                            }
                            tmp26[0] = first1;
                            tmp26[1] = children;
                            const tmp27 = <redux.Provider {...tmp26} />;
                            cResult[27] = children;
                            cResult[28] = first1;
                            cResult[29] = tmp27;
                          }
                          class T {
                            constructor() {
                              const current = ref.current || null == order;
                              if (!current) {
                                const state = first1.getState();
                                state.setOrder(order);
                                ref.current = true;
                              }
                            }
                          }
                          const items1 = [order, ];
                          class R {
                            constructor() {
                              if (null != checkoutAnalyticsFields) {
                                tmp = closure_0;
                                tmp2 = closure_2;
                                obj = closure_0(closure_2[20]);
                                tmp3 = closure_9;
                                result = obj.trackPaymentFlowStartedAnalyticsAndCTP(closure_9);
                                tmp5 = closure_1;
                                tmp6 = closure_1(closure_2[21]);
                                tmp7 = AnalyticEvents;
                                obj1 = {};
                                tmp8 = obj1;
                                tmp9 = closure_9;
                                track = tmp6.track;
                                PAYMENT_FLOW_LOADED = AnalyticEvents.PAYMENT_FLOW_LOADED;
                                merged = Object.assign(closure_9);
                                tmp11 = analyticsInitialStep;
                                obj1.initial_step = analyticsInitialStep;
                                trackResult = track(PAYMENT_FLOW_LOADED, obj1);
                                return () => {
                                  let checkoutSucceeded;
                                  let purchaseInFlight;
                                  state = state.getState();
                                  ({ checkoutSucceeded, purchaseInFlight } = state);
                                  if (!checkoutSucceeded) {
                                    checkoutSucceeded = state.checkoutFailed;
                                  }
                                  if (!checkoutSucceeded) {
                                    checkoutSucceeded = purchaseInFlight;
                                  }
                                  if (!checkoutSucceeded) {
                                    const obj = order(paymentGateway[21]);
                                    obj.track(first1.PAYMENT_FLOW_CANCELED, analyticsFields);
                                  }
                                };
                              } else {
                                return;
                              }
                            }
                          }
                          cResult[20] = order;
                          cResult[21] = first1;
                          cResult[22] = T;
                          cResult[23] = items1;
                          tmp18 = items1;
                          tmp17 = T;
                        }
                      }
                    }
                    class R {
                      constructor() {
                        if (null != checkoutAnalyticsFields) {
                          tmp = closure_0;
                          tmp2 = closure_2;
                          obj = closure_0(closure_2[20]);
                          tmp3 = closure_9;
                          result = obj.trackPaymentFlowStartedAnalyticsAndCTP(closure_9);
                          tmp5 = closure_1;
                          tmp6 = closure_1(closure_2[21]);
                          tmp7 = AnalyticEvents;
                          obj1 = {};
                          tmp8 = obj1;
                          tmp9 = closure_9;
                          track = tmp6.track;
                          PAYMENT_FLOW_LOADED = AnalyticEvents.PAYMENT_FLOW_LOADED;
                          merged = Object.assign(closure_9);
                          tmp11 = analyticsInitialStep;
                          obj1.initial_step = analyticsInitialStep;
                          trackResult = track(PAYMENT_FLOW_LOADED, obj1);
                          return () => {
                            let checkoutSucceeded;
                            let purchaseInFlight;
                            state = state.getState();
                            ({ checkoutSucceeded, purchaseInFlight } = state);
                            if (!checkoutSucceeded) {
                              checkoutSucceeded = state.checkoutFailed;
                            }
                            if (!checkoutSucceeded) {
                              checkoutSucceeded = purchaseInFlight;
                            }
                            if (!checkoutSucceeded) {
                              const obj = order(paymentGateway[21]);
                              obj.track(first1.PAYMENT_FLOW_CANCELED, analyticsFields);
                            }
                          };
                        } else {
                          return;
                        }
                      }
                    }
                    cResult[15] = tmp10;
                    cResult[16] = analyticsInitialStep;
                    cResult[17] = checkoutAnalyticsFields;
                    cResult[18] = first1;
                    cResult[19] = R;
                    tmp15 = R;
                  }
                }
              }
            }
          }
        }
      }
      cResult[6] = tmp10;
      cResult[7] = checkoutInitParameters;
      cResult[8] = tmp8;
      cResult[9] = initialSubscriptionFacet;
      cResult[10] = onOrderRetryCancellation;
      cResult[11] = order;
      cResult[12] = orderRequired;
      cResult[13] = paymentGateway;
      cResult[14] = tmp12;
      tmp11 = tmp12;
    }
  }
  class E {
    constructor() {
      const obj = { load_id: contextMetadata.loadId, payment_gateway: paymentGateway };
      const merged = Object.assign(checkoutAnalyticsFields);
      return obj;
    }
  }
  cResult[2] = checkoutAnalyticsFields;
  cResult[3] = tmp8.loadId;
  cResult[4] = paymentGateway;
  cResult[5] = E;
  tmp9 = E;
}) : ((children) => {
  let analyticsFields;
  let checkoutInitParameters;
  let closure_7;
  let initialSubscriptionFacet;
  let initial_step;
  let onOrderRetryCancellation;
  let order;
  let orderRequired;
  let require;
  ({ checkoutInitParameters: require, order } = children);
  ({ paymentGateway: dependencyMap, orderRequired: _asyncToGenerator, onOrderRetryCancellation: _slicedToArray, initialSubscriptionFacet: react, checkoutAnalyticsFields: View, analyticsInitialStep: closure_7 } = children);
  children = children.children;
  const contextMetadata = order(5991)(() => {
    let id;
    if (order != null) {
      id = order.id;
    }
    if (id == null) {
      const obj = v12;
      id = obj.v4();
    }
    const obj2 = SentryUtilsDefault;
    const obj3 = { message: "Checkout session ID: " + id };
    obj2.addBreadcrumb(obj3);
    const obj4 = { loadId: id, startTime: Date.now() };
    return obj4;
  });
  redux = order(5991)(() => {
    const obj = { load_id: contextMetadata.loadId, payment_gateway };
    const merged = Object.assign(View);
    return obj;
  });
  const value = _slicedToArray(react.useState(() => {
    const obj = { order, checkoutInitParameters: require, contextMetadata, analyticsFields, paymentGateway, orderRequired: _asyncToGenerator, onOrderRetryCancellation: _slicedToArray, initialSubscriptionFacet: react };
    return metroImportDefault(obj);
  }), 1)[0];
  const tmp2 = order(5597)(() => {
    if (null != View) {
      let obj = PaymentFlowStartedTriggerPoint;
      const result = obj.trackPaymentFlowStartedAnalyticsAndCTP(analyticsFields);
      const obj2 = { initial_step };
      const track = AnalyticsUtilsDefault.track;
      const PAYMENT_FLOW_LOADED = AnalyticEvents.PAYMENT_FLOW_LOADED;
      AnalyticsUtilsDefault;
      const merged = Object.assign(analyticsFields);
      track(PAYMENT_FLOW_LOADED, obj2);
      return () => {
        let checkoutSucceeded;
        let purchaseInFlight;
        state = state.getState();
        ({ checkoutSucceeded, purchaseInFlight } = state);
        if (!checkoutSucceeded) {
          checkoutSucceeded = state.checkoutFailed;
        }
        if (!checkoutSucceeded) {
          checkoutSucceeded = purchaseInFlight;
        }
        if (!checkoutSucceeded) {
          const obj = order(dependencyMap[21]);
          obj.track(first.PAYMENT_FLOW_CANCELED, analyticsFields);
        }
      };
    }
  });
  const ref = react.useRef(null != order);
  const items = [order, value];
  const effect = react.useEffect(() => {
    const current = ref.current || null == order;
    if (!current) {
      const state = first.getState();
      state.setOrder(order);
      ref.current = true;
    }
  }, items);
  const items1 = [value];
  const effect1 = react.useEffect(() => () => {
    let obj5;
    state = state.getState();
    const orderRecord = state.orderRecord;
    if (null != orderRecord) {
      const obj2 = { checkoutSucceeded: tmp2, order: obj5 };
      obj5 = { id: null, status: null };
      ({ id: obj3.id, status: obj3.status } = orderRecord);
      const obj = OrderUtils;
      obj.discardDraftOrder(obj2);
    }
  }, items1);
  return <contextMetadata value={value}><redux.Provider value={value}>{children}</redux.Provider></contextMetadata>;
});
let result = size.fileFinishedImporting("modules/checkout/native/stores/NativeCheckoutStoreProvider.tsx");

export default tmp3;