// === Module 10924: getCurrentUserPresenceActivity ===

// Module 10924 (getCurrentUserPresenceActivity)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/activities/utils/getCurrentUserPresenceActivity.tsx");

export default function getCurrentUserPresenceActivity(getApplicationActivity, getApplicationActivity2) {
  closure_0 = arg2;
  let tmp = null;
  if (null != arg2) {
    let applicationActivity = getApplicationActivity.getApplicationActivity(arg2);
    if (applicationActivity == null) {
      applicationActivity = getApplicationActivity2.getApplicationActivity(arg2, true);
    }
    if (applicationActivity == null) {
      const hiddenActivities = getApplicationActivity2.getHiddenActivities();
      applicationActivity = hiddenActivities.find((item, index) => item.application_id === closure_0);
    }
    tmp = applicationActivity;
  }
  return tmp;
};