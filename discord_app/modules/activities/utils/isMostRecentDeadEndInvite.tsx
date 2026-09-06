// === Module 13235: isMostRecentDeadEndInvite ===

// Module 13235 (isMostRecentDeadEndInvite)
import Constants from "Constants" /* 1074 */;
import isInviteActiveDefault from "isInviteActive" /* 11754 */;
import size from "module_2" /* 2 */;

const ActivityActionTypes = Constants.ActivityActionTypes;
const result = size.fileFinishedImporting("modules/activities/utils/isMostRecentDeadEndInvite.tsx");

export const isMostRecentDeadEndInvite = function isMostRecentDeadEndInvite(id, messages, id2, findActivityResult) {
  closure_0 = id2;
  closure_1 = findActivityResult;
  return !messages.hasAnyAfter(id, (activity) => {
    let tmp = null != activity.activity;
    if (tmp) {
      const application = activity.application;
      let id;
      if (application != null) {
        id = application.id;
      }
      tmp = id === closure_0;
    }
    if (tmp) {
      tmp = activity.activity.type === ActivityActionTypes.JOIN;
    }
    if (tmp) {
      tmp = !isInviteActiveDefault(closure_1, activity, closure_0);
    }
    return tmp;
  }, 25);
};