// discord_app/modules/activities/utils/stopSyncingUserActivity.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  DispatcherDefault.dispatch({ type: "ACTIVITY_SYNC_STOP" });
}
