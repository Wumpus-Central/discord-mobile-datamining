// discord_app/actions/AnalyticsTrackingActionCreators.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import dispatcherDefault from "../Dispatcher.tsx";

const result = obj132.fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export const track = function track(event, properties) {
  const obj = { type: "TRACK", event, properties };
  obj.dispatch(obj);
};