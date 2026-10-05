// discord_app/modules/checkout/native/stores/NativeCheckoutStoreProvider.tsx
import SentryUtilsDefault from "../../../../utils/SentryUtils.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import v12 from "../../../../../_runtime/01266_v1.js";
import PaymentFlowStartedTriggerPoint from "../../../experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const NativeCheckoutStore = fn(6930);
({
  createNativeStore: closure_7,
  NativeCheckoutStoreContext: closure_8,
  NativeCheckoutStoreContextOrNull: closure_9,
} = NativeCheckoutStore);
const AnalyticEvents = fn(1085).AnalyticEvents;
let ItemPurchaseType = fn(4869).ItemPurchaseType;
const PaymentGateways = fn(1096).PaymentGateways;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_14 = createStyles.createStyles({
  loadingSpinnerContainer: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" },
});
fn(558);
const ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (checkoutInitParameters) => {
      const cResult = checkoutInitParameters(paymentGateway[11]).c(33);
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
      if (order != null) {
        id = order.id;
      }
      if (cResult[0] !== id) {
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
            id = v12.v4();
          }
          const obj2 = SentryUtilsDefault;
          obj2.addBreadcrumb({ message: "Checkout session ID: " + id });
          const obj3 = { message: "Checkout session ID: " + id };
          return { loadId: id, startTime: Date.now() };
        };
        cResult[0] = id1;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      const tmp7 = order(paymentGateway[12])(tmp4);
      loadId = tmp7;
      if (cResult[2] === checkoutAnalyticsFields) {
        if (cResult[3] === tmp7.loadId) {
          if (cResult[4] === paymentGateway) {
            let tmp8 = cResult[5];
          }
          const tmp9 = tmp6(tmp[12])(tmp8);
          redux = tmp9;
          if (cResult[6] === tmp9) {
            if (cResult[7] === checkoutInitParameters) {
              if (cResult[8] === tmp7) {
                if (cResult[9] === initialSubscriptionFacet) {
                  if (cResult[10] === onOrderRetryCancellation) {
                    if (cResult[11] === order) {
                      if (cResult[12] === orderRequired) {
                        if (cResult[13] === paymentGateway) {
                          let tmp10 = cResult[14];
                        }
                        const first = onOrderRetryCancellation(initialSubscriptionFacet.useState(tmp10), 1)[0];
                        if (cResult[15] === tmp9) {
                          if (cResult[16] === analyticsInitialStep) {
                            if (cResult[17] === checkoutAnalyticsFields) {
                              if (cResult[18] === first) {
                                let tmp14 = cResult[19];
                              }
                              tmp6(tmp[22])(tmp14);
                              ItemPurchaseType = obj2.useRef(null != order);
                              if (cResult[20] === order) {
                                if (cResult[21] === first) {
                                  let tmp16 = cResult[22];
                                  let tmp17 = cResult[23];
                                }
                                const effect = obj2.useEffect(tmp16, tmp17);
                                if (cResult[24] !== first) {
                                  class D {
                                    constructor() {
                                      return () => {
                                        state = state.getState();
                                        const orderRecord = state.orderRecord;
                                        if (null != orderRecord) {
                                          const obj2 = { checkoutSucceeded: tmp2, order: null };
                                          ({ id: obj3.id, status: obj3.status } = orderRecord);
                                          obj2.order = { id: null, status: null };
                                          checkoutInitParameters(paymentGateway[23]).discardDraftOrder(obj2);
                                          const obj = checkoutInitParameters(paymentGateway[23]);
                                          const obj5 = { id: null, status: null };
                                        }
                                      };
                                    }
                                  }
                                  const items = [first];
                                  class T {
                                    constructor() {
                                      current = closure_11.current;
                                      tmp = closure_11;
                                      if (!current) {
                                        tmp2 = order;
                                        tmp3 = null;
                                        current = null == order;
                                      }
                                      if (!current) {
                                        tmp4 = closure_10;
                                        state = closure_10.getState();
                                        tmp5 = order;
                                        setOrderResult = state.setOrder(order);
                                        flag = true;
                                        tmp.current = true;
                                      }
                                      return;
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
                                        obj2 = closure_1(closure_2[21]);
                                        tmp6 = AnalyticEvents;
                                        obj1 = {};
                                        tmp7 = obj1;
                                        tmp8 = closure_9;
                                        merged = Object.assign(closure_9);
                                        tmp10 = analyticsInitialStep;
                                        obj1.initial_step = analyticsInitialStep;
                                        trackResult = obj2.track(AnalyticEvents.PAYMENT_FLOW_LOADED, obj1);
                                        return () => {
                                          state = state.getState();
                                          ({ checkoutSucceeded, purchaseInFlight } = state);
                                          if (!checkoutSucceeded) {
                                            checkoutSucceeded = state.checkoutFailed;
                                          }
                                          if (!checkoutSucceeded) {
                                            checkoutSucceeded = purchaseInFlight;
                                          }
                                          if (!checkoutSucceeded) {
                                            order(paymentGateway[21]).track(
                                              first.PAYMENT_FLOW_CANCELED,
                                              analyticsFields,
                                            );
                                            const obj = order(paymentGateway[21]);
                                          }
                                        };
                                      } else {
                                        return;
                                      }
                                    }
                                  }
                                  cResult[26] = items;
                                  let tmp20 = items;
                                } else {
                                  class D {
                                    constructor() {
                                      return () => {
                                        state = state.getState();
                                        const orderRecord = state.orderRecord;
                                        if (null != orderRecord) {
                                          const obj2 = { checkoutSucceeded: tmp2, order: null };
                                          ({ id: obj3.id, status: obj3.status } = orderRecord);
                                          obj2.order = { id: null, status: null };
                                          checkoutInitParameters(paymentGateway[23]).discardDraftOrder(obj2);
                                          const obj = checkoutInitParameters(paymentGateway[23]);
                                          const obj5 = { id: null, status: null };
                                        }
                                      };
                                    }
                                  }
                                  tmp20 = cResult[26];
                                }
                                const effect1 = obj2.useEffect(D, tmp20);
                                class T {
                                  constructor() {
                                    current = closure_11.current;
                                    tmp = closure_11;
                                    if (!current) {
                                      tmp2 = order;
                                      tmp3 = null;
                                      current = null == order;
                                    }
                                    if (!current) {
                                      tmp4 = closure_10;
                                      state = closure_10.getState();
                                      tmp5 = order;
                                      setOrderResult = state.setOrder(order);
                                      flag = true;
                                      tmp.current = true;
                                    }
                                    return;
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
                                      obj2 = closure_1(closure_2[21]);
                                      tmp6 = AnalyticEvents;
                                      obj1 = {};
                                      tmp7 = obj1;
                                      tmp8 = closure_9;
                                      merged = Object.assign(closure_9);
                                      tmp10 = analyticsInitialStep;
                                      obj1.initial_step = analyticsInitialStep;
                                      trackResult = obj2.track(AnalyticEvents.PAYMENT_FLOW_LOADED, obj1);
                                      return () => {
                                        state = state.getState();
                                        ({ checkoutSucceeded, purchaseInFlight } = state);
                                        if (!checkoutSucceeded) {
                                          checkoutSucceeded = state.checkoutFailed;
                                        }
                                        if (!checkoutSucceeded) {
                                          checkoutSucceeded = purchaseInFlight;
                                        }
                                        if (!checkoutSucceeded) {
                                          order(paymentGateway[21]).track(first.PAYMENT_FLOW_CANCELED, analyticsFields);
                                          const obj = order(paymentGateway[21]);
                                        }
                                      };
                                    } else {
                                      return;
                                    }
                                  }
                                }
                                tmp25[0] = first;
                                tmp25[1] = children;
                                const tmp26 = <redux.Provider {...tmp25} />;
                                cResult[27] = children;
                                cResult[28] = first;
                                cResult[29] = tmp26;
                              }
                              class T {
                                constructor() {
                                  current = closure_11.current;
                                  tmp = closure_11;
                                  if (!current) {
                                    tmp2 = order;
                                    tmp3 = null;
                                    current = null == order;
                                  }
                                  if (!current) {
                                    tmp4 = closure_10;
                                    state = closure_10.getState();
                                    tmp5 = order;
                                    setOrderResult = state.setOrder(order);
                                    flag = true;
                                    tmp.current = true;
                                  }
                                  return;
                                }
                              }
                              const items1 = [order];
                              class R {
                                constructor() {
                                  if (null != checkoutAnalyticsFields) {
                                    tmp = closure_0;
                                    tmp2 = closure_2;
                                    obj = closure_0(closure_2[20]);
                                    tmp3 = closure_9;
                                    result = obj.trackPaymentFlowStartedAnalyticsAndCTP(closure_9);
                                    tmp5 = closure_1;
                                    obj2 = closure_1(closure_2[21]);
                                    tmp6 = AnalyticEvents;
                                    obj1 = {};
                                    tmp7 = obj1;
                                    tmp8 = closure_9;
                                    merged = Object.assign(closure_9);
                                    tmp10 = analyticsInitialStep;
                                    obj1.initial_step = analyticsInitialStep;
                                    trackResult = obj2.track(AnalyticEvents.PAYMENT_FLOW_LOADED, obj1);
                                    return () => {
                                      state = state.getState();
                                      ({ checkoutSucceeded, purchaseInFlight } = state);
                                      if (!checkoutSucceeded) {
                                        checkoutSucceeded = state.checkoutFailed;
                                      }
                                      if (!checkoutSucceeded) {
                                        checkoutSucceeded = purchaseInFlight;
                                      }
                                      if (!checkoutSucceeded) {
                                        order(paymentGateway[21]).track(first.PAYMENT_FLOW_CANCELED, analyticsFields);
                                        const obj = order(paymentGateway[21]);
                                      }
                                    };
                                  } else {
                                    return;
                                  }
                                }
                              }
                              cResult[20] = order;
                              cResult[21] = first;
                              cResult[22] = T;
                              cResult[23] = items1;
                              tmp17 = items1;
                              tmp16 = T;
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
                              obj2 = closure_1(closure_2[21]);
                              tmp6 = AnalyticEvents;
                              obj1 = {};
                              tmp7 = obj1;
                              tmp8 = closure_9;
                              merged = Object.assign(closure_9);
                              tmp10 = analyticsInitialStep;
                              obj1.initial_step = analyticsInitialStep;
                              trackResult = obj2.track(AnalyticEvents.PAYMENT_FLOW_LOADED, obj1);
                              return () => {
                                state = state.getState();
                                ({ checkoutSucceeded, purchaseInFlight } = state);
                                if (!checkoutSucceeded) {
                                  checkoutSucceeded = state.checkoutFailed;
                                }
                                if (!checkoutSucceeded) {
                                  checkoutSucceeded = purchaseInFlight;
                                }
                                if (!checkoutSucceeded) {
                                  order(paymentGateway[21]).track(first.PAYMENT_FLOW_CANCELED, analyticsFields);
                                  const obj = order(paymentGateway[21]);
                                }
                              };
                            } else {
                              return;
                            }
                          }
                        }
                        cResult[15] = tmp9;
                        cResult[16] = analyticsInitialStep;
                        cResult[17] = checkoutAnalyticsFields;
                        cResult[18] = first;
                        cResult[19] = R;
                        tmp14 = R;
                      }
                    }
                  }
                }
              }
            }
          }
          cResult[6] = tmp9;
          cResult[7] = checkoutInitParameters;
          cResult[8] = tmp7;
          cResult[9] = initialSubscriptionFacet;
          cResult[10] = onOrderRetryCancellation;
          cResult[11] = order;
          cResult[12] = orderRequired;
          cResult[13] = paymentGateway;
          cResult[14] = tmp11;
          tmp10 = tmp11;
        }
      }
      class E {
        constructor() {
          obj = {};
          merged = Object.assign(checkoutAnalyticsFields);
          obj.load_id = closure_8.loadId;
          obj.payment_gateway = paymentGateway;
          return obj;
        }
      }
      cResult[2] = checkoutAnalyticsFields;
      cResult[3] = tmp7.loadId;
      cResult[4] = paymentGateway;
      cResult[5] = E;
      tmp8 = E;
      let obj = checkoutInitParameters(paymentGateway[11]);
    }
  : (children) => {
      ({ checkoutInitParameters: require, order } = children);
      ({
        paymentGateway: dependencyMap,
        orderRequired: asyncGeneratorStep,
        onOrderRetryCancellation: _slicedToArray,
        initialSubscriptionFacet: noop,
        checkoutAnalyticsFields: View,
        analyticsInitialStep: closure_7,
      } = children);
      const contextMetadata = order(5984)(() => {
        let id;
        if (order != null) {
          id = order.id;
        }
        if (id == null) {
          id = v12.v4();
        }
        const obj2 = SentryUtilsDefault;
        obj2.addBreadcrumb({ message: "Checkout session ID: " + id });
        const obj3 = { message: "Checkout session ID: " + id };
        return { loadId: id, startTime: Date.now() };
      });
      redux = order(5984)(() => {
        const obj = {};
        const merged = Object.assign(View);
        obj.load_id = contextMetadata.loadId;
        obj.payment_gateway = dependencyMap;
        return obj;
      });
      value = _slicedToArray(
        noop.useState(() =>
          React5({
            order,
            checkoutInitParameters,
            contextMetadata,
            analyticsFields,
            paymentGateway: dependencyMap,
            orderRequired,
            onOrderRetryCancellation,
            initialSubscriptionFacet,
          }),
        ),
        1,
      )[0];
      order(5590)(() => {
        if (null != View) {
          const result = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP(closure_9);
          const obj3 = {};
          const merged = Object.assign(closure_9);
          obj3.initial_step = initial_step;
          AnalyticsUtilsDefault.track(AnalyticEvents.PAYMENT_FLOW_LOADED, obj3);
          return () => {
            state = state.getState();
            ({ checkoutSucceeded, purchaseInFlight } = state);
            if (!checkoutSucceeded) {
              checkoutSucceeded = state.checkoutFailed;
            }
            if (!checkoutSucceeded) {
              checkoutSucceeded = purchaseInFlight;
            }
            if (!checkoutSucceeded) {
              order(1252).track(first.PAYMENT_FLOW_CANCELED, analyticsFields);
              const obj = order(1252);
            }
          };
        }
      });
      noop.useRef(null != order);
      const items = [order, value];
      const effect = noop.useEffect(() => {
        let current = ref.current;
        if (!current) {
          current = null == order;
        }
        if (!current) {
          state = first.getState();
          state.setOrder(order);
          ref.current = true;
        }
      }, items);
      const items1 = [value];
      const effect1 = noop.useEffect(
        () => () => {
          state = state.getState();
          const orderRecord = state.orderRecord;
          if (null != orderRecord) {
            const obj2 = { checkoutSucceeded: tmp2, order: null };
            ({ id: obj3.id, status: obj3.status } = orderRecord);
            obj2.order = { id: null, status: null };
            checkoutInitParameters(10541).discardDraftOrder(obj2);
            const obj = checkoutInitParameters(10541);
            const obj5 = { id: null, status: null };
          }
        },
        items1,
      );
      return (
        <contextMetadata value={value}>
          <redux.Provider value={value}>{children.children}</redux.Provider>
        </contextMetadata>
      );
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkout/native/stores/NativeCheckoutStoreProvider.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (orderRequired) => {
      const cResult = require("c").c(38);
      orderRequired = orderRequired.orderRequired;
      _require = orderRequired;
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
      let obj = require("c");
      [r10033, closure_9] = activeSubscription(defaultPlans.useState(null), 2);
      const tmp4 = activeSubscription(defaultPlans.useState(null), 2);
      closure_10 = activeSubscription(defaultPlans.useState(orderRequired), 2)[1];
      defaultPlans.useRef(false);
      let first = null;
      const tmp5 = activeSubscription(defaultPlans.useState(orderRequired), 2);
      if (skuIds.length > 0) {
        first = skuIds[0];
      }
      const tmp7Result = paymentGateway(isGift[12])(first);
      const sku_id = tmp7Result;
      if (null == tmp7Result) {
        if (null == defaultPlans) {
          if (orderRequired) {
            const _Error = Error;
            throw Error("SkuIDs needs to a specified!");
          }
        }
      }
      const tmp7 = paymentGateway(isGift[12]);
      const mobileStoreFront = paymentGateway(isGift[13]).useMobileStoreFront();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        class W {
          constructor() {
            obj = paymentGateway(isGift[14]);
            dispatchResult = obj.dispatch({ type: "IAP_CHECKOUT_START" });
            return () => {
              paymentGateway(isGift[14]).dispatch({ type: "IAP_CHECKOUT_END" });
            };
          }
        }
        let items = [];
        cResult[0] = W;
        cResult[1] = items;
        let tmp12 = items;
      } else {
        class W {
          constructor() {
            obj = paymentGateway(isGift[14]);
            dispatchResult = obj.dispatch({ type: "IAP_CHECKOUT_START" });
            return () => {
              paymentGateway(isGift[14]).dispatch({ type: "IAP_CHECKOUT_END" });
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
              paymentGateway(isGift[14]).dispatch({ type: "IAP_CHECKOUT_END" });
            };
          }
        }
      }
      _require = onOrderCreated(function* (arg0) {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp5 === 3) {
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
                isGift = tmp3;
                paymentGateway = tmp2;
                let country;
                closure_129_0 = undefined;
                ({ orderLineItems, subscriptionFacet } = closure_0);
                const obj4 = {
                  orderLineItems,
                  paymentGateway,
                  isGift,
                  subscriptionFacet,
                  externalGatewayFacet,
                  countryCode: null,
                };
                if (country != null) {
                  country = country.country;
                }
                obj4.countryCode = country;
                v1 = 1;
                c4 = 1;
                const obj6 = { value: closure_0(isGift[15]).createOrder(obj4), done: false };
                return obj6;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_129_0 = value;
              redux(closure_129_0);
              if (null != v1) {
                v1(closure_129_0);
              }
              closure_1_10(false);
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp23) {
            c4 = tmp;
            throw tmp23;
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
              paymentGateway(isGift[14]).dispatch({ type: "IAP_CHECKOUT_END" });
            };
          }
        }
      }
      const fn = function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      cResult[6] = undefined;
      cResult[7] = fn;
      const tmp6Result = paymentGateway(isGift[13]);
    }
  : (orderRequired) => {
      orderRequired = orderRequired.orderRequired;
      _require = orderRequired;
      ({ skuIds, paymentGateway } = orderRequired);
      const isGift = orderRequired.isGift;
      const onOrderCreated = orderRequired.onOrderCreated;
      const activeSubscription = orderRequired.activeSubscription;
      const defaultPlans = orderRequired.defaultPlans;
      const onOrderRetryCancellation = orderRequired.onOrderRetryCancellation;
      const initialSubscriptionFacet = orderRequired.initialSubscriptionFacet;
      const initialExternalGatewayFacet = orderRequired.initialExternalGatewayFacet;
      let flag = orderRequired.headless;
      if (flag === undefined) {
        flag = false;
      }
      c9 = undefined;
      let sku_id;
      let mobileStoreFront;
      let callback;
      let callback1;
      ({ checkoutAnalyticsFields, analyticsInitialStep } = orderRequired);
      const tmp = callback();
      [tmp3, c9] = activeSubscription(defaultPlans.useState(null), 2);
      const tmp4 = activeSubscription(defaultPlans.useState(orderRequired), 2);
      closure_10 = tmp4[1];
      defaultPlans.useRef(false);
      let first = null;
      const tmp2 = activeSubscription(defaultPlans.useState(null), 2);
      const tmp5 = paymentGateway;
      if (skuIds.length > 0) {
        first = skuIds[0];
      }
      const tmp7Result = paymentGateway(isGift[12])(first);
      sku_id = tmp7Result;
      if (null == tmp7Result) {
        if (null == defaultPlans) {
          if (orderRequired) {
            const _Error = Error;
            throw Error("SkuIDs needs to a specified!");
          }
        }
      }
      const tmp7 = paymentGateway(isGift[12]);
      mobileStoreFront = tmp5(isGift[13]).useMobileStoreFront();
      const effect = obj.useEffect(() => {
        paymentGateway(isGift[14]).dispatch({ type: "IAP_CHECKOUT_START" });
        return () => {
          paymentGateway(isGift[14]).dispatch({ type: "IAP_CHECKOUT_END" });
        };
      }, []);
      onOrderCreated(function* (arg0) {
        const obj5 = {
          orderLineItems: closure_129_0,
          paymentGateway,
          isGift,
          subscriptionFacet: closure_129_1,
          externalGatewayFacet,
          countryCode: null,
        };
        if (country != null) {
          country = country.country;
        }
        obj5.countryCode = country;
        yield closure_0(isGift[15]).createOrder(obj5);
        closure_129_2 = value;
        _undefined(closure_129_2);
        if (null != v2) {
          v2(closure_129_2);
        }
        closure_1_10(false);
        yield "IconComponent";
        paymentGateway = tmp2;
        ({ orderLineItems: closure_129_0, subscriptionFacet: closure_129_1 } = closure_0);
        return "Set";
      });
      let items = [paymentGateway, onOrderCreated, isGift, mobileStoreFront, initialExternalGatewayFacet];
      callback = obj.useCallback(function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }, items);
      _require = onOrderCreated(function* (arg0) {
        closure_2 = tmp3;
        closure_129_0 = closure_0;
        yield callback(closure_0);
        if (1 === tmp7) {
          c3 = 0;
          const result = closure_0(isGift[16]).showCheckoutOrderErrorModal(
            () => callback(closure_1_0),
            () => {
              closure_1_10(false);
              closure_1_6();
            },
          );
          c5 = 3;
          closure_0(isGift[16]);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
        return value;
      });
      let items1 = [callback, onOrderRetryCancellation];
      callback1 = obj.useCallback(function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }, items1);
      const items2 = [
        tmp7Result,
        orderRequired,
        callback1,
        defaultPlans,
        mobileStoreFront,
        paymentGateway,
        activeSubscription,
        initialSubscriptionFacet,
      ];
      const effect1 = obj.useEffect(() => {
        if (!ref.current) {
          if (null != mobileStoreFront) {
            if (closure_0) {
              if (null != sku_id) {
                const items = [];
                if (null != defaultPlans) {
                  if (null != mobileStoreFront) {
                    const push = items.push;
                    const items1 = [];
                    HermesBuiltin.arraySpread(
                      defaultPlans.map((skuId) => ({
                        sku_id: skuId.skuId,
                        subscription_plan_id: skuId.subscriptionPlanId,
                        quantity: skuId.quantity,
                        purchase_type: constants.SUBSCRIPTION,
                      })),
                      0,
                    );
                    HermesBuiltin.apply(items1, items);
                    const obj2 = { subscription_preview: null };
                    ({ currency: obj4.currency, country: obj4.country_code } = mobileStoreFront);
                    obj2.subscription_preview = { currency: null, country_code: null };
                    if (null != activeSubscription) {
                      obj2.subscription_id = activeSubscription.id;
                    }
                    let tmp9 = obj2;
                    if (tmp13) {
                      obj2.subscription_preview.subscription_trial_id =
                        initialSubscriptionFacet.subscription_preview.subscription_trial_id;
                      tmp9 = obj2;
                    }
                    const obj3 = { currency: null, country_code: null };
                    tmp13 =
                      null != initialSubscriptionFacet &&
                      null != initialSubscriptionFacet.subscription_preview.subscription_trial_id;
                  }
                } else if (null != sku_id) {
                  const obj = { sku_id, quantity: 1, purchase_type: ItemPurchaseType.ONE_TIME };
                  items.push(obj);
                }
                tmp.current = true;
                const obj7 = { orderLineItems: items, subscriptionFacet: tmp9 };
                callback1(obj7);
              }
            }
          }
        }
      }, items2);
      if (tmp4[0]) {
        let tmp18 = null;
        if (!flag) {
          let obj2 = {
            style: tmp.loadingSpinnerContainer,
            children: mobileStoreFront(require("ActivityIndicator/ActivityIndicator").ActivityIndicator, {
              animating: true,
              size: "large",
            }),
          };
          tmp18 = mobileStoreFront(onOrderRetryCancellation, obj2);
        }
        let tmp17 = tmp18;
      } else {
        let obj3 = {
          checkoutInitParameters: null,
          order: null,
          paymentGateway: null,
          onOrderRetryCancellation: null,
          orderRequired: null,
          initialSubscriptionFacet: null,
          checkoutAnalyticsFields: null,
          analyticsInitialStep: null,
          children: null,
        };
        const obj4 = { skuIds, isGift, activeSubscription, referralTrialOfferId: null };
        obj3.checkoutInitParameters = obj4;
        obj3.order = tmp3;
        obj3.paymentGateway = paymentGateway;
        obj3.onOrderRetryCancellation = onOrderRetryCancellation;
        obj3.orderRequired = orderRequired;
        obj3.initialSubscriptionFacet = initialSubscriptionFacet;
        obj3.checkoutAnalyticsFields = checkoutAnalyticsFields;
        obj3.analyticsInitialStep = analyticsInitialStep;
        obj3.children = orderRequired.children;
        tmp17 = mobileStoreFront(callback1, obj3);
      }
      return tmp17;
    };
