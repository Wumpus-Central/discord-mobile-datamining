// === Module 10813: conjureProjectConnection ===

// Module 10813 (conjureProjectConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10720 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/conjureProjectConnection.tsx");

export const projectStepHandlers = {
  project_named(name, projectId) {
    projectId = projectId.projectId;
    const project = ConjureProjectStore.getProject(projectId);
    if (tmp2) {
      const obj2 = { type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: null };
      const obj3 = {};
      const merged = Object.assign(project);
      obj3.name = name.name;
      obj2.project = obj3;
      DispatcherDefault.dispatch(obj2);
    }
    const result = ConjureActionCreators.refreshPreviewApplication(projectId);
    result.catch(() => {

    });
    tmp2 = null != project && null != name.name;
  },
  app_profile_updated(arg0, projectId) {
    const result = ConjureActionCreators.refreshPreviewApplication(projectId.projectId);
    result.catch(() => {

    });
  }
};