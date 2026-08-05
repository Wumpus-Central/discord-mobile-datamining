// discord_app/modules/activities/utils/stopSyncingUserActivity.tsx
const result = require("set").fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  require("../../../Dispatcher.tsx").dispatch({ type: "ACTIVITY_SYNC_STOP" });
};