// discord_app/modules/experiments/client_override_hooks/useExperimentAssignments.tsx
import _slicedToArray from "_slicedToArray";
import getHash from "getHash";
import initialize from "initialize";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/experiments/client_override_hooks/useExperimentAssignments.tsx");

export const useExperimentAssignment = function useExperimentAssignment(experiment, arg1) {
  const _require = experiment;
  const dependencyMap = arg1;
  const items = [getHash, initialize];
  return _require(589).useStateFromStores(items, () => {
    if (experiment.system === experiment(table[4]).ExperimentSystem.LEGACY) {
      const userExperimentDescriptor = outer1_3.getUserExperimentDescriptor(tmp.name);
      let bucket;
      if (userExperimentDescriptor != null) {
        bucket = userExperimentDescriptor.bucket;
      }
      let variantId = bucket;
    } else {
      const assignment = outer1_4.getAssignment(tmp.kind, table, tmp.name);
      if (assignment != null) {
        variantId = assignment.variantId;
      }
    }
    return variantId;
  });
};
export const getExperimentServerAssignment = function getExperimentServerAssignment(name, id) {
  let obj;
  let obj2;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [getHash, initialize];
    tmp = items;
  }
  [obj, obj2] = callback(tmp, 2);
  if (null == name) {
    return null;
  } else if (name.system === require(4207) /* trackExposureToExperiment */.ExperimentSystem.LEGACY) {
    name = name.name;
    let loadedUserExperiment = obj.getLoadedUserExperiment(name);
  } else {
    loadedUserExperiment = obj2.getServerAssignment(name.kind, id, name.name);
  }
};
export const useExperimentServerAssignment = function useExperimentServerAssignment(experiment, arg1) {
  const _require = experiment;
  const dependencyMap = arg1;
  let items = [getHash, initialize];
  return _require(589).useStateFromStores(items, () => {
    let obj;
    let obj2;
    let name = experiment;
    const items = [outer1_3, outer1_4];
    [obj, obj2] = outer1_2(items, 2);
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