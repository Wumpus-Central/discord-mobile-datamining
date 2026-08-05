import { dispatcher } from "../Dispatcher.tsx";
// discord_app/actions/AnalyticsTrackingActionCreators.tsx
const result = require("set").fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export const track = function track(event, properties) {
  let obj = dispatcher;
  obj = { type: "TRACK", event, properties };
  obj.dispatch(obj);
};