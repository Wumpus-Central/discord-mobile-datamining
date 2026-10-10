// === Module 10672: useCodedLinksExperimentEmbeds ===

// Module 10672 (useCodedLinksExperimentEmbeds)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import useLegacyExperiments from "useLegacyExperiments" /* 10673 */;
import useApexExperiments from "useApexExperiments" /* 10674 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import ExperimentStore from "ExperimentStore" /* 5016 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1259 */;

const require = globalThis.__r;

require = fn;
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanSeeExperimentEmbeds() {
  const cResult = c.c(2);
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
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useCanSeeExperimentEmbeds() {
  let items = [UserStore];
  return initialize.useStateFromStores(items, () => {
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
});
let closure_7 = tmp2;
let closure_8 = {};
let closure_9 = {};
let closure_10 = {};
let closure_11 = {};
let closure_12 = {};
let closure_13 = { legacyExperiments: {}, legacyOverridesInfo: {}, apexExperiments: {}, apexOverridesInfo: {} };
ReactCompilerGating = fn(558);
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/client_override_hooks/useCodedLinksExperimentEmbeds.tsx");

export { canSeeExperimentEmbeds };
export const useCanSeeExperimentEmbeds = tmp2;
export const useCodedLinksExperimentEmbeds = ReactCompilerGating.isReactCompilerEnabled() ? (function useCodedLinksExperimentEmbeds() {
  let obj = _require;
  let apexExperimentOverridesInfo = dependencyMap;
  const cResult = require("c").c(22);
  const tmp3 = closure_7();
  _require = tmp3;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ExperimentStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp3) {
    const fn = function s() {
      if (closure_0) {
        let registeredExperiments = ExperimentStore.getRegisteredExperiments();
      } else {
        registeredExperiments = closure_8;
      }
      return registeredExperiments;
    };
    cResult[1] = tmp3;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj2 = require("c");
  const stateFromStoresObject = obj(504).useStateFromStoresObject(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ExperimentStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== tmp3) {
    class O {
      constructor() {
        if (closure_0) {
          tmp2 = closure_5;
          allExperimentOverrideDescriptors = closure_5.getAllExperimentOverrideDescriptors();
        } else {
          allExperimentOverrideDescriptors = closure_9;
        }
        return allExperimentOverrideDescriptors;
      }
    }
    cResult[4] = tmp3;
    cResult[5] = O;
  } else {
    class O {
      constructor() {
        if (closure_0) {
          tmp2 = closure_5;
          allExperimentOverrideDescriptors = closure_5.getAllExperimentOverrideDescriptors();
        } else {
          allExperimentOverrideDescriptors = closure_9;
        }
        return allExperimentOverrideDescriptors;
      }
    }
  }
  const objResult = obj(504);
  const stateFromStoresObject1 = obj(504).useStateFromStoresObject(tmp8, O);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        if (closure_0) {
          tmp2 = closure_5;
          allExperimentOverrideDescriptors = closure_5.getAllExperimentOverrideDescriptors();
        } else {
          allExperimentOverrideDescriptors = closure_9;
        }
        return allExperimentOverrideDescriptors;
      }
    }
    const items2 = [ApexExperimentStore];
    cResult[6] = items2;
    const tmp12 = items2;
  } else {
    class O {
      constructor() {
        if (closure_0) {
          tmp2 = closure_5;
          allExperimentOverrideDescriptors = closure_5.getAllExperimentOverrideDescriptors();
        } else {
          allExperimentOverrideDescriptors = closure_9;
        }
        return allExperimentOverrideDescriptors;
      }
    }
  }
  if (cResult[7] !== tmp3) {
    class C {
      constructor() {
        if (closure_0) {
          tmp2 = closure_6;
          experimentsMetadata = closure_6.getExperimentsMetadata();
        } else {
          experimentsMetadata = closure_10;
        }
        return experimentsMetadata;
      }
    }
    cResult[7] = tmp3;
    cResult[8] = C;
  } else {
    class C {
      constructor() {
        if (closure_0) {
          tmp2 = closure_6;
          experimentsMetadata = closure_6.getExperimentsMetadata();
        } else {
          experimentsMetadata = closure_10;
        }
        return experimentsMetadata;
      }
    }
  }
  const objResult8 = obj(504);
  const stateFromStores = obj(504).useStateFromStores(tmp12, C);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        if (closure_0) {
          tmp2 = closure_6;
          experimentsMetadata = closure_6.getExperimentsMetadata();
        } else {
          experimentsMetadata = closure_10;
        }
        return experimentsMetadata;
      }
    }
    const items3 = [ApexExperimentStore];
    cResult[9] = items3;
    const tmp15 = items3;
  } else {
    class C {
      constructor() {
        if (closure_0) {
          tmp2 = closure_6;
          experimentsMetadata = closure_6.getExperimentsMetadata();
        } else {
          experimentsMetadata = closure_10;
        }
        return experimentsMetadata;
      }
    }
  }
  if (cResult[10] !== tmp3) {
    class C {
      constructor() {
        if (closure_0) {
          tmp2 = closure_6;
          experimentsMetadata = closure_6.getExperimentsMetadata();
        } else {
          experimentsMetadata = closure_10;
        }
        return experimentsMetadata;
      }
    }
    cResult[10] = tmp3;
    cResult[11] = tmp17;
  } else {
    class C {
      constructor() {
        if (closure_0) {
          tmp2 = closure_6;
          experimentsMetadata = closure_6.getExperimentsMetadata();
        } else {
          experimentsMetadata = closure_10;
        }
        return experimentsMetadata;
      }
    }
  }
  const objResult9 = obj(504);
  const stateFromStores1 = obj(504).useStateFromStores(tmp15, tmp17);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        if (closure_0) {
          tmp2 = closure_6;
          experimentsMetadata = closure_6.getExperimentsMetadata();
        } else {
          experimentsMetadata = closure_10;
        }
        return experimentsMetadata;
      }
    }
    const items4 = [ApexExperimentStore];
    cResult[12] = items4;
    const tmp19 = items4;
  } else {
    class C {
      constructor() {
        if (closure_0) {
          tmp2 = closure_6;
          experimentsMetadata = closure_6.getExperimentsMetadata();
        } else {
          experimentsMetadata = closure_10;
        }
        return experimentsMetadata;
      }
    }
  }
  if (cResult[13] !== tmp3) {
    class L {
      constructor() {
        if (closure_0) {
          tmp2 = closure_6;
          clientOverrides = closure_6.getClientOverrides();
        } else {
          clientOverrides = closure_12;
        }
        return clientOverrides;
      }
    }
    cResult[13] = tmp3;
    cResult[14] = L;
  } else {
    class L {
      constructor() {
        if (closure_0) {
          tmp2 = closure_6;
          clientOverrides = closure_6.getClientOverrides();
        } else {
          clientOverrides = closure_12;
        }
        return clientOverrides;
      }
    }
  }
  const objResult10 = obj(504);
  const stateFromStores2 = obj(504).useStateFromStores(tmp19, L);
  if (cResult[15] === stateFromStores2) {
    class L {
      constructor() {
        if (closure_0) {
          tmp2 = closure_6;
          clientOverrides = closure_6.getClientOverrides();
        } else {
          clientOverrides = closure_12;
        }
        return clientOverrides;
      }
    }
  }
  if (tmp3) {
    class L {
      constructor() {
        if (closure_0) {
          tmp2 = closure_6;
          clientOverrides = closure_6.getClientOverrides();
        } else {
          clientOverrides = closure_12;
        }
        return clientOverrides;
      }
    }
    tmp23[0] = obj(10673).parseRegisteredExperiments(stateFromStoresObject);
    const objResult12 = obj(10673);
    tmp23[1] = obj(10673).getLegacyOverridesInfo(stateFromStoresObject1);
    const objResult13 = obj(10673);
    tmp23[2] = obj(10674).mergeApexExperiments(stateFromStores, stateFromStores1);
    obj = obj(10674);
    apexExperimentOverridesInfo = obj.getApexExperimentOverridesInfo(stateFromStores2);
    tmp23[3] = apexExperimentOverridesInfo;
    const objResult14 = obj(10674);
  } else {
    class L {
      constructor() {
        if (closure_0) {
          tmp2 = closure_6;
          clientOverrides = closure_6.getClientOverrides();
        } else {
          clientOverrides = closure_12;
        }
        return clientOverrides;
      }
    }
  }
  cResult[15] = stateFromStores2;
  cResult[16] = stateFromStores;
  cResult[17] = stateFromStores1;
  cResult[18] = tmp3;
  cResult[19] = stateFromStoresObject1;
  cResult[20] = stateFromStoresObject;
  cResult[21] = tmp23;
  const objResult11 = obj(504);
}) : (function useCodedLinksExperimentEmbeds() {
  let tmp = closure_7();
  _require = tmp;
  const items = [stateFromStores2];
  stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    if (closure_0) {
      let registeredExperiments = ExperimentStore.getRegisteredExperiments();
    } else {
      registeredExperiments = closure_8;
    }
    return registeredExperiments;
  });
  let obj = require("initialize");
  const items1 = [stateFromStores2];
  const stateFromStoresObject1 = require("initialize").useStateFromStoresObject(items1, () => {
    if (closure_0) {
      let allExperimentOverrideDescriptors = ExperimentStore.getAllExperimentOverrideDescriptors();
    } else {
      allExperimentOverrideDescriptors = closure_9;
    }
    return allExperimentOverrideDescriptors;
  });
  let obj2 = require("initialize");
  const items2 = [ApexExperimentStore];
  const stateFromStores = require("initialize").useStateFromStores(items2, () => {
    if (closure_0) {
      let experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
    } else {
      experimentsMetadata = closure_10;
    }
    return experimentsMetadata;
  });
  let obj3 = require("initialize");
  const items3 = [ApexExperimentStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items3, () => {
    if (closure_0) {
      let registeredExperiments = ApexExperimentStore.getRegisteredExperiments();
    } else {
      registeredExperiments = closure_11;
    }
    return registeredExperiments;
  });
  let obj4 = require("initialize");
  const items4 = [ApexExperimentStore];
  stateFromStores2 = require("initialize").useStateFromStores(items4, () => {
    if (closure_0) {
      let clientOverrides = ApexExperimentStore.getClientOverrides();
    } else {
      clientOverrides = closure_12;
    }
    return clientOverrides;
  });
  const items5 = [tmp, stateFromStoresObject, stateFromStoresObject1, stateFromStores, stateFromStores1, stateFromStores2];
  return stateFromStores.useMemo(() => {
    if (closure_0) {
      const obj = { legacyExperiments: useLegacyExperiments.parseRegisteredExperiments(stateFromStoresObject), legacyOverridesInfo: null, apexExperiments: null, apexOverridesInfo: null };
      obj.legacyOverridesInfo = useLegacyExperiments.getLegacyOverridesInfo(stateFromStoresObject1);
      obj.apexExperiments = useApexExperiments.mergeApexExperiments(stateFromStores, stateFromStores1);
      obj.apexOverridesInfo = useApexExperiments.getApexExperimentOverridesInfo(stateFromStores2);
      let tmp = obj;
    } else {
      tmp = closure_13;
    }
    return tmp;
  }, items5);
});