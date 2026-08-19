// discord_app/modules/activities/utils/isMostRecentDeadEndInvite.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ME from "../../../Constants.tsx";

const ActivityActionTypes = ME.ActivityActionTypes;
const result = obj132.fileFinishedImporting("modules/activities/utils/isMostRecentDeadEndInvite.tsx");

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
      tmp = activity.activity.type === ActivityActionTypes.JOIN;
    }
    if (tmp) {
      tmp = !id2(table[1])(table, activity, id2);
    }
    return tmp;
  }, 25);
};