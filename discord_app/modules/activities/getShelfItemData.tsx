// === Module 8756: getShelfItemData ===

// Module 8756 (getShelfItemData)
import closure_0 from "addApplication" /* 4482 */;

const result = require("set").fileFinishedImporting("modules/activities/getShelfItemData.tsx");

export default function getShelfItemData(applicationId) {
  applicationId = applicationId.applicationId;
  ({ activityConfigs, applications } = applicationId);
  let found;
  if (applications != null) {
    found = applications.find((id) => id.id === applicationId);
  }
  if (found == null) {
    found = applicationId.getApplication(applicationId);
  }
  const found1 = activityConfigs.find((application_id) => application_id.application_id === applicationId);
  let tmp4 = null;
  if (null != found1) {
    tmp4 = null;
    if (null != found) {
      const obj = { activity: null, application: null };
      obj[0] = found1;
      obj[1] = found;
      tmp4 = obj;
    }
  }
  return tmp4;
};