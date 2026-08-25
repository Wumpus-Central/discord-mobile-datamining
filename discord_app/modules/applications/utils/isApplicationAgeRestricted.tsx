// === Module 9689: isApplicationAgeRestricted ===

// Module 9689 (isApplicationAgeRestricted)
import isAgeRestrictedContentClassification from "isAgeRestrictedContentClassification" /* 4939 */;
import getUnitIdDefault from "getUnitId" /* 9690 */;
import closure_3 from "addApplication" /* 4421 */;

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