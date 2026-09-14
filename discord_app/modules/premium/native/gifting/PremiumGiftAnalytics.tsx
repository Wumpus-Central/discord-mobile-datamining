// discord_app/modules/premium/native/gifting/PremiumGiftAnalytics.tsx
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import PremiumAnalyticsUtils from "../PremiumAnalyticsUtils.tsx";
import PaymentFlowStartedTriggerPoint from "../../../experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftAnalytics.tsx");

export default function PremiumGiftAnalytics(currentStep) {
  currentStep = currentStep.currentStep;
  let productId;
  const nativeGiftContext = currentStep(productId[2]).useNativeGiftContext();
  const customGiftMessage = nativeGiftContext.customGiftMessage;
  productId = nativeGiftContext.productId;
  const basePurchaseAnalytics = nativeGiftContext.basePurchaseAnalytics;
  basePurchaseAnalytics.useRef(null);
  let timestamp = Date.now();
  const ref = basePurchaseAnalytics.useRef(timestamp);
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
          const merged = Object.assign(
            PremiumAnalyticsUtils.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj5),
          );
          const intl = util.intl;
          obj3.is_custom_message_edited = customGiftMessage !== intl.string(util.t.ZkOo1U);
          obj3.is_custom_emoji_sound_available = false;
          obj2.track(AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, obj3);
        }
        const obj7 = {};
        const obj6 = AnalyticsUtilsDefault;
        const obj9 = {
          from_step: ref.current,
          to_step: currentStep,
          step_duration_ms: timestamp - ref2.current,
          flow_duration_ms: timestamp - ref.current,
          subscription_plan_gateway_plan_id: productId,
        };
        const merged1 = Object.assign(
          PremiumAnalyticsUtils.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj9),
        );
        obj6.track(AnalyticEvents.PAYMENT_FLOW_STEP, obj7);
      } else {
        const result = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP(basePurchaseAnalytics);
        const obj12 = {};
        const obj11 = AnalyticsUtilsDefault;
        const obj14 = { initial_step: currentStep };
        const merged2 = Object.assign(
          PremiumAnalyticsUtils.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj14),
        );
        obj11.track(AnalyticEvents.PAYMENT_FLOW_LOADED, obj12);
      }
      ref.current = currentStep;
      ref2.current = timestamp;
    }
  }, items);
  const items1 = [basePurchaseAnalytics, ref];
  const effect1 = basePurchaseAnalytics.useEffect(
    () => () => {
      if (ref.current !== currentStep(productId[3]).PaymentFlowStep.CONFIRM) {
        customGiftMessage(productId[5]).track(ref.PAYMENT_FLOW_CANCELED, basePurchaseAnalytics);
        const obj = customGiftMessage(productId[5]);
      }
    },
    items1,
  );
  return currentStep.children;
}
