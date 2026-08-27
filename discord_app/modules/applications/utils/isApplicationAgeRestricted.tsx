// === Module 8363: isApplicationAgeRestricted ===

// Module 8363 (isApplicationAgeRestricted)
import isAgeRestrictedContentClassification from "isAgeRestrictedContentClassification" /* 5010 */;
import getUnitIdDefault from "getUnitId" /* 8364 */;
import closure_3 from "addApplication" /* 4486 */;

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
};