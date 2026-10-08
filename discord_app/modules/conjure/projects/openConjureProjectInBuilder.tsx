// === Module 12358: openConjureProjectInBuilder ===

// Module 12358 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 6932 */;
import ConjureActivity from "ConjureActivity" /* 12359 */;
import openConjureProject from "openConjureProject" /* 12360 */;
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