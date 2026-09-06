// discord_app/modules/premium/native/gifting/PremiumGiftAnalytics.tsx
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
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
          let obj = PlatformUtils;
          isIOSResult = obj.isIOS();
        }
        if (isIOSResult) {
          let obj1 = AnalyticsUtilsDefault;
          obj = {};
          let obj3 = PremiumAnalyticsUtils;
          obj = { subscription_plan_gateway_plan_id: productId };
          const merged = Object.assign(obj3.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj));
          const intl = util.intl;
          obj.is_custom_message_edited = customGiftMessage !== intl.string(util.t.ZkOo1U);
          obj.is_custom_emoji_sound_available = false;
          obj1.track(AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, obj);
        }
        obj1 = {};
        const obj6 = AnalyticsUtilsDefault;
        const obj2 = {
          from_step: ref.current,
          to_step: currentStep,
          step_duration_ms: timestamp - ref2.current,
          flow_duration_ms: timestamp - ref.current,
          subscription_plan_gateway_plan_id: productId,
        };
        const merged1 = Object.assign(
          PremiumAnalyticsUtils.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj2),
        );
        obj6.track(AnalyticEvents.PAYMENT_FLOW_STEP, obj1);
      } else {
        const result = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP(basePurchaseAnalytics);
        obj3 = {};
        const obj11 = AnalyticsUtilsDefault;
        const obj4 = { initial_step: currentStep };
        const merged2 = Object.assign(
          PremiumAnalyticsUtils.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj4),
        );
        obj11.track(AnalyticEvents.PAYMENT_FLOW_LOADED, obj3);
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
