// === Module 9520: getShelfItemData ===

// Module 9520 (getShelfItemData)
import ApplicationStore from "ApplicationStore" /* 4788 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/getShelfItemData.tsx");

export default function getShelfItemData(applicationId) {
  applicationId = applicationId.applicationId;
  ({ activityConfigs, applications } = applicationId);
  let found;
  if (applications != null) {
    found = applications.find((id) => id.id === applicationId);
  }
  if (found == null) {
    found = ApplicationStore.getApplication(applicationId);
  }
  const found1 = activityConfigs.find((application_id) => application_id.application_id === applicationId);
  let tmp4 = null;
  if (null != found1) {
    tmp4 = null;
    if (null != found) {
      const obj = { activity: found1, application: found };
      tmp4 = obj;
    }
  }
  return tmp4;
};