// discord_app/modules/applications/utils/isApplicationAgeRestricted.tsx
import utils from "../../content_classification/utils.tsx";
import AgeRestrictedApplicationCommandsExperimentDefault from "../../application_commands/AgeRestrictedApplicationCommandsExperiment.tsx";
import ApplicationStore from "../ApplicationStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/applications/utils/isApplicationAgeRestricted.tsx");

export default function isApplicationAgeRestricted(arg0) {
  const obj = AgeRestrictedApplicationCommandsExperimentDefault;
  if (obj.getConfig({ location: "isApplicationAgeRestricted" }).enabled) {
    const application = ApplicationStore.getApplication(arg0);
    let prop;
    const isAgeRestrictedContentClassification = utils.isAgeRestrictedContentClassification;
    utils;
    if (application != null) {
      prop = application.contentClassification;
    }
    return isAgeRestrictedContentClassification(prop);
  } else {
    return false;
  }
}
