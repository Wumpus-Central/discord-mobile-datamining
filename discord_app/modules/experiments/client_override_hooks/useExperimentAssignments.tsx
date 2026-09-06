// === Module 11810: useExperimentAssignments ===

// Module 11810 (useExperimentAssignments)
import ExperimentManager from "ExperimentManager" /* 4481 */;
import _slicedToArray from "module_32" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 4476 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1236 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/client_override_hooks/useExperimentAssignments.tsx");

export const useExperimentAssignment = function useExperimentAssignment(experiment, maybeExtractIdResult) {
  _require = experiment;
  dependencyMap = maybeExtractIdResult;
  const items = [ExperimentStore, ApexExperimentStore];
  return require("initialize").useStateFromStores(items, () => {
    if (experiment.system === ExperimentManager.ExperimentSystem.LEGACY) {
      const userExperimentDescriptor = ExperimentStore.getUserExperimentDescriptor(experiment.name);
      let bucket;
      if (userExperimentDescriptor != null) {
        bucket = userExperimentDescriptor.bucket;
      }
      let variantId = bucket;
    } else {
      const assignment = ApexExperimentStore.getAssignment(experiment.kind, closure_1, experiment.name);
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
    const items = [ExperimentStore, ApexExperimentStore];
    tmp = items;
  }
  [obj, obj2] = _slicedToArray(tmp, 2);
  if (null == name) {
    return null;
  } else if (name.system === ExperimentManager.ExperimentSystem.LEGACY) {
    name = name.name;
    let loadedUserExperiment = obj.getLoadedUserExperiment(name);
  } else {
    loadedUserExperiment = obj2.getServerAssignment(name.kind, id, name.name);
  }
  const tmp4 = _slicedToArray(tmp, 2);
};
export const useExperimentServerAssignment = function useExperimentServerAssignment(experiment, maybeExtractIdResult) {
  _require = experiment;
  dependencyMap = maybeExtractIdResult;
  let items = [ExperimentStore, ApexExperimentStore];
  return require("initialize").useStateFromStores(items, () => {
    let name = closure_0;
    const items = [ExperimentStore, ApexExperimentStore];
    [obj, obj2] = _slicedToArray(items, 2);
    if (null == closure_0) {
      return null;
    } else if (name.system === ExperimentManager.ExperimentSystem.LEGACY) {
      name = name.name;
      let loadedUserExperiment = obj.getLoadedUserExperiment(name);
    } else {
      loadedUserExperiment = obj2.getServerAssignment(name.kind, closure_1, name.name);
    }
    const tmp2 = _slicedToArray(items, 2);
  });
};