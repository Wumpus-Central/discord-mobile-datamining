// discord_app/modules/activities/utils/leaveCurrentEmbeddedActivity.tsx
import getEmbeddedActivitiesManagerDefault from "getEmbeddedActivitiesManager.native.tsx";
import EmbeddedActivitiesStore from "../EmbeddedActivitiesStore.tsx";

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
