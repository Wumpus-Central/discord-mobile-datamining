// === Module 12889: openConjureProjectInBuilder ===

// Module 12889 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 6951 */;
import ConjureActivity from "ConjureActivity" /* 11962 */;
import openConjureProject from "openConjureProject" /* 12890 */;
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