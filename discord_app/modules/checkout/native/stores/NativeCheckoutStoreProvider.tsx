// discord_app/modules/checkout/native/stores/NativeCheckoutStoreProvider.tsx
import CustomCheckoutFlow from "CustomCheckoutFlow";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import context from "context";
import { ItemPurchaseType } from "CustomCheckoutFlow";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let error;
let metroImportAll;
const require = arg1;
function NativeCheckoutStoreProvider(children) {
  let CustomCheckoutFlow;
  let _slicedToArray;
  let noop;
  let dependencyMap;
  let order;
  let require;
  ({ checkoutInitParameters: require, order } = children);
  ({ paymentGateway: dependencyMap, orderRequired: CustomCheckoutFlow, onOrderRetryCancellation: _slicedToArray, initialSubscriptionFacet: noop } = children);
  let closure_6;
  let first;
  let closure_8;
  closure_6 = order(5637)(() => {
    let id;
    if (order != null) {
      id = order.id;
    }
    if (id == null) {
      let obj = outer1_0(outer1_2[13]);
      id = obj.v4();
    }
    obj = { message: "Checkout session ID: " + id };
    order(outer1_2[14]).addBreadcrumb(obj);
    obj = { loadId: id, startTime: Date.now() };
    return obj;
  });
  first = callback(React.useState(() => first({ order, checkoutInitParameters: closure_0, contextMetadata: closure_6, paymentGateway: closure_2, orderRequired: CustomCheckoutFlow, onOrderRetryCancellation: _slicedToArray, initialSubscriptionFacet: noop })), 1)[0];
  closure_8 = React.useRef(null != order);
  const items = [order, first];
  const effect = React.useEffect(() => {
    let current = ref.current;
    if (!current) {
      current = null == order;
    }
    if (!current) {
      const state = first.getState();
      state.setOrder(order);
      ref.current = true;
    }
  }, items);
  const items1 = [first];
  const effect1 = React.useEffect(() => () => {
    state = state.getState();
    const orderRecord = state.orderRecord;
    if (null != orderRecord) {
      let obj = outer1_0(outer1_2[15]);
      obj = { checkoutSucceeded: null, order: null };
      obj[0] = tmp2;
      obj = { id: null, status: null };
      ({ id: obj3[0], status: obj3[1] } = orderRecord);
      obj[1] = obj;
      obj.discardDraftOrder(obj);
    }
  }, items1);
  return <closure_8 value={first}><redux.Provider value={first}>{arg0.children}</redux.Provider></closure_8>;
}
({ createNativeStore: error, NativeCheckoutStoreContext: metroImportAll, NativeCheckoutStoreContextOrNull: c9 } = context);
let closure_12 = createCacheKey.createStyles({ loadingSpinnerContainer: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" } });
let result = require("noop").fileFinishedImporting("modules/checkout/native/stores/NativeCheckoutStoreProvider.tsx");

export default function NativeCheckoutStoreProviderWrapper(orderRequired) {
  let c9;
  let paymentGateway;
  let skuIds;
  let tmp3;
  orderRequired = orderRequired.orderRequired;
  let _require = orderRequired;
  ({ skuIds, paymentGateway } = orderRequired);
  const isGift = orderRequired.isGift;
  const onOrderCreated = orderRequired.onOrderCreated;
  const activeSubscription = orderRequired.activeSubscription;
  const defaultPlans = orderRequired.defaultPlans;
  const onOrderRetryCancellation = orderRequired.onOrderRetryCancellation;
  const initialSubscriptionFacet = orderRequired.initialSubscriptionFacet;
  const initialExternalGatewayFacet = orderRequired.initialExternalGatewayFacet;
  c9 = undefined;
  let closure_10;
  let closure_11;
  let callback2;
  let storeFront;
  let callback;
  let callback1;
  let obj = defaultPlans;
  let tmp = callback2();
  [tmp3, c9] = activeSubscription(defaultPlans.useState(null), 2);
  const tmp4 = activeSubscription(defaultPlans.useState(orderRequired), 2);
  closure_10 = tmp4[1];
  closure_11 = defaultPlans.useRef(false);
  let first = null;
  const tmp2 = activeSubscription(defaultPlans.useState(null), 2);
  if (skuIds.length > 0) {
    first = skuIds[0];
  }
  const tmp6Result = paymentGateway(isGift[8])(first);
  callback2 = tmp6Result;
  if (null == tmp6Result) {
    if (null == defaultPlans) {
      if (orderRequired) {
        const _Error = Error;
        throw Error("SkuIDs needs to a specified!");
      }
    }
  }
  let obj1 = _require(tmp5[9]);
  storeFront = obj1.useNativeIAPPayments().storeFront;
  _require = undefined;
  _require = onOrderCreated((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp5;
              c1 = tmp2;
              c0 = undefined;
              c1 = undefined;
              ({ orderLineItems: c0, subscriptionFacet: c1 } = c0);
              closure_2 = undefined;
              v0 = 1;
              c4 = 1;
              return { value: "PX_8", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let country;
              const obj2 = { orderLineItems: null, paymentGateway: null, isGift: null, subscriptionFacet: null, externalGatewayFacet: null, countryCode: null };
              obj2[0] = c0;
              obj2[1] = outer1_1;
              obj2[2] = outer1_2;
              obj2[3] = c1;
              obj2[4] = outer1_8;
              if (outer1_13 != null) {
                country = outer1_13.country;
              }
              obj2[5] = country;
              v0 = 2;
              c4 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = callback(isGift[10]).createOrder(obj2);
              return obj3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_2 = arg1;
            outer1_9(closure_2);
            if (null != v0) {
              v0(outer1_2);
            }
            outer1_10(false);
            c4 = 3;
            return { value: "T", done: null };
          }
        } catch (tmp23) {
          c4 = tmp;
          throw tmp23;
        }
      }
    })();
    iter.next();
    return iter;
  });
  let items = [paymentGateway, onOrderCreated, isGift, storeFront, initialExternalGatewayFacet];
  callback = obj.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  _require = undefined;
  _require = onOrderCreated((arg0) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    let c3 = 0;
    return (function*(arg0) {
      let closure_2 = tmp3;
      let c3 = 1;
      yield outer1_14(callback);
      if (1 === tmp7) {
        c3 = 0;
        const obj1 = callback(isGift[11]);
        const result = obj1.showCheckoutOrderErrorModal(() => outer1_14(closure_0), () => {
          callback2(false);
          callback();
        });
        let c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        c3 = 0;
      }
      c3 = 0;
      return arg1;
    })();
  });
  let items1 = [callback, onOrderRetryCancellation];
  callback1 = obj.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  const items2 = [tmp6Result, orderRequired, callback1, defaultPlans, storeFront, activeSubscription, initialSubscriptionFacet];
  const effect = obj.useEffect(() => {
    let country;
    let tmp = ref;
    if (!ref.current) {
      country = storeFront;
      if (null != storeFront) {
        if (closure_0) {
          const items = [];
          if (null != defaultPlans) {
            const push = items.push;
            const items1 = [];
            HermesBuiltin.arraySpread(arr2.map((skuId) => ({ sku_id: skuId.skuId, subscription_plan_id: skuId.subscriptionPlanId, quantity: skuId.quantity, purchase_type: constants.SUBSCRIPTION })), 0);
            HermesBuiltin.apply(items1, items);
            let obj = { subscription_preview: null };
            obj = { currency: null, country_code: null };
            ({ currency: obj3[0], country } = country);
            obj[1] = country;
            obj[0] = obj;
            if (null != activeSubscription) {
              obj.subscription_id = activeSubscription.id;
            }
            let tmp15 = null != initialSubscriptionFacet;
            if (tmp15) {
              tmp15 = null != tmp14.subscription_preview.subscription_trial_id;
            }
            let tmp5 = obj;
            if (tmp15) {
              obj.subscription_preview.subscription_trial_id = tmp14.subscription_preview.subscription_trial_id;
              tmp5 = obj;
            }
          } else if (null != tmp3) {
            obj = { sku_id: null, quantity: 1, purchase_type: null };
            obj[0] = tmp3;
            obj[2] = constants.ONE_TIME;
            items.push(obj);
          }
          tmp.current = true;
          tmp = callback1;
          const obj1 = { orderLineItems: null, subscriptionFacet: null };
          obj1[0] = items;
          obj1[1] = tmp5;
          callback1(obj1);
          arr2 = defaultPlans;
        }
      }
    }
  }, items2);
  if (tmp4[0]) {
    obj = { style: null, children: null };
    obj[0] = tmp.loadingSpinnerContainer;
    obj[1] = tmp13(_require(tmp5[12]).ActivityIndicator, { animating: true, size: "large" });
    let tmp13Result = tmp13(onOrderRetryCancellation, obj);
  } else {
    obj = { checkoutInitParameters: null, order: null, paymentGateway: null, onOrderRetryCancellation: null, orderRequired: null, initialSubscriptionFacet: null, children: null };
    obj1 = { skuIds: null, isGift: null, activeSubscription: null, referralTrialOfferId: null };
    obj1[0] = skuIds;
    obj1[1] = isGift;
    obj1[2] = activeSubscription;
    obj[0] = obj1;
    obj[1] = tmp3;
    obj[2] = paymentGateway;
    obj[3] = onOrderRetryCancellation;
    obj[4] = orderRequired;
    obj[5] = initialSubscriptionFacet;
    obj[6] = orderRequired.children;
    tmp13Result = tmp13(storeFront, obj);
  }
  return tmp13Result;
};