// === Module 11489: NavigationTTIAnalytics ===

// Module 11489 (NavigationTTIAnalytics)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1370 */;

let obj = new LoggerDefault("NavTTIAnalytics");
obj.enableNativeLogger(true);
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIAnalytics.tsx");

export const trackNavigationTTISpan = function trackNavigationTTISpan(spanComponentName, spanTtiProperties) {
  if (DeveloperOptionsStore.isLoggingInteractionTTIAnalytics) {
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    obj.info("" + spanComponentName + " " + JSON.stringify(spanTtiProperties));
  }
  obj = DispatcherDefault;
  obj.dispatch({ type: "TRACK", event: spanComponentName, properties: spanTtiProperties });
};