// === Module 8684: SkippedClientHeartbeatUtil ===

// Module 8684 (SkippedClientHeartbeatUtil)
import sampleWithUserId from "sampleWithUserId" /* 8685 */;
import UserStore from "UserStore" /* 1388 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/analytics_sessions/SkippedClientHeartbeatUtil.tsx");

export function shouldLogClientHeartbeatSkipped() {
  const currentUser = UserStore.getCurrentUser();
  let tmp = null != currentUser;
  if (tmp) {
    let isStaffResult = currentUser.isStaff();
    if (!isStaffResult) {
      isStaffResult = sampleWithUserId.sampleWithUserId(currentUser.id, 0.02);
    }
    tmp = isStaffResult;
  }
  return tmp;
}