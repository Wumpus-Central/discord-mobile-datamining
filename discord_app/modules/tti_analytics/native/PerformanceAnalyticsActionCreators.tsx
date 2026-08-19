// discord_app/modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import dispatcherDefault from "../../../Dispatcher.tsx";

const result = obj132.fileFinishedImporting("modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx");

export const ttiRecorded = function ttiRecorded(closure_5) {
  const obj = { type: "TTI_RECORDED", tti: closure_5 };
  obj.dispatch(obj);
};