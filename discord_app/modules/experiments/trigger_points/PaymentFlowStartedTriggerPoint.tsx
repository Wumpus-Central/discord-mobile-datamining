// discord_app/modules/experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx
import { AnalyticEvents } from "ME";
import { expandEventProperties } from "../../../utils/AnalyticsUtils.tsx";

const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
const result = require("registeredExperimentIds").fileFinishedImporting("modules/experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx");

export const PaymentFlowStartedTriggerPoint = commonTriggerPointConfiguration;
export const trackPaymentFlowStartedAnalyticsAndCTP = function trackPaymentFlowStartedAnalyticsAndCTP(basePurchaseAnalytics) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  expandEventProperties.track(AnalyticEvents.PAYMENT_FLOW_STARTED, basePurchaseAnalytics, obj);
  commonTriggerPointConfiguration.trigger();
};