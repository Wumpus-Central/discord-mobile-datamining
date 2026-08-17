// discord_app/modules/activities/utils/isMostRecentDeadEndInvite.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";

const ActivityActionTypes = ME.ActivityActionTypes;
const result = set.fileFinishedImporting("modules/activities/utils/isMostRecentDeadEndInvite.tsx");

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
      tmp = id === id2;
    }
    if (tmp) {
      tmp = activity.activity.type === closure_1_2.JOIN;
    }
    if (tmp) {
      tmp = !id2(table[1])(table, activity, id2);
    }
    return tmp;
  }, 25);
};