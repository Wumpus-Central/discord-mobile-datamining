// === Module 12264: openConjureProjectInBuilder ===

// Module 12264 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 6746 */;
import ConjureActivity from "ConjureActivity" /* 12265 */;
import openConjureProject from "openConjureProject" /* 12266 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/projects/openConjureProjectInBuilder.tsx");

export default function openConjureProjectInBuilder(id) {
  const obj = ConjureActivity;
  let result = obj.conjureProjectGuildId(id);
  if (result == null) {
    const tmpResult = ConjureUtils;
    result = tmpResult.resolveConjureWorkspaceGuildId("openVibegrationsProjectInBuilder");
  }
  let flag = null != result;
  if (flag) {
    const tmpResult2 = openConjureProject;
    tmpResult2.openConjureProject(result, id.id);
    flag = true;
  }
  return flag;
};