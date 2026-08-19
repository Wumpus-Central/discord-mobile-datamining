// discord_app/modules/activities/utils/leaveCurrentEmbeddedActivity.tsx
import getEmbeddedActivitiesManagerDefault from "getEmbeddedActivitiesManager.native.tsx";
import participantFromServer from "../EmbeddedActivitiesStore.tsx";

const result = require("obj132").fileFinishedImporting("modules/activities/utils/leaveCurrentEmbeddedActivity.tsx");

export const leaveCurrentEmbeddedActivity = function leaveCurrentEmbeddedActivity() {
  currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    getEmbeddedActivitiesManagerDefault();
    const obj = { location: null, applicationId: null, showFeedback: false };
    ({ location: obj2[0], applicationId: obj2[1] } = currentEmbeddedActivity);
    obj.leaveActivity(obj);
  }
};