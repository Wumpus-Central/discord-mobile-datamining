// === Module 10492: PaymentFlowStartedTriggerPoint ===

// Module 10492 (PaymentFlowStartedTriggerPoint)
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import ExperimentConstants from "ExperimentConstants" /* 5152 */;
import Helpers from "Helpers" /* 10493 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx");

export const PaymentFlowStartedTriggerPoint = commonTriggerPointConfiguration;
export const trackPaymentFlowStartedAnalyticsAndCTP = function trackPaymentFlowStartedAnalyticsAndCTP(basePurchaseAnalytics) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.PAYMENT_FLOW_STARTED, basePurchaseAnalytics, obj);
  commonTriggerPointConfiguration.trigger();
};