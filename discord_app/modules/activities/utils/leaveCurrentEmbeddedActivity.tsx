// === Module 11024: leaveCurrentEmbeddedActivity ===

// Module 11024 (leaveCurrentEmbeddedActivity)
import leaveEmbeddedActivity from "leaveEmbeddedActivity" /* 11025 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2067 */;

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