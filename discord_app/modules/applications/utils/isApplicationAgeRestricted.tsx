import { getUnitId } from "../../application_commands/AgeRestrictedApplicationCommandsExperiment.tsx";
import { isAgeRestrictedContentClassification } from "../../content_classification/utils.tsx";
// discord_app/modules/applications/utils/isApplicationAgeRestricted.tsx
import addApplication from "addApplication";

const require = arg1;
const result = require("isAgeRestrictedContentClassification").fileFinishedImporting("modules/applications/utils/isApplicationAgeRestricted.tsx");

export default function isApplicationAgeRestricted(arg0) {
  if (obj.getConfig({ location: "isApplicationAgeRestricted" }).enabled) {
    application = application.getApplication(arg0);
    let prop;
    if (application != null) {
      prop = application.contentClassification;
    }
    return isAgeRestrictedContentClassification /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(prop);
  } else {
    return false;
  }
  obj = getUnitId;
};