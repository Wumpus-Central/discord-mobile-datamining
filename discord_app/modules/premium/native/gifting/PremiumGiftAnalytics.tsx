// === Module 10821: PremiumGiftAnalytics ===

// Module 10821 (PremiumGiftAnalytics)
import closure_3 from "noop" /* 19 */;
import { AnalyticEvents } from "ME" /* 676 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftAnalytics.tsx");

export default function PremiumGiftAnalytics(currentStep) {
  currentStep = currentStep.currentStep;
  let customGiftMessage;
  let productId;
  let basePurchaseAnalytics;
  let ref;
  closure_5 = undefined;
  closure_6 = undefined;
  const nativeGiftContext = currentStep(productId[2]).useNativeGiftContext();
  customGiftMessage = nativeGiftContext.customGiftMessage;
  productId = nativeGiftContext.productId;
  basePurchaseAnalytics = nativeGiftContext.basePurchaseAnalytics;
  ref = basePurchaseAnalytics.useRef(null);
  let timestamp = Date.now();
  closure_5 = basePurchaseAnalytics.useRef(timestamp);
  closure_6 = basePurchaseAnalytics.useRef(timestamp);
  const items = [basePurchaseAnalytics, currentStep, ref, customGiftMessage, productId];
  const effect = basePurchaseAnalytics.useEffect(() => {
    if (currentStep !== ref.current) {
      const _Date = Date;
      const timestamp = Date.now();
      if (null != tmp2.current) {
        let isIOSResult = tmp === currentStep(productId[3]).PaymentFlowStep.CONFIRM;
        if (isIOSResult) {
          let obj = currentStep(productId[4]);
          isIOSResult = obj.isIOS();
        }
        if (isIOSResult) {
          obj1 = customGiftMessage(productId[5]);
          obj = {};
          let obj3 = currentStep(productId[3]);
          obj = { subscription_plan_gateway_plan_id: null };
          obj[0] = productId;
          const merged = Object.assign(obj3.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj));
          const intl = currentStep(productId[6]).intl;
          obj.is_custom_message_edited = customGiftMessage !== intl.string(currentStep(productId[6]).t.ZkOo1U);
          obj.is_custom_emoji_sound_available = false;
          obj1.track(ref.PAYMENT_FLOW_SUCCEEDED, obj);
        }
        obj1 = {};
        const obj6 = customGiftMessage(productId[5]);
        const obj2 = { from_step: null, to_step: null, step_duration_ms: null, flow_duration_ms: null, subscription_plan_gateway_plan_id: null };
        obj2[0] = tmp2.current;
        obj2[1] = tmp;
        obj2[2] = timestamp - ref2.current;
        obj2[3] = timestamp - ref.current;
        obj2[4] = productId;
        const merged1 = Object.assign(currentStep(productId[3]).getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj2));
        obj6.track(ref.PAYMENT_FLOW_STEP, obj1);
        const obj8 = currentStep(productId[3]);
      } else {
        const result = currentStep(productId[7]).trackPaymentFlowStartedAnalyticsAndCTP(basePurchaseAnalytics);
        const obj10 = currentStep(productId[7]);
        obj3 = {};
        const obj11 = customGiftMessage(productId[5]);
        const obj4 = { initial_step: null };
        obj4[0] = tmp;
        const merged2 = Object.assign(currentStep(productId[3]).getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj4));
        obj11.track(ref.PAYMENT_FLOW_LOADED, obj3);
        const obj13 = currentStep(productId[3]);
      }
      tmp2.current = tmp;
      ref2.current = timestamp;
    }
  }, items);
  const items1 = [basePurchaseAnalytics, ref];
  const effect1 = basePurchaseAnalytics.useEffect(() => () => {
    if (ref.current !== closure_1_0(closure_1_2[3]).PaymentFlowStep.CONFIRM) {
      closure_1_1(closure_1_2[5]).track(closure_1_4.PAYMENT_FLOW_CANCELED, closure_3);
      const obj = closure_1_1(closure_1_2[5]);
    }
  }, items1);
  return currentStep.children;
};