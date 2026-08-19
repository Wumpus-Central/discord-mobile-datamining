// === Module 5421: ttiRecorded ===

// Module 5421 (ttiRecorded)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx");

export const ttiRecorded = function ttiRecorded(closure_5) {
  const obj = { type: "TTI_RECORDED", tti: closure_5 };
  obj.dispatch(obj);
};