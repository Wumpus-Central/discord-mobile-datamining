// discord_app/modules/conjure/app_hover_card/useConjureAppProject.tsx
import ConjureActionCreators from "../projects/ConjureActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

require = fn;
const canRemixProject = fn(6838).canRemixProject;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/app_hover_card/useConjureAppProject.tsx");

export default function useConjureAppProject(arg0, guildId, arg2) {
  _require = arg0;
  dependencyMap = arg2;
  const tmp4 =
    require("ConjureGuildExperiment").useIsConjureGuildEnabled({ guildId, location: "ConjureAppHoverCard" }) &&
    null != guildId;
  noop = tmp4;
  let items = [arg2, arg0];
  const effect = noop.useEffect(() => {
    let tmp = closure_1;
    if (closure_1) {
      tmp = null != closure_0;
    }
    if (tmp) {
      const items = [closure_0];
      const missingConjureProjects = ConjureActionCreators.loadMissingConjureProjects(items);
    }
  }, items);
  let obj = require("ConjureGuildExperiment");
  const items1 = [project];
  const items2 = [arg0];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items1,
    () => {
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
    },
    items2,
  );
  project = stateFromStoresObject.project;
  const isUnavailable = stateFromStoresObject.isUnavailable;
  const items3 = [project, tmp4, arg0, isUnavailable];
  return noop.useMemo(() => {
    const obj = { project, remixProject: null, isSettled: null };
    let tmp2 = null;
    if (closure_2) {
      tmp2 = null;
      if (null != project) {
        tmp2 = null;
        if (canRemixProject(project)) {
          tmp2 = project;
        }
      }
    }
    obj.remixProject = tmp2;
    obj.isSettled = null == closure_0 || null != project || isUnavailable;
    return obj;
  }, items3);
}
