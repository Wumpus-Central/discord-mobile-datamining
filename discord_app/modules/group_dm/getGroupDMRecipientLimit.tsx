// === Module 16184: getGroupDMRecipientLimit ===

// Module 16184 (getGroupDMRecipientLimit)
import closure_0 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;

({ MAX_GROUP_DM_PARTICIPANTS: closure_1, MAX_GROUP_DM_STAFF_PARTICIPANTS: obj1 } = ME);
const result = require("set").fileFinishedImporting("modules/group_dm/getGroupDMRecipientLimit.tsx");

export default function getGroupDMRecipientLimit(userLimit) {
  currentUser = currentUser.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  if (isStaffResult) {
    userLimit = closure_2;
  } else {
    if (null != userLimit) {
      if (userLimit.userLimit > 0) {
        userLimit = userLimit.userLimit;
      }
    }
    userLimit = closure_1;
  }
  return userLimit;
};