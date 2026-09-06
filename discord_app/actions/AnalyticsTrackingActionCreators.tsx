// === Module 15309: actions/AnalyticsTrackingActionCreators ===

// Module 15309 (actions/AnalyticsTrackingActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export const track = function track(event, properties) {
  const obj = { type: "TRACK", event, properties };
  obj.dispatch(obj);
};