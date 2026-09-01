// discord_app/modules/experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import ExperimentBuckets from "../ExperimentConstants.tsx";
import registeredExperimentIds from "Helpers.tsx";

const AnalyticEvents = ME.AnalyticEvents;
const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration(
  [],
  ExperimentBuckets.CommonTriggerPoints.PAYMENT_FLOW_STARTED,
  { location: "payment flow started" },
);
const result = set.fileFinishedImporting("modules/experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx");

export const PaymentFlowStartedTriggerPoint = commonTriggerPointConfiguration;
export const trackPaymentFlowStartedAnalyticsAndCTP = function trackPaymentFlowStartedAnalyticsAndCTP(
  basePurchaseAnalytics,
) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  expandEventPropertiesDefault.track(AnalyticEvents.PAYMENT_FLOW_STARTED, basePurchaseAnalytics, obj);
  commonTriggerPointConfiguration.trigger();
};
