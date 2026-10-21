// === Module 10164: isApplicationAgeRestricted ===

// Module 10164 (isApplicationAgeRestricted)
import utils from "utils" /* 5594 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/utils/isApplicationAgeRestricted.tsx");

export default function isApplicationAgeRestricted(arg0) {
  const application = ApplicationStore.getApplication(arg0);
  let prop;
  if (application != null) {
    prop = application.contentClassification;
  }
  return utils.isAgeRestrictedContentClassification(prop);
};