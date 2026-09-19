// === Module 9573: leaveCurrentEmbeddedActivity ===

// Module 9573 (leaveCurrentEmbeddedActivity)
import getEmbeddedActivitiesManagerDefault from "getEmbeddedActivitiesManager" /* 9574 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2040 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/leaveCurrentEmbeddedActivity.tsx");

export const leaveCurrentEmbeddedActivity = function leaveCurrentEmbeddedActivity() {
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    ({ location: obj2.location, applicationId: obj2.applicationId } = currentEmbeddedActivity);
    getEmbeddedActivitiesManagerDefault().leaveActivity({ location: null, applicationId: null, showFeedback: false });
    const obj = getEmbeddedActivitiesManagerDefault();
    const obj3 = { location: null, applicationId: null, showFeedback: false };
  }
};