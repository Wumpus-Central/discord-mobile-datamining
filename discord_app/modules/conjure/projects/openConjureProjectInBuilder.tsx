// === Module 12295: openConjureProjectInBuilder ===

// Module 12295 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 6939 */;
import ConjureActivity from "ConjureActivity" /* 12296 */;
import openConjureProject from "openConjureProject" /* 12297 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/projects/openConjureProjectInBuilder.tsx");

export default function openConjureProjectInBuilder(id) {
  let result = ConjureActivity.conjureProjectGuildId(id);
  if (result == null) {
    result = ConjureUtils.resolveConjureWorkspaceGuildId("openVibegrationsProjectInBuilder");
    const tmpResult = ConjureUtils;
  }
  let flag = null != result;
  if (flag) {
    openConjureProject.openConjureProject(result, id.id);
    flag = true;
    const tmpResult2 = openConjureProject;
  }
  return flag;
};