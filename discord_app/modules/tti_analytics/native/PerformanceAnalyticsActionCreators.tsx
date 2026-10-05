// === Module 7159: PerformanceAnalyticsActionCreators ===

// Module 7159 (PerformanceAnalyticsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx");

export const ttiRecorded = function ttiRecorded(tti) {
  const obj = DispatcherDefault;
  const obj2 = { type: "TTI_RECORDED", tti };
  obj.dispatch(obj2);
};