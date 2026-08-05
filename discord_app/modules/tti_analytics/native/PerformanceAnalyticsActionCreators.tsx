// discord_app/modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx
import { dispatcher } from "../../../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx");

export const ttiRecorded = function ttiRecorded(closure_5) {
  let obj = dispatcher;
  obj = { type: "TTI_RECORDED", tti: closure_5 };
  obj.dispatch(obj);
};