// discord_app/modules/applications/utils/isApplicationAgeRestricted.tsx
import utils from "../../content_classification/utils.tsx";
import AgeRestrictedApplicationCommandsExperimentDefault from "../../application_commands/AgeRestrictedApplicationCommandsExperiment.tsx";
import ApplicationStore from "../ApplicationStore.tsx";

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
}
