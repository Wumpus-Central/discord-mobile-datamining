// === Module 11221: PremiumGiftAnalytics ===

// Module 11221 (PremiumGiftAnalytics)
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10663 */;
import PaymentFlowStartedTriggerPoint from "PaymentFlowStartedTriggerPoint" /* 10808 */;
import noop from "module_19" /* 19 */;

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
      if (null != tmp2.current) {
        let isIOSResult = tmp === PremiumAnalyticsUtils.PaymentFlowStep.CONFIRM;
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
        const obj2 = { from_step: tmp2.current, to_step: tmp, step_duration_ms: timestamp - ref2.current, flow_duration_ms: timestamp - ref.current, subscription_plan_gateway_plan_id: productId };
        const merged1 = Object.assign(PremiumAnalyticsUtils.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj2));
        obj6.track(AnalyticEvents.PAYMENT_FLOW_STEP, obj1);
      } else {
        const result = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP(basePurchaseAnalytics);
        obj3 = {};
        const obj11 = AnalyticsUtilsDefault;
        const obj4 = { initial_step: tmp };
        const merged2 = Object.assign(PremiumAnalyticsUtils.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj4));
        obj11.track(AnalyticEvents.PAYMENT_FLOW_LOADED, obj3);
      }
      tmp2.current = tmp;
      ref2.current = timestamp;
    }
  }, items);
  const items1 = [basePurchaseAnalytics, ref];
  const effect1 = basePurchaseAnalytics.useEffect(() => () => {
    if (ref.current !== currentStep(productId[3]).PaymentFlowStep.CONFIRM) {
      customGiftMessage(productId[5]).track(ref.PAYMENT_FLOW_CANCELED, basePurchaseAnalytics);
      const obj = customGiftMessage(productId[5]);
    }
  }, items1);
  return currentStep.children;
};