// discord_app/modules/experiments/client_override_hooks/useCodedLinksExperimentEmbeds.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import useLegacyExperiments from "useLegacyExperiments.tsx";
import useApexExperiments from "useApexExperiments.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import ExperimentStore from "../ExperimentStore.tsx";
import ApexExperimentStore from "../apex/ApexExperimentStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [UserStore];
        const fn = function s() {
          const items = [UserStore];
          const first = _slicedToArray(items, 1)[0];
          const currentUser = first.getCurrentUser();
          let isStaffResult;
          if (currentUser != null) {
            isStaffResult = currentUser.isStaff();
          }
          if (!isStaffResult) {
            const currentUser1 = first.getCurrentUser();
            let isStaffPersonalResult;
            if (currentUser1 != null) {
              isStaffPersonalResult = currentUser1.isStaffPersonal();
            }
            isStaffResult = isStaffPersonalResult;
          }
          return isStaffResult;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      let items = [UserStore];
      const obj = get_initialized;
      return obj.useStateFromStores(items, () => {
        const items = [UserStore];
        const first = _slicedToArray(items, 1)[0];
        const currentUser = first.getCurrentUser();
        let isStaffResult;
        if (currentUser != null) {
          isStaffResult = currentUser.isStaff();
        }
        if (!isStaffResult) {
          const currentUser1 = first.getCurrentUser();
          let isStaffPersonalResult;
          if (currentUser1 != null) {
            isStaffPersonalResult = currentUser1.isStaffPersonal();
          }
          isStaffResult = isStaffPersonalResult;
        }
        return isStaffResult;
      });
    };
let closure_7 = tmp2;
let closure_8 = {};
let closure_9 = {};
let closure_10 = {};
let closure_11 = {};
let closure_12 = {};
let closure_13 = { legacyExperiments: {}, legacyOverridesInfo: {}, apexExperiments: {}, apexOverridesInfo: {} };
ReactCompilerGating = ReactCompilerGating_mod;
function canSeeExperimentEmbeds() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [UserStore];
    tmp = items;
  }
  const first = _slicedToArray(tmp, 1)[0];
  const currentUser = first.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  if (!isStaffResult) {
    const currentUser1 = first.getCurrentUser();
    let isStaffPersonalResult;
    if (currentUser1 != null) {
      isStaffPersonalResult = currentUser1.isStaffPersonal();
    }
    isStaffResult = isStaffPersonalResult;
  }
  return isStaffResult;
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_0;
      let first;
      let tmp13;
      let tmp16;
      let tmp20;
      let tmp7;
      let tmp9;
      const obj = require("react");
      const cResult = obj.c(22);
      const tmp4 = closure_7();
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ExperimentStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4) {
        const fn = function s() {
          let registeredExperiments;
          if (closure_0) {
            registeredExperiments = ExperimentStore.getRegisteredExperiments();
          } else {
            registeredExperiments = closure_8;
          }
          return registeredExperiments;
        };
        cResult[1] = tmp4;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = require("get initialized");
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ExperimentStore];
        cResult[3] = items1;
        tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== tmp4) {
        class O {
          constructor() {
            let allExperimentOverrideDescriptors;
            if (closure_0) {
              allExperimentOverrideDescriptors = ExperimentStore.getAllExperimentOverrideDescriptors();
            } else {
              allExperimentOverrideDescriptors = closure_9;
            }
            return allExperimentOverrideDescriptors;
          }
        }
        cResult[4] = tmp4;
        cResult[5] = O;
      } else {
        class O {
          constructor() {
            let allExperimentOverrideDescriptors;
            if (closure_0) {
              allExperimentOverrideDescriptors = ExperimentStore.getAllExperimentOverrideDescriptors();
            } else {
              allExperimentOverrideDescriptors = closure_9;
            }
            return allExperimentOverrideDescriptors;
          }
        }
      }
      const tmpResult9 = require("get initialized");
      const stateFromStoresObject1 = tmpResult9.useStateFromStoresObject(tmp9, O);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor() {
            let allExperimentOverrideDescriptors;
            if (closure_0) {
              allExperimentOverrideDescriptors = ExperimentStore.getAllExperimentOverrideDescriptors();
            } else {
              allExperimentOverrideDescriptors = closure_9;
            }
            return allExperimentOverrideDescriptors;
          }
        }
        const items2 = [ApexExperimentStore];
        cResult[6] = items2;
        tmp13 = items2;
      } else {
        class O {
          constructor() {
            let allExperimentOverrideDescriptors;
            if (closure_0) {
              allExperimentOverrideDescriptors = ExperimentStore.getAllExperimentOverrideDescriptors();
            } else {
              allExperimentOverrideDescriptors = closure_9;
            }
            return allExperimentOverrideDescriptors;
          }
        }
      }
      if (cResult[7] !== tmp4) {
        class F {
          constructor() {
            let experimentsMetadata;
            if (closure_0) {
              experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
            } else {
              experimentsMetadata = closure_10;
            }
            return experimentsMetadata;
          }
        }
        cResult[7] = tmp4;
        cResult[8] = F;
      } else {
        class F {
          constructor() {
            let experimentsMetadata;
            if (closure_0) {
              experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
            } else {
              experimentsMetadata = closure_10;
            }
            return experimentsMetadata;
          }
        }
      }
      const tmpResult10 = require("get initialized");
      const stateFromStores = tmpResult10.useStateFromStores(tmp13, F);
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            let experimentsMetadata;
            if (closure_0) {
              experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
            } else {
              experimentsMetadata = closure_10;
            }
            return experimentsMetadata;
          }
        }
        const items3 = [ApexExperimentStore];
        cResult[9] = items3;
        tmp16 = items3;
      } else {
        class F {
          constructor() {
            let experimentsMetadata;
            if (closure_0) {
              experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
            } else {
              experimentsMetadata = closure_10;
            }
            return experimentsMetadata;
          }
        }
      }
      if (cResult[10] !== tmp4) {
        class F {
          constructor() {
            let experimentsMetadata;
            if (closure_0) {
              experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
            } else {
              experimentsMetadata = closure_10;
            }
            return experimentsMetadata;
          }
        }
        cResult[10] = tmp4;
        cResult[11] = tmp18;
      } else {
        class F {
          constructor() {
            let experimentsMetadata;
            if (closure_0) {
              experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
            } else {
              experimentsMetadata = closure_10;
            }
            return experimentsMetadata;
          }
        }
      }
      const tmpResult11 = require("get initialized");
      const stateFromStores1 = tmpResult11.useStateFromStores(tmp16, tmp18);
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            let experimentsMetadata;
            if (closure_0) {
              experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
            } else {
              experimentsMetadata = closure_10;
            }
            return experimentsMetadata;
          }
        }
        const items4 = [ApexExperimentStore];
        cResult[12] = items4;
        tmp20 = items4;
      } else {
        class F {
          constructor() {
            let experimentsMetadata;
            if (closure_0) {
              experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
            } else {
              experimentsMetadata = closure_10;
            }
            return experimentsMetadata;
          }
        }
      }
      if (cResult[13] !== tmp4) {
        class F {
          constructor() {
            let experimentsMetadata;
            if (closure_0) {
              experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
            } else {
              experimentsMetadata = closure_10;
            }
            return experimentsMetadata;
          }
        }
        cResult[13] = tmp4;
        cResult[14] = tmp22;
      } else {
        class F {
          constructor() {
            let experimentsMetadata;
            if (closure_0) {
              experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
            } else {
              experimentsMetadata = closure_10;
            }
            return experimentsMetadata;
          }
        }
      }
      const tmpResult12 = require("get initialized");
      const stateFromStores2 = tmpResult12.useStateFromStores(tmp20, tmp22);
      if (cResult[15] === stateFromStores2) {
        class F {
          constructor() {
            let experimentsMetadata;
            if (closure_0) {
              experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
            } else {
              experimentsMetadata = closure_10;
            }
            return experimentsMetadata;
          }
        }
      }
      if (tmp4) {
        class F {
          constructor() {
            let experimentsMetadata;
            if (closure_0) {
              experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
            } else {
              experimentsMetadata = closure_10;
            }
            return experimentsMetadata;
          }
        }
        const tmpResult13 = require("useLegacyExperiments");
        tmp25[0] = tmpResult13.parseRegisteredExperiments(stateFromStoresObject);
        const tmpResult14 = require("useLegacyExperiments");
        tmp25[1] = tmpResult14.getLegacyOverridesInfo(stateFromStoresObject1);
        const tmpResult15 = require("useApexExperiments");
        tmp25[2] = tmpResult15.mergeApexExperiments(stateFromStores, stateFromStores1);
        const tmpResult16 = require("useApexExperiments");
        tmp25[3] = tmpResult16.getApexExperimentOverridesInfo(stateFromStores2);
      } else {
        class F {
          constructor() {
            let experimentsMetadata;
            if (closure_0) {
              experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
            } else {
              experimentsMetadata = closure_10;
            }
            return experimentsMetadata;
          }
        }
      }
      cResult[15] = stateFromStores2;
      cResult[16] = stateFromStores;
      cResult[17] = stateFromStores1;
      cResult[18] = tmp4;
      cResult[19] = stateFromStoresObject1;
      cResult[20] = stateFromStoresObject;
      cResult[21] = tmp25;
    }
  : () => {
      let closure_0;
      let stateFromStores2;
      let stateFromStoresObject;
      const tmp = closure_7();
      _require = tmp;
      let obj = require("get initialized");
      const items = [stateFromStores2];
      stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
        let registeredExperiments;
        if (closure_0) {
          registeredExperiments = ExperimentStore.getRegisteredExperiments();
        } else {
          registeredExperiments = closure_8;
        }
        return registeredExperiments;
      });
      let obj2 = require("get initialized");
      const items1 = [stateFromStores2];
      const stateFromStoresObject1 = obj2.useStateFromStoresObject(items1, () => {
        let allExperimentOverrideDescriptors;
        if (closure_0) {
          allExperimentOverrideDescriptors = ExperimentStore.getAllExperimentOverrideDescriptors();
        } else {
          allExperimentOverrideDescriptors = closure_9;
        }
        return allExperimentOverrideDescriptors;
      });
      let obj3 = require("get initialized");
      const items2 = [ApexExperimentStore];
      const stateFromStores = obj3.useStateFromStores(items2, () => {
        let experimentsMetadata;
        if (closure_0) {
          experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
        } else {
          experimentsMetadata = closure_10;
        }
        return experimentsMetadata;
      });
      let obj4 = require("get initialized");
      const items3 = [ApexExperimentStore];
      const stateFromStores1 = obj4.useStateFromStores(items3, () => {
        let registeredExperiments;
        if (closure_0) {
          registeredExperiments = ApexExperimentStore.getRegisteredExperiments();
        } else {
          registeredExperiments = closure_11;
        }
        return registeredExperiments;
      });
      let obj5 = require("get initialized");
      const items4 = [ApexExperimentStore];
      stateFromStores2 = obj5.useStateFromStores(items4, () => {
        let clientOverrides;
        if (closure_0) {
          clientOverrides = ApexExperimentStore.getClientOverrides();
        } else {
          clientOverrides = closure_12;
        }
        return clientOverrides;
      });
      const items5 = [
        tmp,
        stateFromStoresObject,
        stateFromStoresObject1,
        stateFromStores,
        stateFromStores1,
        stateFromStores2,
      ];
      return stateFromStores.useMemo(() => {
        let obj2;
        let obj3;
        let obj4;
        let obj5;
        let tmp2;
        if (closure_0) {
          const obj = {
            legacyExperiments: obj2.parseRegisteredExperiments(stateFromStoresObject),
            legacyOverridesInfo: obj3.getLegacyOverridesInfo(stateFromStoresObject1),
            apexExperiments: obj4.mergeApexExperiments(stateFromStores, stateFromStores1),
            apexOverridesInfo: obj5.getApexExperimentOverridesInfo(stateFromStores2),
          };
          obj2 = useLegacyExperiments;
          obj3 = useLegacyExperiments;
          obj4 = useApexExperiments;
          tmp2 = obj;
          obj5 = useApexExperiments;
        } else {
          tmp2 = closure_13;
        }
        return tmp2;
      }, items5);
    };
const result = size.fileFinishedImporting(
  "modules/experiments/client_override_hooks/useCodedLinksExperimentEmbeds.tsx",
);

export { canSeeExperimentEmbeds };
export const useCanSeeExperimentEmbeds = tmp2;
export const useCodedLinksExperimentEmbeds = tmp3;
