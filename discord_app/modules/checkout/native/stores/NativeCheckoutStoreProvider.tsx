// discord_app/modules/checkout/native/stores/NativeCheckoutStoreProvider.tsx
import SentryUtilsDefault from "../../../../utils/SentryUtils.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import v1 from "../../../../../_runtime/01256_v1.js";
import PaymentFlowStartedTriggerPoint from "../../../experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function NativeCheckoutStoreProvider(children) {
  ({ checkoutInitParameters: require, order } = children);
  ({
    paymentGateway: dependencyMap,
    orderRequired: asyncGeneratorStep,
    onOrderRetryCancellation: _slicedToArray,
    initialSubscriptionFacet: noop,
    checkoutAnalyticsFields: View,
    analyticsInitialStep: closure_7,
  } = children);
  const contextMetadata = order(5598)(() => {
    let id;
    if (order != null) {
      id = order.id;
    }
    if (id == null) {
      let obj = v1;
      id = obj.v4();
    }
    obj = { message: "Checkout session ID: " + id };
    SentryUtilsDefault.addBreadcrumb(obj);
    obj = { loadId: id, startTime: Date.now() };
    return obj;
  });
  redux = order(5598)(() => {
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
  order(4992)(() => {
    if (null != View) {
      let obj = PaymentFlowStartedTriggerPoint;
      const result = obj.trackPaymentFlowStartedAnalyticsAndCTP(closure_9);
      obj = {};
      const merged = Object.assign(closure_9);
      obj.initial_step = initial_step;
      AnalyticsUtilsDefault.track(AnalyticEvents.PAYMENT_FLOW_LOADED, obj);
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
          order(1242).track(first.PAYMENT_FLOW_CANCELED, analyticsFields);
          const obj = order(1242);
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
      const state = first.getState();
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
        checkoutInitParameters(10812);
        let obj = { checkoutSucceeded: tmp2, order: null };
        obj = { id: null, status: null };
        ({ id: obj3.id, status: obj3.status } = orderRecord);
        obj.order = obj;
        obj.discardDraftOrder(obj);
      }
    },
    items1,
  );
  return (
    <contextMetadata value={value}>
      <redux.Provider value={value}>{children.children}</redux.Provider>
    </contextMetadata>
  );
}
const View = fn(17).View;
const NativeCheckoutStore = fn(7424);
({
  createNativeStore: closure_7,
  NativeCheckoutStoreContext: closure_8,
  NativeCheckoutStoreContextOrNull: closure_9,
} = NativeCheckoutStore);
const AnalyticEvents = fn(1074).AnalyticEvents;
const ItemPurchaseType = fn(4542).ItemPurchaseType;
let jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_13 = createStyles.createStyles({
  loadingSpinnerContainer: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkout/native/stores/NativeCheckoutStoreProvider.tsx");

export default function NativeCheckoutStoreProviderWrapper(orderRequired) {
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
  jsx = undefined;
  let storeFront;
  let callback;
  let callback1;
  ({ checkoutAnalyticsFields, analyticsInitialStep } = orderRequired);
  let obj = defaultPlans;
  let tmp = storeFront();
  [tmp3, c9] = activeSubscription(defaultPlans.useState(null), 2);
  const tmp4 = activeSubscription(defaultPlans.useState(orderRequired), 2);
  closure_10 = tmp4[1];
  defaultPlans.useRef(false);
  let first = null;
  const tmp2 = activeSubscription(defaultPlans.useState(null), 2);
  if (skuIds.length > 0) {
    first = skuIds[0];
  }
  const tmp6Result = paymentGateway(isGift[9])(first);
  jsx = tmp6Result;
  if (null == tmp6Result) {
    if (null == defaultPlans) {
      if (orderRequired) {
        const _Error = Error;
        throw Error("SkuIDs needs to a specified!");
      }
    }
  }
  let obj1 = require("hooks/NativePaymentHooks");
  storeFront = obj1.useNativeIAPPayments().storeFront;
  onOrderCreated(function* (arg0) {
    const obj2 = {
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
    obj2.countryCode = country;
    yield closure_0(isGift[11]).createOrder(obj2);
    closure_129_2 = value;
    _undefined(closure_129_2);
    if (null != v2) {
      v2(closure_129_2);
    }
    closure_1_10(false);
    yield "HermesInternal";
    paymentGateway = tmp2;
    ({ orderLineItems: closure_129_0, subscriptionFacet: closure_129_1 } = closure_0);
    return "PX_16";
  });
  let items = [paymentGateway, onOrderCreated, isGift, storeFront, initialExternalGatewayFacet];
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
      const result = closure_0(isGift[12]).showCheckoutOrderErrorModal(
        () => callback(closure_1_0),
        () => {
          closure_1_10(false);
          closure_1_6();
        },
      );
      c5 = 3;
      closure_0(isGift[12]);
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
    tmp6Result,
    orderRequired,
    callback1,
    defaultPlans,
    storeFront,
    activeSubscription,
    initialSubscriptionFacet,
  ];
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
            let obj = { subscription_preview: null };
            obj = { currency: null, country_code: null };
            ({ currency: obj3.currency, country } = country);
            obj.country_code = country;
            obj.subscription_preview = obj;
            if (null != activeSubscription) {
              obj.subscription_id = activeSubscription.id;
            }
            let tmp15 = null != initialSubscriptionFacet;
            if (tmp15) {
              tmp15 = null != initialSubscriptionFacet.subscription_preview.subscription_trial_id;
            }
            let tmp5 = obj;
            if (tmp15) {
              obj.subscription_preview.subscription_trial_id =
                initialSubscriptionFacet.subscription_preview.subscription_trial_id;
              tmp5 = obj;
            }
          } else if (null != sku_id) {
            obj = { sku_id, quantity: 1, purchase_type: ItemPurchaseType.ONE_TIME };
            items.push(obj);
          }
          tmp.current = true;
          tmp = callback1;
          const obj1 = { orderLineItems: items, subscriptionFacet: tmp5 };
          callback1(obj1);
        }
      }
    }
  }, items2);
  if (tmp4[0]) {
    let tmp16 = null;
    if (!flag) {
      obj = {
        style: tmp.loadingSpinnerContainer,
        children: jsx(require("ActivityIndicator/ActivityIndicator").ActivityIndicator, {
          animating: true,
          size: "large",
        }),
      };
      tmp16 = (
        <onOrderRetryCancellation style={tmp.loadingSpinnerContainer}>
          {jsx(require("ActivityIndicator/ActivityIndicator").ActivityIndicator, { animating: true, size: "large" })}
        </onOrderRetryCancellation>
      );
    }
    let tmp15 = tmp16;
  } else {
    obj = {
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
    obj1 = { skuIds, isGift, activeSubscription, referralTrialOfferId: null };
    obj.checkoutInitParameters = obj1;
    obj.order = tmp3;
    obj.paymentGateway = paymentGateway;
    obj.onOrderRetryCancellation = onOrderRetryCancellation;
    obj.orderRequired = orderRequired;
    obj.initialSubscriptionFacet = initialSubscriptionFacet;
    obj.checkoutAnalyticsFields = checkoutAnalyticsFields;
    obj.analyticsInitialStep = analyticsInitialStep;
    obj.children = orderRequired.children;
    tmp15 = (
      <callback
        checkoutInitParameters={null}
        order={null}
        paymentGateway={null}
        onOrderRetryCancellation={null}
        orderRequired={null}
        initialSubscriptionFacet={null}
        checkoutAnalyticsFields={null}
        analyticsInitialStep={null}
      >
        {null}
      </callback>
    );
  }
  return tmp15;
}
