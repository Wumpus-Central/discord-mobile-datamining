// discord_app/modules/activities/utils/leaveCurrentEmbeddedActivity.tsx
import getEmbeddedActivitiesManagerDefault from "getEmbeddedActivitiesManager.native.tsx";
import EmbeddedActivitiesStore from "../EmbeddedActivitiesStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/activities/utils/leaveCurrentEmbeddedActivity.tsx");

export const leaveCurrentEmbeddedActivity = function leaveCurrentEmbeddedActivity() {
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    const obj3 = { location: null, applicationId: null, showFeedback: false };
    ({ location: obj2.location, applicationId: obj2.applicationId } = currentEmbeddedActivity);
    const obj = getEmbeddedActivitiesManagerDefault();
    obj.leaveActivity(obj3);
  }
};
