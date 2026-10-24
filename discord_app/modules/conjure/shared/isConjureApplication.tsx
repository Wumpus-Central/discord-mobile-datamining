// === Module 6783: isConjureApplication ===

// Module 6783 (isConjureApplication)
import ApplicationStore from "ApplicationStore" /* 2045 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;

const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/shared/isConjureApplication.tsx");

export default function isConjureApplication(applicationId) {
  const application = ApplicationStore.getApplication(applicationId);
  let conjureProjectId;
  if (application != null) {
    conjureProjectId = application.conjureProjectId;
  }
  let result = null != conjureProjectId;
  if (!result) {
    result = ConjureProjectStore.isConjureProjectApplication(applicationId);
  }
  return result;
};