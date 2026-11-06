// === Module 15281: OrbCheckoutModal ===

// Module 15281 (OrbCheckoutModal)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Stack_Stack from "Stack/Stack" /* 6185 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import VirtualCurrencyUtils from "VirtualCurrencyUtils" /* 9795 */;
import PaymentFlowStartedTriggerPoint from "PaymentFlowStartedTriggerPoint" /* 10813 */;
import OrbCheckoutModalContext from "OrbCheckoutModalContext" /* 15282 */;
import OrbCheckoutModalComponents from "OrbCheckoutModalComponents" /* 15284 */;
import "module_19";

require = fn;
function OrbCheckoutModalContent(orbBalance) {
  const orbCheckoutModalContext = OrbCheckoutModalContext.useOrbCheckoutModalContext();
  ({ orbCheckoutErrorMessage, orbProductContext, skuId } = orbCheckoutModalContext);
  let tmp5 = null != orbCheckoutErrorMessage;
  if (tmp5) {
    const obj2 = { error: orbCheckoutErrorMessage };
    tmp5 = closure_1_11(OrbCheckoutModalComponents.OrbCheckoutErrorCard, obj2);
  }
  items = [tmp5, , ];
  const obj3 = { skuId, orbPriceAmount: null };
  let orbPriceAmount;
  if (orbProductContext != null) {
    orbPriceAmount = orbProductContext.orbPriceAmount;
  }
  if (orbPriceAmount == null) {
    orbPriceAmount = null;
  }
  const obj4 = { children: null };
  obj3.orbPriceAmount = orbPriceAmount;
  items[1] = closure_1_11(OrbCheckoutModalComponents.OrbCheckoutOrderSummary, obj3);
  items[2] = closure_1_11(OrbCheckoutModalComponents.OrbCheckoutPaymentSourceDetails, { orbBalance: orbBalance.orbBalance });
  obj4.children = items;
  return application_id(Stack_Stack.Stack, obj4);
}
function OrbCheckoutModalFooter(onPress) {
  const obj = { children: null };
  items = [closure_1_11(OrbCheckoutModalComponents.OrbCheckoutLegalFinePrint, {}), closure_1_11(OrbCheckoutModalComponents.OrbCheckoutPurchaseButton, { onPress: onPress.onPress })];
  obj.children = items;
  return application_id(Stack_Stack.Stack, obj);
}
const noop = fn(19);
({ useRef: closure_4, useEffect: hasOwnProperty, useCallback: closure_6, useMemo: metroImportDefault } = noop);
const Constants = fn(1072);
({ AnalyticEvents: closure_8, CurrencyCodes: closure_9 } = Constants);
const InternalPaymentGateways = fn(1083).InternalPaymentGateways;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const constants3 = { MAIN: "MAIN" };
function OrbCheckoutModalScreen(arg0) {
  ({ startTime, canEmitPaymentFlowStarted } = arg0);
  let orbRedemptionError;
  let ref;
  const orbCheckoutModalContext = canEmitPaymentFlowStarted(orbRedemptionError[4]).useOrbCheckoutModalContext();
  const onRedeemVirtualCurrency = orbCheckoutModalContext.onRedeemVirtualCurrency;
  orbRedemptionError = orbCheckoutModalContext.orbRedemptionError;
  closure_129_0 = startTime;
  let obj = canEmitPaymentFlowStarted(orbRedemptionError[4]);
  const orbCheckoutModalContext1 = canEmitPaymentFlowStarted(orbRedemptionError[4]).useOrbCheckoutModalContext();
  const skuId = orbCheckoutModalContext1.skuId;
  closure_129_1 = skuId;
  const loadId = orbCheckoutModalContext1.loadId;
  closure_129_2 = loadId;
  const analyticsLocations = orbCheckoutModalContext1.analyticsLocations;
  closure_129_3 = analyticsLocations;
  const orbProductContext = orbCheckoutModalContext1.orbProductContext;
  closure_129_4 = orbProductContext;
  let obj2 = canEmitPaymentFlowStarted(orbRedemptionError[4]);
  const virtualCurrencyBalance = canEmitPaymentFlowStarted(orbRedemptionError[7]).useVirtualCurrencyBalance();
  closure_129_5 = virtualCurrencyBalance;
  items = [loadId, skuId, analyticsLocations, orbProductContext, virtualCurrencyBalance];
  const tmp6 = closure_7(() => {
    const obj = { load_id: orbRedemptionError, application_id: VirtualCurrencyUtils.get1PShopApplicationIdForSKU(onRedeemVirtualCurrency), location_stack, sku_id: onRedeemVirtualCurrency, currency: constants2.DISCORD_ORB, payment_gateway: InternalPaymentGateways.VIRTUAL_CURRENCY, virtual_currency_balance };
    let tmp2 = null != virtualCurrencyBalance1;
    if (tmp2) {
      const orbPriceAmount = virtualCurrencyBalance1.orbPriceAmount;
      const obj3 = { price: orbPriceAmount, regular_price: null };
      const orbPriceAmount2 = virtualCurrencyBalance1.orbPriceAmount;
      obj3.regular_price = orbPriceAmount2;
      tmp2 = obj3;
    }
    const merged = Object.assign(tmp2);
    return obj;
  }, items);
  closure_129_6 = tmp6;
  const items1 = [startTime, tmp6];
  const tmp8 = ref((arg0, arg1) => {
    const diff = Date.now() - canEmitPaymentFlowStarted;
    if (arg0 === constants.PAYMENT_FLOW_STARTED) {
      const obj2 = {};
      const merged = Object.assign(closure_6);
      obj2.has_saved_payment_source = false;
      obj2.continue_session_initial_step = null;
      const result = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP(obj2);
    } else if (arg0 === constants.PAYMENT_FLOW_COMPLETED) {
      const obj3 = {};
      const merged1 = Object.assign(closure_6);
      obj3.duration_ms = diff;
      AnalyticsUtilsDefault.track(constants.PAYMENT_FLOW_COMPLETED, obj3);
    } else if (arg0 === constants.PAYMENT_FLOW_SUCCEEDED) {
      const obj6 = {};
      const merged2 = Object.assign(closure_6);
      obj6.duration_ms = diff;
      AnalyticsUtilsDefault.track(constants.PAYMENT_FLOW_SUCCEEDED, obj6);
    } else if (arg0 === constants.PAYMENT_FLOW_CANCELED) {
      const obj8 = {};
      const merged3 = Object.assign(closure_6);
      obj8.duration_ms = diff;
      AnalyticsUtilsDefault.track(constants.PAYMENT_FLOW_CANCELED, obj8);
    } else {
      const obj10 = {};
      const merged4 = Object.assign(closure_6);
      obj10.duration_ms = diff;
      if (null != arg1) {
        ({ code: obj4.payment_error_code, message: obj4.error_message } = arg1);
        let obj19 = { payment_error_code: null, error_message: null };
        const obj12 = { payment_error_code: null, error_message: null };
      } else {
        obj19 = {};
      }
      const merged5 = Object.assign(obj19);
      AnalyticsUtilsDefault.track(constants.PAYMENT_FLOW_FAILED, obj10);
    }
  }, items1);
  const location_stack = tmp8;
  let obj3 = canEmitPaymentFlowStarted(orbRedemptionError[7]);
  const tmp7 = ref;
  const virtualCurrencyBalance1 = canEmitPaymentFlowStarted(orbRedemptionError[7]).useVirtualCurrencyBalance();
  const tmp10 = virtualCurrencyBalance1(virtualCurrencyBalance1);
  const virtual_currency_balance = tmp10;
  ref = virtualCurrencyBalance1(false);
  const items2 = [canEmitPaymentFlowStarted, tmp8];
  virtual_currency_balance(() => {
    let tmp = canEmitPaymentFlowStarted;
    if (canEmitPaymentFlowStarted) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      location_stack(constants.PAYMENT_FLOW_STARTED);
    }
  }, items2);
  const items3 = [orbRedemptionError, tmp8];
  virtual_currency_balance(() => {
    let tmp2 = null != orbRedemptionError;
    if (tmp2) {
      tmp2 = null !== virtual_currency_balance.current;
    }
    if (tmp2) {
      location_stack(constants.PAYMENT_FLOW_FAILED, orbRedemptionError);
      virtual_currency_balance.current = null;
    }
  }, items3);
  let current = tmp10.current;
  if (current == null) {
    current = virtualCurrencyBalance1;
  }
  const items4 = [tmp8, virtualCurrencyBalance1, onRedeemVirtualCurrency];
  const obj4 = canEmitPaymentFlowStarted(orbRedemptionError[7]);
  let obj5 = { children: null };
  const tmp7Result = tmp7(() => {
    location_stack(constants.PAYMENT_FLOW_COMPLETED);
    closure_5.current = virtualCurrencyBalance1;
    onRedeemVirtualCurrency(() => {
      location_stack(constants.PAYMENT_FLOW_SUCCEEDED);
      onRedeemVirtualCurrency(orbRedemptionError[11]).pop();
    });
  }, items4);
  const items5 = [closure_11(canEmitPaymentFlowStarted(orbRedemptionError[13]).ModalContent, { children: closure_11(OrbCheckoutModalContent, { orbBalance: current }) }), ];
  let obj6 = { children: closure_11(OrbCheckoutModalContent, { orbBalance: current }) };
  items5[1] = closure_11(canEmitPaymentFlowStarted(orbRedemptionError[14]).ModalFooter, { children: closure_11(OrbCheckoutModalFooter, { onPress: tmp7Result }) });
  obj5.children = items5;
  return closure_12(canEmitPaymentFlowStarted(orbRedemptionError[12]).ModalScreen, obj5);
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx");

export default function _default(skuId) {
  skuId = skuId.skuId;
  const analyticsLocations = skuId.analyticsLocations;
  let current;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  markCheckoutSucceeded = undefined;
  let onCheckoutSuccess;
  onCheckoutSuccess(analyticsLocations[15])(null != skuId, "SKU ID is required");
  current = current.useRef(skuId(analyticsLocations[16]).v4()).current;
  const current2 = current.useRef(Date.now()).current;
  let obj = skuId(analyticsLocations[16]);
  const virtualCurrencyBalance = skuId(analyticsLocations[7]).useVirtualCurrencyBalance();
  let obj2 = skuId(analyticsLocations[7]);
  const orbCheckoutOrder = skuId(analyticsLocations[17]).useOrbCheckoutOrder({ skuId });
  ({ isOrdersCheckout: c6, order: c7, isCreatingOrder: c8, createOrderError: c9, onSignFailure: c10, markCheckoutSucceeded } = orbCheckoutOrder);
  items = [markCheckoutSucceeded, onCheckoutSuccess];
  onCheckoutSuccess = current.useCallback((arg0) => {
    markCheckoutSucceeded();
    onCheckoutSuccess(arg0);
  }, items);
  const items1 = [analyticsLocations, skuId];
  const effect = current.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, { type: "Orb Checkout Modal", location_stack: analyticsLocations, sku_id: skuId });
  }, items1);
  const items2 = [skuId, current, analyticsLocations, current2, virtualCurrencyBalance];
  const obj4 = {};
  const obj5 = { title: null, headerShown: true, headerLeft: null, render: null };
  const callback = current.useCallback(() => {
    const timestamp = Date.now();
    const obj2 = { load_id: current, application_id: null, location_stack: null, payment_gateway: null, sku_id: null, currency: null, duration_ms: null, virtual_currency_balance: null };
    const obj = AnalyticsUtilsDefault;
    obj2.application_id = VirtualCurrencyUtils.get1PShopApplicationIdForSKU(skuId);
    obj2.location_stack = analyticsLocations;
    obj2.payment_gateway = InternalPaymentGateways.VIRTUAL_CURRENCY;
    obj2.sku_id = skuId;
    obj2.currency = constants2.DISCORD_ORB;
    obj2.duration_ms = timestamp - current2;
    obj2.virtual_currency_balance = virtualCurrencyBalance;
    obj.track(constants.PAYMENT_FLOW_CANCELED, obj2);
    ModalActionCreatorsDefault.pop();
  }, items2);
  const intl = skuId(analyticsLocations[18]).intl;
  obj5.title = intl.string(skuId(analyticsLocations[18]).t.q9EGps);
  let obj3 = skuId(analyticsLocations[17]);
  const intl2 = skuId(analyticsLocations[18]).intl;
  obj5.headerLeft = skuId(analyticsLocations[19]).getHeaderTextButton(intl2.string(skuId(analyticsLocations[18]).t["ETE/oC"]), callback);
  obj5.render = function render() {
    const obj = { skuId, loadId: current, onCheckoutSuccess, onSignFailure, order, isOrdersCheckout, isCreatingOrder, createOrderError, analyticsLocations, children: null };
    const obj2 = { startTime: current2, canEmitPaymentFlowStarted: null };
    let tmp4 = !isOrdersCheckout;
    if (isOrdersCheckout) {
      tmp4 = null != tmp2;
    }
    obj2.canEmitPaymentFlowStarted = tmp4;
    obj.children = closure_2_11(OrbCheckoutModalScreen, obj2);
    return closure_2_11(OrbCheckoutModalContext.OrbCheckoutModalContextProvider, obj);
  };
  obj4[constants3.MAIN] = obj5;
  return markCheckoutSucceeded(skuId(analyticsLocations[20]).Modal, { screens: obj4, initialRouteName: constants3.MAIN, headerTitleAlign: "center" });
};