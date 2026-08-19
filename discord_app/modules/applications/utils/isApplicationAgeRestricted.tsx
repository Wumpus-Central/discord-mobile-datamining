// === Module 9557: isApplicationAgeRestricted ===

// Module 9557 (isApplicationAgeRestricted)
import isAgeRestrictedContentClassification from "isAgeRestrictedContentClassification" /* 4786 */;
import getUnitIdDefault from "getUnitId" /* 9558 */;
import addApplication from "addApplication" /* 4478 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/applications/utils/isApplicationAgeRestricted.tsx");

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
};