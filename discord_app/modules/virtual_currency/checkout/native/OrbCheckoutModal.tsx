// discord_app/modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import Constants2 from "../../../../../discord_common/js/shared/Constants.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import VirtualCurrencyUtils from "../../VirtualCurrencyUtils.tsx";
import PaymentFlowStartedTriggerPoint from "../../../experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx";
import useFetchCollectiblesProduct from "../../../collectibles/hooks/useFetchCollectiblesProduct.tsx";
import OrbCheckoutModalContext from "../OrbCheckoutModalContext.tsx";
import OrbCheckoutModalComponents from "OrbCheckoutModalComponents.tsx";
import "react";
import react from "../../../../../_runtime/00019_react.js";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, onPress, orbBalance;

let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ useRef: closure_4, useEffect: hasOwnProperty, useCallback: metroRequire, useMemo: metroImportDefault } = react);
({ AnalyticEvents: metroImportAll, CurrencyCodes: c9 } = Constants);
const InternalPaymentGateways = Constants2.InternalPaymentGateways;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const constants3 = { MAIN: "MAIN" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (orbBalance) => {
      let items;
      let orbRedemptionError;
      let skuId;
      let tmp10;
      let tmp13;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(10);
      orbBalance = orbBalance.orbBalance;
      const obj2 = OrbCheckoutModalContext;
      const orbCheckoutModalContext = obj2.useOrbCheckoutModalContext();
      ({ orbRedemptionError, skuId } = orbCheckoutModalContext);
      const obj3 = useFetchCollectiblesProduct;
      let product = obj3.useFetchCollectiblesProduct(skuId).product;
      if (cResult[0] !== orbRedemptionError) {
        let tmp8 = null != orbRedemptionError;
        if (tmp8) {
          const obj4 = { error: orbRedemptionError.message };
          tmp8 = unpackModuleId(OrbCheckoutModalComponents.OrbCheckoutErrorCard, obj4);
        }
        cResult[0] = orbRedemptionError;
        cResult[1] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      if (product == null) {
        product = null;
      }
      if (cResult[2] !== product) {
        const obj5 = { product };
        const tmp12 = unpackModuleId(OrbCheckoutModalComponents.OrbCheckoutOrderSummary, obj5);
        cResult[2] = product;
        cResult[3] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== orbBalance) {
        const obj6 = { orbBalance };
        const tmp15 = unpackModuleId(OrbCheckoutModalComponents.OrbCheckoutPaymentSourceDetails, obj6);
        cResult[4] = orbBalance;
        cResult[5] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        if (cResult[7] === tmp10) {
          let tmp16;
          if (cResult[8] === tmp13) {
            tmp16 = cResult[9];
          }
          return tmp16;
        }
      }
      const obj7 = { children: items };
      items = [tmp6, tmp10, tmp13];
      const tmp17 = closure_12(Stack_Stack.Stack, obj7);
      cResult[6] = tmp6;
      cResult[7] = tmp10;
      cResult[8] = tmp13;
      cResult[9] = tmp17;
      tmp16 = tmp17;
    }
  : (orbBalance) => {
      let orbRedemptionError;
      let skuId;
      orbBalance = orbBalance.orbBalance;
      const obj = OrbCheckoutModalContext;
      const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
      ({ orbRedemptionError, skuId } = orbCheckoutModalContext);
      const obj2 = useFetchCollectiblesProduct;
      let product = obj2.useFetchCollectiblesProduct(skuId).product;
      let tmp6 = null != orbRedemptionError;
      const Stack = Stack_Stack.Stack;
      if (tmp6) {
        const obj3 = { error: orbRedemptionError.message };
        tmp6 = unpackModuleId(OrbCheckoutModalComponents.OrbCheckoutErrorCard, obj3);
      }
      const items = [tmp6, ,];
      const OrbCheckoutOrderSummary = OrbCheckoutModalComponents.OrbCheckoutOrderSummary;
      if (product == null) {
        product = null;
      }
      const obj4 = { children: items };
      items[1] = unpackModuleId(OrbCheckoutOrderSummary, { product });
      items[2] = unpackModuleId(OrbCheckoutModalComponents.OrbCheckoutPaymentSourceDetails, { orbBalance });
      return closure_12(Stack, obj4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPress) => {
      let first;
      let items;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(3);
      onPress = onPress.onPress;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = unpackModuleId(OrbCheckoutModalComponents.OrbCheckoutLegalFinePrint, {});
        cResult[0] = tmp6;
        first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== onPress) {
        const obj2 = { children: items };
        items = [first];
        const Stack = Stack_Stack.Stack;
        const obj3 = { onPress };
        items[1] = unpackModuleId(OrbCheckoutModalComponents.OrbCheckoutPurchaseButton, obj3);
        const tmp10 = closure_12(Stack, obj2);
        cResult[1] = onPress;
        cResult[2] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[2];
      }
      return tmp7;
    }
  : (onPress) => {
      let items;
      onPress = onPress.onPress;
      const obj = { children: items };
      const Stack = Stack_Stack.Stack;
      items = [
        unpackModuleId(OrbCheckoutModalComponents.OrbCheckoutLegalFinePrint, {}),
        unpackModuleId(OrbCheckoutModalComponents.OrbCheckoutPurchaseButton, { onPress }),
      ];
      return closure_12(Stack, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let analyticsLocations;
      let closure_0;
      let loadId;
      let orbPriceAmount2;
      let orbProductContext;
      let skuId;
      let tmp6;
      let tmp8;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(16);
      let obj2 = require("OrbCheckoutModalContext");
      const orbCheckoutModalContext = obj2.useOrbCheckoutModalContext();
      ({ skuId, loadId, analyticsLocations, orbProductContext } = orbCheckoutModalContext);
      const obj3 = require("useVirtualCurrencyBalance");
      const virtualCurrencyBalance = obj3.useVirtualCurrencyBalance();
      const tmp = _require;
      if (cResult[0] !== skuId) {
        const tmpResult = tmp(9995);
        let result = tmpResult.get1PShopApplicationIdForSKU(skuId);
        cResult[0] = skuId;
        cResult[1] = result;
        tmp6 = result;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== orbProductContext) {
        let tmp10 = null != orbProductContext;
        if (tmp10) {
          const orbPriceAmount = orbProductContext.orbPriceAmount;
          let obj4 = { price: orbPriceAmount, regular_price: orbPriceAmount2 };
          orbPriceAmount2 = orbProductContext.orbPriceAmount;
          tmp10 = obj4;
        }
        cResult[2] = orbProductContext;
        cResult[3] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === analyticsLocations) {
        if (cResult[5] === loadId) {
          if (cResult[6] === skuId) {
            if (cResult[7] === tmp6) {
              if (cResult[8] === tmp8) {
                let tmp11;
                if (cResult[9] === virtualCurrencyBalance) {
                  tmp11 = cResult[10];
                }
                let closure_1 = tmp11;
                if (cResult[11] === tmp11) {
                  let tmp13;
                  let tmp14;
                  if (cResult[12] === arg0) {
                    tmp13 = cResult[13];
                  }
                  if (cResult[14] !== tmp13) {
                    let obj5 = { emitOrbCheckoutPaymentFlowEvent: tmp13 };
                    cResult[14] = tmp13;
                    cResult[15] = obj5;
                    tmp14 = obj5;
                  } else {
                    tmp14 = cResult[15];
                  }
                  return tmp14;
                }
                const fn = function b(arg0, arg1) {
                  const diff = Date.now() - closure_0;
                  if (arg0 === metroImportAll.PAYMENT_FLOW_STARTED) {
                    const obj2 = { has_saved_payment_source: false, continue_session_initial_step: null };
                    const trackPaymentFlowStartedAnalyticsAndCTP =
                      PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP;
                    PaymentFlowStartedTriggerPoint;
                    const merged = Object.assign(closure_1);
                    const result = trackPaymentFlowStartedAnalyticsAndCTP(obj2);
                  } else if (arg0 === metroImportAll.PAYMENT_FLOW_COMPLETED) {
                    const obj4 = { duration_ms: diff };
                    const track4 = AnalyticsUtilsDefault.track;
                    const PAYMENT_FLOW_COMPLETED = metroImportAll.PAYMENT_FLOW_COMPLETED;
                    AnalyticsUtilsDefault;
                    const merged1 = Object.assign(closure_1);
                    track4(PAYMENT_FLOW_COMPLETED, obj4);
                  } else if (arg0 === metroImportAll.PAYMENT_FLOW_SUCCEEDED) {
                    const obj5 = { duration_ms: diff };
                    const track3 = AnalyticsUtilsDefault.track;
                    const PAYMENT_FLOW_SUCCEEDED = metroImportAll.PAYMENT_FLOW_SUCCEEDED;
                    AnalyticsUtilsDefault;
                    const merged2 = Object.assign(closure_1);
                    track3(PAYMENT_FLOW_SUCCEEDED, obj5);
                  } else if (arg0 === metroImportAll.PAYMENT_FLOW_CANCELED) {
                    const obj6 = { duration_ms: diff };
                    const track2 = AnalyticsUtilsDefault.track;
                    const PAYMENT_FLOW_CANCELED = metroImportAll.PAYMENT_FLOW_CANCELED;
                    AnalyticsUtilsDefault;
                    const merged3 = Object.assign(closure_1);
                    track2(PAYMENT_FLOW_CANCELED, obj6);
                  } else {
                    let obj13;
                    const obj = { duration_ms: diff };
                    const track = AnalyticsUtilsDefault.track;
                    const PAYMENT_FLOW_FAILED = metroImportAll.PAYMENT_FLOW_FAILED;
                    AnalyticsUtilsDefault;
                    const merged4 = Object.assign(closure_1);
                    if (null != arg1) {
                      const obj7 = { payment_error_code: null, error_message: null };
                      ({ code: obj3.payment_error_code, message: obj3.error_message } = arg1);
                      obj13 = obj7;
                    } else {
                      obj13 = {};
                    }
                    const merged5 = Object.assign(obj13);
                    track(PAYMENT_FLOW_FAILED, obj);
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
      let obj6 = {
        load_id: loadId,
        application_id: tmp6,
        location_stack: analyticsLocations,
        sku_id: skuId,
        currency: constants2.DISCORD_ORB,
        payment_gateway: InternalPaymentGateways.VIRTUAL_CURRENCY,
        virtual_currency_balance: virtualCurrencyBalance,
      };
      let merged = Object.assign(tmp8);
      cResult[4] = analyticsLocations;
      cResult[5] = loadId;
      cResult[6] = skuId;
      cResult[7] = tmp6;
      cResult[8] = tmp8;
      cResult[9] = virtualCurrencyBalance;
      cResult[10] = obj6;
      tmp11 = obj6;
    }
  : (arg0) => {
      let closure_0;
      let items1;
      let loadId;
      _require = arg0;
      let obj = require("OrbCheckoutModalContext");
      const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
      const skuId = orbCheckoutModalContext.skuId;
      loadId = orbCheckoutModalContext.loadId;
      const analyticsLocations = orbCheckoutModalContext.analyticsLocations;
      const orbProductContext = orbCheckoutModalContext.orbProductContext;
      let obj2 = require("useVirtualCurrencyBalance");
      const virtualCurrencyBalance = obj2.useVirtualCurrencyBalance();
      const items = [loadId, skuId, analyticsLocations, orbProductContext, virtualCurrencyBalance];
      const tmp3 = closure_7(() => {
        let obj2;
        let orbPriceAmount2;
        const obj = {
          load_id: loadId,
          application_id: obj2.get1PShopApplicationIdForSKU(skuId),
          location_stack: analyticsLocations,
          sku_id: skuId,
          currency: constants.DISCORD_ORB,
          payment_gateway: InternalPaymentGateways.VIRTUAL_CURRENCY,
          virtual_currency_balance: virtualCurrencyBalance,
        };
        let tmp2 = null != orbProductContext;
        obj2 = VirtualCurrencyUtils;
        if (tmp2) {
          const orbPriceAmount = orbProductContext.orbPriceAmount;
          const obj3 = { price: orbPriceAmount, regular_price: orbPriceAmount2 };
          orbPriceAmount2 = orbProductContext.orbPriceAmount;
          tmp2 = obj3;
        }
        const merged = Object.assign(tmp2);
        return obj;
      }, items);
      let closure_6 = tmp3;
      let obj3 = {
        emitOrbCheckoutPaymentFlowEvent: closure_6((arg0, arg1) => {
          const diff = Date.now() - closure_0;
          if (arg0 === metroImportAll.PAYMENT_FLOW_STARTED) {
            const obj2 = { has_saved_payment_source: false, continue_session_initial_step: null };
            const trackPaymentFlowStartedAnalyticsAndCTP =
              PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP;
            PaymentFlowStartedTriggerPoint;
            const merged = Object.assign(closure_6);
            const result = trackPaymentFlowStartedAnalyticsAndCTP(obj2);
          } else if (arg0 === metroImportAll.PAYMENT_FLOW_COMPLETED) {
            const obj4 = { duration_ms: diff };
            const track4 = AnalyticsUtilsDefault.track;
            const PAYMENT_FLOW_COMPLETED = metroImportAll.PAYMENT_FLOW_COMPLETED;
            AnalyticsUtilsDefault;
            const merged1 = Object.assign(closure_6);
            track4(PAYMENT_FLOW_COMPLETED, obj4);
          } else if (arg0 === metroImportAll.PAYMENT_FLOW_SUCCEEDED) {
            const obj5 = { duration_ms: diff };
            const track3 = AnalyticsUtilsDefault.track;
            const PAYMENT_FLOW_SUCCEEDED = metroImportAll.PAYMENT_FLOW_SUCCEEDED;
            AnalyticsUtilsDefault;
            const merged2 = Object.assign(closure_6);
            track3(PAYMENT_FLOW_SUCCEEDED, obj5);
          } else if (arg0 === metroImportAll.PAYMENT_FLOW_CANCELED) {
            const obj6 = { duration_ms: diff };
            const track2 = AnalyticsUtilsDefault.track;
            const PAYMENT_FLOW_CANCELED = metroImportAll.PAYMENT_FLOW_CANCELED;
            AnalyticsUtilsDefault;
            const merged3 = Object.assign(closure_6);
            track2(PAYMENT_FLOW_CANCELED, obj6);
          } else {
            let obj13;
            const obj = { duration_ms: diff };
            const track = AnalyticsUtilsDefault.track;
            const PAYMENT_FLOW_FAILED = metroImportAll.PAYMENT_FLOW_FAILED;
            AnalyticsUtilsDefault;
            const merged4 = Object.assign(closure_6);
            if (null != arg1) {
              const obj7 = { payment_error_code: null, error_message: null };
              ({ code: obj3.payment_error_code, message: obj3.error_message } = arg1);
              obj13 = obj7;
            } else {
              obj13 = {};
            }
            const merged5 = Object.assign(obj13);
            track(PAYMENT_FLOW_FAILED, obj);
          }
        }, items1),
      };
      items1 = [arg0, tmp3];
      return obj3;
    };
function OrbCheckoutModalScreen(startTime) {
  let items3;
  let onRedeemVirtualCurrency;
  let emitOrbCheckoutPaymentFlowEvent;
  let ref;
  const tmp = onRedeemVirtualCurrency;
  let tmp2 = emitOrbCheckoutPaymentFlowEvent;
  startTime = startTime.startTime;
  const obj = onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[6]);
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  onRedeemVirtualCurrency = orbCheckoutModalContext.onRedeemVirtualCurrency;
  const orbRedemptionError = orbCheckoutModalContext.orbRedemptionError;
  emitOrbCheckoutPaymentFlowEvent = closure_16(startTime).emitOrbCheckoutPaymentFlowEvent;
  const obj2 = onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[10]);
  const virtualCurrencyBalance = obj2.useVirtualCurrencyBalance();
  const tmp5 = ref(virtualCurrencyBalance);
  ref = tmp5;
  const items = [emitOrbCheckoutPaymentFlowEvent];
  closure_5(() => {
    emitOrbCheckoutPaymentFlowEvent(metroImportAll.PAYMENT_FLOW_STARTED);
  }, items);
  const items1 = [orbRedemptionError, emitOrbCheckoutPaymentFlowEvent];
  closure_5(() => {
    const tmp2 = null != orbRedemptionError && null !== ref.current;
    if (tmp2) {
      emitOrbCheckoutPaymentFlowEvent(metroImportAll.PAYMENT_FLOW_FAILED, orbRedemptionError);
      ref.current = null;
    }
  }, items1);
  let current = tmp5.current;
  if (current == null) {
    current = virtualCurrencyBalance;
  }
  const items2 = [emitOrbCheckoutPaymentFlowEvent, virtualCurrencyBalance, onRedeemVirtualCurrency];
  const obj3 = { children: items3 };
  const tmp8 = closure_6(() => {
    emitOrbCheckoutPaymentFlowEvent(metroImportAll.PAYMENT_FLOW_COMPLETED);
    ref.current = virtualCurrencyBalance;
    onRedeemVirtualCurrency(() => {
      closure_1_2(constants.PAYMENT_FLOW_SUCCEEDED);
      const arr = orbRedemptionError(emitOrbCheckoutPaymentFlowEvent[14]);
      arr.pop();
    });
  }, items2);
  const ModalScreen = tmp(tmp2[15]).ModalScreen;
  const obj4 = { children: closure_11(closure_14, { orbBalance: current }) };
  const ModalContent = tmp(tmp2[16]).ModalContent;
  items3 = [closure_11(ModalContent, obj4)];
  const obj5 = { children: closure_11(closure_15, { onPress: tmp8 }) };
  const ModalFooter = tmp(tmp2[17]).ModalFooter;
  items3[1] = closure_11(ModalFooter, obj5);
  return closure_12(ModalScreen, obj3);
}
let result = size.fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx");

export default function _default(skuId) {
  let analyticsLocations;
  let callback;
  let getHeaderTextButton;
  let intl;
  let intl2;
  let onCheckoutSuccess;
  skuId = skuId.skuId;
  ({ onCheckoutSuccess: importDefault, analyticsLocations } = skuId);
  let current;
  require("../../../../../_runtime/metro/00038__.js")(null != skuId, "SKU ID is required");
  const useRef = current.useRef;
  let obj = skuId(analyticsLocations[19]);
  current = useRef(obj.v4()).current;
  const current2 = current.useRef(Date.now()).current;
  let obj2 = skuId(analyticsLocations[10]);
  const virtualCurrencyBalance = obj2.useVirtualCurrencyBalance();
  const items = [analyticsLocations, skuId];
  const effect = current.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: "Orb Checkout Modal", location_stack: analyticsLocations, sku_id: skuId };
    obj.track(metroImportAll.OPEN_MODAL, obj2);
  }, items);
  const items1 = [skuId, current, analyticsLocations, current2, virtualCurrencyBalance];
  const obj3 = {};
  const obj4 = {
    title: intl.string(skuId(analyticsLocations[20]).t.q9EGps),
    headerShown: true,
    headerLeft: getHeaderTextButton(intl2.string(skuId(analyticsLocations[20]).t["ETE/oC"]), callback),
    render() {
      let obj2;
      const obj = {
        skuId,
        loadId: current,
        onCheckoutSuccess: importDefault,
        analyticsLocations,
        children: unpackModuleId(OrbCheckoutModalScreen, obj2),
      };
      obj2 = { startTime: current2 };
      const OrbCheckoutModalContextProvider = OrbCheckoutModalContext.OrbCheckoutModalContextProvider;
      return unpackModuleId(OrbCheckoutModalContextProvider, obj);
    },
  };
  callback = current.useCallback(() => {
    let obj2;
    const timestamp = Date.now();
    const obj = {
      load_id: current,
      application_id: obj2.get1PShopApplicationIdForSKU(skuId),
      location_stack: analyticsLocations,
      payment_gateway: InternalPaymentGateways.VIRTUAL_CURRENCY,
      sku_id: skuId,
      currency: constants.DISCORD_ORB,
      duration_ms: timestamp - current2,
      virtual_currency_balance: virtualCurrencyBalance,
    };
    const track = AnalyticsUtilsDefault.track;
    const PAYMENT_FLOW_CANCELED = metroImportAll.PAYMENT_FLOW_CANCELED;
    AnalyticsUtilsDefault;
    obj2 = VirtualCurrencyUtils;
    track(PAYMENT_FLOW_CANCELED, obj);
    const arr = ModalActionCreatorsDefault;
    arr.pop();
  }, items1);
  const MAIN = constants3.MAIN;
  intl = skuId(analyticsLocations[20]).intl;
  getHeaderTextButton = skuId(analyticsLocations[21]).getHeaderTextButton;
  skuId(analyticsLocations[21]);
  intl2 = skuId(analyticsLocations[20]).intl;
  obj3[MAIN] = obj4;
  const obj5 = { screens: obj3, initialRouteName: constants3.MAIN, headerTitleAlign: "center" };
  return closure_11(skuId(analyticsLocations[22]).Modal, obj5);
}
