// discord_app/modules/activities/utils/stopSyncingUserActivity.tsx
import set from "../../../../_runtime/00002_set.js";
import dispatcherDefault from "../../../Dispatcher.tsx";

const result = set.fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  dispatcherDefault.dispatch({ type: "ACTIVITY_SYNC_STOP" });
};