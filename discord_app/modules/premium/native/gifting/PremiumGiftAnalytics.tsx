// === Module 11031: PremiumGiftAnalytics ===

// Module 11031 (PremiumGiftAnalytics)
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10407 */;
import PaymentFlowStartedTriggerPoint from "PaymentFlowStartedTriggerPoint" /* 10552 */;
import noop from "module_19" /* 19 */;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftAnalytics.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((currentStep) => {
  const cResult = currentStep(productId[3]).c(10);
  currentStep = currentStep.currentStep;
  let obj = currentStep(productId[3]);
  const nativeGiftContext = currentStep(productId[4]).useNativeGiftContext();
  const customGiftMessage = nativeGiftContext.customGiftMessage;
  productId = nativeGiftContext.productId;
  const basePurchaseAnalytics = nativeGiftContext.basePurchaseAnalytics;
  ref = basePurchaseAnalytics.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let _Date = Date;
    let timestamp = Date.now();
    cResult[0] = timestamp;
    let first = timestamp;
  } else {
    first = cResult[0];
  }
  ref = obj3.useRef(first);
  basePurchaseAnalytics.useRef(first);
  if (cResult[1] === basePurchaseAnalytics) {
    if (cResult[2] === currentStep) {
      if (cResult[3] === customGiftMessage) {
        if (cResult[4] === productId) {
          let tmp6 = cResult[5];
          let tmp7 = cResult[6];
        }
        const effect = obj3.useEffect(tmp6, tmp7);
        if (cResult[7] !== basePurchaseAnalytics) {
          class A {
            constructor() {
              return () => { ... };
            }
          }
          const items = [basePurchaseAnalytics, ref];
          cResult[7] = basePurchaseAnalytics;
          cResult[8] = A;
          cResult[9] = items;
          let tmp10 = items;
        } else {
          class A {
            constructor() {
              return () => { ... };
            }
          }
          tmp10 = cResult[9];
        }
        const effect1 = obj3.useEffect(A, tmp10);
        return currentStep.children;
      }
    }
  }
  class E {
    constructor() {
      tmp = currentStep;
      tmp2 = closure_4;
      if (currentStep === closure_4.current) {
        return;
      } else {
        tmp36 = globalThis;
        _Date = Date;
        timestamp = Date.now();
        tmp38 = null;
        if (null != tmp2.current) {
          tmp3 = closure_0;
          tmp4 = closure_2;
          isIOSResult = tmp === closure_0(closure_2[5]).PaymentFlowStep.CONFIRM;
          if (isIOSResult) {
            tmp6 = closure_0;
            tmp7 = closure_2;
            obj = closure_0(closure_2[6]);
            isIOSResult = obj.isIOS();
          }
          if (isIOSResult) {
            tmp8 = closure_1;
            tmp9 = closure_2;
            obj2 = closure_1(closure_2[7]);
            tmp10 = AnalyticEvents;
            obj1 = {};
            tmp11 = closure_0;
            tmp12 = closure_2;
            obj4 = closure_0(closure_2[5]);
            tmp13 = basePurchaseAnalytics;
            obj15 = { subscription_plan_gateway_plan_id: null };
            tmp14 = productId;
            obj15.subscription_plan_gateway_plan_id = productId;
            tmp15 = obj1;
            merged = Object.assign(obj4.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj15));
            tmp17 = customGiftMessage;
            tmp18 = closure_0;
            tmp19 = closure_2;
            intl = closure_0(closure_2[8]).intl;
            tmp20 = closure_0;
            tmp21 = closure_2;
            obj1.is_custom_message_edited = customGiftMessage !== intl.string(closure_0(closure_2[8]).t.ZkOo1U);
            flag = false;
            obj1.is_custom_emoji_sound_available = false;
            trackResult = obj2.track(AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, obj1);
          }
          tmp23 = closure_1;
          tmp24 = closure_2;
          obj6 = closure_1(closure_2[7]);
          tmp25 = AnalyticEvents;
          obj16 = {};
          tmp26 = closure_0;
          tmp27 = closure_2;
          obj8 = closure_0(closure_2[5]);
          tmp28 = basePurchaseAnalytics;
          obj17 = { from_step: null, to_step: null, step_duration_ms: null, flow_duration_ms: null, subscription_plan_gateway_plan_id: null };
          obj17.from_step = tmp2.current;
          obj17.to_step = tmp;
          tmp29 = closure_6;
          obj17.step_duration_ms = timestamp - closure_6.current;
          tmp30 = closure_5;
          obj17.flow_duration_ms = timestamp - closure_5.current;
          tmp31 = productId;
          obj17.subscription_plan_gateway_plan_id = productId;
          tmp32 = obj16;
          merged1 = Object.assign(obj8.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj17));
          trackResult1 = obj6.track(AnalyticEvents.PAYMENT_FLOW_STEP, obj16);
        } else {
          tmp39 = closure_0;
          tmp40 = closure_2;
          obj10 = closure_0(closure_2[9]);
          tmp41 = basePurchaseAnalytics;
          result = obj10.trackPaymentFlowStartedAnalyticsAndCTP(basePurchaseAnalytics);
          tmp43 = closure_1;
          tmp44 = closure_2;
          obj11 = closure_1(closure_2[7]);
          tmp45 = AnalyticEvents;
          obj18 = {};
          tmp46 = closure_0;
          tmp47 = closure_2;
          obj13 = closure_0(closure_2[5]);
          obj19 = { initial_step: null };
          obj19.initial_step = tmp;
          tmp48 = obj18;
          merged2 = Object.assign(obj13.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj19));
          trackResult2 = obj11.track(AnalyticEvents.PAYMENT_FLOW_LOADED, obj18);
        }
        tmp2.current = tmp;
        tmp35 = closure_6;
        closure_6.current = timestamp;
      }
      return;
    }
  }
  const items1 = [basePurchaseAnalytics, currentStep, ref, customGiftMessage, productId];
  cResult[1] = basePurchaseAnalytics;
  cResult[2] = currentStep;
  cResult[3] = customGiftMessage;
  cResult[4] = productId;
  cResult[5] = E;
  cResult[6] = items1;
  tmp7 = items1;
  tmp6 = E;
  let obj2 = currentStep(productId[4]);
}) : ((currentStep) => {
  currentStep = currentStep.currentStep;
  let productId;
  const nativeGiftContext = currentStep(productId[4]).useNativeGiftContext();
  const customGiftMessage = nativeGiftContext.customGiftMessage;
  productId = nativeGiftContext.productId;
  const basePurchaseAnalytics = nativeGiftContext.basePurchaseAnalytics;
  basePurchaseAnalytics.useRef(null);
  let timestamp = Date.now();
  ref = basePurchaseAnalytics.useRef(timestamp);
  basePurchaseAnalytics.useRef(timestamp);
  const items = [basePurchaseAnalytics, currentStep, ref, customGiftMessage, productId];
  const effect = basePurchaseAnalytics.useEffect(() => {
    if (currentStep !== ref.current) {
      const _Date = Date;
      const timestamp = Date.now();
      if (null != ref.current) {
        let isIOSResult = currentStep === PremiumAnalyticsUtils.PaymentFlowStep.CONFIRM;
        if (isIOSResult) {
          isIOSResult = PlatformUtils.isIOS();
        }
        if (isIOSResult) {
          const obj3 = {};
          const obj2 = AnalyticsUtilsDefault;
          const obj5 = { subscription_plan_gateway_plan_id: productId };
          const merged = Object.assign(PremiumAnalyticsUtils.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj5));
          const intl = util.intl;
          obj3.is_custom_message_edited = customGiftMessage !== intl.string(util.t.ZkOo1U);
          obj3.is_custom_emoji_sound_available = false;
          obj2.track(AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, obj3);
        }
        const obj7 = {};
        const obj6 = AnalyticsUtilsDefault;
        const obj9 = { from_step: ref.current, to_step: currentStep, step_duration_ms: timestamp - ref2.current, flow_duration_ms: timestamp - ref.current, subscription_plan_gateway_plan_id: productId };
        const merged1 = Object.assign(PremiumAnalyticsUtils.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj9));
        obj6.track(AnalyticEvents.PAYMENT_FLOW_STEP, obj7);
      } else {
        const result = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP(basePurchaseAnalytics);
        const obj12 = {};
        const obj11 = AnalyticsUtilsDefault;
        const obj14 = { initial_step: currentStep };
        const merged2 = Object.assign(PremiumAnalyticsUtils.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj14));
        obj11.track(AnalyticEvents.PAYMENT_FLOW_LOADED, obj12);
      }
      ref.current = currentStep;
      ref2.current = timestamp;
    }
  }, items);
  const items1 = [basePurchaseAnalytics, ref];
  const effect1 = basePurchaseAnalytics.useEffect(() => () => {
    if (ref.current !== currentStep(productId[5]).PaymentFlowStep.CONFIRM) {
      customGiftMessage(productId[7]).track(ref.PAYMENT_FLOW_CANCELED, basePurchaseAnalytics);
      const obj = customGiftMessage(productId[7]);
    }
  }, items1);
  return currentStep.children;
});