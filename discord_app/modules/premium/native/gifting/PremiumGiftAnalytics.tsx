// discord_app/modules/premium/native/gifting/PremiumGiftAnalytics.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import { AnalyticEvents } from "../../../../Constants.tsx";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftAnalytics.tsx");

export default function PremiumGiftAnalytics(currentStep) {
  currentStep = currentStep.currentStep;
  let productId;
  const nativeGiftContext = currentStep(productId[2]).useNativeGiftContext();
  const customGiftMessage = nativeGiftContext.customGiftMessage;
  productId = nativeGiftContext.productId;
  const basePurchaseAnalytics = nativeGiftContext.basePurchaseAnalytics;
  const ref = basePurchaseAnalytics.useRef(null);
  let timestamp = Date.now();
  closure_5 = basePurchaseAnalytics.useRef(timestamp);
  closure_6 = basePurchaseAnalytics.useRef(timestamp);
  const items = [basePurchaseAnalytics, currentStep, ref, customGiftMessage, productId];
  const effect = basePurchaseAnalytics.useEffect(() => {
    if (currentStep !== ref.current) {
      const _Date = Date;
      const timestamp = Date.now();
      if (null != ref.current) {
        let isIOSResult = currentStep === currentStep(productId[3]).PaymentFlowStep.CONFIRM;
        if (isIOSResult) {
          let obj = currentStep(productId[4]);
          isIOSResult = obj.isIOS();
        }
        if (isIOSResult) {
          obj1 = customGiftMessage(productId[5]);
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
        obj2[0] = ref.current;
        obj2[1] = currentStep;
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
        obj4[0] = currentStep;
        const merged2 = Object.assign(currentStep(productId[3]).getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj4));
        obj11.track(ref.PAYMENT_FLOW_LOADED, obj3);
        const obj13 = currentStep(productId[3]);
      }
      ref.current = currentStep;
      ref2.current = timestamp;
    }
  }, items);
  const items1 = [basePurchaseAnalytics, ref];
  const effect1 = basePurchaseAnalytics.useEffect(() => () => {
    if (ref.current !== currentStep(productId[3]).PaymentFlowStep.CONFIRM) {
      customGiftMessage(productId[5]).track(closure_1_4.PAYMENT_FLOW_CANCELED, closure_3);
      const obj = customGiftMessage(productId[5]);
    }
  }, items1);
  return currentStep.children;
};