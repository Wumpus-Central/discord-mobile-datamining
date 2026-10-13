// === Module 12853: openConjureProjectInBuilder ===

// Module 12853 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 6946 */;
import ConjureActivity from "ConjureActivity" /* 12854 */;
import openConjureProject from "openConjureProject" /* 12855 */;
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