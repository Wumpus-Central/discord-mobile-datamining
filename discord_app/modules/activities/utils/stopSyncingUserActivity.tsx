import { dispatcher } from "../../../Dispatcher.tsx";
// discord_app/modules/activities/utils/stopSyncingUserActivity.tsx
const result = require("set").fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  dispatcher.dispatch({ type: "ACTIVITY_SYNC_STOP" });
};