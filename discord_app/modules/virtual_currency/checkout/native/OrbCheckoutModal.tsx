// discord_app/modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import PaymentFlowStartedTriggerPoint from "../../../experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx";
import useFetchCollectiblesProduct from "../../../collectibles/hooks/useFetchCollectiblesProduct.tsx";
import VirtualCurrencyUtils from "../../VirtualCurrencyUtils.tsx";
import OrbCheckoutModalContext from "../OrbCheckoutModalContext.tsx";
import OrbCheckoutModalComponents from "OrbCheckoutModalComponents.tsx";
import "module_19";

const require = globalThis.__r;

require = fn;
function OrbCheckoutModalContent(orbBalance) {
  const orbCheckoutModalContext = OrbCheckoutModalContext.useOrbCheckoutModalContext();
  ({ orbRedemptionError, skuId } = orbCheckoutModalContext);
  let product = useFetchCollectiblesProduct.useFetchCollectiblesProduct(skuId).product;
  let tmp6 = null != orbRedemptionError;
  if (tmp6) {
    const obj3 = { error: orbRedemptionError.message };
    tmp6 = closure_1_11(OrbCheckoutModalComponents.OrbCheckoutErrorCard, obj3);
  }
  const items = [tmp6, ,];
  if (product == null) {
    product = null;
  }
  const obj4 = { children: null };
  items[1] = closure_1_11(OrbCheckoutModalComponents.OrbCheckoutOrderSummary, { product });
  items[2] = closure_1_11(OrbCheckoutModalComponents.OrbCheckoutPaymentSourceDetails, {
    orbBalance: orbBalance.orbBalance,
  });
  obj4.children = items;
  return closure_1_12(Stack_Stack.Stack, obj4);
}
function OrbCheckoutModalFooter(onPress) {
  const obj = { children: null };
  const items = [
    closure_1_11(OrbCheckoutModalComponents.OrbCheckoutLegalFinePrint, {}),
    closure_1_11(OrbCheckoutModalComponents.OrbCheckoutPurchaseButton, { onPress: onPress.onPress }),
  ];
  obj.children = items;
  return closure_1_12(Stack_Stack.Stack, obj);
}
const noop = fn(19);
({ useRef: closure_4, useEffect: hasOwnProperty, useCallback: metroRequire, useMemo: closure_7 } = noop);
const Constants = fn(1074);
({ AnalyticEvents: closure_8, CurrencyCodes: closure_9 } = Constants);
const InternalPaymentGateways = fn(1085).InternalPaymentGateways;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const constants3 = { MAIN: "MAIN" };
function OrbCheckoutModalScreen(startTime) {
  startTime = startTime.startTime;
  let onRedeemVirtualCurrency;
  let ref;
  const orbCheckoutModalContext = onRedeemVirtualCurrency(13467).useOrbCheckoutModalContext();
  onRedeemVirtualCurrency = orbCheckoutModalContext.onRedeemVirtualCurrency;
  const orbRedemptionError = orbCheckoutModalContext.orbRedemptionError;
  closure_129_0 = startTime;
  let obj = onRedeemVirtualCurrency(13467);
  const orbCheckoutModalContext1 = onRedeemVirtualCurrency(13467).useOrbCheckoutModalContext();
  const skuId = orbCheckoutModalContext1.skuId;
  closure_129_1 = skuId;
  const loadId = orbCheckoutModalContext1.loadId;
  closure_129_2 = loadId;
  const analyticsLocations = orbCheckoutModalContext1.analyticsLocations;
  closure_129_3 = analyticsLocations;
  const orbProductContext = orbCheckoutModalContext1.orbProductContext;
  closure_129_4 = orbProductContext;
  const items = [loadId, skuId, analyticsLocations, orbProductContext];
  const tmp5 = closure_7(() => {
    const obj = {
      load_id,
      application_id: VirtualCurrencyUtils.get1PShopApplicationIdForSKU(orbRedemptionError),
      location_stack: virtualCurrencyBalance,
      sku_id: orbRedemptionError,
      currency: constants2.DISCORD_ORB,
      payment_gateway: InternalPaymentGateways.VIRTUAL_CURRENCY,
    };
    let tmp2 = null != closure_4;
    if (tmp2) {
      const orbPriceAmount = closure_4.orbPriceAmount;
      const obj3 = { price: orbPriceAmount, regular_price: null };
      const orbPriceAmount2 = closure_4.orbPriceAmount;
      obj3.regular_price = orbPriceAmount2;
      tmp2 = obj3;
    }
    const merged = Object.assign(tmp2);
    return obj;
  }, items);
  closure_129_5 = tmp5;
  const items1 = [startTime, tmp5];
  const tmp7 = closure_6((arg0, arg1) => {
    const diff = Date.now() - onRedeemVirtualCurrency;
    if (arg0 === constants.PAYMENT_FLOW_STARTED) {
      const obj2 = {};
      const merged = Object.assign(closure_1_5);
      obj2.has_saved_payment_source = false;
      obj2.continue_session_initial_step = null;
      const result = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP(obj2);
    } else if (arg0 === constants.PAYMENT_FLOW_COMPLETED) {
      const obj3 = {};
      const merged1 = Object.assign(closure_1_5);
      obj3.duration_ms = diff;
      AnalyticsUtilsDefault.track(constants.PAYMENT_FLOW_COMPLETED, obj3);
    } else if (arg0 === constants.PAYMENT_FLOW_SUCCEEDED) {
      const obj6 = {};
      const merged2 = Object.assign(closure_1_5);
      obj6.duration_ms = diff;
      AnalyticsUtilsDefault.track(constants.PAYMENT_FLOW_SUCCEEDED, obj6);
    } else if (arg0 === constants.PAYMENT_FLOW_CANCELED) {
      const obj8 = {};
      const merged3 = Object.assign(closure_1_5);
      obj8.duration_ms = diff;
      AnalyticsUtilsDefault.track(constants.PAYMENT_FLOW_CANCELED, obj8);
    } else {
      const obj10 = {};
      const merged4 = Object.assign(closure_1_5);
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
  dependencyMap = tmp7;
  let obj2 = onRedeemVirtualCurrency(13467);
  const virtualCurrencyBalance = onRedeemVirtualCurrency(13469).useVirtualCurrencyBalance();
  const tmp9 = ref(virtualCurrencyBalance);
  ref = tmp9;
  const items2 = [tmp7];
  closure_5(() => {
    load_id(constants.PAYMENT_FLOW_STARTED);
  }, items2);
  const items3 = [orbRedemptionError, tmp7];
  closure_5(() => {
    let tmp2 = null != orbRedemptionError;
    if (tmp2) {
      tmp2 = null !== ref.current;
    }
    if (tmp2) {
      load_id(constants.PAYMENT_FLOW_FAILED, orbRedemptionError);
      ref.current = null;
    }
  }, items3);
  let current = tmp9.current;
  if (current == null) {
    current = virtualCurrencyBalance;
  }
  const items4 = [tmp7, virtualCurrencyBalance, onRedeemVirtualCurrency];
  let obj3 = onRedeemVirtualCurrency(13469);
  const obj4 = { children: null };
  const tmp6Result = closure_6(() => {
    load_id(constants.PAYMENT_FLOW_COMPLETED);
    closure_4.current = virtualCurrencyBalance;
    onRedeemVirtualCurrency(() => {
      dependencyMap(constants.PAYMENT_FLOW_SUCCEEDED);
      orbRedemptionError(4960).pop();
    });
  }, items4);
  const items5 = [
    closure_11(onRedeemVirtualCurrency(8698).ModalContent, {
      children: closure_11(OrbCheckoutModalContent, { orbBalance: current }),
    }),
  ];
  let obj5 = { children: closure_11(OrbCheckoutModalContent, { orbBalance: current }) };
  items5[1] = closure_11(onRedeemVirtualCurrency(12185).ModalFooter, {
    children: closure_11(OrbCheckoutModalFooter, { onPress: tmp6Result }),
  });
  obj4.children = items5;
  return closure_12(onRedeemVirtualCurrency(8697).ModalScreen, obj4);
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx");

export default function _default(skuId) {
  skuId = skuId.skuId;
  ({ onCheckoutSuccess: importDefault, analyticsLocations } = skuId);
  let current;
  require("../../../../../_runtime/metro/00038__.js")(null != skuId, "SKU ID is required");
  current = current.useRef(skuId(analyticsLocations[17]).v4()).current;
  const current2 = current.useRef(Date.now()).current;
  const items = [analyticsLocations, skuId];
  const effect = current.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, {
      type: "Orb Checkout Modal",
      location_stack: analyticsLocations,
      sku_id: skuId,
    });
  }, items);
  const items1 = [skuId, current, analyticsLocations, current2];
  let obj2 = {};
  let obj3 = { title: null, headerShown: true, headerLeft: null, render: null };
  const callback = current.useCallback(() => {
    const timestamp = Date.now();
    const obj2 = {
      load_id: current,
      application_id: null,
      location_stack: null,
      payment_gateway: null,
      sku_id: null,
      currency: null,
      duration_ms: null,
    };
    const obj = AnalyticsUtilsDefault;
    obj2.application_id = VirtualCurrencyUtils.get1PShopApplicationIdForSKU(skuId);
    obj2.location_stack = analyticsLocations;
    obj2.payment_gateway = InternalPaymentGateways.VIRTUAL_CURRENCY;
    obj2.sku_id = skuId;
    obj2.currency = constants2.DISCORD_ORB;
    obj2.duration_ms = timestamp - current2;
    obj.track(constants.PAYMENT_FLOW_CANCELED, obj2);
    ModalActionCreatorsDefault.pop();
  }, items1);
  const intl = skuId(analyticsLocations[18]).intl;
  obj3.title = intl.string(skuId(analyticsLocations[18]).t.q9EGps);
  let obj = skuId(analyticsLocations[17]);
  const intl2 = skuId(analyticsLocations[18]).intl;
  obj3.headerLeft = skuId(analyticsLocations[19]).getHeaderTextButton(
    intl2.string(skuId(analyticsLocations[18]).t["ETE/oC"]),
    callback,
  );
  obj3.render = function render() {
    const obj = {
      skuId,
      loadId: current,
      onCheckoutSuccess,
      analyticsLocations,
      children: closure_2_11(OrbCheckoutModalScreen, { startTime: current2 }),
    };
    return closure_2_11(OrbCheckoutModalContext.OrbCheckoutModalContextProvider, obj);
  };
  obj2[constants3.MAIN] = obj3;
  return closure_11(skuId(analyticsLocations[20]).Modal, {
    screens: obj2,
    initialRouteName: constants3.MAIN,
    headerTitleAlign: "center",
  });
}
