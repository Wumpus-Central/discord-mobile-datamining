// === Module 13187: useExperimentAssignments ===

// Module 13187 (useExperimentAssignments)
import ExperimentManager from "ExperimentManager" /* 5238 */;
import _slicedToArray from "module_32" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 5233 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1247 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/client_override_hooks/useExperimentAssignments.tsx");

export function useExperimentAssignment(experiment, maybeExtractIdResult) {
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
}
export function getExperimentServerAssignment(name, id) {
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [ExperimentStore, ApexExperimentStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  if (null == name) {
    return null;
  } else if (name.system === ExperimentManager.ExperimentSystem.LEGACY) {
    name = name.name;
    let loadedUserExperiment = obj.getLoadedUserExperiment(name);
  } else {
    loadedUserExperiment = obj2.getServerAssignment(name.kind, id, name.name);
  }
  const tmp4 = _slicedToArray(tmp, 2);
}
export function useExperimentServerAssignment(experiment, maybeExtractIdResult) {
  _require = experiment;
  dependencyMap = maybeExtractIdResult;
  let items = [ExperimentStore, ApexExperimentStore];
  return require("initialize").useStateFromStores(items, () => {
    let name = closure_0;
    const items = [ExperimentStore, ApexExperimentStore];
    [obj, obj2] = items;
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
}