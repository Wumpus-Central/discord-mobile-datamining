// discord_app/modules/experiments/client_override_hooks/useExperimentAssignments.tsx
import trackExposureToExperiment from "../ExperimentManager.tsx";
import closure_2 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../ExperimentStore.tsx";
import closure_4 from "../apex/ApexExperimentStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/experiments/client_override_hooks/useExperimentAssignments.tsx",
);

export const useExperimentAssignment = function useExperimentAssignment(experiment, arg1) {
  const _require = experiment;
  dependencyMap = arg1;
  const items = [closure_3, closure_4];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (experiment.system === experiment(table[4]).ExperimentSystem.LEGACY) {
      const userExperimentDescriptor = closure_1_3.getUserExperimentDescriptor(tmp.name);
      let bucket;
      if (userExperimentDescriptor != null) {
        bucket = userExperimentDescriptor.bucket;
      }
      let variantId = bucket;
    } else {
      const assignment = closure_1_4.getAssignment(tmp.kind, table, tmp.name);
      if (assignment != null) {
        variantId = assignment.variantId;
      }
    }
    return variantId;
  });
};
export const getExperimentServerAssignment = function getExperimentServerAssignment(name, id) {
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [closure_3, closure_4];
    tmp = items;
  }
  [obj, obj2] = callback(tmp, 2);
  if (null == name) {
    return null;
  } else if (name.system === trackExposureToExperiment.ExperimentSystem.LEGACY) {
    name = name.name;
    let loadedUserExperiment = obj.getLoadedUserExperiment(name);
  } else {
    loadedUserExperiment = obj2.getServerAssignment(name.kind, id, name.name);
  }
};
export const useExperimentServerAssignment = function useExperimentServerAssignment(experiment, arg1) {
  const _require = experiment;
  dependencyMap = arg1;
  let items = [closure_3, closure_4];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let name = experiment;
    const items = [closure_1_3, closure_1_4];
    [obj, obj2] = closure_1_2(items, 2);
    if (null == experiment) {
      return null;
    } else if (name.system === experiment(table[4]).ExperimentSystem.LEGACY) {
      name = name.name;
      let loadedUserExperiment = obj.getLoadedUserExperiment(name);
    } else {
      loadedUserExperiment = obj2.getServerAssignment(name.kind, table, name.name);
    }
  });
};
