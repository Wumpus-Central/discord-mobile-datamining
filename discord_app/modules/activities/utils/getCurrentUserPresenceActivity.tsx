// === Module 11761: getCurrentUserPresenceActivity ===

// Module 11761 (getCurrentUserPresenceActivity)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/getCurrentUserPresenceActivity.tsx");

export default function getCurrentUserPresenceActivity(getApplicationActivity, getApplicationActivity2, arg2) {
  closure_0 = arg2;
  let tmp = null;
  if (null != arg2) {
    let applicationActivity = getApplicationActivity.getApplicationActivity(arg2);
    if (applicationActivity == null) {
      applicationActivity = getApplicationActivity2.getApplicationActivity(arg2, true);
    }
    if (applicationActivity == null) {
      const hiddenActivities = getApplicationActivity2.getHiddenActivities();
      applicationActivity = hiddenActivities.find((application_id) => application_id.application_id === closure_0);
    }
    tmp = applicationActivity;
  }
  return tmp;
};