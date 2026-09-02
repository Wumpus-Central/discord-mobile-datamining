// === Module 10803: commonTriggerPointConfiguration ===

// Module 10803 (commonTriggerPointConfiguration)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4392 */;
import registeredExperimentIds from "registeredExperimentIds" /* 10804 */;

const AnalyticEvents = ME.AnalyticEvents;
const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
const result = set.fileFinishedImporting("modules/experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx");

export const PaymentFlowStartedTriggerPoint = commonTriggerPointConfiguration;
export const trackPaymentFlowStartedAnalyticsAndCTP = function trackPaymentFlowStartedAnalyticsAndCTP(basePurchaseAnalytics) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  expandEventPropertiesDefault.track(AnalyticEvents.PAYMENT_FLOW_STARTED, basePurchaseAnalytics, obj);
  commonTriggerPointConfiguration.trigger();
};