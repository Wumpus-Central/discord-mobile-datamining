// === Module 9761: isApplicationAgeRestricted ===

// Module 9761 (isApplicationAgeRestricted)
import utils from "utils" /* 6047 */;
import AgeRestrictedApplicationCommandsExperimentDefault from "AgeRestrictedApplicationCommandsExperiment" /* 9762 */;
import ApplicationStore from "ApplicationStore" /* 5436 */;

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