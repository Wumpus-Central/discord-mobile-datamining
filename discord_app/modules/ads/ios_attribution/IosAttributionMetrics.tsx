// === Module 11492: IosAttributionMetrics ===

// Module 11492 (IosAttributionMetrics)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 7602 */;
import MetricEvents from "MetricEvents" /* 7607 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/ads/ios_attribution/IosAttributionMetrics.tsx");

export const IosAttributionImpressionResult = { REGISTERED: "registered", NO_FRAMEWORK: "no_framework", NO_METADATA: "no_metadata", NOT_SKAN_ENABLED: "not_skan_enabled", SIGN_FAILED: "sign_failed", NO_TOKEN: "no_token" };
export const IosAttributionClickResult = { ATTRIBUTED: "attributed", NO_IMPRESSION: "no_impression", NOT_READY: "not_ready" };
export const trackIosAttributionImpression = function trackIosAttributionImpression(NO_FRAMEWORK, activeIosAttributionFramework, id) {
  let str = activeIosAttributionFramework;
  let obj = { name: MetricEvents.MetricEvents.IOS_ATTRIBUTION_IMPRESSION, tags: null };
  const items = ["result:" + NO_FRAMEWORK, ];
  let str2 = activeIosAttributionFramework;
  if (activeIosAttributionFramework == null) {
    str2 = "none";
  }
  items[1] = "framework:" + str2;
  obj.tags = items;
  obj.increment(obj);
  obj = { impression_id: id, attribution_framework: null, attribution_result: null };
  if (str == null) {
    str = "none";
  }
  obj.attribution_framework = str;
  obj.attribution_result = NO_FRAMEWORK;
  AnalyticsUtilsDefault.track(AnalyticEvents.IOS_ATTRIBUTION_VIEW_RESOLVED, obj);
  const tmpResult = AnalyticsUtilsDefault;
};
export const trackIosAttributionClick = function trackIosAttributionClick(ATTRIBUTED, framework, impression_id) {
  let str = framework;
  let obj = { name: MetricEvents.MetricEvents.IOS_ATTRIBUTION_CLICK, tags: null };
  const items = ["result:" + ATTRIBUTED, ];
  let str2 = framework;
  if (framework == null) {
    str2 = "none";
  }
  items[1] = "framework:" + str2;
  obj.tags = items;
  obj.increment(obj);
  obj = { impression_id, attribution_framework: null, attribution_result: null };
  if (str == null) {
    str = "none";
  }
  obj.attribution_framework = str;
  obj.attribution_result = ATTRIBUTED;
  AnalyticsUtilsDefault.track(AnalyticEvents.IOS_ATTRIBUTION_CLICK_RESOLVED, obj);
  const tmpResult = AnalyticsUtilsDefault;
};