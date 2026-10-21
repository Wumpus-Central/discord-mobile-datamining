// === Module 6762: isConjureApplication ===

// Module 6762 (isConjureApplication)
import ApplicationStore from "ApplicationStore" /* 2045 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6752 */;

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