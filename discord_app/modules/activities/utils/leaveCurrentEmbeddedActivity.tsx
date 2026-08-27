// === Module 9389: leaveCurrentEmbeddedActivity ===

// Module 9389 (leaveCurrentEmbeddedActivity)
import getEmbeddedActivitiesManagerDefault from "getEmbeddedActivitiesManager" /* 9373 */;
import closure_2 from "participantFromServer" /* 1390 */;

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentEmbeddedActivity.tsx");

export const leaveCurrentEmbeddedActivity = function leaveCurrentEmbeddedActivity() {
  currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    let obj = getEmbeddedActivitiesManagerDefault();
    obj = { location: null, applicationId: null, showFeedback: false };
    ({ location: obj2[0], applicationId: obj2[1] } = currentEmbeddedActivity);
    obj.leaveActivity(obj);
  }
};