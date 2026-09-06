// discord_app/modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx");

export const ttiRecorded = function ttiRecorded(tti) {
  const obj = { type: "TTI_RECORDED", tti };
  obj.dispatch(obj);
};
