// === Module 13076: isMostRecentDeadEndInvite ===

// Module 13076 (isMostRecentDeadEndInvite)
import Constants from "Constants" /* 1085 */;
import isInviteActiveDefault from "isInviteActive" /* 11386 */;
import size from "module_2" /* 2 */;

const ActivityActionTypes = Constants.ActivityActionTypes;
const result = size.fileFinishedImporting("modules/activities/utils/isMostRecentDeadEndInvite.tsx");

export const isMostRecentDeadEndInvite = function isMostRecentDeadEndInvite(id, messages, id2, applicationActivity) {
  let closure_0 = id2;
  let closure_1 = applicationActivity;
  return !messages.hasAnyAfter(id, (activity) => {
    let tmp = null != activity.activity;
    if (tmp) {
      const application = activity.application;
      let id;
      if (application != null) {
        id = application.id;
      }
      tmp = id === id2;
    }
    if (tmp) {
      tmp = activity.activity.type === ActivityActionTypes.JOIN;
    }
    if (tmp) {
      tmp = !isInviteActiveDefault(applicationActivity, activity, id2);
    }
    return tmp;
  }, 25);
};