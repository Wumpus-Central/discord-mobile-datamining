// === Module 11479: canSeeExperimentEmbeds ===

// Module 11479 (canSeeExperimentEmbeds)
import initialize from "initialize" /* 504 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "mergeGuildAvatar" /* 1371 */;
import closure_5 from "getHash" /* 4476 */;
import closure_6 from "initialize" /* 1236 */;

require = arg1;
let closure_7 = {};
let closure_8 = {};
let closure_9 = {};
let closure_10 = {};
let closure_11 = {};
let closure_12 = { legacyExperiments: {}, legacyOverridesInfo: {}, apexExperiments: {}, apexOverridesInfo: {} };
const result = require("set").fileFinishedImporting("modules/experiments/client_override_hooks/useCodedLinksExperimentEmbeds.tsx");

export const canSeeExperimentEmbeds = function canSeeExperimentEmbeds() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [closure_4];
    tmp = items;
  }
  const first = callback(tmp, 1)[0];
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
export const useCanSeeExperimentEmbeds = function useCanSeeExperimentEmbeds() {
  const items = [closure_4];
  return initialize.useStateFromStores(items, () => {
    const items = [stateFromStores2];
    const first = stateFromStoresObject1(items, 1)[0];
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
export const useCodedLinksExperimentEmbeds = function useCodedLinksExperimentEmbeds() {
  let items = [stateFromStores2];
  stateFromStores = stateFromStores(stateFromStoresObject[5]).useStateFromStores(items, () => {
    const items = [stateFromStores2];
    const first = stateFromStoresObject1(items, 1)[0];
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
  let obj = stateFromStores(stateFromStoresObject[5]);
  const items1 = [stateFromStores3];
  stateFromStoresObject = stateFromStores(stateFromStoresObject[5]).useStateFromStoresObject(items1, () => {
    if (stateFromStores) {
      let registeredExperiments = stateFromStores3.getRegisteredExperiments();
    } else {
      registeredExperiments = closure_1_7;
    }
    return registeredExperiments;
  });
  let obj2 = stateFromStores(stateFromStoresObject[5]);
  const items2 = [stateFromStores3];
  const stateFromStoresObject1 = stateFromStores(stateFromStoresObject[5]).useStateFromStoresObject(items2, () => {
    if (stateFromStores) {
      let allExperimentOverrideDescriptors = stateFromStores3.getAllExperimentOverrideDescriptors();
    } else {
      allExperimentOverrideDescriptors = closure_1_8;
    }
    return allExperimentOverrideDescriptors;
  });
  let obj3 = stateFromStores(stateFromStoresObject[5]);
  const items3 = [closure_6];
  const stateFromStores1 = stateFromStores(stateFromStoresObject[5]).useStateFromStores(items3, () => {
    if (stateFromStores) {
      let experimentsMetadata = closure_1_6.getExperimentsMetadata();
    } else {
      experimentsMetadata = closure_1_9;
    }
    return experimentsMetadata;
  });
  let obj4 = stateFromStores(stateFromStoresObject[5]);
  const items4 = [closure_6];
  stateFromStores2 = stateFromStores(stateFromStoresObject[5]).useStateFromStores(items4, () => {
    if (stateFromStores) {
      let registeredExperiments = closure_1_6.getRegisteredExperiments();
    } else {
      registeredExperiments = closure_1_10;
    }
    return registeredExperiments;
  });
  let obj5 = stateFromStores(stateFromStoresObject[5]);
  const items5 = [closure_6];
  stateFromStores3 = stateFromStores(stateFromStoresObject[5]).useStateFromStores(items5, () => {
    if (stateFromStores) {
      let clientOverrides = closure_1_6.getClientOverrides();
    } else {
      clientOverrides = closure_1_11;
    }
    return clientOverrides;
  });
  const items6 = [stateFromStores, stateFromStoresObject, stateFromStoresObject1, stateFromStores1, stateFromStores2, stateFromStores3];
  return stateFromStores1.useMemo(() => {
    if (stateFromStores) {
      const obj = { legacyExperiments: null, legacyOverridesInfo: null, apexExperiments: null, apexOverridesInfo: null };
      obj[0] = stateFromStores(stateFromStoresObject[6]).parseRegisteredExperiments(stateFromStoresObject);
      const obj2 = stateFromStores(stateFromStoresObject[6]);
      obj[1] = stateFromStores(stateFromStoresObject[6]).getLegacyOverridesInfo(stateFromStoresObject1);
      const obj3 = stateFromStores(stateFromStoresObject[6]);
      obj[2] = stateFromStores(stateFromStoresObject[7]).mergeApexExperiments(stateFromStores1, stateFromStores2);
      const obj4 = stateFromStores(stateFromStoresObject[7]);
      obj[3] = stateFromStores(stateFromStoresObject[7]).getApexExperimentOverridesInfo(stateFromStores3);
      let tmp = obj;
      const obj5 = stateFromStores(stateFromStoresObject[7]);
    } else {
      tmp = closure_1_12;
    }
    return tmp;
  }, items6);
};