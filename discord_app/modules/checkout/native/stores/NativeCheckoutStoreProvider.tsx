// discord_app/modules/checkout/native/stores/NativeCheckoutStoreProvider.tsx
import v1 from "../../../../../_runtime/00514_v1.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import context from "../NativeCheckoutStore.tsx";
import { ItemPurchaseType } from "../../../payments/PaymentConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
function NativeCheckoutStoreProvider(children) {
  ({ checkoutInitParameters: require, order } = children);
  ({ paymentGateway: dependencyMap, orderRequired: closure_3, onOrderRetryCancellation: closure_4, initialSubscriptionFacet: closure_5 } = children);
  closure_6 = order(7127)(() => {
    let id;
    if (order != null) {
      id = order.id;
    }
    if (id == null) {
      let obj = v1;
      id = obj.v4();
    }
    obj = { message: "Checkout session ID: " + id };
    order(dependencyMap[14]).addBreadcrumb(obj);
    obj = { loadId: id, startTime: Date.now() };
    return obj;
  });
  const first = callback(React.useState(() => first({ order, checkoutInitParameters: closure_0, contextMetadata: closure_6, paymentGateway: closure_2, orderRequired: closure_3, onOrderRetryCancellation: closure_4, initialSubscriptionFacet: closure_5 })), 1)[0];
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
      closure_1_0(closure_1_2[15]);
      let obj = { checkoutSucceeded: null, order: null };
      obj[0] = tmp2;
      obj = { id: null, status: null };
      ({ id: obj3[0], status: obj3[1] } = orderRecord);
      obj[1] = obj;
      obj.discardDraftOrder(obj);
    }
  }, items1);
  return <closure_8 value={first}><redux.Provider value={first}>{children.children}</redux.Provider></closure_8>;
}
({ createNativeStore: error, NativeCheckoutStoreContext: closure_8, NativeCheckoutStoreContextOrNull: c9 } = context);
let closure_12 = createCacheKey.createStyles({ loadingSpinnerContainer: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" } });
let result = require("obj132").fileFinishedImporting("modules/checkout/native/stores/NativeCheckoutStoreProvider.tsx");

export default function NativeCheckoutStoreProviderWrapper(orderRequired) {
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
  obj1 = _require(tmp5[9]);
  storeFront = obj1.useNativeIAPPayments().storeFront;
  onOrderCreated((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_2 = tmp5;
              c1 = tmp2;
              c0 = undefined;
              c1 = undefined;
              ({ orderLineItems: c0, subscriptionFacet: c1 } = c0);
              closure_2 = undefined;
              v0 = 1;
              c4 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let country;
              const obj2 = { orderLineItems: null, paymentGateway: null, isGift: null, subscriptionFacet: null, externalGatewayFacet: null, countryCode: null };
              obj2[0] = c0;
              obj2[1] = paymentGateway;
              obj2[2] = closure_1_2;
              obj2[3] = c1;
              obj2[4] = initialExternalGatewayFacet;
              if (storeFront != null) {
                country = storeFront.country;
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
            closure_1_9(closure_2);
            if (null != v0) {
              v0(closure_1_2);
            }
            closure_1_10(false);
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
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
  _require = onOrderCreated((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    c3 = 0;
    return (function*(arg0) {
      closure_2 = tmp3;
      c3 = 1;
      yield closure_1_14(callback);
      if (1 === tmp7) {
        c3 = 0;
        obj1 = callback(isGift[11]);
        const result = obj1.showCheckoutOrderErrorModal(() => closure_1_14(closure_0), () => {
          callback2(false);
          callback();
        });
        c5 = 3;
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
    let tmp = ref;
    if (!ref.current) {
      country = storeFront;
      if (null != storeFront) {
        if (closure_0) {
          const items = [];
          if (null != defaultPlans) {
            const push = items.push;
            const items1 = [];
            HermesBuiltin.arraySpread(defaultPlans.map((item, index) => ({ sku_id: item.skuId, subscription_plan_id: item.subscriptionPlanId, quantity: item.quantity, purchase_type: constants.SUBSCRIPTION })), 0);
            HermesBuiltin.apply(items1, items);
            let obj = { currency: null, country_code: null };
            ({ currency: obj3[0], country } = country);
            obj[1] = country;
            obj[0] = obj;
            if (null != activeSubscription) {
              obj.subscription_id = activeSubscription.id;
            }
            let tmp15 = null != initialSubscriptionFacet;
            if (tmp15) {
              tmp15 = null != initialSubscriptionFacet.subscription_preview.subscription_trial_id;
            }
            let tmp5 = obj;
            if (tmp15) {
              obj.subscription_preview.subscription_trial_id = initialSubscriptionFacet.subscription_preview.subscription_trial_id;
              tmp5 = obj;
            }
          } else if (null != closure_12) {
            obj = { sku_id: null, quantity: 1, purchase_type: null };
            obj[0] = closure_12;
            obj[2] = constants.ONE_TIME;
            items.push(obj);
          }
          tmp.current = true;
          tmp = callback1;
          obj1 = { orderLineItems: null, subscriptionFacet: null };
          obj1[0] = items;
          obj1[1] = tmp5;
          callback1(obj1);
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