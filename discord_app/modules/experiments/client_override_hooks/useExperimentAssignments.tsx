// discord_app/modules/experiments/client_override_hooks/useExperimentAssignments.tsx
import trackExposureToExperiment from "../ExperimentManager.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import getHash from "../ExperimentStore.tsx";
import initialize from "../apex/ApexExperimentStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/experiments/client_override_hooks/useExperimentAssignments.tsx");

export const useExperimentAssignment = function useExperimentAssignment(experiment, maybeExtractIdResult) {
  const _require = experiment;
  dependencyMap = maybeExtractIdResult;
  const items = [closure_3, closure_4];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (experiment.system === experiment(maybeExtractIdResult[4]).ExperimentSystem.LEGACY) {
      const userExperimentDescriptor = closure_1_3.getUserExperimentDescriptor(experiment.name);
      let bucket;
      if (userExperimentDescriptor != null) {
        bucket = userExperimentDescriptor.bucket;
      }
      let variantId = bucket;
    } else {
      const assignment = closure_1_4.getAssignment(experiment.kind, maybeExtractIdResult, experiment.name);
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
  const tmp4 = callback(tmp, 2);
};
export const useExperimentServerAssignment = function useExperimentServerAssignment(experiment, maybeExtractIdResult) {
  const _require = experiment;
  dependencyMap = maybeExtractIdResult;
  let items = [closure_3, closure_4];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let name = experiment;
    const items = [closure_1_3, closure_1_4];
    [obj, obj2] = closure_1_2(items, 2);
    if (null == experiment) {
      return null;
    } else if (name.system === experiment(maybeExtractIdResult[4]).ExperimentSystem.LEGACY) {
      name = name.name;
      let loadedUserExperiment = obj.getLoadedUserExperiment(name);
    } else {
      loadedUserExperiment = obj2.getServerAssignment(name.kind, maybeExtractIdResult, name.name);
    }
    const tmp2 = closure_1_2(items, 2);
  });
};