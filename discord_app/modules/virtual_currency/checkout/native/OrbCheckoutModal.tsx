// === Module 12989: OrbCheckoutModal ===

// Module 12989 (OrbCheckoutModal)
import c from "c" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import VirtualCurrencyUtils from "VirtualCurrencyUtils" /* 9995 */;
import PaymentFlowStartedTriggerPoint from "PaymentFlowStartedTriggerPoint" /* 10539 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 10778 */;
import OrbCheckoutModalContext from "OrbCheckoutModalContext" /* 12990 */;
import OrbCheckoutModalComponents from "OrbCheckoutModalComponents" /* 12991 */;
import "module_19";

const require = globalThis.__r;

require = fn;
const noop = fn(19);
({ useRef: closure_4, useEffect: hasOwnProperty, useCallback: metroRequire, useMemo: closure_7 } = noop);
const Constants = fn(1085);
({ AnalyticEvents: closure_8, CurrencyCodes: closure_9 } = Constants);
const InternalPaymentGateways = fn(1096).InternalPaymentGateways;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const constants3 = { MAIN: "MAIN" };
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((orbBalance) => {
  const cResult = c.c(10);
  orbBalance = orbBalance.orbBalance;
  const orbCheckoutModalContext = OrbCheckoutModalContext.useOrbCheckoutModalContext();
  ({ orbRedemptionError, skuId } = orbCheckoutModalContext);
  let product = useFetchCollectiblesProduct.useFetchCollectiblesProduct(skuId).product;
  if (cResult[0] !== orbRedemptionError) {
    let tmp8 = null != orbRedemptionError;
    if (tmp8) {
      const obj4 = { error: orbRedemptionError.message };
      tmp8 = closure_1_11(OrbCheckoutModalComponents.OrbCheckoutErrorCard, obj4);
    }
    cResult[0] = orbRedemptionError;
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (product == null) {
    product = null;
  }
  if (cResult[2] !== product) {
    const obj5 = { product };
    const tmp12 = closure_1_11(OrbCheckoutModalComponents.OrbCheckoutOrderSummary, obj5);
    cResult[2] = product;
    cResult[3] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== orbBalance) {
    const obj6 = { orbBalance };
    const tmp15 = closure_1_11(OrbCheckoutModalComponents.OrbCheckoutPaymentSourceDetails, obj6);
    cResult[4] = orbBalance;
    cResult[5] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === tmp6) {
    if (cResult[7] === tmp10) {
      if (cResult[8] === tmp13) {
        let tmp16 = cResult[9];
      }
      return tmp16;
    }
  }
  const obj7 = { children: null };
  const items = [tmp6, tmp10, tmp13];
  obj7.children = items;
  const tmp17 = __initData(Stack_Stack.Stack, obj7);
  cResult[6] = tmp6;
  cResult[7] = tmp10;
  cResult[8] = tmp13;
  cResult[9] = tmp17;
  tmp16 = tmp17;
}) : ((orbBalance) => {
  const orbCheckoutModalContext = OrbCheckoutModalContext.useOrbCheckoutModalContext();
  ({ orbRedemptionError, skuId } = orbCheckoutModalContext);
  let product = useFetchCollectiblesProduct.useFetchCollectiblesProduct(skuId).product;
  let tmp6 = null != orbRedemptionError;
  if (tmp6) {
    const obj3 = { error: orbRedemptionError.message };
    tmp6 = closure_1_11(OrbCheckoutModalComponents.OrbCheckoutErrorCard, obj3);
  }
  const items = [tmp6, , ];
  if (product == null) {
    product = null;
  }
  const obj4 = { children: null };
  items[1] = closure_1_11(OrbCheckoutModalComponents.OrbCheckoutOrderSummary, { product });
  items[2] = closure_1_11(OrbCheckoutModalComponents.OrbCheckoutPaymentSourceDetails, { orbBalance: orbBalance.orbBalance });
  obj4.children = items;
  return __initData(Stack_Stack.Stack, obj4);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  const cResult = c.c(3);
  onPress = onPress.onPress;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = closure_1_11(OrbCheckoutModalComponents.OrbCheckoutLegalFinePrint, {});
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== onPress) {
    const obj2 = { children: null };
    const items = [first, ];
    const obj3 = { onPress };
    items[1] = closure_1_11(OrbCheckoutModalComponents.OrbCheckoutPurchaseButton, obj3);
    obj2.children = items;
    const tmp10 = __initData(Stack_Stack.Stack, obj2);
    cResult[1] = onPress;
    cResult[2] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : ((onPress) => {
  const obj = { children: null };
  const items = [closure_1_11(OrbCheckoutModalComponents.OrbCheckoutLegalFinePrint, {}), closure_1_11(OrbCheckoutModalComponents.OrbCheckoutPurchaseButton, { onPress: onPress.onPress })];
  obj.children = items;
  return __initData(Stack_Stack.Stack, obj);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(16);
  let obj = require("c");
  const tmp = _require;
  const orbCheckoutModalContext = require("OrbCheckoutModalContext").useOrbCheckoutModalContext();
  ({ skuId, loadId, analyticsLocations, orbProductContext } = orbCheckoutModalContext);
  let obj2 = require("OrbCheckoutModalContext");
  const virtualCurrencyBalance = require("useVirtualCurrencyBalance").useVirtualCurrencyBalance();
  if (cResult[0] !== skuId) {
    let result = tmp(9995).get1PShopApplicationIdForSKU(skuId);
    cResult[0] = skuId;
    cResult[1] = result;
    let tmp6 = result;
    const tmpResult = tmp(9995);
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== orbProductContext) {
    let tmp10 = null != orbProductContext;
    if (tmp10) {
      const orbPriceAmount = orbProductContext.orbPriceAmount;
      const obj4 = { price: orbPriceAmount, regular_price: null };
      const orbPriceAmount2 = orbProductContext.orbPriceAmount;
      obj4.regular_price = orbPriceAmount2;
      tmp10 = obj4;
    }
    cResult[2] = orbProductContext;
    cResult[3] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === analyticsLocations) {
    if (cResult[5] === loadId) {
      if (cResult[6] === skuId) {
        if (cResult[7] === tmp6) {
          if (cResult[8] === tmp8) {
            if (cResult[9] === virtualCurrencyBalance) {
              let tmp11 = cResult[10];
            }
            closure_1 = tmp11;
            if (cResult[11] === tmp11) {
              if (cResult[12] === arg0) {
                let tmp13 = cResult[13];
              }
              if (cResult[14] !== tmp13) {
                let obj5 = { emitOrbCheckoutPaymentFlowEvent: tmp13 };
                cResult[14] = tmp13;
                cResult[15] = obj5;
                let tmp14 = obj5;
              } else {
                tmp14 = cResult[15];
              }
              return tmp14;
            }
            const fn = function b(arg0, arg1) {
              const diff = Date.now() - closure_0;
              if (arg0 === constants.PAYMENT_FLOW_STARTED) {
                const obj2 = {};
                const merged = Object.assign(closure_1);
                obj2.has_saved_payment_source = false;
                obj2.continue_session_initial_step = null;
                const result = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP(obj2);
              } else if (arg0 === constants.PAYMENT_FLOW_COMPLETED) {
                const obj3 = {};
                const merged1 = Object.assign(closure_1);
                obj3.duration_ms = diff;
                AnalyticsUtilsDefault.track(constants.PAYMENT_FLOW_COMPLETED, obj3);
              } else if (arg0 === constants.PAYMENT_FLOW_SUCCEEDED) {
                const obj6 = {};
                const merged2 = Object.assign(closure_1);
                obj6.duration_ms = diff;
                AnalyticsUtilsDefault.track(constants.PAYMENT_FLOW_SUCCEEDED, obj6);
              } else if (arg0 === constants.PAYMENT_FLOW_CANCELED) {
                const obj8 = {};
                const merged3 = Object.assign(closure_1);
                obj8.duration_ms = diff;
                AnalyticsUtilsDefault.track(constants.PAYMENT_FLOW_CANCELED, obj8);
              } else {
                const obj10 = {};
                const merged4 = Object.assign(closure_1);
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
            };
            cResult[11] = tmp11;
            cResult[12] = arg0;
            cResult[13] = fn;
            tmp13 = fn;
          }
        }
      }
    }
  }
  let obj6 = { load_id: loadId, application_id: tmp6, location_stack: analyticsLocations, sku_id: skuId, currency: constants2.DISCORD_ORB, payment_gateway: InternalPaymentGateways.VIRTUAL_CURRENCY, virtual_currency_balance: virtualCurrencyBalance };
  let merged = Object.assign(tmp8);
  cResult[4] = analyticsLocations;
  cResult[5] = loadId;
  cResult[6] = skuId;
  cResult[7] = tmp6;
  cResult[8] = tmp8;
  cResult[9] = virtualCurrencyBalance;
  cResult[10] = obj6;
  tmp11 = obj6;
  let obj3 = require("useVirtualCurrencyBalance");
}) : ((arg0) => {
  _require = arg0;
  const orbCheckoutModalContext = require("OrbCheckoutModalContext").useOrbCheckoutModalContext();
  const skuId = orbCheckoutModalContext.skuId;
  loadId = orbCheckoutModalContext.loadId;
  const analyticsLocations = orbCheckoutModalContext.analyticsLocations;
  const orbProductContext = orbCheckoutModalContext.orbProductContext;
  let obj = require("OrbCheckoutModalContext");
  const virtualCurrencyBalance = require("useVirtualCurrencyBalance").useVirtualCurrencyBalance();
  const items = [loadId, skuId, analyticsLocations, orbProductContext, virtualCurrencyBalance];
  const tmp3 = closure_7(() => {
    const obj = { load_id: loadId, application_id: VirtualCurrencyUtils.get1PShopApplicationIdForSKU(skuId), location_stack: analyticsLocations, sku_id: skuId, currency: constants2.DISCORD_ORB, payment_gateway: InternalPaymentGateways.VIRTUAL_CURRENCY, virtual_currency_balance: virtualCurrencyBalance };
    let tmp2 = null != orbProductContext;
    if (tmp2) {
      const orbPriceAmount = orbProductContext.orbPriceAmount;
      const obj3 = { price: orbPriceAmount, regular_price: null };
      const orbPriceAmount2 = orbProductContext.orbPriceAmount;
      obj3.regular_price = orbPriceAmount2;
      tmp2 = obj3;
    }
    const merged = Object.assign(tmp2);
    return obj;
  }, items);
  closure_6 = tmp3;
  let obj3 = { emitOrbCheckoutPaymentFlowEvent: null };
  const items1 = [arg0, tmp3];
  obj3.emitOrbCheckoutPaymentFlowEvent = closure_6((arg0, arg1) => {
    const diff = Date.now() - closure_0;
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
  return obj3;
});
function OrbCheckoutModalScreen(startTime) {
  let onRedeemVirtualCurrency;
  let emitOrbCheckoutPaymentFlowEvent;
  let ref;
  const orbCheckoutModalContext = onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[6]).useOrbCheckoutModalContext();
  onRedeemVirtualCurrency = orbCheckoutModalContext.onRedeemVirtualCurrency;
  const orbRedemptionError = orbCheckoutModalContext.orbRedemptionError;
  emitOrbCheckoutPaymentFlowEvent = closure_16(startTime.startTime).emitOrbCheckoutPaymentFlowEvent;
  const obj = onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[6]);
  const virtualCurrencyBalance = onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[10]).useVirtualCurrencyBalance();
  const tmp5 = ref(virtualCurrencyBalance);
  ref = tmp5;
  const items = [emitOrbCheckoutPaymentFlowEvent];
  closure_5(() => {
    emitOrbCheckoutPaymentFlowEvent(constants.PAYMENT_FLOW_STARTED);
  }, items);
  const items1 = [orbRedemptionError, emitOrbCheckoutPaymentFlowEvent];
  closure_5(() => {
    let tmp2 = null != orbRedemptionError;
    if (tmp2) {
      tmp2 = null !== ref.current;
    }
    if (tmp2) {
      emitOrbCheckoutPaymentFlowEvent(constants.PAYMENT_FLOW_FAILED, orbRedemptionError);
      ref.current = null;
    }
  }, items1);
  let current = tmp5.current;
  if (current == null) {
    current = virtualCurrencyBalance;
  }
  const items2 = [emitOrbCheckoutPaymentFlowEvent, virtualCurrencyBalance, onRedeemVirtualCurrency];
  const obj2 = onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[10]);
  const obj3 = { children: null };
  const tmp8 = closure_6(() => {
    emitOrbCheckoutPaymentFlowEvent(constants.PAYMENT_FLOW_COMPLETED);
    closure_4.current = virtualCurrencyBalance;
    onRedeemVirtualCurrency(() => {
      closure_1_2(constants.PAYMENT_FLOW_SUCCEEDED);
      orbRedemptionError(emitOrbCheckoutPaymentFlowEvent[14]).pop();
    });
  }, items2);
  const items3 = [closure_11(onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[16]).ModalContent, { children: closure_11(closure_14, { orbBalance: current }) }), ];
  const obj4 = { children: closure_11(closure_14, { orbBalance: current }) };
  items3[1] = closure_11(onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[17]).ModalFooter, { children: closure_11(closure_15, { onPress: tmp8 }) });
  obj3.children = items3;
  return closure_12(onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[15]).ModalScreen, obj3);
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx");

export default function _default(skuId) {
  skuId = skuId.skuId;
  ({ onCheckoutSuccess: importDefault, analyticsLocations } = skuId);
  let current;
  require("module_38")(null != skuId, "SKU ID is required");
  current = current.useRef(skuId(analyticsLocations[19]).v4()).current;
  const current2 = current.useRef(Date.now()).current;
  let obj = skuId(analyticsLocations[19]);
  const virtualCurrencyBalance = skuId(analyticsLocations[10]).useVirtualCurrencyBalance();
  const items = [analyticsLocations, skuId];
  const effect = current.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, { type: "Orb Checkout Modal", location_stack: analyticsLocations, sku_id: skuId });
  }, items);
  const items1 = [skuId, current, analyticsLocations, current2, virtualCurrencyBalance];
  let obj3 = {};
  const obj4 = { title: null, headerShown: true, headerLeft: null, render: null };
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
  }, items1);
  const intl = skuId(analyticsLocations[20]).intl;
  obj4.title = intl.string(skuId(analyticsLocations[20]).t.q9EGps);
  let obj2 = skuId(analyticsLocations[10]);
  const intl2 = skuId(analyticsLocations[20]).intl;
  obj4.headerLeft = skuId(analyticsLocations[21]).getHeaderTextButton(intl2.string(skuId(analyticsLocations[20]).t["ETE/oC"]), callback);
  obj4.render = function render() {
    const obj = { skuId, loadId: current, onCheckoutSuccess, analyticsLocations, children: closure_2_11(OrbCheckoutModalScreen, { startTime: current2 }) };
    return closure_2_11(OrbCheckoutModalContext.OrbCheckoutModalContextProvider, obj);
  };
  obj3[constants3.MAIN] = obj4;
  return closure_11(skuId(analyticsLocations[22]).Modal, { screens: obj3, initialRouteName: constants3.MAIN, headerTitleAlign: "center" });
};