// === Module 8719: getShelfItemData ===

// Module 8719 (getShelfItemData)
import addApplication from "addApplication" /* 4478 */;

const result = require("obj132").fileFinishedImporting("modules/activities/getShelfItemData.tsx");

export default function getShelfItemData(applicationId) {
  applicationId = applicationId.applicationId;
  ({ activityConfigs, applications } = applicationId);
  let found;
  if (applications != null) {
    found = applications.find((item, index) => item.id === applicationId);
  }
  if (found == null) {
    found = applicationId.getApplication(applicationId);
  }
  const found1 = activityConfigs.find((item, index) => item.application_id === applicationId);
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