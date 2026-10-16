// === Module 10044: isApplicationAgeRestricted ===

// Module 10044 (isApplicationAgeRestricted)
import utils from "utils" /* 6260 */;
import AgeRestrictedApplicationCommandsExperimentDefault from "AgeRestrictedApplicationCommandsExperiment" /* 10045 */;
import ApplicationStore from "ApplicationStore" /* 5502 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/utils/isApplicationAgeRestricted.tsx");

export default function isApplicationAgeRestricted(arg0) {
  if (obj.getConfig({ location: "isApplicationAgeRestricted" }).enabled) {
    const application = ApplicationStore.getApplication(arg0);
    let prop;
    if (application != null) {
      prop = application.contentClassification;
    }
    return utils.isAgeRestrictedContentClassification(prop);
  } else {
    return false;
  }
  obj = AgeRestrictedApplicationCommandsExperimentDefault;
};