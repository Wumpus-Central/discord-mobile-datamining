// discord_app/modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx
import Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import useFetchCollectiblesProduct from "../../../collectibles/hooks/useFetchCollectiblesProduct.tsx";
import useOrbCheckoutModalContextProvider from "../OrbCheckoutModalContext.tsx";
import OrbCheckoutErrorCard from "OrbCheckoutModalComponents.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import noop from "../../../../../_runtime/00019_noop.js";
import ME from "../../../../Constants.tsx";
import { InternalPaymentGateways } from "../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
function OrbCheckoutModalContent(orbBalance) {
  let obj = useOrbCheckoutModalContextProvider;
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  ({ orbRedemptionError, skuId } = orbCheckoutModalContext);
  let product = useFetchCollectiblesProduct.useFetchCollectiblesProduct(skuId).product;
  let tmp6 = null != orbRedemptionError;
  if (tmp6) {
    obj = { error: null };
    obj[0] = orbRedemptionError.message;
    tmp6 = callback5(tmp(12433).OrbCheckoutErrorCard, obj);
  }
  const items = [tmp6, , ];
  if (product == null) {
    product = null;
  }
  obj = { children: null };
  items[1] = callback5(OrbCheckoutErrorCard.OrbCheckoutOrderSummary, { product });
  items[2] = callback5(OrbCheckoutErrorCard.OrbCheckoutPaymentSourceDetails, { orbBalance: orbBalance.orbBalance });
  obj[0] = items;
  return closure_12(Stack.Stack, obj);
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
  startTime = startTime.startTime;
  startTime = undefined;
  let skuId;
  dependencyMap = undefined;
  let virtualCurrencyBalance;
  let callback;
  let obj = startTime(12432);
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  const onRedeemVirtualCurrency = orbCheckoutModalContext.onRedeemVirtualCurrency;
  startTime = onRedeemVirtualCurrency;
  const orbRedemptionError = orbCheckoutModalContext.orbRedemptionError;
  skuId = orbRedemptionError;
  skuId = undefined;
  dependencyMap = undefined;
  virtualCurrencyBalance = undefined;
  callback = undefined;
  let callback2;
  obj1 = startTime(12432);
  const orbCheckoutModalContext1 = obj1.useOrbCheckoutModalContext();
  skuId = orbCheckoutModalContext1.skuId;
  const loadId = orbCheckoutModalContext1.loadId;
  dependencyMap = loadId;
  const analyticsLocations = orbCheckoutModalContext1.analyticsLocations;
  virtualCurrencyBalance = analyticsLocations;
  const orbProductContext = orbCheckoutModalContext1.orbProductContext;
  callback = orbProductContext;
  const items = [loadId, skuId, analyticsLocations, orbProductContext];
  const tmp5 = callback4(() => {
    let obj = { load_id: dependencyMap, application_id: startTime(10605).get1PShopApplicationIdForSKU(skuId), location_stack: virtualCurrencyBalance, sku_id: skuId, currency: closure_1_9.DISCORD_ORB, payment_gateway: closure_1_10.VIRTUAL_CURRENCY };
    let tmp2 = null != closure_4;
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
  callback2 = tmp5;
  const items1 = [startTime, tmp5];
  const tmp7 = callback3((arg0, arg1) => {
    const diff = Date.now() - startTime;
    if (arg0 === closure_1_8.PAYMENT_FLOW_STARTED) {
      let obj = {};
      const merged = Object.assign(closure_5);
      obj.has_saved_payment_source = false;
      obj.continue_session_initial_step = null;
      const result = startTime(7584).trackPaymentFlowStartedAnalyticsAndCTP(obj);
      const obj11 = startTime(7584);
    } else if (arg0 === tmp2.PAYMENT_FLOW_COMPLETED) {
      obj = {};
      const merged1 = Object.assign(closure_5);
      obj.duration_ms = diff;
      skuId(698).track(tmp2.PAYMENT_FLOW_COMPLETED, obj);
      const obj9 = skuId(698);
    } else if (arg0 === tmp2.PAYMENT_FLOW_SUCCEEDED) {
      obj1 = {};
      const merged2 = Object.assign(closure_5);
      obj1.duration_ms = diff;
      skuId(698).track(tmp2.PAYMENT_FLOW_SUCCEEDED, obj1);
      const obj7 = skuId(698);
    } else if (arg0 === tmp2.PAYMENT_FLOW_CANCELED) {
      let obj4 = skuId(698);
      const obj2 = {};
      const merged3 = Object.assign(closure_5);
      obj2.duration_ms = diff;
      obj4.track(tmp2.PAYMENT_FLOW_CANCELED, obj2);
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
      obj.track(tmp2.PAYMENT_FLOW_FAILED, obj3);
    }
  }, items1);
  dependencyMap = tmp7;
  virtualCurrencyBalance = startTime(12434).useVirtualCurrencyBalance();
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
  let obj3 = startTime(12434);
  const tmp6 = callback3;
  obj = { children: null };
  obj = { children: callback5(OrbCheckoutModalContent, { orbBalance: current }) };
  const items5 = [callback5(startTime(8020).ModalContent, obj), ];
  obj1 = {
    children: callback5(OrbCheckoutModalFooter, {
      onPress: callback3(() => {
        dependencyMap(closure_1_8.PAYMENT_FLOW_COMPLETED);
        closure_4.current = virtualCurrencyBalance;
        startTime(() => {
          callback(closure_1_8.PAYMENT_FLOW_SUCCEEDED);
          let arr = closure_1_1(closure_1_2[12]);
          arr = arr.pop();
        });
      }, items4)
    })
  };
  items5[1] = callback5(startTime(11567).ModalFooter, obj1);
  obj[0] = items5;
  return callback6(startTime(8019).ModalScreen, obj);
}
let result = require("set").fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx");

export default function _default(skuId) {
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
    let obj = closure_1_1(analyticsLocations[10]);
    obj = { type: "Orb Checkout Modal", location_stack: analyticsLocations, sku_id: skuId };
    obj.track(closure_1_8.OPEN_MODAL, obj);
  }, items);
  const items1 = [skuId, current, analyticsLocations, current2];
  obj = {};
  obj = { title: null, headerShown: true, headerLeft: null, render: null };
  const callback = current.useCallback(() => {
    const timestamp = Date.now();
    let obj = closure_1_1(analyticsLocations[10]);
    obj = { load_id: current, application_id: skuId(analyticsLocations[8]).get1PShopApplicationIdForSKU(skuId), location_stack: analyticsLocations, payment_gateway: closure_1_10.VIRTUAL_CURRENCY, sku_id: skuId, currency: closure_1_9.DISCORD_ORB, duration_ms: timestamp - current2 };
    obj.track(closure_1_8.PAYMENT_FLOW_CANCELED, obj);
    let arr = closure_1_1(analyticsLocations[12]);
    arr = arr.pop();
  }, items1);
  const intl = skuId(analyticsLocations[18]).intl;
  obj[0] = intl.string(skuId(analyticsLocations[18]).t.q9EGps);
  const intl2 = skuId(analyticsLocations[18]).intl;
  obj[2] = skuId(analyticsLocations[19]).getHeaderTextButton(intl2.string(skuId(analyticsLocations[18]).t["ETE/oC"]), callback);
  obj[3] = function render() {
    let obj = { skuId, loadId: current, onCheckoutSuccess: closure_1, analyticsLocations, children: null };
    obj = { startTime: current2 };
    obj[4] = closure_1_11(closure_1_16, obj);
    return closure_1_11(skuId(analyticsLocations[4]).OrbCheckoutModalContextProvider, obj);
  };
  obj[constants.MAIN] = obj;
  return callback5(skuId(analyticsLocations[20]).Modal, { screens: obj, initialRouteName: constants.MAIN, headerTitleAlign: "center" });
};