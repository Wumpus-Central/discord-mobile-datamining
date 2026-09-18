// === Module 9751: leaveCurrentEmbeddedActivity ===

// Module 9751 (leaveCurrentEmbeddedActivity)
import getEmbeddedActivitiesManagerDefault from "getEmbeddedActivitiesManager" /* 9752 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1957 */;

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