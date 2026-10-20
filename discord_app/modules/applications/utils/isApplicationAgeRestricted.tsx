// === Module 10134: isApplicationAgeRestricted ===

// Module 10134 (isApplicationAgeRestricted)
import utils from "utils" /* 5573 */;
import AgeRestrictedApplicationCommandsExperimentDefault from "AgeRestrictedApplicationCommandsExperiment" /* 10135 */;
import ApplicationStore from "ApplicationStore" /* 2046 */;

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