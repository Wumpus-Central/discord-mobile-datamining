// === Module 7516: conjureServerProject ===

// Module 7516 (conjureServerProject)
import ConjureActivity from "ConjureActivity" /* 7517 */;
import conjurePageRoutes from "conjurePageRoutes" /* 7518 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6964 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/server_workspace/conjureServerProject.tsx");

export function conjureServerProjectGuildId(project) {
  let result = null;
  if (null != project) {
    result = null;
    if ("guild" === project.install_scope) {
      result = null;
      if (null == project.install_scope_setup) {
        result = ConjureActivity.conjureProjectGuildId(project);
      }
    }
  }
  return result;
}
export function getConjureServerProjects(id) {
  closure_0 = id;
  items = [...ConjureProjectStore.getOwnedProjects(), ...ConjureProjectStore.getSharedProjects(id)];
  return items.filter((install_scope) => {
    let result = null;
    if (null != install_scope) {
      result = null;
      if ("guild" === install_scope.install_scope) {
        result = null;
        if (null == install_scope.install_scope_setup) {
          result = ConjureActivity.conjureProjectGuildId(install_scope);
        }
      }
    }
    return result === closure_0;
  });
}
export function conjureProjectRoute(arg0) {
  const project = ConjureProjectStore.getProject(arg0);
  let result = null;
  if (null != project) {
    result = null;
    if ("guild" === project.install_scope) {
      result = null;
      if (null == project.install_scope_setup) {
        result = ConjureActivity.conjureProjectGuildId(project);
      }
    }
  }
  if (null != result) {
    let result1 = conjurePageRoutes.conjureServerProjectRoute(result, arg0);
  } else {
    result1 = conjurePageRoutes.conjurePageRoute(arg0);
  }
  return result1;
}