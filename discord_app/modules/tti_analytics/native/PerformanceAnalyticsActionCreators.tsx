// === Module 7726: PerformanceAnalyticsActionCreators ===

// Module 7726 (PerformanceAnalyticsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx");

export const ttiRecorded = function ttiRecorded(tti) {
  const obj = { type: "TTI_RECORDED", tti };
  obj.dispatch(obj);
};