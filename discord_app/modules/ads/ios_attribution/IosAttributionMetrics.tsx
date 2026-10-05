// discord_app/modules/ads/ios_attribution/IosAttributionMetrics.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import MonitoringAgentDefault from "../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/ads/ios_attribution/IosAttributionMetrics.tsx");

export const IosAttributionImpressionResult = {
  REGISTERED: "registered",
  NO_FRAMEWORK: "no_framework",
  NO_METADATA: "no_metadata",
  NOT_SKAN_ENABLED: "not_skan_enabled",
  SIGN_FAILED: "sign_failed",
  NO_TOKEN: "no_token",
};
export const IosAttributionClickResult = {
  ATTRIBUTED: "attributed",
  NO_IMPRESSION: "no_impression",
  NOT_READY: "not_ready",
};
export const trackIosAttributionImpression = function trackIosAttributionImpression(NO_FRAMEWORK, c2, c0) {
  let items;
  let str = c2;
  const tmp3 = MonitoringAgentDefault;
  const increment = tmp3.increment;
  const obj = { name: MetricEvents.MetricEvents.IOS_ATTRIBUTION_IMPRESSION, tags: items };
  items = ["result:" + NO_FRAMEWORK];
  let str2 = c2;
  if (c2 == null) {
    str2 = "none";
  }
  items[1] = "framework:" + str2;
  increment(obj);
  const obj2 = { impression_id: _require, attribution_framework: str, attribution_result: NO_FRAMEWORK };
  const track = AnalyticsUtilsDefault.track;
  const IOS_ATTRIBUTION_VIEW_RESOLVED = AnalyticEvents.IOS_ATTRIBUTION_VIEW_RESOLVED;
  AnalyticsUtilsDefault;
  if (str == null) {
    str = "none";
  }
  track(IOS_ATTRIBUTION_VIEW_RESOLVED, obj2);
};
export const trackIosAttributionClick = function trackIosAttributionClick(ATTRIBUTED, framework, impression_id) {
  let items;
  let str = framework;
  const tmp3 = MonitoringAgentDefault;
  const increment = tmp3.increment;
  const obj = { name: MetricEvents.MetricEvents.IOS_ATTRIBUTION_CLICK, tags: items };
  items = ["result:" + ATTRIBUTED];
  let str2 = framework;
  if (framework == null) {
    str2 = "none";
  }
  items[1] = "framework:" + str2;
  increment(obj);
  const obj2 = { impression_id, attribution_framework: str, attribution_result: ATTRIBUTED };
  const track = AnalyticsUtilsDefault.track;
  const IOS_ATTRIBUTION_CLICK_RESOLVED = AnalyticEvents.IOS_ATTRIBUTION_CLICK_RESOLVED;
  AnalyticsUtilsDefault;
  if (str == null) {
    str = "none";
  }
  track(IOS_ATTRIBUTION_CLICK_RESOLVED, obj2);
};
