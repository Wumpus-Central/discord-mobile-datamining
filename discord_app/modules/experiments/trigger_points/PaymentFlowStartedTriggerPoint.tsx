// discord_app/modules/experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ExperimentConstants from "../ExperimentConstants.tsx";
import Helpers from "Helpers.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(
  [],
  ExperimentConstants.CommonTriggerPoints.PAYMENT_FLOW_STARTED,
  { location: "payment flow started" },
);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx");

export const PaymentFlowStartedTriggerPoint = commonTriggerPointConfiguration;
export const trackPaymentFlowStartedAnalyticsAndCTP = function trackPaymentFlowStartedAnalyticsAndCTP(
  basePurchaseAnalytics,
) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.PAYMENT_FLOW_STARTED, basePurchaseAnalytics, obj);
  commonTriggerPointConfiguration.trigger();
};
