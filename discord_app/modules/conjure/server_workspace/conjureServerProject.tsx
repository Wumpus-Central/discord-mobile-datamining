// === Module 6838: conjureServerProject ===

// Module 6838 (conjureServerProject)
import ConjureActivity from "ConjureActivity" /* 6839 */;
import conjurePageRoutes from "conjurePageRoutes" /* 6840 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6621 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/server_workspace/conjureServerProject.tsx");

export function conjureServerProjectGuildId(project) {
  let install_scope;
  if (project != null) {
    install_scope = project.install_scope;
  }
  let result = null;
  if ("guild" === install_scope) {
    result = ConjureActivity.conjureProjectGuildId(project);
  }
  return result;
}
export function getConjureServerProjects(id) {
  closure_0 = id;
  items = [...ConjureProjectStore.getOwnedProjects(), ...ConjureProjectStore.getSharedProjects(id)];
  return items.filter((install_scope) => {
    install_scope = undefined;
    if (install_scope != null) {
      install_scope = install_scope.install_scope;
    }
    let result = null;
    if ("guild" === install_scope) {
      result = ConjureActivity.conjureProjectGuildId(install_scope);
    }
    return result === closure_0;
  });
}
export function conjureProjectRoute(arg0) {
  const project = ConjureProjectStore.getProject(arg0);
  let install_scope;
  if (project != null) {
    install_scope = project.install_scope;
  }
  let result = null;
  if ("guild" === install_scope) {
    result = ConjureActivity.conjureProjectGuildId(project);
  }
  if (null != result) {
    let result1 = conjurePageRoutes.conjureServerProjectRoute(result, arg0);
  } else {
    result1 = conjurePageRoutes.conjurePageRoute(arg0);
  }
  return result1;
}