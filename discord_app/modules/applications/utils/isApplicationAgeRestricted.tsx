// discord_app/modules/applications/utils/isApplicationAgeRestricted.tsx
import isAgeRestrictedContentClassification from "../../content_classification/utils.tsx";
import getUnitIdDefault from "../../application_commands/AgeRestrictedApplicationCommandsExperiment.tsx";
import closure_3 from "../ApplicationStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/applications/utils/isApplicationAgeRestricted.tsx");

export default function isApplicationAgeRestricted(arg0) {
  if (obj.getConfig({ location: "isApplicationAgeRestricted" }).enabled) {
    application = application.getApplication(arg0);
    let prop;
    if (application != null) {
      prop = application.contentClassification;
    }
    return isAgeRestrictedContentClassification.isAgeRestrictedContentClassification(prop);
  } else {
    return false;
  }
  obj = getUnitIdDefault;
}
