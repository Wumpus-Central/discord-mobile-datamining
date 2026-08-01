// === Module 12399: isMostRecentDeadEndInvite ===

// Module 12399 (isMostRecentDeadEndInvite)
import { ActivityActionTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isMostRecentDeadEndInvite.tsx");

export const isMostRecentDeadEndInvite = function isMostRecentDeadEndInvite(id, messages, id2, findActivityResult) {
  let closure_0 = id2;
  let closure_1 = findActivityResult;
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
      tmp = activity.activity.type === outer1_2.JOIN;
    }
    if (tmp) {
      tmp = !id2(table[1])(table, activity, id2);
    }
    return tmp;
  }, 25);
};