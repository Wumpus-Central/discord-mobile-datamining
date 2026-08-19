// discord_app/modules/analytics_sessions/SkippedClientHeartbeatUtil.tsx
import sampleWithUserId from "../app_analytics/sampleWithUserId.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/analytics_sessions/SkippedClientHeartbeatUtil.tsx");

export const shouldLogClientHeartbeatSkipped = function shouldLogClientHeartbeatSkipped() {
  currentUser = currentUser.getCurrentUser();
  let tmp = null != currentUser;
  if (tmp) {
    let isStaffResult = currentUser.isStaff();
    if (!isStaffResult) {
      isStaffResult = sampleWithUserId.sampleWithUserId(currentUser.id, 0.02);
    }
    tmp = isStaffResult;
  }
  return tmp;
};