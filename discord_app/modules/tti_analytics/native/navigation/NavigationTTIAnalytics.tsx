// discord_app/modules/tti_analytics/native/navigation/NavigationTTIAnalytics.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import DeveloperOptionsStore from "../../../../stores/DeveloperOptionsStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
