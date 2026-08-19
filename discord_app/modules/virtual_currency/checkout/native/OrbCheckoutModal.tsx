// === Module 11985: OrbCheckoutModalContent ===

// Module 11985 (OrbCheckoutModalContent)
import Stack from "Stack" /* 4733 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 10376 */;
import useOrbCheckoutModalContextProvider from "useOrbCheckoutModalContextProvider" /* 11986 */;
import OrbCheckoutErrorCard from "OrbCheckoutErrorCard" /* 11987 */;
import noop2 from "noop" /* 19 */;
import noop from "noop" /* 19 */;
import ME from "ME" /* 676 */;
import { InternalPaymentGateways } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;

require = fn;
function OrbCheckoutModalContent(orbBalance) {
  let obj = useOrbCheckoutModalContextProvider;
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  ({ orbRedemptionError, skuId } = orbCheckoutModalContext);
  let product = useFetchCollectiblesProduct.useFetchCollectiblesProduct(skuId).product;
  let tmp6 = null != orbRedemptionError;
  if (tmp6) {
    obj = { error: null };
    obj[0] = orbRedemptionError.message;
    tmp6 = callback5(OrbCheckoutErrorCard.OrbCheckoutErrorCard, obj);
  }
  const items = [tmp6, , ];
  if (product == null) {
    product = null;
  }
  obj = { children: null };
  items[1] = callback5(OrbCheckoutErrorCard.OrbCheckoutOrderSummary, { product });
  items[2] = callback5(OrbCheckoutErrorCard.OrbCheckoutPaymentSourceDetails, { orbBalance: orbBalance.orbBalance });
  obj[0] = items;
  return callback(Stack.Stack, obj);
}
function OrbCheckoutModalFooter(onPress) {
  const obj = { children: null };
  const items = [callback5(OrbCheckoutErrorCard.OrbCheckoutLegalFinePrint, {}), callback5(OrbCheckoutErrorCard.OrbCheckoutPurchaseButton, { onPress: onPress.onPress })];
  obj[0] = items;
  return callback6(Stack.Stack, obj);
}
({ useRef: c4, useEffect: c5, useCallback: closure_6, useMemo: error } = noop);
({ AnalyticEvents: closure_8, CurrencyCodes: c9 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = { MAIN: "MAIN" };
function OrbCheckoutModalScreen(startTime) {
  startTime = undefined;
  let obj = startTime(11986);
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  const onRedeemVirtualCurrency = orbCheckoutModalContext.onRedeemVirtualCurrency;
  startTime = onRedeemVirtualCurrency;
  const orbRedemptionError = orbCheckoutModalContext.orbRedemptionError;
  obj1 = startTime(11986);
  const orbCheckoutModalContext1 = obj1.useOrbCheckoutModalContext();
  const skuId = orbCheckoutModalContext1.skuId;
  const loadId = orbCheckoutModalContext1.loadId;
  const analyticsLocations = orbCheckoutModalContext1.analyticsLocations;
  const orbProductContext = orbCheckoutModalContext1.orbProductContext;
  let callback = orbProductContext;
  const items = [loadId, skuId, analyticsLocations, orbProductContext];
  const tmp5 = callback4(() => {
    let obj = { load_id: dependencyMap, application_id: startTime(10481).get1PShopApplicationIdForSKU(skuId), location_stack: virtualCurrencyBalance, sku_id: skuId, currency: closure_1_9.DISCORD_ORB, payment_gateway: InternalPaymentGateways.VIRTUAL_CURRENCY };
    let tmp2 = null != closure_4;
    if (tmp2) {
      const orbPriceAmount = closure_4.orbPriceAmount;
      obj = { price: null, regular_price: null };
      obj[0] = orbPriceAmount;
      const orbPriceAmount2 = closure_4.orbPriceAmount;
      obj[1] = orbPriceAmount2;
      tmp2 = obj;
    }
    const merged = Object.assign(tmp2);
    return obj;
  }, items);
  const callback2 = tmp5;
  const items1 = [startTime, tmp5];
  const tmp7 = callback3((arg0, arg1) => {
    const diff = Date.now() - startTime;
    if (arg0 === closure_1_8.PAYMENT_FLOW_STARTED) {
      let obj = {};
      const merged = Object.assign(closure_5);
      obj.has_saved_payment_source = false;
      obj.continue_session_initial_step = null;
      const result = startTime(7659).trackPaymentFlowStartedAnalyticsAndCTP(obj);
      const obj11 = startTime(7659);
    } else if (arg0 === closure_1_8.PAYMENT_FLOW_COMPLETED) {
      obj = {};
      const merged1 = Object.assign(closure_5);
      obj.duration_ms = diff;
      skuId(698).track(closure_1_8.PAYMENT_FLOW_COMPLETED, obj);
      const obj9 = skuId(698);
    } else if (arg0 === closure_1_8.PAYMENT_FLOW_SUCCEEDED) {
      obj1 = {};
      const merged2 = Object.assign(closure_5);
      obj1.duration_ms = diff;
      skuId(698).track(closure_1_8.PAYMENT_FLOW_SUCCEEDED, obj1);
      const obj7 = skuId(698);
    } else if (arg0 === closure_1_8.PAYMENT_FLOW_CANCELED) {
      let obj4 = skuId(698);
      const obj2 = {};
      const merged3 = Object.assign(closure_5);
      obj2.duration_ms = diff;
      obj4.track(closure_1_8.PAYMENT_FLOW_CANCELED, obj2);
    } else {
      obj = skuId(698);
      const obj3 = {};
      const merged4 = Object.assign(closure_5);
      obj3.duration_ms = diff;
      if (null != arg1) {
        obj4 = { payment_error_code: null, error_message: null };
        ({ code: obj4[0], message: obj4[1] } = arg1);
        let obj5 = obj4;
      } else {
        obj5 = {};
      }
      const merged5 = Object.assign(obj5);
      obj.track(closure_1_8.PAYMENT_FLOW_FAILED, obj3);
    }
  }, items1);
  dependencyMap = tmp7;
  const virtualCurrencyBalance = startTime(11988).useVirtualCurrencyBalance();
  const tmp9 = callback(virtualCurrencyBalance);
  callback = tmp9;
  const items2 = [tmp7];
  callback2(() => {
    dependencyMap(closure_1_8.PAYMENT_FLOW_STARTED);
  }, items2);
  const items3 = [orbRedemptionError, tmp7];
  callback2(() => {
    let tmp2 = null != skuId;
    if (tmp2) {
      tmp2 = null !== ref.current;
    }
    if (tmp2) {
      dependencyMap(closure_1_8.PAYMENT_FLOW_FAILED, skuId);
      ref.current = null;
    }
  }, items3);
  let current = tmp9.current;
  if (current == null) {
    current = virtualCurrencyBalance;
  }
  const items4 = [tmp7, virtualCurrencyBalance, onRedeemVirtualCurrency];
  let obj3 = startTime(11988);
  obj = { children: callback5(OrbCheckoutModalContent, { orbBalance: current }) };
  const items5 = [callback5(startTime(5445).ModalContent, obj), ];
  obj1 = {
    children: callback5(OrbCheckoutModalFooter, {
      onPress: callback3(() => {
        dependencyMap(closure_1_8.PAYMENT_FLOW_COMPLETED);
        closure_4.current = virtualCurrencyBalance;
        startTime(() => {
          callback(closure_1_8.PAYMENT_FLOW_SUCCEEDED);
          let arr = skuId(closure_1_2[12]);
          arr = arr.pop();
        });
      }, items4)
    })
  };
  items5[1] = callback5(startTime(11114).ModalFooter, obj1);
  obj[0] = items5;
  return callback6(startTime(5440).ModalScreen, obj);
}
let result = require("obj132").fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx");

export default function _default(skuId) {
  skuId = skuId.skuId;
  ({ onCheckoutSuccess: importDefault, analyticsLocations } = skuId);
  let current;
  importDefault(analyticsLocations[16])(null != skuId, "SKU ID is required");
  let obj = skuId(analyticsLocations[17]);
  current = current.useRef(obj.v4()).current;
  const current2 = current.useRef(Date.now()).current;
  const items = [analyticsLocations, skuId];
  const effect = current.useEffect(() => {
    importDefault(analyticsLocations[10]);
    const obj = { type: "Orb Checkout Modal", location_stack: analyticsLocations, sku_id: skuId };
    obj.track(closure_1_8.OPEN_MODAL, obj);
  }, items);
  const items1 = [skuId, current, analyticsLocations, current2];
  obj = { title: null, headerShown: true, headerLeft: null, render: null };
  const callback = current.useCallback(() => {
    const timestamp = Date.now();
    importDefault(analyticsLocations[10]);
    const obj = { load_id: current, application_id: skuId(analyticsLocations[8]).get1PShopApplicationIdForSKU(skuId), location_stack: analyticsLocations, payment_gateway: InternalPaymentGateways.VIRTUAL_CURRENCY, sku_id: skuId, currency: closure_1_9.DISCORD_ORB, duration_ms: timestamp - current2 };
    obj.track(closure_1_8.PAYMENT_FLOW_CANCELED, obj);
    let arr = importDefault(analyticsLocations[12]);
    arr = arr.pop();
  }, items1);
  const intl = skuId(analyticsLocations[18]).intl;
  obj[0] = intl.string(skuId(analyticsLocations[18]).t.q9EGps);
  const intl2 = skuId(analyticsLocations[18]).intl;
  obj[2] = skuId(analyticsLocations[19]).getHeaderTextButton(intl2.string(skuId(analyticsLocations[18]).t["ETE/oC"]), callback);
  obj[3] = function render() {
    const obj = { startTime: current2 };
    obj[4] = closure_1_11(OrbCheckoutModalScreen, obj);
    return closure_1_11(skuId(analyticsLocations[4]).OrbCheckoutModalContextProvider, obj);
  };
  obj[constants.MAIN] = obj;
  return callback5(skuId(analyticsLocations[20]).Modal, { screens: obj, initialRouteName: constants.MAIN, headerTitleAlign: "center" });
};