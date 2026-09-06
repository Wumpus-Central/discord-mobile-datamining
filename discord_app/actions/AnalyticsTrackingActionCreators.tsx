// discord_app/actions/AnalyticsTrackingActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export const track = function track(event, properties) {
  const obj = { type: "TRACK", event, properties };
  obj.dispatch(obj);
};
