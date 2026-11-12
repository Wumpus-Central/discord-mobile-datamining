// === Module 15057: useConjureAppProject ===

// Module 15057 (useConjureAppProject)
import ConjureActionCreators from "ConjureActionCreators" /* 7265 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore_mod from "ConjureProjectStore" /* 6954 */;

const require = globalThis.__r;

require = fn;
let ConjureProjectStore = fn(6954);
({ canRemixProject: c3, isProjectOwner: closure_4 } = ConjureProjectStore);
let ConjureProjectStore = ConjureProjectStore_mod;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/app_hover_card/useConjureAppProject.tsx");

export default function useConjureAppProject(arg0, guildId, arg2) {
  _require = arg0;
  dependencyMap = arg2;
  let tmp4 = require("ConjureGuildExperiment").useIsConjureGuildEnabled({ guildId, location: "ConjureAppHoverCard" }) && null != guildId;
  noop = tmp4;
  items = [arg2, arg0];
  const effect = noop.useEffect(() => {
    let tmp = closure_1;
    if (closure_1) {
      tmp = null != closure_0;
    }
    if (tmp) {
      items = [closure_0];
      const missingConjureProjects = ConjureActionCreators.loadMissingConjureProjects(items);
    }
  }, items);
  let obj = require("ConjureGuildExperiment");
  const items1 = [ConjureProjectStore];
  const items2 = [arg0];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items1, () => {
    let tmp2 = null;
    if (null != closure_0) {
      project = ConjureProjectStore.getProject(closure_0);
      if (project == null) {
        project = null;
      }
      tmp2 = project;
    }
    const obj = { project: tmp2, isUnavailable: null };
    let result = null != closure_0;
    if (result) {
      result = ConjureActionCreators.isConjureProjectUnavailable(closure_0);
    }
    obj.isUnavailable = result;
    return obj;
  }, items2);
  let project = stateFromStoresObject.project;
  const isUnavailable = stateFromStoresObject.isUnavailable;
  const items3 = [project, tmp4, arg0, isUnavailable];
  return noop.useMemo(() => {
    const obj = { project, remixProject: null, editProject: null, isSettled: null };
    let tmp2 = null;
    if (closure_2) {
      tmp2 = null;
      if (null != project) {
        tmp2 = null;
        if (React3(project)) {
          tmp2 = project;
        }
      }
    }
    obj.remixProject = tmp2;
    let tmp4 = null;
    if (null != project) {
      tmp4 = null;
      if (React4(project)) {
        tmp4 = project;
      }
    }
    obj.editProject = tmp4;
    obj.isSettled = null == closure_0 || null != project || isUnavailable;
    return obj;
  }, items3);
};