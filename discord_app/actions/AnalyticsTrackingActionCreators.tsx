// === Module 17810: actions/AnalyticsTrackingActionCreators ===

// Module 17810 (actions/AnalyticsTrackingActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export function track(event, properties) {
  DispatcherDefault.dispatch({ type: "TRACK", event, properties });
}