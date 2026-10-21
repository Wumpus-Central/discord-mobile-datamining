// === Module 13411: openConjureProjectInBuilder ===

// Module 13411 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 7322 */;
import ConjureActivity from "ConjureActivity" /* 11676 */;
import openConjureProject from "openConjureProject" /* 13412 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/projects/openConjureProjectInBuilder.tsx");

export default function openConjureProjectInBuilder(id) {
  let result = ConjureActivity.conjureProjectGuildId(id);
  if (result == null) {
    result = ConjureUtils.resolveConjureWorkspaceGuildId("openConjureProjectInBuilder");
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