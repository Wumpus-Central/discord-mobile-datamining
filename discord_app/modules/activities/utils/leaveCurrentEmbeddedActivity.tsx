// === Module 11303: leaveCurrentEmbeddedActivity ===

// Module 11303 (leaveCurrentEmbeddedActivity)
import leaveEmbeddedActivity from "leaveEmbeddedActivity" /* 11304 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5158 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/utils/leaveCurrentEmbeddedActivity.tsx");

export function leaveCurrentEmbeddedActivity() {
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    ({ location: obj2.location, applicationId: obj2.applicationId } = currentEmbeddedActivity);
    const result = leaveEmbeddedActivity.leaveEmbeddedActivity({ location: null, applicationId: null, showFeedback: false });
    const obj3 = { location: null, applicationId: null, showFeedback: false };
  }
}