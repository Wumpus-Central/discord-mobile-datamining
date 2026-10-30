// === Module 7809: PerformanceAnalyticsActionCreators ===

// Module 7809 (PerformanceAnalyticsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx");

export function ttiRecorded(tti) {
  DispatcherDefault.dispatch({ type: "TTI_RECORDED", tti });
}