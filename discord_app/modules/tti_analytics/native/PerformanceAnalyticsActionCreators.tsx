// === Module 7804: PerformanceAnalyticsActionCreators ===

// Module 7804 (PerformanceAnalyticsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx");

export function ttiRecorded(tti) {
  DispatcherDefault.dispatch({ type: "TTI_RECORDED", tti });
}