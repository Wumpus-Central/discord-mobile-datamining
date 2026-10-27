// === Module 10773: leaveCurrentEmbeddedActivity ===

// Module 10773 (leaveCurrentEmbeddedActivity)
import leaveEmbeddedActivity from "leaveEmbeddedActivity" /* 10774 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4823 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/utils/leaveCurrentEmbeddedActivity.tsx");

export const leaveCurrentEmbeddedActivity = function leaveCurrentEmbeddedActivity() {
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    ({ location: obj2.location, applicationId: obj2.applicationId } = currentEmbeddedActivity);
    const result = leaveEmbeddedActivity.leaveEmbeddedActivity({ location: null, applicationId: null, showFeedback: false });
    const obj3 = { location: null, applicationId: null, showFeedback: false };
  }
};