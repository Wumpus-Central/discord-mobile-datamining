// === Module 13461: openConjureProjectInBuilder ===

// Module 13461 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 7330 */;
import ConjureActivity from "ConjureActivity" /* 11704 */;
import openConjureProject from "openConjureProject" /* 13462 */;
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