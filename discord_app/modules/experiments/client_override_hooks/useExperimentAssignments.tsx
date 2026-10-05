// discord_app/modules/experiments/client_override_hooks/useExperimentAssignments.tsx
import ExperimentManager from "../ExperimentManager.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import ExperimentStore from "../ExperimentStore.tsx";
import ApexExperimentStore from "../apex/ApexExperimentStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (kind, arg1) => {
      let closure_1;
      let first;
      _require = kind;
      dependencyMap = arg1;
      const obj = require("react");
      const cResult = obj.c(6);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ExperimentStore, ApexExperimentStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === kind.kind) {
        if (cResult[2] === kind.name) {
          if (cResult[3] === kind.system) {
            let tmp7;
            if (cResult[4] === arg1) {
              tmp7 = cResult[5];
            }
            const tmpResult = tmp(504);
            return tmpResult.useStateFromStores(first, tmp7);
          }
        }
      }
      const fn = function c() {
        let variantId;
        if (kind.system === ExperimentManager.ExperimentSystem.LEGACY) {
          const userExperimentDescriptor = ExperimentStore.getUserExperimentDescriptor(kind.name);
          let bucket;
          if (userExperimentDescriptor != null) {
            bucket = userExperimentDescriptor.bucket;
          }
          variantId = bucket;
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
    }
  : (arg0, arg1) => {
      let closure_1;
      let system;
      _require = arg0;
      dependencyMap = arg1;
      const items = [ExperimentStore, ApexExperimentStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        let variantId;
        if (system.system === ExperimentManager.ExperimentSystem.LEGACY) {
          const userExperimentDescriptor = ExperimentStore.getUserExperimentDescriptor(system.name);
          let bucket;
          if (userExperimentDescriptor != null) {
            bucket = userExperimentDescriptor.bucket;
          }
          variantId = bucket;
        } else {
          const assignment = ApexExperimentStore.getAssignment(system.kind, closure_1, system.name);
          if (assignment != null) {
            variantId = assignment.variantId;
          }
        }
        return variantId;
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_1;
      let first;
      let user;
      _require = arg0;
      dependencyMap = arg1;
      const obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ExperimentStore, ApexExperimentStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        let tmp7;
        if (cResult[2] === arg1) {
          tmp7 = cResult[3];
        }
        const tmpResult = tmp(504);
        return tmpResult.useStateFromStores(first, tmp7);
      }
      const fn = function c() {
        let obj;
        let obj2;
        const items = [ExperimentStore, ApexExperimentStore];
        [obj, obj2] = items;
        let tmp4 = null;
        _slicedToArray(items, 2);
        if (null != user) {
          let loadedUserExperiment;
          if (user.system === ExperimentManager.ExperimentSystem.LEGACY) {
            loadedUserExperiment = obj.getLoadedUserExperiment(user.name);
          } else {
            loadedUserExperiment = obj2.getServerAssignment(user.kind, closure_1, user.name);
          }
          tmp4 = loadedUserExperiment;
        }
        return tmp4;
      };
      cResult[1] = arg0;
      cResult[2] = arg1;
      cResult[3] = fn;
      tmp7 = fn;
    }
  : (arg0, arg1) => {
      let closure_1;
      let user;
      _require = arg0;
      dependencyMap = arg1;
      const obj = require("get initialized");
      let items = [ExperimentStore, ApexExperimentStore];
      return obj.useStateFromStores(items, () => {
        let obj;
        let obj2;
        const items = [ExperimentStore, ApexExperimentStore];
        [obj, obj2] = items;
        let tmp4 = null;
        _slicedToArray(items, 2);
        if (null != user) {
          let loadedUserExperiment;
          if (user.system === ExperimentManager.ExperimentSystem.LEGACY) {
            loadedUserExperiment = obj.getLoadedUserExperiment(user.name);
          } else {
            loadedUserExperiment = obj2.getServerAssignment(user.kind, closure_1, user.name);
          }
          tmp4 = loadedUserExperiment;
        }
        return tmp4;
      });
    };
function getExperimentServerAssignment(system, id) {
  let obj;
  let obj2;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [ExperimentStore, ApexExperimentStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  let tmp5 = null;
  _slicedToArray(tmp, 2);
  if (null != system) {
    let loadedUserExperiment;
    if (system.system === ExperimentManager.ExperimentSystem.LEGACY) {
      loadedUserExperiment = obj.getLoadedUserExperiment(system.name);
    } else {
      loadedUserExperiment = obj2.getServerAssignment(system.kind, id, system.name);
    }
    tmp5 = loadedUserExperiment;
  }
  return tmp5;
}
const result = size.fileFinishedImporting("modules/experiments/client_override_hooks/useExperimentAssignments.tsx");

export const useExperimentAssignment = tmp2;
export { getExperimentServerAssignment };
export const useExperimentServerAssignment = tmp3;
