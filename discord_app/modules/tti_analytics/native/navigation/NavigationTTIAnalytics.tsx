// === Module 16484: NavigationTTIAnalytics ===

// Module 16484 (NavigationTTIAnalytics)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1357 */;
import size from "module_2" /* 2 */;

let obj = new LoggerDefault("NavTTIAnalytics");
obj.enableNativeLogger(true);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIAnalytics.tsx");

export const trackNavigationTTISpan = function trackNavigationTTISpan(spanComponentName, spanTtiProperties) {
  if (DeveloperOptionsStore.isLoggingInteractionTTIAnalytics) {
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    obj.info("" + spanComponentName + " " + JSON.stringify(spanTtiProperties));
  }
  obj = DispatcherDefault;
  const obj2 = { type: "TRACK", event: spanComponentName, properties: spanTtiProperties };
  obj.dispatch(obj2);
};