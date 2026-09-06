// === Module 13152: OrbCheckoutModal ===

// Module 13152 (OrbCheckoutModal)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import PaymentFlowStartedTriggerPoint from "PaymentFlowStartedTriggerPoint" /* 10808 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 11042 */;
import VirtualCurrencyUtils from "VirtualCurrencyUtils" /* 11280 */;
import OrbCheckoutModalContext from "OrbCheckoutModalContext" /* 13153 */;
import OrbCheckoutModalComponents from "OrbCheckoutModalComponents" /* 13154 */;
import "module_19";

require = fn;
function OrbCheckoutModalContent(orbBalance) {
  let obj = OrbCheckoutModalContext;
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  ({ orbRedemptionError, skuId } = orbCheckoutModalContext);
  let product = useFetchCollectiblesProduct.useFetchCollectiblesProduct(skuId).product;
  let tmp6 = null != orbRedemptionError;
  if (tmp6) {
    obj = { error: orbRedemptionError.message };
    tmp6 = closure_1_11(OrbCheckoutModalComponents.OrbCheckoutErrorCard, obj);
  }
  const items = [tmp6, , ];
  if (product == null) {
    product = null;
  }
  obj = { children: null };
  items[1] = closure_1_11(OrbCheckoutModalComponents.OrbCheckoutOrderSummary, { product });
  items[2] = closure_1_11(OrbCheckoutModalComponents.OrbCheckoutPaymentSourceDetails, { orbBalance: orbBalance.orbBalance });
  obj.children = items;
  return closure_1_12(Stack_Stack.Stack, obj);
}
function OrbCheckoutModalFooter(onPress) {
  const obj = { children: null };
  const items = [closure_1_11(OrbCheckoutModalComponents.OrbCheckoutLegalFinePrint, {}), closure_1_11(OrbCheckoutModalComponents.OrbCheckoutPurchaseButton, { onPress: onPress.onPress })];
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
  let obj = onRedeemVirtualCurrency(13153);
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  onRedeemVirtualCurrency = orbCheckoutModalContext.onRedeemVirtualCurrency;
  const orbRedemptionError = orbCheckoutModalContext.orbRedemptionError;
  closure_129_0 = startTime;
  let obj1 = onRedeemVirtualCurrency(13153);
  const orbCheckoutModalContext1 = obj1.useOrbCheckoutModalContext();
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
    let obj = { load_id, application_id: VirtualCurrencyUtils.get1PShopApplicationIdForSKU(orbRedemptionError), location_stack: virtualCurrencyBalance, sku_id: orbRedemptionError, currency: constants2.DISCORD_ORB, payment_gateway: InternalPaymentGateways.VIRTUAL_CURRENCY };
    let tmp2 = null != closure_4;
    if (tmp2) {
      const orbPriceAmount = closure_4.orbPriceAmount;
      obj = { price: orbPriceAmount, regular_price: null };
      const orbPriceAmount2 = closure_4.orbPriceAmount;
      obj.regular_price = orbPriceAmount2;
      tmp2 = obj;
    }
    const merged = Object.assign(tmp2);
    return obj;
  }, items);
  closure_129_5 = tmp5;
  const items1 = [startTime, tmp5];
  const tmp7 = closure_6((arg0, arg1) => {
    const diff = Date.now() - onRedeemVirtualCurrency;
    if (arg0 === constants.PAYMENT_FLOW_STARTED) {
      let obj = {};
      const merged = Object.assign(closure_1_5);
      obj.has_saved_payment_source = false;
      obj.continue_session_initial_step = null;
      const result = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP(obj);
    } else if (arg0 === constants.PAYMENT_FLOW_COMPLETED) {
      obj = {};
      const merged1 = Object.assign(closure_1_5);
      obj.duration_ms = diff;
      AnalyticsUtilsDefault.track(constants.PAYMENT_FLOW_COMPLETED, obj);
    } else if (arg0 === constants.PAYMENT_FLOW_SUCCEEDED) {
      const obj1 = {};
      const merged2 = Object.assign(closure_1_5);
      obj1.duration_ms = diff;
      AnalyticsUtilsDefault.track(constants.PAYMENT_FLOW_SUCCEEDED, obj1);
    } else if (arg0 === constants.PAYMENT_FLOW_CANCELED) {
      let obj4 = AnalyticsUtilsDefault;
      const obj2 = {};
      const merged3 = Object.assign(closure_1_5);
      obj2.duration_ms = diff;
      obj4.track(constants.PAYMENT_FLOW_CANCELED, obj2);
    } else {
      obj = AnalyticsUtilsDefault;
      const obj3 = {};
      const merged4 = Object.assign(closure_1_5);
      obj3.duration_ms = diff;
      if (null != arg1) {
        obj4 = { payment_error_code: null, error_message: null };
        ({ code: obj4.payment_error_code, message: obj4.error_message } = arg1);
        let obj5 = obj4;
      } else {
        obj5 = {};
      }
      const merged5 = Object.assign(obj5);
      obj.track(constants.PAYMENT_FLOW_FAILED, obj3);
    }
  }, items1);
  dependencyMap = tmp7;
  const virtualCurrencyBalance = onRedeemVirtualCurrency(13155).useVirtualCurrencyBalance();
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
  let obj3 = onRedeemVirtualCurrency(13155);
  obj = { children: null };
  obj = { children: closure_11(OrbCheckoutModalContent, { orbBalance: current }) };
  const items5 = [closure_11(onRedeemVirtualCurrency(8422).ModalContent, obj), ];
  obj1 = {
    children: closure_11(OrbCheckoutModalFooter, {
      onPress: closure_6(() => {
        load_id(constants.PAYMENT_FLOW_COMPLETED);
        closure_4.current = virtualCurrencyBalance;
        onRedeemVirtualCurrency(() => {
          dependencyMap(constants.PAYMENT_FLOW_SUCCEEDED);
          let arr = orbRedemptionError(4763);
          arr = arr.pop();
        });
      }, items4)
    })
  };
  items5[1] = closure_11(onRedeemVirtualCurrency(11926).ModalFooter, obj1);
  obj.children = items5;
  return closure_12(onRedeemVirtualCurrency(8421).ModalScreen, obj);
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx");

export default function _default(skuId) {
  skuId = skuId.skuId;
  ({ onCheckoutSuccess: importDefault, analyticsLocations } = skuId);
  let current;
  require("module_38")(null != skuId, "SKU ID is required");
  let obj = skuId(analyticsLocations[17]);
  current = current.useRef(obj.v4()).current;
  const current2 = current.useRef(Date.now()).current;
  const items = [analyticsLocations, skuId];
  const effect = current.useEffect(() => {
    const obj = { type: "Orb Checkout Modal", location_stack: analyticsLocations, sku_id: skuId };
    obj.track(constants.OPEN_MODAL, obj);
  }, items);
  const items1 = [skuId, current, analyticsLocations, current2];
  obj = {};
  obj = { title: null, headerShown: true, headerLeft: null, render: null };
  const callback = current.useCallback(() => {
    const timestamp = Date.now();
    const obj = { load_id: current, application_id: VirtualCurrencyUtils.get1PShopApplicationIdForSKU(skuId), location_stack: analyticsLocations, payment_gateway: InternalPaymentGateways.VIRTUAL_CURRENCY, sku_id: skuId, currency: constants2.DISCORD_ORB, duration_ms: timestamp - current2 };
    obj.track(constants.PAYMENT_FLOW_CANCELED, obj);
    let arr = ModalActionCreatorsDefault;
    arr = arr.pop();
  }, items1);
  const intl = skuId(analyticsLocations[18]).intl;
  obj.title = intl.string(skuId(analyticsLocations[18]).t.q9EGps);
  const intl2 = skuId(analyticsLocations[18]).intl;
  obj.headerLeft = skuId(analyticsLocations[19]).getHeaderTextButton(intl2.string(skuId(analyticsLocations[18]).t["ETE/oC"]), callback);
  obj.render = function render() {
    let obj = { skuId, loadId: current, onCheckoutSuccess, analyticsLocations, children: null };
    obj = { startTime: current2 };
    obj.children = closure_2_11(OrbCheckoutModalScreen, obj);
    return closure_2_11(OrbCheckoutModalContext.OrbCheckoutModalContextProvider, obj);
  };
  obj[constants3.MAIN] = obj;
  return closure_11(skuId(analyticsLocations[20]).Modal, { screens: obj, initialRouteName: constants3.MAIN, headerTitleAlign: "center" });
};