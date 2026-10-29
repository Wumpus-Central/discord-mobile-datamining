// === Module 17178: actions/AnalyticsTrackingActionCreators ===

// Module 17178 (actions/AnalyticsTrackingActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export function track(event, properties) {
  DispatcherDefault.dispatch({ type: "TRACK", event, properties });
}