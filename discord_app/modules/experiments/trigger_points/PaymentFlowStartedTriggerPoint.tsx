// === Module 7659: commonTriggerPointConfiguration ===

// Module 7659 (commonTriggerPointConfiguration)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4289 */;
import registeredExperimentIds from "registeredExperimentIds" /* 7660 */;

const AnalyticEvents = ME.AnalyticEvents;
const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
const result = obj132.fileFinishedImporting("modules/experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx");

export const PaymentFlowStartedTriggerPoint = commonTriggerPointConfiguration;
export const trackPaymentFlowStartedAnalyticsAndCTP = function trackPaymentFlowStartedAnalyticsAndCTP(basePurchaseAnalytics) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  expandEventPropertiesDefault.track(AnalyticEvents.PAYMENT_FLOW_STARTED, basePurchaseAnalytics, obj);
  commonTriggerPointConfiguration.trigger();
};