// discord_app/modules/experiments/client_override_hooks/useExperimentAssignments.tsx
import ExperimentManager from "../ExperimentManager.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import ExperimentStore from "../ExperimentStore.tsx";
import ApexExperimentStore from "../apex/ApexExperimentStore.tsx";

const require = globalThis.__r;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useExperimentAssignment(kind, arg1) {
      _require = kind;
      dependencyMap = arg1;
      const cResult = require("c").c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ExperimentStore, ApexExperimentStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === kind.kind) {
        if (cResult[2] === kind.name) {
          if (cResult[3] === kind.system) {
            if (cResult[4] === arg1) {
              let tmp7 = cResult[5];
            }
            return tmp(504).useStateFromStores(first, tmp7);
          }
        }
      }
      const fn = function p() {
        if (kind.system === ExperimentManager.ExperimentSystem.LEGACY) {
          const userExperimentDescriptor = ExperimentStore.getUserExperimentDescriptor(kind.name);
          let bucket;
          if (userExperimentDescriptor != null) {
            bucket = userExperimentDescriptor.bucket;
          }
          let variantId = bucket;
        } else {
          const assignment = ApexExperimentStore.getAssignment(kind.kind, closure_1, kind.name);
          if (assignment != null) {
            variantId = assignment.variantId;
          }
        }
        return variantId;
      };
      cResult[1] = kind.kind;
      cResult[2] = kind.name;
      cResult[3] = kind.system;
      cResult[4] = arg1;
      cResult[5] = fn;
      tmp7 = fn;
      const obj = require("c");
      tmp = _require;
    }
  : function useExperimentAssignment(arg0, arg1) {
      _require = arg0;
      dependencyMap = arg1;
      const items = [ExperimentStore, ApexExperimentStore];
      return require("initialize").useStateFromStores(items, () => {
        if (system.system === ExperimentManager.ExperimentSystem.LEGACY) {
          const userExperimentDescriptor = ExperimentStore.getUserExperimentDescriptor(system.name);
          let bucket;
          if (userExperimentDescriptor != null) {
            bucket = userExperimentDescriptor.bucket;
          }
          let variantId = bucket;
        } else {
          const assignment = ApexExperimentStore.getAssignment(system.kind, closure_1, system.name);
          if (assignment != null) {
            variantId = assignment.variantId;
          }
        }
        return variantId;
      });
    };
function getExperimentServerAssignment(name, id) {
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/client_override_hooks/useExperimentAssignments.tsx");

export const useExperimentAssignment = tmp2;
export { getExperimentServerAssignment };
export const useExperimentServerAssignment = ReactCompilerGating.isReactCompilerEnabled()
  ? function useExperimentServerAssignment(arg0, arg1) {
      _require = arg0;
      dependencyMap = arg1;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ExperimentStore, ApexExperimentStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        if (cResult[2] === arg1) {
          let tmp7 = cResult[3];
        }
        return tmp(504).useStateFromStores(first, tmp7);
      }
      const fn = function p() {
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
      };
      cResult[1] = arg0;
      cResult[2] = arg1;
      cResult[3] = fn;
      tmp7 = fn;
      const obj = require("c");
      tmp = _require;
    }
  : function useExperimentServerAssignment(arg0, arg1) {
      _require = arg0;
      dependencyMap = arg1;
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
    };
