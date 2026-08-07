// discord_app/modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx
import HeaderBackImage from "HeaderBackImage";
import noop from "HeaderBackImage";
import ME from "ME";
import { InternalPaymentGateways } from "sum";
import jsxProd from "set";
import { Stack } from "../../../../design/components/Stack/native/Stack.native.tsx";
import { useFetchCollectiblesProduct } from "../../../collectibles/hooks/useFetchCollectiblesProduct.tsx";
import { useOrbCheckoutModalContextProvider } from "../OrbCheckoutModalContext.tsx";
import { OrbCheckoutErrorCard } from "OrbCheckoutModalComponents.tsx";

let c4;
let c5;
let c9;
let closure_12;
let closure_6;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function OrbCheckoutModalContent(orbBalance) {
  let orbRedemptionError;
  let skuId;
  let obj = useOrbCheckoutModalContextProvider;
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  ({ orbRedemptionError, skuId } = orbCheckoutModalContext);
  let product = useFetchCollectiblesProduct.useFetchCollectiblesProduct(skuId).product;
  let tmp6 = null != orbRedemptionError;
  if (tmp6) {
    obj = { error: null };
    obj[0] = orbRedemptionError.message;
    tmp6 = callback4(tmp(12091).OrbCheckoutErrorCard, obj);
  }
  const items = [tmp6, , ];
  if (product == null) {
    product = null;
  }
  obj = { children: null };
  items[1] = callback4(OrbCheckoutErrorCard.OrbCheckoutOrderSummary, { product });
  items[2] = callback4(OrbCheckoutErrorCard.OrbCheckoutPaymentSourceDetails, { orbBalance: orbBalance.orbBalance });
  obj[0] = items;
  return closure_12(Stack.Stack, obj);
}
function OrbCheckoutModalFooter(onPress) {
  const obj = { children: null };
  const items = [callback4(OrbCheckoutErrorCard.OrbCheckoutLegalFinePrint, {}), callback4(OrbCheckoutErrorCard.OrbCheckoutPurchaseButton, { onPress: onPress.onPress })];
  obj[0] = items;
  return callback5(Stack.Stack, obj);
}
({ useRef: c4, useEffect: c5, useCallback: closure_6, useMemo: error } = noop);
({ AnalyticEvents: metroImportAll, CurrencyCodes: c9 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = { MAIN: "MAIN" };
function OrbCheckoutModalScreen(startTime) {
  startTime = startTime.startTime;
  startTime = undefined;
  let skuId;
  let loadId;
  let virtualCurrencyBalance;
  let orbProductContext;
  let obj = startTime(loadId[4]);
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  const onRedeemVirtualCurrency = orbCheckoutModalContext.onRedeemVirtualCurrency;
  startTime = onRedeemVirtualCurrency;
  const orbRedemptionError = orbCheckoutModalContext.orbRedemptionError;
  skuId = orbRedemptionError;
  skuId = undefined;
  loadId = undefined;
  virtualCurrencyBalance = undefined;
  orbProductContext = undefined;
  let callback;
  let obj1 = startTime(loadId[4]);
  const orbCheckoutModalContext1 = obj1.useOrbCheckoutModalContext();
  skuId = orbCheckoutModalContext1.skuId;
  loadId = orbCheckoutModalContext1.loadId;
  const analyticsLocations = orbCheckoutModalContext1.analyticsLocations;
  virtualCurrencyBalance = analyticsLocations;
  orbProductContext = orbCheckoutModalContext1.orbProductContext;
  const items = [loadId, skuId, analyticsLocations, orbProductContext];
  const tmp5 = callback3(() => {
    let obj = { load_id: loadId, application_id: null, location_stack: null, sku_id: null, currency: null, payment_gateway: null };
    obj[1] = startTime(loadId[8]).get1PShopApplicationIdForSKU(skuId);
    obj[2] = virtualCurrencyBalance;
    obj[3] = skuId;
    obj[4] = outer1_9.DISCORD_ORB;
    obj[5] = outer1_10.VIRTUAL_CURRENCY;
    let tmp2 = null != orbProductContext;
    if (tmp2) {
      const orbPriceAmount = tmp.orbPriceAmount;
      obj = { price: null, regular_price: null };
      obj[0] = orbPriceAmount;
      const orbPriceAmount2 = tmp.orbPriceAmount;
      obj[1] = orbPriceAmount2;
      tmp2 = obj;
    }
    const merged = Object.assign(tmp2);
    return obj;
  }, items);
  callback = tmp5;
  const items1 = [startTime, tmp5];
  const tmp7 = callback2((arg0, arg1) => {
    const diff = Date.now() - startTime;
    if (arg0 === outer1_8.PAYMENT_FLOW_STARTED) {
      let obj = {};
      const merged = Object.assign(c5);
      obj.has_saved_payment_source = false;
      obj.continue_session_initial_step = null;
      const result = startTime(loadId[9]).trackPaymentFlowStartedAnalyticsAndCTP(obj);
      const obj11 = startTime(loadId[9]);
    } else if (arg0 === tmp2.PAYMENT_FLOW_COMPLETED) {
      obj = {};
      const merged1 = Object.assign(c5);
      obj.duration_ms = diff;
      skuId(loadId[10]).track(tmp2.PAYMENT_FLOW_COMPLETED, obj);
      const obj9 = skuId(loadId[10]);
    } else if (arg0 === tmp2.PAYMENT_FLOW_SUCCEEDED) {
      const obj1 = {};
      const merged2 = Object.assign(c5);
      obj1.duration_ms = diff;
      skuId(loadId[10]).track(tmp2.PAYMENT_FLOW_SUCCEEDED, obj1);
      const obj7 = skuId(loadId[10]);
    } else if (arg0 === tmp2.PAYMENT_FLOW_CANCELED) {
      let obj4 = skuId(loadId[10]);
      const obj2 = {};
      const merged3 = Object.assign(c5);
      obj2.duration_ms = diff;
      obj4.track(tmp2.PAYMENT_FLOW_CANCELED, obj2);
    } else {
      obj = skuId(loadId[10]);
      const obj3 = {};
      const merged4 = Object.assign(c5);
      obj3.duration_ms = diff;
      if (null != arg1) {
        obj4 = { payment_error_code: null, error_message: null };
        ({ code: obj4[0], message: obj4[1] } = arg1);
        let obj5 = obj4;
      } else {
        obj5 = {};
      }
      const merged5 = Object.assign(obj5);
      obj.track(tmp2.PAYMENT_FLOW_FAILED, obj3);
    }
  }, items1);
  loadId = tmp7;
  virtualCurrencyBalance = startTime(loadId[11]).useVirtualCurrencyBalance();
  const tmp9 = orbProductContext(virtualCurrencyBalance);
  orbProductContext = tmp9;
  const items2 = [tmp7];
  callback(() => {
    loadId(outer1_8.PAYMENT_FLOW_STARTED);
  }, items2);
  const items3 = [orbRedemptionError, tmp7];
  callback(() => {
    let tmp2 = null != skuId;
    if (tmp2) {
      tmp2 = null !== orbProductContext.current;
    }
    if (tmp2) {
      loadId(outer1_8.PAYMENT_FLOW_FAILED, skuId);
      orbProductContext.current = null;
    }
  }, items3);
  let current = tmp9.current;
  if (current == null) {
    current = virtualCurrencyBalance;
  }
  const items4 = [tmp7, virtualCurrencyBalance, onRedeemVirtualCurrency];
  let obj3 = startTime(loadId[11]);
  const tmp6 = callback2;
  obj = { children: null };
  obj = { children: null };
  obj[0] = callback4(OrbCheckoutModalContent, { orbBalance: current });
  const items5 = [callback4(startTime(loadId[14]).ModalContent, obj), ];
  obj1 = { children: null };
  obj1[0] = callback4(OrbCheckoutModalFooter, {
    onPress: callback2(() => {
      loadId(outer1_8.PAYMENT_FLOW_COMPLETED);
      orbProductContext.current = virtualCurrencyBalance;
      startTime(() => {
        callback(outer1_8.PAYMENT_FLOW_SUCCEEDED);
        let arr = outer1_1(outer1_2[12]);
        arr = arr.pop();
      });
    }, items4)
  });
  items5[1] = callback4(startTime(loadId[15]).ModalFooter, obj1);
  obj[0] = items5;
  return callback5(startTime(loadId[13]).ModalScreen, obj);
}
let result = require("sum").fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx");

export default function _default(skuId) {
  let analyticsLocations;
  let importDefault;
  skuId = skuId.skuId;
  ({ onCheckoutSuccess: importDefault, analyticsLocations } = skuId);
  let current;
  let current2;
  importDefault(analyticsLocations[16])(null != skuId, "SKU ID is required");
  let obj = skuId(analyticsLocations[17]);
  current = current.useRef(obj.v4()).current;
  current2 = current.useRef(Date.now()).current;
  const items = [analyticsLocations, skuId];
  const effect = current.useEffect(() => {
    let obj = outer1_1(analyticsLocations[10]);
    obj = { type: "Orb Checkout Modal", location_stack: analyticsLocations, sku_id: skuId };
    obj.track(outer1_8.OPEN_MODAL, obj);
  }, items);
  const items1 = [skuId, current, analyticsLocations, current2];
  obj = {};
  obj = { title: null, headerShown: true, headerLeft: null, render: null };
  const callback = current.useCallback(() => {
    const timestamp = Date.now();
    let obj = outer1_1(analyticsLocations[10]);
    obj = { load_id: current, application_id: null, location_stack: null, payment_gateway: null, sku_id: null, currency: null, duration_ms: null };
    obj[1] = skuId(analyticsLocations[8]).get1PShopApplicationIdForSKU(skuId);
    obj[2] = analyticsLocations;
    obj[3] = outer1_10.VIRTUAL_CURRENCY;
    obj[4] = skuId;
    obj[5] = outer1_9.DISCORD_ORB;
    obj[6] = timestamp - current2;
    obj.track(outer1_8.PAYMENT_FLOW_CANCELED, obj);
    let arr = outer1_1(analyticsLocations[12]);
    arr = arr.pop();
  }, items1);
  const intl = skuId(analyticsLocations[18]).intl;
  obj[0] = intl.string(skuId(analyticsLocations[18]).t.q9EGps);
  const intl2 = skuId(analyticsLocations[18]).intl;
  obj[2] = skuId(analyticsLocations[19]).getHeaderTextButton(intl2.string(skuId(analyticsLocations[18]).t["ETE/oC"]), callback);
  obj[3] = function render() {
    let obj = { skuId, loadId: current, onCheckoutSuccess: closure_1, analyticsLocations, children: null };
    obj = { startTime: current2 };
    obj[4] = outer1_11(outer1_16, obj);
    return outer1_11(skuId(analyticsLocations[4]).OrbCheckoutModalContextProvider, obj);
  };
  obj[constants.MAIN] = obj;
  return callback4(skuId(analyticsLocations[20]).Modal, { screens: obj, initialRouteName: constants.MAIN, headerTitleAlign: "center" });
};