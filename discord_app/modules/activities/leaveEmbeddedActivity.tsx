// discord_app/modules/activities/leaveEmbeddedActivity.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/activities/leaveEmbeddedActivity.tsx");

export const leaveEmbeddedActivity = function leaveEmbeddedActivity(arg0) {
  const merged = Object.assign(arg0);
  DispatcherDefault.dispatch({ type: "EMBEDDED_ACTIVITY_LEAVE" });
};
