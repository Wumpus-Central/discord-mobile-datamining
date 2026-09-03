// === Module 11316: trackIosAttributionImpression ===

// Module 11316 (trackIosAttributionImpression)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import setDefault from "set" /* 7357 */;
import set2 from "set" /* 7362 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/ads/ios_attribution/IosAttributionMetrics.tsx");

export const IosAttributionImpressionResult = { REGISTERED: "registered", NO_FRAMEWORK: "no_framework", NO_METADATA: "no_metadata", NOT_SKAN_ENABLED: "not_skan_enabled", SIGN_FAILED: "sign_failed", NO_TOKEN: "no_token" };
export const IosAttributionClickResult = { ATTRIBUTED: "attributed", NO_IMPRESSION: "no_impression", NOT_READY: "not_ready" };
export const trackIosAttributionImpression = function trackIosAttributionImpression(NO_FRAMEWORK, c2, c0) {
  let str = c2;
  let obj = setDefault;
  obj = { name: set2.MetricEvents.IOS_ATTRIBUTION_IMPRESSION, tags: null };
  const items = ["result:" + NO_FRAMEWORK, ];
  let str2 = c2;
  if (c2 == null) {
    str2 = "none";
  }
  items[1] = "framework:" + str2;
  obj[1] = items;
  obj.increment(obj);
  obj = { impression_id: c0, attribution_framework: null, attribution_result: null };
  if (str == null) {
    str = "none";
  }
  obj[1] = str;
  obj[2] = NO_FRAMEWORK;
  expandEventPropertiesDefault.track(AnalyticEvents.IOS_ATTRIBUTION_VIEW_RESOLVED, obj);
};
export const trackIosAttributionClick = function trackIosAttributionClick(ATTRIBUTED, framework, closure_0) {
  let str = framework;
  let obj = setDefault;
  obj = { name: set2.MetricEvents.IOS_ATTRIBUTION_CLICK, tags: null };
  const items = ["result:" + ATTRIBUTED, ];
  let str2 = framework;
  if (framework == null) {
    str2 = "none";
  }
  items[1] = "framework:" + str2;
  obj[1] = items;
  obj.increment(obj);
  obj = { impression_id: closure_0, attribution_framework: null, attribution_result: null };
  if (str == null) {
    str = "none";
  }
  obj[1] = str;
  obj[2] = ATTRIBUTED;
  expandEventPropertiesDefault.track(AnalyticEvents.IOS_ATTRIBUTION_CLICK_RESOLVED, obj);
};