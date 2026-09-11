// === Module 9604: leaveCurrentEmbeddedActivity ===

// Module 9604 (leaveCurrentEmbeddedActivity)
import getEmbeddedActivitiesManagerDefault from "getEmbeddedActivitiesManager" /* 9605 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/leaveCurrentEmbeddedActivity.tsx");

export const leaveCurrentEmbeddedActivity = function leaveCurrentEmbeddedActivity() {
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    getEmbeddedActivitiesManagerDefault();
    const obj = { location: null, applicationId: null, showFeedback: false };
    ({ location: obj2.location, applicationId: obj2.applicationId } = currentEmbeddedActivity);
    obj.leaveActivity(obj);
  }
};