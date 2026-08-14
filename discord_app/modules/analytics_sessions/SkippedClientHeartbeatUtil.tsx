// discord_app/modules/analytics_sessions/SkippedClientHeartbeatUtil.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { sampleWithUserId } from "../app_analytics/sampleWithUserId.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/analytics_sessions/SkippedClientHeartbeatUtil.tsx");

export const shouldLogClientHeartbeatSkipped = function shouldLogClientHeartbeatSkipped() {
  currentUser = currentUser.getCurrentUser();
  let tmp = null != currentUser;
  if (tmp) {
    let isStaffResult = currentUser.isStaff();
    if (!isStaffResult) {
      isStaffResult = sampleWithUserId.sampleWithUserId(currentUser.id, 0.02);
      const obj2 = sampleWithUserId;
    }
    tmp = isStaffResult;
  }
  return tmp;
};